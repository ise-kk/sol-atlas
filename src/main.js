import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { state, latLonIn, sceneToGalacticMatrix, eqjToScene, A, PLANETS, BODY, orbitPath, moonPath } from './ephem.js';
import * as S from './shaders.js';
import { T, FACTS } from './i18n.js';
import { CONS } from './cons.js';

// ---------- constants (1 scene unit = 1000 km) ----------
const R_EARTH = 6.378137, F_EARTH = 1 - 1 / 298.257223563;
const R_ATMO = 6.378137 + 0.1;
const R_MOON = 1.7374;
const R_SUN = 695.7;
const SKY_R = 4e6;
const C_KM = 299792.458;
const ZENITH_URL = 'https://ise-kk.github.io/zenith/';

// photometric setup per planet (textures: Solar System Scope, CC BY 4.0)
const PL = {
  mercury: { r: 2.4405, f: 0, model: 0, gain: 0.62, k: 1, wrap: 0, haze: [0, 0, 0], hz: 0, hi: [4] },
  venus: { r: 6.0518, f: 0, model: 1, gain: 0.78, k: 0.62, wrap: 0.06, haze: [1.0, 0.93, 0.78], hz: 0.035, hi: [4], clouds: 4.0 },
  mars: { r: 3.3962, f: 0.00589, model: 1, gain: 0.95, k: 0.86, wrap: 0.02, haze: [0.55, 0.62, 0.85], hz: 0.05, hi: [4, 8] },
  jupiter: { r: 71.492, f: 0.06487, model: 1, gain: 1.0, k: 0.82, wrap: 0.03, haze: [0.7, 0.72, 0.8], hz: 0.05, hi: [4] },
  saturn: { r: 60.268, f: 0.09796, model: 1, gain: 1.0, k: 0.82, wrap: 0.03, haze: [0.8, 0.75, 0.6], hz: 0.04, hi: [4], ring: [73.9, 140.0] },
  uranus: { r: 25.559, f: 0.02293, model: 1, gain: 1.0, k: 0.9, wrap: 0.03, haze: [0.7, 0.9, 0.95], hz: 0.015, hi: [] },
  neptune: { r: 24.764, f: 0.0171, model: 1, gain: 1.0, k: 0.9, wrap: 0.03, haze: [0.6, 0.8, 0.95], hz: 0.015, hi: [] },
};
const RADIUS = { sun: R_SUN, earth: R_EARTH, moon: R_MOON, ...Object.fromEntries(PLANETS.map(k => [k, PL[k].r])) };
const ALL = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

// ---------- renderer ----------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
const isMobile = matchMedia('(pointer: coarse)').matches || innerWidth < 720;
renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.AgXToneMapping;
renderer.toneMappingExposure = 1.0;
const maxAniso = renderer.capabilities.getMaxAnisotropy();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1e-4, 1e9);
camera.position.set(0, 0, 60);

// Floating origin: the orbit target always sits at the render origin. World (geocentric, float64)
// positions are shifted by W.target before they reach the GPU, so Neptune is as steady as the Moon.
const W = { target: new THREE.Vector3() };
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.rotateSpeed = 0.5;
controls.zoomSpeed = 0.9;
controls.enablePan = false;

const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: isMobile ? 2 : 4 }));
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.6, 0.55, 2.2);
if (isMobile) { const bs = bloom.setSize.bind(bloom); bloom.setSize = (w, h) => bs(Math.round(w / 2), Math.round(h / 2)); }  // glow at half resolution on phones
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ---------- textures ----------
const loader = new THREE.TextureLoader();
const manager = { total: 0, done: 0 };
const loadingEl = document.getElementById('loading');
const barEl = document.getElementById('loadbar');
const ASSET = (window.__SOL_ASSETS = window.__SOL_ASSETS || {});
function tex(url, srgb = true, count = true) {
  if (count) manager.total++;
  const src = ASSET[url] || url;
  return new Promise(res => {
    let settled = false;
    const finish = (t) => {
      if (settled) return; settled = true;
      if (count) { manager.done++; barEl.style.transform = `scaleX(${manager.done / Math.max(manager.total, 1)})`; }
      res(t);
    };
    setTimeout(() => finish(null), 60000);
    loader.load(src, t => {
      t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      t.anisotropy = maxAniso;
      t.wrapS = THREE.RepeatWrapping;
      finish(t);
    }, undefined, () => finish(null));
  });
}
function showError(msg) {
  const el = document.querySelector('#loading span');
  if (el) el.textContent = msg;
  loadingEl.dataset.error = 'true';
}
addEventListener('error', e => { if (loadingEl.dataset.done !== 'true') showError('読み込みに失敗しました / Failed to start: ' + (e.message || '')); });
addEventListener('unhandledrejection', e => { if (loadingEl.dataset.done !== 'true') showError('読み込みに失敗しました / Failed to start: ' + ((e.reason && e.reason.message) || e.reason || '')); });

// ---------- sky: Milky Way glow + HYG stars ----------
const skyGroup = new THREE.Group();
scene.add(skyGroup);
const galM = sceneToGalacticMatrix();
const skyMat = new THREE.ShaderMaterial({
  uniforms: { uMap: { value: null }, uGal: { value: new THREE.Matrix3().set(...galM[0], ...galM[1], ...galM[2]) }, uI: { value: 0.55 } },
  vertexShader: S.skyVert, fragmentShader: S.skyFrag, side: THREE.BackSide, depthWrite: false,
});
const sky = new THREE.Mesh(new THREE.SphereGeometry(SKY_R, 64, 32), skyMat);
sky.renderOrder = -20;
skyGroup.add(sky);

function bvToRgb(bv) {
  const t = 4600 * (1 / (0.92 * bv + 1.7) + 1 / (0.92 * bv + 0.62));
  const k = t / 100;
  let r, g, b;
  if (k <= 66) { r = 255; g = 99.4708 * Math.log(k) - 161.1196; b = k <= 19 ? 0 : 138.5177 * Math.log(k - 10) - 305.0448; }
  else { r = 329.699 * Math.pow(k - 60, -0.1332); g = 288.1222 * Math.pow(k - 60, -0.0755); b = 255; }
  const c = [r, g, b].map(v => Math.min(255, Math.max(0, v)) / 255);
  const m = (c[0] + c[1] + c[2]) / 3;
  return c.map(v => (m + (v - m) * 0.75) / Math.max(m, 0.3));
}
const starMat = new THREE.ShaderMaterial({
  uniforms: { uScale: { value: renderer.getPixelRatio() }, uK: { value: 84 } },
  vertexShader: S.starVert, fragmentShader: S.starFrag,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
});
async function loadStars() {
  // stars.bin: 6 bytes per star (little endian) — RA u16 (360°/65536), Dec i16 (90°/32767), mag u8 ((m+2)·25), B−V u8 ((bv+0.5)·80).
  // Rounding stays below 10″ and 0.02 mag — far under a pixel.
  const dv = new DataView(await (await fetch('stars.bin')).arrayBuffer());
  const n = dv.byteLength / 6;
  const star = (i) => [dv.getUint16(i * 6, true) / 65536 * 360, dv.getInt16(i * 6 + 2, true) / 32767 * 90, dv.getUint8(i * 6 + 4) / 25 - 2, dv.getUint8(i * 6 + 5) / 80 - 0.5];
  const pos = new Float32Array(n * 3), mag = new Float32Array(n), col = new Float32Array(n * 3);
  const r = SKY_R * 0.9;
  for (let i = 0; i < n; i++) {
    const [raD, decD, m, bv] = star(i);
    const ra = raD * Math.PI / 180, dec = decD * Math.PI / 180;
    const v = eqjToScene(Math.cos(dec) * Math.cos(ra), Math.cos(dec) * Math.sin(ra), Math.sin(dec));
    pos.set([v[0] * r, v[1] * r, v[2] * r], i * 3);
    mag[i] = m;
    col.set(bvToRgb(bv), i * 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aMag', new THREE.BufferAttribute(mag, 1));
  g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
  const pts = new THREE.Points(g, starMat);
  pts.frustumCulled = false;
  pts.renderOrder = -10;
  skyGroup.add(pts);
  return n;
}

// ---------- Earth ----------
const earthUniforms = {
  uDay: { value: null }, uNight: { value: null }, uClouds: { value: null }, uNormal: { value: null }, uSpec: { value: null },
  uSunDir: { value: new THREE.Vector3(1, 0, 0) }, uNorth: { value: new THREE.Vector3(0, 1, 0) },
  uSunI: { value: 2.1 }, uNightI: { value: 1.4 }, uCloudI: { value: 0.9 },
};
const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 256, 128),
  new THREE.ShaderMaterial({ uniforms: earthUniforms, vertexShader: S.commonVert, fragmentShader: S.earthFrag }));
earth.matrixAutoUpdate = false;
earth.frustumCulled = false;
scene.add(earth);

const atmoUniforms = { uSunDir: earthUniforms.uSunDir, uCenter: { value: new THREE.Vector3() }, uRp: { value: R_EARTH }, uRa: { value: R_ATMO }, uSunI: { value: 9.0 } };
const atmo = new THREE.Mesh(new THREE.SphereGeometry(R_ATMO, 192, 96),
  new THREE.ShaderMaterial({
    uniforms: atmoUniforms, vertexShader: S.commonVert, fragmentShader: S.atmoFrag,
    transparent: true, depthWrite: false, blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor, side: THREE.FrontSide,
  }));
atmo.renderOrder = 5;
atmo.frustumCulled = false;
scene.add(atmo);

// ---------- Moon ----------
const moonUniforms = { uMap: { value: null }, uSunDir: { value: new THREE.Vector3() }, uEarthDir: { value: new THREE.Vector3() }, uSunI: { value: 3.2 }, uEarthshine: { value: 0.01 } };
const moon = new THREE.Mesh(new THREE.SphereGeometry(1, 192, 96),
  new THREE.ShaderMaterial({ uniforms: moonUniforms, vertexShader: S.commonVert, fragmentShader: S.moonFrag }));
moon.matrixAutoUpdate = false;
moon.frustumCulled = false;
scene.add(moon);

// ---------- planets ----------
const ringTex = { value: null };
const planets = {};
for (const k of PLANETS) {
  const p = PL[k];
  const u = {
    uMap: { value: null }, uRingTex: ringTex, uSunPos: { value: new THREE.Vector3() }, uSunI: { value: 2.0 }, uGain: { value: p.gain },
    uModel: { value: p.model }, uK: { value: p.k }, uWrap: { value: p.wrap }, uHaze: { value: new THREE.Vector3(...p.haze) }, uHazeI: { value: p.hz },
    uUOff: { value: 0 }, uRing: { value: p.ring ? 1 : 0 }, uRingC: { value: new THREE.Vector3() }, uRingN: { value: new THREE.Vector3(0, 1, 0) },
    uRingR: { value: new THREE.Vector2(...(p.ring || [0, 1])) },
  };
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 160, 80),
    new THREE.ShaderMaterial({ uniforms: u, vertexShader: S.commonVert, fragmentShader: S.planetFrag }));
  mesh.matrixAutoUpdate = false; mesh.frustumCulled = false; mesh.visible = false;
  scene.add(mesh);
  const entry = { mesh, u, res: 0 };
  if (p.ring) {
    const ru = {
      uRingTex: ringTex, uRingR: { value: new THREE.Vector2(...p.ring) }, uSunPos: u.uSunPos, uSunI: { value: 2.0 },
      uC: { value: new THREE.Vector3() }, uN: { value: new THREE.Vector3() }, uRp: { value: p.r }, uFlat: { value: p.f }, uScale: { value: 1 },
    };
    const ring = new THREE.Mesh(new THREE.RingGeometry(p.ring[0], p.ring[1], 360, 1),
      new THREE.ShaderMaterial({
        uniforms: ru, vertexShader: S.ringVert, fragmentShader: S.ringFrag, side: THREE.DoubleSide,
        transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      }));
    ring.matrixAutoUpdate = false; ring.frustumCulled = false; ring.visible = false; ring.renderOrder = 6;
    scene.add(ring);
    entry.ring = ring; entry.ru = ru;
  }
  planets[k] = entry;
}
// sense of surface rotation vs. east (Venus: retrograde) for the cloud super-rotation
let venusSense = -1;

// ---------- Sun ----------
const sunUniforms = { uTime: { value: 0 }, uI: { value: 40 } };
const sun = new THREE.Mesh(new THREE.SphereGeometry(R_SUN, 128, 64),
  new THREE.ShaderMaterial({ uniforms: sunUniforms, vertexShader: S.commonVert, fragmentShader: S.sunFrag }));
sun.frustumCulled = false;
scene.add(sun);
const glareUniforms = { uI: { value: 1.0 }, uCore: { value: 1 }, uSpike: { value: 1 } };
const glare = new THREE.Mesh(new THREE.PlaneGeometry(2, 2),
  new THREE.ShaderMaterial({ uniforms: glareUniforms, vertexShader: S.glareVert, fragmentShader: S.glareFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
glare.renderOrder = 10;
glare.frustumCulled = false;
scene.add(glare);

// ---------- orbits ----------
const orbitGroup = new THREE.Group();
scene.add(orbitGroup);
const orbits = {};
let orbitEpoch = null;
function buildOrbits() {
  const d = new Date(sim.t);
  for (const k of [...PLANETS, 'earth']) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(orbitPath(k, d), 3));
    if (orbits[k]) { orbits[k].geometry.dispose(); orbits[k].geometry = g; continue; }
    const m = new THREE.LineBasicMaterial({ color: 0x8ea4c8, transparent: true, opacity: 0, depthWrite: false });
    const line = new THREE.Line(g, m);
    line.frustumCulled = false;
    orbitGroup.add(line);
    orbits[k] = line;
  }
  orbitEpoch = sim.t;
}
let moonOrbit = null, moonEpoch = null;
function buildMoonOrbit() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(moonPath(new Date(sim.t)), 3));
  if (moonOrbit) { moonOrbit.geometry.dispose(); moonOrbit.geometry = g; }
  else {
    moonOrbit = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0x8ea4c8, transparent: true, opacity: 0, depthWrite: false }));
    moonOrbit.frustumCulled = false;
    scene.add(moonOrbit);
  }
  moonEpoch = sim.t;
}

// ---------- time ----------
const RATES = [1, 60, 3600, 86400, 604800];
const sim = { t: Date.now(), rate: 1, dir: 1, paused: false, live: true };
let st = state(new Date(sim.t));

const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
function worldPos(k) {
  if (k === 'earth' || k === 'earthmoon') return new THREE.Vector3();
  if (k === 'sun' || k === 'system' || k === 'inner') return v3(st.sun);
  return v3(st.pos[k]);
}
const rel = (w) => w.clone().sub(W.target);
function basis(f, r, flat = 1, pos) {
  const m = new THREE.Matrix4().makeBasis(v3(f.P), v3(f.N), v3(f.Z));
  m.scale(new THREE.Vector3(r, r * flat, r));
  if (pos) m.setPosition(pos);
  return m;
}

function updateBodies() {
  st = state(new Date(sim.t));
  const sunR = rel(v3(st.sun)), moonW = v3(st.moon), earthR = rel(new THREE.Vector3());
  earth.matrix.copy(basis(st.earthFrame, R_EARTH, F_EARTH, earthR)); earth.matrixWorldNeedsUpdate = true;
  atmo.position.copy(earthR);
  atmoUniforms.uCenter.value.copy(earthR);
  earthUniforms.uSunDir.value.copy(v3(st.sun)).normalize();
  earthUniforms.uNorth.value.set(...st.earthFrame.N);
  moon.matrix.copy(basis(st.moonFrame, R_MOON, 1, rel(moonW))); moon.matrixWorldNeedsUpdate = true;
  moonUniforms.uSunDir.value.copy(v3(st.sun)).sub(moonW).normalize();
  moonUniforms.uEarthDir.value.copy(moonW).negate().normalize();
  const phaseE = moonUniforms.uSunDir.value.dot(moonUniforms.uEarthDir.value);
  moonUniforms.uEarthshine.value = 0.012 * (1 - phaseE) / 2 + 0.0005;
  sun.position.copy(sunR);
  glare.position.copy(sunR);
  const days = (sim.t - 946728000000) / 864e5;
  for (const k of PLANETS) {
    const p = PL[k], e = planets[k], f = st.frame[k];
    const pr = rel(v3(st.pos[k]));
    e.mesh.matrix.copy(basis(f, p.r, 1 - p.f, pr)); e.mesh.matrixWorldNeedsUpdate = true;
    e.u.uSunPos.value.copy(sunR);
    if (p.clouds) {
      const relRate = 1 / p.clouds - 1 / 243.0226;
      e.u.uUOff.value = -venusSense * ((days * relRate) % 1);
    }
    if (e.ring) {
      const N = v3(f.N), P = v3(f.P), Z = v3(f.Z).negate();
      const m = new THREE.Matrix4().makeBasis(P, Z, N); m.setPosition(pr);
      e.ring.matrix.copy(m); e.ring.matrixWorldNeedsUpdate = true;
      e.ru.uC.value.copy(pr); e.ru.uN.value.copy(N);
      e.u.uRingC.value.copy(pr); e.u.uRingN.value.copy(N);
    }
  }
  if (orbitEpoch === null || Math.abs(sim.t - orbitEpoch) > 20 * 365.25 * 864e5) buildOrbits();
  if (moonEpoch === null || Math.abs(sim.t - moonEpoch) > 2 * 864e5) buildMoonOrbit();
  orbitGroup.position.copy(sunR);
  moonOrbit.position.copy(earthR);
}

// ---------- focus & camera flight ----------
const HOME = { sun: 2600, earth: 22, moon: 7.5, earthmoon: 1100, system: 1.25e7, inner: 7.2e5 };
for (const k of PLANETS) HOME[k] = PL[k].ring ? PL[k].ring[1] * 2.7 : PL[k].r * 3.5;
const FIT = { system: 4.6e6, inner: 2.5e5 };
let focus = 'earth';
let flight = null;

function arrivalDir(key) {
  if (key === 'system' || key === 'inner') return new THREE.Vector3(0.25, 0.62, 0.74).normalize();
  if (key === 'earthmoon') {
    const m = v3(st.moon).normalize();
    return new THREE.Vector3(0, 1, 0).multiplyScalar(0.55).add(m.clone().cross(new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(0.8)).normalize();
  }
  const target = worldPos(key);
  if (key === 'sun') {
    const d = camera.position.clone().normalize();
    return d.lengthSq() > 0 ? d : new THREE.Vector3(0, 0.3, 1).normalize();
  }
  // arrive on the lit side, a little off the Sun line
  const toSun = v3(st.sun).sub(target).normalize();
  const side = new THREE.Vector3(0, 1, 0).cross(toSun).normalize();
  let dir = toSun.clone().multiplyScalar(0.62).add(side.multiplyScalar(0.78)).add(new THREE.Vector3(0, 0.2, 0));
  if (PL[key] && PL[key].ring) {
    const N = v3(st.frame[key].N);
    const s = Math.sign(N.dot(toSun)) || 1;
    dir.add(N.multiplyScalar(0.45 * s));
  }
  return dir.normalize();
}

function flyTo(key, opts = {}) {
  if (!(key in HOME)) return;
  focus = key;
  const toW = worldPos(key);
  const fromOff = camera.position.clone();
  const sep = toW.distanceTo(W.target);
  let dist = opts.dist || HOME[key];
  if (FIT[key]) dist = FIT[key] / Math.tan(camera.fov * Math.PI / 360) / Math.min(1, camera.aspect) * 1.08;
  else dist *= Math.max(1, (innerWidth > 900 ? 1.25 : 0.85) / camera.aspect);
  const d0 = Math.max(fromOff.length(), 1e-3);
  const far = sep > 3 * Math.max(d0, dist);
  const dur = opts.dur || (far ? Math.min(5200, 2600 + 700 * Math.log10(sep / Math.max(d0, dist))) : 2400);
  flight = { t0: performance.now(), dur, fromTarget: W.target.clone(), fromOff, dir: arrivalDir(key), dist, key, sep, far, d0 };
  const r = RADIUS[key] || RADIUS.earth;
  controls.minDistance = key in RADIUS ? (PL[key] && PL[key].ring ? r * 1.15 : r * 1.08) : R_ATMO * 1.08;
  controls.maxDistance = key === 'sun' ? 2e5 : (key === 'system' || key === 'inner') ? 3e7 : key === 'earthmoon' ? 2e4 : Math.max(r * 400, 3e3);
  setActiveChip(key);
  renderInfo(true);
  ensureHiRes(key);
  sheetTo && sheetTo('peek');
}
const ease = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const smooth = (a, b, x) => { const t = Math.min(Math.max((x - a) / (b - a), 0), 1); return t * t * (3 - 2 * t); };
function logLerp(a, b, t) { return Math.exp(Math.log(a) + (Math.log(b) - Math.log(a)) * t); }
const qTmp = new THREE.Quaternion();

function updateCamera(now) {
  const target = worldPos(focus);
  if (flight) {
    const k = Math.min((now - flight.t0) / flight.dur, 1);
    const e = ease(k);
    let d, eT;
    if (flight.far) {
      // pull back until both ends fit, cross, then close in
      const dm = Math.max(flight.sep * 0.9, flight.d0, flight.dist);
      d = k < 0.5 ? logLerp(flight.d0, dm, ease(k * 2)) : logLerp(dm, flight.dist, ease(k * 2 - 1));
      eT = smooth(0.18, 0.82, k);
    } else {
      d = logLerp(flight.d0, flight.dist, e);
      eT = e;
    }
    W.target.copy(flight.fromTarget).lerp(target, eT);
    const dir0 = flight.fromOff.clone().normalize();
    qTmp.setFromUnitVectors(dir0, flight.dir);
    const q = new THREE.Quaternion().slerp(qTmp, e);
    camera.position.copy(dir0.applyQuaternion(q).multiplyScalar(d));
    if (k >= 1) { flight = null; W.target.copy(target); }
  } else {
    W.target.copy(target);
  }
  controls.target.set(0, 0, 0);
}

// ---------- picking ----------
const ray = new THREE.Raycaster();
let downAt = null;
canvas.addEventListener('pointerdown', e => { downAt = [e.clientX, e.clientY]; interrupted(); });
canvas.addEventListener('pointerup', e => {
  if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 5) return;
  const ndc = new THREE.Vector2(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  let best = null;
  for (const k of ALL) {
    const s = new THREE.Sphere(rel(worldPos(k)), RADIUS[k]);
    const p = ray.ray.intersectSphere(s, new THREE.Vector3());
    if (p) { const d = p.distanceTo(camera.position); if (!best || d < best[1]) best = [k, d]; }
  }
  if (best && best[0] !== focus) flyTo(best[0]);
});
canvas.addEventListener('wheel', interrupted, { passive: true });

// ---------- labels ----------
const labels = {};
const PRIORITY = ['sun', 'earth', 'jupiter', 'saturn', 'mars', 'venus', 'mercury', 'uranus', 'neptune', 'moon'];
for (const k of ALL) {
  const el = document.createElement('button');
  el.className = 'label'; el.type = 'button';
  el.dataset.key = k;
  el.innerHTML = '<i></i><span></span>';
  el.addEventListener('click', () => flyTo(k));
  document.getElementById('labels').appendChild(el);
  labels[k] = el;
}
function updateLabels() {
  const w = innerWidth, h = innerHeight;
  const placed = [];
  const tanH = Math.tan(camera.fov * Math.PI / 360);
  const overview = focus === 'system' || focus === 'inner';
  const fk = focus === 'earthmoon' ? null : overview ? 'sun' : focus;
  const occ = fk ? new THREE.Sphere(rel(worldPos(fk)), RADIUS[fk]) : null;
  for (const k of PRIORITY) {
    const el = labels[k];
    const p = rel(worldPos(k));
    const dist = p.distanceTo(camera.position);
    const px = RADIUS[k] / dist / tanH * h / 2;
    const s = p.clone().project(camera);
    const front = p.clone().applyMatrix4(camera.matrixWorldInverse).z < 0;
    let vis = front && s.z < 1 && Math.abs(s.x) < 1.05 && Math.abs(s.y) < 1.05 && k !== focus;
    if (focus === 'earthmoon' && k === 'earth') vis = front;
    if (overview && k === 'moon') vis = false;
    if (vis && occ) {
      const dirv = p.clone().sub(camera.position); const len = dirv.length(); dirv.divideScalar(len);
      const hit = new THREE.Ray(camera.position, dirv).intersectSphere(occ, new THREE.Vector3());
      if (hit && hit.distanceTo(camera.position) < len) vis = false;
    }
    const x = (s.x + 1) / 2 * w, y = (1 - s.y) / 2 * h;
    if (vis) {
      const box = [x - 44, y - 6, x + 44, y + Math.max(px, 3) + 28];
      if (placed.some(b => box[0] < b[2] && box[2] > b[0] && box[1] < b[3] && box[3] > b[1])) vis = false;
      else placed.push(box);
    }
    el.hidden = !vis;
    if (vis) {
      el.lastChild.textContent = T(k);
      el.classList.toggle('dot', px < 3);
      el.classList.toggle('dim', !overview && focus !== 'earthmoon');
      el.style.transform = `translate(${x}px, ${y + (px < 3 ? -4 : Math.max(px, 4) + 6)}px) translateX(-50%)`;
    }
  }
}

// ---------- UI ----------
const $ = (id) => document.getElementById(id);
let lang = 'ja';
try { lang = localStorage.getItem('sol.lang') || 'ja'; } catch (e) { }
document.documentElement.lang = lang;

const RAIL = [['cap', 'groupAll'], ['system', '0'], ['inner', '9'], ['cap', 'groupBodies'], ['sun', 'S'], ['mercury', '1'], ['venus', '2'], ['earth', '3'], ['moon', 'M'], ['mars', '4'], ['jupiter', '5'], ['saturn', '6'], ['uranus', '7'], ['neptune', '8'], ['earthmoon', 'E']];
const rail = $('rail');
for (const [k, key] of RAIL) {
  if (k === 'cap') { const c = document.createElement('span'); c.className = 'cap'; c.dataset.t = key; rail.appendChild(c); continue; }
  const b = document.createElement('button');
  b.type = 'button'; b.dataset.focus = k; b.setAttribute('aria-pressed', 'false');
  b.innerHTML = `<span class="k">${key}</span><span class="tick"></span><span data-t="${k}"></span>`;
  b.addEventListener('click', () => flyTo(k));
  rail.appendChild(b);
}
function setActiveChip(k) {
  document.querySelectorAll('[data-focus]').forEach(b => {
    const on = b.dataset.focus === k;
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (on && isMobile) b.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  });
}

$('lang').addEventListener('click', () => {
  lang = lang === 'ja' ? 'en' : 'ja';
  document.documentElement.lang = lang;
  try { localStorage.setItem('sol.lang', lang); } catch (e) { }
  applyStatic(); eventCache.key = ''; renderInfo(true);
});
function applyStatic() {
  T('sun', lang);
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = T(el.dataset.t, lang); });
  $('lang').textContent = lang === 'ja' ? 'EN' : '日本語';
}
function setRate(i) {
  sim.rate = RATES[i];
  sim.paused = false;
  document.querySelectorAll('[data-rate]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.rate === i)));
  $('pause').setAttribute('aria-pressed', 'false');
}
document.querySelectorAll('[data-rate]').forEach(b => b.addEventListener('click', () => { setRate(+b.dataset.rate); sim.live = false; }));
$('pause').addEventListener('click', () => { sim.paused = !sim.paused; sim.live = false; $('pause').setAttribute('aria-pressed', String(sim.paused)); });
$('reverse').addEventListener('click', () => { sim.dir *= -1; sim.live = false; $('reverse').setAttribute('aria-pressed', String(sim.dir < 0)); });
$('now').addEventListener('click', goLive);
function goLive() {
  sim.t = Date.now(); sim.dir = 1; sim.live = true; setRate(0);
  $('reverse').setAttribute('aria-pressed', 'false');
  renderInfo(true);
}
$('when').addEventListener('change', e => {
  const v = e.target.value; if (!v) return;
  const d = new Date(v); if (!isNaN(d)) { sim.t = d.getTime(); sim.live = false; sim.paused = true; $('pause').setAttribute('aria-pressed', 'true'); renderInfo(true); }
});
addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  const k = e.key.toUpperCase();
  const hit = RAIL.find(([b, key]) => b !== 'cap' && key === k);
  if (hit) flyTo(hit[0]);
  if (e.key === ' ') { e.preventDefault(); $('pause').click(); }
});

// ---------- bottom sheet (phones) ----------
const PHONE = matchMedia('(max-width: 900px)');
const panel = $('panel'), grip = $('grip');
let sheetState = 'peek', sheetDrag = null;
function sheetStops() {
  const H = panel.getBoundingClientRect().height;
  const peekH = grip.getBoundingClientRect().height + (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sab')) || 0);
  return { peek: H - peekH, half: Math.max(0, H - innerHeight * 0.52), full: 0 };
}
function sheetTo(state, animate = true) {
  if (!PHONE.matches) { panel.style.transform = ''; return; }
  sheetState = state;
  panel.classList.toggle('anim', animate);
  panel.style.transform = `translateY(${sheetStops()[state]}px)`;
  panel.dataset.state = state;
  grip.setAttribute('aria-expanded', String(state !== 'peek'));
}
grip.addEventListener('pointerdown', e => {
  if (!PHONE.matches) return;
  sheetDrag = { y0: e.clientY, t0: performance.now(), base: sheetStops()[sheetState], last: e.clientY, lt: performance.now(), v: 0 };
  grip.setPointerCapture(e.pointerId);
  panel.classList.remove('anim');
});
grip.addEventListener('pointermove', e => {
  if (!sheetDrag) return;
  const s = sheetStops();
  const y = Math.min(Math.max(sheetDrag.base + e.clientY - sheetDrag.y0, s.full), s.peek);
  const now = performance.now();
  sheetDrag.v = (e.clientY - sheetDrag.last) / Math.max(now - sheetDrag.lt, 1);
  sheetDrag.last = e.clientY; sheetDrag.lt = now;
  panel.style.transform = `translateY(${y}px)`;
});
grip.addEventListener('pointerup', e => {
  if (!sheetDrag) return;
  const moved = Math.abs(e.clientY - sheetDrag.y0);
  const s = sheetStops();
  const y = Math.min(Math.max(sheetDrag.base + e.clientY - sheetDrag.y0, s.full), s.peek);
  const v = sheetDrag.v;
  sheetDrag = null;
  if (moved < 6) { sheetTo(sheetState === 'peek' ? 'half' : 'peek'); return; }
  if (v < -0.6) { sheetTo(sheetState === 'peek' ? 'half' : 'full'); return; }
  if (v > 0.6) { sheetTo(sheetState === 'full' ? 'half' : 'peek'); return; }
  const near = Object.entries(s).sort((a, b) => Math.abs(a[1] - y) - Math.abs(b[1] - y))[0][0];
  sheetTo(near);
});
grip.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sheetTo(sheetState === 'peek' ? 'half' : 'peek'); } });
addEventListener('resize', () => sheetTo(sheetState, false));

// ---------- info panel ----------
const fmt = (n, d = 0) => n.toLocaleString(lang === 'ja' ? 'ja-JP' : 'en-US', { maximumFractionDigits: d, minimumFractionDigits: d });
function dms(v, pos, neg) { const a = Math.abs(v); return `${a.toFixed(2)}°${v >= 0 ? pos : neg}`; }
function fmtDate(t, tz) {
  return new Intl.DateTimeFormat(lang === 'ja' ? 'ja-JP' : 'en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: tz }).format(new Date(t));
}
function fmtKm(km) {
  if (lang === 'ja') {
    if (km >= 1e8) return `${fmt(km / 1e8, km >= 1e9 ? 1 : 2)}<small>億km</small>`;
    if (km >= 1e4) return `${fmt(km / 1e4, 0)}<small>万km</small>`;
    return `${fmt(km, 0)}<small>km</small>`;
  }
  if (km >= 1e6) return `${fmt(km / 1e6, km >= 1e9 ? 0 : 1)}<small>M km</small>`;
  return `${fmt(km, 0)}<small>km</small>`;
}
function fmtLight(sec) {
  if (sec >= 3600) return `${Math.floor(sec / 3600)}<small>${T('hr')}</small> ${Math.floor(sec % 3600 / 60)}<small>${T('min')}</small>`;
  return `${Math.floor(sec / 60)}<small>${T('min')}</small> ${fmt(sec % 60, 0)}<small>${T('sec')}</small>`;
}
function phaseName(deg) { return T('phases')[Math.round(deg / 45) % 8]; }
const SUPERIOR = ['mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

let eventCache = { key: '', html: '' };
function evRow(label, date, what) { return [label, date, what]; }
function planetEvents(k, t) {
  const b = BODY[k], rows = [];
  if (SUPERIOR.includes(k)) {
    const opp = A.SearchRelativeLongitude(b, 0, t);
    rows.push(evRow(T('nextOpp'), opp.date, T('bestView')));
    const conj = A.SearchRelativeLongitude(b, 180, t);
    rows.push(evRow(T('nextConj'), conj.date, T('hidden')));
  } else {
    const el = A.SearchMaxElongation(b, t);
    rows.push(evRow(T('nextElong'), el.time.date, `${fmt(el.elongation, 1)}° ${el.visibility === 'evening' ? T('east') : T('west')}`));
    if (k === 'venus') { const pk = A.SearchPeakMagnitude(b, t); rows.push(evRow(T('nextPeak'), pk.time.date, `${fmt(pk.mag, 1)} ${T('magU')}`)); }
    const inf = A.SearchRelativeLongitude(b, 0, t);
    rows.push(evRow(T('nextInfConj'), inf.date, T('hidden')));
  }
  const ap = A.SearchPlanetApsis(b, t);
  rows.push(evRow(ap.kind === 0 ? T('nextPeri') : T('nextAph'), ap.time.date, `${fmt(ap.dist_au, 3)} AU`));
  return rows;
}
function events(key) {
  const day = Math.floor(sim.t / 864e5);
  const ck = key + day + lang;
  if (eventCache.key === ck) return eventCache.html;
  const t = A.MakeTime(new Date(sim.t));
  let rows = [];
  try {
    if (key === 'moon' || key === 'earth') {
      const le = A.SearchLunarEclipse(t);
      rows.push([T('nextLunar'), le.peak.date, T('ecl_' + le.kind)]);
      const q = A.SearchMoonQuarter(t);
      rows.push([T('nextQuarter'), q.time.date, T('phases')[q.quarter * 2]]);
    }
    if (key === 'sun' || key === 'earth') {
      const se = A.SearchGlobalSolarEclipse(t);
      rows.push([T('nextSolar'), se.peak.date, T('ecl_' + se.kind)]);
      const y = new Date(sim.t).getUTCFullYear();
      const cand = [];
      for (const yy of [y, y + 1]) { const s = A.Seasons(yy); cand.push([s.mar_equinox, 'marEq'], [s.jun_solstice, 'junSol'], [s.sep_equinox, 'sepEq'], [s.dec_solstice, 'decSol']); }
      const nx = cand.find(([tt]) => tt.date.getTime() > sim.t);
      rows.push([T('nextSeason'), nx[0].date, T(nx[1])]);
    }
    if (PLANETS.includes(key)) rows = planetEvents(key, t);
    if (key === 'system' || key === 'inner') {
      const list = key === 'inner' ? ['mercury', 'venus', 'mars'] : PLANETS;
      for (const k of list) {
        if (SUPERIOR.includes(k)) rows.push([`${T(k)} · ${T('nextOpp')}`, A.SearchRelativeLongitude(BODY[k], 0, t).date, T('bestView'), k]);
        else { const el = A.SearchMaxElongation(BODY[k], t); rows.push([`${T(k)} · ${T('nextElong')}`, el.time.date, el.visibility === 'evening' ? T('east') : T('west'), k]); }
      }
      rows.sort((a, b) => a[1] - b[1]);
      rows = rows.slice(0, 6);
    }
  } catch (e) { console.warn(e); }
  const html = rows.map(([label, date, what]) => `
    <li><button type="button" class="event" data-jump="${date.getTime()}">
      <span class="ev-label">${label}</span>
      <span class="ev-what">${what}</span>
      <span class="ev-date num">${fmtDate(date.getTime(), 'Asia/Tokyo').slice(0, 16)} JST</span>
    </button></li>`).join('');
  eventCache = { key: ck, html };
  return html;
}
$('panel').addEventListener('click', e => {
  const g = e.target.closest('[data-go]');
  if (g) { flyTo(g.dataset.go); return; }
  const b = e.target.closest('[data-jump]'); if (!b) return;
  sim.t = +b.dataset.jump - (PLANETS.includes(focus) || focus === 'system' || focus === 'inner' ? 0 : 90 * 60 * 1000);
  sim.live = false; sim.paused = true; $('pause').setAttribute('aria-pressed', 'true');
  document.querySelectorAll('[data-rate]').forEach(x => x.setAttribute('aria-pressed', 'false'));
  renderInfo(true);
  sheetTo('peek');
});

function planetLive(k) {
  const t = A.MakeTime(new Date(sim.t)), b = BODY[k];
  const g = A.GeoVector(b, t, true);
  const km = g.Length() * A.KM_PER_AU;
  const hAU = A.HelioVector(b, t).Length();
  const ill = A.Illumination(b, t);
  const eq = A.EquatorFromVector(g);
  const con = A.Constellation(eq.ra, eq.dec);
  const el = A.Elongation(b, t);
  const diam = 2 * Math.asin(PL[k].r * 1000 / km) * 180 / Math.PI * 3600;
  const cn = CONS[con.symbol] ? CONS[con.symbol][lang === 'ja' ? 0 : 1] : con.name;
  let vis = el.elongation < 15 ? T('nearSun') : el.elongation > 150 ? T('bestView') : el.visibility === 'morning' ? T('morning') : T('evening');
  const L = [
    [T('distEarth'), fmtKm(km)],
    [T('lightFromEarth'), fmtLight(km / C_KM)],
    [T('distSunAU'), `${fmt(hAU, 3)}<small>AU</small>`],
    [T('mag'), `${ill.mag < 0 ? '−' : ''}${fmt(Math.abs(ill.mag), 1)}<small>${T('magU')}</small>`],
    [T('inCon'), cn],
    [T('appDiam'), `${fmt(diam, 1)}<small>″</small>`],
    [T('elong'), `${fmt(el.elongation, 0)}°<small>${vis}</small>`],
  ];
  if (k === 'saturn') L.push([T('ringTilt'), `${fmt(Math.abs(ill.ring_tilt), 1)}<small>°</small>`]);
  else if (!['jupiter', 'uranus', 'neptune'].includes(k)) L.push([T('illum'), `${fmt(ill.phase_fraction * 100, 1)}<small>%</small>`]);
  else L.push([T('phaseAngle'), `${fmt(ill.phase_angle, 1)}<small>°</small>`]);
  return L;
}
function live(key) {
  const sunKm = Math.hypot(...st.sun) * 1000;
  const moonKm = Math.hypot(...st.moon) * 1000;
  let L = [];
  if (key === 'earth' || key === 'earthmoon') {
    const d = st.sun.map(v => v / (sunKm / 1000));
    const ss = latLonIn(st.earthFrame, d);
    L.push([T('distSun'), `${fmt(sunKm / 1e6, 3)}<small>${T('mkm')}</small>`]);
    L.push([T('lightTime'), `${Math.floor(sunKm / C_KM / 60)}<small>${T('min')}</small> ${fmt((sunKm / C_KM) % 60, 1)}<small>${T('sec')}</small>`]);
    L.push([T('distMoon'), `${fmt(moonKm, 0)}<small>km</small>`]);
    L.push([T('subsolar'), `${dms(ss.lat, 'N', 'S')} ${dms(ss.lon, 'E', 'W')}`]);
  } else if (key === 'moon') {
    const ill = A.Illumination(A.Body.Moon, A.MakeTime(new Date(sim.t)));
    const ph = A.MoonPhase(new Date(sim.t));
    L.push([T('distEarth'), `${fmt(moonKm, 0)}<small>km</small>`]);
    L.push([T('phase'), `${phaseName(ph)} · ${fmt(ph / 360 * 29.530589, 1)}<small>${T('days')}</small>`]);
    L.push([T('illum'), `${fmt(ill.phase_fraction * 100, 1)}<small>%</small>`]);
    const lib = A.Libration(new Date(sim.t));
    L.push([T('libration'), `${dms(lib.elat, 'N', 'S')} ${dms(lib.elon, 'E', 'W')}`]);
  } else if (key === 'sun') {
    const diam = 2 * Math.asin(695700 / sunKm) * 180 / Math.PI * 60;
    const ecl = A.SunPosition(A.MakeTime(new Date(sim.t)));
    L.push([T('distEarth'), `${fmt(sunKm / 1e6, 3)}<small>${T('mkm')}</small>`]);
    L.push([T('au'), `${fmt(sunKm / 149597870.7, 6)}<small>AU</small>`]);
    L.push([T('angDiam'), `${fmt(diam, 2)}<small>′</small>`]);
    L.push([T('eclLon'), `${fmt(ecl.elon, 3)}<small>°</small>`]);
  } else if (PLANETS.includes(key)) {
    L = planetLive(key);
  } else if (key === 'system' || key === 'inner') {
    const list = key === 'inner' ? ['mercury', 'venus', 'earth', 'mars'] : ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
    return list.map(k => {
      const h = k === 'earth' ? sunKm / 149597870.7 : Math.hypot(...st.helio[k]) * 1000 / 149597870.7;
      const e = k === 'earth' ? null : Math.hypot(...st.pos[k]) * 1000 / 149597870.7;
      return `<button type="button" class="ro go" data-go="${k}"><dt>${T(k)}</dt><dd class="num">${fmt(h, 2)}<small>AU</small>${e !== null ? `<small class="sub">${T('fromEarth')} ${fmt(e, 2)}</small>` : ''}</dd></button>`;
    }).join('');
  }
  return L.map(([k, v]) => `<div class="ro"><dt>${k}</dt><dd class="num">${v}</dd></div>`).join('');
}

let lastInfo = 0;
function renderInfo(full) {
  const key = focus === 'earthmoon' ? 'earth' : focus;
  const f = FACTS[key];
  if (full) {
    $('p-kicker').textContent = T('kicker_' + key);
    $('p-name').textContent = T(key);
    $('p-name-m').textContent = T(key);
    $('p-latin').textContent = f.latin;
    $('p-lede').textContent = f.lede[lang];
    $('p-facts').innerHTML = f.rows.map(r => `<div class="fr"><dt>${r[0][lang]}</dt><dd class="num">${r[1]}<small>${r[2] ? (r[2][lang] ?? r[2]) : ''}</small></dd></div>`).join('');
    $('p-source').innerHTML = `${T('source')}: <a href="${f.src}" target="_blank" rel="noopener">NASA NSSDCA ${T('factsheet')}</a>`;
    $('live-h').textContent = key === 'system' || key === 'inner' ? T('planetsNow') : T('liveNow');
    $('p-live').classList.toggle('list', key === 'system' || key === 'inner');
    const z = $('p-zenith');
    z.hidden = !(PLANETS.includes(key) || key === 'moon');
    z.textContent = T('zenith') + ' →';
    peekText();
  }
  setHTML($('p-live'), live(focus));
  setHTML($('p-events'), events(key));
}
// only touch the DOM when content changed, so taps on buttons are never lost to a re-render
function setHTML(el, html) { if (el._html !== html) { el._html = html; el.innerHTML = html; } }
function peekText() {
  const key = focus === 'earthmoon' ? 'earth' : focus;
  $('peek').innerHTML = `<b>${T(focus)}</b><span>${T('kicker_' + key)}</span>`;
}

function updateClock() {
  $('clock-jst').textContent = fmtDate(sim.t, 'Asia/Tokyo');
  $('clock-utc').textContent = fmtDate(sim.t, 'UTC') + ' UTC';
  $('live-dot').dataset.live = String(sim.live && Math.abs(sim.t - Date.now()) < 2000);
}

// ---------- resolution upgrades ----------
// Replaced textures are freed from GPU memory. On phones only the planet in view keeps its maps.
function swapTex(u, t) { const old = u.value; u.value = t; if (old && old !== t) old.dispose(); }
const resNow = { earth: 2, moon: 2 };
const pending = new Map();
const wantPlanet = (k) => !isMobile || focus === k;
function loadPlanet(k, size) {
  const id = k + size;
  if (pending.has(id)) return pending.get(id);
  const pr = tex(`tex/planets/${k}_${size}k.jpg`, true, false).then(t => {
    pending.delete(id);
    if (!t) return;
    if (!wantPlanet(k) || (resNow[k] || 0) >= size) { t.dispose(); return; }
    swapTex(planets[k].u.uMap, t); resNow[k] = size;
    planets[k].mesh.visible = true; if (planets[k].ring && ringTex.value) planets[k].ring.visible = true;
    if (focus === k) $('res').textContent = size + 'K';
  });
  pending.set(id, pr);
  return pr;
}
function dropPlanet(k) {
  if (!resNow[k]) return;
  swapTex(planets[k].u.uMap, null); resNow[k] = 0;
  planets[k].mesh.visible = false; if (planets[k].ring) planets[k].ring.visible = false;
}
let ringPending = null;
function loadRing() {
  if (ringPending) return ringPending;
  ringPending = tex('tex/planets/saturn_ring.png', true, false).then(r => {
    if (!r) { ringPending = null; return; }
    r.wrapS = THREE.ClampToEdgeWrapping; r.anisotropy = 1; r.needsUpdate = true; ringTex.value = r;
    if (planets.saturn.mesh.visible) planets.saturn.ring.visible = true;
  });
  return ringPending;
}
// Phones: the Earth/Moon maps are freed while another body is in view (they are only dots then),
// and restored from the offline cache when you come back — no extra download.
const EARTHISH = ['earth', 'moon', 'earthmoon'];
let earthLoaded = true, earthRestoring = null;
function dropEarth() {
  if (!earthLoaded) return;
  for (const u of [earthUniforms.uDay, earthUniforms.uNight, earthUniforms.uClouds, earthUniforms.uNormal, earthUniforms.uSpec, moonUniforms.uMap]) swapTex(u, null);
  earth.visible = atmo.visible = moon.visible = false;
  earthLoaded = false; resNow.earth = resNow.moon = 0;
}
function restoreEarth() {
  if (earthLoaded || earthRestoring) return earthRestoring;
  const hi = bgDone ? '4k' : '2k';
  earthRestoring = Promise.all([
    tex(`tex/earth_day_${hi}.jpg`, true, false), tex(`tex/earth_night_${hi}.jpg`, true, false), tex(`tex/earth_clouds_${hi}.jpg`, false, false),
    tex('tex/earth_normal_2k.jpg', false, false), tex('tex/earth_spec_2k.jpg', false, false), tex(`tex/moon_${hi}.jpg`, true, false),
  ]).then(([d, n, c, no, sp, m]) => {
    earthRestoring = null;
    if (!EARTHISH.includes(focus)) { for (const t of [d, n, c, no, sp, m]) t && t.dispose(); return; }
    swapTex(earthUniforms.uDay, d); swapTex(earthUniforms.uNight, n); swapTex(earthUniforms.uClouds, c);
    swapTex(earthUniforms.uNormal, no); swapTex(earthUniforms.uSpec, sp); swapTex(moonUniforms.uMap, m);
    earth.visible = atmo.visible = moon.visible = true;
    earthLoaded = true; resNow.earth = resNow.moon = hi === '4k' ? 4 : 2;
    if (EARTHISH.includes(focus)) $('res').textContent = resNow.earth + 'K';
  });
  return earthRestoring;
}
let bgDone = false;
function ensureHiRes(k) {
  const key = k === 'earthmoon' ? 'earth' : k;
  if (isMobile) {
    for (const o of PLANETS) if (o !== key) dropPlanet(o);
    if (EARTHISH.includes(k)) restoreEarth(); else if (bgDone) dropEarth();
  }
  if (PL[key]) {
    if (key === 'saturn') loadRing();
    const want = PL[key].hi.filter(s => s <= (isMobile ? 4 : 8));
    loadPlanet(key, 2).then(() => { for (const s of want) if (focus === key) loadPlanet(key, s); });
  }
  $('res').textContent = (resNow[key] || 2) + 'K';
}

// ---------- opening ----------
let intro = true;
function interrupted() { if (intro && flight) { flight.dur = Math.min(flight.dur, (performance.now() - flight.t0) + 600); } intro = false; }

async function boot() {
  applyStatic();
  {
    const f0 = state(new Date()).frame.venus, t1 = new Date(Date.now() + 864e5);
    const f1 = state(t1).frame.venus;
    const d = f1.P.map((v, i) => v - f0.P[i]);
    const east = [f0.N[1] * f0.P[2] - f0.N[2] * f0.P[1], f0.N[2] * f0.P[0] - f0.N[0] * f0.P[2], f0.N[0] * f0.P[1] - f0.N[1] * f0.P[0]];
    venusSense = Math.sign(d[0] * east[0] + d[1] * east[1] + d[2] * east[2]) || -1;
  }
  const [mw, day, night, clouds, normal, spec, moonMap] = await Promise.all([
    tex('tex/milkyway_4k.jpg'), tex('tex/earth_day_2k.jpg'), tex('tex/earth_night_2k.jpg'), tex('tex/earth_clouds_2k.jpg', false),
    tex('tex/earth_normal_2k.jpg', false), tex('tex/earth_spec_2k.jpg', false), tex('tex/moon_2k.jpg'),
  ]);
  skyMat.uniforms.uMap.value = mw;
  earthUniforms.uDay.value = day; earthUniforms.uNight.value = night; earthUniforms.uClouds.value = clouds;
  earthUniforms.uNormal.value = normal; earthUniforms.uSpec.value = spec;
  moonUniforms.uMap.value = moonMap;
  let nStars = 0;
  try { nStars = await loadStars(); } catch (e) { console.warn('stars', e); }
  $('star-count').textContent = fmt(nStars);
  updateBodies();
  const toSun = v3(st.sun).normalize();
  camera.position.copy(toSun.clone().multiplyScalar(-400).add(new THREE.Vector3(0, 260, 0)).applyAxisAngle(new THREE.Vector3(0, 1, 0), 1.2));
  W.target.set(0, 0, 0);
  flyTo('earth', { dur: 5200 });
  renderInfo(true);
  loadingEl.dataset.done = 'true';
  sheetTo('peek', false);
  requestAnimationFrame(loop);
  // then: the Earth/Moon 4K set; on desktop also every planet at 2K and the ring
  setTimeout(async () => {
    if (!isMobile) { loadRing(); await Promise.all(PLANETS.map(k => loadPlanet(k, 2))); }
    ensureHiRes(focus);
    const [d4, n4, c4, m4] = await Promise.all([
      tex('tex/earth_day_4k.jpg', true, false), tex('tex/earth_night_4k.jpg', true, false), tex('tex/earth_clouds_4k.jpg', false, false), tex('tex/moon_4k.jpg', true, false),
    ]);
    bgDone = true;
    if (isMobile && !EARTHISH.includes(focus)) { for (const t of [d4, n4, c4, m4]) t && t.dispose(); dropEarth(); ensureHiRes(focus); return; }
    if (!earthLoaded) { for (const t of [d4, n4, c4, m4]) t && t.dispose(); return; }
    if (d4) { swapTex(earthUniforms.uDay, d4); resNow.earth = 4; }
    if (n4) swapTex(earthUniforms.uNight, n4);
    if (c4) swapTex(earthUniforms.uClouds, c4);
    if (m4) { swapTex(moonUniforms.uMap, m4); resNow.moon = 4; }
    if (!isMobile) {
      const d8 = await tex('tex/earth_day_8k.jpg', true, false);
      if (d8) { swapTex(earthUniforms.uDay, d8); resNow.earth = 8; }
    }
    ensureHiRes(focus);
  }, 600);
}

// ---------- loop ----------
let prev = performance.now();
function loop(now) {
  const dt = Math.min(now - prev, 100); prev = now;
  if (sim.live) sim.t = Date.now();
  else if (!sim.paused) sim.t += dt * sim.rate * sim.dir;
  updateCamera(now);
  controls.update();
  updateBodies();
  skyGroup.position.copy(camera.position);
  // glare: constant-ish angular size, fades when very close
  const sunR = sun.position;
  const ds = camera.position.distanceTo(sunR);
  const farG = smooth(3e4, 1e6, ds);
  glare.scale.setScalar(Math.max(ds * THREE.MathUtils.lerp(0.16, 0.035, farG), R_SUN * 6));
  const angR = Math.asin(Math.min(R_SUN / ds, 1)) * 180 / Math.PI;
  const k = THREE.MathUtils.smoothstep(angR, 0.6, 6);
  sunUniforms.uI.value = THREE.MathUtils.lerp(40, 2.4, k);
  const zoom = camera.position.length();
  const farView = smooth(3e4, 6e5, ds);
  glareUniforms.uI.value = THREE.MathUtils.lerp(1.0, 0.1, k) * (1 - 0.55 * farView);
  glareUniforms.uSpike.value = (1 - k) * (1 - farView);
  sunUniforms.uTime.value = now / 1000;
  // orbit lines fade in as you pull back
  const oa = smooth(4e3, 6e4, zoom) * 0.42;
  for (const key in orbits) {
    const hl = key === focus || (focus === 'earthmoon' && key === 'earth');
    orbits[key].material.opacity = hl ? Math.max(oa, smooth(2e3, 2e4, zoom) * 0.6) : oa;
    orbits[key].material.color.setHex(hl ? 0xffbf73 : 0x8ea4c8);
  }
  moonOrbit.material.opacity = (focus === 'earthmoon' || focus === 'moon' || focus === 'earth') ? smooth(60, 500, zoom) * (1 - smooth(2e4, 1e5, zoom)) * 0.5 : 0;
  updateLabels();
  if (now - lastInfo > 250) { renderInfo(false); updateClock(); lastInfo = now; }
  composer.render();
  requestAnimationFrame(loop);
}

function viewOffset() {
  if (innerWidth <= 900 && innerHeight > innerWidth) camera.setViewOffset(innerWidth, innerHeight, 0, Math.round(innerHeight * 0.055), innerWidth, innerHeight);
  else if (innerWidth > 900) camera.setViewOffset(innerWidth, innerHeight, Math.round(Math.min(innerWidth * 0.07, 120)), 0, innerWidth, innerHeight);
  else camera.clearViewOffset();
}
viewOffset();
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; viewOffset(); camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight);
  starMat.uniforms.uScale.value = renderer.getPixelRatio();
});

setRate(0);
window.__sol = { renderer, get st() { return st; }, W, camera, get focus() { return focus; }, labels, flyTo };
boot().catch(e => showError('読み込みに失敗しました / Failed to start: ' + (e && e.message || e)));

if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => { });

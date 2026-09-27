(()=>{var Hm=Object.defineProperty;var Gm=(n,t)=>{for(var e in t)Hm(n,e,{get:t[e],enumerable:!0})};var zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Md=0,nu=1,Sd=2;var iu=1,bd=2,ei=3,kn=0,Xe=1,Pn=2,Wn=0,cs=1,Vi=2,su=3,ru=4,Io=5,Ni=100,Ed=101,wd=102,Td=103,Ad=104,Rd=200,Do=201,Cd=202,Pd=203,Oa=204,hs=205,Id=206,Dd=207,Ld=208,Ud=209,Nd=210,Fd=211,Od=212,Bd=213,zd=214,ol=0,al=1,ll=2,us=3,cl=4,hl=5,ul=6,dl=7,ou=0,kd=1,Vd=2,yi=0,fl=1,pl=2,ml=3,gl=4,_l=5,xr=6,xl=7;var au=300,_s=301,xs=302,vl=303,yl=304,Lo=306,rr=1e3,Jn=1001,Ba=1002,Cn=1003,Hd=1004;var Uo=1005;var Vn=1006,Ml=1007;var Hi=1008;var ni=1009,lu=1010,cu=1011,vr=1012,Sl=1013,Gi=1014,ii=1015,hn=1016,bl=1017,El=1018,yr=1020,hu=35902,uu=35899,du=1021,fu=1022,In=1023,or=1026,Mr=1027,pu=1028,wl=1029,mu=1030,Tl=1031;var Al=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,Rl=35840,Cl=35841,Pl=35842,Il=35843,Dl=36196,Ll=37492,Ul=37496,Nl=37808,Fl=37809,Ol=37810,Bl=37811,zl=37812,kl=37813,Vl=37814,Hl=37815,Gl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,Zl=36492,Jl=36494,Kl=36495,jl=36283,Ql=36284,tc=36285,ec=36286;var ho=2300,za=2301,Na=2302,$h=2400,Zh=2401,Jh=2402;var Gd=3200,Wd=3201;var Xd=0,qd=1,Xn="",en="srgb",ds="srgb-linear",uo="linear",se="srgb";var ls=7680;var Kh=519,Yd=512,$d=513,Zd=514,gu=515,Jd=516,Kd=517,jd=518,Qd=519,jh=35044;var _u="300 es",zn=2e3,fo=2001;var jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],K0=1234567,lo=Math.PI/180,ar=180/Math.PI;function Sr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function xu(n,t){return(n%t+t)%t}function Wm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Xm(n,t,e){return n!==t?(e-n)/(t-n):0}function co(n,t,e){return(1-e)*n+e*t}function qm(n,t,e,i){return co(n,t,1-Math.exp(-e*i))}function Ym(n,t=1){return t-Math.abs(xu(n,t*2)-t)}function $m(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Zm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Jm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Km(n,t){return n+Math.random()*(t-n)}function jm(n){return n*(.5-Math.random())}function Qm(n){n!==void 0&&(K0=n);let t=K0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function t1(n){return n*lo}function e1(n){return n*ar}function n1(n){return(n&n-1)===0&&n!==0}function i1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function s1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function r1(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ir(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Wi={DEG2RAD:lo,RAD2DEG:ar,generateUUID:Sr,clamp:Yt,euclideanModulo:xu,mapLinear:Wm,inverseLerp:Xm,lerp:co,damp:qm,pingpong:Ym,smoothstep:$m,smootherstep:Zm,randInt:Jm,randFloat:Km,randFloatSpread:jm,seededRandom:Qm,degToRad:t1,radToDeg:e1,isPowerOfTwo:n1,ceilPowerOfTwo:i1,floorPowerOfTwo:s1,setQuaternionFromProperEuler:r1,normalize:tn,denormalize:ir},At=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a,f=l*d+c*p+u*g+h*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let A=Math.sqrt(b),R=Math.atan2(A,f*E);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}let y=a*E;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,h=h*m+_*y,m===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-a*p,t[e+2]=c*g+u*p+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(j0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(j0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Th.copy(this).projectOnVector(t),this.sub(Th)}reflect(t){return this.sub(Th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Th=new I,j0=new nn,Vt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],E=s[1],b=s[4],y=s[7],A=s[2],R=s[5],C=s[8];return r[0]=o*_+a*E+l*A,r[3]=o*m+a*b+l*R,r[6]=o*f+a*y+l*C,r[1]=c*_+u*E+h*A,r[4]=c*m+u*b+h*R,r[7]=c*f+u*y+h*C,r[2]=d*_+p*E+g*A,r[5]=d*m+p*b+g*R,r[8]=d*f+p*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=e*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ah.makeScale(t,e)),this}rotate(t){return this.premultiply(Ah.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ah.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ah=new Vt;function vu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tf(){let n=lr("canvas");return n.style.display="block",n}var Q0={};function cr(n){n in Q0||(Q0[n]=!0,console.warn(n))}function ef(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var td=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o1(){let n={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ds]:{primaries:t,whitePoint:i,transfer:uo,toXYZ:td,fromXYZ:ed,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:se,toXYZ:td,fromXYZ:ed,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}var jt=o1();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ws,ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ws===void 0&&(Ws=lr("canvas")),Ws.width=t.width,Ws.height=t.height;let s=Ws.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ws}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xi(e[i]/255)*255):e[i]=xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},a1=0,hr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Sr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rh(s[o].image)):r.push(Rh(s[o]))}else r=Rh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Rh(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?ka.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var l1=0,Ch=new I,ln=class n extends jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=Vn,o=Hi,a=In,l=ni,c=n.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=Sr(),this.name="",this.source=new hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=au;ln.DEFAULT_ANISOTROPY=1;var Re=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(p+1)/2,A=(f+1)/2,R=(u+d)/4,C=(h+_)/4,N=(g+m)/4;return b>y&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=C/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=N/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=N/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Va=class extends jn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new ln(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new hr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends Va{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},po=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),pa.subVectors(this.max,io),Xs.subVectors(t.a,io),qs.subVectors(t.b,io),Ys.subVectors(t.c,io),Ri.subVectors(qs,Xs),Ci.subVectors(Ys,qs),ss.subVectors(Xs,Ys);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-ss.z,ss.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,ss.z,0,-ss.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-ss.y,ss.x,0];return!Ph(e,Xs,qs,Ys,pa)||(e=[1,0,0,0,1,0,0,0,1],!Ph(e,Xs,qs,Ys,pa))?!1:(ma.crossVectors(Ri,Ci),e=[ma.x,ma.y,ma.z],Ph(e,Xs,qs,Ys,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fi=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,fa=new Fi,Xs=new I,qs=new I,Ys=new I,Ri=new I,Ci=new I,ss=new I,io=new I,pa=new I,ma=new I,rs=new I;function Ph(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rs.fromArray(n,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var c1=new Fi,so=new I,Ih=new I,Hn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):c1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(so,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(Ih)),this.expandByPoint(so.copy(t.center).sub(Ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},pi=new I,Dh=new I,ga=new I,Pi=new I,Lh=new I,_a=new I,Uh=new I,Gn=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Dh.copy(t).add(e).multiplyScalar(.5),ga.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(Dh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ga),a=Pi.dot(this.direction),l=-Pi.dot(ga),c=Pi.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Dh).addScaledVector(ga,d),p}intersectSphere(t,e){pi.subVectors(t.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){Lh.subVectors(e,t),_a.subVectors(i,t),Uh.crossVectors(Lh,_a);let o=this.direction.dot(Uh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);let l=a*this.direction.dot(_a.crossVectors(Pi,_a));if(l<0)return null;let c=a*this.direction.dot(Lh.cross(Pi));if(c<0||l+c>o)return null;let u=-a*Pi.dot(Uh);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class n{constructor(t,e,i,s,r,o,a,l,c,u,h,d,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),o=1/$s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h1,t,u1)}lookAt(t,e,i){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ii.crossVectors(i,gn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ii.crossVectors(i,gn)),Ii.normalize(),xa.crossVectors(gn,Ii),s[0]=Ii.x,s[4]=xa.x,s[8]=gn.x,s[1]=Ii.y,s[5]=xa.y,s[9]=gn.y,s[2]=Ii.z,s[6]=xa.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],b=i[7],y=i[11],A=i[15],R=s[0],C=s[4],N=s[8],S=s[12],M=s[1],P=s[5],z=s[9],G=s[13],W=s[2],Z=s[6],X=s[10],tt=s[14],H=s[3],at=s[7],Q=s[11],gt=s[15];return r[0]=o*R+a*M+l*W+c*H,r[4]=o*C+a*P+l*Z+c*at,r[8]=o*N+a*z+l*X+c*Q,r[12]=o*S+a*G+l*tt+c*gt,r[1]=u*R+h*M+d*W+p*H,r[5]=u*C+h*P+d*Z+p*at,r[9]=u*N+h*z+d*X+p*Q,r[13]=u*S+h*G+d*tt+p*gt,r[2]=g*R+_*M+m*W+f*H,r[6]=g*C+_*P+m*Z+f*at,r[10]=g*N+_*z+m*X+f*Q,r[14]=g*S+_*G+m*tt+f*gt,r[3]=E*R+b*M+y*W+A*H,r[7]=E*C+b*P+y*Z+A*at,r[11]=E*N+b*z+y*X+A*Q,r[15]=E*S+b*G+y*tt+A*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,b=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,y=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,A=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,R=e*E+i*b+s*y+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=E*C,t[1]=(_*d*r-h*m*r-_*s*p+i*m*p+h*s*f-i*d*f)*C,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*f+i*l*f)*C,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*C,t[4]=b*C,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*C,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*C,t[8]=y*C,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*f-e*h*f)*C,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*f+e*a*f)*C,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*C,t[12]=A*C,t[13]=(u*_*s-g*h*s+g*i*d-e*_*d-u*i*m+e*h*m)*C,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,E=l*c,b=l*u,y=l*h,A=i.x,R=i.y,C=i.z;return s[0]=(1-(_+f))*A,s[1]=(p+y)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(d+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+b)*C,s[9]=(m-E)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);let c=1/r,u=1/o,h=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,e.setFromRotationMatrix(On),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=zn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),p=(i+s)/(i-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===fo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=zn,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),p=-(i+s)/(i-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===zn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===fo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},$s=new I,On=new ve,h1=new I(0,0,0),u1=new I(1,1,1),Ii=new I,xa=new I,gn=new I,nd=new ve,id=new nn,Qn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},d1=0,sd=new I,Zs=new nn,mi=new ve,va=new I,ro=new I,f1=new I,p1=new nn,rd=new I(1,0,0),od=new I(0,1,0),ad=new I(0,0,1),ld={type:"added"},m1={type:"removed"},Js={type:"childadded",child:null},Nh={type:"childremoved",child:null},cn=class n extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new Qn,i=new nn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Vt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(rd,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(ad,t)}translateOnAxis(t,e){return sd.copy(t).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rd,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?va.copy(t):va.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ro,va,this.up):mi.lookAt(va,ro,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(mi),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ld),Js.child=t,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(m1),Nh.child=t,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ld),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,f1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,p1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};cn.DEFAULT_UP=new I(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=new I,gi=new I,Fh=new I,_i=new I,Ks=new I,js=new I,cd=new I,Oh=new I,Bh=new I,zh=new I,kh=new Re,Vh=new Re,Hh=new Re,Ui=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Bn.subVectors(s,e),gi.subVectors(i,e),Fh.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(gi),l=Bn.dot(Fh),c=gi.dot(gi),u=gi.dot(Fh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return kh.setScalar(0),Vh.setScalar(0),Hh.setScalar(0),kh.fromBufferAttribute(t,e),Vh.fromBufferAttribute(t,i),Hh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(kh,r.x),o.addScaledVector(Vh,r.y),o.addScaledVector(Hh,r.z),o}static isFrontFacing(t,e,i,s){return Bn.subVectors(i,e),gi.subVectors(t,e),Bn.cross(gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ks.subVectors(s,i),js.subVectors(r,i),Oh.subVectors(t,i);let l=Ks.dot(Oh),c=js.dot(Oh);if(l<=0&&c<=0)return e.copy(i);Bh.subVectors(t,s);let u=Ks.dot(Bh),h=js.dot(Bh);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ks,o);zh.subVectors(t,r);let p=Ks.dot(zh),g=js.dot(zh);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(js,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return cd.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(cd,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(Ks,o).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Gh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=xu(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Gh(o,r,t+1/3),this.g=Gh(o,r,t),this.b=Gh(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let i=nf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return jt.workingToColorSpace(Je.copy(this),t),Math.round(Yt(Je.r*255,0,255))*65536+Math.round(Yt(Je.g*255,0,255))*256+Math.round(Yt(Je.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Je.copy(this),e);let i=Je.r,s=Je.g,r=Je.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=en){jt.workingToColorSpace(Je.copy(this),t);let e=Je.r,i=Je.g,s=Je.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(ya);let i=co(Di.h,ya.h,e),s=co(Di.s,ya.s,e),r=co(Di.l,ya.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Xt;Xt.NAMES=nf;var g1=0,vi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=cs,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=hs,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==hs&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fs=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new I,Ma=new At,_1=0,Fe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=jh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ir(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jh&&(t.usage=this.usage),t}};var mo=class extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var go=class extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var De=class extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}},x1=0,An=new ve,Wh=new cn,Qs=new I,_n=new Fi,oo=new Fi,Ve=new I,Ge=class n extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?go:mo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,i){return An.makeTranslation(t,e,i),this.applyMatrix4(An),this}scale(t,e,i){return An.makeScale(t,e,i),this.applyMatrix4(An),this}lookAt(t){return Wh.lookAt(t),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(_n.min,oo.min),_n.expandByPoint(Ve),Ve.addVectors(_n.max,oo.max),_n.expandByPoint(Ve)):(_n.expandByPoint(oo.min),_n.expandByPoint(oo.max))}_n.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(t,c),Ve.add(Qs)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new I,l[N]=new I;let c=new I,u=new I,h=new I,d=new At,p=new At,g=new At,_=new I,m=new I;function f(N,S,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(d),g.sub(d);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[N].add(_),a[S].add(_),a[M].add(_),l[N].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,S=E.length;N<S;++N){let M=E[N],P=M.start,z=M.count;for(let G=P,W=P+z;G<W;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let b=new I,y=new I,A=new I,R=new I;function C(N){A.fromBufferAttribute(s,N),R.copy(A);let S=a[N];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),y.crossVectors(R,S);let P=y.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,P)}for(let N=0,S=E.length;N<S;++N){let M=E[N],P=M.start,z=M.count;for(let G=P,W=P+z;G<W;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Fe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hd=new ve,os=new Gn,Sa=new Hn,ud=new I,ba=new I,Ea=new I,wa=new I,Xh=new I,Ta=new I,dd=new I,Aa=new I,be=class extends cn{constructor(t=new Ge,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Xh.fromBufferAttribute(h,t),o?Ta.addScaledVector(Xh,u):Ta.addScaledVector(Xh.sub(e),u))}e.add(Ta)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(Sa.containsPoint(os.origin)===!1&&(os.intersectSphere(Sa,ud)===null||os.origin.distanceToSquared(ud)>(t.far-t.near)**2))&&(hd.copy(r).invert(),os.copy(t.ray).applyMatrix4(hd),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,A=b;y<A;y+=3){let R=a.getX(y),C=a.getX(y+1),N=a.getX(y+2);s=Ra(this,f,t,i,c,u,h,R,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=Ra(this,o,t,i,c,u,h,E,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,A=b;y<A;y+=3){let R=y,C=y+1,N=y+2;s=Ra(this,f,t,i,c,u,h,R,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=m,b=m+1,y=m+2;s=Ra(this,o,t,i,c,u,h,E,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function v1(n,t,e,i,s,r,o,a){let l;if(t.side===Xe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===kn,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Aa);return c<e.near||c>e.far?null:{distance:c,point:Aa.clone(),object:n}}function Ra(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ba),n.getVertexPosition(l,Ea),n.getVertexPosition(c,wa);let u=v1(n,t,e,i,ba,Ea,wa,dd);if(u){let h=new I;Ui.getBarycoord(dd,ba,Ea,wa,h),s&&(u.uv=Ui.getInterpolatedAttribute(s,a,l,c,h,new At)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,a,l,c,h,new At)),o&&(u.normal=Ui.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Ui.getNormal(ba,Ea,wa,d.normal),u.face=d,u.barycoord=h}return u}var dr=class n extends Ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2));function g(_,m,f,E,b,y,A,R,C,N,S){let M=y/C,P=A/N,z=y/2,G=A/2,W=R/2,Z=C+1,X=N+1,tt=0,H=0,at=new I;for(let Q=0;Q<X;Q++){let gt=Q*P-G;for(let Gt=0;Gt<Z;Gt++){let oe=Gt*M-z;at[_]=oe*E,at[m]=gt*b,at[f]=W,c.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[f]=R>0?1:-1,u.push(at.x,at.y,at.z),h.push(Gt/C),h.push(1-Q/N),tt+=1}}for(let Q=0;Q<N;Q++)for(let gt=0;gt<C;gt++){let Gt=d+gt+Z*Q,oe=d+gt+Z*(Q+1),he=d+(gt+1)+Z*(Q+1),te=d+(gt+1)+Z*Q;l.push(Gt,oe,te),l.push(oe,he,te),H+=6}a.addGroup(p,H,S),p+=H,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function je(n){let t={};for(let e=0;e<n.length;e++){let i=vs(n[e]);for(let s in i)t[s]=i[s]}return t}function y1(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function yu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Mi={clone:vs,merge:je},M1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,le=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M1,this.fragmentShader=S1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=y1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},_o=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new I,fd=new At,pd=new At,Ke=class extends _o{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,fd,pd),e.subVectors(pd,fd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},tr=-90,er=1,Ga=class extends cn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(tr,er,t,e);s.layers=this.layers,this.add(s);let r=new Ke(tr,er,t,e);r.layers=this.layers,this.add(r);let o=new Ke(tr,er,t,e);o.layers=this.layers,this.add(o);let a=new Ke(tr,er,t,e);a.layers=this.layers,this.add(a);let l=new Ke(tr,er,t,e);l.layers=this.layers,this.add(l);let c=new Ke(tr,er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xo=class extends ln{constructor(t=[],e=_s,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wa=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new xo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dr(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:Wn});r.uniforms.tEquirect.value=e;let o=new be(s,r),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Vn),new Ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Kn=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},b1={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var vo=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var qh=new I,E1=new I,w1=new Vt,Rn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=qh.subVectors(i,e).cross(E1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(qh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||w1.getNormalMatrix(t),s=this.coplanarPoint(qh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Hn,T1=new At(.5,.5),Ca=new I,yo=class{constructor(t=new Rn,e=new Rn,i=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],E=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,p-u,f-g,A-E).normalize(),s[1].setComponents(c+o,p+u,f+g,A+E).normalize(),s[2].setComponents(c+a,p+h,f+_,A+b).normalize(),s[3].setComponents(c-a,p-h,f-_,A-b).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,f-m,A-y).normalize();else if(s[4].setComponents(c-l,p-d,f-m,A-y).normalize(),e===zn)s[5].setComponents(c+l,p+d,f+m,A+y).normalize();else if(e===fo)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=T1.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ca.x=s.normal.x>0?t.max.x:t.min.x,Ca.y=s.normal.y>0?t.max.y:t.min.y,Ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ps=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xa=new I,qa=new I,md=new ve,ao=new Gn,Pa=new Hn,Yh=new I,gd=new I,pr=class extends cn{constructor(t=new Ge,e=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Xa.fromBufferAttribute(e,s-1),qa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Xa.distanceTo(qa);t.setAttribute("lineDistance",new De(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;md.copy(s).invert(),ao.copy(t.ray).applyMatrix4(md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=u.getX(_),E=u.getX(_+1),b=Ia(this,t,ao,l,f,E,_);b&&e.push(b)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(p),f=Ia(this,t,ao,l,_,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=Ia(this,t,ao,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){let _=Ia(this,t,ao,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ia(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Xa.fromBufferAttribute(a,s),qa.fromBufferAttribute(a,r),e.distanceSqToSegment(Xa,qa,Yh,gd)>i)return;Yh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Yh);if(!(c<t.near||c>t.far))return{distance:c,point:gd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ya=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_d=new ve,Qh=new Gn,Da=new Hn,La=new I,Mo=class extends cn{constructor(t=new Ge,e=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;_d.copy(s).invert(),Qh.copy(t.ray).applyMatrix4(_d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){let m=c.getX(g);La.fromBufferAttribute(h,m),xd(La,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)La.fromBufferAttribute(h,g),xd(La,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xd(n,t,e,i,s,r,o){let a=Qh.distanceSqToPoint(n);if(a<e){let l=new I;Qh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var So=class extends ln{constructor(t,e,i=Gi,s,r,o,a=Cn,l=Cn,c,u=or,h=1){if(u!==or&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bo=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ms=class n extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){let E=f*d-o;for(let b=0;b<c;b++){let y=b*h-r;g.push(y,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let b=E+c*f,y=E+c*(f+1),A=E+1+c*(f+1),R=E+1+c*f;p.push(b,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Eo=class n extends Ge{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,d=(e-t)/s,p=new I,g=new At;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let f=0;f<i;f++){let E=f+m,b=E,y=E+i+1,A=E+i+2,R=E+1;a.push(b,y,R),a.push(y,A,R)}}this.setIndex(a),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ti=class n extends Ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){let E=[],b=f/i,y=0;f===0&&o===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let R=A/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+y,1-b),E.push(c++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<e;E++){let b=u[f][E+1],y=u[f][E],A=u[f+1][E],R=u[f+1][E+1];(f!==0||o>0)&&p.push(b,y,R),(f!==i-1||l<Math.PI)&&p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wo=class extends le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var $a=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Za=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ua(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function A1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var gs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ja=class extends gs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:r=t,a=2*e-i;break;case Jh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zh:o=t,l=2*i-e;break;case Jh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let A=0;A!==a;++A)r[A]=f*o[u+A]+E*o[c+A]+b*o[l+A]+y*o[h+A];return r}},Ka=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},ja=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ua(e,this.TimeBufferType),this.values=Ua(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ua(t.times,Array),values:Ua(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ja(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ho:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&A1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Na,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*i,d=h-i,p=h+i;for(let g=0;g!==i;++g){let _=e[h+g];if(_!==e[d+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=za;var Oi=class extends xn{constructor(t,e,i){super(t,e,i)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ho;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}};Qa.prototype.ValueTypeName="color";var tl=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}};tl.prototype.ValueTypeName="number";var el=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},To=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends xn{constructor(t,e,i){super(t,e,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ho;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}};nl.prototype.ValueTypeName="vector";var Fa={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},il=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},sf=new il,mr=class{constructor(t){this.manager=t!==void 0?t:sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};mr.DEFAULT_MATERIAL_NAME="__DEFAULT";var nr=new WeakMap,sl=class extends mr{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=nr.get(o);h===void 0&&(h=[],nr.set(o,h)),h.push({onLoad:e,onError:s})}return o}let a=lr("img");function l(){u(),e&&e(this);let h=nr.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}nr.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),Fa.remove(`image:${t}`);let d=nr.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(h)}nr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fa.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Ao=class extends mr{constructor(t){super(t)}load(t,e,i,s){let r=new ln,o=new sl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}};var gr=class extends _o{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var rl=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ro=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Mu="\\[\\]\\.:\\/",R1=new RegExp("["+Mu+"]","g"),Su="[^"+Mu+"]",C1="[^"+Mu.replace("\\.","")+"]",P1=/((?:WC+[\/:])*)/.source.replace("WC",Su),I1=/(WCOD+)?/.source.replace("WCOD",C1),D1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Su),L1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Su),U1=new RegExp("^"+P1+I1+D1+L1+"$"),N1=["material","materials","bones","map"],tu=class{constructor(t,e,i){let s=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R1,"")}static parseTrackName(t){let e=U1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);N1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=tu;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eM=new Float32Array(1);var vd=new ve,Co=class{constructor(t,e,i=0,s=1/0){this.ray=new Gn(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vd),this}intersectObject(t,e=!0,i=[]){return eu(t,this,i,e),i.sort(yd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)eu(t[s],this,i,e);return i.sort(yd),i}};function yd(n,t){return n.distance-t.distance}function eu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)eu(r[o],t,e,!0)}}var _r=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Po=class extends jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function bu(n,t,e,i){let s=F1(i);switch(e){case du:return n*t;case pu:return n*t/s.components*s.byteLength;case wl:return n*t/s.components*s.byteLength;case mu:return n*t*2/s.components*s.byteLength;case Tl:return n*t*2/s.components*s.byteLength;case fu:return n*t*3/s.components*s.byteLength;case In:return n*t*4/s.components*s.byteLength;case Al:return n*t*4/s.components*s.byteLength;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Il:return Math.max(n,16)*Math.max(t,8)/4;case Rl:case Pl:return Math.max(n,8)*Math.max(t,8)/2;case Dl:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zl:case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*8;case tc:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F1(n){switch(n){case ni:case lu:return{byteLength:1,components:1};case vr:case cu:case hn:return{byteLength:2,components:1};case bl:case El:return{byteLength:2,components:4};case Gi:case Sl:case ii:return{byteLength:4,components:1};case hu:case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Rf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function B1(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$g=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,p_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,__=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:z1,alphahash_pars_fragment:k1,alphamap_fragment:V1,alphamap_pars_fragment:H1,alphatest_fragment:G1,alphatest_pars_fragment:W1,aomap_fragment:X1,aomap_pars_fragment:q1,batching_pars_vertex:Y1,batching_vertex:$1,begin_vertex:Z1,beginnormal_vertex:J1,bsdfs:K1,iridescence_fragment:j1,bumpmap_pars_fragment:Q1,clipping_planes_fragment:tg,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:ng,clipping_planes_vertex:ig,color_fragment:sg,color_pars_fragment:rg,color_pars_vertex:og,color_vertex:ag,common:lg,cube_uv_reflection_fragment:cg,defaultnormal_vertex:hg,displacementmap_pars_vertex:ug,displacementmap_vertex:dg,emissivemap_fragment:fg,emissivemap_pars_fragment:pg,colorspace_fragment:mg,colorspace_pars_fragment:gg,envmap_fragment:_g,envmap_common_pars_fragment:xg,envmap_pars_fragment:vg,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Ig,envmap_vertex:Mg,fog_vertex:Sg,fog_pars_vertex:bg,fog_fragment:Eg,fog_pars_fragment:wg,gradientmap_pars_fragment:Tg,lightmap_pars_fragment:Ag,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Cg,lights_pars_begin:Pg,lights_toon_fragment:Dg,lights_toon_pars_fragment:Lg,lights_phong_fragment:Ug,lights_phong_pars_fragment:Ng,lights_physical_fragment:Fg,lights_physical_pars_fragment:Og,lights_fragment_begin:Bg,lights_fragment_maps:zg,lights_fragment_end:kg,logdepthbuf_fragment:Vg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Wg,map_fragment:Xg,map_pars_fragment:qg,map_particle_fragment:Yg,map_particle_pars_fragment:$g,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:Kg,morphcolor_vertex:jg,morphnormal_vertex:Qg,morphtarget_pars_vertex:t_,morphtarget_vertex:e_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:s_,normal_pars_vertex:r_,normal_vertex:o_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:u_,opaque_fragment:d_,packing:f_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:g_,dithering_pars_fragment:__,roughnessmap_fragment:x_,roughnessmap_pars_fragment:v_,shadowmap_pars_fragment:y_,shadowmap_pars_vertex:M_,shadowmap_vertex:S_,shadowmask_pars_fragment:b_,skinbase_vertex:E_,skinning_pars_vertex:w_,skinning_vertex:T_,skinnormal_vertex:A_,specularmap_fragment:R_,specularmap_pars_fragment:C_,tonemapping_fragment:P_,tonemapping_pars_fragment:I_,transmission_fragment:D_,transmission_pars_fragment:L_,uv_pars_fragment:U_,uv_pars_vertex:N_,uv_vertex:F_,worldpos_vertex:O_,background_vert:B_,background_frag:z_,backgroundCube_vert:k_,backgroundCube_frag:V_,cube_vert:H_,cube_frag:G_,depth_vert:W_,depth_frag:X_,distanceRGBA_vert:q_,distanceRGBA_frag:Y_,equirect_vert:$_,equirect_frag:Z_,linedashed_vert:J_,linedashed_frag:K_,meshbasic_vert:j_,meshbasic_frag:Q_,meshlambert_vert:t2,meshlambert_frag:e2,meshmatcap_vert:n2,meshmatcap_frag:i2,meshnormal_vert:s2,meshnormal_frag:r2,meshphong_vert:o2,meshphong_frag:a2,meshphysical_vert:l2,meshphysical_frag:c2,meshtoon_vert:h2,meshtoon_frag:u2,points_vert:d2,points_frag:f2,shadow_vert:p2,shadow_frag:m2,sprite_vert:g2,sprite_frag:_2},ht={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},si={basic:{uniforms:je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:je([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:je([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:je([ht.points,ht.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:je([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:je([ht.common,ht.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:je([ht.sprite,ht.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:je([ht.common,ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:je([ht.lights,ht.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};si.physical={uniforms:je([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var nc={r:0,b:0,g:0},ys=new Qn,x2=new ve;function v2(n,t,e,i,s,r,o){let a=new Xt(0),l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function _(b){let y=!1,A=g(b);A===null?f(a,l):A&&A.isColor&&(f(A,1),y=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===Lo)?(u===void 0&&(u=new be(new dr(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:vs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ys.copy(y.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(x2.makeRotationFromEuler(ys)),u.material.toneMapped=jt.getTransfer(A.colorSpace)!==se,(h!==A||d!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new be(new ms(2,2),new le({name:"BackgroundMaterial",uniforms:vs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=jt.getTransfer(A.colorSpace)!==se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,y){b.getRGB(nc,yu(n)),i.buffers.color.setClear(nc.r,nc.g,nc.b,y,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:_,addToRenderList:m,dispose:E}}function y2(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,P,z,G,W){let Z=!1,X=h(G,z,P);r!==X&&(r=X,c(r.object)),Z=p(M,G,z,W),Z&&g(M,G,z,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(M,P,z,G),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,P,z){let G=z.wireframe===!0,W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Z=W[P.id];Z===void 0&&(Z={},W[P.id]=Z);let X=Z[G];return X===void 0&&(X=d(l()),Z[G]=X),X}function d(M){let P=[],z=[],G=[];for(let W=0;W<e;W++)P[W]=0,z[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,P,z,G){let W=r.attributes,Z=P.attributes,X=0,tt=z.getAttributes();for(let H in tt)if(tt[H].location>=0){let Q=W[H],gt=Z[H];if(gt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),Q===void 0||Q.attribute!==gt||gt&&Q.data!==gt.data)return!0;X++}return r.attributesNum!==X||r.index!==G}function g(M,P,z,G){let W={},Z=P.attributes,X=0,tt=z.getAttributes();for(let H in tt)if(tt[H].location>=0){let Q=Z[H];Q===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));let gt={};gt.attribute=Q,Q&&Q.data&&(gt.data=Q.data),W[H]=gt,X++}r.attributes=W,r.attributesNum=X,r.index=G}function _(){let M=r.newAttributes;for(let P=0,z=M.length;P<z;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){let z=r.newAttributes,G=r.enabledAttributes,W=r.attributeDivisors;z[M]=1,G[M]===0&&(n.enableVertexAttribArray(M),G[M]=1),W[M]!==P&&(n.vertexAttribDivisor(M,P),W[M]=P)}function E(){let M=r.newAttributes,P=r.enabledAttributes;for(let z=0,G=P.length;z<G;z++)P[z]!==M[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function b(M,P,z,G,W,Z,X){X===!0?n.vertexAttribIPointer(M,P,z,W,Z):n.vertexAttribPointer(M,P,z,G,W,Z)}function y(M,P,z,G){_();let W=G.attributes,Z=z.getAttributes(),X=P.defaultAttributeValues;for(let tt in Z){let H=Z[tt];if(H.location>=0){let at=W[tt];if(at===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){let Q=at.normalized,gt=at.itemSize,Gt=t.get(at);if(Gt===void 0)continue;let oe=Gt.buffer,he=Gt.type,te=Gt.bytesPerElement,$=he===n.INT||he===n.UNSIGNED_INT||at.gpuType===Sl;if(at.isInterleavedBufferAttribute){let K=at.data,yt=K.stride,B=at.offset;if(K.isInstancedInterleavedBuffer){for(let _t=0;_t<H.locationSize;_t++)f(H.location+_t,K.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _t=0;_t<H.locationSize;_t++)m(H.location+_t);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let _t=0;_t<H.locationSize;_t++)b(H.location+_t,gt/H.locationSize,he,Q,yt*te,(B+gt/H.locationSize*_t)*te,$)}else{if(at.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)f(H.location+K,at.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let K=0;K<H.locationSize;K++)b(H.location+K,gt/H.locationSize,he,Q,gt*te,gt/H.locationSize*K*te,$)}}else if(X!==void 0){let Q=X[tt];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(H.location,Q);break;case 3:n.vertexAttrib3fv(H.location,Q);break;case 4:n.vertexAttrib4fv(H.location,Q);break;default:n.vertexAttrib1fv(H.location,Q)}}}}E()}function A(){N();for(let M in i){let P=i[M];for(let z in P){let G=P[z];for(let W in G)u(G[W].object),delete G[W];delete P[z]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let z in P){let G=P[z];for(let W in G)u(G[W].object),delete G[W];delete P[z]}delete i[M.id]}function C(M){for(let P in i){let z=i[P];if(z[M.id]===void 0)continue;let G=z[M.id];for(let W in G)u(G[W].object),delete G[W];delete z[M.id]}}function N(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function M2(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function S2(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==In&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let N=C===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ni&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function b2(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Rn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let E=r?0:i,b=E*4,y=f.clippingState||null;l.value=y,y=u(g,d,b,p);for(let A=0;A!==b;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=p;b!==_;++b,y+=4)o.copy(h[b]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function E2(n){let t=new WeakMap;function e(o,a){return a===vl?o.mapping=_s:a===yl&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vl||a===yl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Wa(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Er=4,rf=[.125,.215,.35,.446,.526,.582],bs=20,Eu=new gr,of=new Xt,wu=null,Tu=0,Au=0,Ru=!1,Ss=(1+Math.sqrt(5))/2,br=1/Ss,af=[new I(-Ss,br,0),new I(Ss,br,0),new I(-br,0,Ss),new I(br,0,Ss),new I(0,Ss,-br),new I(0,Ss,br),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],w2=new I,rc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=w2}=r;wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wu,Tu,Au),this._renderer.xr.enabled=Ru,t.scissorTest=!1,ic(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:hn,format:In,colorSpace:ds,depthBuffer:!1},s=lf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T2(r)),this._blurMaterial=A2(r,t,e)}return s}_compileMaterial(t){let e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Eu)}_sceneToCubeUV(t,e,i,s,r){let l=new Ke(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(of),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let _=new fs({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new be(new dr,_),f=!1,E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,f=!0):(_.color.copy(of),f=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let A=this._cubeSize;ic(s,y*A,b>2?A:0,A,A),h.setRenderTarget(s),f&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=E}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===_s||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ic(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Eu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=af[(s-r-1)%af.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new be(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):bs;m>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bs}`);let f=[],E=0;for(let C=0;C<bs;++C){let N=C/_,S=Math.exp(-N*N/2);f.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let y=this._sizeLods[s],A=3*y*(s>b-Er?s-b+Er:0),R=4*(this._cubeSize-y);ic(e,A,R,3*y,2*y),l.setRenderTarget(e),l.render(h,Eu)}};function T2(n){let t=[],e=[],i=[],s=n,r=n-Er+1+rf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Er?l=rf[o-n+Er-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){let C=R%3*2/3-1,N=R>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];E.set(S,_*g*R),b.set(d,m*g*R);let M=[R,R,R,R,R,R];y.set(M,f*g*R)}let A=new Ge;A.setAttribute("position",new Fe(E,_)),A.setAttribute("uv",new Fe(b,m)),A.setAttribute("faceIndex",new Fe(y,f)),t.push(A),s>Er&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function lf(n,t,e){let i=new He(n,t,e);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ic(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function A2(n,t,e){let i=new Float32Array(bs),s=new I(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function cf(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function hf(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R2(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===vl||l===yl,u=l===_s||l===xs;if(c||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new rc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function C2(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function P2(n,t,e,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,g=h.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let b=0,y=E.length;b<y;b+=3){let A=E[b+0],R=E[b+1],C=E[b+2];d.push(A,R,R,C,C,A)}}else if(g!==void 0){let E=g.array;_=g.version;for(let b=0,y=E.length/3-1;b<y;b+=3){let A=b+0,R=b+1,C=b+2;d.push(A,R,R,C,C,A)}}else return;let m=new(vu(d)?go:mo)(d,1);m.version=_;let f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function I2(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function D2(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function L2(n,t,e){let i=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let y=a.attributes.position.count*b,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*A*4*h),C=new po(R,y,A,h);C.type=ii,C.needsUpdate=!0;let N=b*4;for(let M=0;M<h;M++){let P=m[M],z=f[M],G=E[M],W=y*A*4*M;for(let Z=0;Z<P.count;Z++){let X=Z*N;p===!0&&(s.fromBufferAttribute(P,Z),R[W+X+0]=s.x,R[W+X+1]=s.y,R[W+X+2]=s.z,R[W+X+3]=0),g===!0&&(s.fromBufferAttribute(z,Z),R[W+X+4]=s.x,R[W+X+5]=s.y,R[W+X+6]=s.z,R[W+X+7]=0),_===!0&&(s.fromBufferAttribute(G,Z),R[W+X+8]=s.x,R[W+X+9]=s.y,R[W+X+10]=s.z,R[W+X+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new At(y,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function U2(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Cf=new ln,uf=new So(1,1),Pf=new po,If=new Ha,Df=new xo,df=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Tr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=df[s];if(r===void 0&&(r=new Float32Array(s),df[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ac(n,t){let e=ff[t];e===void 0&&(e=new Int32Array(t),ff[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function N2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function F2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function O2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function B2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function z2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),Be(e,i)}}function k2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),Be(e,i)}}function V2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),Be(e,i)}}function H2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function G2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function W2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function X2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function q2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Y2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function $2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function Z2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function J2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(uf.compareFunction=gu,r=uf):r=Cf,e.setTexture2D(t||r,s)}function K2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||If,s)}function j2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Df,s)}function Q2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pf,s)}function tx(n){switch(n){case 5126:return N2;case 35664:return F2;case 35665:return O2;case 35666:return B2;case 35674:return z2;case 35675:return k2;case 35676:return V2;case 5124:case 35670:return H2;case 35667:case 35671:return G2;case 35668:case 35672:return W2;case 35669:case 35673:return X2;case 5125:return q2;case 36294:return Y2;case 36295:return $2;case 36296:return Z2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return Q2}}function ex(n,t){n.uniform1fv(this.addr,t)}function nx(n,t){let e=Tr(t,this.size,2);n.uniform2fv(this.addr,e)}function ix(n,t){let e=Tr(t,this.size,3);n.uniform3fv(this.addr,e)}function sx(n,t){let e=Tr(t,this.size,4);n.uniform4fv(this.addr,e)}function rx(n,t){let e=Tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ox(n,t){let e=Tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ax(n,t){let e=Tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lx(n,t){n.uniform1iv(this.addr,t)}function cx(n,t){n.uniform2iv(this.addr,t)}function hx(n,t){n.uniform3iv(this.addr,t)}function ux(n,t){n.uniform4iv(this.addr,t)}function dx(n,t){n.uniform1uiv(this.addr,t)}function fx(n,t){n.uniform2uiv(this.addr,t)}function px(n,t){n.uniform3uiv(this.addr,t)}function mx(n,t){n.uniform4uiv(this.addr,t)}function gx(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cf,r[o])}function _x(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||If,r[o])}function xx(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Df,r[o])}function vx(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pf,r[o])}function yx(n){switch(n){case 5126:return ex;case 35664:return nx;case 35665:return ix;case 35666:return sx;case 35674:return rx;case 35675:return ox;case 35676:return ax;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return fx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return vx}}var Pu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tx(e.type)}},Iu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yx(e.type)}},Du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Cu=/(\w+)(\])?(\[|\.)?/g;function _f(n,t){n.seq.push(t),n.map[t.id]=t}function Mx(n,t,e){let i=n.name,s=i.length;for(Cu.lastIndex=0;;){let r=Cu.exec(i),o=Cu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_f(e,c===void 0?new Pu(a,n,t):new Iu(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Du(a),_f(e,h)),e=h}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Mx(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function xf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Sx=37297,bx=0;function Ex(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var vf=new Vt;function wx(n){jt._getMatrix(vf,jt.workingColorSpace,n);let t=`mat3( ${vf.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case uo:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function yf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ex(n.getShaderSource(t),a)}else return r}function Tx(n,t){let e=wx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ax(n,t){let e;switch(t){case fl:e="Linear";break;case pl:e="Reinhard";break;case ml:e="Cineon";break;case gl:e="ACESFilmic";break;case xr:e="AgX";break;case xl:e="Neutral";break;case _l:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sc=new I;function Rx(){jt.getLuminanceCoefficients(sc);let n=sc.x.toFixed(4),t=sc.y.toFixed(4),e=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function Px(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ix(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zo(n){return n!==""}function Mf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(n){return n.replace(Dx,Ux)}var Lx=new Map;function Ux(n,t){let e=qt[t];if(e===void 0){let i=Lx.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lu(e)}var Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(n){return n.replace(Nx,Fx)}function Fx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ox(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Bx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case xs:t="ENVMAP_TYPE_CUBE";break;case Lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zx(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===xs&&(t="ENVMAP_MODE_REFRACTION"),t}function kx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case kd:t="ENVMAP_BLENDING_MIX";break;case Vd:t="ENVMAP_BLENDING_ADD";break}return t}function Vx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Hx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ox(e),c=Bx(e),u=zx(e),h=kx(e),d=Vx(e),p=Cx(e),g=Px(r),_=s.createProgram(),m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zo).join(`
`),f.length>0&&(f+=`
`)):(m=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),f=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?qt.tonemapping_pars_fragment:"",e.toneMapping!==yi?Ax("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Tx("linearToOutputTexel",e.outputColorSpace),Rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zo).join(`
`)),o=Lu(o),o=Mf(o,e),o=Sf(o,e),a=Lu(a),a=Mf(a,e),a=Sf(a,e),o=bf(o),a=bf(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=E+m+o,y=E+f+a,A=xf(s,s.VERTEX_SHADER,b),R=xf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(R)||"",Z=z.trim(),X=G.trim(),tt=W.trim(),H=!0,at=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,R);else{let Q=yf(s,A,"vertex"),gt=yf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+Q+`
`+gt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(X===""||tt==="")&&(at=!1);at&&(P.diagnostics={runnable:H,programLog:Z,vertexShader:{log:X,prefix:m},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(A),s.deleteShader(R),N=new wr(s,_),S=Ix(s,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Sx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}var Gx=0,Uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Nu(t),e.set(t,i)),i}},Nu=class{constructor(t){this.id=Gx++,this.code=t,this.usedTimes=0}};function Wx(n,t,e,i,s,r,o){let a=new ur,l=new Uu,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,z,G){let W=z.fog,Z=G.geometry,X=S.isMeshStandardMaterial?z.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),H=tt&&tt.mapping===Lo?tt.image.height:null,at=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=Q!==void 0?Q.length:0,Gt=0;Z.morphAttributes.position!==void 0&&(Gt=1),Z.morphAttributes.normal!==void 0&&(Gt=2),Z.morphAttributes.color!==void 0&&(Gt=3);let oe,he,te,$;if(at){let ae=si[at];oe=ae.vertexShader,he=ae.fragmentShader}else oe=S.vertexShader,he=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);let K=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),B=G.isInstancedMesh===!0,_t=G.isBatchedMesh===!0,Jt=!!S.map,Ut=!!S.matcap,T=!!tt,kt=!!S.aoMap,bt=!!S.lightMap,xt=!!S.bumpMap,pt=!!S.normalMap,ee=!!S.displacementMap,Mt=!!S.emissiveMap,Ot=!!S.metalnessMap,ke=!!S.roughnessMap,Ce=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,O=S.iridescence>0,Y=S.sheen>0,j=S.transmission>0,q=Ce&&!!S.anisotropyMap,It=w&&!!S.clearcoatMap,ot=w&&!!S.clearcoatNormalMap,Rt=w&&!!S.clearcoatRoughnessMap,Ct=O&&!!S.iridescenceMap,st=O&&!!S.iridescenceThicknessMap,ft=Y&&!!S.sheenColorMap,Ft=Y&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,ut=!!S.specularColorMap,Wt=!!S.specularIntensityMap,D=j&&!!S.transmissionMap,rt=j&&!!S.thicknessMap,ct=!!S.gradientMap,St=!!S.alphaMap,et=S.alphaTest>0,J=!!S.alphaHash,Tt=!!S.extensions,Ht=yi;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let ge={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:he,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:_t,batchingColor:_t&&G._colorsTexture!==null,instancing:B,instancingColor:B&&G.instanceColor!==null,instancingMorph:B&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ds,alphaToCoverage:!!S.alphaToCoverage,map:Jt,matcap:Ut,envMap:T,envMapMode:T&&tt.mapping,envMapCubeUVHeight:H,aoMap:kt,lightMap:bt,bumpMap:xt,normalMap:pt,displacementMap:d&&ee,emissiveMap:Mt,normalMapObjectSpace:pt&&S.normalMapType===qd,normalMapTangentSpace:pt&&S.normalMapType===Xd,metalnessMap:Ot,roughnessMap:ke,anisotropy:Ce,anisotropyMap:q,clearcoat:w,clearcoatMap:It,clearcoatNormalMap:ot,clearcoatRoughnessMap:Rt,dispersion:x,iridescence:O,iridescenceMap:Ct,iridescenceThicknessMap:st,sheen:Y,sheenColorMap:ft,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:ut,specularIntensityMap:Wt,transmission:j,transmissionMap:D,thicknessMap:rt,gradientMap:ct,opaque:S.transparent===!1&&S.blending===cs&&S.alphaToCoverage===!1,alphaMap:St,alphaTest:et,alphaHash:J,combine:S.combine,mapUv:Jt&&_(S.map.channel),aoMapUv:kt&&_(S.aoMap.channel),lightMapUv:bt&&_(S.lightMap.channel),bumpMapUv:xt&&_(S.bumpMap.channel),normalMapUv:pt&&_(S.normalMap.channel),displacementMapUv:ee&&_(S.displacementMap.channel),emissiveMapUv:Mt&&_(S.emissiveMap.channel),metalnessMapUv:Ot&&_(S.metalnessMap.channel),roughnessMapUv:ke&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:It&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(S.sheenRoughnessMap.channel),specularMapUv:Pt&&_(S.specularMap.channel),specularColorMapUv:ut&&_(S.specularColorMap.channel),specularIntensityMapUv:Wt&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:rt&&_(S.thicknessMap.channel),alphaMapUv:St&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(pt||Ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(Jt||St),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:yt,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Jt&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:Mt&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pn,flipSided:S.side===Xe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Tt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&S.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function f(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(M,S),b(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let M=g[S.type],P;if(M){let z=si[M];P=Mi.clone(z.uniforms)}else P=S.uniforms;return P}function A(S,M){let P;for(let z=0,G=u.length;z<G;z++){let W=u[z];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Hx(n,M,S,r),u.push(P)),P}function R(S){if(--S.usedTimes===0){let M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:N}}function Xx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function qx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function wf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Tf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,g,_,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function a(h,d,p,g,_,m){let f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,_,m){let f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||qx),i.length>1&&i.sort(d||wf),s.length>1&&s.sort(d||wf)}function u(){for(let h=t,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Yx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Tf,n.set(i,[o])):s>=r.length?(o=new Tf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function $x(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Xt};break;case"SpotLight":e={position:new I,direction:new I,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Zx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Jx=0;function Kx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jx(n){let t=new $x,e=Zx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new ve,o=new ve;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,b=0,y=0,A=0,R=0,C=0;c.sort(Kx);for(let S=0,M=c.length;S<M;S++){let P=c[S],z=P.color,G=P.intensity,W=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*G,h+=z.g*G,d+=z.b*G;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],G);C++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,H=e.get(P);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=X,p++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(G),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;let tt=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,tt.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[_]=tt.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=Z,y++}_++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(z).multiplyScalar(G),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let tt=P.shadow,H=e.get(P);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=X,g++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(G),X.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==y||N.numSpotMaps!==A||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=y,N.numSpotMaps=A,N.numLightProbes=C,i.version=Jx++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let b=c[f];if(b.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(b.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Af(n){let t=new jx(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Qx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Af(n),t.set(s,[a])):r>=o.length?(a=new Af(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nv(n,t,e){let i=new yo,s=new At,r=new At,o=new Re,a=new $a({depthPacking:Wd}),l=new Za,c={},u=e.maxTextureSize,h={[kn]:Xe,[Xe]:kn,[Pn]:Pn},d=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:tv,fragmentShader:ev}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ge;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let f=this.type;this.render=function(R,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Wn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=f!==ei&&this.type===ei,W=f===ei&&this.type!==ei;for(let Z=0,X=R.length;Z<X;Z++){let tt=R[Z],H=tt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let at=H.getFrameExtents();if(s.multiply(at),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,H.mapSize.y=r.y)),H.map===null||G===!0||W===!0){let gt=this.type!==ei?{minFilter:Cn,magFilter:Cn}:{};H.map!==null&&H.map.dispose(),H.map=new He(s.x,s.y,gt),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let Q=H.getViewportCount();for(let gt=0;gt<Q;gt++){let Gt=H.getViewport(gt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),z.viewport(o),H.updateMatrices(tt,gt),i=H.getFrustum(),y(C,N,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===ei&&E(H,N),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,P)};function E(R,C){let N=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new He(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,N,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,N,p,_,null)}function b(R,C,N,S){let M=null,P=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=M.uuid,G=C.uuid,W=c[z];W===void 0&&(W={},c[z]=W);let Z=W[G];Z===void 0&&(Z=M.clone(),W[G]=Z,C.addEventListener("dispose",A)),M=Z}if(M.visible=C.visible,M.wireframe=C.wireframe,S===ei?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=n.properties.get(M);z.light=N}return M}function y(R,C,N,S,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ei)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let G=t.update(R),W=R.material;if(Array.isArray(W)){let Z=G.groups;for(let X=0,tt=Z.length;X<tt;X++){let H=Z[X],at=W[H.materialIndex];if(at&&at.visible){let Q=b(R,at,S,M);R.onBeforeShadow(n,R,C,N,G,Q,H),n.renderBufferDirect(N,null,G,Q,R,H),R.onAfterShadow(n,R,C,N,G,Q,H)}}}else if(W.visible){let Z=b(R,W,S,M);R.onBeforeShadow(n,R,C,N,G,Z,null),n.renderBufferDirect(N,null,G,Z,R,null),R.onAfterShadow(n,R,C,N,G,Z,null)}}let z=R.children;for(let G=0,W=z.length;G<W;G++)y(z[G],C,N,S,M)}function A(R){R.target.removeEventListener("dispose",A);for(let N in c){let S=c[N],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var iv={[ol]:al,[ll]:ul,[cl]:dl,[us]:hl,[al]:ol,[ul]:ll,[dl]:cl,[hl]:us};function sv(n,t){function e(){let D=!1,rt=new Re,ct=null,St=new Re(0,0,0,0);return{setMask:function(et){ct!==et&&!D&&(n.colorMask(et,et,et,et),ct=et)},setLocked:function(et){D=et},setClear:function(et,J,Tt,Ht,ge){ge===!0&&(et*=Ht,J*=Ht,Tt*=Ht),rt.set(et,J,Tt,Ht),St.equals(rt)===!1&&(n.clearColor(et,J,Tt,Ht),St.copy(rt))},reset:function(){D=!1,ct=null,St.set(-1,0,0,0)}}}function i(){let D=!1,rt=!1,ct=null,St=null,et=null;return{setReversed:function(J){if(rt!==J){let Tt=t.get("EXT_clip_control");J?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),rt=J;let Ht=et;et=null,this.setClear(Ht)}},getReversed:function(){return rt},setTest:function(J){J?K(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(J){ct!==J&&!D&&(n.depthMask(J),ct=J)},setFunc:function(J){if(rt&&(J=iv[J]),St!==J){switch(J){case ol:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=J}},setLocked:function(J){D=J},setClear:function(J){et!==J&&(rt&&(J=1-J),n.clearDepth(J),et=J)},reset:function(){D=!1,ct=null,St=null,et=null,rt=!1}}}function s(){let D=!1,rt=null,ct=null,St=null,et=null,J=null,Tt=null,Ht=null,ge=null;return{setTest:function(ae){D||(ae?K(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(ae){rt!==ae&&!D&&(n.stencilMask(ae),rt=ae)},setFunc:function(ae,di,Zn){(ct!==ae||St!==di||et!==Zn)&&(n.stencilFunc(ae,di,Zn),ct=ae,St=di,et=Zn)},setOp:function(ae,di,Zn){(J!==ae||Tt!==di||Ht!==Zn)&&(n.stencilOp(ae,di,Zn),J=ae,Tt=di,Ht=Zn)},setLocked:function(ae){D=ae},setClear:function(ae){ge!==ae&&(n.clearStencil(ae),ge=ae)},reset:function(){D=!1,rt=null,ct=null,St=null,et=null,J=null,Tt=null,Ht=null,ge=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,y=null,A=null,R=null,C=new Xt(0,0,0),N=0,S=!1,M=null,P=null,z=null,G=null,W=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=tt>=2);let at=null,Q={},gt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),oe=new Re().fromArray(gt),he=new Re().fromArray(Gt);function te(D,rt,ct,St){let et=new Uint8Array(4),J=n.createTexture();n.bindTexture(D,J),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<ct;Tt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,et):n.texImage2D(rt+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,et);return J}let $={};$[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(us),xt(!1),pt(nu),K(n.CULL_FACE),kt(Wn);function K(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function yt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function B(D,rt){return h[D]!==rt?(n.bindFramebuffer(D,rt),h[D]=rt,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=rt),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function _t(D,rt){let ct=p,St=!1;if(D){ct=d.get(rt),ct===void 0&&(ct=[],d.set(rt,ct));let et=D.textures;if(ct.length!==et.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Tt=et.length;J<Tt;J++)ct[J]=n.COLOR_ATTACHMENT0+J;ct.length=et.length,St=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,St=!0);St&&n.drawBuffers(ct)}function Jt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let Ut={[Ni]:n.FUNC_ADD,[Ed]:n.FUNC_SUBTRACT,[wd]:n.FUNC_REVERSE_SUBTRACT};Ut[Td]=n.MIN,Ut[Ad]=n.MAX;let T={[Rd]:n.ZERO,[Do]:n.ONE,[Cd]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[Nd]:n.SRC_ALPHA_SATURATE,[Ld]:n.DST_COLOR,[Id]:n.DST_ALPHA,[Pd]:n.ONE_MINUS_SRC_COLOR,[hs]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Dd]:n.ONE_MINUS_DST_ALPHA,[Fd]:n.CONSTANT_COLOR,[Od]:n.ONE_MINUS_CONSTANT_COLOR,[Bd]:n.CONSTANT_ALPHA,[zd]:n.ONE_MINUS_CONSTANT_ALPHA};function kt(D,rt,ct,St,et,J,Tt,Ht,ge,ae){if(D===Wn){_===!0&&(yt(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),D!==Io){if(D!==m||ae!==S){if((f!==Ni||y!==Ni)&&(n.blendEquation(n.FUNC_ADD),f=Ni,y=Ni),ae)switch(D){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case su:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,b=null,A=null,R=null,C.set(0,0,0),N=0,m=D,S=ae}return}et=et||rt,J=J||ct,Tt=Tt||St,(rt!==f||et!==y)&&(n.blendEquationSeparate(Ut[rt],Ut[et]),f=rt,y=et),(ct!==E||St!==b||J!==A||Tt!==R)&&(n.blendFuncSeparate(T[ct],T[St],T[J],T[Tt]),E=ct,b=St,A=J,R=Tt),(Ht.equals(C)===!1||ge!==N)&&(n.blendColor(Ht.r,Ht.g,Ht.b,ge),C.copy(Ht),N=ge),m=D,S=!1}function bt(D,rt){D.side===Pn?yt(n.CULL_FACE):K(n.CULL_FACE);let ct=D.side===Xe;rt&&(ct=!ct),xt(ct),D.blending===cs&&D.transparent===!1?kt(Wn):kt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let St=D.stencilWrite;a.setTest(St),St&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Mt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function pt(D){D!==Md?(K(n.CULL_FACE),D!==P&&(D===nu?n.cullFace(n.BACK):D===Sd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),P=D}function ee(D){D!==z&&(X&&n.lineWidth(D),z=D)}function Mt(D,rt,ct){D?(K(n.POLYGON_OFFSET_FILL),(G!==rt||W!==ct)&&(n.polygonOffset(rt,ct),G=rt,W=ct)):yt(n.POLYGON_OFFSET_FILL)}function Ot(D){D?K(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function ke(D){D===void 0&&(D=n.TEXTURE0+Z-1),at!==D&&(n.activeTexture(D),at=D)}function Ce(D,rt,ct){ct===void 0&&(at===null?ct=n.TEXTURE0+Z-1:ct=at);let St=Q[ct];St===void 0&&(St={type:void 0,texture:void 0},Q[ct]=St),(St.type!==D||St.texture!==rt)&&(at!==ct&&(n.activeTexture(ct),at=ct),n.bindTexture(D,rt||$[D]),St.type=D,St.texture=rt)}function w(){let D=Q[at];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(D){oe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function Ft(D){he.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function Pt(D,rt){let ct=c.get(rt);ct===void 0&&(ct=new WeakMap,c.set(rt,ct));let St=ct.get(D);St===void 0&&(St=n.getUniformBlockIndex(rt,D.name),ct.set(D,St))}function ut(D,rt){let St=c.get(rt).get(D);l.get(rt)!==St&&(n.uniformBlockBinding(rt,St,D.__bindingPointIndex),l.set(rt,St))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},at=null,Q={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,y=null,A=null,R=null,C=new Xt(0,0,0),N=0,S=!1,M=null,P=null,z=null,G=null,W=null,oe.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:yt,bindFramebuffer:B,drawBuffers:_t,useProgram:Jt,setBlending:kt,setMaterial:bt,setFlipSided:xt,setCullFace:pt,setLineWidth:ee,setPolygonOffset:Mt,setScissorTest:Ot,activeTexture:ke,bindTexture:Ce,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Ct,texImage3D:st,updateUBOMapping:Pt,uniformBlockBinding:ut,texStorage2D:ot,texStorage3D:Rt,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:It,scissor:ft,viewport:Ft,reset:Wt}}function rv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):lr("canvas")}function _(w,x,O){let Y=1,j=Ce(w);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let q=Math.floor(Y*j.width),It=Math.floor(Y*j.height);h===void 0&&(h=g(q,It));let ot=x?g(q,It):h;return ot.width=q,ot.height=It,ot.getContext("2d").drawImage(w,0,0,q,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+It+")."),ot}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,x,O,Y,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),x===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){let It=j?uo:jt.getTransfer(Y);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=It===se?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(w,x){let O;return w?x===null||x===Gi||x===yr?O=n.DEPTH24_STENCIL8:x===ii?O=n.DEPTH32F_STENCIL8:x===vr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gi||x===yr?O=n.DEPTH_COMPONENT24:x===ii?O=n.DEPTH_COMPONENT32F:x===vr&&(O=n.DEPTH_COMPONENT16),O}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==Vn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){let x=w.target;x.removeEventListener("dispose",R),N(x),x.isVideoTexture&&u.delete(x)}function C(w){let x=w.target;x.removeEventListener("dispose",C),M(x)}function N(w){let x=i.get(w);if(x.__webglInit===void 0)return;let O=w.source,Y=d.get(O);if(Y){let j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(w),Object.keys(Y).length===0&&d.delete(O)}i.remove(w)}function S(w){let x=i.get(w);n.deleteTexture(x.__webglTexture);let O=w.source,Y=d.get(O);delete Y[x.__cacheKey],o.memory.textures--}function M(w){let x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=w.textures;for(let Y=0,j=O.length;Y<j;Y++){let q=i.get(O[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(w)}let P=0;function z(){P=0}function G(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function W(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function Z(w,x){let O=i.get(w);if(w.isVideoTexture&&Ot(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function X(w,x){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){$(O,w,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function tt(w,x){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){$(O,w,x);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function H(w,x){let O=i.get(w);if(w.version>0&&O.__version!==w.version){K(O,w,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}let at={[rr]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},Q={[Cn]:n.NEAREST,[Hd]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[Ml]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},gt={[Yd]:n.NEVER,[Qd]:n.ALWAYS,[$d]:n.LESS,[gu]:n.LEQUAL,[Zd]:n.EQUAL,[jd]:n.GEQUAL,[Jd]:n.GREATER,[Kd]:n.NOTEQUAL};function Gt(w,x){if(x.type===ii&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Vn||x.magFilter===Ml||x.magFilter===Uo||x.magFilter===Hi||x.minFilter===Vn||x.minFilter===Ml||x.minFilter===Uo||x.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,at[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,at[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,at[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Q[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,gt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Cn||x.minFilter!==Uo&&x.minFilter!==Hi||x.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function oe(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));let Y=x.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let q=W(x);if(q!==w.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[q].usedTimes++;let It=j[w.__cacheKey];It!==void 0&&(j[w.__cacheKey].usedTimes--,It.usedTimes===0&&S(x)),w.__cacheKey=q,w.__webglTexture=j[q].texture}return O}function he(w,x,O){return Math.floor(Math.floor(w/O)/x)}function te(w,x,O,Y){let q=w.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,Y,x.data);else{q.sort((st,ft)=>st.start-ft.start);let It=0;for(let st=1;st<q.length;st++){let ft=q[It],Ft=q[st],Pt=ft.start+ft.count,ut=he(Ft.start,x.width,4),Wt=he(ft.start,x.width,4);Ft.start<=Pt+1&&ut===Wt&&he(Ft.start+Ft.count-1,x.width,4)===ut?ft.count=Math.max(ft.count,Ft.start+Ft.count-ft.start):(++It,q[It]=Ft)}q.length=It+1;let ot=n.getParameter(n.UNPACK_ROW_LENGTH),Rt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ct=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let st=0,ft=q.length;st<ft;st++){let Ft=q[st],Pt=Math.floor(Ft.start/4),ut=Math.ceil(Ft.count/4),Wt=Pt%x.width,D=Math.floor(Pt/x.width),rt=ut,ct=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Wt),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Wt,D,rt,ct,O,Y,x.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ot),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Rt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ct)}}function $(w,x,O){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);let j=oe(w,x),q=x.source;e.bindTexture(Y,w.__webglTexture,n.TEXTURE0+O);let It=i.get(q);if(q.version!==It.__version||j===!0){e.activeTexture(n.TEXTURE0+O);let ot=jt.getPrimaries(jt.workingColorSpace),Rt=x.colorSpace===Xn?null:jt.getPrimaries(x.colorSpace),Ct=x.colorSpace===Xn||ot===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let st=_(x.image,!1,s.maxTextureSize);st=ke(x,st);let ft=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),Pt=b(x.internalFormat,ft,Ft,x.colorSpace,x.isVideoTexture);Gt(Y,x);let ut,Wt=x.mipmaps,D=x.isVideoTexture!==!0,rt=It.__version===void 0||j===!0,ct=q.dataReady,St=A(x,st);if(x.isDepthTexture)Pt=y(x.format===Mr,x.type),rt&&(D?e.texStorage2D(n.TEXTURE_2D,1,Pt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Pt,st.width,st.height,0,ft,Ft,null));else if(x.isDataTexture)if(Wt.length>0){D&&rt&&e.texStorage2D(n.TEXTURE_2D,St,Pt,Wt[0].width,Wt[0].height);for(let et=0,J=Wt.length;et<J;et++)ut=Wt[et],D?ct&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,Ft,ut.data):e.texImage2D(n.TEXTURE_2D,et,Pt,ut.width,ut.height,0,ft,Ft,ut.data);x.generateMipmaps=!1}else D?(rt&&e.texStorage2D(n.TEXTURE_2D,St,Pt,st.width,st.height),ct&&te(x,st,ft,Ft)):e.texImage2D(n.TEXTURE_2D,0,Pt,st.width,st.height,0,ft,Ft,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Pt,Wt[0].width,Wt[0].height,st.depth);for(let et=0,J=Wt.length;et<J;et++)if(ut=Wt[et],x.format!==In)if(ft!==null)if(D){if(ct)if(x.layerUpdates.size>0){let Tt=bu(ut.width,ut.height,x.format,x.type);for(let Ht of x.layerUpdates){let ge=ut.data.subarray(Ht*Tt/ut.data.BYTES_PER_ELEMENT,(Ht+1)*Tt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,Ht,ut.width,ut.height,1,ft,ge)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,st.depth,ft,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Pt,ut.width,ut.height,st.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,st.depth,ft,Ft,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Pt,ut.width,ut.height,st.depth,0,ft,Ft,ut.data)}else{D&&rt&&e.texStorage2D(n.TEXTURE_2D,St,Pt,Wt[0].width,Wt[0].height);for(let et=0,J=Wt.length;et<J;et++)ut=Wt[et],x.format!==In?ft!==null?D?ct&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Pt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ct&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,Ft,ut.data):e.texImage2D(n.TEXTURE_2D,et,Pt,ut.width,ut.height,0,ft,Ft,ut.data)}else if(x.isDataArrayTexture)if(D){if(rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Pt,st.width,st.height,st.depth),ct)if(x.layerUpdates.size>0){let et=bu(st.width,st.height,x.format,x.type);for(let J of x.layerUpdates){let Tt=st.data.subarray(J*et/st.data.BYTES_PER_ELEMENT,(J+1)*et/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,st.width,st.height,1,ft,Ft,Tt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ft,Ft,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,st.width,st.height,st.depth,0,ft,Ft,st.data);else if(x.isData3DTexture)D?(rt&&e.texStorage3D(n.TEXTURE_3D,St,Pt,st.width,st.height,st.depth),ct&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ft,Ft,st.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,st.width,st.height,st.depth,0,ft,Ft,st.data);else if(x.isFramebufferTexture){if(rt)if(D)e.texStorage2D(n.TEXTURE_2D,St,Pt,st.width,st.height);else{let et=st.width,J=st.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,Pt,et,J,0,ft,Ft,null),et>>=1,J>>=1}}else if(Wt.length>0){if(D&&rt){let et=Ce(Wt[0]);e.texStorage2D(n.TEXTURE_2D,St,Pt,et.width,et.height)}for(let et=0,J=Wt.length;et<J;et++)ut=Wt[et],D?ct&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ft,Ft,ut):e.texImage2D(n.TEXTURE_2D,et,Pt,ft,Ft,ut);x.generateMipmaps=!1}else if(D){if(rt){let et=Ce(st);e.texStorage2D(n.TEXTURE_2D,St,Pt,et.width,et.height)}ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Ft,st)}else e.texImage2D(n.TEXTURE_2D,0,Pt,ft,Ft,st);m(x)&&f(Y),It.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function K(w,x,O){if(x.image.length!==6)return;let Y=oe(w,x),j=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);let q=i.get(j);if(j.version!==q.__version||Y===!0){e.activeTexture(n.TEXTURE0+O);let It=jt.getPrimaries(jt.workingColorSpace),ot=x.colorSpace===Xn?null:jt.getPrimaries(x.colorSpace),Rt=x.colorSpace===Xn||It===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Ct=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!Ct&&!st?ft[J]=_(x.image[J],!0,s.maxCubemapSize):ft[J]=st?x.image[J].image:x.image[J],ft[J]=ke(x,ft[J]);let Ft=ft[0],Pt=r.convert(x.format,x.colorSpace),ut=r.convert(x.type),Wt=b(x.internalFormat,Pt,ut,x.colorSpace),D=x.isVideoTexture!==!0,rt=q.__version===void 0||Y===!0,ct=j.dataReady,St=A(x,Ft);Gt(n.TEXTURE_CUBE_MAP,x);let et;if(Ct){D&&rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Wt,Ft.width,Ft.height);for(let J=0;J<6;J++){et=ft[J].mipmaps;for(let Tt=0;Tt<et.length;Tt++){let Ht=et[Tt];x.format!==In?Pt!==null?D?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,0,0,Ht.width,Ht.height,Pt,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,Wt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,0,0,Ht.width,Ht.height,Pt,ut,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,Wt,Ht.width,Ht.height,0,Pt,ut,Ht.data)}}}else{if(et=x.mipmaps,D&&rt){et.length>0&&St++;let J=Ce(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(st){D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,Pt,ut,ft[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,ft[J].width,ft[J].height,0,Pt,ut,ft[J].data);for(let Tt=0;Tt<et.length;Tt++){let ge=et[Tt].image[J].image;D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,0,0,ge.width,ge.height,Pt,ut,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,Wt,ge.width,ge.height,0,Pt,ut,ge.data)}}else{D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,ut,ft[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Pt,ut,ft[J]);for(let Tt=0;Tt<et.length;Tt++){let Ht=et[Tt];D?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,0,0,Pt,ut,Ht.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,Wt,Pt,ut,Ht.image[J])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),q.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function yt(w,x,O,Y,j,q){let It=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),Rt=b(O.internalFormat,It,ot,O.colorSpace),Ct=i.get(x),st=i.get(O);if(st.__renderTarget=x,!Ct.__hasExternalTextures){let ft=Math.max(1,x.width>>q),Ft=Math.max(1,x.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,q,Rt,ft,Ft,x.depth,0,It,ot,null):e.texImage2D(j,q,Rt,ft,Ft,0,It,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Mt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,st.__webglTexture,0,ee(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,st.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function B(w,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){let Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=y(x.stencilBuffer,j),It=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=ee(x);Mt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,q,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,w)}else{let Y=x.textures;for(let j=0;j<Y.length;j++){let q=Y[j],It=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),Rt=b(q.internalFormat,It,ot,q.colorSpace),Ct=ee(x);O&&Mt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,Rt,x.width,x.height):Mt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct,Rt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);let j=Y.__webglTexture,q=ee(x);if(x.depthTexture.format===or)Mt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===Mr)Mt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Jt(w){let x=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let Y=w.texture.mipmaps;Y&&Y.length>0?_t(x.__webglFramebuffer[0],w):_t(x.__webglFramebuffer,w)}else if(O){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),B(x.__webglDepthbuffer[Y],w,!1);else{let j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else{let Y=w.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),B(x.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(w,x,O){let Y=i.get(w);x!==void 0&&yt(Y.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Jt(w)}function T(w){let x=w.texture,O=i.get(w),Y=i.get(x);w.addEventListener("dispose",C);let j=w.textures,q=w.isWebGLCubeRenderTarget===!0,It=j.length>1;if(It||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let Rt=0;Rt<x.mipmaps.length;Rt++)O.__webglFramebuffer[ot][Rt]=n.createFramebuffer()}else O.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)O.__webglFramebuffer[ot]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(It)for(let ot=0,Rt=j.length;ot<Rt;ot++){let Ct=i.get(j[ot]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Mt(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let Rt=j[ot];O.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);let Ct=r.convert(Rt.format,Rt.colorSpace),st=r.convert(Rt.type),ft=b(Rt.internalFormat,Ct,st,Rt.colorSpace,w.isXRRenderTarget===!0),Ft=ee(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,ft,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),B(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let Rt=0;Rt<x.mipmaps.length;Rt++)yt(O.__webglFramebuffer[ot][Rt],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt);else yt(O.__webglFramebuffer[ot],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ot=0,Rt=j.length;ot<Rt;ot++){let Ct=j[ot],st=i.get(Ct),ft=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,st.__webglTexture),Gt(ft,Ct),yt(O.__webglFramebuffer,w,Ct,n.COLOR_ATTACHMENT0+ot,ft,0),m(Ct)&&f(ft)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ot=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Gt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let Rt=0;Rt<x.mipmaps.length;Rt++)yt(O.__webglFramebuffer[Rt],w,x,n.COLOR_ATTACHMENT0,ot,Rt);else yt(O.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,ot,0);m(x)&&f(ot),e.unbindTexture()}w.depthBuffer&&Jt(w)}function kt(w){let x=w.textures;for(let O=0,Y=x.length;O<Y;O++){let j=x[O];if(m(j)){let q=E(w),It=i.get(j).__webglTexture;e.bindTexture(q,It),f(q),e.unbindTexture()}}}let bt=[],xt=[];function pt(w){if(w.samples>0){if(Mt(w)===!1){let x=w.textures,O=w.width,Y=w.height,j=n.COLOR_BUFFER_BIT,q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(w),ot=x.length>1;if(ot)for(let Ct=0;Ct<x.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let Rt=w.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ct=0;Ct<x.length;Ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);let st=i.get(x[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,n.NEAREST),l===!0&&(bt.length=0,xt.length=0,bt.push(n.COLOR_ATTACHMENT0+Ct),w.depthBuffer&&w.resolveDepthBuffer===!1&&(bt.push(q),xt.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Ct=0;Ct<x.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);let st=i.get(x[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,st,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ee(w){return Math.min(s.maxSamples,w.samples)}function Mt(w){let x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ot(w){let x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function ke(w,x){let O=w.colorSpace,Y=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==ds&&O!==Xn&&(jt.getTransfer(O)===se?(Y!==In||j!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Ce(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=T,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Mt}function ov(n,t){function e(i,s=Xn){let r,o=jt.getTransfer(s);if(i===ni)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===El)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lu)return n.BYTE;if(i===cu)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===hn)return n.HALF_FLOAT;if(i===du)return n.ALPHA;if(i===fu)return n.RGB;if(i===In)return n.RGBA;if(i===or)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===pu)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===mu)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===Al)return n.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===Bo)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Cl||i===Pl||i===Il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Ll||i===Ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dl||i===Ll)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Vl||i===Hl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Jl||i===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Ql||i===tc||i===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new bo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new le({vertexShader:av,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends jn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new Fu,f={},E=e.getContextAttributes(),b=null,y=null,A=[],R=[],C=new At,N=null,S=new Ke;S.viewport=new Re;let M=new Ke;M.viewport=new Re;let P=[S,M],z=new rl,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=A[$];return K===void 0&&(K=new fr,A[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=A[$];return K===void 0&&(K=new fr,A[$]=K),K.getGripSpace()},this.getHand=function($){let K=A[$];return K===void 0&&(K=new fr,A[$]=K),K.getHandSpace()};function Z($){let K=R.indexOf($.inputSource);if(K===-1)return;let yt=A[K];yt!==void 0&&(yt.update($.inputSource,$.frame,c||o),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<A.length;$++){let K=R[$];K!==null&&(R[$]=null,A[$].disconnect(K))}G=null,W=null,m.reset();for(let $ in f)delete f[$];t.setRenderTarget(b),p=null,d=null,h=null,s=null,y=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),E.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,B=null,_t=null;E.depth&&(_t=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=E.stencil?Mr:or,B=E.stencil?yr:Gi);let Jt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new He(d.textureWidth,d.textureHeight,{format:In,type:ni,depthTexture:new So(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let yt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new He(p.framebufferWidth,p.framebufferHeight,{format:In,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt($){for(let K=0;K<$.removed.length;K++){let yt=$.removed[K],B=R.indexOf(yt);B>=0&&(R[B]=null,A[B].disconnect(yt))}for(let K=0;K<$.added.length;K++){let yt=$.added[K],B=R.indexOf(yt);if(B===-1){for(let Jt=0;Jt<A.length;Jt++)if(Jt>=R.length){R.push(yt),B=Jt;break}else if(R[Jt]===null){R[Jt]=yt,B=Jt;break}if(B===-1)break}let _t=A[B];_t&&_t.connect(yt)}}let H=new I,at=new I;function Q($,K,yt){H.setFromMatrixPosition(K.matrixWorld),at.setFromMatrixPosition(yt.matrixWorld);let B=H.distanceTo(at),_t=K.projectionMatrix.elements,Jt=yt.projectionMatrix.elements,Ut=_t[14]/(_t[10]-1),T=_t[14]/(_t[10]+1),kt=(_t[9]+1)/_t[5],bt=(_t[9]-1)/_t[5],xt=(_t[8]-1)/_t[0],pt=(Jt[8]+1)/Jt[0],ee=Ut*xt,Mt=Ut*pt,Ot=B/(-xt+pt),ke=Ot*-xt;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(Ot),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_t[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ce=Ut+Ot,w=T+Ot,x=ee-ke,O=Mt+(B-ke),Y=kt*T/w*Ce,j=bt*T/w*Ce;$.projectionMatrix.makePerspective(x,O,Y,j,Ce,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function gt($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let K=$.near,yt=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),z.near=M.near=S.near=K,z.far=M.far=S.far=yt,(G!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,W=z.far),z.layers.mask=$.layers.mask|6,S.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;let B=$.parent,_t=z.cameras;gt(z,B);for(let Jt=0;Jt<_t.length;Jt++)gt(_t[Jt],B);_t.length===2?Q(z,S,M):z.projectionMatrix.copy(S.projectionMatrix),Gt($,z,B)};function Gt($,K,yt){yt===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ar*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return f[$]};let oe=null;function he($,K){if(u=K.getViewerPose(c||o),g=K,u!==null){let yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let B=!1;yt.length!==z.cameras.length&&(z.cameras.length=0,B=!0);for(let T=0;T<yt.length;T++){let kt=yt[T],bt=null;if(p!==null)bt=p.getViewport(kt);else{let pt=h.getViewSubImage(d,kt);bt=pt.viewport,T===0&&(t.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(y))}let xt=P[T];xt===void 0&&(xt=new Ke,xt.layers.enable(T),xt.viewport=new Re,P[T]=xt),xt.matrix.fromArray(kt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(kt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(bt.x,bt.y,bt.width,bt.height),T===0&&(z.matrix.copy(xt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),B===!0&&z.cameras.push(xt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let T=h.getDepthInformation(yt[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let T=0;T<yt.length;T++){let kt=yt[T].camera;if(kt){let bt=f[kt];bt||(bt=new bo,f[kt]=bt);let xt=h.getCameraImage(kt);bt.sourceTexture=xt}}}}for(let yt=0;yt<A.length;yt++){let B=R[yt],_t=A[yt];B!==null&&_t!==void 0&&_t.update(B,K,c||o)}oe&&oe($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let te=new Rf;te.setAnimationLoop(he),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}},Ms=new Qn,cv=new ve;function hv(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,yu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),b=E.envMap,y=E.envMapRotation;b&&(m.envMap.value=b,Ms.copy(y),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(Ms)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let y=b.program;i.uniformBlockBinding(E,y)}function c(E,b){let y=s[E.id];y===void 0&&(g(E),y=u(E),s[E.id]=y,E.addEventListener("dispose",m));let A=b.program;i.updateUBOMapping(E,A);let R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function u(E){let b=h();E.__bindingPointIndex=b;let y=n.createBuffer(),A=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=s[E.id],y=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,C=y.length;R<C;R++){let N=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,M=N.length;S<M;S++){let P=N[S];if(p(P,R,S,A)===!0){let z=P.__offset,G=Array.isArray(P.value)?P.value:[P.value],W=0;for(let Z=0;Z<G.length;Z++){let X=G[Z],tt=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,z+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,y,A){let R=E.value,C=b+"_"+y;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{let N=A[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(E){let b=E.uniforms,y=0,A=16;for(let C=0,N=b.length;C<N;C++){let S=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,P=S.length;M<P;M++){let z=S[M],G=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Z=G.length;W<Z;W++){let X=G[W],tt=_(X),H=y%A,at=H%tt.boundary,Q=H+at;y+=at,Q!==0&&A-Q<tt.storage&&(y+=A-Q),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=tt.storage}}}let R=y%A;return R>0&&(y+=A-R),E.__size=y,E.__cache={},this}function _(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var oc=class{constructor(t={}){let{canvas:e=tf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=en;let R=0,C=0,N=null,S=-1,M=null,P=new Re,z=new Re,G=null,W=new Xt(0),Z=0,X=e.width,tt=e.height,H=1,at=null,Q=null,gt=new Re(0,0,X,tt),Gt=new Re(0,0,X,tt),oe=!1,he=new yo,te=!1,$=!1,K=new ve,yt=new I,B=new Re,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function Ut(){return N===null?H:1}let T=i;function kt(v,U){return e.getContext(v,U)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",et,!1),T===null){let U="webgl2";if(T=kt(U,v),T===null)throw kt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let bt,xt,pt,ee,Mt,Ot,ke,Ce,w,x,O,Y,j,q,It,ot,Rt,Ct,st,ft,Ft,Pt,ut,Wt;function D(){bt=new C2(T),bt.init(),Pt=new ov(T,bt),xt=new S2(T,bt,t,Pt),pt=new sv(T,bt),xt.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),ee=new D2(T),Mt=new Xx,Ot=new rv(T,bt,pt,Mt,xt,Pt,ee),ke=new E2(y),Ce=new R2(y),w=new B1(T),ut=new y2(T,w),x=new P2(T,w,ee,ut),O=new U2(T,x,w,ee),st=new L2(T,xt,Ot),ot=new b2(Mt),Y=new Wx(y,ke,Ce,bt,xt,ut,ot),j=new hv(y,Mt),q=new Yx,It=new Qx(bt),Ct=new v2(y,ke,Ce,pt,O,p,l),Rt=new nv(y,O,xt),Wt=new uv(T,ee,xt,pt),ft=new M2(T,bt,ee),Ft=new I2(T,bt,ee),ee.programs=Y.programs,y.capabilities=xt,y.extensions=bt,y.properties=Mt,y.renderLists=q,y.shadowMap=Rt,y.state=pt,y.info=ee}D();let rt=new Ou(y,T);this.xr=rt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let v=bt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=bt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(X,tt,!1))},this.getSize=function(v){return v.set(X,tt)},this.setSize=function(v,U,k=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,tt=U,e.width=Math.floor(v*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=v+"px",e.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(X*H,tt*H).floor()},this.setDrawingBufferSize=function(v,U,k){X=v,tt=U,H=k,e.width=Math.floor(v*k),e.height=Math.floor(U*k),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(gt)},this.setViewport=function(v,U,k,V){v.isVector4?gt.set(v.x,v.y,v.z,v.w):gt.set(v,U,k,V),pt.viewport(P.copy(gt).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Gt)},this.setScissor=function(v,U,k,V){v.isVector4?Gt.set(v.x,v.y,v.z,v.w):Gt.set(v,U,k,V),pt.scissor(z.copy(Gt).multiplyScalar(H).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(v){pt.setScissorTest(oe=v)},this.setOpaqueSort=function(v){at=v},this.setTransparentSort=function(v){Q=v},this.getClearColor=function(v){return v.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,k=!0){let V=0;if(v){let F=!1;if(N!==null){let it=N.texture.format;F=it===Al||it===Tl||it===wl}if(F){let it=N.texture.type,dt=it===ni||it===Gi||it===vr||it===yr||it===bl||it===El,Et=Ct.getClearColor(),vt=Ct.getClearAlpha(),Nt=Et.r,Bt=Et.g,Dt=Et.b;dt?(g[0]=Nt,g[1]=Bt,g[2]=Dt,g[3]=vt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Nt,_[1]=Bt,_[2]=Dt,_[3]=vt,T.clearBufferiv(T.COLOR,0,_))}else V|=T.COLOR_BUFFER_BIT}U&&(V|=T.DEPTH_BUFFER_BIT),k&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Ct.dispose(),q.dispose(),It.dispose(),Mt.dispose(),ke.dispose(),Ce.dispose(),O.dispose(),ut.dispose(),Wt.dispose(),Y.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Zn),rt.removeEventListener("sessionend",X0),ns.stop()};function ct(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=ee.autoReset,U=Rt.enabled,k=Rt.autoUpdate,V=Rt.needsUpdate,F=Rt.type;D(),ee.autoReset=v,Rt.enabled=U,Rt.autoUpdate=k,Rt.needsUpdate=V,Rt.type=F}function et(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function J(v){let U=v.target;U.removeEventListener("dispose",J),Tt(U)}function Tt(v){Ht(v),Mt.remove(v)}function Ht(v){let U=Mt.get(v).programs;U!==void 0&&(U.forEach(function(k){Y.releaseProgram(k)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,k,V,F,it){U===null&&(U=_t);let dt=F.isMesh&&F.matrixWorld.determinant()<0,Et=Fm(v,U,k,V,F);pt.setMaterial(V,dt);let vt=k.index,Nt=1;if(V.wireframe===!0){if(vt=x.getWireframeAttribute(k),vt===void 0)return;Nt=2}let Bt=k.drawRange,Dt=k.attributes.position,Kt=Bt.start*Nt,ue=(Bt.start+Bt.count)*Nt;it!==null&&(Kt=Math.max(Kt,it.start*Nt),ue=Math.min(ue,(it.start+it.count)*Nt)),vt!==null?(Kt=Math.max(Kt,0),ue=Math.min(ue,vt.count)):Dt!=null&&(Kt=Math.max(Kt,0),ue=Math.min(ue,Dt.count));let Ae=ue-Kt;if(Ae<0||Ae===1/0)return;ut.setup(F,V,Et,k,vt);let _e,me=ft;if(vt!==null&&(_e=w.get(vt),me=Ft,me.setIndex(_e)),F.isMesh)V.wireframe===!0?(pt.setLineWidth(V.wireframeLinewidth*Ut()),me.setMode(T.LINES)):me.setMode(T.TRIANGLES);else if(F.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),pt.setLineWidth(Lt*Ut()),F.isLineSegments?me.setMode(T.LINES):F.isLineLoop?me.setMode(T.LINE_LOOP):me.setMode(T.LINE_STRIP)}else F.isPoints?me.setMode(T.POINTS):F.isSprite&&me.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))me.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Lt=F._multiDrawStarts,Me=F._multiDrawCounts,ie=F._multiDrawCount,pn=vt?w.get(vt).bytesPerElement:1,Gs=Mt.get(V).currentProgram.getUniforms();for(let mn=0;mn<ie;mn++)Gs.setValue(T,"_gl_DrawID",mn),me.render(Lt[mn]/pn,Me[mn])}else if(F.isInstancedMesh)me.renderInstances(Kt,Ae,F.count);else if(k.isInstancedBufferGeometry){let Lt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,Lt);me.renderInstances(Kt,Ae,Me)}else me.render(Kt,Ae)};function ge(v,U,k){v.transparent===!0&&v.side===Pn&&v.forceSinglePass===!1?(v.side=Xe,v.needsUpdate=!0,da(v,U,k),v.side=kn,v.needsUpdate=!0,da(v,U,k),v.side=Pn):da(v,U,k)}this.compile=function(v,U,k=null){k===null&&(k=v),f=It.get(k),f.init(U),b.push(f),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),v!==k&&v.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let V=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let it=F.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){let Et=it[dt];ge(Et,k,F),V.add(Et)}else ge(it,k,F),V.add(it)}),f=b.pop(),V},this.compileAsync=function(v,U,k=null){let V=this.compile(v,U,k);return new Promise(F=>{function it(){if(V.forEach(function(dt){Mt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){F(v);return}setTimeout(it,10)}bt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ae=null;function di(v){ae&&ae(v)}function Zn(){ns.stop()}function X0(){ns.start()}let ns=new Rf;ns.setAnimationLoop(di),typeof self!="undefined"&&ns.setContext(self),this.setAnimationLoop=function(v){ae=v,rt.setAnimationLoop(v),v===null?ns.stop():ns.start()},rt.addEventListener("sessionstart",Zn),rt.addEventListener("sessionend",X0),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,U,N),f=It.get(v,b.length),f.init(U),b.push(f),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),he.setFromProjectionMatrix(K,zn,U.reversedDepth),$=this.localClippingEnabled,te=ot.init(this.clippingPlanes,$),m=q.get(v,E.length),m.init(),E.push(m),rt.enabled===!0&&rt.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&Eh(it,U,-1/0,y.sortObjects)}Eh(v,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(at,Q),Jt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Jt&&Ct.addToRenderList(m,v),this.info.render.frame++,te===!0&&ot.beginShadows();let k=f.state.shadowsArray;Rt.render(k,v,U),te===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){let it=U.cameras;if(F.length>0)for(let dt=0,Et=it.length;dt<Et;dt++){let vt=it[dt];Y0(V,F,v,vt)}Jt&&Ct.render(v);for(let dt=0,Et=it.length;dt<Et;dt++){let vt=it[dt];q0(m,v,vt,vt.viewport)}}else F.length>0&&Y0(V,F,v,U),Jt&&Ct.render(v),q0(m,v,U);N!==null&&C===0&&(Ot.updateMultisampleRenderTarget(N),Ot.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(y,v,U),ut.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],te===!0&&ot.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Eh(v,U,k,V){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||he.intersectsSprite(v)){V&&B.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);let dt=O.update(v),Et=v.material;Et.visible&&m.push(v,dt,Et,k,B.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||he.intersectsObject(v))){let dt=O.update(v),Et=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),B.copy(v.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),B.copy(dt.boundingSphere.center)),B.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(Et)){let vt=dt.groups;for(let Nt=0,Bt=vt.length;Nt<Bt;Nt++){let Dt=vt[Nt],Kt=Et[Dt.materialIndex];Kt&&Kt.visible&&m.push(v,dt,Kt,k,B.z,Dt)}}else Et.visible&&m.push(v,dt,Et,k,B.z,null)}}let it=v.children;for(let dt=0,Et=it.length;dt<Et;dt++)Eh(it[dt],U,k,V)}function q0(v,U,k,V){let F=v.opaque,it=v.transmissive,dt=v.transparent;f.setupLightsView(k),te===!0&&ot.setGlobalState(y.clippingPlanes,k),V&&pt.viewport(P.copy(V)),F.length>0&&ua(F,U,k),it.length>0&&ua(it,U,k),dt.length>0&&ua(dt,U,k),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Y0(v,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new He(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?hn:ni,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let it=f.state.transmissionRenderTarget[V.id],dt=V.viewport||P;it.setSize(dt.z*y.transmissionResolutionScale,dt.w*y.transmissionResolutionScale);let Et=y.getRenderTarget(),vt=y.getActiveCubeFace(),Nt=y.getActiveMipmapLevel();y.setRenderTarget(it),y.getClearColor(W),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Jt&&Ct.render(k);let Bt=y.toneMapping;y.toneMapping=yi;let Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),te===!0&&ot.setGlobalState(y.clippingPlanes,V),ua(v,k,V),Ot.updateMultisampleRenderTarget(it),Ot.updateRenderTargetMipmap(it),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ue=0,Ae=U.length;ue<Ae;ue++){let _e=U[ue],me=_e.object,Lt=_e.geometry,Me=_e.material,ie=_e.group;if(Me.side===Pn&&me.layers.test(V.layers)){let pn=Me.side;Me.side=Xe,Me.needsUpdate=!0,$0(me,k,V,Lt,Me,ie),Me.side=pn,Me.needsUpdate=!0,Kt=!0}}Kt===!0&&(Ot.updateMultisampleRenderTarget(it),Ot.updateRenderTargetMipmap(it))}y.setRenderTarget(Et,vt,Nt),y.setClearColor(W,Z),Dt!==void 0&&(V.viewport=Dt),y.toneMapping=Bt}function ua(v,U,k){let V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,it=v.length;F<it;F++){let dt=v[F],Et=dt.object,vt=dt.geometry,Nt=dt.group,Bt=dt.material;Bt.allowOverride===!0&&V!==null&&(Bt=V),Et.layers.test(k.layers)&&$0(Et,U,k,vt,Bt,Nt)}}function $0(v,U,k,V,F,it){v.onBeforeRender(y,U,k,V,F,it),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(y,U,k,V,v,it),F.transparent===!0&&F.side===Pn&&F.forceSinglePass===!1?(F.side=Xe,F.needsUpdate=!0,y.renderBufferDirect(k,U,V,F,v,it),F.side=kn,F.needsUpdate=!0,y.renderBufferDirect(k,U,V,F,v,it),F.side=Pn):y.renderBufferDirect(k,U,V,F,v,it),v.onAfterRender(y,U,k,V,F,it)}function da(v,U,k){U.isScene!==!0&&(U=_t);let V=Mt.get(v),F=f.state.lights,it=f.state.shadowsArray,dt=F.state.version,Et=Y.getParameters(v,F.state,it,U,k),vt=Y.getProgramCacheKey(Et),Nt=V.programs;V.environment=v.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(v.isMeshStandardMaterial?Ce:ke).get(v.envMap||V.environment),V.envMapRotation=V.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Nt===void 0&&(v.addEventListener("dispose",J),Nt=new Map,V.programs=Nt);let Bt=Nt.get(vt);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===dt)return J0(v,Et),Bt}else Et.uniforms=Y.getUniforms(v),v.onBeforeCompile(Et,y),Bt=Y.acquireProgram(Et,vt),Nt.set(vt,Bt),V.uniforms=Et.uniforms;let Dt=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Dt.clippingPlanes=ot.uniform),J0(v,Et),V.needsLights=Bm(v),V.lightsStateVersion=dt,V.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function Z0(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=wr.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function J0(v,U){let k=Mt.get(v);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Fm(v,U,k,V,F){U.isScene!==!0&&(U=_t),Ot.resetTextureUnits();let it=U.fog,dt=V.isMeshStandardMaterial?U.environment:null,Et=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ds,vt=(V.isMeshStandardMaterial?Ce:ke).get(V.envMap||dt),Nt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Bt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Dt=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,ue=!!k.morphAttributes.color,Ae=yi;V.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ae=y.toneMapping);let _e=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=_e!==void 0?_e.length:0,Lt=Mt.get(V),Me=f.state.lights;if(te===!0&&($===!0||v!==M)){let Qe=v===M&&V.id===S;ot.setState(V,v,Qe)}let ie=!1;V.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Me.state.version||Lt.outputColorSpace!==Et||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==vt||V.fog===!0&&Lt.fog!==it||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ot.numPlanes||Lt.numIntersection!==ot.numIntersection)||Lt.vertexAlphas!==Nt||Lt.vertexTangents!==Bt||Lt.morphTargets!==Dt||Lt.morphNormals!==Kt||Lt.morphColors!==ue||Lt.toneMapping!==Ae||Lt.morphTargetsCount!==me)&&(ie=!0):(ie=!0,Lt.__version=V.version);let pn=Lt.currentProgram;ie===!0&&(pn=da(V,U,F));let Gs=!1,mn=!1,no=!1,Se=pn.getUniforms(),wn=Lt.uniforms;if(pt.useProgram(pn.program)&&(Gs=!0,mn=!0,no=!0),V.id!==S&&(S=V.id,mn=!0),Gs||M!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Se.setValue(T,"projectionMatrix",v.projectionMatrix),Se.setValue(T,"viewMatrix",v.matrixWorldInverse);let an=Se.map.cameraPosition;an!==void 0&&an.setValue(T,yt.setFromMatrixPosition(v.matrixWorld)),xt.logarithmicDepthBuffer&&Se.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,mn=!0,no=!0)}if(F.isSkinnedMesh){Se.setOptional(T,F,"bindMatrix"),Se.setOptional(T,F,"bindMatrixInverse");let Qe=F.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Se.setValue(T,"boneTexture",Qe.boneTexture,Ot))}F.isBatchedMesh&&(Se.setOptional(T,F,"batchingTexture"),Se.setValue(T,"batchingTexture",F._matricesTexture,Ot),Se.setOptional(T,F,"batchingIdTexture"),Se.setValue(T,"batchingIdTexture",F._indirectTexture,Ot),Se.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&Se.setValue(T,"batchingColorTexture",F._colorsTexture,Ot));let Tn=k.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&st.update(F,k,pn),(mn||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,Se.setValue(T,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(wn.envMap.value=vt,wn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(wn.envMapIntensity.value=U.environmentIntensity),mn&&(Se.setValue(T,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&Om(wn,no),it&&V.fog===!0&&j.refreshFogUniforms(wn,it),j.refreshMaterialUniforms(wn,V,H,tt,f.state.transmissionRenderTarget[v.id]),wr.upload(T,Z0(Lt),wn,Ot)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wr.upload(T,Z0(Lt),wn,Ot),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(T,"center",F.center),Se.setValue(T,"modelViewMatrix",F.modelViewMatrix),Se.setValue(T,"normalMatrix",F.normalMatrix),Se.setValue(T,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Qe=V.uniformsGroups;for(let an=0,wh=Qe.length;an<wh;an++){let is=Qe[an];Wt.update(is,pn),Wt.bind(is,pn)}}return pn}function Om(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Bm(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,U,k){let V=Mt.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Mt.get(v.texture).__webglTexture=U,Mt.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let k=Mt.get(v);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};let zm=T.createFramebuffer();this.setRenderTarget=function(v,U=0,k=0){N=v,R=U,C=k;let V=!0,F=null,it=!1,dt=!1;if(v){let vt=Mt.get(v);if(vt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(vt.__webglFramebuffer===void 0)Ot.setupRenderTarget(v);else if(vt.__hasExternalTextures)Ot.rebindTextures(v,Mt.get(v.texture).__webglTexture,Mt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Dt=v.depthTexture;if(vt.__boundDepthTexture!==Dt){if(Dt!==null&&Mt.has(Dt)&&(v.width!==Dt.image.width||v.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(v)}}let Nt=v.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(dt=!0);let Bt=Mt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?F=Bt[U][k]:F=Bt[U],it=!0):v.samples>0&&Ot.useMultisampledRTT(v)===!1?F=Mt.get(v).__webglMultisampledFramebuffer:Array.isArray(Bt)?F=Bt[k]:F=Bt,P.copy(v.viewport),z.copy(v.scissor),G=v.scissorTest}else P.copy(gt).multiplyScalar(H).floor(),z.copy(Gt).multiplyScalar(H).floor(),G=oe;if(k!==0&&(F=zm),pt.bindFramebuffer(T.FRAMEBUFFER,F)&&V&&pt.drawBuffers(v,F),pt.viewport(P),pt.scissor(z),pt.setScissorTest(G),it){let vt=Mt.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,k)}else if(dt){let vt=U;for(let Nt=0;Nt<v.textures.length;Nt++){let Bt=Mt.get(v.textures[Nt]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,k,vt)}}else if(v!==null&&k!==0){let vt=Mt.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,vt.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(v,U,k,V,F,it,dt,Et=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){pt.bindFramebuffer(T.FRAMEBUFFER,vt);try{let Nt=v.textures[Et],Bt=Nt.format,Dt=Nt.type;if(!xt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-V&&k>=0&&k<=v.height-F&&(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Et),T.readPixels(U,k,V,F,Pt.convert(Bt),Pt.convert(Dt),it))}finally{let Nt=N!==null?Mt.get(N).__webglFramebuffer:null;pt.bindFramebuffer(T.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(v,U,k,V,F,it,dt,Et=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt)if(U>=0&&U<=v.width-V&&k>=0&&k<=v.height-F){pt.bindFramebuffer(T.FRAMEBUFFER,vt);let Nt=v.textures[Et],Bt=Nt.format,Dt=Nt.type;if(!xt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Kt),T.bufferData(T.PIXEL_PACK_BUFFER,it.byteLength,T.STREAM_READ),v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Et),T.readPixels(U,k,V,F,Pt.convert(Bt),Pt.convert(Dt),0);let ue=N!==null?Mt.get(N).__webglFramebuffer:null;pt.bindFramebuffer(T.FRAMEBUFFER,ue);let Ae=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ef(T,Ae,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Kt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,it),T.deleteBuffer(Kt),T.deleteSync(Ae),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,k=0){let V=Math.pow(2,-k),F=Math.floor(v.image.width*V),it=Math.floor(v.image.height*V),dt=U!==null?U.x:0,Et=U!==null?U.y:0;Ot.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,dt,Et,F,it),pt.unbindTexture()};let km=T.createFramebuffer(),Vm=T.createFramebuffer();this.copyTextureToTexture=function(v,U,k=null,V=null,F=0,it=null){it===null&&(F!==0?(cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=F,F=0):it=0);let dt,Et,vt,Nt,Bt,Dt,Kt,ue,Ae,_e=v.isCompressedTexture?v.mipmaps[it]:v.image;if(k!==null)dt=k.max.x-k.min.x,Et=k.max.y-k.min.y,vt=k.isBox3?k.max.z-k.min.z:1,Nt=k.min.x,Bt=k.min.y,Dt=k.isBox3?k.min.z:0;else{let Tn=Math.pow(2,-F);dt=Math.floor(_e.width*Tn),Et=Math.floor(_e.height*Tn),v.isDataArrayTexture?vt=_e.depth:v.isData3DTexture?vt=Math.floor(_e.depth*Tn):vt=1,Nt=0,Bt=0,Dt=0}V!==null?(Kt=V.x,ue=V.y,Ae=V.z):(Kt=0,ue=0,Ae=0);let me=Pt.convert(U.format),Lt=Pt.convert(U.type),Me;U.isData3DTexture?(Ot.setTexture3D(U,0),Me=T.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ot.setTexture2DArray(U,0),Me=T.TEXTURE_2D_ARRAY):(Ot.setTexture2D(U,0),Me=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);let ie=T.getParameter(T.UNPACK_ROW_LENGTH),pn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Gs=T.getParameter(T.UNPACK_SKIP_PIXELS),mn=T.getParameter(T.UNPACK_SKIP_ROWS),no=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,_e.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_e.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Nt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Bt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Dt);let Se=v.isDataArrayTexture||v.isData3DTexture,wn=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let Tn=Mt.get(v),Qe=Mt.get(U),an=Mt.get(Tn.__renderTarget),wh=Mt.get(Qe.__renderTarget);pt.bindFramebuffer(T.READ_FRAMEBUFFER,an.__webglFramebuffer),pt.bindFramebuffer(T.DRAW_FRAMEBUFFER,wh.__webglFramebuffer);for(let is=0;is<vt;is++)Se&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Mt.get(v).__webglTexture,F,Dt+is),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,it,Ae+is)),T.blitFramebuffer(Nt,Bt,dt,Et,Kt,ue,dt,Et,T.DEPTH_BUFFER_BIT,T.NEAREST);pt.bindFramebuffer(T.READ_FRAMEBUFFER,null),pt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||Mt.has(v)){let Tn=Mt.get(v),Qe=Mt.get(U);pt.bindFramebuffer(T.READ_FRAMEBUFFER,km),pt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Vm);for(let an=0;an<vt;an++)Se?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Tn.__webglTexture,F,Dt+an):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Tn.__webglTexture,F),wn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Qe.__webglTexture,it,Ae+an):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Qe.__webglTexture,it),F!==0?T.blitFramebuffer(Nt,Bt,dt,Et,Kt,ue,dt,Et,T.COLOR_BUFFER_BIT,T.NEAREST):wn?T.copyTexSubImage3D(Me,it,Kt,ue,Ae+an,Nt,Bt,dt,Et):T.copyTexSubImage2D(Me,it,Kt,ue,Nt,Bt,dt,Et);pt.bindFramebuffer(T.READ_FRAMEBUFFER,null),pt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else wn?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(Me,it,Kt,ue,Ae,dt,Et,vt,me,Lt,_e.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Me,it,Kt,ue,Ae,dt,Et,vt,me,_e.data):T.texSubImage3D(Me,it,Kt,ue,Ae,dt,Et,vt,me,Lt,_e):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,it,Kt,ue,dt,Et,me,Lt,_e.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,it,Kt,ue,_e.width,_e.height,me,_e.data):T.texSubImage2D(T.TEXTURE_2D,it,Kt,ue,dt,Et,me,Lt,_e);T.pixelStorei(T.UNPACK_ROW_LENGTH,ie),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Gs),T.pixelStorei(T.UNPACK_SKIP_ROWS,mn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,no),it===0&&U.generateMipmaps&&T.generateMipmap(Me),pt.unbindTexture()},this.initRenderTarget=function(v){Mt.get(v).__webglFramebuffer===void 0&&Ot.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ot.setTextureCube(v,0):v.isData3DTexture?Ot.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ot.setTexture2DArray(v,0):Ot.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){R=0,C=0,N=null,pt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Lf={type:"change"},ku={type:"start"},Nf={type:"end"},lc=new Gn,Uf=new Rn,fv=Math.cos(70*Wi.DEG2RAD),ze=new I,un=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zu=1e-6,cc=class extends Po{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new nn,this._lastTargetPosition=new I,this._quat=new nn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _r,this._sphericalDelta=new _r,this._scale=1,this._panOffset=new I,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new I,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mv.bind(this),this._onPointerDown=pv.bind(this),this._onPointerUp=gv.bind(this),this._onContextMenu=bv.bind(this),this._onMouseWheel=vv.bind(this),this._onKeyDown=yv.bind(this),this._onTouchStart=Mv.bind(this),this._onTouchMove=Sv.bind(this),this._onMouseDown=_v.bind(this),this._onMouseMove=xv.bind(this),this._interceptControlDown=Ev.bind(this),this._interceptControlUp=wv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lf),this.update(),this.state=de.NONE}update(t=null){let e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ze.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<fv?this.object.lookAt(this.target):(Uf.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(Uf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zu||this._lastTargetPosition.distanceToSquared(this.target)>zu?(this.dispatchEvent(Lf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?un/60*this.autoRotateSpeed*t:un/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ze.copy(s).sub(this.target);let r=ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function pv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function mv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nf),this.state=de.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _v(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(ku)}function xv(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function vv(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent(ku),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nf))}function yv(n){this.enabled!==!1&&this._handleKeyDown(n)}function Mv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(ku)}function Sv(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function bv(n){this.enabled!==!1&&n.preventDefault()}function Ev(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tv=new gr(-1,1,1,-1,0,1),Vu=class extends Ge{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}},Av=new Vu,Xi=class{constructor(t){this._mesh=new be(Av,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Tv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hc=class extends vn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Mi.clone(t.uniforms),this.material=new le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Xi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ko=class extends vn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},uc=class extends vn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var dc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hc(Ar),this.copyPass.material.blending=Wn,this.clock=new Ro}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ko!==void 0&&(o instanceof ko?i=!0:o instanceof uc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fc=class extends vn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ff={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Rr=class n extends vn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new Xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new He(r,o,{type:hn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new He(r,o,{type:hn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Ff;this.highPassUniforms=Mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new At(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mi.clone(Ar.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader,blending:Vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xt,this._oldClearAlpha=1,this._basic=new fs,this._fsQuad=new Xi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Rr.BlurDirectionX=new At(1,0);Rr.BlurDirectionY=new At(0,1);var Vo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var pc=class extends vn{constructor(){super(),this.uniforms=Mi.clone(Vo.uniforms),this.material=new wo({name:Vo.name,uniforms:this.uniforms,vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader}),this._fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_l&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var re={};Gm(re,{AU_PER_LY:()=>Jf,AngleBetween:()=>Kc,AngleFromSun:()=>Xr,Apsis:()=>Ps,ApsisKind:()=>Ji,AstroTime:()=>ai,Atmosphere:()=>_p,AtmosphereInfo:()=>Nc,AxisInfo:()=>Ko,BackdatePosition:()=>pp,BaryState:()=>My,Body:()=>L,CALLISTO_RADIUS_KM:()=>Uv,C_AUDAY:()=>Zc,CalcMoonCount:()=>ap,CombineRotation:()=>ji,Constellation:()=>Qy,ConstellationInfo:()=>zc,CorrectLightTravel:()=>fp,DEG2RAD:()=>nt,DefineStar:()=>Jv,DeltaT_EspenakMeeus:()=>u0,DeltaT_JplHorizons:()=>jv,EUROPA_RADIUS_KM:()=>Dv,EclipseEvent:()=>Wc,EclipseKind:()=>Un,Ecliptic:()=>qo,EclipticCoordinates:()=>Rc,EclipticGeoMoon:()=>Mc,EclipticLongitude:()=>Cs,Elongation:()=>vp,ElongationEvent:()=>Bc,Equator:()=>Qo,EquatorFromVector:()=>v0,EquatorialCoordinates:()=>Gr,GANYMEDE_RADIUS_KM:()=>Lv,GeoEmbState:()=>m0,GeoMoon:()=>Mn,GeoMoonState:()=>ta,GeoVector:()=>Sn,GlobalSolarEclipseInfo:()=>Gc,GravitySimulator:()=>l0,HOUR2RAD:()=>Xu,HelioDistance:()=>As,HelioState:()=>Dc,HelioVector:()=>yn,Horizon:()=>ih,HorizonFromVector:()=>Hy,HorizontalCoordinates:()=>Ac,HourAngle:()=>Ly,HourAngleEvent:()=>Fc,IO_RADIUS_KM:()=>Iv,IdentityMatrix:()=>ky,Illumination:()=>Sc,IlluminationInfo:()=>Lc,InverseRefraction:()=>bp,InverseRotation:()=>Zr,JUPITER_EQUATORIAL_RADIUS_KM:()=>Rv,JUPITER_MEAN_RADIUS_KM:()=>Pv,JUPITER_POLAR_RADIUS_KM:()=>Cv,JupiterMoons:()=>yy,JupiterMoonsInfo:()=>Ic,KM_PER_AU:()=>fe,LagrangePoint:()=>m3,LagrangePointFast:()=>Hp,Libration:()=>iy,LibrationInfo:()=>Tc,LocalSolarEclipseInfo:()=>Xc,LunarEclipseInfo:()=>kc,MakeRotation:()=>ly,MakeTime:()=>wt,MassProduct:()=>Zu,MoonPhase:()=>x0,MoonQuarter:()=>Uc,NextGlobalSolarEclipse:()=>a3,NextLocalSolarEclipse:()=>h3,NextLunarApsis:()=>Oy,NextLunarEclipse:()=>o3,NextMoonNode:()=>f3,NextMoonQuarter:()=>Ty,NextPlanetApsis:()=>zy,NextTransit:()=>d3,NodeEventInfo:()=>Yc,NodeEventKind:()=>bi,Observer:()=>Xo,ObserverGravity:()=>dy,ObserverState:()=>hy,ObserverVector:()=>cy,PairLongitude:()=>_0,Pivot:()=>Vy,PlanetOrbitalPeriod:()=>Kv,RAD2DEG:()=>Ee,RAD2HOUR:()=>c0,Refraction:()=>Jo,RotateState:()=>rh,RotateVector:()=>$i,RotationAxis:()=>E0,RotationMatrix:()=>Le,Rotation_ECL_EQD:()=>Rp,Rotation_ECL_EQJ:()=>Wy,Rotation_ECL_HOR:()=>Cp,Rotation_ECT_EQD:()=>Pp,Rotation_ECT_EQJ:()=>qy,Rotation_EQD_ECL:()=>Ap,Rotation_EQD_ECT:()=>Ip,Rotation_EQD_EQJ:()=>Jr,Rotation_EQD_HOR:()=>M0,Rotation_EQJ_ECL:()=>Ep,Rotation_EQJ_ECT:()=>Xy,Rotation_EQJ_EQD:()=>oh,Rotation_EQJ_GAL:()=>Zy,Rotation_EQJ_HOR:()=>Yy,Rotation_GAL_EQJ:()=>Jy,Rotation_HOR_ECL:()=>$y,Rotation_HOR_EQD:()=>wp,Rotation_HOR_EQJ:()=>Tp,Search:()=>We,SearchAltitude:()=>Py,SearchGlobalSolarEclipse:()=>Fp,SearchHourAngle:()=>Dy,SearchLocalSolarEclipse:()=>Bp,SearchLunarApsis:()=>yp,SearchLunarEclipse:()=>Up,SearchMaxElongation:()=>Ny,SearchMoonNode:()=>Vp,SearchMoonPhase:()=>ea,SearchMoonQuarter:()=>gp,SearchPeakMagnitude:()=>Fy,SearchPlanetApsis:()=>Mp,SearchRelativeLongitude:()=>qr,SearchRiseSet:()=>Cy,SearchSunLongitude:()=>mp,SearchTransit:()=>zp,SeasonInfo:()=>Oc,Seasons:()=>Uy,SetDeltaTFunction:()=>Qv,SiderealTime:()=>th,SphereFromVector:()=>y0,Spherical:()=>Zi,StateVector:()=>Pe,SunPosition:()=>hp,TransitInfo:()=>qc,Vector:()=>$t,VectorFromHorizon:()=>Gy,VectorFromSphere:()=>sh,VectorObserver:()=>uy,e_tilt:()=>Ki});var Zc=173.1446326846693,fe=14959787069098932e-8,Jf=63241.07708807546,nt=.017453292519943295,Xu=.26179938779914946,Ee=57.29577951308232,c0=3.819718634205488,Rv=71492,Cv=66854,Pv=69911,Iv=1821.6,Dv=1560.8,Lv=2631.2,Uv=2410.3,Kf=365.24217,Of=new Date("2000-01-01T12:00:00Z"),qn=2*Math.PI,qi=3600*(180/Math.PI),Ir=484813681109536e-20,jf=10800*60,Nv=2*jf,Bf=7292115e-11,Fv=jf/Math.PI,Ov=-.17-5*Math.log10(Fv),bc=29.530588,Jc=24*3600,Bv=Jc*1e3,Qf=.9972695717592592,Go=695700,tp=Go/fe,ri=.996647180302104,Dr=ri*ri,wi=6378.1366,zv=wi/fe,kv=wi*ri,ep=6371,Vv=88,Hv=ep+Vv,Gv=1738.1,Wv=Gv/fe,Ln=1737.4,np=1736,Xv=np/fe,qv=34/60,h0=81.30056,jo=.0002959122082855911,qu=4912547451450812e-26,Yu=7243452486162703e-25,Wo=8887692390113509e-25,$u=9549535105779258e-26,Or=2825345909524226e-22,Br=8459715185680659e-23,zr=1292024916781969e-23,kr=1524358900784276e-23,Yv=218869976542597e-26,Ec=Wo/h0;function Zu(n){switch(n){case L.Sun:return jo;case L.Mercury:return qu;case L.Venus:return Yu;case L.Earth:return Wo;case L.Moon:return Ec;case L.EMB:return Wo+Ec;case L.Mars:return $u;case L.Jupiter:return Or;case L.Saturn:return Br;case L.Uranus:return zr;case L.Neptune:return kr;case L.Pluto:return Yv;default:throw`Do not know mass product for body: ${n}`}}function wc(n){if(n!==!0&&n!==!1)throw console.trace(),`Value is not boolean: ${n}`;return n}function Qt(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function Cr(n){return n-Math.floor(n)}function Kc(n,t){let e=n.x*n.x+n.y*n.y+n.z*n.z;if(Math.abs(e)<1e-8)throw"AngleBetween: first vector is too short.";let i=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";let s=(n.x*t.x+n.y*t.y+n.z*t.z)/Math.sqrt(e*i);return s<=-1?180:s>=1?0:Ee*Math.acos(s)}var L;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(L||(L={}));var $v=[L.Star1,L.Star2,L.Star3,L.Star4,L.Star5,L.Star6,L.Star7,L.Star8],Zv=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function ip(n){let t=$v.indexOf(n);return t>=0?Zv[t]:null}function jc(n){let t=ip(n);return t&&t.dist>0?t:null}function Jv(n,t,e,i){let s=ip(n);if(!s)throw`Invalid star body: ${n}`;if(Qt(t),Qt(e),Qt(i),t<0||t>=24)throw`Invalid right ascension for star: ${t}`;if(e<-90||e>90)throw`Invalid declination for star: ${e}`;if(i<1)throw`Invalid star distance: ${i}`;s.ra=t,s.dec=e,s.dist=i*Jf}var ye;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(ye||(ye={}));var oi={Mercury:{OrbitalPeriod:87.969},Venus:{OrbitalPeriod:224.701},Earth:{OrbitalPeriod:365.256},Mars:{OrbitalPeriod:686.98},Jupiter:{OrbitalPeriod:4332.589},Saturn:{OrbitalPeriod:10759.22},Uranus:{OrbitalPeriod:30685.4},Neptune:{OrbitalPeriod:60189},Pluto:{OrbitalPeriod:90560}};function Kv(n){if(n in oi)return oi[n].OrbitalPeriod;throw`Unknown orbital period for: ${n}`}var sn={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function u0(n){var t,e,i,s,r,o,a;let l=2e3+(n-14)/Kf;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,e=t*t,i=t*e,s=e*e,r=e*i,o=i*i,10583.6-1014.41*t+33.78311*e-5.952053*i-.1798452*s+.022174192*r+.0090316521*o):l<1600?(t=(l-1e3)/100,e=t*t,i=t*e,s=e*e,r=e*i,o=i*i,1574.2-556.01*t+71.23472*e+.319781*i-.8503463*s-.005050998*r+.0083572073*o):l<1700?(t=l-1600,e=t*t,i=t*e,120-.9808*t-.01532*e+i/7129):l<1800?(t=l-1700,e=t*t,i=t*e,s=e*e,8.83+.1603*t-.0059285*e+13336e-8*i-s/1174e3):l<1860?(t=l-1800,e=t*t,i=t*e,s=e*e,r=e*i,o=i*i,a=i*s,13.72-.332447*t+.0068612*e+.0041116*i-37436e-8*s+121272e-10*r-1699e-10*o+875e-12*a):l<1900?(t=l-1860,e=t*t,i=t*e,s=e*e,r=e*i,7.62+.5737*t-.251754*e+.01680668*i-.0004473624*s+r/233174):l<1920?(t=l-1900,e=t*t,i=t*e,s=e*e,-2.79+1.494119*t-.0598939*e+.0061966*i-197e-6*s):l<1941?(t=l-1920,e=t*t,i=t*e,21.2+.84493*t-.0761*e+.0020936*i):l<1961?(t=l-1950,e=t*t,i=t*e,29.07+.407*t-e/233+i/2547):l<1986?(t=l-1975,e=t*t,i=t*e,45.45+1.067*t-e/260-i/718):l<2005?(t=l-2e3,e=t*t,i=t*e,s=e*e,r=e*i,63.86+.3345*t-.060374*e+.0017275*i+651814e-9*s+2373599e-11*r):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}function jv(n){return u0(Math.min(n,17*Kf))}var sp=u0;function Qv(n){sp=n}function zf(n){return n+sp(n)/86400}var ai=class n{constructor(t){if(t instanceof n){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}let e=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-Of.getTime())/e,this.tt=zf(this.ut);return}if(Number.isFinite(t)){this.date=new Date(Of.getTime()+t*e),this.ut=t,this.tt=zf(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let e=new n(t);for(;;){let i=t-e.tt;if(Math.abs(i)<1e-12)return e;e=e.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(t){return new n(this.ut+t)}};function ty(n,t,e){return new ai(n.ut+e*(t.ut-n.ut))}function wt(n){return n instanceof ai?n:new ai(n)}function ey(n){function t(d){return d%Nv*Ir}let e=n.tt/36525,i=t(128710479305e-5+e*1295965810481e-4),s=t(335779.526232+e*17395272628478e-4),r=t(107226070369e-5+e*1602961601209e-3),o=t(450160.398036-e*69628905431e-4),a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*e)*a+33386*l,u=(92052331+9086*e)*l+15377*a,h=2*(s-r+o);return a=Math.sin(h),l=Math.cos(h),c+=(-13170906-1675*e)*a-13696*l,u+=(5730336-3015*e)*l-4587*a,h=2*(s+o),a=Math.sin(h),l=Math.cos(h),c+=(-2276413-234*e)*a+2796*l,u+=(978459-485*e)*l+1374*a,h=2*o,a=Math.sin(h),l=Math.cos(h),c+=(2074554+207*e)*a-698*l,u+=(-897492+470*e)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*e)*a+11817*l,u+=(73871-184*e)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function rp(n){var t=n.tt/36525,e=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return e/3600}var mc;function Ki(n){if(!mc||Math.abs(mc.tt-n.tt)>1e-6){let t=ey(n),e=rp(n),i=e+t.deps/3600;mc={tt:n.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(e*nt)/15,mobl:e,tobl:i}}return mc}function op(n,t){let e=n*nt,i=Math.cos(e),s=Math.sin(e);return[t[0],t[1]*i-t[2]*s,t[1]*s+t[2]*i]}function ny(n,t){return op(rp(n),t)}var ap=0;function Yi(n){++ap;let t=n.tt/36525;function e(Ut,T){let kt=[],bt;for(bt=0;bt<=T-Ut;++bt)kt.push(0);return{min:Ut,array:kt}}function i(Ut,T,kt,bt){let xt=[];for(let pt=0;pt<=T-Ut;++pt)xt.push(e(kt,bt));return{min:Ut,array:xt}}function s(Ut,T,kt){let bt=Ut.array[T-Ut.min];return bt.array[kt-bt.min]}function r(Ut,T,kt,bt){let xt=Ut.array[T-Ut.min];xt.array[kt-xt.min]=bt}let o,a,l,c,u,h,d,p,g,_,m,f,E,b,y,A,R,C,N,S,M,P,z,G=i(-6,6,1,4),W=i(-6,6,1,4);function Z(Ut,T){return s(G,Ut,T)}function X(Ut,T){return s(W,Ut,T)}function tt(Ut,T,kt){return r(G,Ut,T,kt)}function H(Ut,T,kt){return r(W,Ut,T,kt)}function at(Ut,T,kt,bt,xt){xt(Ut*kt-T*bt,T*kt+Ut*bt)}function Q(Ut){return Math.sin(qn*Ut)}d=t*t,g=0,z=0,m=0,f=3422.7;var gt=Q(.19833+.05611*t),Gt=Q(.27869+.04508*t),oe=Q(.16827-.36903*t),he=Q(.34734-5.37261*t),te=Q(.10498-5.37899*t),$=Q(.42681-.41855*t),K=Q(.14943-5.37511*t);for(C=.84*gt+.31*Gt+14.27*oe+7.26*he+.28*te+.24*$,N=2.94*gt+.31*Gt+14.27*oe+9.34*he+1.12*te+.83*$,S=-6.4*gt-1.89*$,M=.21*gt+.31*Gt+14.27*oe-88.7*he-15.3*te+.24*$-1.86*K,P=C-S,p=-3332e-9*Q(.59734-5.37261*t)-539e-9*Q(.35498-5.37899*t)-64e-9*Q(.39943-5.37511*t),E=qn*Cr(.60643382+1336.85522467*t-313e-8*d)+C/qi,b=qn*Cr(.37489701+1325.55240982*t+2565e-8*d)+N/qi,y=qn*Cr(.99312619+99.99735956*t-44e-8*d)+S/qi,A=qn*Cr(.25909118+1342.2278298*t-892e-8*d)+M/qi,R=qn*Cr(.82736186+1236.85308708*t-397e-8*d)+P/qi,u=1;u<=4;++u){switch(u){case 1:l=b,a=4,c=1.000002208;break;case 2:l=y,a=3,c=.997504612-.002495388*t;break;case 3:l=A,a=4,c=1.000002708+139.978*p;break;case 4:l=R,a=6,c=1;break;default:throw`Internal error: I = ${u}`}for(tt(0,u,1),tt(1,u,Math.cos(l)*c),H(0,u,0),H(1,u,Math.sin(l)*c),h=2;h<=a;++h)at(Z(h-1,u),X(h-1,u),Z(1,u),X(1,u),(Ut,T)=>(tt(h,u,Ut),H(h,u,T)));for(h=1;h<=a;++h)tt(-h,u,Z(h,u)),H(-h,u,-X(h,u))}function yt(Ut,T,kt,bt){for(var xt={x:1,y:0},pt=[0,Ut,T,kt,bt],ee=1;ee<=4;++ee)pt[ee]!==0&&at(xt.x,xt.y,Z(pt[ee],ee),X(pt[ee],ee),(Mt,Ot)=>(xt.x=Mt,xt.y=Ot));return xt}function B(Ut,T,kt,bt,xt,pt,ee,Mt){var Ot=yt(xt,pt,ee,Mt);g+=Ut*Ot.y,z+=T*Ot.y,m+=kt*Ot.x,f+=bt*Ot.x}B(13.902,14.06,-.001,.2607,0,0,0,4),B(.403,-4.01,.394,.0023,0,0,0,3),B(2369.912,2373.36,.601,28.2333,0,0,0,2),B(-125.154,-112.79,-.725,-.9781,0,0,0,1),B(1.979,6.98,-.445,.0433,1,0,0,4),B(191.953,192.72,.029,3.0861,1,0,0,2),B(-8.466,-13.51,.455,-.1093,1,0,0,1),B(22639.5,22609.07,.079,186.5398,1,0,0,0),B(18.609,3.59,-.094,.0118,1,0,0,-1),B(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),B(3.215,5.44,.192,-.0386,1,0,0,-3),B(-38.428,-38.64,.001,.6008,1,0,0,-4),B(-.393,-1.43,-.092,.0086,1,0,0,-6),B(-.289,-1.59,.123,-.0053,0,1,0,4),B(-24.42,-25.1,.04,-.3,0,1,0,2),B(18.023,17.93,.007,.1494,0,1,0,1),B(-668.146,-126.98,-1.302,-.3997,0,1,0,0),B(.56,.32,-.001,-.0037,0,1,0,-1),B(-165.145,-165.06,.054,1.9178,0,1,0,-2),B(-1.877,-6.46,-.416,.0339,0,1,0,-4),B(.213,1.02,-.074,.0054,2,0,0,4),B(14.387,14.78,-.017,.2833,2,0,0,2),B(-.586,-1.2,.054,-.01,2,0,0,1),B(769.016,767.96,.107,10.1657,2,0,0,0),B(1.75,2.01,-.018,.0155,2,0,0,-1),B(-211.656,-152.53,5.679,-.3039,2,0,0,-2),B(1.225,.91,-.03,-.0088,2,0,0,-3),B(-30.773,-34.07,-.308,.3722,2,0,0,-4),B(-.57,-1.4,-.074,.0109,2,0,0,-6),B(-2.921,-11.75,.787,-.0484,1,1,0,2),B(1.267,1.52,-.022,.0164,1,1,0,1),B(-109.673,-115.18,.461,-.949,1,1,0,0),B(-205.962,-182.36,2.056,1.4437,1,1,0,-2),B(.233,.36,.012,-.0025,1,1,0,-3),B(-4.391,-9.66,-.471,.0673,1,1,0,-4),B(.283,1.53,-.111,.006,1,-1,0,4),B(14.577,31.7,-1.54,.2302,1,-1,0,2),B(147.687,138.76,.679,1.1528,1,-1,0,0),B(-1.089,.55,.021,0,1,-1,0,-1),B(28.475,23.59,-.443,-.2257,1,-1,0,-2),B(-.276,-.38,-.006,-.0036,1,-1,0,-3),B(.636,2.27,.146,-.0102,1,-1,0,-4),B(-.189,-1.68,.131,-.0028,0,2,0,2),B(-7.486,-.66,-.037,-.0086,0,2,0,0),B(-8.096,-16.35,-.74,.0918,0,2,0,-2),B(-5.741,-.04,0,-9e-4,0,0,2,2),B(.255,0,0,0,0,0,2,1),B(-411.608,-.2,0,-.0124,0,0,2,0),B(.584,.84,0,.0071,0,0,2,-1),B(-55.173,-52.14,0,-.1052,0,0,2,-2),B(.254,.25,0,-.0017,0,0,2,-3),B(.025,-1.67,0,.0031,0,0,2,-4),B(1.06,2.96,-.166,.0243,3,0,0,2),B(36.124,50.64,-1.3,.6215,3,0,0,0),B(-13.193,-16.4,.258,-.1187,3,0,0,-2),B(-1.187,-.74,.042,.0074,3,0,0,-4),B(-.293,-.31,-.002,.0046,3,0,0,-6),B(-.29,-1.45,.116,-.0051,2,1,0,2),B(-7.649,-10.56,.259,-.1038,2,1,0,0),B(-8.627,-7.59,.078,-.0192,2,1,0,-2),B(-2.74,-2.54,.022,.0324,2,1,0,-4),B(1.181,3.32,-.212,.0213,2,-1,0,2),B(9.703,11.67,-.151,.1268,2,-1,0,0),B(-.352,-.37,.001,-.0028,2,-1,0,-1),B(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),B(.36,.2,-.012,-.0043,2,-1,0,-4),B(-1.167,-1.25,.008,-.0106,1,2,0,0),B(-7.412,-6.12,.117,.0484,1,2,0,-2),B(-.311,-.65,-.032,.0044,1,2,0,-4),B(.757,1.82,-.105,.0112,1,-2,0,2),B(2.58,2.32,.027,.0196,1,-2,0,0),B(2.533,2.4,-.014,-.0212,1,-2,0,-2),B(-.344,-.57,-.025,.0036,0,3,0,-2),B(-.992,-.02,0,0,1,0,2,2),B(-45.099,-.02,0,-.001,1,0,2,0),B(-.179,-9.52,0,-.0833,1,0,2,-2),B(-.301,-.33,0,.0014,1,0,2,-4),B(-6.382,-3.37,0,-.0481,1,0,-2,2),B(39.528,85.13,0,-.7136,1,0,-2,0),B(9.366,.71,0,-.0112,1,0,-2,-2),B(.202,.02,0,0,1,0,-2,-4),B(.415,.1,0,.0013,0,1,2,0),B(-2.152,-2.26,0,-.0066,0,1,2,-2),B(-1.44,-1.3,0,.0014,0,1,-2,2),B(.384,-.04,0,0,0,1,-2,-2),B(1.938,3.6,-.145,.0401,4,0,0,0),B(-.952,-1.58,.052,-.013,4,0,0,-2),B(-.551,-.94,.032,-.0097,3,1,0,0),B(-.482,-.57,.005,-.0045,3,1,0,-2),B(.681,.96,-.026,.0115,3,-1,0,0),B(-.297,-.27,.002,-9e-4,2,2,0,-2),B(.254,.21,-.003,0,2,-2,0,-2),B(-.25,-.22,.004,.0014,1,3,0,-2),B(-3.996,0,0,4e-4,2,0,2,0),B(.557,-.75,0,-.009,2,0,2,-2),B(-.459,-.38,0,-.0053,2,0,-2,2),B(-1.298,.74,0,4e-4,2,0,-2,0),B(.538,1.14,0,-.0141,2,0,-2,-2),B(.263,.02,0,0,1,1,2,0),B(.426,.07,0,-6e-4,1,1,-2,-2),B(-.304,.03,0,3e-4,1,-1,2,0),B(-.372,-.19,0,-.0027,1,-1,-2,2),B(.418,0,0,0,0,0,4,0),B(-.33,-.04,0,0,3,0,2,0);function _t(Ut,T,kt,bt,xt){return Ut*yt(T,kt,bt,xt).y}_=0,_+=_t(-526.069,0,0,1,-2),_+=_t(-3.352,0,0,1,-4),_+=_t(44.297,1,0,1,-2),_+=_t(-6,1,0,1,-4),_+=_t(20.599,-1,0,1,0),_+=_t(-30.598,-1,0,1,-2),_+=_t(-24.649,-2,0,1,0),_+=_t(-2,-2,0,1,-2),_+=_t(-22.571,0,1,1,-2),_+=_t(10.985,0,-1,1,-2),g+=.82*Q(.7736-62.5512*t)+.31*Q(.0466-125.1025*t)+.35*Q(.5785-25.1042*t)+.66*Q(.4591+1335.8075*t)+.64*Q(.313-91.568*t)+1.14*Q(.148+1331.2898*t)+.21*Q(.5918+1056.5859*t)+.44*Q(.5784+1322.8595*t)+.24*Q(.2275-5.7374*t)+.28*Q(.2965+2.6929*t)+.33*Q(.3132+6.3368*t),o=A+z/qi;let Jt=(1.000002708+139.978*p)*(18518.511+1.189+m)*Math.sin(o)-6.24*Math.sin(3*o)+_;return{geo_eclip_lon:qn*Cr((E+g/qi)/qn),geo_eclip_lat:Math.PI/(180*3600)*Jt,distance_au:qi*zv/(.999953253*f)}}var Tc=class{constructor(t,e,i,s,r,o){this.elat=t,this.elon=e,this.mlat=i,this.mlon=s,this.dist_km=r,this.diam_deg=o}};function iy(n){let t=wt(n),e=t.tt/36525,i=e*e,s=i*e,r=i*i,o=Yi(t),a=o.geo_eclip_lon,l=o.geo_eclip_lat,c=o.distance_au*fe,u=nt*1.543,h=nt*Pr(93.272095+483202.0175233*e-.0036539*i-s/3526e3+r/86331e4),d=nt*Pr(125.0445479-1934.1362891*e+.0020754*i+s/467441-r/60616e3),p=nt*Pr(357.5291092+35999.0502909*e-1536e-7*i+s/2449e4),g=nt*Pr(134.9633964+477198.8675055*e+.0087414*i+s/69699-r/14712e3),_=nt*Pr(297.8501921+445267.1114034*e-.0018819*i+s/545868-r/113065e3),m=1-.002516*e-74e-7*i,f=a-d,E=Math.atan2(Math.sin(f)*Math.cos(l)*Math.cos(u)-Math.sin(l)*Math.sin(u),Math.cos(f)*Math.cos(l)),b=$r(Ee*(E-h)),y=Math.asin(-Math.sin(f)*Math.cos(l)*Math.sin(u)-Math.sin(l)*Math.cos(u)),A=nt*(119.75+131.849*e),R=nt*(72.56+20.186*e),C=-.02752*Math.cos(g)+-.02245*Math.sin(h)+.00684*Math.cos(g-2*h)+-.00293*Math.cos(2*h)+-85e-5*Math.cos(2*h-2*_)+-54e-5*Math.cos(g-2*_)+-2e-4*Math.sin(g+h)+-2e-4*Math.cos(g+2*h)+-2e-4*Math.cos(g-h)+14e-5*Math.cos(g+2*h-2*_),N=-.02816*Math.sin(g)+.02244*Math.cos(h)+-.00682*Math.sin(g-2*h)+-.00279*Math.sin(2*h)+-83e-5*Math.sin(2*h-2*_)+69e-5*Math.sin(g-2*_)+4e-4*Math.cos(g+h)+-25e-5*Math.sin(2*g)+-23e-5*Math.sin(g+2*h)+2e-4*Math.cos(g-h)+19e-5*Math.sin(g-h)+13e-5*Math.sin(g+2*h-2*_)+-1e-4*Math.cos(g-3*h),M=-(.0252*m*Math.sin(p)+.00473*Math.sin(2*g-2*h)+-.00467*Math.sin(g)+.00396*Math.sin(A)+.00276*Math.sin(2*g-2*_)+.00196*Math.sin(d)+-.00183*Math.cos(g-h)+.00115*Math.sin(g-2*_)+-96e-5*Math.sin(g-_)+46e-5*Math.sin(2*h-2*_)+-39e-5*Math.sin(g-h)+-32e-5*Math.sin(g-p-_)+27e-5*Math.sin(2*g-p-2*_)+23e-5*Math.sin(R)+-14e-5*Math.sin(2*_)+14e-5*Math.cos(2*g-2*h)+-12e-5*Math.sin(g-2*h)+-12e-5*Math.sin(2*g)+11e-5*Math.sin(2*g-2*p-2*_))+(C*Math.cos(E)+N*Math.sin(E))*Math.tan(y),P=N*Math.cos(E)-C*Math.sin(E),z=2*Ee*Math.atan(Ln/Math.sqrt(c*c-Ln*Ln));return new Tc(Ee*y+P,b+M,Ee*l,Ee*a,c,z)}function lp(n,t){return[n.rot[0][0]*t[0]+n.rot[1][0]*t[1]+n.rot[2][0]*t[2],n.rot[0][1]*t[0]+n.rot[1][1]*t[1]+n.rot[2][1]*t[2],n.rot[0][2]*t[0]+n.rot[1][2]*t[1]+n.rot[2][2]*t[2]]}function Vr(n,t,e){let i=Qc(t,e);return lp(i,n)}function kf(n,t,e){let i=Qc(t,e);return rh(i,n)}function Qc(n,t){let e=n.tt/36525,i=84381.406,s=((((-951e-10*e+132851e-9)*e-.00114045)*e-1.0790069)*e+5038.481507)*e,r=((((3337e-10*e-467e-9)*e-.00772503)*e+.0512623)*e-.025754)*e+i,o=((((-56e-9*e+170663e-9)*e-.00121197)*e-2.3814292)*e+10.556403)*e;i*=Ir,s*=Ir,r*=Ir,o*=Ir;let a=Math.sin(i),l=Math.cos(i),c=Math.sin(-s),u=Math.cos(-s),h=Math.sin(-r),d=Math.cos(-r),p=Math.sin(o),g=Math.cos(o),_=g*u-c*p*d,m=g*c*l+p*d*u*l-a*p*h,f=g*c*a+p*d*u*a+l*p*h,E=-p*u-c*g*d,b=-p*c*l+g*d*u*l-a*g*h,y=-p*c*a+g*d*u*a+l*g*h,A=c*h,R=-h*u*l-a*d,C=-h*u*a+d*l;if(t===ye.Into2000)return new Le([[_,m,f],[E,b,y],[A,R,C]]);if(t===ye.From2000)return new Le([[_,E,A],[m,b,R],[f,y,C]]);throw"Invalid precess direction"}function sy(n){let t=.779057273264+.00273781191135448*n.ut,e=n.ut%1,i=360*((t+e)%1);return i<0&&(i+=360),i}var gc;function Ti(n){if(!gc||gc.tt!==n.tt){let t=n.tt/36525,e=15*Ki(n).ee,i=sy(n),r=((e+.014506+((((-368e-10*t-29956e-9)*t-44e-8)*t+1.3915817)*t+4612.156534)*t)/3600+i)%360/15;r<0&&(r+=24),gc={tt:n.tt,st:r}}return gc.st}function th(n){let t=wt(n);return Ti(t)}function ry(n,t){let e=n[0]*fe,i=n[1]*fe,s=n[2]*fe,r=Math.hypot(e,i),o,a,l;if(r<1e-6)o=0,a=s>0?90:-90,l=Math.abs(s)-kv;else{let c=Math.atan2(i,e);for(o=Ee*c-15*t;o<=-180;)o+=360;for(;o>180;)o-=360;let u=Math.atan2(s,r),h,d,p,g=0;for(;;){if(++g>10)throw"inverse_terra failed to converge.";h=Math.cos(u),d=Math.sin(u);let m=(Dr-1)*wi,f=h*h,E=d*d,b=f+Dr*E;p=Math.sqrt(b);let y=m*d*h/p-s*h+r*d;if(Math.abs(y)<1e-8)break;let A=m*((f-E)/p-E*f*(Dr-1)/(m*b))+s*d+r*h;u-=y/A}a=Ee*u;let _=wi/p;Math.abs(d)>Math.abs(h)?l=s/d-Dr*_:l=r/h-_}return new Xo(a,o,1e3*l)}function d0(n,t){let e=n.latitude*nt,i=Math.sin(e),s=Math.cos(e),r=1/Math.hypot(s,ri*i),o=Dr*r,a=n.height/1e3,l=wi*r+a,c=wi*o+a,u=(15*t+n.longitude)*nt,h=Math.sin(u),d=Math.cos(u);return{pos:[l*s*d/fe,l*s*h/fe,c*i/fe],vel:[-Bf*l*s*h*86400/fe,Bf*l*s*d*86400/fe,0]}}function Hr(n,t,e){let i=eh(t,e);return lp(i,n)}function Vf(n,t,e){let i=eh(t,e);return rh(i,n)}function eh(n,t){let e=Ki(n),i=e.mobl*nt,s=e.tobl*nt,r=e.dpsi*Ir,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r),d=u,p=-h*o,g=-h*a,_=h*l,m=u*o*l+a*c,f=u*a*l-o*c,E=h*c,b=u*o*c-a*l,y=u*a*c+o*l;if(t===ye.From2000)return new Le([[d,_,E],[p,m,b],[g,f,y]]);if(t===ye.Into2000)return new Le([[d,p,g],[_,m,f],[E,b,y]]);throw"Invalid precess direction"}function nh(n,t,e){return e===ye.Into2000?Vr(Hr(n,t,e),t,e):Hr(Vr(n,t,e),t,e)}function oy(n,t,e){return e===ye.Into2000?kf(Vf(n,t,e),t,e):Vf(kf(n,t,e),t,e)}function cp(n,t){let e=Ti(n),i=d0(t,e).pos;return nh(i,n,ye.Into2000)}var $t=class{constructor(t,e,i,s){this.x=t,this.y=e,this.z=i,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}},Pe=class{constructor(t,e,i,s,r,o,a){this.x=t,this.y=e,this.z=i,this.vx=s,this.vy=r,this.vz=o,this.t=a}},Zi=class{constructor(t,e,i){this.lat=Qt(t),this.lon=Qt(e),this.dist=Qt(i)}},Gr=class{constructor(t,e,i,s){this.ra=Qt(t),this.dec=Qt(e),this.dist=Qt(i),this.vec=s}};function ay(n){if(!(n instanceof Array)||n.length!==3)return!1;for(let t=0;t<3;++t){if(!(n[t]instanceof Array)||n[t].length!==3)return!1;for(let e=0;e<3;++e)if(!Number.isFinite(n[t][e]))return!1}return!0}var Le=class{constructor(t){this.rot=t}};function ly(n){if(!ay(n))throw"Argument must be a [3][3] array of numbers";return new Le(n)}var Ac=class{constructor(t,e,i,s){this.azimuth=Qt(t),this.altitude=Qt(e),this.ra=Qt(i),this.dec=Qt(s)}},Rc=class{constructor(t,e,i){this.vec=t,this.elat=Qt(e),this.elon=Qt(i)}};function f0(n,t){return new $t(n[0],n[1],n[2],t)}function Hf(n,t){let e=f0(n,t),i=e.x*e.x+e.y*e.y,s=Math.sqrt(i+e.z*e.z);if(i===0){if(e.z===0)throw"Indeterminate sky coordinates";return new Gr(0,e.z<0?-90:90,s,e)}let r=c0*Math.atan2(e.y,e.x);r<0&&(r+=24);let o=Ee*Math.atan2(n[2],Math.sqrt(i));return new Gr(r,o,s,e)}function Nr(n,t){let e=n*nt,i=Math.cos(e),s=Math.sin(e);return[i*t[0]+s*t[1],i*t[1]-s*t[0],t[2]]}function ih(n,t,e,i,s){let r=wt(n);Yr(t),Qt(e),Qt(i);let o=Math.sin(t.latitude*nt),a=Math.cos(t.latitude*nt),l=Math.sin(t.longitude*nt),c=Math.cos(t.longitude*nt),u=Math.sin(i*nt),h=Math.cos(i*nt),d=Math.sin(e*Xu),p=Math.cos(e*Xu),g=[a*c,a*l,o],_=[-o*c,-o*l,a],m=[l,-c,0],f=-15*Ti(r),E=Nr(f,g),b=Nr(f,_),y=Nr(f,m),A=[h*p,h*d,u],R=A[0]*E[0]+A[1]*E[1]+A[2]*E[2],C=A[0]*b[0]+A[1]*b[1]+A[2]*b[2],N=A[0]*y[0]+A[1]*y[1]+A[2]*y[2],S=Math.hypot(C,N),M;S>0?(M=-Ee*Math.atan2(N,C),M<0&&(M+=360)):M=0;let P=Ee*Math.atan2(S,R),z=e,G=i;if(s){let W=P,Z=Jo(s,90-P);if(P-=Z,Z>0&&P>3e-4){let X=Math.sin(P*nt),tt=Math.cos(P*nt),H=Math.sin(W*nt),at=Math.cos(W*nt),Q=[];for(let gt=0;gt<3;++gt)Q.push((A[gt]-at*E[gt])/H*X+E[gt]*tt);S=Math.hypot(Q[0],Q[1]),S>0?(z=c0*Math.atan2(Q[1],Q[0]),z<0&&(z+=24)):z=0,G=Ee*Math.atan2(Q[2],S)}}return new Ac(M,90-P,z,G)}function Yr(n){if(!(n instanceof Xo))throw`Not an instance of the Observer class: ${n}`;if(Qt(n.latitude),Qt(n.longitude),Qt(n.height),n.latitude<-90||n.latitude>90)throw`Latitude ${n.latitude} is out of range. Must be -90..+90.`;return n}var Xo=class{constructor(t,e,i){this.latitude=t,this.longitude=e,this.height=i,Yr(this)}};function hp(n){let t=wt(n).AddDays(-1/Zc),e=Fr(sn.Earth,t),i=[-e.x,-e.y,-e.z],[s,r,o]=nh(i,t,ye.From2000),a=nt*Ki(t).tobl,l=Math.cos(a),c=Math.sin(a),u=new $t(s,r,o,t);return p0(u,l,c)}function Qo(n,t,e,i,s){Yr(e),wc(i),wc(s);let r=wt(t),o=cp(r,e),a=Sn(n,r,s),l=[a.x-o[0],a.y-o[1],a.z-o[2]];if(!i)return Hf(l,r);let c=nh(l,r,ye.From2000);return Hf(c,r)}function cy(n,t,e){let i=wt(n),s=Ti(i),r=d0(t,s).pos;return e||(r=nh(r,i,ye.Into2000)),f0(r,i)}function hy(n,t,e){let i=wt(n),s=Ti(i),r=d0(t,s),o=new Pe(r.pos[0],r.pos[1],r.pos[2],r.vel[0],r.vel[1],r.vel[2],i);return e?o:oy(o,i,ye.Into2000)}function uy(n,t){let e=Ti(n.t),i=[n.x,n.y,n.z];return t||(i=Vr(i,n.t,ye.From2000),i=Hr(i,n.t,ye.From2000)),ry(i,e)}function dy(n,t){let e=Math.sin(n*nt),i=e*e;return 9.7803253359*(1+.00193185265241*i)/Math.sqrt(1-.00669437999013*i)*(1-(315704e-12-210269e-14*i)*t+737452e-19*t*t)}function p0(n,t,e){let i=n.x,s=n.y*t+n.z*e,r=-n.y*e+n.z*t,o=Math.hypot(i,s),a=0;o>0&&(a=Ee*Math.atan2(s,i),a<0&&(a+=360));let l=Ee*Math.atan2(r,o),c=new $t(i,s,r,n.t);return new Rc(c,l,a)}function qo(n){let t=Ki(n.t),e=[n.x,n.y,n.z],i=Vr(e,n.t,ye.From2000),[s,r,o]=Hr(i,n.t,ye.From2000),a=new $t(s,r,o,n.t),l=t.tobl*nt;return p0(a,Math.cos(l),Math.sin(l))}function Mn(n){let t=wt(n),e=Yi(t),i=e.distance_au*Math.cos(e.geo_eclip_lat),s=[i*Math.cos(e.geo_eclip_lon),i*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],r=ny(t,s),o=Vr(r,t,ye.Into2000);return new $t(o[0],o[1],o[2],t)}function Mc(n){let t=wt(n),e=Yi(t),i=e.distance_au*Math.cos(e.geo_eclip_lat),s=[i*Math.cos(e.geo_eclip_lon),i*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],r=Ki(t),o=op(r.mobl,s),a=Hr(o,t,ye.From2000),l=f0(a,t),c=r.tobl*nt,u=Math.cos(c),h=Math.sin(c),d=p0(l,u,h);return new Zi(d.elat,d.elon,e.distance_au)}function ta(n){let t=wt(n),e=1e-5,i=t.AddDays(-e),s=t.AddDays(+e),r=Mn(i),o=Mn(s);return new Pe((r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2,(o.x-r.x)/(2*e),(o.y-r.y)/(2*e),(o.z-r.z)/(2*e),t)}function m0(n){let t=wt(n),e=ta(t),i=1+h0;return new Pe(e.x/i,e.y/i,e.z/i,e.vx/i,e.vy/i,e.vz/i,t)}function Ts(n,t,e){let i=1,s=0;for(let r of n){let o=0;for(let[l,c,u]of r)o+=l*Math.cos(c+t*u);let a=i*o;e&&(a%=qn),s+=a,i*=t}return s}function Hu(n,t){let e=1,i=0,s=0,r=0;for(let o of n){let a=0,l=0;for(let[c,u,h]of o){let d=u+t*h;a+=c*h*Math.sin(d),r>0&&(l+=c*Math.cos(d))}s+=r*i*l-e*a,i=e,e*=t,++r}return s}var Lr=365250,Ju=0,Ku=1,Cc=2;function ju(n){return new qe(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function up(n,t,e){let i=e*Math.cos(t),s=Math.cos(n),r=Math.sin(n);return[i*s,i*r,e*Math.sin(t)]}function Fr(n,t){let e=t.tt/Lr,i=Ts(n[Ju],e,!0),s=Ts(n[Ku],e,!1),r=Ts(n[Cc],e,!1),o=up(i,s,r);return ju(o).ToAstroVector(t)}function Yo(n,t){let e=t/Lr,i=Ts(n[Ju],e,!0),s=Ts(n[Ku],e,!1),r=Ts(n[Cc],e,!1),o=Hu(n[Ju],e),a=Hu(n[Ku],e),l=Hu(n[Cc],e),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=+(l*h*c)-r*d*c*a-r*h*u*o,g=+(l*h*u)-r*d*u*a+r*h*c*o,_=+(l*d)+r*h*a,m=up(i,s,r),f=[p/Lr,g/Lr,_/Lr],E=ju(m),b=ju(f);return new Ei(t,E,b)}function _c(n,t,e,i){let s=i/(i+jo),r=Fr(sn[e],t);n.x+=s*r.x,n.y+=s*r.y,n.z+=s*r.z}function fy(n){let t=new $t(0,0,0,n);return _c(t,n,L.Jupiter,Or),_c(t,n,L.Saturn,Br),_c(t,n,L.Uranus,zr),_c(t,n,L.Neptune,kr),t}var Qu=51,py=29200,Ur=146,Si=201,ws=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]],qe=class n{constructor(t,e,i){this.x=t,this.y=e,this.z=i}clone(){return new n(this.x,this.y,this.z)}ToAstroVector(t){return new $t(this.x,this.y,this.z,t)}static zero(){return new n(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new n(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new n(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new n(t*this.x,t*this.y,t*this.z)}div(t){return new n(this.x/t,this.y/t,this.z/t)}mean(t){return new n((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new n(-this.x,-this.y,-this.z)}},Ei=class n{constructor(t,e,i){this.tt=t,this.r=e,this.v=i}clone(){return new n(this.tt,this.r,this.v)}sub(t){return new n(this.tt,this.r.sub(t.r),this.v.sub(t.v))}};function my(n){let[t,[e,i,s],[r,o,a]]=n;return new Ei(t,new qe(e,i,s),new qe(r,o,a))}function Dn(n,t,e,i){let s=i/(i+jo),r=Yo(sn[e],t);return n.r.incr(r.r.mul(s)),n.v.incr(r.v.mul(s)),r}function Ho(n,t,e){let i=e.sub(n),s=i.quadrature();return i.mul(t/(s*Math.sqrt(s)))}var Rs=class{constructor(t){let e=new Ei(t,new qe(0,0,0),new qe(0,0,0));this.Jupiter=Dn(e,t,L.Jupiter,Or),this.Saturn=Dn(e,t,L.Saturn,Br),this.Uranus=Dn(e,t,L.Uranus,zr),this.Neptune=Dn(e,t,L.Neptune,kr),this.Jupiter.r.decr(e.r),this.Jupiter.v.decr(e.v),this.Saturn.r.decr(e.r),this.Saturn.v.decr(e.v),this.Uranus.r.decr(e.r),this.Uranus.v.decr(e.v),this.Neptune.r.decr(e.r),this.Neptune.v.decr(e.v),this.Sun=new Ei(t,e.r.mul(-1),e.v.mul(-1))}Acceleration(t){let e=Ho(t,jo,this.Sun.r);return e.incr(Ho(t,Or,this.Jupiter.r)),e.incr(Ho(t,Br,this.Saturn.r)),e.incr(Ho(t,zr,this.Uranus.r)),e.incr(Ho(t,kr,this.Neptune.r)),e}},$o=class n{constructor(t,e,i,s){this.tt=t,this.r=e,this.v=i,this.a=s}clone(){return new n(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}},Pc=class{constructor(t,e){this.bary=t,this.grav=e}};function Wr(n,t,e,i){return new qe(t.x+n*(e.x+n*i.x/2),t.y+n*(e.y+n*i.y/2),t.z+n*(e.z+n*i.z/2))}function t0(n,t,e){return new qe(t.x+n*e.x,t.y+n*e.y,t.z+n*e.z)}function e0(n,t){let e=n-t.tt,i=new Rs(n),s=Wr(e,t.r,t.v,t.a),r=i.Acceleration(s).mean(t.a),o=Wr(e,t.r,t.v,r),a=t.v.add(r.mul(e)),l=i.Acceleration(o),c=new $o(n,o,a,l);return new Pc(i,c)}var gy=[];function dp(n,t){let e=Math.floor(n);return e<0?0:e>=t?t-1:e}function n0(n){let t=my(n),e=new Rs(t.tt),i=t.r.add(e.Sun.r),s=t.v.add(e.Sun.v),r=e.Acceleration(i),o=new $o(t.tt,i,s,r);return new Pc(e,o)}function _y(n,t){let e=ws[0][0];if(t<e||t>ws[Qu-1][0])return null;let i=dp((t-e)/py,Qu-1);if(!n[i]){let r=n[i]=[];r[0]=n0(ws[i]).grav,r[Si-1]=n0(ws[i+1]).grav;let o,a=r[0].tt;for(o=1;o<Si-1;++o)r[o]=e0(a+=Ur,r[o-1]).grav;a=r[Si-1].tt;var s=[];for(s[Si-1]=r[Si-1],o=Si-2;o>0;--o)s[o]=e0(a-=Ur,s[o+1]).grav;for(o=Si-2;o>0;--o){let l=o/(Si-1);r[o].r=r[o].r.mul(1-l).add(s[o].r.mul(l)),r[o].v=r[o].v.mul(1-l).add(s[o].v.mul(l)),r[o].a=r[o].a.mul(1-l).add(s[o].a.mul(l))}}return n[i]}function Gf(n,t,e){let i=n0(n),s=Math.ceil((t-i.grav.tt)/e);for(let r=0;r<s;++r)i=e0(r+1===s?t:i.grav.tt+e,i.grav);return i}function g0(n,t){let e,i,s,r=_y(gy,n.tt);if(r){let o=dp((n.tt-r[0].tt)/Ur,Si-1),a=r[o],l=r[o+1],c=a.a.mean(l.a),u=Wr(n.tt-a.tt,a.r,a.v,c),h=t0(n.tt-a.tt,a.v,c),d=Wr(n.tt-l.tt,l.r,l.v,c),p=t0(n.tt-l.tt,l.v,c),g=(n.tt-a.tt)/Ur;e=u.mul(1-g).add(d.mul(g)),i=h.mul(1-g).add(p.mul(g))}else{let o;n.tt<ws[0][0]?o=Gf(ws[0],n.tt,-Ur):o=Gf(ws[Qu-1],n.tt,+Ur),e=o.grav.r,i=o.grav.v,s=o.bary}return t&&(s||(s=new Rs(n.tt)),e=e.sub(s.Sun.r),i=i.sub(s.Sun.v)),new Pe(e.x,e.y,e.z,i.x,i.y,i.z,n)}var xy=new Le([[.999432765338654,-.0336771074697641,0],[.0303959428906285,.902057912352809,.430543388542295],[-.0144994559663353,-.430299169409101,.902569881273754]]),xc=[{mu:282489428433814e-21,al:[1.446213296021224,3.5515522861824],a:[[.0028210960212903,0,0]],l:[[-.0001925258348666,4.9369589722645,.01358483658305],[-970803596076e-16,4.3188796477322,.01303413843243],[-8988174165e-14,1.9080016428617,.00305064867158],[-553101050262e-16,1.4936156681569,.01293892891155]],z:[[.0041510849668155,4.089939635545,-.01290686414666],[.0006260521444113,1.446188898627,3.5515522949802],[352747346169e-16,2.1256287034578,.00012727416567]],zeta:[[.0003142172466014,2.7964219722923,-.002315096098],[904169207946e-16,1.0477061879627,-.00056920638196]]},{mu:282483274392893e-21,al:[-.3735263437471362,1.76932271112347],a:[[.0044871037804314,0,0],[4324367498e-16,1.819645606291,1.7822295777568]],l:[[.0008576433172936,4.3188693178264,.01303413830805],[.0004549582875086,1.4936531751079,.01293892881962],[.0003248939825174,1.8196494533458,1.7822295777568],[-.0003074250079334,4.9377037005911,.01358483286724],[.0001982386144784,1.907986905476,.00305101212869],[.0001834063551804,2.1402853388529,.00145009789338],[-.0001434383188452,5.622214036663,.89111478887838],[-771939140944e-16,4.300272437235,2.6733443704266]],z:[[-.0093589104136341,4.0899396509039,-.01290686414666],[.0002988994545555,5.9097265185595,1.7693227079462],[.000213903639035,2.1256289300016,.00012727418407],[.0001980963564781,2.743516829265,.00067797343009],[.0001210388158965,5.5839943711203,320566149e-13],[837042048393e-16,1.6094538368039,-.90402165808846],[823525166369e-16,1.4461887708689,3.5515522949802]],zeta:[[.0040404917832303,1.0477063169425,-.0005692064054],[.0002200421034564,3.3368857864364,-.00012491307307],[.0001662544744719,2.4134862374711,0],[590282470983e-16,5.9719930968366,-3056160225e-14]]},{mu:282498184184723e-21,al:[.2874089391143348,.878207923589328],a:[[.0071566594572575,0,0],[1393029911e-15,1.1586745884981,2.6733443704266]],l:[[.0002310797886226,2.1402987195942,.00145009784384],[-.0001828635964118,4.3188672736968,.01303413828263],[.0001512378778204,4.9373102372298,.01358483481252],[-.0001163720969778,4.300265986149,2.6733443704266],[-955478069846e-16,1.4936612842567,.01293892879857],[815246854464e-16,5.6222137132535,.89111478887838],[-801219679602e-16,1.2995922951532,1.0034433456729],[-607017260182e-16,.64978769669238,.50172167043264]],z:[[.0014289811307319,2.1256295942739,.00012727413029],[.000771093122676,5.5836330003496,320643411e-13],[.0005925911780766,4.0899396636448,-.01290686414666],[.0002045597496146,5.2713683670372,-.12523544076106],[.0001785118648258,.28743156721063,.8782079244252],[.0001131999784893,1.4462127277818,3.5515522949802],[-65877816921e-15,2.2702423990985,-1.7951364394537],[497058888328e-16,5.9096792204858,1.7693227129285]],zeta:[[.0015932721570848,3.3368862796665,-.00012491307058],[.0008533093128905,2.4133881688166,0],[.0003513347911037,5.9720789850127,-3056101771e-14],[-.0001441929255483,1.0477061764435,-.00056920632124]]},{mu:282492144889909e-21,al:[-.3620341291375704,.376486233433828],a:[[.0125879701715314,0,0],[3595204947e-15,.64965776007116,.50172168165034],[27580210652e-16,1.808423578151,3.1750660413359]],l:[[.0005586040123824,2.1404207189815,.00145009793231],[-.0003805813868176,2.7358844897853,2972965062e-14],[.0002205152863262,.649796525964,.5017216724358],[.0001877895151158,1.8084787604005,3.1750660413359],[766916975242e-16,6.2720114319755,1.3928364636651],[747056855106e-16,1.2995916202344,1.0034433456729]],z:[[.0073755808467977,5.5836071576084,3206509914e-14],[.0002065924169942,5.9209831565786,.37648624194703],[.0001589869764021,.28744006242623,.8782079244252],[-.0001561131605348,2.1257397865089,.00012727441285],[.0001486043380971,1.4462134301023,3.5515522949802],[635073108731e-16,5.9096803285954,1.7693227129285],[599351698525e-16,4.1125517584798,-2.7985797954589],[540660842731e-16,5.5390350845569,.00286834082283],[-489596900866e-16,4.6218149483338,-.62695712529519]],zeta:[[.0038422977898495,2.4133922085557,0],[.0022453891791894,5.9721736773277,-3056125525e-14],[-.0002604479450559,3.3368746306409,-.00012491309972],[33211214323e-15,5.5604137742337,.00290037688507]]}],Ic=class{constructor(t,e,i,s){this.io=t,this.europa=e,this.ganymede=i,this.callisto=s}};function vy(n,t,e){let i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=Math.sqrt(t/(i*i*i)),u,h,d,p=s+r*Math.sin(s)-o*Math.cos(s);do u=Math.cos(p),h=Math.sin(p),d=(s-p+r*h-o*u)/(1-r*u-o*h),p+=d;while(Math.abs(d)>=1e-12);u=Math.cos(p),h=Math.sin(p);let g=o*u-r*h,_=-r*u-o*h,m=1/(1+_),E=1/(1+Math.sqrt(1-r*r-o*o)),b=i*(u-r-E*o*g),y=i*(h-o+E*r*g),A=c*m*i*(-h-E*o*_),R=c*m*i*(+u+E*r*_),C=2*Math.sqrt(1-a*a-l*l),N=1-2*l*l,S=1-2*a*a,M=2*l*a;return new Pe(b*N+y*M,b*M+y*S,(a*y-b*l)*C,A*N+R*M,A*M+R*S,(a*R-A*l)*C,n)}function vc(n,t){let e=n.tt+18262.5,i=[0,t.al[0]+e*t.al[1],0,0,0,0];for(let[r,o,a]of t.a)i[0]+=r*Math.cos(o+e*a);for(let[r,o,a]of t.l)i[1]+=r*Math.sin(o+e*a);i[1]%=qn,i[1]<0&&(i[1]+=qn);for(let[r,o,a]of t.z){let l=o+e*a;i[2]+=r*Math.cos(l),i[3]+=r*Math.sin(l)}for(let[r,o,a]of t.zeta){let l=o+e*a;i[4]+=r*Math.cos(l),i[5]+=r*Math.sin(l)}let s=vy(n,t.mu,i);return rh(xy,s)}function yy(n){let t=new ai(n);return new Ic(vc(t,xc[0]),vc(t,xc[1]),vc(t,xc[2]),vc(t,xc[3]))}function yn(n,t){var e=wt(t);if(n in sn)return Fr(sn[n],e);if(n===L.Pluto){let o=g0(e,!0);return new $t(o.x,o.y,o.z,e)}if(n===L.Sun)return new $t(0,0,0,e);if(n===L.Moon){var i=Fr(sn.Earth,e),s=Mn(e);return new $t(i.x+s.x,i.y+s.y,i.z+s.z,e)}if(n===L.EMB){let o=Fr(sn.Earth,e),a=Mn(e),l=1+h0;return new $t(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,e)}if(n===L.SSB)return fy(e);let r=jc(n);if(r){let o=new Zi(r.dec,15*r.ra,r.dist);return sh(o,e)}throw`HelioVector: Unknown body "${n}"`}function As(n,t){let e=jc(n);if(e)return e.dist;let i=wt(t);return n in sn?Ts(sn[n][Cc],i.tt/Lr,!1):yn(n,i).Length()}function fp(n,t){let e=t,i=0;for(let s=0;s<10;++s){let r=n(e),o=r.Length()/Zc;if(o>1)throw"Object is too distant for light-travel solver.";let a=t.AddDays(-o);if(i=Math.abs(a.tt-e.tt),i<1e-9)return r;e=a}throw`Light-travel time solver did not converge: dt = ${i}`}var i0=class{constructor(t,e,i,s){this.observerBody=t,this.targetBody=e,this.aberration=i,this.observerPos=s}Position(t){this.aberration&&(this.observerPos=yn(this.observerBody,t));let e=yn(this.targetBody,t);return new $t(e.x-this.observerPos.x,e.y-this.observerPos.y,e.z-this.observerPos.z,t)}};function pp(n,t,e,i){wc(i);let s=wt(n);if(jc(e)){let a=yn(e,s);if(i){let c=Dc(t,s),u=new $t(a.x-c.x,a.y-c.y,a.z-c.z,s),h=Zc/u.Length();return new $t(u.x+c.vx/h,u.y+c.vy/h,u.z+c.vz/h,s)}let l=yn(t,s);return new $t(a.x-l.x,a.y-l.y,a.z-l.z,s)}let r;i?r=new $t(0,0,0,s):r=yn(t,s);let o=new i0(t,e,i,r);return fp(a=>o.Position(a),s)}function Sn(n,t,e){wc(e);let i=wt(t);switch(n){case L.Earth:return new $t(0,0,0,i);case L.Moon:return Mn(i);default:let s=pp(i,L.Earth,n,e);return s.t=i,s}}function Es(n,t){return new Pe(n.r.x,n.r.y,n.r.z,n.v.x,n.v.y,n.v.z,t)}function My(n,t){let e=wt(t);if(n===L.SSB)return new Pe(0,0,0,0,0,0,e);if(n===L.Pluto)return g0(e,!1);let i=new Rs(e.tt);switch(n){case L.Sun:return Es(i.Sun,e);case L.Jupiter:return Es(i.Jupiter,e);case L.Saturn:return Es(i.Saturn,e);case L.Uranus:return Es(i.Uranus,e);case L.Neptune:return Es(i.Neptune,e);case L.Moon:case L.EMB:let s=Yo(sn[L.Earth],e.tt),r=n===L.Moon?ta(e):m0(e);return new Pe(r.x+i.Sun.r.x+s.r.x,r.y+i.Sun.r.y+s.r.y,r.z+i.Sun.r.z+s.r.z,r.vx+i.Sun.v.x+s.v.x,r.vy+i.Sun.v.y+s.v.y,r.vz+i.Sun.v.z+s.v.z,e)}if(n in sn){let s=Yo(sn[n],e.tt);return new Pe(i.Sun.r.x+s.r.x,i.Sun.r.y+s.r.y,i.Sun.r.z+s.r.z,i.Sun.v.x+s.v.x,i.Sun.v.y+s.v.y,i.Sun.v.z+s.v.z,e)}throw`BaryState: Unsupported body "${n}"`}function Dc(n,t){let e=wt(t);switch(n){case L.Sun:return new Pe(0,0,0,0,0,0,e);case L.SSB:let i=new Rs(e.tt);return new Pe(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,e);case L.Mercury:case L.Venus:case L.Earth:case L.Mars:case L.Jupiter:case L.Saturn:case L.Uranus:case L.Neptune:let s=Yo(sn[n],e.tt);return Es(s,e);case L.Pluto:return g0(e,!0);case L.Moon:case L.EMB:let r=Yo(sn.Earth,e.tt),o=n==L.Moon?ta(e):m0(e);return new Pe(o.x+r.r.x,o.y+r.r.y,o.z+r.r.z,o.vx+r.v.x,o.vy+r.v.y,o.vz+r.v.z,e);default:if(jc(n)){let a=yn(n,e);return new Pe(a.x,a.y,a.z,0,0,0,e)}throw`HelioState: Unsupported body "${n}"`}}function Sy(n,t,e,i,s){let r=(s+e)/2-i,o=(s-e)/2,a=i,l;if(r==0){if(o==0||(l=-a/o,l<-1||l>1))return null}else{let h=o*o-4*r*a;if(h<=0)return null;let d=Math.sqrt(h),p=(-o+d)/(2*r),g=(-o-d)/(2*r);if(-1<=p&&p<=1){if(-1<=g&&g<=1)return null;l=p}else if(-1<=g&&g<=1)l=g;else return null}let c=n+l*t,u=(2*r*l+o)/t;return{t:c,df_dt:u}}function We(n,t,e,i){let s=Qt(i&&i.dt_tolerance_seconds||1),r=Math.abs(s/Jc),o=i&&i.init_f1||n(t),a=i&&i.init_f2||n(e),l=NaN,c=0,u=i&&i.iter_limit||20,h=!0;for(;;){if(++c>u)throw"Excessive iteration in Search()";let d=ty(t,e,.5),p=d.ut-t.ut;if(Math.abs(p)<r)return d;h?l=n(d):h=!0;let g=Sy(d.ut,e.ut-d.ut,o,l,a);if(g){let _=wt(g.t),m=n(_);if(g.df_dt!==0){if(Math.abs(m/g.df_dt)<r)return _;let f=1.2*Math.abs(m/g.df_dt);if(f<p/10){let E=_.AddDays(-f),b=_.AddDays(+f);if((E.ut-t.ut)*(E.ut-e.ut)<0&&(b.ut-t.ut)*(b.ut-e.ut)<0){let y=n(E),A=n(b);if(y<0&&A>=0){o=y,a=A,t=E,e=b,l=m,h=!1;continue}}}}}if(o<0&&l>=0){e=d,a=l;continue}if(l<0&&a>=0){t=d,o=l;continue}return null}}function $r(n){let t=n;for(;t<=-180;)t+=360;for(;t>180;)t-=360;return t}function Pr(n){for(;n<0;)n+=360;for(;n>=360;)n-=360;return n}function mp(n,t,e){function i(o){let a=hp(o);return $r(a.elon-n)}Qt(n),Qt(e);let s=wt(t),r=s.AddDays(e);return We(i,s,r,{dt_tolerance_seconds:.01})}function _0(n,t,e){if(n===L.Earth||t===L.Earth)throw"The Earth does not have a longitude as seen from itself.";let i=wt(e),s=Sn(n,i,!1),r=qo(s),o=Sn(t,i,!1),a=qo(o);return Pr(r.elon-a.elon)}function Xr(n,t){if(n==L.Earth)throw"The Earth does not have an angle as seen from itself.";let e=wt(t),i=Sn(L.Sun,e,!0),s=Sn(n,e,!0);return Kc(i,s)}function Cs(n,t){if(n===L.Sun)throw"Cannot calculate heliocentric longitude of the Sun.";let e=yn(n,t);return qo(e).elon}function by(n,t,e,i){let s,r=0,o=0,a=0;switch(n){case L.Mercury:s=-.6,r=4.98,o=-4.88,a=3.02;break;case L.Venus:t<163.6?(s=-4.47,r=1.03,o=.57,a=.13):(s=.98,r=-1.02);break;case L.Mars:s=-1.52,r=1.6;break;case L.Jupiter:s=-9.4,r=.5;break;case L.Uranus:s=-7.19,r=.25;break;case L.Neptune:s=-6.87;break;case L.Pluto:s=-1,r=4;break;default:throw`VisualMagnitude: unsupported body ${n}`}let l=t/100,c=s+l*(r+l*(o+l*a));return c+=5*Math.log10(e*i),c}function Ey(n,t,e,i,s){let r=qo(i),o=nt*28.06,a=nt*(169.51+382e-7*s.tt),l=nt*r.elat,c=nt*r.elon,u=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),h=Math.sin(Math.abs(u)),d=-9+.044*n;return d+=h*(-2.6+1.2*h),d+=5*Math.log10(t*e),{mag:d,ring_tilt:Ee*u}}function wy(n,t,e){let i=n*nt,s=i*i,r=s*s,o=-12.717+1.49*Math.abs(i)+.0431*r,a=385000.6/fe,l=e/a;return o+=5*Math.log10(t*l),o}var Lc=class{constructor(t,e,i,s,r,o,a,l){this.time=t,this.mag=e,this.phase_angle=i,this.helio_dist=s,this.geo_dist=r,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(nt*i))/2}};function Sc(n,t){if(n===L.Earth)throw"The illumination of the Earth is not defined.";let e=wt(t),i=Fr(sn.Earth,e),s,r,o,a;n===L.Sun?(o=new $t(-i.x,-i.y,-i.z,e),r=new $t(0,0,0,e),s=0):(n===L.Moon?(o=Mn(e),r=new $t(i.x+o.x,i.y+o.y,i.z+o.z,e)):(r=yn(n,t),o=new $t(r.x-i.x,r.y-i.y,r.z-i.z,e)),s=Kc(o,r));let l=o.Length(),c=r.Length(),u;if(n===L.Sun)a=Ov+5*Math.log10(l);else if(n===L.Moon)a=wy(s,c,l);else if(n===L.Saturn){let h=Ey(s,c,l,o,e);a=h.mag,u=h.ring_tilt}else a=by(n,s,c,l);return new Lc(e,a,s,c,l,o,r,u)}function Zo(n){if(n===L.Earth)throw"The Earth does not have a synodic period as seen from itself.";if(n===L.Moon)return bc;let t=oi[n];if(!t)throw`Not a valid planet name: ${n}`;let e=oi.Earth.OrbitalPeriod,i=t.OrbitalPeriod;return Math.abs(e/(e/i-1))}function qr(n,t,e){Qt(t);let i=oi[n];if(!i)throw`Cannot search relative longitude because body is not a planet: ${n}`;if(n===L.Earth)throw"Cannot search relative longitude for the Earth (it is always 0)";let s=i.OrbitalPeriod>oi.Earth.OrbitalPeriod?1:-1;function r(c){let u=Cs(n,c),h=Cs(L.Earth,c),d=s*(h-u);return $r(d-t)}let o=Zo(n),a=wt(e),l=r(a);l>0&&(l-=360);for(let c=0;c<100;++c){let u=-l/360*o;if(a=a.AddDays(u),Math.abs(u)*Jc<1)return a;let h=l;if(l=r(a),Math.abs(h)<30&&h!==l){let d=h/(h-l);d>.5&&d<2&&(o*=d)}}throw`Relative longitude search failed to converge for ${n} near ${a.toString()} (error_angle = ${l}).`}function x0(n){return _0(L.Moon,L.Sun,n)}function ea(n,t,e){function i(d){let p=x0(d);return $r(p-n)}Qt(n),Qt(e);let s=1.5,r=wt(t),o=i(r),a,l,c;if(e<0){if(o<0&&(o+=360),a=-(bc*o)/360,c=a+s,c<e)return null;l=Math.max(e,a-s)}else{if(o>0&&(o-=360),a=-(bc*o)/360,l=a-s,l>e)return null;c=Math.min(e,a+s)}let u=r.AddDays(l),h=r.AddDays(c);return We(i,u,h,{dt_tolerance_seconds:.1})}var Uc=class{constructor(t,e){this.quarter=t,this.time=e}};function gp(n){let t=x0(n),i=(Math.floor(t/90)+1)%4,s=ea(90*i,n,10);if(!s)throw"Cannot find moon quarter";return new Uc(i,s)}function Ty(n){let t=new Date(n.time.date.getTime()+6*Bv);return gp(t)}var Nc=class{constructor(t,e,i){this.pressure=t,this.temperature=e,this.density=i}};function _p(n){if(!Number.isFinite(n)||n<-500||n>1e5)throw`Invalid elevation: ${n}`;let s,r;n<=11e3?(s=288.15-.0065*n,r=101325*Math.pow(288.15/s,-5.25577)):n<=2e4?(s=216.65,r=22632*Math.exp(-.00015768832*(n-11e3))):(s=216.65+.001*(n-2e4),r=5474.87*Math.pow(216.65/s,34.16319));let o=r/s/(101325/288.15);return new Nc(r,s,o)}function Ay(n,t){let e=n.latitude*nt,i=Math.sin(e),s=Math.cos(e),r=1/Math.hypot(s,i*ri),o=r*(ri*ri),a=(n.height-t)/1e3,l=wi*r+a,c=wi*o+a,u=1e3*Math.hypot(l*s,c*i),h=.175*Math.pow(1-.0065/283.15*(n.height-2/3*t),3.256);return Ee*-(Math.sqrt(2*(1-h)*t/u)/(1-h))}function Ry(n){switch(n){case L.Sun:return tp;case L.Moon:return Wv;default:return 0}}function Cy(n,t,e,i,s,r=0){if(!Number.isFinite(r)||r<0)throw`Invalid value for metersAboveGround: ${r}`;let o=Ry(n),a=_p(t.height-r),c=Ay(t,r)-qv*a.density;return xp(n,t,e,i,s,o,c)}function Py(n,t,e,i,s,r){if(!Number.isFinite(r)||r<-90||r>90)throw`Invalid altitude angle: ${r}`;return xp(n,t,e,i,s,0,r)}var s0=class{constructor(t,e,i,s){this.tx=t,this.ty=e,this.ax=i,this.ay=s}};function r0(n,t,e,i,s,r,o){if(r<0&&o>=0)return new s0(i,s,r,o);if(r>=0&&o<0)return null;if(n>17)throw"Excessive recursion in rise/set ascent search.";let a=s.ut-i.ut;if(a*Jc<1||Math.min(Math.abs(r),Math.abs(o))>e*(a/2))return null;let c=new ai((i.ut+s.ut)/2),u=t(c);return r0(1+n,t,e,i,c,r,u)||r0(1+n,t,e,c,s,u,o)}function Iy(n,t){if(t<-90||t>90)throw`Invalid geographic latitude: ${t}`;let e,i;switch(n){case L.Moon:e=4.5,i=8.2;break;case L.Sun:e=.8,i=.5;break;case L.Mercury:e=-1.6,i=1;break;case L.Venus:e=-.8,i=.6;break;case L.Mars:e=-.5,i=.4;break;case L.Jupiter:case L.Saturn:case L.Uranus:case L.Neptune:case L.Pluto:e=-.2,i=.2;break;case L.Star1:case L.Star2:case L.Star3:case L.Star4:case L.Star5:case L.Star6:case L.Star7:case L.Star8:e=-.008,i=.008;break;default:throw`Body not allowed for altitude search: ${n}`}let s=nt*t;return Math.abs((360/Qf-e)*Math.cos(s))+Math.abs(i*Math.sin(s))}function xp(n,t,e,i,s,r,o){if(Yr(t),Qt(s),Qt(r),Qt(o),o<-90||o>90)throw`Invalid target altitude angle: ${o}`;let a=.42,l=Iy(n,t.latitude);function c(_){let m=Qo(n,_,t,!0,!0),E=ih(_,t,m.ra,m.dec).altitude+Ee*Math.asin(r/m.dist);return e*(E-o)}let u=wt(i),h=u,d=u,p=c(h),g=p;for(;;){s<0?(h=d.AddDays(-a),p=c(h)):(d=h.AddDays(+a),g=c(d));let _=r0(0,c,l,h,d,p,g);if(_){let m=We(c,_.tx,_.ty,{dt_tolerance_seconds:.1,init_f1:_.ax,init_f2:_.ay});if(m){if(s<0){if(m.ut<u.ut+s)return null}else if(m.ut>u.ut+s)return null;return m}throw`Rise/set search failed after finding ascent: t1=${h}, t2=${d}, a1=${p}, a2=${g}`}if(s<0){if(h.ut<u.ut+s)return null;d=h,g=p}else{if(d.ut>u.ut+s)return null;h=d,p=g}}}var Fc=class{constructor(t,e){this.time=t,this.hor=e}};function Dy(n,t,e,i,s=1){Yr(t);let r=wt(i),o=0;if(n===L.Earth)throw"Cannot search for hour angle of the Earth.";if(Qt(e),e<0||e>=24)throw`Invalid hour angle ${e}`;if(Qt(s),s===0)throw"Direction must be positive or negative.";for(;;){++o;let a=Ti(r),l=Qo(n,r,t,!0,!0),c=(e+l.ra-t.longitude/15-a)%24;if(o===1?s>0?c<0&&(c+=24):c>0&&(c-=24):c<-12?c+=24:c>12&&(c-=24),Math.abs(c)*3600<.1){let h=ih(r,t,l.ra,l.dec,"normal");return new Fc(r,h)}let u=c/24*Qf;r=r.AddDays(u)}}function Ly(n,t,e){let i=wt(t),s=th(i),r=Qo(n,i,e,!0,!0),o=(e.longitude/15+s-r.ra)%24;return o<0&&(o+=24),o}var Oc=class{constructor(t,e,i,s){this.mar_equinox=t,this.jun_solstice=e,this.sep_equinox=i,this.dec_solstice=s}};function Uy(n){function t(o,a,l){let c=new Date(Date.UTC(n,a-1,l)),u=mp(o,c,20);if(!u)throw`Cannot find season change near ${c.toISOString()}`;return u}if(n instanceof Date&&Number.isFinite(n.getTime())&&(n=n.getUTCFullYear()),!Number.isSafeInteger(n))throw`Cannot calculate seasons because year argument ${n} is neither a Date nor a safe integer.`;let e=t(0,3,10),i=t(90,6,10),s=t(180,9,10),r=t(270,12,10);return new Oc(e,i,s,r)}var Bc=class{constructor(t,e,i,s){this.time=t,this.visibility=e,this.elongation=i,this.ecliptic_separation=s}};function vp(n,t){let e=wt(t),i=_0(n,L.Sun,e),s;i>180?(s="morning",i=360-i):s="evening";let r=Xr(n,e);return new Bc(e,s,r,i)}function Ny(n,t){function i(l){let c=l.AddDays(-.005),u=l.AddDays(.01/2),h=Xr(n,c),d=Xr(n,u);return(h-d)/.01}let s=wt(t),o={Mercury:{s1:50,s2:85},Venus:{s1:40,s2:50}}[n];if(!o)throw"SearchMaxElongation works for Mercury and Venus only.";let a=0;for(;++a<=2;){let l=Cs(n,s),c=Cs(L.Earth,s),u=$r(l-c),h,d,p;u>=-o.s1&&u<+o.s1?(p=0,h=+o.s1,d=+o.s2):u>=+o.s2||u<-o.s2?(p=0,h=-o.s2,d=-o.s1):u>=0?(p=-Zo(n)/4,h=+o.s1,d=+o.s2):(p=-Zo(n)/4,h=-o.s2,d=-o.s1);let g=s.AddDays(p),_=qr(n,h,g),m=qr(n,d,_),f=i(_);if(f>=0)throw`SearchMaxElongation: internal error: m1 = ${f}`;let E=i(m);if(E<=0)throw`SearchMaxElongation: internal error: m2 = ${E}`;let b=We(i,_,m,{init_f1:f,init_f2:E,dt_tolerance_seconds:10});if(!b)throw`SearchMaxElongation: failed search iter ${a} (t1=${_.toString()}, t2=${m.toString()})`;if(b.tt>=s.tt)return vp(n,b);s=m.AddDays(1)}throw"SearchMaxElongation: failed to find event after 2 tries."}function Fy(n,t){if(n!==L.Venus)throw"SearchPeakMagnitude currently works for Venus only.";let e=.01;function i(l){let c=l.AddDays(-e/2),u=l.AddDays(+e/2),h=Sc(n,c).mag;return(Sc(n,u).mag-h)/e}let s=wt(t),r=10,o=30,a=0;for(;++a<=2;){let l=Cs(n,s),c=Cs(L.Earth,s),u=$r(l-c),h,d,p;u>=-r&&u<+r?(p=0,h=+r,d=+o):u>=+o||u<-o?(p=0,h=-o,d=-r):u>=0?(p=-Zo(n)/4,h=+r,d=+o):(p=-Zo(n)/4,h=-o,d=-r);let g=s.AddDays(p),_=qr(n,h,g),m=qr(n,d,_),f=i(_);if(f>=0)throw`SearchPeakMagnitude: internal error: m1 = ${f}`;let E=i(m);if(E<=0)throw`SearchPeakMagnitude: internal error: m2 = ${E}`;let b=We(i,_,m,{init_f1:f,init_f2:E,dt_tolerance_seconds:10});if(!b)throw`SearchPeakMagnitude: failed search iter ${a} (t1=${_.toString()}, t2=${m.toString()})`;if(b.tt>=s.tt)return Sc(n,b);s=m.AddDays(1)}throw"SearchPeakMagnitude: failed to find event after 2 tries."}var Ji;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(Ji||(Ji={}));var Ps=class{constructor(t,e,i){this.time=t,this.kind=e,this.dist_au=i,this.dist_km=i*fe}};function yp(n){function e(l){let c=l.AddDays(-5e-4),u=l.AddDays(.001/2),h=Yi(c).distance_au;return(Yi(u).distance_au-h)/.001}function i(l){return-e(l)}let s=wt(n),r=e(s),o=5;for(var a=0;a*o<2*bc;++a){let l=s.AddDays(o),c=e(l);if(r*c<=0){if(r<0||c>0){let u=We(e,s,l,{init_f1:r,init_f2:c});if(!u)throw"SearchLunarApsis INTERNAL ERROR: perigee search failed!";let h=Yi(u).distance_au;return new Ps(u,0,h)}if(r>0||c<0){let u=We(i,s,l,{init_f1:-r,init_f2:-c});if(!u)throw"SearchLunarApsis INTERNAL ERROR: apogee search failed!";let h=Yi(u).distance_au;return new Ps(u,1,h)}throw"SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!"}s=l,r=c}throw"SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date."}function Oy(n){let e=yp(n.time.AddDays(11));if(e.kind+n.kind!==1)throw`NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=${n.kind} @ ${n.time.toString()}, next=${e.kind} @ ${e.time.toString()}`;return e}function Wf(n,t,e,i){let s=t===Ji.Apocenter?1:-1,r=10;for(;;){let o=i/(r-1);if(o<1/1440){let c=e.AddDays(o/2),u=As(n,c);return new Ps(c,t,u)}let a=-1,l=0;for(let c=0;c<r;++c){let u=e.AddDays(c*o),h=s*As(n,u);(c==0||h>l)&&(a=c,l=h)}e=e.AddDays((a-1)*o),i=2*o}}function By(n,t){let i=t.AddDays(oi[n].OrbitalPeriod*-.08333333333333333),s=t.AddDays(oi[n].OrbitalPeriod*(270/360)),r=i,o=i,a=-1,l=-1,c=(s.ut-i.ut)/99;for(let d=0;d<100;++d){let p=i.AddDays(d*c),g=As(n,p);d===0?l=a=g:(g>l&&(l=g,o=p),g<a&&(a=g,r=p))}let u=Wf(n,0,r.AddDays(-2*c),4*c),h=Wf(n,1,o.AddDays(-2*c),4*c);if(u.time.tt>=t.tt)return h.time.tt>=t.tt&&h.time.tt<u.time.tt?h:u;if(h.time.tt>=t.tt)return h;throw"Internal error: failed to find Neptune apsis."}function Mp(n,t){if(t=wt(t),n===L.Neptune||n===L.Pluto)return By(n,t);function e(l){let u=l.AddDays(-5e-4),h=l.AddDays(.001/2),d=As(n,u);return(As(n,h)-d)/.001}function i(l){return-e(l)}let s=oi[n].OrbitalPeriod,r=s/6,o=t,a=e(o);for(let l=0;l*r<2*s;++l){let c=o.AddDays(r),u=e(c);if(a*u<=0){let h,d;if(a<0||u>0)h=e,d=Ji.Pericenter;else if(a>0||u<0)h=i,d=Ji.Apocenter;else throw"Internal error with slopes in SearchPlanetApsis";let p=We(h,o,c);if(!p)throw"Failed to find slope transition in planetary apsis search.";let g=As(n,p);return new Ps(p,d,g)}o=c,a=u}throw"Internal error: should have found planetary apsis within 2 orbital periods."}function zy(n,t){if(t.kind!==Ji.Pericenter&&t.kind!==Ji.Apocenter)throw`Invalid apsis kind: ${t.kind}`;let e=.25*oi[n].OrbitalPeriod,i=t.time.AddDays(e),s=Mp(n,i);if(s.kind+t.kind!==1)throw`Internal error: previous apsis was ${t.kind}, but found ${s.kind} for next apsis.`;return s}function Zr(n){return new Le([[n.rot[0][0],n.rot[1][0],n.rot[2][0]],[n.rot[0][1],n.rot[1][1],n.rot[2][1]],[n.rot[0][2],n.rot[1][2],n.rot[2][2]]])}function ji(n,t){return new Le([[t.rot[0][0]*n.rot[0][0]+t.rot[1][0]*n.rot[0][1]+t.rot[2][0]*n.rot[0][2],t.rot[0][1]*n.rot[0][0]+t.rot[1][1]*n.rot[0][1]+t.rot[2][1]*n.rot[0][2],t.rot[0][2]*n.rot[0][0]+t.rot[1][2]*n.rot[0][1]+t.rot[2][2]*n.rot[0][2]],[t.rot[0][0]*n.rot[1][0]+t.rot[1][0]*n.rot[1][1]+t.rot[2][0]*n.rot[1][2],t.rot[0][1]*n.rot[1][0]+t.rot[1][1]*n.rot[1][1]+t.rot[2][1]*n.rot[1][2],t.rot[0][2]*n.rot[1][0]+t.rot[1][2]*n.rot[1][1]+t.rot[2][2]*n.rot[1][2]],[t.rot[0][0]*n.rot[2][0]+t.rot[1][0]*n.rot[2][1]+t.rot[2][0]*n.rot[2][2],t.rot[0][1]*n.rot[2][0]+t.rot[1][1]*n.rot[2][1]+t.rot[2][1]*n.rot[2][2],t.rot[0][2]*n.rot[2][0]+t.rot[1][2]*n.rot[2][1]+t.rot[2][2]*n.rot[2][2]]])}function ky(){return new Le([[1,0,0],[0,1,0],[0,0,1]])}function Vy(n,t,e){if(t!==0&&t!==1&&t!==2)throw`Invalid axis ${t}. Must be [0, 1, 2].`;let i=Qt(e)*nt,s=Math.cos(i),r=Math.sin(i),o=(t+1)%3,a=(t+2)%3,l=t,c=[[0,0,0],[0,0,0],[0,0,0]];return c[o][o]=s*n.rot[o][o]-r*n.rot[o][a],c[o][a]=r*n.rot[o][o]+s*n.rot[o][a],c[o][l]=n.rot[o][l],c[a][o]=s*n.rot[a][o]-r*n.rot[a][a],c[a][a]=r*n.rot[a][o]+s*n.rot[a][a],c[a][l]=n.rot[a][l],c[l][o]=s*n.rot[l][o]-r*n.rot[l][a],c[l][a]=r*n.rot[l][o]+s*n.rot[l][a],c[l][l]=n.rot[l][l],new Le(c)}function sh(n,t){t=wt(t);let e=n.lat*nt,i=n.lon*nt,s=n.dist*Math.cos(e);return new $t(s*Math.cos(i),s*Math.sin(i),n.dist*Math.sin(e),t)}function v0(n){let t=y0(n);return new Gr(t.lon/15,t.lat,t.dist,n)}function y0(n){let t=n.x*n.x+n.y*n.y,e=Math.sqrt(t+n.z*n.z),i,s;if(t===0){if(n.z===0)throw"Zero-length vector not allowed.";s=0,i=n.z<0?-90:90}else s=Ee*Math.atan2(n.y,n.x),s<0&&(s+=360),i=Ee*Math.atan2(n.z,Math.sqrt(t));return new Zi(i,s,e)}function Sp(n){return n=360-n,n>=360?n-=360:n<0&&(n+=360),n}function Hy(n,t){let e=y0(n);return e.lon=Sp(e.lon),e.lat+=Jo(t,e.lat),e}function Gy(n,t,e){t=wt(t);let i=Sp(n.lon),s=n.lat+bp(e,n.lat),r=new Zi(s,i,n.dist);return sh(r,t)}function Jo(n,t){let e;if(Qt(t),t<-90||t>90)return 0;if(n==="normal"||n==="jplhor"){let i=t;i<-1&&(i=-1),e=1.02/Math.tan((i+10.3/(i+5.11))*nt)/60,n==="normal"&&t<-1&&(e*=(t+90)/89)}else if(!n)e=0;else throw`Invalid refraction option: ${n}`;return e}function bp(n,t){if(t<-90||t>90)return 0;let e=t-Jo(n,t);for(;;){let i=e+Jo(n,e)-t;if(Math.abs(i)<1e-14)return e-t;e-=i}}function $i(n,t){return new $t(n.rot[0][0]*t.x+n.rot[1][0]*t.y+n.rot[2][0]*t.z,n.rot[0][1]*t.x+n.rot[1][1]*t.y+n.rot[2][1]*t.z,n.rot[0][2]*t.x+n.rot[1][2]*t.y+n.rot[2][2]*t.z,t.t)}function rh(n,t){return new Pe(n.rot[0][0]*t.x+n.rot[1][0]*t.y+n.rot[2][0]*t.z,n.rot[0][1]*t.x+n.rot[1][1]*t.y+n.rot[2][1]*t.z,n.rot[0][2]*t.x+n.rot[1][2]*t.y+n.rot[2][2]*t.z,n.rot[0][0]*t.vx+n.rot[1][0]*t.vy+n.rot[2][0]*t.vz,n.rot[0][1]*t.vx+n.rot[1][1]*t.vy+n.rot[2][1]*t.vz,n.rot[0][2]*t.vx+n.rot[1][2]*t.vy+n.rot[2][2]*t.vz,t.t)}function Ep(){let n=.9174821430670688,t=.3977769691083922;return new Le([[1,0,0],[0,+n,-t],[0,+t,+n]])}function Wy(){let n=.9174821430670688,t=.3977769691083922;return new Le([[1,0,0],[0,+n,+t],[0,-t,+n]])}function oh(n){n=wt(n);let t=Qc(n,ye.From2000),e=eh(n,ye.From2000);return ji(t,e)}function Xy(n){let t=wt(n),e=oh(t),i=Ip(t);return ji(e,i)}function qy(n){let t=wt(n),e=Pp(t),i=Jr(t);return ji(e,i)}function Jr(n){n=wt(n);let t=eh(n,ye.Into2000),e=Qc(n,ye.Into2000);return ji(t,e)}function M0(n,t){n=wt(n);let e=Math.sin(t.latitude*nt),i=Math.cos(t.latitude*nt),s=Math.sin(t.longitude*nt),r=Math.cos(t.longitude*nt),o=[i*r,i*s,e],a=[-e*r,-e*s,i],l=[s,-r,0],c=-15*Ti(n),u=Nr(c,o),h=Nr(c,a),d=Nr(c,l);return new Le([[h[0],d[0],u[0]],[h[1],d[1],u[1]],[h[2],d[2],u[2]]])}function wp(n,t){let e=M0(n,t);return Zr(e)}function Tp(n,t){n=wt(n);let e=wp(n,t),i=Jr(n);return ji(e,i)}function Yy(n,t){let e=Tp(n,t);return Zr(e)}function Ap(n){let t=Jr(n),e=Ep();return ji(t,e)}function Rp(n){let t=Ap(n);return Zr(t)}function Cp(n,t){n=wt(n);let e=Rp(n),i=M0(n,t);return ji(e,i)}function $y(n,t){let e=Cp(n,t);return Zr(e)}function Zy(){return new Le([[-.0548624779711344,.4941095946388765,-.8676668813529025],[-.8734572784246782,-.4447938112296831,-.1980677870294097],[-.483800052994852,.7470034631630423,.4559861124470794]])}function Jy(){return new Le([[-.0548624779711344,-.8734572784246782,-.483800052994852],[.4941095946388765,-.4447938112296831,.7470034631630423],[-.8676668813529025,-.1980677870294097,.4559861124470794]])}function Pp(n){let e=Ki(wt(n)).tobl*nt,i=Math.cos(e),s=Math.sin(e);return new Le([[1,0,0],[0,+i,+s],[0,-s,+i]])}function Ip(n){let e=Ki(wt(n)).tobl*nt,i=Math.cos(e),s=Math.sin(e);return new Le([[1,0,0],[0,+i,-s],[0,+s,+i]])}var Ky=[["And","Andromeda"],["Ant","Antila"],["Aps","Apus"],["Aql","Aquila"],["Aqr","Aquarius"],["Ara","Ara"],["Ari","Aries"],["Aur","Auriga"],["Boo","Bootes"],["Cae","Caelum"],["Cam","Camelopardis"],["Cap","Capricornus"],["Car","Carina"],["Cas","Cassiopeia"],["Cen","Centaurus"],["Cep","Cepheus"],["Cet","Cetus"],["Cha","Chamaeleon"],["Cir","Circinus"],["CMa","Canis Major"],["CMi","Canis Minor"],["Cnc","Cancer"],["Col","Columba"],["Com","Coma Berenices"],["CrA","Corona Australis"],["CrB","Corona Borealis"],["Crt","Crater"],["Cru","Crux"],["Crv","Corvus"],["CVn","Canes Venatici"],["Cyg","Cygnus"],["Del","Delphinus"],["Dor","Dorado"],["Dra","Draco"],["Equ","Equuleus"],["Eri","Eridanus"],["For","Fornax"],["Gem","Gemini"],["Gru","Grus"],["Her","Hercules"],["Hor","Horologium"],["Hya","Hydra"],["Hyi","Hydrus"],["Ind","Indus"],["Lac","Lacerta"],["Leo","Leo"],["Lep","Lepus"],["Lib","Libra"],["LMi","Leo Minor"],["Lup","Lupus"],["Lyn","Lynx"],["Lyr","Lyra"],["Men","Mensa"],["Mic","Microscopium"],["Mon","Monoceros"],["Mus","Musca"],["Nor","Norma"],["Oct","Octans"],["Oph","Ophiuchus"],["Ori","Orion"],["Pav","Pavo"],["Peg","Pegasus"],["Per","Perseus"],["Phe","Phoenix"],["Pic","Pictor"],["PsA","Pisces Austrinus"],["Psc","Pisces"],["Pup","Puppis"],["Pyx","Pyxis"],["Ret","Reticulum"],["Scl","Sculptor"],["Sco","Scorpius"],["Sct","Scutum"],["Ser","Serpens"],["Sex","Sextans"],["Sge","Sagitta"],["Sgr","Sagittarius"],["Tau","Taurus"],["Tel","Telescopium"],["TrA","Triangulum Australe"],["Tri","Triangulum"],["Tuc","Tucana"],["UMa","Ursa Major"],["UMi","Ursa Minor"],["Vel","Vela"],["Vir","Virgo"],["Vol","Volans"],["Vul","Vulpecula"]],jy=[[83,0,8640,2112],[83,2880,5220,2076],[83,7560,8280,2068],[83,6480,7560,2064],[15,0,2880,2040],[10,3300,3840,1968],[15,0,1800,1920],[10,3840,5220,1920],[83,6300,6480,1920],[33,7260,7560,1920],[15,0,1263,1848],[10,4140,4890,1848],[83,5952,6300,1800],[15,7260,7440,1800],[10,2868,3300,1764],[33,3300,4080,1764],[83,4680,5952,1680],[13,1116,1230,1632],[33,7350,7440,1608],[33,4080,4320,1596],[15,0,120,1584],[83,5040,5640,1584],[15,8490,8640,1584],[33,4320,4860,1536],[33,4860,5190,1512],[15,8340,8490,1512],[10,2196,2520,1488],[33,7200,7350,1476],[15,7393.2,7416,1462],[10,2520,2868,1440],[82,2868,3030,1440],[33,7116,7200,1428],[15,7200,7393.2,1428],[15,8232,8340,1418],[13,0,876,1404],[33,6990,7116,1392],[13,612,687,1380],[13,876,1116,1368],[10,1116,1140,1368],[15,8034,8232,1350],[10,1800,2196,1344],[82,5052,5190,1332],[33,5190,6990,1332],[10,1140,1200,1320],[15,7968,8034,1320],[15,7416,7908,1316],[13,0,612,1296],[50,2196,2340,1296],[82,4350,4860,1272],[33,5490,5670,1272],[15,7908,7968,1266],[10,1200,1800,1260],[13,8232,8400,1260],[33,5670,6120,1236],[62,735,906,1212],[33,6120,6564,1212],[13,0,492,1200],[62,492,600,1200],[50,2340,2448,1200],[13,8400,8640,1200],[82,4860,5052,1164],[13,0,402,1152],[13,8490,8640,1152],[39,6543,6564,1140],[33,6564,6870,1140],[30,6870,6900,1140],[62,600,735,1128],[82,3030,3300,1128],[13,60,312,1104],[82,4320,4350,1080],[50,2448,2652,1068],[30,7887,7908,1056],[30,7875,7887,1050],[30,6900,6984,1044],[82,3300,3660,1008],[82,3660,3882,960],[8,5556,5670,960],[39,5670,5880,960],[50,3330,3450,954],[0,0,906,882],[62,906,924,882],[51,6969,6984,876],[62,1620,1689,864],[30,7824,7875,864],[44,7875,7920,864],[7,2352,2652,852],[50,2652,2790,852],[0,0,720,840],[44,7920,8214,840],[44,8214,8232,828],[0,8232,8460,828],[62,924,978,816],[82,3882,3960,816],[29,4320,4440,816],[50,2790,3330,804],[48,3330,3558,804],[0,258,507,792],[8,5466,5556,792],[0,8460,8550,770],[29,4440,4770,768],[0,8550,8640,752],[29,5025,5052,738],[80,870,978,736],[62,978,1620,736],[7,1620,1710,720],[51,6543,6969,720],[82,3960,4320,696],[30,7080,7530,696],[7,1710,2118,684],[48,3558,3780,684],[29,4770,5025,684],[0,0,24,672],[80,507,600,672],[7,2118,2352,672],[37,2838,2880,672],[30,7530,7824,672],[30,6933,7080,660],[80,690,870,654],[25,5820,5880,648],[8,5430,5466,624],[25,5466,5820,624],[51,6612,6792,624],[48,3870,3960,612],[51,6792,6933,612],[80,600,690,600],[66,258,306,570],[48,3780,3870,564],[87,7650,7710,564],[77,2052,2118,548],[0,24,51,528],[73,5730,5772,528],[37,2118,2238,516],[87,7140,7290,510],[87,6792,6930,506],[0,51,306,504],[87,7290,7404,492],[37,2811,2838,480],[87,7404,7650,468],[87,6930,7140,460],[6,1182,1212,456],[75,6792,6840,444],[59,2052,2076,432],[37,2238,2271,420],[75,6840,7140,388],[77,1788,1920,384],[39,5730,5790,384],[75,7140,7290,378],[77,1662,1788,372],[77,1920,2016,372],[23,4620,4860,360],[39,6210,6570,344],[23,4272,4620,336],[37,2700,2811,324],[39,6030,6210,308],[61,0,51,300],[77,2016,2076,300],[37,2520,2700,300],[61,7602,7680,300],[37,2271,2496,288],[39,6570,6792,288],[31,7515,7578,284],[61,7578,7602,284],[45,4146,4272,264],[59,2247,2271,240],[37,2496,2520,240],[21,2811,2853,240],[61,8580,8640,240],[6,600,1182,238],[31,7251,7308,204],[8,4860,5430,192],[61,8190,8580,180],[21,2853,3330,168],[45,3330,3870,168],[58,6570,6718.4,150],[3,6718.4,6792,150],[31,7500,7515,144],[20,2520,2526,132],[73,6570,6633,108],[39,5790,6030,96],[58,6570,6633,72],[61,7728,7800,66],[66,0,720,48],[73,6690,6792,48],[31,7308,7500,48],[34,7500,7680,48],[61,7680,7728,48],[61,7920,8190,48],[61,7800,7920,42],[20,2526,2592,36],[77,1290,1662,0],[59,1662,1680,0],[20,2592,2910,0],[85,5280,5430,0],[58,6420,6570,0],[16,954,1182,-42],[77,1182,1290,-42],[73,5430,5856,-78],[59,1680,1830,-96],[59,2100,2247,-96],[73,6420,6468,-96],[73,6570,6690,-96],[3,6690,6792,-96],[66,8190,8580,-96],[45,3870,4146,-144],[85,4146,4260,-144],[66,0,120,-168],[66,8580,8640,-168],[85,5130,5280,-192],[58,5730,5856,-192],[3,7200,7392,-216],[4,7680,7872,-216],[58,6180,6468,-240],[54,2100,2910,-264],[35,1770,1830,-264],[59,1830,2100,-264],[41,2910,3012,-264],[74,3450,3870,-264],[85,4260,4620,-264],[58,6330,6360,-280],[3,6792,7200,-288.8],[35,1740,1770,-348],[4,7392,7680,-360],[73,6180,6570,-384],[72,6570,6792,-384],[41,3012,3090,-408],[58,5856,5895,-438],[41,3090,3270,-456],[26,3870,3900,-456],[71,5856,5895,-462],[47,5640,5730,-480],[28,4530,4620,-528],[85,4620,5130,-528],[41,3270,3510,-576],[16,600,954,-585.2],[35,954,1350,-585.2],[26,3900,4260,-588],[28,4260,4530,-588],[47,5130,5370,-588],[58,5856,6030,-590],[16,0,600,-612],[11,7680,7872,-612],[4,7872,8580,-612],[16,8580,8640,-612],[41,3510,3690,-636],[35,1692,1740,-654],[46,1740,2202,-654],[11,7200,7680,-672],[41,3690,3810,-700],[41,4530,5370,-708],[47,5370,5640,-708],[71,5640,5760,-708],[35,1650,1692,-720],[58,6030,6336,-720],[76,6336,6420,-720],[41,3810,3900,-748],[19,2202,2652,-792],[41,4410,4530,-792],[41,3900,4410,-840],[36,1260,1350,-864],[68,3012,3372,-882],[35,1536,1650,-888],[76,6420,6900,-888],[65,7680,8280,-888],[70,8280,8400,-888],[36,1080,1260,-950],[1,3372,3960,-954],[70,0,600,-960],[36,600,1080,-960],[35,1392,1536,-960],[70,8400,8640,-960],[14,5100,5370,-1008],[49,5640,5760,-1008],[71,5760,5911.5,-1008],[9,1740,1800,-1032],[22,1800,2370,-1032],[67,2880,3012,-1032],[35,1230,1392,-1056],[71,5911.5,6420,-1092],[24,6420,6900,-1092],[76,6900,7320,-1092],[53,7320,7680,-1092],[35,1080,1230,-1104],[9,1620,1740,-1116],[49,5520,5640,-1152],[63,0,840,-1156],[35,960,1080,-1176],[40,1470,1536,-1176],[9,1536,1620,-1176],[38,7680,7920,-1200],[67,2160,2880,-1218],[84,2880,2940,-1218],[35,870,960,-1224],[40,1380,1470,-1224],[63,0,660,-1236],[12,2160,2220,-1260],[84,2940,3042,-1272],[40,1260,1380,-1276],[32,1380,1440,-1276],[63,0,570,-1284],[35,780,870,-1296],[64,1620,1800,-1296],[49,5418,5520,-1296],[84,3042,3180,-1308],[12,2220,2340,-1320],[14,4260,4620,-1320],[49,5100,5418,-1320],[56,5418,5520,-1320],[32,1440,1560,-1356],[84,3180,3960,-1356],[14,3960,4050,-1356],[5,6300,6480,-1368],[78,6480,7320,-1368],[38,7920,8400,-1368],[40,1152,1260,-1380],[64,1800,1980,-1380],[12,2340,2460,-1392],[63,0,480,-1404],[35,480,780,-1404],[63,8400,8640,-1404],[32,1560,1650,-1416],[56,5520,5911.5,-1440],[43,7320,7680,-1440],[64,1980,2160,-1464],[18,5460,5520,-1464],[5,5911.5,5970,-1464],[18,5370,5460,-1526],[5,5970,6030,-1526],[64,2160,2460,-1536],[12,2460,3252,-1536],[14,4050,4260,-1536],[27,4260,4620,-1536],[14,4620,5232,-1536],[18,4860,4920,-1560],[5,6030,6060,-1560],[40,780,1152,-1620],[69,1152,1650,-1620],[18,5310,5370,-1620],[5,6060,6300,-1620],[60,6300,6480,-1620],[81,7920,8400,-1620],[32,1650,2370,-1680],[18,4920,5310,-1680],[79,5310,6120,-1680],[81,0,480,-1800],[42,1260,1650,-1800],[86,2370,3252,-1800],[12,3252,4050,-1800],[55,4050,4920,-1800],[60,6480,7680,-1800],[43,7680,8400,-1800],[81,8400,8640,-1800],[81,270,480,-1824],[42,0,1260,-1980],[17,2760,4920,-1980],[2,4920,6480,-1980],[52,1260,2760,-2040],[57,0,8640,-2160]],Gu,Xf,zc=class{constructor(t,e,i,s){this.symbol=t,this.name=e,this.ra1875=i,this.dec1875=s}};function Qy(n,t){if(Qt(n),Qt(t),t<-90||t>90)throw"Invalid declination angle. Must be -90..+90.";n%=24,n<0&&(n+=24),Gu||(Gu=oh(new ai(-45655.74141261017)),Xf=new ai(0));let e=new Zi(t,15*n,1),i=sh(e,Xf),s=$i(Gu,i),r=v0(s),o=10/240,a=o/15;for(let l of jy){let c=l[3]*o,u=l[1]*a,h=l[2]*a;if(c<=r.dec&&u<=r.ra&&r.ra<h){let d=Ky[l[0]];return new zc(d[0],d[1],r.ra,r.dec)}}throw"Unable to find constellation for given coordinates."}var Un;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(Un||(Un={}));var kc=class{constructor(t,e,i,s,r,o){this.kind=t,this.obscuration=e,this.peak=i,this.sd_penum=s,this.sd_partial=r,this.sd_total=o}},o0=class{constructor(t,e,i,s,r,o,a){this.time=t,this.u=e,this.r=i,this.k=s,this.p=r,this.target=o,this.dir=a}};function na(n,t,e,i){let s=(i.x*e.x+i.y*e.y+i.z*e.z)/(i.x*i.x+i.y*i.y+i.z*i.z),r=s*i.x-e.x,o=s*i.y-e.y,a=s*i.z-e.z,l=fe*Math.hypot(r,o,a),c=+Go-(1+s)*(Go-n),u=-Go+(1+s)*(Go+n);return new o0(t,s,l,c,u,e,i)}function Vc(n){let t=Sn(L.Sun,n,!0),e=new $t(-t.x,-t.y,-t.z,t.t),i=Mn(n);return na(Hv,n,i,e)}function qf(n){let t=Sn(L.Sun,n,!0),e=Mn(n),i=new $t(-e.x,-e.y,-e.z,e.t);return e.x-=t.x,e.y-=t.y,e.z-=t.z,na(Ln,n,i,e)}function a0(n,t){let e=cp(n,t),i=Sn(L.Sun,n,!0),s=Mn(n),r=new $t(e[0]-s.x,e[1]-s.y,e[2]-s.z,n);return s.x-=i.x,s.y-=i.y,s.z-=i.z,na(Ln,n,r,s)}function Hc(n,t,e){let i=Sn(n,e,!0),s=Sn(L.Sun,e,!0),r=new $t(i.x-s.x,i.y-s.y,i.z-s.z,e);return s.x=-i.x,s.y=-i.y,s.z=-i.z,na(t,e,s,r)}function S0(n,t){let e=11574074074074073e-21,i=t.AddDays(-e),s=t.AddDays(+e),r=n(i);return(n(s).r-r.r)/e}function t3(n,t,e){let i=11574074074074073e-21,s=Hc(n,t,e.AddDays(-i));return(Hc(n,t,e.AddDays(+i)).r-s.r)/i}function e3(n){let e=n.AddDays(-.03),i=n.AddDays(.03),s=We(r=>S0(Vc,r),e,i);if(!s)throw"Failed to find peak Earth shadow time.";return Vc(s)}function n3(n){let e=n.AddDays(-.03),i=n.AddDays(.03),s=We(r=>S0(qf,r),e,i);if(!s)throw"Failed to find peak Moon shadow time.";return qf(s)}function i3(n,t,e){let s=e.AddDays(-1),r=e.AddDays(1),o=We(a=>t3(n,t,a),s,r);if(!o)throw"Failed to find peak planet shadow time.";return Hc(n,t,o)}function s3(n,t){let i=n.AddDays(-.2),s=n.AddDays(.2);function r(a){return a0(a,t)}let o=We(a=>S0(r,a),i,s);if(!o)throw`PeakLocalMoonShadow: search failure for search_center_time = ${n}`;return a0(o,t)}function Wu(n,t,e){let i=e/1440,s=n.AddDays(-i),r=n.AddDays(+i),o=We(l=>-(Vc(l).r-t),s,n),a=We(l=>+(Vc(l).r-t),n,r);if(!o||!a)throw"Failed to find shadow semiduration";return(a.ut-o.ut)*(1440/2)}function b0(n){let t=Yi(n);return Ee*t.geo_eclip_lat}function Dp(n,t,e){if(n<=0)throw"Radius of first disc must be positive.";if(t<=0)throw"Radius of second disc must be positive.";if(e<0)throw"Distance between discs is not allowed to be negative.";if(e>=n+t)return 0;if(e==0)return n<=t?1:t*t/(n*n);let i=(n*n-t*t+e*e)/(2*e),s=n*n-i*i;if(s<=0)return n<=t?1:t*t/(n*n);let r=Math.sqrt(s),o=n*n*Math.acos(i/n)-i*r,a=t*t*Math.acos((e-i)/t)-(e-i)*r;return(o+a)/(Math.PI*n*n)}function Lp(n,t){let e=new $t(n.x+t.x,n.y+t.y,n.z+t.z,n.t),i=Math.asin(tp/e.Length()),s=Math.asin(Xv/t.Length()),r=Kc(t,e),o=Dp(i,s,r*nt);return Math.min(.9999,o)}function Up(n){let e=wt(n);for(let i=0;i<12;++i){let s=ea(180,e,40);if(!s)throw"Cannot find full moon.";let r=b0(s);if(Math.abs(r)<1.8){let o=e3(s);if(o.r<o.p+Ln){let a=Un.Penumbral,l=0,c=0,u=0,h=Wu(o.time,o.p+Ln,200);return o.r<o.k+Ln&&(a=Un.Partial,u=Wu(o.time,o.k+Ln,h),o.r+Ln<o.k?(a=Un.Total,l=1,c=Wu(o.time,o.k-Ln,u)):l=Dp(Ln,o.k,o.r)),new kc(a,l,o.time,h,u,c)}}e=s.AddDays(10)}throw"Failed to find lunar eclipse within 12 full moons."}var Gc=class{constructor(t,e,i,s,r,o){this.kind=t,this.obscuration=e,this.peak=i,this.distance=s,this.latitude=r,this.longitude=o}};function Np(n){return n>.014?Un.Total:Un.Annular}function r3(n){let t=Un.Partial,e=n.time,i=n.r,s,r,o=oh(n.time),a=$i(o,n.dir),l=$i(o,n.target);a.x*=fe,a.y*=fe,a.z*=fe/ri,l.x*=fe,l.y*=fe,l.z*=fe/ri;let c=wi,u=a.x*a.x+a.y*a.y+a.z*a.z,h=-2*(a.x*l.x+a.y*l.y+a.z*l.z),d=l.x*l.x+l.y*l.y+l.z*l.z-c*c,p=h*h-4*u*d,g;if(p>0){let _=(-h-Math.sqrt(p))/(2*u),m=_*a.x-l.x,f=_*a.y-l.y,E=(_*a.z-l.z)*ri,b=Math.hypot(m,f)*Dr;b==0?s=E>0?90:-90:s=Ee*Math.atan(E/b);let y=Ti(e);r=(Ee*Math.atan2(f,m)-15*y)%360,r<=-180?r+=360:r>180&&(r-=360);let A=Zr(o),R=new $t(m/fe,f/fe,E/fe,n.time);R=$i(A,R),R.x+=n.target.x,R.y+=n.target.y,R.z+=n.target.z;let C=na(np,n.time,R,n.dir);if(C.r>1e-9||C.r<0)throw`Unexpected shadow distance from geoid intersection = ${C.r}`;t=Np(C.k),g=t===Un.Total?1:Lp(n.dir,R)}else g=void 0;return new Gc(t,g,e,i,s,r)}function o3(n){n=wt(n);let t=n.AddDays(10);return Up(t)}function Fp(n){n=wt(n);let t=1.8,e=n,i;for(i=0;i<12;++i){let s=ea(0,e,40);if(!s)throw"Cannot find new moon";let r=b0(s);if(Math.abs(r)<t){let o=n3(s);if(o.r<o.p+ep)return r3(o)}e=s.AddDays(10)}throw"Failed to find solar eclipse within 12 full moons."}function a3(n){n=wt(n);let t=n.AddDays(10);return Fp(t)}var Wc=class{constructor(t,e){this.time=t,this.altitude=e}},Xc=class{constructor(t,e,i,s,r,o,a){this.kind=t,this.obscuration=e,this.partial_begin=i,this.total_begin=s,this.peak=r,this.total_end=o,this.partial_end=a}};function Yf(n){return n.p-n.r}function $f(n){return Math.abs(n.k)-n.r}function l3(n,t){let s=Op(t,n.time),r=n.time.AddDays(-.2),o=n.time.AddDays(.2),a=yc(t,1,Yf,r,n.time),l=yc(t,-1,Yf,n.time,o),c,u,h;n.r<Math.abs(n.k)?(r=n.time.AddDays(-.01),o=n.time.AddDays(.01),c=yc(t,1,$f,r,n.time),u=yc(t,-1,$f,n.time,o),h=Np(n.k)):h=Un.Partial;let d=h===Un.Total?1:Lp(n.dir,n.target);return new Xc(h,d,a,c,s,u,l)}function yc(n,t,e,i,s){function r(a){let l=a0(a,n);return t*e(l)}let o=We(r,i,s);if(!o)throw"Local eclipse transition search failed.";return Op(n,o)}function Op(n,t){let e=c3(t,n);return new Wc(t,e)}function c3(n,t){let e=Qo(L.Sun,n,t,!0,!0);return ih(n,t,e.ra,e.dec,"normal").altitude}function Bp(n,t){n=wt(n),Yr(t);let e=1.8,i=n;for(;;){let s=ea(0,i,40);if(!s)throw"Cannot find next new moon";let r=b0(s);if(Math.abs(r)<e){let o=s3(s,t);if(o.r<o.p){let a=l3(o,t);if(a.partial_begin.altitude>0||a.partial_end.altitude>0)return a}}i=s.AddDays(10)}}function h3(n,t){n=wt(n);let e=n.AddDays(10);return Bp(e,t)}var qc=class{constructor(t,e,i,s){this.start=t,this.peak=e,this.finish=i,this.separation=s}};function u3(n,t,e,i){let s=Hc(t,e,n);return i*(s.r-s.p)}function Zf(n,t,e,i,s){let r=We(o=>u3(o,n,t,s),e,i);if(!r)throw"Planet transit boundary search failed";return r}function zp(n,t){t=wt(t);let e=.4,i=1,s;switch(n){case L.Mercury:s=2439.7;break;case L.Venus:s=6051.8;break;default:throw`Invalid body: ${n}`}let r=t;for(;;){let o=qr(n,0,r);if(Xr(n,o)<e){let l=i3(n,s,o);if(l.r<l.p){let c=l.time.AddDays(-i),u=Zf(n,s,c,l.time,-1),h=l.time.AddDays(+i),d=Zf(n,s,l.time,h,1),p=60*Xr(n,l.time);return new qc(u,l.time,d,p)}}r=o.AddDays(10)}}function d3(n,t){t=wt(t);let e=t.AddDays(100);return zp(n,e)}var bi;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(bi||(bi={}));var Yc=class{constructor(t,e){this.kind=t,this.time=e}},kp=10;function Vp(n){let t=wt(n),e=Mc(t);for(;;){let i=t.AddDays(kp),s=Mc(i);if(e.lat*s.lat<=0){let r=s.lat>e.lat?bi.Ascending:bi.Descending,o=We(a=>r*Mc(a).lat,t,i);if(!o)throw"Could not find moon node.";return new Yc(r,o)}t=i,e=s}}function f3(n){let t=n.time.AddDays(kp),e=Vp(t);switch(n.kind){case bi.Ascending:if(e.kind!==bi.Descending)throw`Internal error: previous node was ascending, but this node was: ${e.kind}`;break;case bi.Descending:if(e.kind!==bi.Ascending)throw`Internal error: previous node was descending, but this node was: ${e.kind}`;break;default:throw`Previous node has an invalid node kind: ${n.kind}`}return e}var Ko=class{constructor(t,e,i,s){this.ra=t,this.dec=e,this.spin=i,this.north=s}};function p3(n){let t=Hr([0,0,1],n,ye.Into2000),e=Vr(t,n,ye.Into2000),i=new $t(e[0],e[1],e[2],n),s=v0(i),r=190.41375788700253+360.9856122880876*n.ut;return new Ko(s.ra,s.dec,r,i)}function E0(n,t){let e=wt(t),i=e.tt,s=i/36525,r,o,a;switch(n){case L.Sun:r=286.13,o=63.87,a=84.176+14.1844*i;break;case L.Mercury:r=281.0103-.0328*s,o=61.4155-.0049*s,a=329.5988+6.1385108*i+.01067257*Math.sin(nt*(174.7910857+4.092335*i))-.00112309*Math.sin(nt*(349.5821714+8.18467*i))-1104e-7*Math.sin(nt*(164.3732571+12.277005*i))-2539e-8*Math.sin(nt*(339.1643429+16.36934*i))-571e-8*Math.sin(nt*(153.9554286+20.461675*i));break;case L.Venus:r=272.76,o=67.16,a=160.2-1.4813688*i;break;case L.Earth:return p3(e);case L.Moon:let d=nt*(125.045-.0529921*i),p=nt*(250.089-.1059842*i),g=nt*(260.008+13.0120009*i),_=nt*(176.625+13.3407154*i),m=nt*(357.529+.9856003*i),f=nt*(311.589+26.4057084*i),E=nt*(134.963+13.064993*i),b=nt*(276.617+.3287146*i),y=nt*(34.226+1.7484877*i),A=nt*(15.134-.1589763*i),R=nt*(119.743+.0036096*i),C=nt*(239.961+.1643573*i),N=nt*(25.053+12.9590088*i);r=269.9949+.0031*s-3.8787*Math.sin(d)-.1204*Math.sin(p)+.07*Math.sin(g)-.0172*Math.sin(_)+.0072*Math.sin(f)-.0052*Math.sin(A)+.0043*Math.sin(N),o=66.5392+.013*s+1.5419*Math.cos(d)+.0239*Math.cos(p)-.0278*Math.cos(g)+.0068*Math.cos(_)-.0029*Math.cos(f)+9e-4*Math.cos(E)+8e-4*Math.cos(A)-9e-4*Math.cos(N),a=38.3213+(13.17635815-14e-13*i)*i+3.561*Math.sin(d)+.1208*Math.sin(p)-.0642*Math.sin(g)+.0158*Math.sin(_)+.0252*Math.sin(m)-.0066*Math.sin(f)-.0047*Math.sin(E)-.0046*Math.sin(b)+.0028*Math.sin(y)+.0052*Math.sin(A)+.004*Math.sin(R)+.0019*Math.sin(C)-.0044*Math.sin(N);break;case L.Mars:r=317.269202-.10927547*s+68e-6*Math.sin(nt*(198.991226+19139.4819985*s))+238e-6*Math.sin(nt*(226.292679+38280.8511281*s))+52e-6*Math.sin(nt*(249.663391+57420.7251593*s))+9e-6*Math.sin(nt*(266.18351+76560.636795*s))+.419057*Math.sin(nt*(79.398797+.5042615*s)),o=54.432516-.05827105*s+51e-6*Math.cos(nt*(122.433576+19139.9407476*s))+141e-6*Math.cos(nt*(43.058401+38280.8753272*s))+31e-6*Math.cos(nt*(57.663379+57420.7517205*s))+5e-6*Math.cos(nt*(79.476401+76560.6495004*s))+1.591274*Math.cos(nt*(166.325722+.5042615*s)),a=176.049863+350.891982443297*i+145e-6*Math.sin(nt*(129.071773+19140.0328244*s))+157e-6*Math.sin(nt*(36.352167+38281.0473591*s))+4e-5*Math.sin(nt*(56.668646+57420.929536*s))+1e-6*Math.sin(nt*(67.364003+76560.2552215*s))+1e-6*Math.sin(nt*(104.79268+95700.4387578*s))+.584542*Math.sin(nt*(95.391654+.5042615*s));break;case L.Jupiter:let S=nt*(99.360714+4850.4046*s),M=nt*(175.895369+1191.9605*s),P=nt*(300.323162+262.5475*s),z=nt*(114.012305+6070.2476*s),G=nt*(49.511251+64.3*s);r=268.056595-.006499*s+117e-6*Math.sin(S)+938e-6*Math.sin(M)+.001432*Math.sin(P)+3e-5*Math.sin(z)+.00215*Math.sin(G),o=64.495303+.002413*s+5e-5*Math.cos(S)+404e-6*Math.cos(M)+617e-6*Math.cos(P)-13e-6*Math.cos(z)+926e-6*Math.cos(G),a=284.95+870.536*i;break;case L.Saturn:r=40.589-.036*s,o=83.537-.004*s,a=38.9+810.7939024*i;break;case L.Uranus:r=257.311,o=-15.175,a=203.81-501.1600928*i;break;case L.Neptune:let W=nt*(357.85+52.316*s);r=299.36+.7*Math.sin(W),o=43.46-.51*Math.cos(W),a=249.978+541.1397757*i-.48*Math.sin(W);break;case L.Pluto:r=132.993,o=-6.163,a=302.695+56.3625225*i;break;default:throw`Invalid body: ${n}`}let l=o*nt,c=r*nt,u=Math.cos(l),h=new $t(u*Math.cos(c),u*Math.sin(c),Math.sin(l),e);return new Ko(r/15,o,a,h)}function m3(n,t,e,i){let s=wt(t),r=Zu(e),o=Zu(i),a,l;return e===L.Earth&&i===L.Moon?(a=new Pe(0,0,0,0,0,0,s),l=ta(s)):(a=Dc(e,s),l=Dc(i,s)),Hp(n,a,r,l,o)}function Hp(n,t,e,i,s){let o=.8660254037844386;if(n<1||n>5)throw`Invalid lagrange point ${n}`;if(!Number.isFinite(e)||e<=0)throw"Major mass must be a positive number.";if(!Number.isFinite(s)||s<=0)throw"Minor mass must be a negative number.";let a=i.x-t.x,l=i.y-t.y,c=i.z-t.z,u=a*a+l*l+c*c,h=Math.sqrt(u),d=i.vx-t.vx,p=i.vy-t.vy,g=i.vz-t.vz,_;if(n===4||n===5){let m=l*g-c*p,f=c*d-a*g,E=a*p-l*d,b=f*c-E*l,y=E*a-m*c,A=m*l-f*a,R=Math.sqrt(b*b+y*y+A*A);b/=R,y/=R,A/=R,a/=h,l/=h,c/=h;let C=n==4?+o:-o,N=.5*a+C*b,S=.5*l+C*y,M=.5*c+C*A,P=.5*b-C*a,z=.5*y-C*l,G=.5*A-C*c,W=h*N,Z=h*S,X=h*M,tt=d*a+p*l+g*c,H=d*b+p*y+g*A,at=tt*N+H*P,Q=tt*S+H*z,gt=tt*M+H*G;_=new Pe(W,Z,X,at,Q,gt,t.t)}else{let m=-h*(s/(e+s)),f=+h*(e/(e+s)),E=(e+s)/(u*h),b,y,A;if(n===1||n===2)b=e/(e+s)*Math.cbrt(s/(3*e)),y=-e,n==1?(b=1-b,A=+s):(b=1+b,A=-s);else if(n===3)b=(7/12*s-e)/(s+e),y=+e,A=+s;else throw`Invalid Langrage point ${n}. Must be an integer 1..5.`;let R=h*b-m,C;do{let N=R-m,S=R-f,M=E*R+y/(N*N)+A/(S*S),P=E-2*y/(N*N*N)-2*A/(S*S*S);C=M/P,R-=C}while(Math.abs(C/h)>1e-14);b=(R-m)/h,_=new Pe(b*a,b*l,b*c,b*d,b*p,b*g,t.t)}return _}var l0=class n{constructor(t,e,i){let s=wt(e);this.originBody=t;for(let l of i)if(l.t.tt!==s.tt)throw"Inconsistent times in bodyStates";let r=[],o=n.CalcSolarSystem(s);this.curr=new $c(s,o,r);let a=this.InternalBodyState(t);for(let l of i){let c=new qe(l.x+a.r.x,l.y+a.r.y,l.z+a.r.z),u=new qe(l.vx+a.v.x,l.vy+a.v.y,l.vz+a.v.z),h=qe.zero();r.push(new $o(s.tt,c,u,h))}this.CalcBodyAccelerations(),this.prev=this.Duplicate()}get OriginBody(){return this.originBody}get Time(){return this.curr.time}Update(t){let e=wt(t),i=e.tt-this.curr.time.tt;if(i===0)this.prev=this.Duplicate();else{this.Swap(),this.curr.time=e,this.curr.gravitators=n.CalcSolarSystem(e);for(let o=0;o<this.curr.bodies.length;++o){let a=this.prev.bodies[o];this.curr.bodies[o].r=Wr(i,a.r,a.v,a.a)}this.CalcBodyAccelerations();for(let o=0;o<this.curr.bodies.length;++o){let a=this.prev.bodies[o],l=this.curr.bodies[o],c=a.a.mean(l.a);l.tt=e.tt,l.r=Wr(i,a.r,a.v,c),l.v=t0(i,a.v,c)}this.CalcBodyAccelerations()}let s=[],r=this.InternalBodyState(this.originBody);for(let o of this.curr.bodies)s.push(new Pe(o.r.x-r.r.x,o.r.y-r.r.y,o.r.z-r.r.z,o.v.x-r.v.x,o.v.y-r.v.y,o.v.z-r.v.z,e));return s}Swap(){let t=this.curr;this.curr=this.prev,this.prev=t}SolarSystemBodyState(t){let e=this.InternalBodyState(t),i=this.InternalBodyState(this.originBody);return Es(e.sub(i),this.curr.time)}InternalBodyState(t){if(t===L.SSB)return new Ei(this.curr.time.tt,qe.zero(),qe.zero());let e=this.curr.gravitators[t];if(e)return e;throw`Invalid body: ${t}`}static CalcSolarSystem(t){let e={},i=new Ei(t.tt,qe.zero(),qe.zero());e[L.Mercury]=Dn(i,t.tt,L.Mercury,qu),e[L.Venus]=Dn(i,t.tt,L.Venus,Yu),e[L.Earth]=Dn(i,t.tt,L.Earth,Wo+Ec),e[L.Mars]=Dn(i,t.tt,L.Mars,$u),e[L.Jupiter]=Dn(i,t.tt,L.Jupiter,Or),e[L.Saturn]=Dn(i,t.tt,L.Saturn,Br),e[L.Uranus]=Dn(i,t.tt,L.Uranus,zr),e[L.Neptune]=Dn(i,t.tt,L.Neptune,kr);for(let s in e)e[s].r.decr(i.r),e[s].v.decr(i.v);return e[L.Sun]=new Ei(t.tt,i.r.neg(),i.v.neg()),e}CalcBodyAccelerations(){for(let t of this.curr.bodies)t.a=qe.zero(),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Sun].r,jo),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Mercury].r,qu),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Venus].r,Yu),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Earth].r,Wo+Ec),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Mars].r,$u),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Jupiter].r,Or),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Saturn].r,Br),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Uranus].r,zr),n.AddAcceleration(t.a,t.r,this.curr.gravitators[L.Neptune].r,kr)}static AddAcceleration(t,e,i,s){let r=i.x-e.x,o=i.y-e.y,a=i.z-e.z,l=r*r+o*o+a*a,c=s/(l*Math.sqrt(l));t.x+=r*c,t.y+=o*c,t.z+=a*c}Duplicate(){let t={};for(let i in this.curr.gravitators)t[i]=this.curr.gravitators[i].clone();let e=[];for(let i of this.curr.bodies)e.push(i.clone());return new $c(this.curr.time,t,e)}},$c=class{constructor(t,e,i){this.time=t,this.gravitators=e,this.bodies=i}};var rn=fe/1e3,Xp=23.4392911*Math.PI/180,lh=Math.cos(Xp),ch=Math.sin(Xp);function Yn(n,t,e){let i=n,s=t*lh+e*ch,r=-t*ch+e*lh;return[i,r,-s]}function g3(n,t,e){let i=n,s=-e,r=t;return[i,s*lh-r*ch,s*ch+r*lh]}var _3=[[-.0548755604,-.8734370902,-.4838350155],[.4941094279,-.44482963,.7469822445],[-.867666149,-.1980763734,.4559837762]];function qp(){let n=[[1,0,0],[0,1,0],[0,0,1]].map(t=>{let e=g3(...t);return _3.map(i=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2])});return[0,1,2].map(t=>[n[0][t],n[1][t],n[2][t]])}function Gp(n){let t=Math.hypot(n[0],n[1],n[2]);return[n[0]/t,n[1]/t,n[2]/t]}function ah(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Wp(n,t){let e=E0(n,t),i=Gp([e.north.x,e.north.y,e.north.z]),s=Gp(ah([0,0,1],i)),r=ah(i,s),o=e.spin*Math.PI/180,a=[s[0]*Math.cos(o)+r[0]*Math.sin(o),s[1]*Math.cos(o)+r[1]*Math.sin(o),s[2]*Math.cos(o)+r[2]*Math.sin(o)],l=Yn(...a),c=Yn(...i);return{P:l,N:c,Z:ah(l,c)}}function Yp(n,t){let e=t[0]*n.P[0]+t[1]*n.P[1]+t[2]*n.P[2],i=t[0]*n.N[0]+t[1]*n.N[1]+t[2]*n.N[2],s=t[0]*n.Z[0]+t[1]*n.Z[1]+t[2]*n.Z[2],r=Math.hypot(e,i,s);return{lat:Math.asin(i/r)*180/Math.PI,lon:Math.atan2(-s,e)*180/Math.PI}}function x3(n){let t=Jr(n),e=th(n)*15*Math.PI/180,i=$i(t,new $t(Math.cos(e),Math.sin(e),0,n)),s=$i(t,new $t(0,0,1,n)),r=Yn(i.x,i.y,i.z),o=Yn(s.x,s.y,s.z);return{P:r,N:o,Z:ah(r,o)}}var dn=["mercury","venus","mars","jupiter","saturn","uranus","neptune"],Qi={mercury:L.Mercury,venus:L.Venus,mars:L.Mars,jupiter:L.Jupiter,saturn:L.Saturn,uranus:L.Uranus,neptune:L.Neptune,earth:L.Earth,moon:L.Moon,sun:L.Sun};function ia(n){let t=wt(n),e=Sn(L.Sun,t,!0),i=Mn(t),s=Yn(e.x*rn,e.y*rn,e.z*rn),r=Yn(i.x*rn,i.y*rn,i.z*rn),o={earth:[0,0,0],sun:s,moon:r},a={earth:x3(t),moon:Wp(L.Moon,t)},l={};for(let c of dn){let u=yn(Qi[c],t),h=Yn(u.x*rn,u.y*rn,u.z*rn);l[c]=h,o[c]=[s[0]+h[0],s[1]+h[1],s[2]+h[2]],a[c]=Wp(Qi[c],t)}return{t,sun:s,moon:r,pos:o,frame:a,helio:l,earthFrame:a.earth,moonFrame:a.moon}}function $p(n,t,e=360){let i={mercury:87.969,venus:224.701,earth:365.256,mars:686.98,jupiter:4332.589,saturn:10759.22,uranus:30685.4,neptune:60189}[n],s=new Float32Array((e+1)*3),r=t.getTime()-i*864e5/2;for(let o=0;o<=e;o++){let a=wt(new Date(r+i*864e5*o/e)),l=yn(Qi[n],a);s.set(Yn(l.x*rn,l.y*rn,l.z*rn),o*3)}return s}function Zp(n,t=240){let e=new Float32Array((t+1)*3),i=27.3217*864e5,s=n.getTime()-i/2;for(let r=0;r<=t;r++){let o=Mn(wt(new Date(s+i*r/t)));e.set(Yn(o.x*rn,o.y*rn,o.z*rn),r*3)}return e}var Kr=`
varying vec2 vUv;
varying vec3 vWorld;
varying vec3 vNormalW;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vUv = uv;
  vec4 w = modelMatrix * vec4(position,1.0);
  vWorld = w.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
  #include <logdepthbuf_vertex>
}`,Jp=`
uniform sampler2D uDay, uNight, uClouds, uNormal, uSpec;
uniform vec3 uSunDir;      // world, normalized (from Earth to Sun)
uniform vec3 uNorth;       // Earth axis, world
uniform float uSunI, uNightI, uCloudI;
varying vec2 vUv; varying vec3 vWorld; varying vec3 vNormalW;
#include <common>
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  vec3 Ng = normalize(vNormalW);
  vec3 T = normalize(cross(uNorth, Ng) + 1e-6);
  vec3 B = cross(Ng, T);
  vec3 nt = texture2D(uNormal, vUv).xyz * 2.0 - 1.0;
  nt.xy *= 1.6;
  vec3 N = normalize(T * nt.x + B * nt.y + Ng * max(nt.z, 0.2));
  vec3 L = normalize(uSunDir);
  vec3 V = normalize(cameraPosition - vWorld);
  float ndlG = dot(Ng, L);
  float ndl = dot(N, L);

  vec3 day = texture2D(uDay, vUv).rgb;
  float ocean = texture2D(uSpec, vUv).r;
  // cloud shadow: shift toward the sun in tangent space
  vec2 sh = vec2(dot(L, T), dot(L, B)) * 0.0009;
  float cloud = texture2D(uClouds, vUv).r;
  float cloudSh = texture2D(uClouds, vUv - sh).r;

  // sunlight reddening near the terminator (longer air path)
  float mu = clamp(ndlG, 0.0, 1.0);
  vec3 trans = exp(-vec3(0.0055, 0.013, 0.0224) * 10.0 / (mu + 0.035));
  float lit = smoothstep(-0.02, 0.10, ndlG);
  vec3 sun = uSunI * trans * lit;

  vec3 ground = day * max(ndl, 0.0) * sun * (1.0 - 0.55 * cloudSh);
  // ocean glint
  vec3 H = normalize(L + V);
  float spec = pow(max(dot(Ng, H), 0.0), 90.0) * 1.4 + pow(max(dot(Ng, H), 0.0), 12.0) * 0.06;
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(Ng, V), 0.0), 5.0);
  ground += ocean * (spec + fres * 0.08) * sun * (1.0 - cloud) * vec3(1.0, 0.97, 0.92);
  ground += ocean * vec3(0.004, 0.012, 0.03) * lit; // faint sky reflection

  // clouds
  vec3 cloudCol = vec3(1.0) * uCloudI * (max(ndlG, 0.0) * 0.92 + 0.02) * sun / max(uSunI, 1e-3) * uSunI;
  vec3 col = mix(ground, cloudCol, cloud * 0.95);

  // city lights on the night side
  float night = 1.0 - smoothstep(-0.12, 0.04, ndlG);
  vec3 lights = texture2D(uNight, vUv).rgb;
  lights = pow(lights, vec3(1.4)) * vec3(1.0, 0.82, 0.55);
  col += lights * uNightI * night * (1.0 - cloud * 0.8);

  gl_FragColor = vec4(col, 1.0);
}`,Kp=`
uniform vec3 uSunDir; uniform vec3 uCenter; uniform float uRp; uniform float uRa; uniform float uSunI;
varying vec2 vUv; varying vec3 vWorld; varying vec3 vNormalW;
#include <common>
#include <logdepthbuf_pars_fragment>
vec2 rsi(vec3 r0, vec3 rd, float sr){
  float b = 2.0 * dot(rd, r0);
  float c = dot(r0, r0) - sr * sr;
  float d = b * b - 4.0 * c;
  if (d < 0.0) return vec2(1e5, -1e5);
  d = sqrt(d);
  return vec2((-b - d) * 0.5, (-b + d) * 0.5);
}
const vec3 kR = vec3(5.5, 13.0, 22.4);
const float kM = 21.0;
const float shR = 0.008;
const float shM = 0.0012;
const float g = 0.758;
void main(){
  #include <logdepthbuf_fragment>
  vec3 ro = cameraPosition - uCenter;
  vec3 rd = normalize(vWorld - cameraPosition);
  vec2 a = rsi(ro, rd, uRa);
  if (a.x > a.y) discard;
  vec2 p = rsi(ro, rd, uRp);
  float t0 = max(a.x, 0.0);
  float t1 = a.y;
  bool hitGround = p.x < p.y && p.x > 0.0;
  if (hitGround) t1 = min(t1, p.x);
  const int IS = 20; const int JS = 6;
  float ds = (t1 - t0) / float(IS);
  vec3 L = normalize(uSunDir);
  float mu = dot(rd, L);
  float pR = 3.0 / (16.0 * PI) * (1.0 + mu * mu);
  float pM = 3.0 / (8.0 * PI) * ((1.0 - g * g) * (1.0 + mu * mu)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * mu * g, 1.5));
  vec3 tR = vec3(0.0), tM = vec3(0.0);
  float odR = 0.0, odM = 0.0;
  float t = t0;
  for (int i = 0; i < IS; i++){
    vec3 x = ro + rd * (t + ds * 0.5);
    float h = length(x) - uRp;
    float dR = exp(-h / shR) * ds;
    float dM = exp(-h / shM) * ds;
    odR += dR; odM += dM;
    float lt = rsi(x, L, uRa).y;
    float ls = lt / float(JS);
    float lR = 0.0, lM = 0.0; bool shadow = false;
    float tt = 0.0;
    for (int j = 0; j < JS; j++){
      vec3 y = x + L * (tt + ls * 0.5);
      float hh = length(y) - uRp;
      if (hh < 0.0) { shadow = true; break; }
      lR += exp(-hh / shR) * ls;
      lM += exp(-hh / shM) * ls;
      tt += ls;
    }
    if (!shadow){
      vec3 att = exp(-(kR * (odR + lR) + kM * 1.1 * (odM + lM)));
      tR += dR * att; tM += dM * att;
    }
    t += ds;
  }
  vec3 col = uSunI * (pR * kR * tR + pM * kM * tM);
  vec3 T = exp(-(kR * odR + kM * 1.1 * odM));
  float alpha = hitGround ? 0.0 : clamp(1.0 - dot(T, vec3(0.333)), 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}`,jp=`
uniform sampler2D uMap; uniform vec3 uSunDir; uniform vec3 uEarthDir; uniform float uSunI; uniform float uEarthshine;
varying vec2 vUv; varying vec3 vWorld; varying vec3 vNormalW;
#include <common>
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 alb = texture2D(uMap, vUv).rgb;
  alb = pow(alb, vec3(1.05)) * 0.55;
  float mu0 = max(dot(N, normalize(uSunDir)), 0.0);
  float mu = max(dot(N, V), 0.0);
  // Lommel-Seeliger with opposition surge: the Moon's flat full-disc look
  float ls = mu0 / (mu0 + mu + 1e-4);
  float phase = acos(clamp(dot(normalize(uSunDir), V), -1.0, 1.0));
  float surge = 1.0 + 0.6 * exp(-phase / 0.06);
  vec3 col = alb * ls * 2.0 * uSunI * surge * vec3(1.0, 0.98, 0.95);
  float e0 = max(dot(N, normalize(uEarthDir)), 0.0);
  col += alb * e0 / (e0 + mu + 1e-4) * uEarthshine * vec3(0.75, 0.85, 1.0);
  gl_FragColor = vec4(col, 1.0);
}`,Qp=`
uniform float uTime; uniform float uI;
varying vec2 vUv; varying vec3 vWorld; varying vec3 vNormalW;
#include <common>
#include <logdepthbuf_pars_fragment>
vec3 hash3(vec3 p){ p = vec3(dot(p,vec3(127.1,311.7,74.7)), dot(p,vec3(269.5,183.3,246.1)), dot(p,vec3(113.5,271.9,124.6))); return -1.0 + 2.0*fract(sin(p)*43758.5453123); }
float noise(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); vec3 u = f*f*(3.0-2.0*f);
  return mix(mix(mix(dot(hash3(i+vec3(0,0,0)),f-vec3(0,0,0)), dot(hash3(i+vec3(1,0,0)),f-vec3(1,0,0)),u.x),
                 mix(dot(hash3(i+vec3(0,1,0)),f-vec3(0,1,0)), dot(hash3(i+vec3(1,1,0)),f-vec3(1,1,0)),u.x),u.y),
             mix(mix(dot(hash3(i+vec3(0,0,1)),f-vec3(0,0,1)), dot(hash3(i+vec3(1,0,1)),f-vec3(1,0,1)),u.x),
                 mix(dot(hash3(i+vec3(0,1,1)),f-vec3(0,1,1)), dot(hash3(i+vec3(1,1,1)),f-vec3(1,1,1)),u.x),u.y),u.z);
}
float cells(vec3 p){
  // granulation: sharp-edged convective cells
  float n = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ n += a * abs(noise(p)); p *= 2.1; a *= 0.5; }
  return n;
}
void main(){
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  float mu = max(dot(N, V), 0.0);
  // Eddington-like limb darkening, u = 0.6
  float limb = 1.0 - 0.6 * (1.0 - mu);
  vec3 p = N;
  float gr = cells(p * 34.0 + vec3(0.0, uTime * 0.015, 0.0));
  float big = noise(p * 6.0 + uTime * 0.003) * 0.5 + 0.5;
  float spots = smoothstep(0.78, 0.9, noise(p * 3.5 + 11.0) * 0.5 + 0.5) * 0.6;
  float b = (0.55 + 0.9 * gr) * (0.85 + 0.3 * big) * (1.0 - spots);
  float limb2 = pow(mu, 0.55);
  vec3 col = vec3(1.0, 0.36, 0.045) * b * limb * limb2 * mix(vec3(1.0, 0.25, 0.02), vec3(1.0), pow(mu, 0.6));
  gl_FragColor = vec4(col * uI, 1.0);
}`,tm=`
varying vec2 vUv;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vUv = uv * 2.0 - 1.0;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float s = length(vec3(modelMatrix[0].x, modelMatrix[0].y, modelMatrix[0].z));
  mv.xy += position.xy * s;
  gl_Position = projectionMatrix * mv;
  if (mv.z > 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  #include <logdepthbuf_vertex>
}`,em=`
uniform float uI; uniform float uCore; uniform float uSpike;
varying vec2 vUv;
#include <common>
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  float r = length(vUv);
  if (r > 1.0) discard;
  float halo = exp(-r * 9.0) * 0.9 + 0.012 / (r * r + 0.004) * 0.12;
  float ang = atan(vUv.y, vUv.x);
  float spikes = pow(abs(cos(ang * 3.0)), 90.0) * exp(-r * 3.5) * 0.35 * uSpike;
  float fade = smoothstep(1.0, 0.6, r);
  vec3 col = vec3(1.0, 0.8, 0.55) * (halo + spikes) * fade;
  gl_FragColor = vec4(col * uI, 1.0);
}`,nm=`
attribute float aMag; attribute vec3 aColor;
uniform float uScale; uniform float uK;
varying vec3 vColor; varying float vPeak;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float flux = pow(10.0, -0.4 * aMag);
  float size = (2.0 + 5.0 * clamp(pow(flux, 0.3), 0.0, 1.6)) * uScale;
  gl_PointSize = size;
  vPeak = min(flux * uK / (0.17 * size * size), 2.3);
  vColor = aColor;
  #include <logdepthbuf_vertex>
}`,im=`
varying vec3 vColor; varying float vPeak;
#include <common>
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(c, c);
  if (r2 > 1.0) discard;
  gl_FragColor = vec4(vColor * vPeak * exp(-r2 * 4.5), 1.0);
}`,sm=`
varying vec3 vDir;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
}`,rm=`
uniform sampler2D uMap; uniform mat3 uGal; uniform float uI;
varying vec3 vDir;
#include <common>
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  vec3 g = uGal * normalize(vDir);
  float l = atan(g.y, g.x);
  float b = asin(clamp(g.z, -1.0, 1.0));
  vec2 uv = vec2(fract(0.5 - l / (2.0 * PI)), 0.5 - b / PI);
  vec3 c = texture2D(uMap, uv).rgb;
  c = max(c - vec3(0.012), 0.0);
  gl_FragColor = vec4(c * uI, 1.0);
}`,om=`
uniform sampler2D uMap; uniform sampler2D uRingTex;
uniform vec3 uSunPos; uniform float uSunI; uniform float uGain;
uniform float uModel;            // 0 regolith (Lommel-Seeliger), 1 Minnaert
uniform float uK;                // Minnaert exponent
uniform float uWrap;             // terminator softness (thick atmospheres)
uniform vec3 uHaze; uniform float uHazeI;
uniform float uUOff;             // texture longitude offset (Venus cloud super-rotation)
uniform float uRing; uniform vec3 uRingC; uniform vec3 uRingN; uniform vec2 uRingR;
varying vec2 vUv; varying vec3 vWorld; varying vec3 vNormalW;
#include <common>
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 L = normalize(uSunPos - vWorld);
  vec3 alb = texture2D(uMap, vec2(vUv.x + uUOff, vUv.y)).rgb * uGain;
  float mu0r = dot(N, L);
  float mu0 = max(mu0r, 0.0);
  float mu = max(dot(N, V), 1e-3);
  float I;
  if (uModel < 0.5) {
    float phase = acos(clamp(dot(L, V), -1.0, 1.0));
    I = 2.0 * mu0 / (mu0 + mu + 1e-4) * (1.0 + 0.5 * exp(-phase / 0.07));
  } else {
    float m0 = uWrap > 0.0 ? max((mu0r + uWrap) / (1.0 + uWrap), 0.0) : mu0;
    I = pow(m0, uK) * pow(mu, uK - 1.0);
    I = min(I, 1.25 * m0 + 0.1 * m0 * m0);
  }
  float shade = 1.0;
  if (uRing > 0.5) {
    float dn = dot(L, uRingN);
    if (abs(dn) > 1e-4) {
      float s = dot(uRingC - vWorld, uRingN) / dn;
      if (s > 0.0) {
        float r = length(vWorld + L * s - uRingC);
        float u = (r - uRingR.x) / (uRingR.y - uRingR.x);
        if (u > 0.0 && u < 1.0) shade = 1.0 - 0.92 * texture2D(uRingTex, vec2(u, 0.5)).a;
      }
    }
  }
  vec3 col = alb * I * uSunI * shade;
  // limb haze: forward/back-scattering in a thin upper atmosphere, only where sunlit
  float rim = pow(1.0 - mu, 3.0) * smoothstep(-0.15, 0.35, mu0r);
  col += uHaze * uHazeI * rim * uSunI;
  gl_FragColor = vec4(col, 1.0);
}`,am=`
varying vec3 vWorld; varying vec2 vXY;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vXY = position.xy;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
  #include <logdepthbuf_vertex>
}`,lm=`
uniform sampler2D uRingTex; uniform vec2 uRingR; uniform vec3 uSunPos; uniform float uSunI;
uniform vec3 uC; uniform vec3 uN; uniform float uRp; uniform float uFlat; uniform float uScale;
varying vec3 vWorld; varying vec2 vXY;
#include <common>
#include <logdepthbuf_pars_fragment>
void main(){
  #include <logdepthbuf_fragment>
  float vR = length(vXY);
  float u = (vR * uScale - uRingR.x) / (uRingR.y - uRingR.x);
  if (u < 0.0 || u > 1.0) discard;
  vec4 tx = texture2D(uRingTex, vec2(u, 0.5));
  float a = tx.a;
  vec3 L = normalize(uSunPos - vWorld);
  vec3 V = normalize(cameraPosition - vWorld);
  float sl = dot(L, uN), sv = dot(V, uN);
  // planet shadow: ray to the Sun vs oblate spheroid (scale polar axis)
  vec3 ro = vWorld - uC, rd = L;
  vec3 ron = ro - uN * dot(ro, uN) * (1.0 - 1.0 / (1.0 - uFlat));
  vec3 rdn = rd - uN * dot(rd, uN) * (1.0 - 1.0 / (1.0 - uFlat));
  float b = dot(ron, rdn), c = dot(ron, ron) - uRp * uRp, A2 = dot(rdn, rdn);
  float lit = 1.0;
  if (-b > 0.0) {                       // planet lies toward the Sun: soft-edged shadow (penumbra)
    float dmin = sqrt(max(c + uRp * uRp - b * b / A2, 0.0));
    lit = smoothstep(uRp * 0.985, uRp * 1.02, dmin);
  }
  vec3 col = tx.rgb * vec3(1.1, 1.0, 0.84);
  float bright;
  if (sl * sv > 0.0) bright = 1.3 * (0.5 + 0.5 * 2.0 * abs(sl) / (abs(sl) + abs(sv) + 0.02));  // lit face (optically thick: weak angle dependence)
  else bright = 0.55 * (1.0 - a) * 2.2;                                                       // light leaking through
  vec3 outc = col * bright * uSunI * lit + col * 0.004;
  gl_FragColor = vec4(outc * a, a);
}`;var cm="ja",y3={sun:["\u592A\u967D","Sun"],earth:["\u5730\u7403","Earth"],moon:["\u6708","Moon"],earthmoon:["\u5730\u7403\u3068\u6708","Earth\u2013Moon"],mercury:["\u6C34\u661F","Mercury"],venus:["\u91D1\u661F","Venus"],mars:["\u706B\u661F","Mars"],jupiter:["\u6728\u661F","Jupiter"],saturn:["\u571F\u661F","Saturn"],uranus:["\u5929\u738B\u661F","Uranus"],neptune:["\u6D77\u738B\u661F","Neptune"],system:["\u592A\u967D\u7CFB","Solar System"],inner:["\u5185\u5074\u306E\u60D1\u661F","Inner planets"],kicker_mercury:["\u7B2C1\u60D1\u661F \xB7 \u5730\u7403\u578B","First planet \xB7 Rocky"],kicker_venus:["\u7B2C2\u60D1\u661F \xB7 \u5730\u7403\u578B","Second planet \xB7 Rocky"],kicker_mars:["\u7B2C4\u60D1\u661F \xB7 \u5730\u7403\u578B","Fourth planet \xB7 Rocky"],kicker_jupiter:["\u7B2C5\u60D1\u661F \xB7 \u5DE8\u5927\u30AC\u30B9\u60D1\u661F","Fifth planet \xB7 Gas giant"],kicker_saturn:["\u7B2C6\u60D1\u661F \xB7 \u5DE8\u5927\u30AC\u30B9\u60D1\u661F","Sixth planet \xB7 Gas giant"],kicker_uranus:["\u7B2C7\u60D1\u661F \xB7 \u5DE8\u5927\u6C37\u60D1\u661F","Seventh planet \xB7 Ice giant"],kicker_neptune:["\u7B2C8\u60D1\u661F \xB7 \u5DE8\u5927\u6C37\u60D1\u661F","Eighth planet \xB7 Ice giant"],kicker_system:["\u592A\u967D\u30688\u3064\u306E\u60D1\u661F \xB7 \u3044\u307E\u306E\u914D\u7F6E","The Sun and eight planets \xB7 as they are now"],kicker_inner:["\u6C34\u661F\u304B\u3089\u706B\u661F\u307E\u3067 \xB7 \u3044\u307E\u306E\u914D\u7F6E","Mercury to Mars \xB7 as they are now"],groupAll:["\u5168\u4F53","Overview"],groupBodies:["\u5929\u4F53","Bodies"],mag:["\u660E\u308B\u3055","Brightness"],magU:["\u7B49\u7D1A","mag"],appDiam:["\u8996\u76F4\u5F84","Apparent size"],inCon:["\u3044\u308B\u661F\u5EA7","Constellation"],elong:["\u592A\u967D\u304B\u3089\u306E\u96E2\u89D2","Elongation"],morning:["\u660E\u3051\u65B9\u306E\u7A7A","morning sky"],evening:["\u5915\u65B9\u306E\u7A7A","evening sky"],nearSun:["\u592A\u967D\u306B\u8FD1\u304F\u898B\u3048\u306A\u3044","too close to the Sun"],lightFromEarth:["\u5730\u7403\u307E\u3067\u5149\u3067","Light time to Earth"],distSunAU:["\u592A\u967D\u304B\u3089\u306E\u8DDD\u96E2","Distance from Sun"],ringTilt:["\u74B0\u306E\u50BE\u304D\uFF08\u5730\u7403\u304B\u3089\uFF09","Ring tilt (from Earth)"],hr:["\u6642\u9593","h"],phaseAngle:["\u4F4D\u76F8\u89D2","Phase angle"],nextOpp:["\u6B21\u306E\u885D\uFF08\u898B\u3054\u308D\uFF09","Next opposition"],nextConj:["\u6B21\u306E\u5408","Next conjunction"],nextInfConj:["\u6B21\u306E\u5185\u5408","Next inferior conjunction"],nextSupConj:["\u6B21\u306E\u5916\u5408","Next superior conjunction"],nextElong:["\u6B21\u306E\u6700\u5927\u96E2\u89D2","Next greatest elongation"],nextPeak:["\u6B21\u306E\u6700\u5927\u5149\u5EA6","Next greatest brilliancy"],nextPeri:["\u6B21\u306E\u8FD1\u65E5\u70B9","Next perihelion"],nextAph:["\u6B21\u306E\u9060\u65E5\u70B9","Next aphelion"],east:["\u6771\u65B9\u30FB\u5915\u65B9","eastern \xB7 evening"],west:["\u897F\u65B9\u30FB\u660E\u3051\u65B9","western \xB7 morning"],bestView:["\u4E00\u6669\u4E2D\u898B\u3048\u308B","visible all night"],hidden:["\u898B\u3048\u306A\u3044","not visible"],zenith:["\u4ECA\u591C\u306E\u7A7A\u3067\u63A2\u3059\uFF08Zenith\uFF09","Find it in tonight\u2019s sky (Zenith)"],planetsNow:["\u60D1\u661F\u306E\u3044\u307E","Planets right now"],fromSun:["\u592A\u967D\u304B\u3089","from Sun"],fromEarth:["\u5730\u7403\u304B\u3089","from Earth"],texNote:["\u8868\u9762\u306E\u6A21\u69D8\u306F\u63A2\u67FB\u6A5F\u753B\u50CF\u306E\u5408\u6210\u3067\u3059\uFF08\u96F2\u3084\u5D50\u306F\u3044\u307E\u306E\u59FF\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09\u3002","Surface maps are spacecraft mosaics; clouds and storms are not live."],kicker_sun:["\u6052\u661F \xB7 G2V","Star \xB7 G2V"],kicker_earth:["\u7B2C3\u60D1\u661F","Third planet"],kicker_moon:["\u5730\u7403\u306E\u885B\u661F","Natural satellite"],now:["\u73FE\u5728","Now"],live:["\u30E9\u30A4\u30D6","Live"],focus:["\u8996\u70B9","View"],rate0:["\u5B9F\u6642\u9593","Real time"],rate1:["1\u5206/\u79D2","1 min/s"],rate2:["1\u6642\u9593/\u79D2","1 hr/s"],rate3:["1\u65E5/\u79D2","1 day/s"],rate4:["1\u9031/\u79D2","1 wk/s"],paused:["\u4E00\u6642\u505C\u6B62\u4E2D","Paused"],pause:["\u4E00\u6642\u505C\u6B62","Pause"],reverse:["\u9006\u518D\u751F","Reverse"],liveNow:["\u3044\u307E\u306E\u5B87\u5B99","Right now"],facts:["\u57FA\u672C\u30C7\u30FC\u30BF","Key figures"],upcoming:["\u6B21\u306B\u8D77\u304D\u308B\u3053\u3068","Coming up"],source:["\u51FA\u5178","Source"],factsheet:["\u30D5\u30A1\u30AF\u30C8\u30B7\u30FC\u30C8","Fact Sheet"],distSun:["\u592A\u967D\u307E\u3067\u306E\u8DDD\u96E2","Distance to Sun"],lightTime:["\u592A\u967D\u5149\u306E\u5230\u9054\u6642\u9593","Sunlight travel time"],distMoon:["\u6708\u307E\u3067\u306E\u8DDD\u96E2","Distance to Moon"],subsolar:["\u592A\u967D\u76F4\u4E0B\u70B9","Subsolar point"],distEarth:["\u5730\u7403\u304B\u3089\u306E\u8DDD\u96E2","Distance from Earth"],phase:["\u6708\u76F8 \xB7 \u6708\u9F62","Phase \xB7 age"],illum:["\u8F1D\u9762\u6BD4","Illuminated"],libration:["\u79E4\u52D5\uFF08\u7DEF\u5EA6\u30FB\u7D4C\u5EA6\uFF09","Libration (lat, lon)"],au:["\u5929\u6587\u5358\u4F4D","Astronomical units"],angDiam:["\u8996\u76F4\u5F84","Apparent diameter"],eclLon:["\u592A\u967D\u9EC4\u7D4C","Ecliptic longitude"],mkm:["\u767E\u4E07km","M km"],min:["\u5206","m"],sec:["\u79D2","s"],days:["\u65E5","d"],nextLunar:["\u6B21\u306E\u6708\u98DF","Next lunar eclipse"],nextSolar:["\u6B21\u306E\u65E5\u98DF","Next solar eclipse"],nextQuarter:["\u6B21\u306E\u4E3B\u8981\u6708\u76F8","Next principal phase"],nextSeason:["\u6B21\u306E\u4E8C\u81F3\u4E8C\u5206","Next solstice/equinox"],ecl_penumbral:["\u534A\u5F71\u6708\u98DF","Penumbral"],ecl_partial:["\u90E8\u5206\u98DF","Partial"],ecl_total:["\u7686\u65E2\u98DF","Total"],ecl_annular:["\u91D1\u74B0\u65E5\u98DF","Annular"],marEq:["\u6625\u5206","March equinox"],junSol:["\u590F\u81F3","June solstice"],sepEq:["\u79CB\u5206","September equinox"],decSol:["\u51AC\u81F3","December solstice"],phases:[["\u65B0\u6708","\u4E09\u65E5\u6708","\u4E0A\u5F26","\u5341\u4E09\u591C","\u6E80\u6708","\u5BDD\u5F85\u6708","\u4E0B\u5F26","\u6709\u660E\u6708"],["New moon","Waxing crescent","First quarter","Waxing gibbous","Full moon","Waning gibbous","Third quarter","Waning crescent"]],loading:["\u661F\u8868\u3068\u5730\u8868\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D","Loading star catalogue and surface maps"],app:["\u592A\u967D\u7CFB\u3092\u3044\u307E\u306E\u914D\u7F6E\u3067","The Solar System, as it is now"],jumpHint:["\u62BC\u3059\u3068\u305D\u306E\u6642\u523B\u3078\u79FB\u52D5","Tap to jump there"],credits:["\u30AF\u30EC\u30B8\u30C3\u30C8","Credits"],hint:["\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB/\u30D4\u30F3\u30C1\u3067\u62E1\u5927 \xB7 \u5929\u4F53\u3092\u30AF\u30EA\u30C3\u30AF","Drag to orbit \xB7 Scroll or pinch to zoom \xB7 Click a body"],stars:["\u6052\u661F","stars"],note:["\u96F2\u306F\u4EE3\u8868\u7684\u306A\u885B\u661F\u5408\u6210\u753B\u50CF\u3067\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306E\u96F2\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002","Clouds are a representative satellite composite, not live weather."],phase0:["\u30D5\u30A7\u30FC\u30BA0 \u30D7\u30ED\u30C8\u30BF\u30A4\u30D7","Phase 0 prototype"]};function lt(n,t){t&&(cm=t);let e=y3[n];return e?cm==="ja"?e[0]:e[1]:n}var mt=(n,t)=>({ja:n,en:t}),sa={earth:{latin:"Terra \xB7 \u2641",src:"https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html",lede:mt("\u6DB2\u4F53\u306E\u6C34\u304C\u5730\u8868\u306B\u5B89\u5B9A\u3057\u3066\u5B58\u5728\u3059\u308B\u3001\u77E5\u3089\u308C\u3066\u3044\u308B\u552F\u4E00\u306E\u5929\u4F53\u3002\u81EA\u8EE2\u8EF8\u306F\u516C\u8EE2\u9762\u306B\u5BFE\u3057\u306623.44\xB0\u50BE\u304D\u3001\u3053\u308C\u304C\u5B63\u7BC0\u3092\u751F\u3080\u3002","The only known world with stable liquid water on its surface. Its axis tilts 23.44\xB0 to its orbit, which is what makes the seasons."),rows:[[mt("\u8D64\u9053\u534A\u5F84","Equatorial radius"),"6,378.137"," km"],[mt("\u8CEA\u91CF","Mass"),"5.9722 \xD7 10\xB2\u2074"," kg"],[mt("\u5E73\u5747\u5BC6\u5EA6","Mean density"),"5,513"," kg/m\xB3"],[mt("\u8868\u9762\u91CD\u529B","Surface gravity"),"9.820"," m/s\xB2"],[mt("\u8131\u51FA\u901F\u5EA6","Escape velocity"),"11.186"," km/s"],[mt("\u6052\u661F\u81EA\u8EE2\u5468\u671F","Sidereal day"),"23.9345",mt(" \u6642\u9593"," h")],[mt("\u516C\u8EE2\u5468\u671F","Orbital period"),"365.256",mt(" \u65E5"," d")],[mt("\u8ECC\u9053\u9577\u534A\u5F84","Semi-major axis"),"149.598",mt(" \u767E\u4E07km"," M km")],[mt("\u5E73\u5747\u5730\u8868\u6E29\u5EA6","Mean surface temp."),"15"," \xB0C"]]},moon:{latin:"Luna \xB7 \u263E",src:"https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html",lede:mt("\u81EA\u8EE2\u3068\u516C\u8EE2\u306E\u5468\u671F\u304C\u4E00\u81F4\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u5730\u7403\u306B\u306F\u307B\u307C\u540C\u3058\u9762\u3092\u5411\u3051\u7D9A\u3051\u308B\u3002\u79E4\u52D5\u306E\u304A\u304B\u3052\u3067\u8868\u9762\u306E\u7D0459%\u3092\u5730\u7403\u304B\u3089\u898B\u3089\u308C\u308B\u3002","Its spin matches its orbit, so it keeps nearly the same face toward Earth. Libration lets us see about 59% of its surface over time."),rows:[[mt("\u8D64\u9053\u534A\u5F84","Equatorial radius"),"1,738.1"," km"],[mt("\u8CEA\u91CF","Mass"),"0.07346 \xD7 10\xB2\u2074"," kg"],[mt("\u5E73\u5747\u5BC6\u5EA6","Mean density"),"3,344"," kg/m\xB3"],[mt("\u8868\u9762\u91CD\u529B","Surface gravity"),"1.62"," m/s\xB2"],[mt("\u8131\u51FA\u901F\u5EA6","Escape velocity"),"2.38"," km/s"],[mt("\u6052\u661F\u81EA\u8EE2\u5468\u671F","Sidereal rotation"),"655.720",mt(" \u6642\u9593"," h")],[mt("\u6714\u671B\u6708","Synodic month"),"29.53",mt(" \u65E5"," d")],[mt("\u8FD1\u5730\u70B9 / \u9060\u5730\u70B9","Perigee / apogee"),"363,300 / 405,500"," km"],[mt("\u5730\u7403\u304B\u3089\u9060\u3056\u304B\u308B\u901F\u3055","Recession from Earth"),"3.8",mt(" cm/\u5E74"," cm/yr")]]},sun:{latin:"Sol \xB7 \u2609",src:"https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html",lede:mt("\u592A\u967D\u7CFB\u306E\u5168\u8CEA\u91CF\u306E99.8%\u4EE5\u4E0A\u3092\u5360\u3081\u308B\u4E3B\u7CFB\u5217\u661F\u3002\u4E2D\u5FC3\u306E\u6838\u878D\u5408\u3067\u751F\u307E\u308C\u305F\u30A8\u30CD\u30EB\u30AE\u30FC\u304C\u3001\u5149\u3068\u3057\u3066\u7D048\u520620\u79D2\u3067\u5730\u7403\u306B\u5C4A\u304F\u3002","A main-sequence star holding over 99.8% of the Solar System\u2019s mass. Energy from core fusion reaches Earth as light in about 8 min 20 s."),rows:[[mt("\u4F53\u7A4D\u5E73\u5747\u534A\u5F84","Volumetric mean radius"),"695,700"," km"],[mt("\u8CEA\u91CF","Mass"),"1,988,400 \xD7 10\xB2\u2074"," kg"],[mt("\u5E73\u5747\u5BC6\u5EA6","Mean density"),"1,408"," kg/m\xB3"],[mt("\u8868\u9762\u91CD\u529B","Surface gravity"),"274.0"," m/s\xB2"],[mt("\u8131\u51FA\u901F\u5EA6","Escape velocity"),"617.6"," km/s"],[mt("\u81EA\u8EE2\u5468\u671F\uFF08\u7DEF\u5EA616\xB0\uFF09","Rotation (at 16\xB0 lat.)"),"609.12",mt(" \u6642\u9593"," h")],[mt("\u6709\u52B9\u6E29\u5EA6","Effective temperature"),"5,772"," K"],[mt("\u4E2D\u5FC3\u6E29\u5EA6","Central temperature"),"1.571 \xD7 10\u2077"," K"],[mt("\u5149\u5EA6","Luminosity"),"3.828 \xD7 10\xB2\u2076"," W"]]}},M3=mt(" \u6642\u9593"," h"),S3=mt(" \u65E5"," d"),b3=mt(" \u767E\u4E07km"," M km"),E3=mt(" \u500B\uFF082026\u5E743\u6708\u6642\u70B9\uFF09"," (as of Mar 2026)"),Is=(n,t,e,i,s,r,o,a,l,c,u)=>[[mt("\u8D64\u9053\u534A\u5F84","Equatorial radius"),n," km"],[mt("\u8CEA\u91CF","Mass"),t+" \xD7 10\xB2\u2074"," kg"],[mt("\u5E73\u5747\u5BC6\u5EA6","Mean density"),e," kg/m\xB3"],[mt("\u8868\u9762\u91CD\u529B","Surface gravity"),i," m/s\xB2"],[mt("\u8131\u51FA\u901F\u5EA6","Escape velocity"),s," km/s"],[mt("\u6052\u661F\u81EA\u8EE2\u5468\u671F","Sidereal rotation"),r,M3],[mt("\u516C\u8EE2\u5468\u671F","Orbital period"),o,S3],[mt("\u8ECC\u9053\u9577\u534A\u5F84","Semi-major axis"),a,b3],[mt("\u81EA\u8EE2\u8EF8\u306E\u50BE\u304D","Axial tilt"),l,"\xB0"],[mt("\u5E73\u5747\u6E29\u5EA6","Mean temperature"),c," \xB0C"],[mt("\u885B\u661F","Moons"),u,E3]],Ds=n=>`https://nssdc.gsfc.nasa.gov/planetary/factsheet/${n}fact.html`;Object.assign(sa,{mercury:{latin:"Mercurius \xB7 \u263F",src:Ds("mercury"),lede:mt("\u592A\u967D\u306B\u3044\u3061\u3070\u3093\u8FD1\u3044\u6700\u5C0F\u306E\u60D1\u661F\u3002\u5927\u6C17\u304C\u307B\u3068\u3093\u3069\u306A\u304F\u3001\u663C\u306F430\xB0C\u3001\u591C\u306F\u2212180\xB0C\u307E\u3067\u4E0B\u304C\u308B\u30023\u56DE\u81EA\u8EE2\u3059\u308B\u3042\u3044\u3060\u306B2\u56DE\u516C\u8EE2\u3059\u308B\u3002","The smallest planet and the closest to the Sun. With almost no air, days reach 430 \xB0C and nights fall to \u2212180 \xB0C. It spins three times for every two orbits."),rows:Is("2,440.5","0.33010","5,429","3.7","4.3","1,407.6","87.969","57.909","0.034","167","0")},venus:{latin:"Venus \xB7 \u2640",src:Ds("venus"),lede:mt("\u539A\u3044\u4E8C\u9178\u5316\u70AD\u7D20\u306E\u5927\u6C17\uFF08\u5730\u8868\u306792\u6C17\u5727\uFF09\u304C\u71B1\u3092\u9589\u3058\u3053\u3081\u3001\u5730\u8868\u306F\u7D04464\xB0C\u3002\u81EA\u8EE2\u306F\u9006\u5411\u304D\u3067\u3068\u3066\u3082\u9045\u3044\u304C\u3001\u96F2\u306F\u7D044\u65E5\u3067\u4E00\u5468\u3059\u308B\u3002","A thick carbon-dioxide atmosphere (92 bar at the surface) traps heat at about 464 \xB0C. It spins slowly backwards, yet its clouds circle the planet in about four days."),rows:Is("6,051.8","4.8673","5,243","8.87","10.36","\u22125,832.6","224.701","108.210","177.36","464","0")},mars:{latin:"Mars \xB7 \u2642",src:Ds("mars"),lede:mt("\u9178\u5316\u9244\u306E\u7802\u306B\u304A\u304A\u308F\u308C\u305F\u8D64\u3044\u60D1\u661F\u3002\u592A\u967D\u7CFB\u6700\u5927\u306E\u706B\u5C71\u30AA\u30EA\u30F3\u30DD\u30B9\u5C71\u3068\u3001\u9577\u3055\u7D044,000km\u306E\u30DE\u30EA\u30CD\u30EA\u30B9\u5CE1\u8C37\u3092\u3082\u3064\u3002\u304B\u3064\u3066\u306F\u6C34\u304C\u6D41\u308C\u3066\u3044\u305F\u3002","A red world of iron-oxide dust, home to Olympus Mons, the largest volcano known, and the 4,000 km Valles Marineris. Water once flowed here."),rows:Is("3,396.2","0.64169","3,934","3.73","5.03","24.6229","686.980","227.956","25.19","\u221265","2")},jupiter:{latin:"Iuppiter \xB7 \u2643",src:Ds("jupiter"),lede:mt("\u307B\u304B\u306E\u60D1\u661F\u3092\u3059\u3079\u3066\u5408\u308F\u305B\u305F\u8CEA\u91CF\u306E2.5\u500D\u3092\u3082\u3064\u6700\u5927\u306E\u60D1\u661F\u3002\u7D0410\u6642\u9593\u3067\u81EA\u8EE2\u3057\u3001\u5927\u8D64\u6591\u306F\u5730\u7403\u304C\u3059\u3063\u307D\u308A\u5165\u308B\u5927\u304D\u3055\u306E\u5D50\u3002","The largest planet, 2.5 times the mass of all the others combined. It spins in about 10 hours, and the Great Red Spot is a storm wider than Earth."),rows:Is("71,492","1,898.13","1,326","24.79","59.5","9.9250","4,332.589","778.479","3.13","\u2212110","101")},saturn:{latin:"Saturnus \xB7 \u2644",src:Ds("saturn"),lede:mt("\u6C37\u3068\u5CA9\u306E\u304B\u3051\u3089\u3067\u3067\u304D\u305F\u74B0\u306F\u76F4\u5F84\u7D0428\u4E07km\u3082\u3042\u308B\u306E\u306B\u3001\u539A\u3055\u306F\u591A\u304F\u306E\u5834\u6240\u3067\u308F\u305A\u304B10m\u307B\u3069\u3002\u60D1\u661F\u5168\u4F53\u306E\u5E73\u5747\u5BC6\u5EA6\u306F\u6C34\u3088\u308A\u5C0F\u3055\u3044\u3002","Its rings of ice and rock span about 280,000 km yet are mostly only about 10 m thick. The planet\u2019s average density is lower than water\u2019s."),rows:Is("60,268","568.32","687","10.44","35.5","10.656","10,759.22","1,432.041","26.73","\u2212140","285")},uranus:{latin:"Uranus \xB7 \u26E2",src:Ds("uranus"),lede:mt("\u81EA\u8EE2\u8EF8\u304C98\xB0\u8FD1\u304F\u50BE\u304D\u3001\u6A2A\u5012\u3057\u306E\u307E\u307E\u516C\u8EE2\u3059\u308B\u3002\u6975\u3067\u306F\u7D0442\u5E74\u305A\u3064\u663C\u3068\u591C\u304C\u7D9A\u304F\u3002\u5927\u6C17\u306E\u30E1\u30BF\u30F3\u304C\u8D64\u3044\u5149\u3092\u5438\u3044\u3001\u9752\u7DD1\u8272\u306B\u898B\u3048\u308B\u3002","Tipped over by almost 98\xB0, it rolls around the Sun on its side, so each pole gets about 42 years of day, then night. Methane absorbs red light, leaving it blue-green."),rows:Is("25,559","86.811","1,270","8.87","21.3","\u221217.24","30,685.4","2,867.043","97.77","\u2212195","29")},neptune:{latin:"Neptunus \xB7 \u2646",src:Ds("neptune"),lede:mt("\u8A08\u7B97\u3067\u4E88\u8A00\u3055\u308C\u3066\u304B\u3089\u898B\u3064\u304B\u3063\u305F\u60D1\u661F\uFF081846\u5E74\uFF09\u3002\u592A\u967D\u7CFB\u3067\u6700\u3082\u5F37\u3044\u98A8\u304C\u5439\u304D\u3001\u79D2\u901F\u7D04600m\u306B\u9054\u3059\u308B\u30021\u56DE\u306E\u516C\u8EE2\u306B\u7D04165\u5E74\u304B\u304B\u308B\u3002","Found in 1846 where mathematics said it would be. It has the fastest winds in the Solar System, near 600 m/s, and takes about 165 years to orbit once."),rows:Is("24,764","102.409","1,638","11.15","23.5","16.11","60,189","4,514.953","28.32","\u2212200","16")},system:{latin:"Systema Solare",src:"https://nssdc.gsfc.nasa.gov/planetary/factsheet/",lede:mt("\u7D0446\u5104\u5E74\u524D\u306B\u30AC\u30B9\u3068\u3061\u308A\u306E\u5186\u76E4\u304B\u3089\u751F\u307E\u308C\u305F\u3002\u8CEA\u91CF\u306E99.86%\u3092\u592A\u967D\u304C\u5360\u3081\u30018\u3064\u306E\u60D1\u661F\u306F\u307B\u307C\u540C\u3058\u5E73\u9762\u3092\u540C\u3058\u5411\u304D\u306B\u56DE\u3063\u3066\u3044\u308B\u3002","Born about 4.6 billion years ago from a disc of gas and dust. The Sun holds 99.86% of the mass, and the eight planets orbit in nearly one plane, all in the same direction."),rows:[[mt("\u5E74\u9F62","Age"),"\u7D0446\u5104",mt(" \u5E74"," yr")],[mt("\u592A\u967D\u306E\u8CEA\u91CF\u306E\u5272\u5408","Share of mass in the Sun"),"99.86"," %"],[mt("\u60D1\u661F","Planets"),"8",""],[mt("\u6D77\u738B\u661F\u306E\u8ECC\u9053\u9577\u534A\u5F84","Neptune\u2019s semi-major axis"),"30.07"," AU"],[mt("\u6D77\u738B\u661F\u307E\u3067\u5149\u3067","Light time to Neptune"),"\u7D044\u6642\u959310\u5206",""],[mt("\u9280\u6CB3\u4E2D\u5FC3\u306E\u307E\u308F\u308A\u306E\u516C\u8EE2","Orbit around the Galactic Centre"),"\u7D042.3\u5104",mt(" \u5E74"," yr")]]}});sa.inner=sa.system;var w0={And:["\u30A2\u30F3\u30C9\u30ED\u30E1\u30C0\u5EA7","Andromeda"],Ant:["\u30DD\u30F3\u30D7\u5EA7","Antlia"],Aps:["\u3075\u3046\u3061\u3087\u3046\u5EA7","Apus"],Aqr:["\u307F\u305A\u304C\u3081\u5EA7","Aquarius"],Aql:["\u308F\u3057\u5EA7","Aquila"],Ara:["\u3055\u3044\u3060\u3093\u5EA7","Ara"],Ari:["\u304A\u3072\u3064\u3058\u5EA7","Aries"],Aur:["\u304E\u3087\u3057\u3083\u5EA7","Auriga"],Boo:["\u3046\u3057\u304B\u3044\u5EA7","Bo\xF6tes"],Cae:["\u3061\u3087\u3046\u3053\u304F\u3050\u5EA7","Caelum"],Cam:["\u304D\u308A\u3093\u5EA7","Camelopardalis"],Cnc:["\u304B\u306B\u5EA7","Cancer"],CVn:["\u308A\u3087\u3046\u3051\u3093\u5EA7","Canes Venatici"],CMa:["\u304A\u304A\u3044\u306C\u5EA7","Canis Major"],CMi:["\u3053\u3044\u306C\u5EA7","Canis Minor"],Cap:["\u3084\u304E\u5EA7","Capricornus"],Car:["\u308A\u3085\u3046\u3053\u3064\u5EA7","Carina"],Cas:["\u30AB\u30B7\u30AA\u30DA\u30E4\u5EA7","Cassiopeia"],Cen:["\u30B1\u30F3\u30BF\u30A6\u30EB\u30B9\u5EA7","Centaurus"],Cep:["\u30B1\u30D5\u30A7\u30A6\u30B9\u5EA7","Cepheus"],Cet:["\u304F\u3058\u3089\u5EA7","Cetus"],Cha:["\u30AB\u30E1\u30EC\u30AA\u30F3\u5EA7","Chamaeleon"],Cir:["\u30B3\u30F3\u30D1\u30B9\u5EA7","Circinus"],Col:["\u306F\u3068\u5EA7","Columba"],Com:["\u304B\u307F\u306E\u3051\u5EA7","Coma Berenices"],CrA:["\u307F\u306A\u307F\u306E\u304B\u3093\u3080\u308A\u5EA7","Corona Austrina"],CrB:["\u304B\u3093\u3080\u308A\u5EA7","Corona Borealis"],Crv:["\u304B\u3089\u3059\u5EA7","Corvus"],Crt:["\u30B3\u30C3\u30D7\u5EA7","Crater"],Cru:["\u307F\u306A\u307F\u3058\u3085\u3046\u3058\u5EA7","Crux"],Cyg:["\u306F\u304F\u3061\u3087\u3046\u5EA7","Cygnus"],Del:["\u3044\u308B\u304B\u5EA7","Delphinus"],Dor:["\u304B\u3058\u304D\u5EA7","Dorado"],Dra:["\u308A\u3085\u3046\u5EA7","Draco"],Equ:["\u3053\u3046\u307E\u5EA7","Equuleus"],Eri:["\u30A8\u30EA\u30C0\u30CC\u30B9\u5EA7","Eridanus"],For:["\u308D\u5EA7","Fornax"],Gem:["\u3075\u305F\u3054\u5EA7","Gemini"],Gru:["\u3064\u308B\u5EA7","Grus"],Her:["\u30D8\u30EB\u30AF\u30EC\u30B9\u5EA7","Hercules"],Hor:["\u3068\u3051\u3044\u5EA7","Horologium"],Hya:["\u3046\u307F\u3078\u3073\u5EA7","Hydra"],Hyi:["\u307F\u305A\u3078\u3073\u5EA7","Hydrus"],Ind:["\u30A4\u30F3\u30C7\u30A3\u30A2\u30F3\u5EA7","Indus"],Lac:["\u3068\u304B\u3052\u5EA7","Lacerta"],Leo:["\u3057\u3057\u5EA7","Leo"],LMi:["\u3053\u3058\u3057\u5EA7","Leo Minor"],Lep:["\u3046\u3055\u304E\u5EA7","Lepus"],Lib:["\u3066\u3093\u3073\u3093\u5EA7","Libra"],Lup:["\u304A\u304A\u304B\u307F\u5EA7","Lupus"],Lyn:["\u3084\u307E\u306D\u3053\u5EA7","Lynx"],Lyr:["\u3053\u3068\u5EA7","Lyra"],Men:["\u30C6\u30FC\u30D6\u30EB\u3055\u3093\u5EA7","Mensa"],Mic:["\u3051\u3093\u3073\u304D\u3087\u3046\u5EA7","Microscopium"],Mon:["\u3044\u3063\u304B\u304F\u3058\u3085\u3046\u5EA7","Monoceros"],Mus:["\u306F\u3048\u5EA7","Musca"],Nor:["\u3058\u3087\u3046\u304E\u5EA7","Norma"],Oct:["\u306F\u3061\u3076\u3093\u304E\u5EA7","Octans"],Oph:["\u3078\u3073\u3064\u304B\u3044\u5EA7","Ophiuchus"],Ori:["\u30AA\u30EA\u30AA\u30F3\u5EA7","Orion"],Pav:["\u304F\u3058\u3083\u304F\u5EA7","Pavo"],Peg:["\u30DA\u30AC\u30B9\u30B9\u5EA7","Pegasus"],Per:["\u30DA\u30EB\u30BB\u30A6\u30B9\u5EA7","Perseus"],Phe:["\u307B\u3046\u304A\u3046\u5EA7","Phoenix"],Pic:["\u304C\u304B\u5EA7","Pictor"],Psc:["\u3046\u304A\u5EA7","Pisces"],PsA:["\u307F\u306A\u307F\u306E\u3046\u304A\u5EA7","Piscis Austrinus"],Pup:["\u3068\u3082\u5EA7","Puppis"],Pyx:["\u3089\u3057\u3093\u3070\u3093\u5EA7","Pyxis"],Ret:["\u30EC\u30C1\u30AF\u30EB\u5EA7","Reticulum"],Sge:["\u3084\u5EA7","Sagitta"],Sgr:["\u3044\u3066\u5EA7","Sagittarius"],Sco:["\u3055\u305D\u308A\u5EA7","Scorpius"],Scl:["\u3061\u3087\u3046\u3053\u304F\u3057\u3064\u5EA7","Sculptor"],Sct:["\u305F\u3066\u5EA7","Scutum"],Ser:["\u3078\u3073\u5EA7","Serpens Cauda"],Sex:["\u308D\u304F\u3076\u3093\u304E\u5EA7","Sextans"],Tau:["\u304A\u3046\u3057\u5EA7","Taurus"],Tel:["\u307C\u3046\u3048\u3093\u304D\u3087\u3046\u5EA7","Telescopium"],Tri:["\u3055\u3093\u304B\u304F\u5EA7","Triangulum"],TrA:["\u307F\u306A\u307F\u306E\u3055\u3093\u304B\u304F\u5EA7","Triangulum Australe"],Tuc:["\u304D\u3087\u3057\u3061\u3087\u3046\u5EA7","Tucana"],UMa:["\u304A\u304A\u3050\u307E\u5EA7","Ursa Major"],UMi:["\u3053\u3050\u307E\u5EA7","Ursa Minor"],Vel:["\u307B\u5EA7","Vela"],Vir:["\u304A\u3068\u3081\u5EA7","Virgo"],Vol:["\u3068\u3073\u3046\u304A\u5EA7","Volans"],Vul:["\u3053\u304E\u3064\u306D\u5EA7","Vulpecula"]};var B0=6.378137,w3=1-1/298.257223563,z0=6.378137+.1,xm=1.7374,_h=695.7,vm=4e6,P0=299792.458;var bn={mercury:{r:2.4405,f:0,model:0,gain:.62,k:1,wrap:0,haze:[0,0,0],hz:0,hi:[4]},venus:{r:6.0518,f:0,model:1,gain:.78,k:.62,wrap:.06,haze:[1,.93,.78],hz:.035,hi:[4],clouds:4},mars:{r:3.3962,f:.00589,model:1,gain:.95,k:.86,wrap:.02,haze:[.55,.62,.85],hz:.05,hi:[4,8]},jupiter:{r:71.492,f:.06487,model:1,gain:1,k:.82,wrap:.03,haze:[.7,.72,.8],hz:.05,hi:[4]},saturn:{r:60.268,f:.09796,model:1,gain:1,k:.82,wrap:.03,haze:[.8,.75,.6],hz:.04,hi:[4],ring:[73.9,140]},uranus:{r:25.559,f:.02293,model:1,gain:1,k:.9,wrap:.03,haze:[.7,.9,.95],hz:.015,hi:[]},neptune:{r:24.764,f:.0171,model:1,gain:1,k:.9,wrap:.03,haze:[.6,.8,.95],hz:.015,hi:[]}},Qr={sun:_h,earth:B0,moon:xm,...Object.fromEntries(dn.map(n=>[n,bn[n].r]))},ym=["sun","mercury","venus","earth","moon","mars","jupiter","saturn","uranus","neptune"],la=document.getElementById("scene"),ui=new oc({canvas:la,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"}),hi=matchMedia("(pointer: coarse)").matches||innerWidth<720;ui.setPixelRatio(Math.min(devicePixelRatio,hi?1.5:2));ui.setSize(innerWidth,innerHeight);ui.toneMapping=xr;ui.toneMappingExposure=1;var T3=ui.capabilities.getMaxAnisotropy(),$n=new vo,pe=new Ke(45,innerWidth/innerHeight,1e-4,1e9);pe.position.set(0,0,60);var es={target:new I},Ai=new cc(pe,la);Ai.enableDamping=!0;Ai.dampingFactor=.06;Ai.rotateSpeed=.5;Ai.zoomSpeed=.9;Ai.enablePan=!1;var ca=new dc(ui,new He(innerWidth,innerHeight,{type:hn,samples:hi?2:4}));ca.addPass(new fc($n,pe));var fh=new Rr(new At(innerWidth,innerHeight),.6,.55,2.2);if(hi){let n=fh.setSize.bind(fh);fh.setSize=(t,e)=>n(Math.round(t/2),Math.round(e/2))}ca.addPass(fh);ca.addPass(new pc);var A3=new Ao,hh={total:0,done:0},yh=document.getElementById("loading"),R3=document.getElementById("loadbar"),C3=window.__SOL_ASSETS=window.__SOL_ASSETS||{};function Ne(n,t=!0,e=!0){e&&hh.total++;let i=C3[n]||n;return new Promise(s=>{let r=!1,o=a=>{r||(r=!0,e&&(hh.done++,R3.style.transform=`scaleX(${hh.done/Math.max(hh.total,1)})`),s(a))};setTimeout(()=>o(null),6e4),A3.load(i,a=>{a.colorSpace=t?en:Xn,a.anisotropy=T3,a.wrapS=rr,o(a)},void 0,()=>o(null))})}function k0(n){let t=document.querySelector("#loading span");t&&(t.textContent=n),yh.dataset.error="true"}addEventListener("error",n=>{yh.dataset.done!=="true"&&k0("\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F / Failed to start: "+(n.message||""))});addEventListener("unhandledrejection",n=>{yh.dataset.done!=="true"&&k0("\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F / Failed to start: "+(n.reason&&n.reason.message||n.reason||""))});var Mh=new Kn;$n.add(Mh);var T0=qp(),Mm=new le({uniforms:{uMap:{value:null},uGal:{value:new Vt().set(...T0[0],...T0[1],...T0[2])},uI:{value:.55}},vertexShader:sm,fragmentShader:rm,side:Xe,depthWrite:!1}),Sm=new be(new ti(vm,64,32),Mm);Sm.renderOrder=-20;Mh.add(Sm);function P3(n){let e=4600*(1/(.92*n+1.7)+1/(.92*n+.62))/100,i,s,r;e<=66?(i=255,s=99.4708*Math.log(e)-161.1196,r=e<=19?0:138.5177*Math.log(e-10)-305.0448):(i=329.699*Math.pow(e-60,-.1332),s=288.1222*Math.pow(e-60,-.0755),r=255);let o=[i,s,r].map(l=>Math.min(255,Math.max(0,l))/255),a=(o[0]+o[1]+o[2])/3;return o.map(l=>(a+(l-a)*.75)/Math.max(a,.3))}var bm=new le({uniforms:{uScale:{value:ui.getPixelRatio()},uK:{value:84}},vertexShader:nm,fragmentShader:im,transparent:!0,depthWrite:!1,blending:Vi});async function I3(){let n=new DataView(await(await fetch("stars.bin")).arrayBuffer()),t=n.byteLength/6,e=c=>[n.getUint16(c*6,!0)/65536*360,n.getInt16(c*6+2,!0)/32767*90,n.getUint8(c*6+4)/25-2,n.getUint8(c*6+5)/80-.5],i=new Float32Array(t*3),s=new Float32Array(t),r=new Float32Array(t*3),o=vm*.9;for(let c=0;c<t;c++){let[u,h,d,p]=e(c),g=u*Math.PI/180,_=h*Math.PI/180,m=Yn(Math.cos(_)*Math.cos(g),Math.cos(_)*Math.sin(g),Math.sin(_));i.set([m[0]*o,m[1]*o,m[2]*o],c*3),s[c]=d,r.set(P3(p),c*3)}let a=new Ge;a.setAttribute("position",new Fe(i,3)),a.setAttribute("aMag",new Fe(s,1)),a.setAttribute("aColor",new Fe(r,3));let l=new Mo(a,bm);return l.frustumCulled=!1,l.renderOrder=-10,Mh.add(l),t}var Te={uDay:{value:null},uNight:{value:null},uClouds:{value:null},uNormal:{value:null},uSpec:{value:null},uSunDir:{value:new I(1,0,0)},uNorth:{value:new I(0,1,0)},uSunI:{value:2.1},uNightI:{value:1.4},uCloudI:{value:.9}},Bs=new be(new ti(1,256,128),new le({uniforms:Te,vertexShader:Kr,fragmentShader:Jp}));Bs.matrixAutoUpdate=!1;Bs.frustumCulled=!1;$n.add(Bs);var Em={uSunDir:Te.uSunDir,uCenter:{value:new I},uRp:{value:B0},uRa:{value:z0},uSunI:{value:9}},eo=new be(new ti(z0,192,96),new le({uniforms:Em,vertexShader:Kr,fragmentShader:Kp,transparent:!0,depthWrite:!1,blending:Io,blendSrc:Do,blendDst:hs,side:kn}));eo.renderOrder=5;eo.frustumCulled=!1;$n.add(eo);var li={uMap:{value:null},uSunDir:{value:new I},uEarthDir:{value:new I},uSunI:{value:3.2},uEarthshine:{value:.01}},zs=new be(new ti(1,192,96),new le({uniforms:li,vertexShader:Kr,fragmentShader:jp}));zs.matrixAutoUpdate=!1;zs.frustumCulled=!1;$n.add(zs);var xh={value:null},Nn={};for(let n of dn){let t=bn[n],e={uMap:{value:null},uRingTex:xh,uSunPos:{value:new I},uSunI:{value:2},uGain:{value:t.gain},uModel:{value:t.model},uK:{value:t.k},uWrap:{value:t.wrap},uHaze:{value:new I(...t.haze)},uHazeI:{value:t.hz},uUOff:{value:0},uRing:{value:t.ring?1:0},uRingC:{value:new I},uRingN:{value:new I(0,1,0)},uRingR:{value:new At(...t.ring||[0,1])}},i=new be(new ti(1,160,80),new le({uniforms:e,vertexShader:Kr,fragmentShader:om}));i.matrixAutoUpdate=!1,i.frustumCulled=!1,i.visible=!1,$n.add(i);let s={mesh:i,u:e,res:0};if(t.ring){let r={uRingTex:xh,uRingR:{value:new At(...t.ring)},uSunPos:e.uSunPos,uSunI:{value:2},uC:{value:new I},uN:{value:new I},uRp:{value:t.r},uFlat:{value:t.f},uScale:{value:1}},o=new be(new Eo(t.ring[0],t.ring[1],360,1),new le({uniforms:r,vertexShader:am,fragmentShader:lm,side:Pn,transparent:!0,depthWrite:!1,blending:Io,blendSrc:Do,blendDst:hs}));o.matrixAutoUpdate=!1,o.frustumCulled=!1,o.visible=!1,o.renderOrder=6,$n.add(o),s.ring=o,s.ru=r}Nn[n]=s}var wm=-1,I0={uTime:{value:0},uI:{value:40}},Sh=new be(new ti(_h,128,64),new le({uniforms:I0,vertexShader:Kr,fragmentShader:Qp}));Sh.frustumCulled=!1;$n.add(Sh);var D0={uI:{value:1},uCore:{value:1},uSpike:{value:1}},ha=new be(new ms(2,2),new le({uniforms:D0,vertexShader:tm,fragmentShader:em,transparent:!0,depthWrite:!1,blending:Vi}));ha.renderOrder=10;ha.frustumCulled=!1;$n.add(ha);var V0=new Kn;$n.add(V0);var Us={},L0=null;function D3(){let n=new Date(zt.t);for(let t of[...dn,"earth"]){let e=new Ge;if(e.setAttribute("position",new Fe($p(t,n),3)),Us[t]){Us[t].geometry.dispose(),Us[t].geometry=e;continue}let i=new ps({color:9348296,transparent:!0,opacity:0,depthWrite:!1}),s=new pr(e,i);s.frustumCulled=!1,V0.add(s),Us[t]=s}L0=zt.t}var ts=null,U0=null;function L3(){let n=new Ge;n.setAttribute("position",new Fe(Zp(new Date(zt.t)),3)),ts?(ts.geometry.dispose(),ts.geometry=n):(ts=new pr(n,new ps({color:9348296,transparent:!0,opacity:0,depthWrite:!1})),ts.frustumCulled=!1,$n.add(ts)),U0=zt.t}var U3=[1,60,3600,86400,604800],zt={t:Date.now(),rate:1,dir:1,paused:!1,live:!0},we=ia(new Date(zt.t)),Ye=n=>new I(n[0],n[1],n[2]);function to(n){return n==="earth"||n==="earthmoon"?new I:Ye(n==="sun"||n==="system"||n==="inner"?we.sun:we.pos[n])}var Ns=n=>n.clone().sub(es.target);function A0(n,t,e=1,i){let s=new ve().makeBasis(Ye(n.P),Ye(n.N),Ye(n.Z));return s.scale(new I(t,t*e,t)),i&&s.setPosition(i),s}function Tm(){we=ia(new Date(zt.t));let n=Ns(Ye(we.sun)),t=Ye(we.moon),e=Ns(new I);Bs.matrix.copy(A0(we.earthFrame,B0,w3,e)),Bs.matrixWorldNeedsUpdate=!0,eo.position.copy(e),Em.uCenter.value.copy(e),Te.uSunDir.value.copy(Ye(we.sun)).normalize(),Te.uNorth.value.set(...we.earthFrame.N),zs.matrix.copy(A0(we.moonFrame,xm,1,Ns(t))),zs.matrixWorldNeedsUpdate=!0,li.uSunDir.value.copy(Ye(we.sun)).sub(t).normalize(),li.uEarthDir.value.copy(t).negate().normalize();let i=li.uSunDir.value.dot(li.uEarthDir.value);li.uEarthshine.value=.012*(1-i)/2+5e-4,Sh.position.copy(n),ha.position.copy(n);let s=(zt.t-946728e6)/864e5;for(let r of dn){let o=bn[r],a=Nn[r],l=we.frame[r],c=Ns(Ye(we.pos[r]));if(a.mesh.matrix.copy(A0(l,o.r,1-o.f,c)),a.mesh.matrixWorldNeedsUpdate=!0,a.u.uSunPos.value.copy(n),o.clouds){let u=1/o.clouds-.004114843640056522;a.u.uUOff.value=-wm*(s*u%1)}if(a.ring){let u=Ye(l.N),h=Ye(l.P),d=Ye(l.Z).negate(),p=new ve().makeBasis(h,d,u);p.setPosition(c),a.ring.matrix.copy(p),a.ring.matrixWorldNeedsUpdate=!0,a.ru.uC.value.copy(c),a.ru.uN.value.copy(u),a.u.uRingC.value.copy(c),a.u.uRingN.value.copy(u)}}(L0===null||Math.abs(zt.t-L0)>20*365.25*864e5)&&D3(),(U0===null||Math.abs(zt.t-U0)>2*864e5)&&L3(),V0.position.copy(n),ts.position.copy(e)}var N0={sun:2600,earth:22,moon:7.5,earthmoon:1100,system:125e5,inner:72e4};for(let n of dn)N0[n]=bn[n].ring?bn[n].ring[1]*2.7:bn[n].r*3.5;var hm={system:46e5,inner:25e4},ne="earth",Ue=null;function N3(n){if(n==="system"||n==="inner")return new I(.25,.62,.74).normalize();if(n==="earthmoon"){let r=Ye(we.moon).normalize();return new I(0,1,0).multiplyScalar(.55).add(r.clone().cross(new I(0,1,0)).normalize().multiplyScalar(.8)).normalize()}let t=to(n);if(n==="sun"){let r=pe.position.clone().normalize();return r.lengthSq()>0?r:new I(0,.3,1).normalize()}let e=Ye(we.sun).sub(t).normalize(),i=new I(0,1,0).cross(e).normalize(),s=e.clone().multiplyScalar(.62).add(i.multiplyScalar(.78)).add(new I(0,.2,0));if(bn[n]&&bn[n].ring){let r=Ye(we.frame[n].N),o=Math.sign(r.dot(e))||1;s.add(r.multiplyScalar(.45*o))}return s.normalize()}function Vs(n,t={}){if(!(n in N0))return;ne=n;let e=to(n),i=pe.position.clone(),s=e.distanceTo(es.target),r=t.dist||N0[n];hm[n]?r=hm[n]/Math.tan(pe.fov*Math.PI/360)/Math.min(1,pe.aspect)*1.08:r*=Math.max(1,(innerWidth>900?1.25:.85)/pe.aspect);let o=Math.max(i.length(),.001),a=s>3*Math.max(o,r),l=t.dur||(a?Math.min(5200,2600+700*Math.log10(s/Math.max(o,r))):2400);Ue={t0:performance.now(),dur:l,fromTarget:es.target.clone(),fromOff:i,dir:N3(n),dist:r,key:n,sep:s,far:a,d0:o};let c=Qr[n]||Qr.earth;Ai.minDistance=n in Qr?bn[n]&&bn[n].ring?c*1.15:c*1.08:z0*1.08,Ai.maxDistance=n==="sun"?2e5:n==="system"||n==="inner"?3e7:n==="earthmoon"?2e4:Math.max(c*400,3e3),z3(n),Hs(!0),gh(n),ci&&ci("peek")}var R0=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Ls=(n,t,e)=>{let i=Math.min(Math.max((e-n)/(t-n),0),1);return i*i*(3-2*i)};function C0(n,t,e){return Math.exp(Math.log(n)+(Math.log(t)-Math.log(n))*e)}var um=new nn;function F3(n){let t=to(ne);if(Ue){let e=Math.min((n-Ue.t0)/Ue.dur,1),i=R0(e),s,r;if(Ue.far){let l=Math.max(Ue.sep*.9,Ue.d0,Ue.dist);s=e<.5?C0(Ue.d0,l,R0(e*2)):C0(l,Ue.dist,R0(e*2-1)),r=Ls(.18,.82,e)}else s=C0(Ue.d0,Ue.dist,i),r=i;es.target.copy(Ue.fromTarget).lerp(t,r);let o=Ue.fromOff.clone().normalize();um.setFromUnitVectors(o,Ue.dir);let a=new nn().slerp(um,i);pe.position.copy(o.applyQuaternion(a).multiplyScalar(s)),e>=1&&(Ue=null,es.target.copy(t))}else es.target.copy(t);Ai.target.set(0,0,0)}var dm=new Co,ph=null;la.addEventListener("pointerdown",n=>{ph=[n.clientX,n.clientY],Lm()});la.addEventListener("pointerup",n=>{if(!ph||Math.hypot(n.clientX-ph[0],n.clientY-ph[1])>5)return;let t=new At(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1);dm.setFromCamera(t,pe);let e=null;for(let i of ym){let s=new Hn(Ns(to(i)),Qr[i]),r=dm.ray.intersectSphere(s,new I);if(r){let o=r.distanceTo(pe.position);(!e||o<e[1])&&(e=[i,o])}}e&&e[0]!==ne&&Vs(e[0])});la.addEventListener("wheel",Lm,{passive:!0});var H0={},O3=["sun","earth","jupiter","saturn","mars","venus","mercury","uranus","neptune","moon"];for(let n of ym){let t=document.createElement("button");t.className="label",t.type="button",t.dataset.key=n,t.innerHTML="<i></i><span></span>",t.addEventListener("click",()=>Vs(n)),document.getElementById("labels").appendChild(t),H0[n]=t}function B3(){let n=innerWidth,t=innerHeight,e=[],i=Math.tan(pe.fov*Math.PI/360),s=ne==="system"||ne==="inner",r=ne==="earthmoon"?null:s?"sun":ne,o=r?new Hn(Ns(to(r)),Qr[r]):null;for(let a of O3){let l=H0[a],c=Ns(to(a)),u=c.distanceTo(pe.position),h=Qr[a]/u/i*t/2,d=c.clone().project(pe),p=c.clone().applyMatrix4(pe.matrixWorldInverse).z<0,g=p&&d.z<1&&Math.abs(d.x)<1.05&&Math.abs(d.y)<1.05&&a!==ne;if(ne==="earthmoon"&&a==="earth"&&(g=p),s&&a==="moon"&&(g=!1),g&&o){let f=c.clone().sub(pe.position),E=f.length();f.divideScalar(E);let b=new Gn(pe.position,f).intersectSphere(o,new I);b&&b.distanceTo(pe.position)<E&&(g=!1)}let _=(d.x+1)/2*n,m=(1-d.y)/2*t;if(g){let f=[_-44,m-6,_+44,m+Math.max(h,3)+28];e.some(E=>f[0]<E[2]&&f[2]>E[0]&&f[1]<E[3]&&f[3]>E[1])?g=!1:e.push(f)}l.hidden=!g,g&&(l.lastChild.textContent=lt(a),l.classList.toggle("dot",h<3),l.classList.toggle("dim",!s&&ne!=="earthmoon"),l.style.transform=`translate(${_}px, ${m+(h<3?-4:Math.max(h,4)+6)}px) translateX(-50%)`)}}var Zt=n=>document.getElementById(n),$e="ja";try{$e=localStorage.getItem("sol.lang")||"ja"}catch{}document.documentElement.lang=$e;var Am=[["cap","groupAll"],["system","0"],["inner","9"],["cap","groupBodies"],["sun","S"],["mercury","1"],["venus","2"],["earth","3"],["moon","M"],["mars","4"],["jupiter","5"],["saturn","6"],["uranus","7"],["neptune","8"],["earthmoon","E"]],fm=Zt("rail");for(let[n,t]of Am){if(n==="cap"){let i=document.createElement("span");i.className="cap",i.dataset.t=t,fm.appendChild(i);continue}let e=document.createElement("button");e.type="button",e.dataset.focus=n,e.setAttribute("aria-pressed","false"),e.innerHTML=`<span class="k">${t}</span><span class="tick"></span><span data-t="${n}"></span>`,e.addEventListener("click",()=>Vs(n)),fm.appendChild(e)}function z3(n){document.querySelectorAll("[data-focus]").forEach(t=>{let e=t.dataset.focus===n;t.setAttribute("aria-pressed",e?"true":"false"),e&&hi&&t.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"})})}Zt("lang").addEventListener("click",()=>{$e=$e==="ja"?"en":"ja",document.documentElement.lang=$e;try{localStorage.setItem("sol.lang",$e)}catch{}Rm(),mh.key="",Hs(!0)});function Rm(){lt("sun",$e),document.querySelectorAll("[data-t]").forEach(n=>{n.textContent=lt(n.dataset.t,$e)}),Zt("lang").textContent=$e==="ja"?"EN":"\u65E5\u672C\u8A9E"}function G0(n){zt.rate=U3[n],zt.paused=!1,document.querySelectorAll("[data-rate]").forEach(t=>t.setAttribute("aria-pressed",String(+t.dataset.rate===n))),Zt("pause").setAttribute("aria-pressed","false")}document.querySelectorAll("[data-rate]").forEach(n=>n.addEventListener("click",()=>{G0(+n.dataset.rate),zt.live=!1}));Zt("pause").addEventListener("click",()=>{zt.paused=!zt.paused,zt.live=!1,Zt("pause").setAttribute("aria-pressed",String(zt.paused))});Zt("reverse").addEventListener("click",()=>{zt.dir*=-1,zt.live=!1,Zt("reverse").setAttribute("aria-pressed",String(zt.dir<0))});Zt("now").addEventListener("click",k3);function k3(){zt.t=Date.now(),zt.dir=1,zt.live=!0,G0(0),Zt("reverse").setAttribute("aria-pressed","false"),Hs(!0)}Zt("when").addEventListener("change",n=>{let t=n.target.value;if(!t)return;let e=new Date(t);isNaN(e)||(zt.t=e.getTime(),zt.live=!1,zt.paused=!0,Zt("pause").setAttribute("aria-pressed","true"),Hs(!0))});addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;let t=n.key.toUpperCase(),e=Am.find(([i,s])=>i!=="cap"&&s===t);e&&Vs(e[0]),n.key===" "&&(n.preventDefault(),Zt("pause").click())});var Cm=matchMedia("(max-width: 900px)"),Fs=Zt("panel"),ks=Zt("grip"),Os="peek",on=null;function bh(){let n=Fs.getBoundingClientRect().height,t=ks.getBoundingClientRect().height+(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sab"))||0);return{peek:n-t,half:Math.max(0,n-innerHeight*.52),full:0}}function ci(n,t=!0){if(!Cm.matches){Fs.style.transform="";return}Os=n,Fs.classList.toggle("anim",t),Fs.style.transform=`translateY(${bh()[n]}px)`,Fs.dataset.state=n,ks.setAttribute("aria-expanded",String(n!=="peek"))}ks.addEventListener("pointerdown",n=>{Cm.matches&&(on={y0:n.clientY,t0:performance.now(),base:bh()[Os],last:n.clientY,lt:performance.now(),v:0},ks.setPointerCapture(n.pointerId),Fs.classList.remove("anim"))});ks.addEventListener("pointermove",n=>{if(!on)return;let t=bh(),e=Math.min(Math.max(on.base+n.clientY-on.y0,t.full),t.peek),i=performance.now();on.v=(n.clientY-on.last)/Math.max(i-on.lt,1),on.last=n.clientY,on.lt=i,Fs.style.transform=`translateY(${e}px)`});ks.addEventListener("pointerup",n=>{if(!on)return;let t=Math.abs(n.clientY-on.y0),e=bh(),i=Math.min(Math.max(on.base+n.clientY-on.y0,e.full),e.peek),s=on.v;if(on=null,t<6){ci(Os==="peek"?"half":"peek");return}if(s<-.6){ci(Os==="peek"?"half":"full");return}if(s>.6){ci(Os==="full"?"half":"peek");return}let r=Object.entries(e).sort((o,a)=>Math.abs(o[1]-i)-Math.abs(a[1]-i))[0][0];ci(r)});ks.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),ci(Os==="peek"?"half":"peek"))});addEventListener("resize",()=>ci(Os,!1));var ce=(n,t=0)=>n.toLocaleString($e==="ja"?"ja-JP":"en-US",{maximumFractionDigits:t,minimumFractionDigits:t});function uh(n,t,e){return`${Math.abs(n).toFixed(2)}\xB0${n>=0?t:e}`}function F0(n,t){return new Intl.DateTimeFormat($e==="ja"?"ja-JP":"en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:t}).format(new Date(n))}function V3(n){return $e==="ja"?n>=1e8?`${ce(n/1e8,n>=1e9?1:2)}<small>\u5104km</small>`:n>=1e4?`${ce(n/1e4,0)}<small>\u4E07km</small>`:`${ce(n,0)}<small>km</small>`:n>=1e6?`${ce(n/1e6,n>=1e9?0:1)}<small>M km</small>`:`${ce(n,0)}<small>km</small>`}function H3(n){return n>=3600?`${Math.floor(n/3600)}<small>${lt("hr")}</small> ${Math.floor(n%3600/60)}<small>${lt("min")}</small>`:`${Math.floor(n/60)}<small>${lt("min")}</small> ${ce(n%60,0)}<small>${lt("sec")}</small>`}function G3(n){return lt("phases")[Math.round(n/45)%8]}var Pm=["mars","jupiter","saturn","uranus","neptune"],mh={key:"",html:""};function jr(n,t,e){return[n,t,e]}function W3(n,t){let e=Qi[n],i=[];if(Pm.includes(n)){let r=re.SearchRelativeLongitude(e,0,t);i.push(jr(lt("nextOpp"),r.date,lt("bestView")));let o=re.SearchRelativeLongitude(e,180,t);i.push(jr(lt("nextConj"),o.date,lt("hidden")))}else{let r=re.SearchMaxElongation(e,t);if(i.push(jr(lt("nextElong"),r.time.date,`${ce(r.elongation,1)}\xB0 ${r.visibility==="evening"?lt("east"):lt("west")}`)),n==="venus"){let a=re.SearchPeakMagnitude(e,t);i.push(jr(lt("nextPeak"),a.time.date,`${ce(a.mag,1)} ${lt("magU")}`))}let o=re.SearchRelativeLongitude(e,0,t);i.push(jr(lt("nextInfConj"),o.date,lt("hidden")))}let s=re.SearchPlanetApsis(e,t);return i.push(jr(s.kind===0?lt("nextPeri"):lt("nextAph"),s.time.date,`${ce(s.dist_au,3)} AU`)),i}function X3(n){let t=Math.floor(zt.t/864e5),e=n+t+$e;if(mh.key===e)return mh.html;let i=re.MakeTime(new Date(zt.t)),s=[];try{if(n==="moon"||n==="earth"){let o=re.SearchLunarEclipse(i);s.push([lt("nextLunar"),o.peak.date,lt("ecl_"+o.kind)]);let a=re.SearchMoonQuarter(i);s.push([lt("nextQuarter"),a.time.date,lt("phases")[a.quarter*2]])}if(n==="sun"||n==="earth"){let o=re.SearchGlobalSolarEclipse(i);s.push([lt("nextSolar"),o.peak.date,lt("ecl_"+o.kind)]);let a=new Date(zt.t).getUTCFullYear(),l=[];for(let u of[a,a+1]){let h=re.Seasons(u);l.push([h.mar_equinox,"marEq"],[h.jun_solstice,"junSol"],[h.sep_equinox,"sepEq"],[h.dec_solstice,"decSol"])}let c=l.find(([u])=>u.date.getTime()>zt.t);s.push([lt("nextSeason"),c[0].date,lt(c[1])])}if(dn.includes(n)&&(s=W3(n,i)),n==="system"||n==="inner"){let o=n==="inner"?["mercury","venus","mars"]:dn;for(let a of o)if(Pm.includes(a))s.push([`${lt(a)} \xB7 ${lt("nextOpp")}`,re.SearchRelativeLongitude(Qi[a],0,i).date,lt("bestView"),a]);else{let l=re.SearchMaxElongation(Qi[a],i);s.push([`${lt(a)} \xB7 ${lt("nextElong")}`,l.time.date,l.visibility==="evening"?lt("east"):lt("west"),a])}s.sort((a,l)=>a[1]-l[1]),s=s.slice(0,6)}}catch(o){console.warn(o)}let r=s.map(([o,a,l])=>`
    <li><button type="button" class="event" data-jump="${a.getTime()}">
      <span class="ev-label">${o}</span>
      <span class="ev-what">${l}</span>
      <span class="ev-date num">${F0(a.getTime(),"Asia/Tokyo").slice(0,16)} JST</span>
    </button></li>`).join("");return mh={key:e,html:r},r}Zt("panel").addEventListener("click",n=>{let t=n.target.closest("[data-go]");if(t){Vs(t.dataset.go);return}let e=n.target.closest("[data-jump]");e&&(zt.t=+e.dataset.jump-(dn.includes(ne)||ne==="system"||ne==="inner"?0:5400*1e3),zt.live=!1,zt.paused=!0,Zt("pause").setAttribute("aria-pressed","true"),document.querySelectorAll("[data-rate]").forEach(i=>i.setAttribute("aria-pressed","false")),Hs(!0),ci("peek"))});function q3(n){let t=re.MakeTime(new Date(zt.t)),e=Qi[n],i=re.GeoVector(e,t,!0),s=i.Length()*re.KM_PER_AU,r=re.HelioVector(e,t).Length(),o=re.Illumination(e,t),a=re.EquatorFromVector(i),l=re.Constellation(a.ra,a.dec),c=re.Elongation(e,t),u=2*Math.asin(bn[n].r*1e3/s)*180/Math.PI*3600,h=w0[l.symbol]?w0[l.symbol][$e==="ja"?0:1]:l.name,d=c.elongation<15?lt("nearSun"):c.elongation>150?lt("bestView"):c.visibility==="morning"?lt("morning"):lt("evening"),p=[[lt("distEarth"),V3(s)],[lt("lightFromEarth"),H3(s/P0)],[lt("distSunAU"),`${ce(r,3)}<small>AU</small>`],[lt("mag"),`${o.mag<0?"\u2212":""}${ce(Math.abs(o.mag),1)}<small>${lt("magU")}</small>`],[lt("inCon"),h],[lt("appDiam"),`${ce(u,1)}<small>\u2033</small>`],[lt("elong"),`${ce(c.elongation,0)}\xB0<small>${d}</small>`]];return n==="saturn"?p.push([lt("ringTilt"),`${ce(Math.abs(o.ring_tilt),1)}<small>\xB0</small>`]):["jupiter","uranus","neptune"].includes(n)?p.push([lt("phaseAngle"),`${ce(o.phase_angle,1)}<small>\xB0</small>`]):p.push([lt("illum"),`${ce(o.phase_fraction*100,1)}<small>%</small>`]),p}function Y3(n){let t=Math.hypot(...we.sun)*1e3,e=Math.hypot(...we.moon)*1e3,i=[];if(n==="earth"||n==="earthmoon"){let s=we.sun.map(o=>o/(t/1e3)),r=Yp(we.earthFrame,s);i.push([lt("distSun"),`${ce(t/1e6,3)}<small>${lt("mkm")}</small>`]),i.push([lt("lightTime"),`${Math.floor(t/P0/60)}<small>${lt("min")}</small> ${ce(t/P0%60,1)}<small>${lt("sec")}</small>`]),i.push([lt("distMoon"),`${ce(e,0)}<small>km</small>`]),i.push([lt("subsolar"),`${uh(r.lat,"N","S")} ${uh(r.lon,"E","W")}`])}else if(n==="moon"){let s=re.Illumination(re.Body.Moon,re.MakeTime(new Date(zt.t))),r=re.MoonPhase(new Date(zt.t));i.push([lt("distEarth"),`${ce(e,0)}<small>km</small>`]),i.push([lt("phase"),`${G3(r)} \xB7 ${ce(r/360*29.530589,1)}<small>${lt("days")}</small>`]),i.push([lt("illum"),`${ce(s.phase_fraction*100,1)}<small>%</small>`]);let o=re.Libration(new Date(zt.t));i.push([lt("libration"),`${uh(o.elat,"N","S")} ${uh(o.elon,"E","W")}`])}else if(n==="sun"){let s=2*Math.asin(695700/t)*180/Math.PI*60,r=re.SunPosition(re.MakeTime(new Date(zt.t)));i.push([lt("distEarth"),`${ce(t/1e6,3)}<small>${lt("mkm")}</small>`]),i.push([lt("au"),`${ce(t/1495978707e-1,6)}<small>AU</small>`]),i.push([lt("angDiam"),`${ce(s,2)}<small>\u2032</small>`]),i.push([lt("eclLon"),`${ce(r.elon,3)}<small>\xB0</small>`])}else if(dn.includes(n))i=q3(n);else if(n==="system"||n==="inner")return(n==="inner"?["mercury","venus","earth","mars"]:["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"]).map(r=>{let o=r==="earth"?t/1495978707e-1:Math.hypot(...we.helio[r])*1e3/1495978707e-1,a=r==="earth"?null:Math.hypot(...we.pos[r])*1e3/1495978707e-1;return`<button type="button" class="ro go" data-go="${r}"><dt>${lt(r)}</dt><dd class="num">${ce(o,2)}<small>AU</small>${a!==null?`<small class="sub">${lt("fromEarth")} ${ce(a,2)}</small>`:""}</dd></button>`}).join("");return i.map(([s,r])=>`<div class="ro"><dt>${s}</dt><dd class="num">${r}</dd></div>`).join("")}var pm=0;function Hs(n){let t=ne==="earthmoon"?"earth":ne,e=sa[t];if(n){Zt("p-kicker").textContent=lt("kicker_"+t),Zt("p-name").textContent=lt(t),Zt("p-name-m").textContent=lt(t),Zt("p-latin").textContent=e.latin,Zt("p-lede").textContent=e.lede[$e],Zt("p-facts").innerHTML=e.rows.map(s=>{var r;return`<div class="fr"><dt>${s[0][$e]}</dt><dd class="num">${s[1]}<small>${s[2]?(r=s[2][$e])!=null?r:s[2]:""}</small></dd></div>`}).join(""),Zt("p-source").innerHTML=`${lt("source")}: <a href="${e.src}" target="_blank" rel="noopener">NASA NSSDCA ${lt("factsheet")}</a>`,Zt("live-h").textContent=t==="system"||t==="inner"?lt("planetsNow"):lt("liveNow"),Zt("p-live").classList.toggle("list",t==="system"||t==="inner");let i=Zt("p-zenith");i.hidden=!(dn.includes(t)||t==="moon"),i.textContent=lt("zenith")+" \u2192",$3()}mm(Zt("p-live"),Y3(ne)),mm(Zt("p-events"),X3(t))}function mm(n,t){n._html!==t&&(n._html=t,n.innerHTML=t)}function $3(){let n=ne==="earthmoon"?"earth":ne;Zt("peek").innerHTML=`<b>${lt(ne)}</b><span>${lt("kicker_"+n)}</span>`}function Z3(){Zt("clock-jst").textContent=F0(zt.t,"Asia/Tokyo"),Zt("clock-utc").textContent=F0(zt.t,"UTC")+" UTC",Zt("live-dot").dataset.live=String(zt.live&&Math.abs(zt.t-Date.now())<2e3)}function fn(n,t){let e=n.value;n.value=t,e&&e!==t&&e.dispose()}var En={earth:2,moon:2},dh=new Map,J3=n=>!hi||ne===n;function O0(n,t){let e=n+t;if(dh.has(e))return dh.get(e);let i=Ne(`tex/planets/${n}_${t}k.jpg`,!0,!1).then(s=>{if(dh.delete(e),!!s){if(!J3(n)||(En[n]||0)>=t){s.dispose();return}fn(Nn[n].u.uMap,s),En[n]=t,Nn[n].mesh.visible=!0,Nn[n].ring&&xh.value&&(Nn[n].ring.visible=!0),ne===n&&(Zt("res").textContent=t+"K")}});return dh.set(e,i),i}function K3(n){En[n]&&(fn(Nn[n].u.uMap,null),En[n]=0,Nn[n].mesh.visible=!1,Nn[n].ring&&(Nn[n].ring.visible=!1))}var ra=null;function Im(){return ra||(ra=Ne("tex/planets/saturn_ring.png",!0,!1).then(n=>{if(!n){ra=null;return}n.wrapS=Jn,n.anisotropy=1,n.needsUpdate=!0,xh.value=n,Nn.saturn.mesh.visible&&(Nn.saturn.ring.visible=!0)}),ra)}var vh=["earth","moon","earthmoon"],aa=!0,oa=null;function Dm(){if(aa){for(let n of[Te.uDay,Te.uNight,Te.uClouds,Te.uNormal,Te.uSpec,li.uMap])fn(n,null);Bs.visible=eo.visible=zs.visible=!1,aa=!1,En.earth=En.moon=0}}function j3(){if(aa||oa)return oa;let n=W0?"4k":"2k";return oa=Promise.all([Ne(`tex/earth_day_${n}.jpg`,!0,!1),Ne(`tex/earth_night_${n}.jpg`,!0,!1),Ne(`tex/earth_clouds_${n}.jpg`,!1,!1),Ne("tex/earth_normal_2k.jpg",!1,!1),Ne("tex/earth_spec_2k.jpg",!1,!1),Ne(`tex/moon_${n}.jpg`,!0,!1)]).then(([t,e,i,s,r,o])=>{if(oa=null,!vh.includes(ne)){for(let a of[t,e,i,s,r,o])a&&a.dispose();return}fn(Te.uDay,t),fn(Te.uNight,e),fn(Te.uClouds,i),fn(Te.uNormal,s),fn(Te.uSpec,r),fn(li.uMap,o),Bs.visible=eo.visible=zs.visible=!0,aa=!0,En.earth=En.moon=n==="4k"?4:2,vh.includes(ne)&&(Zt("res").textContent=En.earth+"K")}),oa}var W0=!1;function gh(n){let t=n==="earthmoon"?"earth":n;if(hi){for(let e of dn)e!==t&&K3(e);vh.includes(n)?j3():W0&&Dm()}if(bn[t]){t==="saturn"&&Im();let e=bn[t].hi.filter(i=>i<=(hi?4:8));O0(t,2).then(()=>{for(let i of e)ne===t&&O0(t,i)})}Zt("res").textContent=(En[t]||2)+"K"}var gm=!0;function Lm(){gm&&Ue&&(Ue.dur=Math.min(Ue.dur,performance.now()-Ue.t0+600)),gm=!1}async function Q3(){Rm();{let c=ia(new Date).frame.venus,u=new Date(Date.now()+864e5),d=ia(u).frame.venus.P.map((g,_)=>g-c.P[_]),p=[c.N[1]*c.P[2]-c.N[2]*c.P[1],c.N[2]*c.P[0]-c.N[0]*c.P[2],c.N[0]*c.P[1]-c.N[1]*c.P[0]];wm=Math.sign(d[0]*p[0]+d[1]*p[1]+d[2]*p[2])||-1}let[n,t,e,i,s,r,o]=await Promise.all([Ne("tex/milkyway_4k.jpg"),Ne("tex/earth_day_2k.jpg"),Ne("tex/earth_night_2k.jpg"),Ne("tex/earth_clouds_2k.jpg",!1),Ne("tex/earth_normal_2k.jpg",!1),Ne("tex/earth_spec_2k.jpg",!1),Ne("tex/moon_2k.jpg")]);Mm.uniforms.uMap.value=n,Te.uDay.value=t,Te.uNight.value=e,Te.uClouds.value=i,Te.uNormal.value=s,Te.uSpec.value=r,li.uMap.value=o;let a=0;try{a=await I3()}catch(c){console.warn("stars",c)}Zt("star-count").textContent=ce(a),Tm();let l=Ye(we.sun).normalize();pe.position.copy(l.clone().multiplyScalar(-400).add(new I(0,260,0)).applyAxisAngle(new I(0,1,0),1.2)),es.target.set(0,0,0),Vs("earth",{dur:5200}),Hs(!0),yh.dataset.done="true",ci("peek",!1),requestAnimationFrame(Um),setTimeout(async()=>{hi||(Im(),await Promise.all(dn.map(p=>O0(p,2)))),gh(ne);let[c,u,h,d]=await Promise.all([Ne("tex/earth_day_4k.jpg",!0,!1),Ne("tex/earth_night_4k.jpg",!0,!1),Ne("tex/earth_clouds_4k.jpg",!1,!1),Ne("tex/moon_4k.jpg",!0,!1)]);if(W0=!0,hi&&!vh.includes(ne)){for(let p of[c,u,h,d])p&&p.dispose();Dm(),gh(ne);return}if(!aa){for(let p of[c,u,h,d])p&&p.dispose();return}if(c&&(fn(Te.uDay,c),En.earth=4),u&&fn(Te.uNight,u),h&&fn(Te.uClouds,h),d&&(fn(li.uMap,d),En.moon=4),!hi){let p=await Ne("tex/earth_day_8k.jpg",!0,!1);p&&(fn(Te.uDay,p),En.earth=8)}gh(ne)},600)}var _m=performance.now();function Um(n){let t=Math.min(n-_m,100);_m=n,zt.live?zt.t=Date.now():zt.paused||(zt.t+=t*zt.rate*zt.dir),F3(n),Ai.update(),Tm(),Mh.position.copy(pe.position);let e=Sh.position,i=pe.position.distanceTo(e),s=Ls(3e4,1e6,i);ha.scale.setScalar(Math.max(i*Wi.lerp(.16,.035,s),_h*6));let r=Math.asin(Math.min(_h/i,1))*180/Math.PI,o=Wi.smoothstep(r,.6,6);I0.uI.value=Wi.lerp(40,2.4,o);let a=pe.position.length(),l=Ls(3e4,6e5,i);D0.uI.value=Wi.lerp(1,.1,o)*(1-.55*l),D0.uSpike.value=(1-o)*(1-l),I0.uTime.value=n/1e3;let c=Ls(4e3,6e4,a)*.42;for(let u in Us){let h=u===ne||ne==="earthmoon"&&u==="earth";Us[u].material.opacity=h?Math.max(c,Ls(2e3,2e4,a)*.6):c,Us[u].material.color.setHex(h?16760691:9348296)}ts.material.opacity=ne==="earthmoon"||ne==="moon"||ne==="earth"?Ls(60,500,a)*(1-Ls(2e4,1e5,a))*.5:0,B3(),n-pm>250&&(Hs(!1),Z3(),pm=n),ca.render(),requestAnimationFrame(Um)}function Nm(){innerWidth<=900&&innerHeight>innerWidth?pe.setViewOffset(innerWidth,innerHeight,0,Math.round(innerHeight*.055),innerWidth,innerHeight):innerWidth>900?pe.setViewOffset(innerWidth,innerHeight,Math.round(Math.min(innerWidth*.07,120)),0,innerWidth,innerHeight):pe.clearViewOffset()}Nm();addEventListener("resize",()=>{pe.aspect=innerWidth/innerHeight,Nm(),pe.updateProjectionMatrix(),ui.setSize(innerWidth,innerHeight),ca.setSize(innerWidth,innerHeight),bm.uniforms.uScale.value=ui.getPixelRatio()});G0(0);window.__sol={renderer:ui,get st(){return we},W:es,camera:pe,get focus(){return ne},labels:H0,flyTo:Vs};Q3().catch(n=>k0("\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F / Failed to start: "+(n&&n.message||n)));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

astronomy-engine/esm/astronomy.js:
  (**
      @preserve
  
      Astronomy library for JavaScript (browser and Node.js).
      https://github.com/cosinekitty/astronomy
  
      MIT License
  
      Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>
  
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
  
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
  
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
  *)
  (**
   * @fileoverview Astronomy calculation library for browser scripting and Node.js.
   * @author Don Cross <cosinekitty@gmail.com>
   * @license MIT
   *)
*/

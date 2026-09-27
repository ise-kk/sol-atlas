# Sol Atlas — 太陽系

太陽・8つの惑星・月を、いまの本当の配置で3Dで見られるウェブアプリです。
時間を進めたり戻したりすると、惑星の位置・自転・満ち欠け・土星の環の傾きが実際の軌道計算どおりに動きます。
GitHub Pages（無料）で公開し、スマホのホーム画面に追加してアプリのように使えます。

姉妹アプリ: [Zenith — 今夜の空](https://ise-kk.github.io/zenith/)

## できること

- 太陽・水星・金星・地球・月・火星・木星・土星・天王星・海王星を選んで、カメラで飛んでいく
- 「太陽系」「内側の惑星」ビュー：いまの惑星の位置と軌道を上から見る
- 惑星ごとの「いま」：地球からの距離、光の到達時間、明るさ（等級）、いる星座、太陽からの離角、輝面比／環の傾き
- 次に起きること：衝・合・最大離角・近日点など（押すとその時刻へ移動）
- 地球：昼夜の境界、街の明かり、大気、太陽直下点／月：秤動と満ち欠け／日食・月食の予報
- ホーム画面に追加すると、一度見たデータは電波のない場所でも表示

## 正確さについて

- 位置と自転軸: Astronomy Engine（VSOP87・IAU自転モデル）。表示位置は光の到達時間を含まない瞬間の幾何学的位置です（見かけの位置との差は最大約1′）。
- 大きさ・扁平率: NASA NSSDCA ファクトシート。距離と大きさはどちらも実寸（カメラが近づいて見せています）。
- 惑星の表面の模様は探査機画像の合成で、木星の大赤斑や雲の位置はいまの姿ではありません。海王星の色は最新の再解析（2024年）に合わせて淡い青緑に補正しています。

## ファイル

`index.html` `app.js`（ビルド済み）`stars.txt`（恒星カタログ）`tex/`（テクスチャ）`sw.js` `manifest.webmanifest` `icons/`。ソースは `src/`。

## クレジット

- 天体暦: Astronomy Engine (MIT) / 3D: three.js (MIT)
- 恒星: HYG Database v4.1 (CC BY-SA 4.0)
- テクスチャ: Solar System Scope (https://www.solarsystemscope.com/textures/, CC BY 4.0; NASA MESSENGER, Viking, Cassini, Hubble 等のデータに基づく)、月: NASA LRO/LROC
- 惑星データ: NASA NSSDCA Planetary Fact Sheets / 衛星の数: IAU Minor Planet Center（2026年3月時点）

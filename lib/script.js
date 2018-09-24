var phina = require('phina.js');

// グローバルに展開
phina.globalize();
/*
 * メインシーン
 */
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function() {
    // 親クラス初期化
    this.superInit();
    // 背景色
    this.backgroundColor = 'black';
    // 以下にコードを書いていく
  },
  // 毎フレーム更新処理
  update: function() {
    // 以下にコードを書いていく  
  },
});
/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    // MainScene から開始
    startLabel: 'main',
    domElement: document.getElementById("phinaCanvas"),
    width:960,
    height:480,
    fit: false
  });
  // fps表示
  //app.enableStats();
  // 実行
  let s = app.canvas.domElement.style;
  s.width = "100%";
  s.height = "100%";
  app.run();
});
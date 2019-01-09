var phina = require('phina.js');
let ASSETS = require('./assets/object').ASSETS;
let scene = require('./scene/main').scene;
// グローバルに展開
phina.globalize();


/*
 * メインシーン
 */

scene();
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
    fit: true,
    assets: ASSETS,
  });
  // fps表示
  //app.enableStats();
  // 実行
  let s = app.canvas.domElement.style;
  s.width = "auto";
  s.height = "100%";
  app.run();
});
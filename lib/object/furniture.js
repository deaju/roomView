let touchAction = require('../event/test').touchAction;
var phina = require('phina.js');

exports.furniture = ()=>{
  phina.define("Furniture",{
    // Spriteクラスを継承
    superClass: 'Sprite',
    // コンストラクタ
    init: function() {
      // 親クラス初期化
      this.superInit('bird');
    },
  });
}

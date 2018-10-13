let touchAction = require('../event/test').touchAction;


exports.object =  ()=>{
  phina.define("Tomapiko",{
    // Spriteクラスを継承
    superClass: 'Sprite',
    // コンストラクタ
    init: function() {
      // 親クラス初期化
      this.superInit('tomapiko');
      this.vx = -2;
      this.vy = -2;
      this.update = function() {
        // 移動
        this.x += this.vx;
        this.y += this.vy;
        // 画面端との判定
        if (this.left < 0 || 640 < this.right ) {
          // 速度を反転する
          this.vx *= -1;
        }
        if ( this.top <0 || this.bottom > 640) {
          // 速度を反転する
          this.vy *= -1;
        }
      }
    }
  });
}
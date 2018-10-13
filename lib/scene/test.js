let touchAction = require('../event/test').touchAction;
let object = require('../object/test').object;

exports.scene = ()=>{
  phina.define("MainScene", {
    // 継承
    superClass: 'DisplayScene',
    // 初期化
    init: function(option) {
      // 親クラス初期化
      this.superInit(option);
      // 背景色
      this.backgroundColor = 'skyblue';
      // スプライト画像作成
      this.sprite = Tomapiko().addChildTo(this);
      this.sprite2 = Tomapiko().addChildTo(this);
      
      this.sprite.x = this.gridX.center();
      this.sprite.y = this.gridY.center();
  
      this.sprite2.x = 10;
      this.sprite2.y = 10;
  
      this.sprite.setInteractive(true);
      this.sprite2.setInteractive(true);
      //this.onpointstart = (e)=> touchAction(e,sprite);
      this.sprite.on('pointmove', function(e) {
        this.x += e.pointer.dx;
        this.y += e.pointer.dy;
      })
      this.sprite2.on('pointmove', function(e) {
        this.x += e.pointer.dx;
        this.y += e.pointer.dy;
      })
    },
    // 毎フレーム更新処理
    update: function() {
      if(Collision.testRectRect(this.sprite,this.sprite2) ){
        this.sprite.vx *=-1;
        this.sprite2.vx *=-1;
      }
    },
  });
  
  object();
}
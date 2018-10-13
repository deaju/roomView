let touchAction = require('../event/test').touchAction;

const GO = 180;
const STOP = 60;

exports.character = ()=>{
  phina.define("Tomapiko",{
    // Spriteクラスを継承
    superClass: 'Sprite',
    // コンストラクタ
    init: function() {
      // 親クラス初期化
      this.superInit('tomapiko',64, 64);
      this.speed = 3;
      this.go = true;
      this.touch = false;
      setDirection(this,"downright");
      let count=0;
      this.update = function() {
        if(!this.touch && this.go && count < GO){
          // 移動
          this.x += this.vx;
          this.y += this.vy;
          // 画面端との判定
          checkEndScreen(this);
        }else if(count >= GO+STOP){
          count = 0;
        }
        count++;
      }
    },
    update:()=>{
      
    }
  });
}
function setDirection(ob,direction){
  switch(direction){
    case "upright":
      ob.vx = -ob.speed;
      ob.vy = -ob.speed;
      return;
    case "upleft":
      ob.vx = ob.speed;
      ob.vy = -ob.speed;
      return;
    case "downright":
      ob.vx = -ob.speed;
      ob.vy = ob.speed;
      return;
    case "downleft":
      ob.vx = ob.speed;
      ob.vy = ob.speed;
      return;
    default:
      return;
  }
}

function checkEndScreen(ob){
  if (ob.left < 0 || 640 < ob.right ) {
    // 速度を反転する
    ob.accessories.each((accessory)=>{
      if(ob.vx > 0){
        accessory.gotoAndPlay('walkleft');
      } else {
        accessory.gotoAndPlay('walkright');
      }
    });
    ob.vx *= -1;
  }
  if ( ob.top <0 || ob.bottom > 300) {
    // 速度を反転する
    ob.vy *= -1;
  }
}
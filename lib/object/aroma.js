let touchAction = require('../event/test').touchAction;

const GO = 30;

exports.character = ()=>{
  phina.define("Aroma",{
    // Spriteクラスを継承
    superClass: 'Sprite',
    // コンストラクタ
    init: function() {
      // 親クラス初期化
      this.superInit('aroma',164, 128);
      this.go = true;
      this.touch = false;
      this.scaleX = 0.7;
      this.scaleY = 0.7;
      this.fieldX=0;
      this.fieldY=0;
      this.isStart = false;
      let count=0;
      this.update = function() {
        if(!this.isStart){
          return;
        }

        if(!this.touch && this.go && count < GO){
          // 移動
          this.x += this.vx;
          this.y += this.vy;
          // 画面端との判定
          checkEndScreen(this);
          setAnimation(this);
          count++;
        }else{
          count=0;
          this.go=false;
        }
      }
    },
    setDirection:function(direction){
      switch(direction){
        case "upright":
          this.vx = this.eX[0]/GO;
          this.vy = this.eX[1]/GO;
          this.fieldX+=1;
          return;
        case "upleft":
          this.vx = this.eY[0]/GO;
          this.vy = this.eY[1]/GO;
          this.fieldY+=1;
          return;
        case "downright":
          this.vx = -this.eY[0]/GO;
          this.vy = -this.eY[1]/GO;
          this.fieldY-=1;
          return;
        case "downleft":
          this.vx = -this.eX[0]/GO;
          this.vy = -this.eX[1]/GO;
          this.fieldX-=1;
          return;
        case "stop":
          this.vx = 0;
          this.vy = 0;
        default:
          return;
      }
    }
  });
}

function checkEndScreen(ob){
  if (ob.left < 0 || ob.right > 960 ) {
    // 速度を反転する
    ob.vx *= -1;
  }
  if ( ob.top <0 || ob.bottom > 480) {
    // 速度を反転する
    ob.vy *= -1;
  }
}
function setAnimation(ob){
  ob.accessories.each((accessory)=>{
    if(ob.vx > 0){
      accessory.gotoAndPlay('walkright');
    } else if(ob.vx < 0){
      accessory.gotoAndPlay('walkleft');
    } else {
      accessory.gotoAndPlay('stop');
    }
  });
}
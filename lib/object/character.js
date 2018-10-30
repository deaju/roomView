let touchAction = require('../event/test').touchAction;

const GO = 60;

exports.character = ()=>{
  phina.define("Character",{
    // Spriteクラスを継承
    superClass: 'Sprite',
    // コンストラクタ
    init: function(imgName) {
      // 親クラス初期化
      this.superInit(imgName,64, 64);
      this.go = true;
      this.touch = false;
      this.scaleX = 0.7;
      this.scaleY = 0.7;
      this.fieldX=0;
      this.fieldY=0;
      this.isStart = false;
      this.beforeAction = undefined;
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
          if(this.scaleX > 0){
            this.scaleX *= -1;
          }
          this.fieldX+=1;
          return;
        case "upleft":
          this.vx = this.eY[0]/GO;
          this.vy = this.eY[1]/GO;
          if(this.scaleX <= 0){
            this.scaleX *= -1;
          }
          this.fieldY+=1;
          return;
        case "downright":
          this.vx = -this.eY[0]/GO;
          this.vy = -this.eY[1]/GO;
          if(this.scaleX > 0){
            this.scaleX *= -1;
          }
          this.fieldY-=1;
          return;
        case "downleft":
          this.vx = -this.eX[0]/GO;
          this.vy = -this.eX[1]/GO;
          if(this.scaleX < 0){
            this.scaleX *= -1;
          }
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
    if(ob.vx === 0){
      accessory.gotoAndPlay('stop');
    }
  });
}
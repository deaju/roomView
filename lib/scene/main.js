let touchAction = require('../event/test').touchAction;
let character = require('../object/character').character;
let furniture = require('../object/furniture').furniture;

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
      this.characters = [];
      this.furnitures = [];
      let sprite = Tomapiko().addChildTo(this);
      anim = FrameAnimation('tomapiko_ss').attachTo(sprite);
      anim.gotoAndPlay('walkleft');
      let furniture = Furniture().addChildTo(this);
      //this.sprite2 = Tomapiko().addChildTo(this);
      sprite.x = this.gridX.center();
      sprite.y = this.gridY.center();
      furniture.x = this.gridX.center()-100;
      furniture.y = this.gridY.center()-100;
  
  
      sprite.setInteractive(true);
      furniture.setInteractive(true);
      //this.onpointstart = (e)=> touchAction(e,sprite);
      sprite.on('pointstart', function(e) {
        this.touch=true;
      });
      sprite.on('pointmove', function(e) {
        this.x += e.pointer.dx;
        this.y += e.pointer.dy;
      });
      sprite.on('pointend', function(e) {
        this.touch=false;
      });
      furniture.on('pointmove', function(e) {
        this.x += e.pointer.dx;
        this.y += e.pointer.dy;
      });
      this.characters.push(sprite);
      this.furnitures.push(furniture);
    },
    // 毎フレーム更新処理
    update: function() {
      this.characters.each((character)=>{
        this.furnitures.each((furniture)=>{
          if(Collision.testRectRect(character,furniture) ){
            character.go = false;
          } else {
            character.go = true;
          }
        });
      });
    },
  });
  furniture();
  character();
}
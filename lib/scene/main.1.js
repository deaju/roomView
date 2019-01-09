let touchAction = require('../event/test').touchAction;
let character = require('../object/character').character;
let furniture = require('../object/furniture').furniture;
let field = require('../object/field').field;
let math = require('mathjs');
const MAX_FIELD=16;

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
      this.fieldScene = Field().addChildTo(this);
      this.fieldScene.x = this.gridX.center();
      this.fieldScene.y = this.gridY.center();
      this.fieldScene.setInteractive(true);
      let origin = [ 480, 480 ];
      let v1 = [ 800, 240 ];
      let v2 = [ 160, 240 ];
      e1=calcEVec(origin,v1,MAX_FIELD);
      e2=calcEVec(origin,v2,MAX_FIELD);
      this.fieldScene.grid = createGrid(origin,e1,e2,MAX_FIELD);

      let sprite = Aroma().addChildTo(this);
      anim = FrameAnimation('aroma_ss').attachTo(sprite);
      anim.gotoAndPlay('walkleft');
      sprite.setInteractive(true);
      sprite.x = this.fieldScene.grid[1][2][0];
      sprite.y = this.fieldScene.grid[1][2][1];
      sprite.eX = e1;
      sprite.eY = e2;
      var pointGroup = DisplayElement().addChildTo(this);
      var grid = this.fieldScene.grid;
      sprite.on('pointstart', function(e) {
        this.touch=true;
        (17).times((spanX)=> {
          (17).times((spanY)=> {
            var point = CircleShape({
              radius: 2,
              fill: '#aaa',
            }).addChildTo(pointGroup).setPosition(grid[spanX][spanY][0], grid[spanX][spanY][1]);
          });
        });
      });
      sprite.on('pointmove', function(e) {
        this.x += e.pointer.dx;
        this.y += e.pointer.dy;
      });
      sprite.on('pointend', function(e) {
        this.touch=false;
        pointGroup.remove();
      });
      this.characters.push(sprite);

      let furniture = Furniture().addChildTo(this);

      furniture.x = this.gridX.center();
      furniture.y = this.gridY.center();
  
      //this.onpointstart = (e)=> touchAction(e,sprite);
      furniture.setInteractive(true);
      furniture.on('pointmove', function(e) {
        this.x += e.pointer.dx;
        this.y += e.pointer.dy;
      });
      this.furnitures.push(furniture);
      sprite.setDirection("upright");
      sprite.isStart = true;
      sprite.field = this.fieldScene;
      this.character = sprite;
    },
    // 毎フレーム更新処理
    update: function() {
      if(!character.touch && this.character.go === false){
        let direction = this.fieldScene.getAction(this.character);
        this.character.setDirection(direction);
        this.character.go = true;
      }
      this.characters.each((character)=>{
        this.furnitures.each((furniture)=>{
          if(Collision.testRectRect(character,furniture) ){
            character.touch = true;
          } else {
          }
        });
      });
    },
  });
  furniture();
  character();
  field();
}

function createGrid(origin,e1,e2,n){
  let value=[];
  for(let i=0;i<=n;i++){
    let y=math.multiply(e2,i);
    let tmp=[];
    for(let j=0;j<=n;j++){
      let x=math.multiply(e1,j);
      tmp.push(math.add(math.add(origin,x),y));
    }
    value.push(tmp)
  }
  return value;
}
function calcEVec(origin,v,n){
  return math.divide(math.subtract(v,origin),n);
}
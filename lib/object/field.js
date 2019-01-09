let touchAction = require('../event/test').touchAction;
let math = require('mathjs');
var phina = require('phina.js');
const MAX_FIELD=16;

exports.field = ()=>{
  phina.define("Field",{
    // Spriteクラスを継承
    superClass: 'Sprite',
    // コンストラクタ
    init: function(){
      // 親クラス初期化
      this.superInit('field');
      this.rotation = 0;
    },
    update: function(){
    },
    testObject: function(ob){
      return this.top <= ob.top && this.bottom >= ob.bottom 
        && this.right >= ob.right && this.left <= ob.left;
    },
    getAction: function(ob){
      let x = setDirectionInField(ob.fieldX,"upright","downleft");
      let y = setDirectionInField(ob.fieldY,"upleft","downright");
      switch(Random.randint(0,2)){
        case 0:
          return x;
        case 1:
          return y;
        case 2:
          return x
          return "stop";
      }
    }
  });
}
function setDirectionInField(x,upDirection,downDirection){
  if(x === 0){
    return upDirection;
  }
  if(x === MAX_FIELD){
    return downDirection;
  }
  return Random.randint(0, 1) ==0? upDirection:downDirection;
}
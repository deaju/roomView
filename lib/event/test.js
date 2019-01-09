

exports.touchAction = (e,object) => {
    // スプライトをタッチ位置に
    console.log(object)
    object.x = e.pointer.x;
    object.y = e.pointer.y;
};
exports.ASSETS = {
    // 画像
    image: {
      'tomapiko': 'https://rawgit.com/phi-jp/phina.js/develop/assets/images/tomapiko_ss.png',
      'bird':'https://raw.githubusercontent.com/phinajs/phina.js/master/assets/images/flappy/bird.png'
    },
    spritesheet: {
      "tomapiko_ss":
      {
        // フレーム情報
        "frame": {
          "width": 64, // 1フレームの画像サイズ（横）
          "height": 64, // 1フレームの画像サイズ（縦）
          "cols": 6, // フレーム数（横）
          "rows": 3, // フレーム数（縦）
        },
        // アニメーション情報
        "animations" : {
          "walkright": { // アニメーション名
            "frames": [15,16,17], // フレーム番号範囲
            "next": "walkright", // 次のアニメーション
            "frequency": 6, // アニメーション間隔
          },
          "walkleft": { // アニメーション名
            "frames": [12,13,14], // フレーム番号範囲
            "next": "walkleft", // 次のアニメーション
            "frequency": 6, // アニメーション間隔
          },
        }
      },
    }
  };
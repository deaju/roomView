exports.ASSETS = {
    // 画像
    image: {
      'aroma': './lib/assets/aroma.png',
      'tomapiko': 'https://rawgit.com/phi-jp/phina.js/develop/assets/images/tomapiko_ss.png',
      'bird':'https://raw.githubusercontent.com/phinajs/phina.js/master/assets/images/flappy/bird.png',
      'field':'./lib/assets/mapTest.png'
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
            "stop": { // アニメーション名
              "frames": [6,7,8], // フレーム番号範囲
              "next": "stop", // 次のアニメーション
              "frequency": 6, // アニメーション間隔
            },
          }
        },
      "aroma_ss":
        {
          // フレーム情報
          "frame": {
            "width": 164, // 1フレームの画像サイズ（横）
            "height": 128, // 1フレームの画像サイズ（縦）
            "cols": 16, // フレーム数（横）
            "rows": 1, // フレーム数（縦）
          },
          // アニメーション情報
          "animations" : {
            "walkright": { // アニメーション名
              "frames": [0,1,2,3,4,5,6,7], // フレーム番号範囲
              "next": "walkright2", // 次のアニメーション
              "frequency": 1, // アニメーション間隔82
            },
            "walkright2": { // アニメーション名
              "frames": [8,9,10,11,12,13,14,15], // フレーム番号範囲
              "next": "walkright", // 次のアニメーション
              "frequency": 1, // アニメーション間隔82
            },
            "walkleft": { // アニメーション名
              "frames": [0,1,2,], // フレーム番号範囲
              "next": "walkleft", // 次のアニメーション
              "frequency": 2, // アニメーション間隔
            },
            "stop": { // アニメーション名
              "frames":  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], // フレーム番号範囲
              "next": "stop", // 次のアニメーション
              "frequency": 2, // アニメーション間隔
            },
          }
        },
    }
  };
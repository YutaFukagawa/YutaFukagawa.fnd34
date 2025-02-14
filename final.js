'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function outputnum(evt) {
  console.log( `( ${ evt.offsetX }, ${ evt.offsetY } )` );
  if (evt.offsetX > 17 && evt.offsetX < 37 && evt.offsetY > 145 && evt.offsetY < 165) {
    document.getElementById("ans").innerText = "正解：雪だるまの枝" + " " + i + "個目";
    i +=1;
  } else if (evt.offsetX > 119 && evt.offsetX < 139 && evt.offsetY > 75 && evt.offsetY < 95) {
    document.getElementById("ans").innerText = "正解：雪だるまの鼻" + " " + i + "個目";
    i +=1;
  } else if (evt.offsetX > 115 && evt.offsetX < 135 && evt.offsetY > 133 && evt.offsetY < 153) {
    document.getElementById("ans").innerText = "正解：雪だるまの口" + " " + i + "個目";
    i +=1;
  } else if (evt.offsetX > 121 && evt.offsetX < 141 && evt.offsetY > 245 && evt.offsetY < 265) {
    document.getElementById("ans").innerText = "正解：雪だるまのボタン" + " " + i + "個目";
    i +=1;
  } else if (evt.offsetX > 107 && evt.offsetX < 127 && evt.offsetY > 315 && evt.offsetY < 335) {
    document.getElementById("ans").innerText = "正解：ピンク猫のバケツ" + " " + i + "個目";
    i +=1;
  } else if (evt.offsetX > 37 && evt.offsetX < 57 && evt.offsetY > 347 && evt.offsetY < 367) {
    document.getElementById("ans").innerText = "正解：ピンク猫の足" + " " + i + "個目";
    i +=1;
  } else if (evt.offsetX > 279 && evt.offsetX < 299 && evt.offsetY > 3 && evt.offsetY < 23) {
    document.getElementById("ans").innerText = "正解：赤猫の帽子" + " " + i + "個目";
    i +=1;
  } else if (evt.offsetX > 356 && evt.offsetX < 376 && evt.offsetY > 362 && evt.offsetY < 382) {
    document.getElementById("ans").innerText = "正解：オレンジ猫のしっぽ" + " " + i + "個目";
    i +=1;
  }
}

let i = 1;
const target = document.getElementById("atopng");
target.addEventListener("click", outputnum);


// const target = document.getElementById( "maepng" );
//   //----] クリックイベント
// target.onclick = function (evt) {
//   console.log("ok");
//   console.log( `( ${ evt.offsetX }, ${ evt.offsetY } )` );
// };

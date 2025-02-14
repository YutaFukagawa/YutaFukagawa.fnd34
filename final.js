'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//正解数初期化
let i = 0;


//正解箇所判定フラグ
let flag1 = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;
let flag5 = true;
let flag6 = true;
let flag7 = true;
let flag8 = true;
let flag9 = true;

//ヒントカウンタ初期化
let tipCount = 0;

//全問正解時表示
function allAns(i) {
  if (i === 8) {
    document.getElementById("ans").innerText += " 🎉🎉🎉全問正解です！Congratulations！🎉🎉🎉";
  } else {
    return;
  }
}


//正解表示
function outputAns(evt) {
  console.log( `( ${ evt.offsetX }, ${ evt.offsetY } )` );
  
  if (flag1 && evt.offsetX > 3 && evt.offsetX < 41 && evt.offsetY > 130 && evt.offsetY < 182) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：雪だるまの枝";
    flag1 = false;
    allAns(i);
  } else if (flag2 && evt.offsetX > 117 && evt.offsetX < 139 && evt.offsetY > 74 && evt.offsetY < 99) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：雪だるまの鼻";
    flag2 = false;
    allAns(i);
  } else if (flag3 && evt.offsetX > 103 && evt.offsetX < 156 && evt.offsetY > 132 && evt.offsetY < 154) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：雪だるまの口";
    flag3 = false;
    allAns(i);
  } else if (flag4 && evt.offsetX > 118 && evt.offsetX < 138 && evt.offsetY > 244 && evt.offsetY < 270) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：雪だるまのボタン";
    flag4 = false;
    allAns(i);
  } else if (flag5 && evt.offsetX > 92 && evt.offsetX < 140 && evt.offsetY > 307 && evt.offsetY < 350) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：ピンク猫のバケツ";
    flag5 = false;
    allAns(i);
  } else if (flag6 && evt.offsetX > 37 && evt.offsetX < 86 && evt.offsetY > 343 && evt.offsetY < 378) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：ピンク猫の足";
    flag6 = false;
    allAns(i);
  } else if (flag7 && evt.offsetX > 241 && evt.offsetX < 331 && evt.offsetY > 0 && evt.offsetY < 86) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：赤猫の帽子";
    flag7 = false;
    allAns(i);
  } else if (flag8 && evt.offsetX > 334 && evt.offsetX < 387 && evt.offsetY > 353 && evt.offsetY < 384) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：オレンジ猫のしっぽ";
    flag8 = false;
    allAns(i);
  }
}


//ヒント表示機能
function tipFunc() {
  if (tipCount === 0) {
    document.getElementById("tipsDisplay").innerText = "小ヒント：全部で８つあります";
    tipCount += 1;
  } else if (tipCount === 1) {
    document.getElementById("tipsDisplay").innerText = "大ヒント：雪だるまに４か所、ピンク猫に２か所、赤・オレンジ猫にそれぞれ１か所";
    tipCount += 1;
  } else {
    document.getElementById("tipsDisplay").innerText = "ヒントはもうありません😿";
    tipCount = 0;
  }
}


//クリックポイント入力
const target = document.getElementById("rightpng");
target.addEventListener("click", outputAns);

//ヒント呼び出し
const tips = document.getElementById("tips");
tips.addEventListener("click", tipFunc);

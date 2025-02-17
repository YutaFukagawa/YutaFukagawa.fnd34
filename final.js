'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//正解数初期化
let i = 0;

//ヒントカウンタ初期化
let tipCount = 0;

//正解箇所判定フラグ
let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let flag6 = false;
let flag7 = false;
let flag8 = false;

//回答開始判定フラグ
let startFlag = false;

//全問正解判定フラグ
let finishFlag = false;

//最初は問題を非表示
document.getElementById("leftPng").style.visibility = "hidden";
document.getElementById("rightPng").style.visibility = "hidden";

//正解表示
function outputAns(evt) {
  if (!flag1 && evt.offsetX > 3 && evt.offsetX < 41 && evt.offsetY > 130 && evt.offsetY < 182) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：雪だるまの枝";
    flag1 = true;
    allAns(i);
  } else if (!flag2 && evt.offsetX > 117 && evt.offsetX < 139 && evt.offsetY > 74 && evt.offsetY < 99) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：雪だるまの鼻";
    flag2 = true;
    allAns(i);
  } else if (!flag3 && evt.offsetX > 103 && evt.offsetX < 156 && evt.offsetY > 132 && evt.offsetY < 154) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：雪だるまの口";
    flag3 = true;
    allAns(i);
  } else if (!flag4 && evt.offsetX > 118 && evt.offsetX < 138 && evt.offsetY > 244 && evt.offsetY < 270) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：雪だるまのボタン";
    flag4 = true;
    allAns(i);
  } else if (!flag5 && evt.offsetX > 92 && evt.offsetX < 140 && evt.offsetY > 307 && evt.offsetY < 350) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：ピンク猫のバケツ";
    flag5 = true;
    allAns(i);
  } else if (!flag6 && evt.offsetX > 37 && evt.offsetX < 86 && evt.offsetY > 343 && evt.offsetY < 378) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：ピンク猫の足";
    flag6 = true;
    allAns(i);
  } else if (!flag7 && evt.offsetX > 241 && evt.offsetX < 331 && evt.offsetY > 0 && evt.offsetY < 86) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：赤猫の帽子";
    flag7 = true;
    allAns(i);
  } else if (!flag8 && evt.offsetX > 334 && evt.offsetX < 387 && evt.offsetY > 353 && evt.offsetY < 384) {
    i +=1;
    document.getElementById("ans").innerText = "正解 (" + i + "個目)" + "：オレンジ猫のしっぽ";
    flag8 = true;
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
const target = document.getElementById("rightPng");
target.addEventListener("click", outputAns);

//ヒント呼び出し
const tips = document.getElementById("button");
tips.addEventListener("click", tipFunc);



//タイマー機能の変数宣言
const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
// タイムアウトID
let timeoutID;

// 時間を表示する関数
function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(2, '0');
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');
  
  time.textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

//スタートボタンがクリックされたらタイマーを進める
startButton.addEventListener('click', () => {
  document.getElementById("leftPng").style.visibility = "visible";
  document.getElementById("rightPng").style.visibility = "visible";
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

//ストップボタンがクリックされたらタイマーを止める
stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

//リセットボタンがクリックされたらタイマーを0に戻す
resetButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '00:00:00.000';
  stopTime = 0;
});



//全問正解時表示＆タイム表示
function allAns(i) {
  if (i === 8) {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(timeoutID);
    stopTime += (Date.now() - startTime);
    document.getElementById("ans").innerText += " 🎉🎉🎉全問正解です！Congratulations！🎉🎉🎉";
  } else {
    return;
  }
}

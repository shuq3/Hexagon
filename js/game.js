var score = 0, count = 4, thisType;
var getCol = 0, getRow = 0, getColNext = 0, getRowNext = 0, getMouse = 0;
var randomColor1, randomColor2;
var color = new Array("red", "purple", "yellow", "green", "pink", "blue", "gray");
var X = [-1, -1, 0, 0, 1, 1], Y = [-1, 0, -1, 1, 0, 1];
var X_middle= [-1, -1, 0, 0, 1, 1], Y_middle = [-1, 0, -1, 1, -1, 0];
var X_large= [-1, -1, 0, 0, 1, 1], Y_large = [0, 1, -1, 1, -1, 0];
var totalArray = new Array();
var score = 0;

window.onload = function (){
  drawCells();
  generateCell();
}

// 检测拖拽
function allowDrop(event) {
  event.preventDefault();
}

function checkMouse(e) {
  if (e.id == 'type-0') getMouse = 0;
  if (e.id == 'type-1') getMouse = 1;
  if (e.id == 'type-2') getMouse = 2;
}

function drop(event) {
  event.preventDefault();
  position = event.target.className.split(" ")[1];
  // 游戏结束
  if (position != undefined) {
    getRow = parseInt(position.split("-")[1]);
    getCol = parseInt(position.split("-")[2]);
    // console.log(thisType, getMouse, getRow, getCol, randomColor1, randomColor2);
    drogable = false;
    if (thisType == 0) {
      if (totalArray[getRow][getCol] == -1) {
        if (getMouse == 1 && checkEmpty(getRow, getCol+1)) {
          $('.' + position).addClass(randomColor1);
          $('.col-' + getRow.toString()+ '-' + (getCol + 1).toString()).addClass(randomColor2);
          drogable = true;
          getRowNext = getRow;
          getColNext = getCol + 1;
          totalArray[getRow][getCol] = color.indexOf(randomColor1);
          totalArray[getRowNext][getColNext] = color.indexOf(randomColor2);
        }
        if (getMouse == 2 && checkEmpty(getRow, getCol-1)) {
          $('.' + position).addClass(randomColor2);
          $('.col-' + getRow.toString()+ '-' + (getCol - 1).toString()).addClass(randomColor1);
          drogable = true;
          getRowNext = getRow;
          getColNext = getCol - 1;
          totalArray[getRow][getCol] = color.indexOf(randomColor2);
          totalArray[getRowNext][getColNext] = color.indexOf(randomColor1);
        }
      }
    }
    if (thisType == 1) {
      if (totalArray[getRow][getCol] == -1) {
        if (getMouse == 0) {
          if (getRow < 3 && checkEmpty(getRow+1, getCol+1)) {
            $('.' + position).addClass(randomColor1);
            $('.col-' + (getRow + 1).toString()+ '-' + (getCol + 1).toString()).addClass(randomColor2);
            drogable = true;
            getRowNext = getRow + 1;
            getColNext = getCol + 1;
            totalArray[getRow][getCol] = color.indexOf(randomColor1);
            totalArray[getRowNext][getColNext] = color.indexOf(randomColor2);
          }
          if (getRow > 2 && checkEmpty(getRow+1, getCol)) {
            $('.' + position).addClass(randomColor1);
            $('.col-' + (getRow + 1).toString()+ '-' + getCol.toString()).addClass(randomColor2);
            drogable = true;
            getRowNext = getRow + 1;
            getColNext = getCol;
            totalArray[getRow][getCol] = color.indexOf(randomColor1);
            totalArray[getRowNext][getColNext] = color.indexOf(randomColor2);
          }
        }
        if (getMouse == 2) {
          if (getRow < 4 && checkEmpty(getRow-1, getCol-1)) {
            $('.' + position).addClass(randomColor2);
            $('.col-' + (getRow - 1).toString()+ '-' + (getCol - 1).toString()).addClass(randomColor1);
            drogable = true;
            getRowNext = getRow - 1;
            getColNext = getCol - 1;
            totalArray[getRow][getCol] = color.indexOf(randomColor2);
            totalArray[getRowNext][getColNext] = color.indexOf(randomColor1);
          }
          if (getRow > 3 && checkEmpty(getRow-1, getCol)) {
            $('.' + position).addClass(randomColor2);
            $('.col-' + (getRow - 1).toString()+ '-' + getCol.toString()).addClass(randomColor1);
            drogable = true;
            getRowNext = getRow - 1;
            getColNext = getCol;
            totalArray[getRow][getCol] = color.indexOf(randomColor2);
            totalArray[getRowNext][getColNext] = color.indexOf(randomColor1);
          }
        }
      }
    }
    if (thisType == 2) {
      if (totalArray[getRow][getCol] == -1) {
        if (getMouse == 0) {
          if (getRow < 3 && checkEmpty(getRow+1, getCol)) {
            $('.' + position).addClass(randomColor1);
            $('.col-' + (getRow + 1).toString()+ '-' + getCol.toString()).addClass(randomColor2);
            drogable = true;
            getRowNext = getRow + 1;
            getColNext = getCol;
            totalArray[getRow][getCol] = color.indexOf(randomColor1);
            totalArray[getRowNext][getColNext] = color.indexOf(randomColor2);
          }
          if (getRow > 2 && checkEmpty(getRow+1, getCol-1)) {
            $('.' + position).addClass(randomColor1);
            $('.col-' + (getRow + 1).toString()+ '-' + (getCol-1).toString()).addClass(randomColor2);
            drogable = true;
            getRowNext = getRow + 1;
            getColNext = getCol - 1;
            totalArray[getRow][getCol] = color.indexOf(randomColor1);
            totalArray[getRowNext][getColNext] = color.indexOf(randomColor2);
          }
        }
        if (getMouse == 1) {
          if (getRow < 4 && checkEmpty(getRow-1, getCol)) {
            $('.' + position).addClass(randomColor2);
            $('.col-' + (getRow - 1).toString()+ '-' + getCol.toString()).addClass(randomColor1);
            drogable = true;
            getRowNext = getRow - 1;
            getColNext = getCol;
            totalArray[getRow][getCol] = color.indexOf(randomColor2);
            totalArray[getRowNext][getColNext] = color.indexOf(randomColor1);
          }
          if (getRow > 3 && checkEmpty(getRow-1, getCol+1)) {
            $('.' + position).addClass(randomColor2);
            $('.col-' + (getRow - 1).toString()+ '-' + (getCol + 1).toString()).addClass(randomColor1);
            drogable = true;
            getRowNext = getRow - 1;
            getColNext = getCol + 1;
            totalArray[getRow][getCol] = color.indexOf(randomColor2);
            totalArray[getRowNext][getColNext] = color.indexOf(randomColor1);
          }
        }
      }
    }
    if (thisType == 3 && totalArray[getRow][getCol] == -1) {
      $('.'+position).addClass(randomColor1);
      totalArray[getRow][getCol] = color.indexOf(randomColor1);
      drogable = true;
    }
    if (drogable == true) {
      merge();
      generateCell();
    }
  }
}

function checkEmpty(row, col) {
  if (row < 0 | col < 0) return false;
  if (row >= totalArray.length) return false;
  if (col >= totalArray[row].length) return false;
  return totalArray[row][col] == -1;
}

function checkColor(row, col) {
  if (row < 0 | col < 0) return -1;
  if (row >= totalArray.length) return -1;
  if (col >= totalArray[row].length) return -1;
  return totalArray[row][col];
}

function checkMergePoint(row, col, color_, sign) {
  // 如果sign等于1，直接合并；否则返回可合并方块数
  var mergeList = [[row, col]];
  var totalList = [[row, col]];
  var tempArray = $.extend(true, [], totalArray);
  tempArray[row][col] = -1;
  var colorCount = 0;
  var initColor = color.indexOf(color_);
  while (mergeList.length) {
    var newPair = mergeList.pop();
    for (var i = 0; i < 6; i++) {
      if (newPair[0] < 3) {
        tempRow = newPair[0] + X[i];
        tempCol = newPair[1] + Y[i];
      } else if (newPair[0] == 3) {
        tempRow = newPair[0] + X_middle[i];
        tempCol = newPair[1] + Y_middle[i];
      } else {
        tempRow = newPair[0] + X_large[i];
        tempCol = newPair[1] + Y_large[i];
      }
      if (checkColor(tempRow, tempCol) == initColor) {
        if (tempArray[tempRow][tempCol] != -1) {
          mergeList.push([tempRow, tempCol]);
          totalList.push([tempRow, tempCol]);
          tempArray[tempRow][tempCol] = -1;
          if (newPair[0] == row && newPair[1] == col) colorCount += 1;
        }
      }
    }
    // console.log(row, col, color_, mergeList);
  }
  if (sign == 1 && totalList.length > 2) {
    totalArray = $.extend(true, [], tempArray);
    if (color.indexOf(color_) != 6) {
      totalArray[row][col] = color.indexOf(color_) + 1;
      $('.col-' + row.toString() + '-' + col.toString()).addClass(color[color.indexOf(color_) + 1]);
      for (var i = 0; i < totalList.length; i++) {
        $('.col-' + totalList[i][0].toString() + '-' + totalList[i][1].toString()).removeClass(color_);
      }
      score += totalList.length * (color.indexOf(color_) + 1);
      $('.score')[0].innerHTML = score;
      checkMergePoint(row, col, color[color.indexOf(color_) + 1], 1);
    }
  }
  return colorCount;
}

// 合并（生成新的小块，更新分数）
function merge() {
  color1 = color[totalArray[getRow][getCol]];
  color2 = color[totalArray[getRowNext][getColNext]];
  if (thisType == 3) {
    checkMergePoint(getRow, getCol, color1, 1);
  } else if (color1 != color2) {
    checkMergePoint(getRow, getCol, color1, 1);
    checkMergePoint(getRowNext, getColNext, color2, 1);
  } else {
    var merge1 = checkMergePoint(getRow, getCol, color1, 2);
    var merge2 = checkMergePoint(getRowNext, getColNext, color2, 2);
    // console.log(merge1, merge2);
    if (merge1 > merge2) checkMergePoint(getRow, getCol, color1, 1);
    if (merge1 < merge2) checkMergePoint(getRowNext, getColNext, color2, 1);
    if (merge1 == merge2 && merge1 != 1) {
      if (getRow == getRowNext) {
        if (getCol < getColNext) checkMergePoint(getRow, getCol, color1, 1);
        else checkMergePoint(getRowNext, getColNext, color2, 1);
      }
      if (getRow < getRowNext) checkMergePoint(getRow, getCol, color1, 1);
      if (getRow > getRowNext) checkMergePoint(getRowNext, getColNext, color2, 1);
    }
  }
}

// 检测可行方块类型
function getType() {
  typeInit = new Array(false, false, false, false);
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4+i; j++) {
      if (totalArray[i][j] == -1) {
        if (totalArray[i+1][j] == -1) typeInit[2] = true;
        if (totalArray[i+1][j+1] == -1) typeInit[1] = true;
        if (j != 4+i && totalArray[i][j+1] == -1) typeInit[0] = true;
        typeInit[3] = true;
      }
    }
  }
  for (var i = 4; i < 7; i++) {
    for (var j = 0; j < 10-i; j++) {
      if (totalArray[i][j] == -1) {
        if (i != 6 && totalArray[i+1][j] == -1) typeInit[1] = true;
        if (j != 0 && i != 6 && totalArray[i+1][j-1] == -1) typeInit[2] = true;
        if (j != 9-i && totalArray[i][j+1] == -1) typeInit[0] = true;
        typeInit[3] = true;
      }
    }
  }
  typeEnd = new Array();
  for (var i = 0; i < 4; i++) {
    if (typeInit[i]) typeEnd.push(i);
  }
  return typeEnd;
}

// 绘制棋盘
function drawCells() {
  container = document.getElementById("cell-container")
  for (var i = 0; i < 4; i++) {
    var line = document.createElement("div");
    line.className = "line";
    var text = "";
    arrayLine = new Array();
    for (var j = 0; j < 4+i; j++) {
      text += "<div class='cell " + "col-" + i.toString() + "-" + j.toString() + "'></div>";
      arrayLine.push(-1);
    }
    line.innerHTML = text;
    totalArray.push(arrayLine);
    container.appendChild(line);
  }
  for (var i = 0; i < 3; i++) {
    var line = document.createElement("div");
    line.className = "line";
    var text = "";
    arrayLine = new Array();
    for (var j = 0; j < 6-i; j++) {
      text += "<div class='cell " + "col-" + (4+i).toString() + "-" + j.toString() + "'></div>";
      arrayLine.push(-1);
    }
    line.innerHTML = text;
    totalArray.push(arrayLine);
    container.appendChild(line);
  }
}

// 生成小块
function generateCell() {
  $('#type-0')[0].className = "generater-cell";
  $('#type-1')[0].className = "generater-cell";
  $('#type-2')[0].className = "generater-cell";
  var typeList = getType();
  if (typeList.length != 0) {
    thisType = typeList[Math.floor((Math.random()*typeList.length))];
    randomColor1 = color[Math.floor((Math.random()*count))];
    randomColor2 = color[Math.floor((Math.random()*count))];
    if (thisType == 0) {
      $('#type-0').addClass("type");
      $('#type-1').addClass(randomColor1);
      $('#type-2').addClass(randomColor2);
    }
    if (thisType == 1) {
      $('#type-1').addClass("type");
      $('#type-0').addClass(randomColor1);
      $('#type-2').addClass(randomColor2);
    }
    if (thisType == 2) {
      $('#type-2').addClass("type");
      $('#type-0').addClass(randomColor1);
      $('#type-1').addClass(randomColor2);
    }
    if (thisType == 3) {
      $('#type-0').addClass(randomColor1);
      $('#type-1').addClass("type");
      $('#type-2').addClass("type");
    }
  } else {
    console.log("Game Over");
  }
}

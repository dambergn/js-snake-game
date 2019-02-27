'use strict';

const ctx = document.getElementById('ctx').getContext('2d');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let canvasHeight = window.innerHeight - 6; // Y
let canvasWidth = 500; // X
setCanvas();
let isMobile = false;
let gameSpeed = 200;


// Detects if playing on a touch screen mobile device.
if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
  console.log('mobile deveice')
  isMobile = true;
} else {
  isMobile = false;
}

function setCanvas() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  canvasHeight = windowHeight - 6;
  if (window.innerWidth > 700) {
    canvasWidth = 700 - 8;
  } else {
    canvasWidth = window.innerWidth;
  }
  if (window.innerHeight > 700) {
    canvasHeight = 700;
  } else {
    canvasHeight = window.innerHeight - 6;
  }
  document.getElementById('ctx').height = canvasHeight;
  document.getElementById('ctx').width = canvasWidth;
  ctx.font = '30px "Courier New", Courier, monospace';
  ctx.fillStyle = 'white';
}

window.onresize = function (event) {
  setCanvas();
};

let player = {
  name: 'Player',
  x: 350,
  y: 350,
  spdX: 10,
  spdY: 0,
  hp: 10,
  width: 10,
  height: 10,
  color: 'green',
};

function drawSnake(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.stroke();
}

function updatePosition(){
  player.x = player.x + player.spdX;
  player.y = player.y + player.spdY;
}


function update() {
  drawSnake();
  updatePosition();
}

setInterval(update, gameSpeed); //40ms is equivelint to 24fps


document.onkeydown = function (event) {
  if (event.keyCode === 68 || event.keyCode === 39) { //d or Right arrow
    player.spdX = 10;
    player.spdY = 0;
  } else if (event.keyCode === 83 || event.keyCode === 40) { //s or Down arrow
    player.spdX = 0;
    player.spdY = 10;
  } else if (event.keyCode === 65 || event.keyCode === 37) { //a or Left arrow
    player.spdX = -10;
    player.spdY = 0;
  } else if (event.keyCode === 87 || event.keyCode === 38) { // w or Up Arrow
    player.spdX = 0;
    player.spdY = -10;
  }
  // } else if (event.keyCode === 80) { //p
  //   paused = !paused;
  // } else if (event.keyCode === 32) { //space
  //   firing = true;
  // } else if (event.keyCode === 49) { // 1
  //   weaponSelect = 0;
  // } else if (event.keyCode === 50) { // 2
  //   weaponSelect = 1;
  // } else if (event.keyCode === 51) { // 3
  //   weaponSelect = 2;
  // } else if (event.keyCode === 52) { // 4
  //   weaponSelect = 5;
  // }
};

// document.onkeyup = function (event) {
//   if (event.keyCode === 68 || event.keyCode === 39) { //d or Right arrow
//     playerBottom.pressingRight = false;
//     playerTop.pressingRight = false;
//   } else if (event.keyCode === 83 || event.keyCode === 40) { //s or Down arrow
//     playerLeft.pressingDown = false;
//     playerRight.pressingDown = false;
//   } else if (event.keyCode === 65 || event.keyCode === 37) { //a or Left arrow
//     playerBottom.pressingLeft = false;
//     playerTop.pressingLeft = false;
//   } else if (event.keyCode === 87 || event.keyCode === 38) { // w or Up Arrow
//     playerLeft.pressingUp = false;
//     playerRight.pressingUp = false;
//   } else if (event.keyCode === 32) { //space
//     firing = false;
//   }
// };
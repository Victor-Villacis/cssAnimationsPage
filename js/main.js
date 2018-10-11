var x = 0;
var y = 0;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//check canvas function, you should use modinizer though 
// if (canvas && canvas.getContext) {
//   var ctx = canvas.getContext('2d');
// }
// if (Modernizr.canvas) {
//   // supported
// } else {
//   // not-supported
// }


function animateLine() {
  frame = setInterval(function() {
    drawline();
  }, 25);
}


//draws a sqaure with another sqaure inside of it
function draw() {
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
  
}
// this function draws the line
var drawline = function () {

  if (x <= canvas.width) {
    ctx.clearRect(0, 0, 345, 345);
    ctx.strokeStyle = 'rgb(139, 0, 0)';
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.moveTo(30, 0);
    ctx.lineTo(x += 5, y += 5);
    ctx.stroke();
  }

  else {
    clearInterval(frame);
    // this code below is not working???
    document.getElementById = ('result').innerText = "Animation Complete"
  }
};
// This simple code creates a square in the middle
// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");
// ctx.fillRect(100, 100, 100, 100);

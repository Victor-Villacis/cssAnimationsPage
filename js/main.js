function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}


// This simple code creates a square in the middle
// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");
// ctx.fillRect(100, 100, 100, 100);


var start = document.getElementById("start");
start.onclick = function() {
  if (!looping) {
    looping = true;
    animate();
  }
};

var pause = document.getElementById("pause");
pause.onclick = function() {
  looping = false
};

var reset = document.getElementById("reset");
reset.onclick = function() {
  looping = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  setup();
}

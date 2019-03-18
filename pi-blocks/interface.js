
var slider = document.getElementById("slider");
var display = document.getElementById("display");

slider.onchange = function() {

  display.innerHTML = slider.value

}


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
  setup(document.getElementById("slider").value);
}

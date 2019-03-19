
var pow_slider = document.getElementById("pow_slider")
var pow_slider_display = document.getElementById("pow_slider_display");
pow_slider.onchange = function() {
  pow_slider_display.innerHTML = pow_slider.value;
};


var acc_slider = document.getElementById("acc_slider");
var acc_slider_display = document.getElementById("acc_slider_display");
acc_slider.onchange = function() {
  acc_slider_display.innerHTML = acc_slider.value;
};


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
  setup(document.getElementById("pow_slider_display").value, document.getElementById("acc_slider_display").value);
};


function updateCols(value) {
  var cols = document.getElementById("cols");
  cols.innerHTML = value;
};

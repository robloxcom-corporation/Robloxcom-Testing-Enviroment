var vid = document.getElementById("vid");
var body = document.getElementById("main");
var scrollLim = 9088;

body.onscroll = function() {
  vid.currentTime = map(document.documentElement.scrollTop);
};

map = function(value) {
  coeff = scrollLim/vid.duration;
  return value / coeff;
}

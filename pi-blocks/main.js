
var looping = false;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var slider = document.getElementById("slider");

var block1;
var block2;

function setup(power) {
block1 = new Component(canvas.width * 5/6, canvas.height * 3/4, 40, 40, "rect");
block1.color = "#33aaff";
block1.vel = -1;
block1.mass = Math.pow(100, power);

block2 = new Component(canvas.width * 1/3, canvas.height * 3/4 + 20, 20, 20, "rect");
block2.color = "#33aaff";
block2.vel = 0;
block2.mass = 1;


Component.prototype.step = function() {
  this.x = this.x + this.vel;
};

block1.draw();
block2.draw();

};

setup();

function animate( timestamp ) {

  block1.clear();
  block1.step();
  block1.draw();


  if (looping) {
    window.requestAnimationFrame( animate );
  }
};

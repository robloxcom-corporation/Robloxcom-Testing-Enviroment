
var blocks = [];
var looping = false;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var slider = document.getElementById("slider");

var block1;
var block2;

function setup(power) {
console.log(power)
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

Component.prototype.intersects = function(block) {
  if (this.x <= block.x + block.width) {
    return true;
  } else {
    return false
  };
};

Component.prototype.hitsWall = function() {
  if (this.x <= 0) {
    return true
  } else {
    return false;
  };
};

Component.prototype.collide = function(block) {
  var _this = this;
  this.vel = ((_this.mass - block.mass) / (_this.mass + block.mass) * _this.vel)
    + (2 * block.mass / (_this.mass + block.mass) * block.mass);

  block.vel = (2 * _this.mass / (_this.mass + block.mass) * _this.vel)
    + ((block.mass - _this.mass) / (_this.mass + block.mass) * block.vel);
};

block1.draw();
block2.draw();

};

setup(2);

function animate( timestamp ) {

  block1.clear();
  block1.step();

  block2.clear();
  block2.step();

  if (block1.intersects(block2)) {
    console.log("hello")
    block1.collide(block2);

  };

  block1.draw();
  block2.draw();

  if (looping) {
    window.requestAnimationFrame( animate );
  }
};

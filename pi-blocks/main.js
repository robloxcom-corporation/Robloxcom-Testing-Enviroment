
var blocks = [];
var looping = false;
var block1;
var block2;
var times = 100000;
var cols = 0;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var slider = document.getElementById("slider");

function setup(power, accuracy) {
  cols = 0;
  times = accuracy;
  console.log(power);
  console.log(times);

  block1 = new Component(canvas.width * 5/6, canvas.height * 3/4, 40, 40, "rect");
  block1.color = "#33aaff";
  block1.vel = -1 / times;
  block1.mass = Math.pow(10, power);

  block2 = new Component(canvas.width * 1/3, canvas.height * 3/4 + 20, 20, 20, "rect");
  block2.color = "#33aaff";
  block2.vel = 0 / times;
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
    var sum_mass = this.mass + block.mass;
    var vel_ = (this.mass - block.mass) / sum_mass * this.vel;
    vel_ += (2 * block.mass / sum_mass) * block.vel;
    return vel_;
  };

  block1.draw();
  block2.draw();

};

setup(0, 1);

function animate( timestamp ) {

  block1.clear();
  block2.clear();

  for (var i = 0; i < times; i++) {

    if (block1.intersects(block2)) {
      var vel_1 = block1.collide(block2);
      var vel_2 = block2.collide(block1);

      block1.vel = vel_1;
      block2.vel = vel_2;

      cols++;
      updateCols(cols);

    };

    if (block2.x <= 0) {
      block2.vel = block2.vel *-1;

      cols++;
      updateCols(cols);
    };

    block1.step();
    block2.step();

};

  block1.draw();
  block2.draw();

  if (looping) {
    window.requestAnimationFrame( animate );
  }
};

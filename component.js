
function Component(x, y, width, height, type) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.type = type;
  this.draw = function() {
    switch (this.type) {
      case "rect":
        context.beginPath();
        context.fillStyle = this.color;
        context.lineWidth = "0px";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.stroke();
        break;
      case "outline":
        context.beginPath();
        context.fillStyle = color;
        context.lineWidth = "2px";
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
        break;
      case "img":
        var parent = this;
        this.image = new Image();
        this.image.onload = function() {
          context.drawImage(this, parent.x, parent.y, parent.width, parent.height);

        };
        this.image.src = parent.image_uri;
        break;
      case "text":
        console.log(this.text)
        context.beginPath();
        context.fillStyle = this.color;
        context.font = this.font;
        context.fillText(this.text, this.x, this.y, this.width, this.height)
        context.stroke();
        break;
    };
  };

  this.clear = function() {
    if (this.clearColor) {
      context.beginPath();
      context.fillStyle = this.clearColor;
      context.lineWidth = "0px";
      context.fillRect(this.x, this.y, this.width, this.height);
      context.stroke();
    } else {
      context.beginPath();
      context.lineWidth = "0px";
      context.clearRect(this.x, this.y, this.width, this.height);
      context.stroke();
    };
  };

  // meta members
  this.parent;
  this.image;
  this.img_uri;
  this.color;
  this.clearColor;
  this.font;
  this.text;
  this.timestamp_start;
  this.timestamp_progress;
  this.debugId;

};

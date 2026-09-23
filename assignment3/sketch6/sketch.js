let scale = 100;
let density = 20;
let d;
let xRate = 100;
let yRate = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  lrpMouseX = 0;
  lrpMouseY = 0;
  if (width < height) {
    d = int(width/density);
  } else {
    d = int(height/density);
  }
}

function draw() {
  background(255);
  stroke(10);
  strokeWeight(5)
  lrpMouseX = lerp(lrpMouseX, mouseX, 0.1);
  lrpMouseY = lerp(lrpMouseY, mouseY, 0.1);
  xCt = int(width/d);
  yCt = int(height/d);
  for (let i = 0; i < xCt; i++) {
    for (let j = 0; j < yCt; j++) {
      push();
      translate(i*d+d/2, j*d+d/2);
      //circle(0, 0, d);
      rotate(frameCount + (i+1)*(j+ 1)*lrpMouseX/xRate);
      line(0, 0, 0, d/2);
      rotate(-frameCount - (i+1)*(j+ 1)*lrpMouseX/xRate);
      rotate(frameCount/12 + (i+1)*(j+ 1)*lrpMouseY/yRate);
      line(0, 0, 0, d/3);
      pop();
    }
  }
  


}

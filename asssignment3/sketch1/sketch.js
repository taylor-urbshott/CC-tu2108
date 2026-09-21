
let lrpMouseX, lrpMouseY;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(HSB);
  noFill();
  stroke(255);
  lrpMouseX = 0;
  lrpMouseY = 0;
}

function draw() {
  background(0, 50);
  lrpMouseX = lerp(lrpMouseX, mouseX, 0.1);
  lrpMouseY = lerp(lrpMouseY, mouseY, 0.1);
  time += deltaTime;

  push();
    translate(width/2, height/2);
    for (let i = 0; i < (lrpMouseX / 50); i++) {
      stroke(i* 10, 100, 100);
      rotate(((height/2 - lrpMouseY)/20) + time/500);
      translate(lrpMouseY/40, lrpMouseY/30);
      scale(1.1);
      rect(0, 0, 100);
    }
  pop();


}
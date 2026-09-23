let sproutDepth = 5;
let sproutBreadth = 6;
let sproutLength = 500;
let rotateFactor = 0.3;
let lrpMouseX, lrpMouseY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  lrpMouseX = 0;
  lrpMouseY = 0;
}

function draw() {
  background(255);
  stroke(10);
  strokeWeight(2)
  translate(width/2, height/2);
  lrpMouseX = lerp(lrpMouseX, mouseX, 0.1);
  lrpMouseY = lerp(lrpMouseY, mouseY, 0.1);
  sprout(0, 0, 0);
  


}

function sprout(x, y, depth) {
  let newDepth = depth + 1;
  if (depth >= sproutDepth) {
    return;
  } else {
    push()
    translate(x, y);
    scale(map(lrpMouseY, 0, height, 0.4, 0.8));
    rotate(map(lrpMouseX, 0, width, -360, 0))
    for (let i = 0; i < sproutBreadth; i++) {
      rotate(i * map(lrpMouseX, 0, width, -360, 360));
      let newY = sproutLength;
      line (0, 0, 0, newY);
      sprout(0, newY, newDepth);

    }
    pop();
  }
}

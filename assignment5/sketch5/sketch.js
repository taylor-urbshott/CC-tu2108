let sproutDepth = 5;
let sproutBreadth = 7;
let sproutLength = 200;
let rotateFactor = 0.3;
let lrpMouseX, lrpMouseY;
p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false; 
let newAngle = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  lrpMouseX = 0;
  lrpMouseY = 0;
  noFill();
}

function draw() {
  if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }

  background(255);
  stroke(10);
  strokeWeight(2)
  translate(width/2, height/2);
  lrpMouseX = lerp(lrpMouseX, mouseX, 0.1);
  lrpMouseY = lerp(lrpMouseY, mouseY, 0.1);
  sprout(0, 0, 0);

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }

}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function sprout(x, y, depth) {
  let newDepth = depth + 1;
  if (depth >= sproutDepth) {
    return;
  } else {
    push()
    translate(x, y);
    scale(0.7);
    rotate(newAngle);
    for (let i = 0; i < sproutBreadth; i++) {
      push()
      newAngle = 50 * noise(depth) * (i - 4) * map(lrpMouseX, 0, width, -360, 360);
      let newX = sproutLength*sin(newAngle/2);
      let newY = -sproutLength*cos(newAngle/2);
      let anchX = newX + (sproutLength/2) * (-sin(newAngle));
      let anchY = newY + (sproutLength/2) * (cos(newAngle));
      // line (0, 0, 0, newY);
      bezier(0, 0, 0, -sproutLength/2, anchX, anchY, newX, newY)
      sprout(newX, newY, newDepth);
      pop()

    }
    pop();
  }
}


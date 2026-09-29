let sproutDepth = 4;
let sproutBreadth = 6;
let sproutLength = 200;
let rotateFactor = 0.3;
let lrpMouseX, lrpMouseY;
p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false; 

function setup() {
  createCanvas(576, 384);
  angleMode(DEGREES);
  lrpMouseX = 0;
  lrpMouseY = 0;
}

function draw() {
  if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }

  background(255);
  stroke(10);
  strokeWeight(3)
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
    scale(map(lrpMouseY, 0, height, 0.4, 0.8));
    for (let i = 0; i < sproutBreadth; i++) {
      rotate(map(lrpMouseX, 0, width, 0, 360));
      let newY = sproutLength;
      line (0, 0, 0, newY);
      sprout(0, newY, newDepth);

    }
    pop();
  }

  
}

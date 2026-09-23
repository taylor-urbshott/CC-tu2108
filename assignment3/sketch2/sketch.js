
let frameCt = 0;
let curveScale = 200;
let curveLen = 500;
let curveCt = 0;
let maxCt = 5;
let crvX = [0, 0, 0, 0];
let crvY = [0, 0, 0, 0];


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(HSB);
  noFill();
  stroke(255);
  frameRate(1);
  
}

//scope issue?
function draw() {
  if (frameCt == 0) {
    translate(width/2, height/2);
  }
  frameCt += frameCt;
  if (frameCt < curveLen){
    push()
    translate(crvX[3], crvY[3]);
    crvX[1] = crvX[3] - crvX[2];
    crvY[1] = crvY[3] - crvY[2];
    crvX[2] = random(-curveScale, curveScale);
    crvY[2] = random(-curveScale, curveScale);
    crvX[3] = random(-curveScale, curveScale);
    crvY[3] = random(-curveScale, curveScale);
    //bezier(crvX[0], crvY[0], crvX[1], crvY[1], crvX[2], crvY[2], crvX[3], crvY[3]);
    line(crvX[0], crvY[0], crvX[3], crvY[3])
    
    
  } else {
    //pop();
    translate(width/2, height/2);
    curveCt ++;
    frameCt = 0;
    // finish draaw if all curves drawn
    if (curveCt >= maxCt) {
      return
    }
  }
}
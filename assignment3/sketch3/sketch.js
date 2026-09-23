
let curveScale = 10;
let starSpread = 10;
let curveLen = 10000;
let maxCt = 10;
let crvX = [0, 0, 0, 0];
let crvY = [0, 0, 0, 0];


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(HSB);
  noFill();
  stroke(255);
  background(220, 100, 8);
  frameRate(1);
  strokeWeight(0.03);
  
}

//scope issue?
function draw() {
  background(220, 100, 8);
  
  for (let i = 0; i < maxCt; i++) {
    push();
    translate(width/2, height/2);
    
    for (let j = 0; j < curveLen; j++) {
      stroke(i * 18 + 180, 100, 100);
      crvX[1] = crvX[3] - crvX[2];
      crvY[1] = crvY[3] - crvY[2];
      crvX[2] = random(-curveScale, curveScale);
      crvY[2] = random(-curveScale, curveScale);
      crvX[3] = random(-curveScale, curveScale);
      crvY[3] = random(-curveScale, curveScale);
      bezier(crvX[0], crvY[0], crvX[1], crvY[1], crvX[2], crvY[2], crvX[3], crvY[3]);
      //line(crvX[0], crvY[0], crvX[3], crvY[3]);
      stroke(50, 10, random(0,100));
      circle(crvX[3] - starSpread * random(-curveScale, curveScale), crvY[3] - starSpread * random(-curveScale, curveScale), 1)
      translate(crvX[3], crvY[3]);
      
    }
    pop();
  }
  
}

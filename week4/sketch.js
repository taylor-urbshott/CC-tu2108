let r = 100;
let v = 50;
p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  noFill();
  rectMode(CENTER);

  
}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw() {
  if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }

  translate(width/2, height/2);
  background(0);
  r = 0;


  beginShape()

  for (let i = 0; i < v*5; i++) {
    r ++;
    let x = map(i, 0, v, 0, TWO_PI);
    x = sin(x)*r;
    let y = map (i, 0, v, 0, TWO_PI);
    y = cos(y)*r ;
    vertex(x, y)


  }
  endShape();

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
  

}

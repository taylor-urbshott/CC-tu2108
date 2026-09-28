let rows = 20;
let cols = 40;
let i=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(155);
  fill(255);
  rectMode(CENTER);

  
}

function draw() {
  background(0);


  for (let x = 0; x < width/cols; x++) {
    for (let y = 0; y < height/rows; y++) {
      let n = noise(x, y, i);
      rect(x*width/cols, y*height/rows, n*width/cols, n*height/rows);
    }
  }
  i += 0.01
  

}

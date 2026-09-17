


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noFill();
  stroke(255);
}

function draw() {
  background(0);
  
  for (let i = 0; i < 500; i++) {
    rect(random(width), random(height), 100);
  }

}

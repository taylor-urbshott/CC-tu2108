let i = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(155);
  noFill();

  
}

function draw() {
  background(0);
  beginShape();
  for (let x = 0; x < 50; x ++) {
    let n = x % 2;
    let xPos = x * 20;
    let yPos;
    if (n == 0) {
      yPos = height/4 + 200 * noise(x/10 + i);
    } else {
      yPos = 3*height/4 + 200 * noise(x/100 + 2 * i);
    }
    vertex(xPos, yPos);
  }
  endShape();
  i += 0.01
  

}

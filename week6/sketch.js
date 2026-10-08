// let circ = {
//   x: 500,
//   y: 100,
//   radius: 50,
//   r: 100,
//   g: 50,
//   b: 200
// }
let flowers = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
    flowers[i].move();
  }
  
}

function mousePressed() {
  flowers.push(new Flower());
  
}


class Flower{
  constructor(){
    this.x = mouseX;
    this.y = mouseY;
    this.numPetals = int(random(3,12));
    this.centerCol = color(random(255), random(255), random(255));
    this.petalCol = color(random(255), random(255), random(255));
    this.petalLength = random(50,300);
    this.petalWidth = random(30,100);
    this.xV = random(-1, 3);
    this.yV = random(-1, 3);
  }
  move() {
    this.x+=this.xV;
    this.y+=this.yV;
  }

  display() {
    push();
    translate(this.x, this.y);
    
    push();
    fill(this.petalCol);
    for (let i = 0; i < this.numPetals; i++) {
      rotate((360/this.numPetals)*i);
      ellipse(0, 0, this.petalLength, this.petalWidth);
    }
    pop();
    
    fill(this.centerCol);
    ellipse(this.x, this.y, this.petalLength/3)
    pop();
  }

}
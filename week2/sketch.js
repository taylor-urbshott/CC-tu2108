let x
let ySpeed
let xSpeed
let diameter = 50
let y = diameter+1
function setup() {
  createCanvas(windowWidth, windowHeight)
  x = random(width)
  ySpeed = random(-10, 10)
  xSpeed = random(-10, 10)
  rectMode(CENTER)
  strokeWeight(5)
}

function draw() {
  background(25, 80)
  stroke(300,200,0)
  fill(40)
  ellipse(x, y, diameter, diameter)
  
  if(y >= height - diameter/2){
    ySpeed = -ySpeed
  }
  if(y <= diameter/2){
    ySpeed = -ySpeed
  }
  if(x >= width - diameter/2){
    xSpeed = -xSpeed
  }
  if(x <= diameter/2){
    xSpeed = -xSpeed
  }

  y+=ySpeed
  x+=xSpeed

  print(y)
}

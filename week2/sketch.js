let bayWidth = 100
let rows = 10
let on

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0,0,20)
}

function draw() {

}

function mouseClicked() {
  background(0,0,20,30)
  let units = int(random(2,6))
  fill(50)
  rect(mouseX - units*bayWidth/2-bayWidth/4, mouseY, units*bayWidth+bayWidth/2, height)
  let windowOriginX = mouseX - bayWidth*((units*2)-1)/4
  let windowOriginY = mouseY + bayWidth/2
  for (let i = 0; i < units; i++) {
    for (let j = 0; j < rows; j++){
      on = random(-1,1)
      if (on > 0) {
        fill(0,0,20)
      } else {
        fill(255,200,0)
      }
      rect(windowOriginX + i*bayWidth, windowOriginY + j*bayWidth, bayWidth/2, bayWidth/2)
    }
  }
  
}


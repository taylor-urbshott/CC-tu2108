let bayWidth, floorHeight, windowScale
let rows = 14
let col1, col2, col3, col4, col5, col6
let minSpire = 200, maxSpire = 500
let wtXScale = 80
let wtYScale = 60



function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0,0,20)
  col1 = color('#5c0504')
  col2 = color('#1e1d24')
  col3 = color('#4a362c')
  col4 = color('#131424')
  col5 = color('#261b15')
  col6 = color('#312a27')
  
}

function mouseClicked() {
  // draw atmosphere
  background(0,0,20,10)

  // set building fundamentals
  bayWidth = random(65,120)
  floorHeight = random(90,110)
  let units = int(random(3,7))
  let originX = mouseX - units*bayWidth/2-bayWidth/4
  let buildingWidth = units*bayWidth+bayWidth/2

  // pick builsing color
  fill(lerpColor(col1, col2, random(1)))

  // draw building mass
  rect(originX, mouseY, buildingWidth, height)

  //find origin of top left window
  let windowOriginX = mouseX - bayWidth*((units*2)-1)/4
  let windowOriginY = mouseY + floorHeight/2

  //draw windows
  for (let i = 0; i < units; i++) {
    for (let j = 0; j < rows; j++){
      on = random(-1,1)
      if (on > 0) {
        fill(0,0,20)
      } else {
        fill(255,200,0)
      }
      rect(windowOriginX + i*bayWidth, windowOriginY + j*floorHeight, bayWidth/2, floorHeight/2)
    }
  }

  // pick decoration style, 0 == no decoarion
  style = int(random(0,4))

  // elevator cap
  if (style == 1) {
    fill (20)
    let ecWidth = random(0.8*bayWidth, 1.2*bayWidth)
    let ecX = random(originX, originX + buildingWidth - bayWidth)
    rect(ecX, mouseY-floorHeight+30, ecWidth, floorHeight-30)
  }

  // water tower
  if (style == 2) {
    fill(lerpColor(col6, col5, random(1)))
    let wtX = random(originX, originX + buildingWidth - wtXScale)
    rect(wtX, mouseY-wtYScale*1.5, wtXScale, wtYScale)
    fill(lerpColor(col4, col2, random(1)))
    triangle(wtX, mouseY-wtYScale*1.5, wtX + wtXScale, mouseY-wtYScale*1.5, wtX + wtXScale/2, mouseY-wtYScale*1.8)
    strokeWeight(3)
    stroke(5)
    line(wtX, mouseY-1, wtX, mouseY - wtYScale/2)
    line(wtX, mouseY - wtYScale/2, wtX + wtXScale, mouseY-1)
    line(wtX + wtXScale, mouseY-1, wtX + wtXScale, mouseY - wtYScale/2)
    line(wtX + wtXScale, mouseY - wtYScale/2, wtX, mouseY-1)
    line(wtX, mouseY - wtYScale/2, wtX + wtXScale, mouseY - wtYScale/2)
    strokeWeight(1)
    stroke(0)
  }

  // spire
  if (style == 3) {
    fill(25)
    spireHeight = random(minSpire, maxSpire)
    triangle(mouseX - 2, mouseY, mouseX, mouseY - spireHeight, mouseX + 2, mouseY)
    lightCt = int(random(3))
    fill(200, 0, 0)
    for (let c = lightCt; c > 0; c--){
      ellipse(mouseX, mouseY - random(100, spireHeight), 5)
    }
  }

  // pick cornice style, 0 == no cornice
  style = int(random(0,3))

  // simple cornice
  if (style == 1) {
    fill(lerpColor(col3, col4, random(1)))
    rect(originX - 10, mouseY-15, buildingWidth + 20, 15)
  }

  // detailed cornice
  if (style == 2) {
    fill(lerpColor(col3, col4, random(1)))
    rect(originX - 10, mouseY-15, buildingWidth + 20, 15)
    quad(originX - 10, mouseY, originX, mouseY + 10, originX + buildingWidth, mouseY + 10, originX + buildingWidth + 10, mouseY)

  }
  
}


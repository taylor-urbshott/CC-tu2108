let density = 20;
let cells = [];
let xCt = 20;
let yCt = 15;
let xScale, yScale;
let playerX, playerY;
let lastPlayerDir = 0;
let playerSpeed = 2.5;
let frameCt = 0;
let frames = [];
let color1, color2;
let decay = 0.005;
let portalX, portalY;
let portalColor;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  angleMode(DEGREES);
  imageMode(CENTER);
  noStroke();
  color1 = color(120, 214, 170);
  color2 = color(0, 0, 0);

  portalX = int(random(xCt));
  portalY = int(random(yCt));
  print(portalX);
  portalColor = color(230, 113, 158);

  // grid setup
  xScale = int(width/xCt);
  yScale = int(height/yCt);
  for (let i = 0; i < xCt; i++) {
    cells[i] = [];
    for (let j = 0; j < yCt; j++) {
      if (i == portalX && j == portalY) {
        cells[i][j] = new Cell(i, j, xScale, yScale, true);
      } else {
        cells[i][j] = new Cell(i, j, xScale, yScale, false);
      }
      
    }
  }
  // player setup
  playerX = width/2;
  playerY = height/2;
  for (let i = 0; i < 12; i++) {
    frames[i] = await loadImage("../spriteframes/blob_" + (i) + '.png');
    print(frames[i]);
  }
}

function draw() {

  let img = frames[frameCt % frames.length];

  if (keyIsDown(68) && keyIsDown(83) || keyIsDown(68) && keyIsDown(65) || keyIsDown(68) && keyIsDown(87) || keyIsDown(83) && keyIsDown(65) || keyIsDown(683) && keyIsDown(87) || keyIsDown(65) && keyIsDown(87)) {
    d = 0;
  } else if (keyIsDown(68)) {
    // d key
    d = 0;
    lastPlayerDir = d;
    frameCt++;
    playerX += playerSpeed;
  } else if (keyIsDown(83)) {
    // s key
    d = 90;
    lastPlayerDir = d;
    frameCt++;
    playerY += playerSpeed;
  } else if (keyIsDown(65)) {
    // a key
    d = 180;
    lastPlayerDir = d;
    frameCt++;
    playerX -= playerSpeed;
  } else if (keyIsDown(87)) {
    // w key
    d = 270;
    lastPlayerDir = d;
    frameCt++;
    playerY -= playerSpeed;
  } else {
    d = 0;
  }

  for (let i = 0; i < xCt; i++) {
    for (let j = 0; j < yCt; j++) {
      if (cells[i][j].x < playerX && (cells[i][j].x + xScale) > playerX && cells[i][j].y < playerY && (cells[i][j].y + yScale) > playerY) {
        cells[i][j].visit();
        
      }
      cells[i][j].update();
    }
  }
  
  push();
  translate(playerX, playerY);
  rotate(lastPlayerDir);
  image(img, 0, 0);
  pop();

}
  
class Cell {
  constructor(col, row, xScale, yScale, isPortal){
    this.x = col * xScale;
    this.y = row * yScale;
    this.xScale = xScale;
    this.yScale = yScale;
    this.isPortal = isPortal;
    this.lastVisit = -1;
  }
  visit() {
    if (!this.isPortal) {
      this.lastVisit = 0;
    } else {
      window.location.href = "../sketch2";
    }
    
  }
  update() {
    if (this.lastVisit >= 0) {
      this.lastVisit++;
      fill(lerpColor(color1, color2, (decay * this.lastVisit)));
      if ((this.lastVisit * decay) > 1) {
        this.wlastVisit = -1;
      }
    } else if (!this.isPortal) {
      fill(0);
    } else {
      fill(portalColor);
    }
    rect(this.x, this.y, xScale, yScale);
  }
}
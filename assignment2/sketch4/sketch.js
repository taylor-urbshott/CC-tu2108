let count = 5;
let minSize = 20, maxSize = 200;
let sizeList = [], xList = [], yList = [];
let bounce = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);
  rectMode(CENTER);
  noFill();
  stroke(255)

  // initialize locations of wobbles
  for (let i = 0; i < count; i++) {
    sizeList.push(int(random(minSize, maxSize)));
    // TODO: eliminate overlap
    // while ()
    
    let x = int(random(0 + sizeList[i], width - sizeList[i]));
    let y = int(random(0 + sizeList[i], height - sizeList[i]));
    xList.push(x);
    print(x);
    yList.push(y);
  }
  
}

function draw() {
  background(0);
  for (let i = 0; i < count; i++) {
    let size = sizeList[i];
    if ((yList[i] - size/2) < mouseY && mouseY < (yList[i] + size/2) && (xList[i] - size/2) < mouseX && mouseX < (xList[i] + size/2)) {
      strokeWeight(2);
      xList[i] = random(xList[i] - bounce, xList[i] + bounce);
      yList[i] = random(yList[i] - bounce, yList[i] + bounce);
      rect(xList[i], yList[i], sizeList[i]);
      strokeWeight(1);
    } else {
      rect(xList[i], yList[i], sizeList[i]);
    }
  }
}



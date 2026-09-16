let count = 5;
let minSize = 20, maxSize = 200;
let sizeList = [], xList = [], yList = [], hoverTime = [0, 0, 0, 0, 0]; 
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
  for (let i = 0; i < sizeList.length; i++) {
    let size = sizeList[i];
    if ((yList[i] - size/2) < mouseY && mouseY < (yList[i] + size/2) && (xList[i] - size/2) < mouseX && mouseX < (xList[i] + size/2)) {
      hoverTime[i] += deltaTime;
      strokeWeight(2);
      xList[i] = random(xList[i] - bounce, xList[i] + bounce);
      yList[i] = random(yList[i] - bounce, yList[i] + bounce); 
    } else if (hoverTime[i] > 0){
      hoverTime[i] -= deltaTime;
    } 
    fill(hoverTime[i]/8, 0, 0)
    rect(xList[i], yList[i], sizeList[i]);
    strokeWeight(1);
    if (hoverTime[i] > 2000) {
      rect(xList[i], yList[i], sizeList[i] * 2);
      hoverTime.splice(i, 1);
      xList.splice(i, 1);
      yList.splice(i, 1);
      sizeList.splice(i, 1);
    }
  }
}




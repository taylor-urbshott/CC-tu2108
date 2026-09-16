let pressedDuration = 0;
let sprayScale = 30;
let sprayDensity = 60;
let h, s, b;
let colorIncrement = 10;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  background(70);
  img = await loadImage('background.jpg');
  image(img, 0, 0); // fill canvas code sourced from p5.js reference site
  noStroke()
  colorMode(HSB);
  h = 0;
  s = 100;
  b = 100;
  
}

function draw() {
  fill(h, s, b);
  rect(10,10,50,50)
  if (mouseIsPressed) {
    pressedDuration = pressedDuration + deltaTime;
    spray(pressedDuration/1000);
  } else if (pressedDuration != 0) {
    pressedDuration = 0;
  }
}

function keyPressed() {
  if (key == 'a') {
    h -= colorIncrement;
    if (h < 0){
      h += 360;
    }
  }

  if (key == 'd') {
    h += colorIncrement;
    if (h > 360) {
      h -= 360;
    }
  }

  if (key == 'w') {
    if (b<100) {
      b += colorIncrement;
    }
  }

  if (key == 's') {
    if (b > 0) {
      b -= colorIncrement;
    }
  }

  if (key == 'q') {
    if (s > 0) {
      s -= colorIncrement;
    }
  }

  if (key == 'e') {
    if (s < 100) {
      s += colorIncrement;
    }
  }
}


function spray(pD) {
  for (let i = 0; i < sprayDensity; i++) {
    let spray
    if (pD < 5) {
      spray = sprayScale * random(pD);
    } else {
      spray = sprayScale * random(5);
    }

    // let x = mouseX + random(-spray, spray);
    // let y = mouseY + random(-spray, spray);
    // smoothed below
    let x = map(i/sprayDensity, 0, 1, pmouseX, mouseX) + random(-spray, spray);
    let y = map(i/sprayDensity, 0, 1, pmouseY, mouseY) + random(-spray, spray);
    circle(x, y, 1);
  }
} 


let frames = [];
let x;
let xV = 7.5;
let d = 1;
let lastD = 1;
let img;
let ct = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  for (let i = 0; i < 12; i++) {
    frames[i] = await loadImage((i + 1) + '.png');
  }
  imageMode(CENTER)
  x = width/2;
}

function draw() {
  background(200);
  let img = frames[ct % frames.length];
  x += d * xV;
  translate (x, height/2);
  if (d == 0) {
    scale(lastD, 1);
  } else {
    scale(d, 1);
  }
  image(img, 0, 0);

  // if (x > width || x < 0) {
  //   d = -d;
  // }
  
  if (keyIsDown(65) && keyIsDown(68)) {
    d = 0;
  } else if (keyIsDown(65)) {
    d = -1;
    lastD = d;
    ct++;
  } else if (keyIsDown(68)) {
    d = 1;
    lastD = d;
    ct++;
  } else {
    d = 0;
  }


  if (x > width) {
    window.location.href=d("../../")
  }
}
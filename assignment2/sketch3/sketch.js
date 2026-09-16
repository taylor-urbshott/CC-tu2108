let orbX, orbY; 
let orbSize = 30;
let orbSlug = 10;
let bg, stk;
let timer = 0;
let cooldown = 300;


function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = color(0);
  stk = color(255);
  background(bg);
  stroke(stk);
  strokeWeight(2);
  noFill();
  orbX = windowWidth/2;
  orbY = windowHeight/2;
}

function draw() {
  background(bg);
  stroke(stk);
  orbX = map(1, 0, orbSlug, orbX, mouseX);
  orbY = map(1, 0, orbSlug, orbY, mouseY);
  ellipse(orbX, orbY, orbSize);
  let dist = sqrt(pow(orbX - mouseX, 2) + pow(orbY - mouseY, 2))
  if (dist <= orbSize) {
    if (timer <= 0) {
      timer = cooldown;
      bg = color(int(random(256)), int(random(256)), int(random(256)));
      stk = color(int(random(256)), int(random(256)), int(random(256)));
    }
    timer -= deltaTime;
  }

}
let cam;
let canv;
let scalar = 8;


async function setup() {
  canv = createCanvas(640, 480);
  pixelDensity(1);
  cam = await createCapture(VIDEO, {flipped:true}, camReady);
  cam.hide();
}

function camReady() {
  print(cam.width, cam.height)
  cam.size(cam.width/scalar, cam.height/scalar);

  canv.width = 640;
  canv.height = 480;
}

function draw() {
  background(0);
  let index = 0;

  cam.loadPixels();

  for (let y = 0; y < cam.height; y++) {

    beginShape()

    for (let x = 0; x < cam.width; x++) {
      let r = cam.pixels[index];
      let g = cam.pixels[index+1];
      let b = cam.pixels[index+2];

      let bright = (r + g + b) /3

      fill(bright);

      let s = bright/255

      rect(x*scalar,y*scalar, s*scalar, s*scalar)
      

      index+= 4;
      // image (cam, x*width/numCols, y*height/numRows, width/numCols, height/numRows)
    }

    endShape();
  }

  cam.updatePixels();


}

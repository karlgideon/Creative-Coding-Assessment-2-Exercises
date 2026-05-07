let pic;

function preload() {
  pic = loadImage('julien-chatelain-fS2iVWUiBgw-unsplash.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(211,211,211);

  // CLIP START
  beginClip();

  // simple shape (circles)
  circle(200, 200, 200);
  circle(70, 200,150);
  circle(330, 200,150);
  circle(200,320,150);
  circle(200,70,150);

  endClip();
  // CLIP END

  // image inside clipped shape
  image(pic, 0, 0, 400, 400);


  // text
  fill(255,255,0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Working with Images', 200, 200);
}
let mic;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  mic = new p5.AudioIn();
  //code to let the get the audio from the mic
  mic.start();
}

function draw() {
  //when there is an audio, it increases
  let micLevel = mic.getLevel() * height * 10;
  
  fill(random(255), random(255), random(255));
  
  //positions based from mouse interaction
  circle(mouseX, mouseY, micLevel);
}
function mousePressed() {
  background(100);
}
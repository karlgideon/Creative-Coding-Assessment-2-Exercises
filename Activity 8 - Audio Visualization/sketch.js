let amp;
function preload(){
  sound=loadSound('Zedd - Clarity ft. Foxes (LYRICS).mp3')
}

function setup() {
  createCanvas(400,400);
  sound.loop();
  amp=new p5.Amplitude();
}

function draw() {
  background(20,10,20);
  let level = amp.getLevel();
  fill(random(255), random(255), random(255));
  
  let bigSize = map(level, 0,1,0,width/2);
  circle(width/2, height/2, bigSize*5);
  

let smallSize = map(level, 0, 1, 50, 100);

fill(random(255), random(255), random(255)); 
noStroke();
circle(0, 0, smallSize);
circle(width, 0, smallSize);
circle(0, height, smallSize);
circle(width, height, smallSize);
}
function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  //road
  fill(71,71,71);
  noStroke();
  rect(0, 200, 400, 200);
  fill(255);
  rect(-50, 290, 70, 20);
  rect(50, 290, 70, 20);
  rect(150, 290, 70, 20);
  rect(250, 290, 70, 20);
  rect(350, 290, 70, 20);
  
  //moon
  fill(144, 144, 144);
  circle(50, 50, 100);
  
  //car
  fill(0,128,128);
  rect(100, 280, 200, 40);
  //roof
  arc(212, 280, 125, 100, PI, 0, CHORD);
  //tires
  fill(85,85,85);
  circle(150,320, 40);
  circle(260,320, 40);
  fill(255);
  circle(150,320, 20);
  circle(260,320, 20);
  //headlights
  fill(255,255,0);
  rect(100,280,20,10)
  //windows
  fill(173, 216, 230); 

  arc(210, 280, 100, 85, PI, PI + HALF_PI, PIE);
  arc(215, 280, 100, 85, -PI/2, 0, PIE);
  
}
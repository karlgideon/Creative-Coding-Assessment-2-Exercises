let angle =1
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51,51,51);
  //spaceship
  fill(85,112,118);
  arc(200, 200, 250, 180, PI, 0, PIE);
  arc(200, 160, 150, 150, PI, 0, PIE);
  fill(76,76,103);
  arc(120, 200, 50, 50, 0, PI, PIE);
  arc(200, 200, 50, 50, 0, PI, PIE);
  arc(280, 200, 50, 50, 0, PI, PIE);
  circle(130,63,25)
  circle(263,63,25)
  fill(0,128,0)
  
//alien
  rect(185,135,25,25)
  circle(197,130,40)
  arc(189, 135, 20, 20, PI, 0, PIE)
  arc(206, 135, 20, 20, PI, 0, PIE)

//alien face
  fill(0)
  rect(185,130,10,3)
  rect(200,130,10,3)
  circle(198,140,2)
  fill(255,255,255)
  stroke(0)
  
//left spaceship antenna
  push();
  fill(110,149,152);
  translate(width/2.8,height/6);
  rotate(angle);
  rect(0,0,35,15)
  pop();

//right spaceship antenna
  push();
  fill(110,149,152);
  translate(width/1.7,height/4.2);
  rotate(-angle);
  rect(0,0,35,15)
  pop();
  
}
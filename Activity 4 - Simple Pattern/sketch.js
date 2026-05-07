function setup() {
  createCanvas(500, 500);
noStroke();
let cols = 20; 
let rows = 20;
let w = width/cols;
let h = height/rows;
  
for (let i = 0; i < cols; i++) { 
  for (let j = 0; j < rows; j++) {
let r = map(i, 0, cols - 1, 0, 255);
stroke(255);
fill(0, 0, r); 
rect(i * w, j * h, w, h);
}
}
}
let ballX, ballY, ballSpeedX, ballSpeedY;
let paddleX, paddleW;
let score = 0;
let gameOver = false;
let sound;


function setup() {
  createCanvas(600, 400);
  startGame(); // initialize game values
}

function draw() {
  background(0);

  if (!gameOver) {

    // move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // bounce off left and right walls
    if (ballX < 0 || ballX > width) ballSpeedX *= -1;

    // bounce off top wall
    if (ballY < 0) ballSpeedY *= -1;

    // paddle follows mouse (clamped inside screen)
    paddleX = constrain(mouseX, 0, width - paddleW);

    // check collision with paddle
    if (
      ballY + 10 >= height - 20 &&
      ballX > paddleX &&
      ballX < paddleX + paddleW
    ) {
      ballSpeedY *= -1; // bounce up
      score++; // increase score
    }

    // game over condition
    if (ballY > height) gameOver = true;

    // draw ball
    fill(0, 200, 255);
    ellipse(ballX, ballY, 20);

    // draw paddle
    fill(0, 255, 100);
    rect(paddleX, height - 20, paddleW, 10);

    // draw score
    fill(255);
    textSize(16);
    text("Score: " + score, 20, 30);

  } else {
    // game over screen
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("Game Over", width / 2, height / 2 - 20);

    textSize(20);
    text("Click to Restart", width / 2, height / 2 + 20);
  }
}

// restart game on click
function mousePressed() {
  if (gameOver) {
    startGame();
  }
    // start music on first click
  if (!sound.isPlaying()) {
    sound.loop(); // or sound.play()
  }
}


// reset all values
function startGame() {
  ballX = width / 2;
  ballY = height / 2;

  ballSpeedX = 4;
  ballSpeedY = 4;

  paddleW = 100;
  score = 0;
  gameOver = false;
}
//preloads the music
function preload(){
sound = loadSound('A Dramatic Irony.mp3');
}


var word1 = "Without music, life would be a mistake.";
var word2 = "- Friedrich Nietzsche, Twilight of the Idols";
var font1;

function preload()
{
  font1 = loadFont("fonts/Jersey10Charted-Regular.ttf");
  font2 = loadFont("fonts/Shadowchrome-Regular.ttf");
}

function setup() {
  createCanvas(600,400);
  background(199,167,204);
  fill(255);
  textFont(font1,40);
  textAlign(CENTER);
  text(word1,300,200)
  
  textFont(font2,20);
  textAlign(CENTER);
  text(word2,300,250);
}
let table;

function preload() {
  table = loadTable('Sheet1.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
  background(255,217,209);

  let barWidth = 60;
  
  for (let i = 0; i < table.getRowCount(); i++) {

    let nationality = table.getString(i, 'Nationality');
    let population = table.getNum(i, 'Population')
    let percentage = table.getNum(i, 'Percentage');

    let x = 30 + i * (barWidth + 10);
    let h = map(percentage, 0, 100, 0, height - 80);

    fill(random(255), random(255), random(255));
    rect(x, height - 80 - h, barWidth, h);

    fill(0);
    textAlign(CENTER);
    textSize(12);
    
    text(nationality, x + barWidth / 2, height - 40);
    text(population +"M", x + barWidth / 2, height - 25);
    text(percentage + "%", x + barWidth / 2, height - 13);
  }
}
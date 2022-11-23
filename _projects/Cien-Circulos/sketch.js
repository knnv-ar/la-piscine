function setup() {
  let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
}

function draw() {
  background(220);
  background("white");
  noFill();

  var rowCounter = 0;
  while (rowCounter < 5) {
    var columnCounter = 0;

    while (columnCounter < 5) {
      circle(50 + columnCounter * 99, 50 + rowCounter * 99, random(99));
      circle(50 + columnCounter * 99, 50 + rowCounter * 99, random(99));
      circle(50 + columnCounter * 99, 50 + rowCounter * 99, random(99));
      circle(50 + columnCounter * 99, 50 + rowCounter * 99, random(99));
      circle(50 + columnCounter * 99, 50 + rowCounter * 99, random(99));
      circle(50 + columnCounter * 99, 50 + rowCounter * 99, random(99));
      circle(50 + columnCounter * 99, 50 + rowCounter * 99, random(99));
      columnCounter = columnCounter + 1;
    }
    rowCounter = rowCounter + 1;
  }
}

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);


  stroke(0, 0, 0);
  fill(150, 150, 150);


  stroke(255, 255, 255);
  fill(255, 255, 255);
  
for (let i = 0; i < 512; i += 10) {
  line(i, 0, i, 512);

}


  
for (let i = 0; i < 512; i += 10) {
  line(0, i, i, 512);

}

  for (let i = 0; i < 512; i += 10) {
  line(512, i, i, 0);

}
  fill(0, 0, 0);
  ellipse(255, 250, 40, 40);

}

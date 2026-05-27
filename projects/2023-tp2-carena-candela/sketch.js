function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');
}

function mouseDragged() {
  orbitControl();
}

function draw() {
  background(0);

  //caja grande cristal
  stroke(255);
  noFill();
  box(100);

  //caja interior colores
  push();
  fill(random(90), random(90), random(90));
  box(50);
  pop();

  //romper el cristal
  if (keyIsPressed) {
    background(0);
    fill(random(255), random(255), random(255));
    box(70);

    //jaula chiquita
    push();
    stroke(255);
    noFill();
    box(10);
    pop();

    //interior como para que no sature tanto
    push();
    stroke(255);
    fill(0);
    box(69);
    pop();
  }
}

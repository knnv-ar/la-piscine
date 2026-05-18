// U.N.A MULTIMEDIALES - ARTES MULTIMEDIALES 1 - T.P.2
// Título de la obra: Volviendo al pensamiento a.
// Autor: Luca Deira, en base a una obra de Ernesto Deira
// Año: 2024

let img1;
let seleccion;

function preload() {
  img1 = loadImage("en-torno-al-pensamiento-a.jpg");
}

function setup() {
  
  let canvas = createCanvas(800, 655);;
canvas.parent('div-sketch');
  image(img1, 0, 0);
}

function draw() {
  //       console.log (mouseX,mouseY)

  //-------------------------ICONOS
  stroke(255);
  //a
  fill(get(27, 330));
  rect(20, 20, 20, 20);
  //b
  fill(get(556, 515));
  rect(40, 20, 20, 20);
  //c
  fill(get(132, 568));
  rect(60, 20, 20, 20);
  //d
  fill(get(653, 37));
  rect(80, 20, 20, 20);
  //e
  fill(get(621, 456));
  rect(100, 20, 20, 20);
  //f
  fill(get(479, 319));
  rect(120, 20, 20, 20);
  //g
  fill(get(106, 327));
  rect(140, 20, 20, 20);
  
  //-------------------------BORRADOR
  stroke(0)
  fill(255, 255, 255);
  rect(740, 600, 20, 20);

  //-------------------------SELECCION DE COLOR
  if (mouseIsPressed) {
    //a
    push();
    if (mouseX > 20 && mouseX < 40 && mouseY > 20 && mouseY < 40) {
      seleccion = color(get(27, 330));
    }
    if (seleccion !== undefined) {
      stroke(seleccion);
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    pop();
    //b
    push();
    if (mouseX > 40 && mouseX < 60 && mouseY > 20 && mouseY < 40) {
      seleccion = color(get(556, 515));
    }
    if (seleccion !== undefined) {
      stroke(seleccion);
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    pop();
    //c
    push();
    if (mouseX > 60 && mouseX < 80 && mouseY > 20 && mouseY < 40) {
      seleccion = color(get(132, 568));
    }
    if (seleccion !== undefined) {
      stroke(seleccion);
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    pop();
    //d
    push();
    if (mouseX > 80 && mouseX < 100 && mouseY > 20 && mouseY < 40) {
      seleccion = color(get(653, 37));
    }
    if (seleccion !== undefined) {
      stroke(seleccion);
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    pop();
    //e
    push();
    if (mouseX > 100 && mouseX < 120 && mouseY > 20 && mouseY < 40) {
      seleccion = color(get(621, 456));
    }
    if (seleccion !== undefined) {
      stroke(seleccion);
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    pop();
    //f
    push();
    if (mouseX > 120 && mouseX < 140 && mouseY > 20 && mouseY < 40) {
      seleccion = color(get(479, 319));
    }
    if (seleccion !== undefined) {
      stroke(seleccion);
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    pop();
    //g
    push();
    if (mouseX > 140 && mouseX < 160 && mouseY > 20 && mouseY < 40) {
      seleccion = color(get(106, 327));
    }
    if (seleccion !== undefined) {
      stroke(seleccion);
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    pop();

    //-------------------------LIMPIAR LIENZO
    if (mouseX > 740 && mouseX < 760 && mouseY > 600 && mouseY < 620)
      image(img1, 0, 0);
    stroke(255)
    fill(get(27, 330));
    rect(20, 20, 20, 20);
    fill(get(556, 515));
    rect(40, 20, 20, 20);
    fill(get(132, 568));
    rect(60, 20, 20, 20);
    fill(get(653, 37));
    rect(80, 20, 20, 20);
    fill(get(621, 456));
    rect(100, 20, 20, 20);
    fill(get(479, 319));
    rect(120, 20, 20, 20);
    fill(get(106, 327))
    rect(140, 20, 20, 20)
    fill(255, 255, 255);
    rect(740, 600, 20, 20);
  }
}

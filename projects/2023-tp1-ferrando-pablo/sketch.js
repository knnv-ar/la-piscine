/* Inspirado en la obra de Frieder Nake

https://creacionhibrida.net/frieder-nake-pionero-del-arte-algoritmico/

A partir del movimiento del mouse, varía si el movimiento es rá pido o lento. El circulo que se mueve de izquierda a derecha aparecen con el movimiento rápido del mouse soble el lienzo */

let circul = 100;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(220);
}

function draw() {
  // Dos conjuntos de lineas que se generan de forma random

  for (let x = 120; x < width; x += 110) {
    let mx = mouseX / 0.1;
    let desplazamientoA = int(random(-mx, mx));
    let desplazamientoB = int(/*random*/ (-mx, mx));
    line(x - desplazamientoA, 120, x + desplazamientoB, 510);
    for (let x = 320; x < width; x += 320) {
      let desplazamientoA = int(random(-mx, mx));
      let desplazamientoB = int(random(-mx, mx));
      line(x - desplazamientoA, 0.1, x + desplazamientoB, 120);
    }

    // Circulo mas grande fijo

    push();
    fill(150);
    strokeWeight(200);
    point(180, 230);

    //  movimiento del circulo

    circul += 0.5;

    pop();

    fill(200);
    circle(310, 325, 100);
    stroke(110);
    
    // Despazamiento del circulo

    push();
    if (frameCount <= desplazamientoB) {
      fill(155);
      if (circul <= width) {
        background(20);
        circle(circul, 210, 150);
        pop();
        stroke(126);
        noFill();
        bezier(0, 110, 30, 120, 50, 150, 512, 110);
        noFill();
        bezier(0, 310, 30, 330, 50, 350, 512, 310);
      }
    }
  }
}
document.oncontextmenu = function () {
  return false;
};

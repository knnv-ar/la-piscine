
let arrastrarx = 0;
let arrastrary = 0;

function setup() {
 let canvas= createCanvas(600, 600);
  canvas.parent('div-sketch');
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
}

function draw() {
  background(0);
  translate(300, 300);

  //bucle para dibujar las palabras en espiral
  for (let dir = 3; dir < 33; dir = dir + 0.35) {
    //cada vez que crece la dir se aleja mas la dis del centro
    let dis = dir * 8;
    push();
    //linea que hace que no se mueva el espiral entero
    translate(arrastrarx * (1 - dir / 33), arrastrary * (1 - dir / 33));
    //rota todo el espiral
    rotate(frameCount * 0.02);
    //acomoda las palabras en ancho y alto y en espiral
    translate(cos(dir) * dis, sin(dir) * dis);
    //acomoda las palabras acostadas en el espiral
    rotate(dir - PI / 2);
    textSize(dis * 0.09);
    text("sentido", 0, 0);
    pop();
  }
}

function mouseDragged() {
  arrastrarx = arrastrarx + (mouseX - pmouseX);
  arrastrary = arrastrary + (mouseY - pmouseY);
}

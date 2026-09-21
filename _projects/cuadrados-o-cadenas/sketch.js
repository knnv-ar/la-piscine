let movimiento = false;
let movimientoX = 0;
let movimientoY = 0;

function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch');
}

function draw() {
  background(0);

  stroke(150);
  strokeWeight(2);

 // 4 FILAS
  for (let fila = 0; fila < 4; fila++) {

 // 4 COLUMNAS
  for (let columna = 0; columna < 4; columna++) {

      let x = 35 + columna * 115;
      let y = 35 + fila * 115;

 // 12 PALITOS POR GRUPO
  for (let i = 1; i < 13; i++) {

 // TAMAÑOS
    let largo;
        if (i % 2 == 0) {
          largo = 85;
        } else {
          largo = 75;
        }

 // MOVIMIENTO
      push();

        if (movimiento == true) {

          movimientoX = map(sin(frameCount * 0.03 + i),-1, 1,-40, 40);

          movimientoY = map(cos(frameCount * 0.03 + i),-1, 1,-20, 20 );
        } 
        else {
          movimientoX = 0;
          movimientoY = 0;
        }

 // POSICIÓN DEL PALITO
        translate(x + i * 7 + movimientoX,y + movimientoY);

 // PALITO
        line(0, 0, 0, largo);

        
    pop();
      }
    }
  }
}
 // BARRA ESPACIADORA: EMPIEZA / PAUSA
function keyPressed() {
  if (key == ' ') {movimiento = !movimiento;}
}
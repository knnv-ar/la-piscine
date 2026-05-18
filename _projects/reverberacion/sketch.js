// LOLA CAPODANNO 
// ARTES MULTIMEDIALES 1 - TN
// TP1 

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);  
  strokeWeight(1);  
  noFill();  
}

function draw() {
  background(0, 20);  
  translate(width / 2, height / 2);  

  let cantFiguras = 20;  
  let tamañoBase = 50; 
  let tamañoMaximo = 600;  
  let velocidadRotacion = 0.02;  
  
  for (let i = 0; i < cantFiguras; i++) {
    push();  
    let t = frameCount * velocidadRotacion + i * TWO_PI / cantFiguras;
    let tamaño = map(sin(t), -1, 1, tamañoBase, tamañoMaximo); 
    rotate(t);  
    

        // deformacion x la posición del mouse
    let deformacionX = map(mouseX, 0, width, 0.5, 2);  // se ancha
    let deformacionY = map(mouseY, 0, height, 0.5, 2);  // se alarga 

       // alterna blanco y negro
    if (i % 2 == 0) {
      stroke(255);  
    } else {
      stroke(0);  
      strokeWeight(1);  
    }

    
// figura defor
    beginShape();
    for (let j = 0; j < 6; j++) {  // hexágono
      let ang = j * PI / 3;  // angulo para vértice
      let x = cos(ang) * tamaño / 2 * deformacionX;  // X con def
      let y = sin(ang) * tamaño / 2 * deformacionY;  // Y con def
      curveVertex(x, y);  //  bordes suavess
    }
    endShape(CLOSE);  

    pop();  
  }
}





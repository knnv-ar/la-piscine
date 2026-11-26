




//             ****************************************
//             * ------ F  O  S  F  E  N  O  S ------ *
//             ****************************************
//
//
//
//
//
//
//
// ***INSTRUCCIONES***
//Una vez iniciado Fosfenos estará a la espera de la intervención del espectador
//para la creación de un resultado final.
//Nuestro mando es el mouse y al precionar click entraremos en estado de seguimiento 
//a nuestro cursor para poder utilizarlo como un pincel moviendo la agrupación de triángulos
//por nuestro lienzo opacotranslucido generando una imagen fija a partir del movimiento logarítmico.
//Al presionar cualquier tecla Fosfenos se reiniciará para volver a empezar.
//
//
//
// 




//variables principales 
let opacityTrail = 1;
let easing = 0.03;
let atraccion = 0;
let tiempo = 0;
let estado = 0//variable para alternar entre las fases. 0 = libre 1 = seguimiento 2 = estatizado

  
function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch');
  background(10);
}

function draw() {
  
  //REINICIO DEL SISTEMA
  if (keyIsPressed) {
    background(10); 
    tiempo = 0;
    atraccion = 0;
    estado = 0; // Volvemos al estado a su fase de movimiento libre
  }

  //DETECCIÓN DE ESTADOS
  if (mouseIsPressed) {
    estado = 1; //seguimiento
  } else {
    // Si solté el clic (el mouse no está presionado) pero antes lo estaba (estado == 1)
    if (estado == 1) { 
      estado = 2; //imagen fija
    }
  }

  //DIBUJO Y MOVIMIENTO (estado 1)
  if (estado != 2) {
    
    //Tiempo solo avanza en estado 1
    tiempo = tiempo + 1;

    //atracción
    if (estado == 1) {
      atraccion = atraccion + (1 - atraccion) * easing; // Se acercan al mouse
    } else {
      atraccion = atraccion + (0 - atraccion) * easing; // Regresan a su órbita normal
    }

    // Efecto translúcido
    fill(0, opacityTrail);
    noStroke();
    rect(0, 0, 512, 512);

    for (let i = 0; i < 800; i = i + 1) {
      
      //Posiciones base
      let baseX = 256 + sin(i * 11.2) * 256;
      let baseY = 256 + cos(i * 23.4) * 256;
      
      let frecX = map(sin(i * 35.1), -1, 1, 0.01, 0.05);
      let frecY = map(cos(i * 46.2), -1, 1, 0.01, 0.05);
      let velRot = map(sin(i * 57.3), -1, 1, -0.03, 0.03);

      let movX = map(sin(tiempo * frecX), -1, 1, -20, 20);
      let movY = map(cos(tiempo * frecY), -1, 1, -20, 20);

      //Interpolación entre el movimiento base y la posición del mouse
      let x = (baseX + movX) + (mouseX - (baseX + movX)) * atraccion;
      let y = (baseY + movY) + (mouseY - (baseY + movY)) * atraccion;

      let escalaObj = 2 + 1 * sin(tiempo * 0.01 + i);
      let rotacion = (tiempo * velRot) + (sin(i) * 6.28); 

      //Vértices
      let v1x = map(sin(i * 11), -1, 1, -15, 15);
      let v1y = map(cos(i * 22), -1, 1, -15, 15);
      let v2x = map(sin(i * 33), -1, 1, 20, 40);
      let v2y = 10;
      let v3x = 10;
      let v3y = map(cos(i * 44), -1, 1, 30, 50);

      //Escala de gris
      let baseColor = map(sin(i * 55), -1, 1, 0, 110);

      //Transformaciones
      push();
      translate(x, y);
      rotate(rotacion);
      scale(escalaObj);

      fill(baseColor, 5); 
      noStroke();
      triangle(v1x, v1y, v2x, v2y, v3x, v3y);
      pop();
    }
  }
}
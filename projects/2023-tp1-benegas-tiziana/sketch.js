/*
tp 1 - AM1
Tiziana Benegas

*/

let contador = 0;
let angulo = 0;
let osciloscopio = 512;// para poder disminuir la cantidad
let escena;//controla el switch

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  switch (escena) {
    case 0: //------OSCILOSCOPIO----------------------
      push(); 
      background(0);
      stroke(random(255), 17.5);

      for (let x = 0; x < osciloscopio; x += 35) {      
       
        let grosor = random(70); //random grosor
        strokeWeight(grosor);
        line(x, width / 2, x + grosor, width / 2);
        if (contador > 70) { 
          osciloscopio--;
        }
      }
      pop();//fin osciloscopio
      break;
      
    case 1: //-----------------IMAGEN---------------------------------
      push(); //líneas
      translate(width / 2, height / 2); //al medio
      strokeWeight(1.75);
      stroke(255, 14);

      // --------- punto 1-----
      let x = sin(angulo / 7) * 140;
      let y = sin(angulo / 7) * 140;

      // ----- punto 2---------------
      let x2 = cos(-angulo / 7) * angulo;
      let y2 = cos(-angulo / 3) * angulo;

      line(x, y, x2, y2);
      break;

    case 2: //------------OJOS------------------------------------------
      // ----DERECHO-----
      push();
      background(0); // para que se borre el fondo
      strokeWeight(random(3.75));
      stroke(255, 70);

      if (contador % 700 == 0) {
        // la cruz para "cerrar" aparece cada 700 fotogramas en ambos ojos
        push();
        stroke(255,100);
        strokeWeight(3.5);
        //cruz derecha
        line(145, width / 2 + 7, 135, width / 2 - 7);
        line(135, width / 2 + 7, 145, width / 2 - 7);
        //cruz izquierda
        line(380, width / 2 + 7, 370, width / 2 - 7);
        line(370, width / 2 + 7, 380, width / 2 - 7);
        pop();
      }

      push(); //líneas del ojo
      translate(140, height / 2); //posición
      scale(angulo / 280);

      for (let i = 17.5; i < angulo; i += 3.5) {
        rotate(angulo / 140);
        line(i + sin(angulo / 7), 0, i + cos(-angulo / 7) * angulo, 70);//mismo mov que la imagen
      }
      pop();//fin ojo derecho

      //----IZQUIERDO-----
      push(); //líneas ojo izquierdo
      translate(375, height / 2);
      scale(angulo / 280);

      for (let i = 17.5; i < angulo; i += 3.5) {
        rotate(angulo / 140);
        line(i + sin(angulo / 7), 0, i + cos(-angulo / 7) * angulo, 70);//mismo mov que la imagen
      }
      pop();// fin ojo izquierdo
      pop();// fin push general
      break;
  }

  angulo += 0.07;
  
  contador++;
  // if que controla los estados del switch case
  if (contador < 280) {
    //--------OSCILOSCOPIO----------
    escena = 0;
  } else if (contador < 2400) {
    //--------IMAGEN----------
    escena = 1;
  } else if (contador < 3700) {
    //-----------------OJOS-------
    escena = 2;
  }
} //fin draw

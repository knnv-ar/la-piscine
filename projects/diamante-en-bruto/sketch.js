/*TP N° 1
  Basado en la producción de Oscillons de Ben Laposky (1950)
  y en las obras de Vera Molnar.*/

/* Nombre: "Diamante en bruto"(2024). Vivian Laurent. */

/*Interaccion:
  Click izquierdo, flecha izquierda y derecha*/

  function setup() {
    let canvas = createCanvas(512, 512);
    canvas.parent('div-sketch');
  }
  
  function draw() {
    //Variables
    vel = frameCount * 0.05;
    espacio = 7;
    angulo = 45;
  
    //si se presiona el mouse, el fondo se vuelve blanco y la figura, negra.
    if (mouseIsPressed) {
      //fondo
      background(250, random(20, 50));
  
      if (keyIsPressed) {
        //Si ademas se presiona el left arrow, gira la figura a la izquierda.
        if (keyCode == LEFT_ARROW) {
          //fondo
          background(250, random(20, 50));
  
          push();
          translate(width / 2, height / 2);
          rotate(angulo - vel * 0.3);
          translate(-width / 2, -height / 2);
  
          for (let i = 0; i < 45; i++) {
            for (let j = 0; j < 5; j++) {
              //animacion variando con sin y cos
              xMov = sin(vel + i * 0.2) * 50;
              yMov = cos(vel + j / 0.3) * 50;
  
              //estableciendo espacio entre las lineas y animandolas
              xPos = i * espacio + xMov;
              yPos = j * 100 + yMov;
  
              //parametros de la linea
              strokeWeight(random(0, 1));
              stroke(0, random(0, 100));
              line(xPos, width / 2, height / 2, yPos);
            }
          }
          pop();
  
          //grilla
          for (let i = 0; i < width; i++) {
            strokeWeight(0.5);
            stroke(250, 15);
            line(i * espacio, 0, i * espacio, height);
            line(width, i * espacio, 0, i * espacio);
          }
          //si ademas se presionala right arrow,
          //gira la figura hacia la derecha
        } else if (keyCode == RIGHT_ARROW) {
          //fondo
          background(250, random(20, 50));
  
          push();
          translate(width / 2, height / 2);
          rotate(angulo + vel * 0.3);
          translate(-width / 2, -height / 2);
  
          for (let i = 0; i < 45; i++) {
            for (let j = 0; j < 5; j++) {
              //animacion variando con sin y cos
              xMov = sin(vel + i * 0.2) * 50;
              yMov = cos(vel + j / 0.3) * 50;
  
              //estableciendo espacio entre las lineas y animandolas
              xPos = i * espacio + xMov;
              yPos = j * 100 + yMov;
  
              //parametros de la linea
              strokeWeight(random(0, 1));
              stroke(0, random(0, 100));
              line(xPos, width / 2, height / 2, yPos);
            }
          }
          pop();
  
          //grilla
          for (let i = 0; i < width; i++) {
            strokeWeight(0.5);
            stroke(250, 15);
            line(i * espacio, 0, i * espacio, height);
            line(width, i * espacio, 0, i * espacio);
          }
        }
        //si solo se presiona el mouse, solo cambia el fondo pero sin rotar
      } else {
        //figura
        push();
        translate(width / 2 + 60, height / 2 + 60);
        //rotate(angulo + vel * 0.3);
        translate(-width / 2, -height / 2);
  
        for (let i = 0; i < 45; i++) {
          for (let j = 0; j < 5; j++) {
            //animacion variando con sin y cos
            xMov = sin(vel + i * 0.2) * 50;
            yMov = cos(vel + j / 0.3) * 50;
  
            //estableciendo espacio entre las lineas y animandolas
            xPos = i * espacio + xMov;
            yPos = j * 100 + yMov;
  
            //parametros de la linea
            strokeWeight(random(0, 1));
            stroke(0, random(0, 100));
            line(xPos, width / 2, height / 2, yPos);
          }
        }
        pop();
  
        //grilla
        for (let i = 0; i < width; i++) {
          strokeWeight(0.5);
          stroke(250, 15);
          line(i * espacio, 0, i * espacio, height);
          line(width, i * espacio, 0, i * espacio);
        }
      }
    } else if (keyIsPressed) {
      //Si se presiona el left arrow, gira la figura a la izquierda.
      if (keyCode == LEFT_ARROW) {
        //fondo
        background(10, random(20, 50));
  
        push();
        translate(width / 2, height / 2);
        rotate(angulo - vel * 0.3);
        translate(-width / 2, -height / 2);
  
        for (let i = 0; i < 45; i++) {
          for (let j = 0; j < 5; j++) {
            //animacion variando con sin y cos
            xMov = sin(vel + i * 0.2) * 50;
            yMov = cos(vel + j / 0.3) * 50;
  
            //estableciendo espacio entre las lineas y animandolas
            xPos = i * espacio + xMov;
            yPos = j * 100 + yMov;
  
            //parametros de la linea
            strokeWeight(random(0, 1));
            stroke(255, random(0, 100));
            line(xPos, width / 2, height / 2, yPos);
          }
        }
        pop();
  
        //grilla
        for (let i = 0; i < width; i++) {
          strokeWeight(0.5);
          stroke(0, 15);
          line(i * espacio, 0, i * espacio, height);
          line(width, i * espacio, 0, i * espacio);
        }
        //si se presionala right arrow, gira la figura hacia la derecha
      } else if (keyCode == RIGHT_ARROW) {
        //fondo
        background(10, random(20, 50));
  
        push();
        translate(width / 2, height / 2);
        rotate(angulo + vel * 0.3);
        translate(-width / 2, -height / 2);
  
        for (let i = 0; i < 45; i++) {
          for (let j = 0; j < 5; j++) {
            //animacion variando con sin y cos
            xMov = sin(vel + i * 0.2) * 50;
            yMov = cos(vel + j / 0.3) * 50;
  
            //estableciendo espacio entre las lineas y animandolas
            xPos = i * espacio + xMov;
            yPos = j * 100 + yMov;
  
            //parametros de la linea
            strokeWeight(random(0, 1));
            stroke(255, random(0, 100));
            line(xPos, width / 2, height / 2, yPos);
          }
        }
        pop();
  
        //grilla
        for (let i = 0; i < width; i++) {
          strokeWeight(0.5);
          stroke(0, 15);
          line(i * espacio, 0, i * espacio, height);
          line(width, i * espacio, 0, i * espacio);
        }
      }
      //la figura sin interacción:
    } else {
      //fondo
      background(10, random(20, 50));
  
      //figura
      push();
      translate(width / 2 + 60, height / 2 + 60);
      //rotate(angulo + vel * 0.3);
      translate(-width / 2, -height / 2);
  
      for (let i = 0; i < 45; i++) {
        for (let j = 0; j < 5; j++) {
          //animacion variando con sin y cos
          xMov = sin(vel + i * 0.2) * 50;
          yMov = cos(vel + j / 0.3) * 50;
  
          //estableciendo espacio entre las lineas y animandolas
          xPos = i * espacio + xMov;
          yPos = j * 100 + yMov;
  
          //parametros de la linea
          strokeWeight(random(0, 1));
          stroke(255, random(0, 100));
          line(xPos, width / 2, height / 2, yPos);
        }
      }
      pop();
  
      //grilla
      for (let i = 0; i < width; i++) {
        strokeWeight(0.5);
        stroke(0, 15);
        line(i * espacio, 0, i * espacio, height);
        line(width, i * espacio, 0, i * espacio);
      }
    }
  }
  
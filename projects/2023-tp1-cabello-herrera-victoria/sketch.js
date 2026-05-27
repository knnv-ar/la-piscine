function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(33, 37, 41); // gris oscuro

  let color1 = color(mouseX);
  let color2 = color(mouseY);
  let color3 = color(222, 226, 230);

  //x1punto y y1punto como los dos parámetros de la línea
  let x1punto = 80;
  let y1punto = 10;

  //x2punto y y2punto como los últimos parámetros de la línea
  let x2punto = 10; // si aumento valor me hace una distancia entre   lineas
  let y2punto = 25; //si aumento el valor me abre mas el centro y     si bajo me lo achica

  //posiciones
  let xposicion = mouseX;
  let yposicion = mouseY;

  // Usé if-else para restringir los valores de "xposicion" e         "yposicion" dentro de los límites del lienzo y que los elementos   dibujados permanezcan dentro.

  for (let i = 0; i <= 80; i++) {
    if (xposicion < 0) {
      xposicion = 0;
    } else if (xposicion > width) {
      xposicion = width;
    }

    if (yposicion < 0) {
      yposicion = 0;
    } else if (yposicion > height) {
      yposicion = height;
    }

    strokeWeight(0.5);
    stroke(color1, color2, color3);

    //// primeras lineas de los puntos x1, y1////

    //curva en la esquina superior izquierda
    line(xposicion, y1punto * i, (x1punto * i) / 10, yposicion);

    //curva en la esquina inferior izquierda
    line(
      xposicion,
      height - y1punto * i,
      (x1punto * i) / 10,
      height - yposicion
    );

    ////segundas lineas de los puntos x2, y2////

    //curva en la esquina superior derecha
    stroke(color1 - 100, color2 - 100, color3 - 100);
    line(
      (x2punto * i * 4) / 3,
      height - yposicion,
      width - xposicion,
      (y2punto * i) / 2
    );

    //curva en la esquina inferior derecha
    line((x2punto * i * 4) / 3, yposicion, xposicion, (y2punto * i)     / 2);
    }

  //arcos del centro
  noStroke();
  fill(255, 120); //segundo parametro para transparencia
  noStroke();
  arc(250, 250, 50, 50, 0, PI);
  fill(173, 181, 189);
  arc(250, 250, 50, 50, PI, 0);
}

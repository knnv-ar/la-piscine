/*
TP1 - Artes Multimediales 1
Cátedra Lacabanne
Lara Petrosino
*/
var mitadAncho, mitadAlto;
var zoom = 1.8;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(150);

  //line(50,60,420,60);

  strokeCap(SQUARE);
  strokeWeight(18);

  stroke(25);

  line(337, 330, 337, 404);

  line(346, 395, 104, 395);
  line(113, 394, 113, 165);
  line(114, 174, 271, 174);
  line(262, 175, 262, 293);
  line(263, 284, 421, 284);
  line(412, 283, 412, 89);
  line(411, 98, 66, 98);
  line(75, 99, 75, 443);
  line(76, 434, 440, 434);

  //line(300,212,300,394);

  

  strokeWeight(18);
  stroke(50);

  line(225, 70, 225, 254);
  line(226, 245, 374, 245);
  line(375, 254, 375, 126);
  line(374, 135, 142, 135);
  line(151, 126, 151, 368);
  line(152, 359, 384, 359);
  line(375, 358, 375, 313);
  line(374, 322, 188, 322);
  line(187, 331, 187, 202);
  line(188, 211, 346, 211);

  line(337, 212, 337, 330);


//MARIPOSA
  mitadAncho = width / 2;
  mitadAlto = height / 2;

  strokeWeight(1);

  stroke(255);
  line(mitadAncho, mitadAlto, mitadAncho - 18 * zoom, mitadAlto - 36 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 14 * zoom, mitadAlto - 32 * zoom);
  line(
    mitadAncho,
    mitadAlto - 1,
    mitadAncho - 10 * zoom,
    mitadAlto - 28 * zoom
  );
  line(mitadAncho, mitadAlto - 1, mitadAncho - 7 * zoom, mitadAlto - 24 * zoom);
  line(mitadAncho, mitadAlto - 2, mitadAncho - 4 * zoom, mitadAlto - 18 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 22 * zoom, mitadAlto - 38 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 23 * zoom, mitadAlto - 34 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 23 * zoom, mitadAlto - 30 * zoom);
  stroke(250);
  line(mitadAncho, mitadAlto, mitadAncho - 23 * zoom, mitadAlto - 26 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 23 * zoom, mitadAlto - 22 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 22 * zoom, mitadAlto - 18 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 21 * zoom, mitadAlto - 14 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 20 * zoom, mitadAlto - 10 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 19 * zoom, mitadAlto - 7 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 17 * zoom, mitadAlto - 4 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho - 15 * zoom, mitadAlto - 1 * zoom);
  stroke(247);
  line(mitadAncho, mitadAlto + 1, mitadAncho - 12 * zoom, mitadAlto + 1 * zoom);
  line(mitadAncho, mitadAlto + 1, mitadAncho - 13 * zoom, mitadAlto + 3 * zoom);
  line(mitadAncho, mitadAlto + 2, mitadAncho - 15 * zoom, mitadAlto + 5 * zoom);
  line(mitadAncho, mitadAlto + 2, mitadAncho - 16 * zoom, mitadAlto + 8 * zoom);
  stroke(250);
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 17 * zoom,
    mitadAlto + 11 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 18 * zoom,
    mitadAlto + 14 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 19 * zoom,
    mitadAlto + 17 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 19 * zoom,
    mitadAlto + 20 * zoom
  );
  stroke(255);
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 18 * zoom,
    mitadAlto + 22 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 19 * zoom,
    mitadAlto + 25 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 18 * zoom,
    mitadAlto + 28 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 15 * zoom,
    mitadAlto + 27 * zoom
  );
  stroke(250);
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho - 12 * zoom,
    mitadAlto + 26 * zoom
  );
  line(mitadAncho, mitadAlto + 2, mitadAncho - 9 * zoom, mitadAlto + 24 * zoom);
  stroke(247);
  line(mitadAncho, mitadAlto + 2, mitadAncho - 6 * zoom, mitadAlto + 21 * zoom);
  line(mitadAncho, mitadAlto + 1, mitadAncho - 4 * zoom, mitadAlto + 19 * zoom);

  stroke(255);
  line(mitadAncho, mitadAlto, mitadAncho + 18 * zoom, mitadAlto - 36 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 14 * zoom, mitadAlto - 32 * zoom);
  line(
    mitadAncho,
    mitadAlto - 1,
    mitadAncho + 10 * zoom,
    mitadAlto - 28 * zoom
  );
  line(mitadAncho, mitadAlto - 1, mitadAncho + 7 * zoom, mitadAlto - 24 * zoom);
  line(mitadAncho, mitadAlto - 2, mitadAncho + 4 * zoom, mitadAlto - 18 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 22 * zoom, mitadAlto - 38 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 23 * zoom, mitadAlto - 34 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 23 * zoom, mitadAlto - 30 * zoom);
  stroke(250);
  line(mitadAncho, mitadAlto, mitadAncho + 23 * zoom, mitadAlto - 26 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 23 * zoom, mitadAlto - 22 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 22 * zoom, mitadAlto - 18 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 21 * zoom, mitadAlto - 14 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 20 * zoom, mitadAlto - 10 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 19 * zoom, mitadAlto - 7 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 17 * zoom, mitadAlto - 4 * zoom);
  line(mitadAncho, mitadAlto, mitadAncho + 15 * zoom, mitadAlto - 1 * zoom);
  stroke(247);
  line(mitadAncho, mitadAlto + 1, mitadAncho + 12 * zoom, mitadAlto + 1 * zoom);
  line(mitadAncho, mitadAlto + 1, mitadAncho + 13 * zoom, mitadAlto + 3 * zoom);
  line(mitadAncho, mitadAlto + 2, mitadAncho + 15 * zoom, mitadAlto + 5 * zoom);
  line(mitadAncho, mitadAlto + 2, mitadAncho + 16 * zoom, mitadAlto + 8 * zoom);
  stroke(250);
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 17 * zoom,
    mitadAlto + 11 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 18 * zoom,
    mitadAlto + 14 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 19 * zoom,
    mitadAlto + 17 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 19 * zoom,
    mitadAlto + 20 * zoom
  );
  stroke(255);
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 18 * zoom,
    mitadAlto + 22 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 19 * zoom,
    mitadAlto + 25 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 18 * zoom,
    mitadAlto + 28 * zoom
  );
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 15 * zoom,
    mitadAlto + 27 * zoom
  );
  stroke(250);
  line(
    mitadAncho,
    mitadAlto + 2,
    mitadAncho + 12 * zoom,
    mitadAlto + 26 * zoom
  );
  line(mitadAncho, mitadAlto + 2, mitadAncho + 9 * zoom, mitadAlto + 24 * zoom);
  stroke(247);
  line(mitadAncho, mitadAlto + 2, mitadAncho + 6 * zoom, mitadAlto + 21 * zoom);
  line(mitadAncho, mitadAlto + 1, mitadAncho + 4 * zoom, mitadAlto + 19 * zoom);

  stroke(190);
  line(mitadAncho, mitadAlto - 10, mitadAncho, mitadAlto + 11 * zoom);
  //FIN MARIPOSA
  
  }

  /*function draw() {
  console.log("x: " + mouseX + "   |   y: " + mouseY);
}*/

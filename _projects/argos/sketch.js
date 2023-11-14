var disturbio = false;

var pureza = 155;

function setup() {
  let = createCanvas(512, 512);
  canvas.parent('div-sketch');
  rg = 14;
}

function draw() {
  

  if (disturbio) {
    background(55);
  } else {
    background(125);
  }

  if (disturbio) {
    fill(150);

    // FILA DOS

    // triangulo 1
    triangle(
      0 + random(-6, 6),
      102.4 + random(-6, 6),
      52.2 + random(-6, 6),
      0 + random(-6, 6),
      102.4 + random(-6, 6),
      102.4 + random(-6, 6)
    );

    //triangulo 2
    triangle(
      102.4 + random(-6, 6),
      102.4 + random(-6, 6),
      153.6 + random(-6, 6),
      0 + random(-6, 6),
      204.8 + random(-6, 6),
      102.4 + random(-6, 6)
    );

    //triangulo 3
    triangle(
      204.8 + random(-6, 6),
      102.4 + random(-6, 6),
      257 + random(-6, 6),
      0 + random(-6, 6),
      307.2 + random(-6, 6),
      102.4 + random(-6, 6)
    );

    //triangulo 4
    triangle(
      307.2 + random(-6, 6),
      102.4 + random(-6, 6),
      359.4 + random(-6, 6),
      0 + random(-6, 6),
      409.6 + random(-6, 6),
      102.4 + random(-6, 6)
    );

    //triangulo 5
    triangle(
      409.6 + random(-6, 6),
      102.4 + random(-6, 6),
      461.8 + random(-6, 6),
      0 + random(-6, 6),
      512 + random(-6, 6),
      102.4 + random(-6, 6)
    );

    // Fila dos

    //triangulo 1
    triangle(
      0 + random(-6, 6),
      204.8 + random(-6, 6),
      52.2 + random(-6, 6),
      102.4 + random(-6, 6),
      102.4 + random(-6, 6),
      204.8 + random(-6, 6)
    );

    //triangulo 2
    triangle(
      102.4 + random(-6, 6),
      204.8 + random(-6, 6),
      153.6 + random(-6, 6),
      102.4 + random(-6, 6),
      204.8 + random(-6, 6),
      204.8 + random(-6, 6)
    );

    //triangulo 3
    triangle(
      204.8 + random(-6, 6),
      204.8 + random(-6, 6),
      257 + random(-6, 6),
      102.4 + random(-6, 6),
      307.2 + random(-6, 6),
      204.8 + random(-6, 6)
    );

    //triangulo 4
    triangle(
      307.2 + random(-6, 6),
      204.8 + random(-6, 6),
      359.4 + random(-6, 6),
      102.4 + random(-6, 6),
      409.6 + random(-6, 6),
      204.8 + random(-6, 6)
    );

    //triangulo 5
    triangle(
      409.6 + random(-6, 6),
      204.8 + random(-6, 6),
      461.8 + random(-6, 6),
      102.4 + random(-6, 6),
      512 + random(-6, 6),
      204.8 + random(-6, 6)
    );

    //FILA tres

    // fila 3

    //triangulo 1
    triangle(
      0 + random(-6, 6),
      307.2 + random(-6, 6),
      52.2 + random(-6, 6),
      204.8 + random(-6, 6),
      102.4 + random(-6, 6),
      307.2 + random(-6, 6)
    );

    //triangulo 2
    triangle(
      102.4 + random(-6, 6),
      307.2 + random(-6, 6),
      153.6 + random(-6, 6),
      204.8 + random(-6, 6),
      204.8 + random(-6, 6),
      307.2 + random(-6, 6)
    );

    //triangulo 3
    triangle(
      204.8 + random(-6, 6),
      307.2 + random(-6, 6),
      257 + random(-6, 6),
      204.8 + random(-6, 6),
      307.2 + random(-6, 6),
      307.2 + random(-6, 6)
    );

    //triangulo 4
    triangle(
      307.2 + random(-6, 6),
      307.2 + random(-6, 6),
      359.4 + random(-6, 6),
      204.8 + random(-6, 6),
      409.6 + random(-6, 6),
      307.2 + random(-6, 6)
    );

    //triangulo 5
    triangle(
      409.6 + random(-6, 6),
      307.2 + random(-6, 6),
      461.8 + random(-6, 6),
      204.8 + random(-6, 6),
      512 + random(-6, 6),
      307.2 + random(-6, 6)
    );

    //Fila Cuatro

    //triangulo 1
    triangle(
      0 + random(-6, 6),
      409.6 + random(-6, 6),
      51.2 + random(-6, 6),
      307.2 + random(-6, 6),
      102.4 + random(-6, 6),
      409.6 + random(-6, 6)
    );

    //triangulo 2
    triangle(
      102.4 + random(-6, 6),
      409.6 + random(-6, 6),
      153.6 + random(-6, 6),
      307.2 + random(-6, 6),
      204.8 + random(-6, 6),
      409.6 + random(-6, 6)
    );

    //triangulo 3
    triangle(
      204.8 + random(-6, 6),
      409.6 + random(-6, 6),
      257 + random(-6, 6),
      307.2 + random(-6, 6),
      307.2 + random(-6, 6),
      409.6 + random(-6, 6)
    );

    //triangulo 4
    triangle(
      307.2 + random(-6, 6),
      409.6 + random(-6, 6),
      359.4 + random(-6, 6),
      307.2 + random(-6, 6),
      409.6 + random(-6, 6),
      409.6 + random(-6, 6)
    );

    //triangulo 5
    triangle(
      409.6 + random(-6, 6),
      409.6 + random(-6, 6),
      461.8 + random(-6, 6),
      307.2 + random(-6, 6),
      512 + random(-6, 6),
      409.6 + random(-6, 6)
    );

    //FILA CINCO

    //triangulo 1
    triangle(
      0 + random(-6, 6),
      510.5 + random(-6, 6),
      51.2 + random(-6, 6),
      409.6 + random(-6, 6),
      102.4 + random(-6, 6),
      510.5 + random(-6, 6)
    );

    //triangulo 2
    triangle(
      102.4 + random(-6, 6),
      510.5 + random(-6, 6),
      153.6 + random(-6, 6),
      409.6 + random(-6, 6),
      204.8 + random(-6, 6),
      510.5 + random(-6, 6)
    );

    //triangulo 3
    triangle(
      204.8 + random(-6, 6),
      510.5 + random(-6, 6),
      257 + random(-6, 6),
      409.6 + random(-6, 6),
      307.2 + random(-6, 6),
      510.5 + random(-6, 6)
    );

    //triangulo 4
    triangle(
      307.2 + random(-6, 6),
      510.5 + random(-6, 6),
      359.4 + random(-6, 6),
      409.6 + random(-6, 6),
      409.6 + random(-6, 6),
      510.5 + random(-6, 6)
    );

    //triangulo 5
    triangle(
      409.6 + random(-6, 6),
      510.5 + random(-6, 6),
      461.8 + random(-6, 6),
      409.6 + random(-6, 6),
      512 + random(-6, 6),
      510.5 + random(-6, 6)
    );

    //TRIANGULITOS!!!
    fill(20);

    //FILA UNO

    //triangulo 1
    triangle(
      17 + random(-4, 4),
      97 + random(-4, 4),
      51.2 + random(-4, 4),
      25 + random(-4, 4),
      87 + random(-4, 4),
      97 + random(-4, 4)
    );

    //triangulo 2
    triangle(
      121 + random(-4, 4),
      97 + random(-4, 4),
      153.6 + random(-4, 4),
      25 + random(-4, 4),
      191 + random(-4, 4),
      97 + random(-4, 4)
    );

    //triangulo 3
    triangle(
      225 + random(-4, 4),
      97 + random(-4, 4),
      257 + random(-4, 4),
      25 + random(-4, 4),
      295 + random(-4, 4),
      97 + random(-4, 4)
    );

    //triangulo 4
    triangle(
      329 + random(-4, 4),
      97 + random(-4, 4),
      359.4 + random(-4, 4),
      25 + random(-4, 4),
      392 + random(-4, 4),
      97 + random(-4, 4)
    );

    //triangulo 5
    triangle(
      426 + random(-4, 4),
      97 + random(-4, 4),
      461.8 + random(-4, 4),
      25 + random(-4, 4),
      496 + random(-4, 4),
      97 + random(-4, 4)
    );

    //FILA DOS

    //triangulo 1
    triangle(
      17 + random(-4, 4),
      197.4 + random(-4, 4),
      51.2 + random(-4, 4),
      127.4 + random(-4, 4),
      87 + random(-4, 4),
      197.4 + random(-4, 4)
    );

    //triangulo 2
    triangle(
      121 + random(-4, 4),
      197.4 + random(-4, 4),
      153.6 + random(-4, 4),
      127.4 + random(-4, 4),
      191 + random(-4, 4),
      197.4 + random(-4, 4)
    );

    //triangulo 3
    triangle(
      225 + random(-4, 4),
      197.4 + random(-4, 4),
      257 + random(-4, 4),
      127.4 + random(-4, 4),
      295 + random(-4, 4),
      197.4 + random(-4, 4)
    );

    //triangulo 4
    triangle(
      329 + random(-4, 4),
      197.4 + random(-4, 4),
      359.4 + random(-4, 4),
      127.4 + random(-4, 4),
      392 + random(-4, 4),
      197.4 + random(-4, 4)
    );

    //triangulo 5
    triangle(
      426 + random(-4, 4),
      197.4 + random(-4, 4),
      461.8 + random(-4, 4),
      127.4 + random(-4, 4),
      496 + random(-4, 4),
      197.4 + random(-4, 4)
    );

    //FILA TRES

    //triangulo 1
    triangle(
      17 + random(-4, 4),
      299.8 + random(-4, 4),
      51.2 + random(-4, 4),
      229.8 + random(-4, 4),
      87 + random(-4, 4),
      297.8 + random(-4, 4)
    );

    //triangulo 2
    triangle(
      121 + random(-4, 4),
      299.8 + random(-4, 4),
      153.6 + random(-4, 4),
      229.8 + random(-4, 4),
      191 + random(-4, 4),
      297.8 + random(-4, 4)
    );

    //triangulo 3
    triangle(
      225 + random(-4, 4),
      299.8 + random(-4, 4),
      257 + random(-4, 4),
      229.8 + random(-4, 4),
      295 + random(-4, 4),
      297.8 + random(-4, 4)
    );

    //triangulo 4
    triangle(
      329 + random(-4, 4),
      299.8 + random(-4, 4),
      359.4 + random(-4, 4),
      229.8 + random(-4, 4),
      392 + random(-4, 4),
      297.8 + random(-4, 4)
    );

    //triangulo 5
    triangle(
      426 + random(-4, 4),
      299.8 + random(-4, 4),
      461.8 + random(-4, 4),
      229.8 + random(-4, 4),
      496 + random(-4, 4),
      297.8 + random(-4, 4)
    );

    //FILA CUATRO

    //triangulo 1
    triangle(
      17 + random(-4, 4),
      402.2 + random(-4, 4),
      51.2 + random(-4, 4),
      332.2 + random(-4, 4),
      87 + random(-4, 4),
      399.9 + random(-4, 4)
    );

    //triangulo 2
    triangle(
      121 + random(-4, 4),
      402.2 + random(-4, 4),
      153.6 + random(-4, 4),
      332.2 + random(-4, 4),
      191 + random(-4, 4),
      399.9 + random(-4, 4)
    );

    //triangulo 3
    triangle(
      225 + random(-4, 4),
      402.2 + random(-4, 4),
      257 + random(-4, 4),
      332.2 + random(-4, 4),
      295 + random(-4, 4),
      399.9 + random(-4, 4)
    );

    //triangulo 4
    triangle(
      329 + random(-4, 4),
      402.2 + random(-4, 4),
      359.4 + random(-4, 4),
      332.2 + random(-4, 4),
      392 + random(-4, 4),
      399.9 + random(-4, 4)
    );

    //triangulo 5
    triangle(
      426 + random(-4, 4),
      402.2 + random(-4, 4),
      461.8 + random(-4, 4),
      332.2 + random(-4, 4),
      496 + random(-4, 4),
      399.9 + random(-4, 4)
    );

    //triangulo 1
    triangle(
      17 + random(-4, 4),
      503.1 + random(-4, 4),
      51.2 + random(-4, 4),
      434.6 + random(-4, 4),
      87 + random(-4, 4),
      501.3 + random(-4, 4)
    );

    //triangulo 2
    triangle(
      121 + random(-4, 4),
      503.1 + random(-4, 4),
      153.6 + random(-4, 4),
      434.6 + random(-4, 4),
      191 + random(-4, 4),
      501.3 + random(-4, 4)
    );

    //triangulo 3
    triangle(
      225 + random(-4, 4),
      503.1 + random(-4, 4),
      257 + random(-4, 4),
      434.6 + random(-4, 4),
      295 + random(-4, 4),
      501.3 + random(-4, 4)
    );

    //triangulo 4
    triangle(
      329 + random(-4, 4),
      503.1 + random(-4, 4),
      359.4 + random(-4, 4),
      434.6 + random(-4, 4),
      392 + random(-4, 4),
      501.3 + random(-4, 4)
    );

    //triangulo 5
    triangle(
      426 + random(-4, 4),
      503.1 + random(-4, 4),
      461.8 + random(-4, 4),
      434.6 + random(-4, 4),
      496 + random(-4, 4),
      501.3 + random(-4, 4)
    );

    //TRIANGULOS "OJOS"

    fill(230);

    //FILA UNO

    //triangulo 1
    triangle(
      30 + random(-2, 2),
      90 + random(-2, 2),
      51.2 + random(-2, 2),
      45 + random(-2, 2),
      73 + random(-2, 2),
      90 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      134 + random(-2, 2),
      90 + random(-2, 2),
      153.6 + random(-2, 2),
      45 + random(-2, 2),
      177 + random(-2, 2),
      90 + random(-2, 2)
    );

    //triangulo 3
    triangle(
      238 + random(-2, 2),
      90 + random(-2, 2),
      257 + random(-2, 2),
      45 + random(-2, 2),
      281 + random(-2, 2),
      90 + random(-2, 2)
    );

    //triangulo 4
    triangle(
      342 + random(-2, 2),
      90 + random(-2, 2),
      359.4 + random(-2, 2),
      45 + random(-2, 2),
      382 + random(-2, 2),
      90 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      442 + random(-2, 2),
      90 + random(-2, 2),
      461.8 + random(-2, 2),
      45 + random(-2, 2),
      482 + random(-2, 2),
      90 + random(-2, 2)
    );

    //FILA DOS

    //triangulo 1
    triangle(
      30 + random(-2, 2),
      190.4 + random(-2, 2),
      51.2 + random(-2, 2),
      147.4 + random(-2, 2),
      73 + random(-2, 2),
      190.4 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      134 + random(-2, 2),
      190.4 + random(-2, 2),
      153.6 + random(-2, 2),
      147.4 + random(-2, 2),
      177 + random(-2, 2),
      190.4 + random(-2, 2)
    );

    //triangulo 3
    triangle(
      238 + random(-2, 2),
      190.4 + random(-2, 2),
      257 + random(-2, 2),
      147.4 + random(-2, 2),
      281 + random(-2, 2),
      190.4 + random(-2, 2)
    );

    //Triangulo 4
    triangle(
      342 + random(-2, 2),
      190.4 + random(-2, 2),
      359.4 + random(-2, 2),
      147.4 + random(-2, 2),
      382 + random(-2, 2),
      190.4 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      442 + random(-2, 2),
      190.4 + random(-2, 2),
      461.8 + random(-2, 2),
      147.4 + random(-2, 2),
      482 + random(-2, 2),
      190.4 + random(-2, 2)
    );

    //FILA TRES

    //triangulo 1
    triangle(
      30 + random(-2, 2),
      291.8 + random(-2, 2),
      51.2 + random(-2, 2),
      248.8 + random(-2, 2),
      73 + random(-2, 2),
      291.8 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      134 + random(-2, 2),
      291.8 + random(-2, 2),
      153.6 + random(-2, 2),
      248.8 + random(-2, 2),
      177 + random(-2, 2),
      291.8 + random(-2, 2)
    );

    //triangulo 4
    triangle(
      342 + random(-2, 2),
      291.8 + random(-2, 2),
      359.4 + random(-2, 2),
      248.8 + random(-2, 2),
      382 + random(-2, 2),
      291.8 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      442 + random(-2, 2),
      291.8 + random(-2, 2),
      461.8 + random(-2, 2),
      248.8 + random(-2, 2),
      482 + random(-2, 2),
      291.8 + random(-2, 2)
    );

    //FILA CUATRO

    //triangulo 1
    triangle(
      30 + random(-2, 2),
      393.2 + random(-2, 2),
      51.2 + random(-2, 2),
      350.2 + random(-2, 2),
      73 + random(-2, 2),
      393.2 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      134 + random(-2, 2),
      393.2 + random(-2, 2),
      153.6 + random(-2, 2),
      350.2 + random(-2, 2),
      177 + random(-2, 2),
      393.2 + random(-2, 2)
    );

    //triangulo 3
    triangle(
      238 + random(-2, 2),
      393.2 + random(-2, 2),
      257 + random(-2, 2),
      350.2 + random(-2, 2),
      281 + random(-2, 2),
      393.2 + random(-2, 2)
    );

    //triangulo 4
    triangle(
      342 + random(-2, 2),
      393.2 + random(-2, 2),
      359.4 + random(-2, 2),
      350.2 + random(-2, 2),
      382 + random(-2, 2),
      393.2 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      442 + random(-2, 2),
      393.2 + random(-2, 2),
      461.8 + random(-2, 2),
      350.2 + random(-2, 2),
      482 + random(-2, 2),
      393.2 + random(-2, 2)
    );

    //FILA CINCO

    //triangulo 1
    triangle(
      30 + random(-2, 2),
      494.6 + random(-2, 2),
      51.2 + random(-2, 2),
      451.6 + random(-2, 2),
      73 + random(-2, 2),
      494.6 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      134 + random(-2, 2),
      494.6 + random(-2, 2),
      153.6 + random(-2, 2),
      451.6 + random(-2, 2),
      177 + random(-2, 2),
      494.6 + random(-2, 2)
    );

    //triangulo 3
    triangle(
      238 + random(-2, 2),
      494.6 + random(-2, 2),
      257 + random(-2, 2),
      451.6 + random(-2, 2),
      281 + random(-2, 2),
      494.6 + random(-2, 2)
    );

    //triangulo 4
    triangle(
      342 + random(-2, 2),
      494.6 + random(-2, 2),
      359.4 + random(-2, 2),
      451.6 + random(-2, 2),
      382 + random(-2, 2),
      494.6 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      442 + random(-2, 2),
      494.6 + random(-2, 2),
      461.8 + random(-2, 2),
      451.6 + random(-2, 2),
      482 + random(-2, 2),
      494.6 + random(-2, 2)
    );

    //MINI TRIANGULOS

    fill(10);

    //triangulo 1

    triangle(
      39 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5),
      52.2 + random(-1.5, 1.5),
      58 + random(-1.5, 1.5),
      64 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5)
    );

    // triangulo 2

    triangle(
      141 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5),
      153.6 + random(-1.5, 1.5),
      58 + random(-1.5, 1.5),
      170 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5)
    );

    // triangulo 3

    triangle(
      246 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5),
      257 + random(-1.5, 1.5),
      58 + random(-1.5, 1.5),
      270 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5)
    );

    //triangulo 4

    triangle(
      352 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5),
      359.4 + random(-1.5, 1.5),
      58 + random(-1.5, 1.5),
      370 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5)
    );

    // triangulo 5

    triangle(
      453 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5),
      461.8 + random(-1.5, 1.5),
      58 + random(-1.5, 1.5),
      476 + random(-1.5, 1.5),
      82 + random(-1.5, 1.5)
    );

    // FILA DOS

    // triangulo 1

    triangle(
      39 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5),
      52.2 + random(-1.5, 1.5),
      158 + random(-1.5, 1.5),
      64 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5)
    );

    //triangulo 2

    triangle(
      141 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5),
      153.6 + random(-1.5, 1.5),
      158 + random(-1.5, 1.5),
      170 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5)
    );

    //triangulo 3

    triangle(
      246 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5),
      257 + random(-1.5, 1.5),
      158 + random(-1.5, 1.5),
      270 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5)
    );

    // triangulo 4

    triangle(
      352 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5),
      359.4 + random(-1.5, 1.5),
      158 + random(-1.5, 1.5),
      370 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5)
    );

    //triangulo 5
    triangle(
      453 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5),
      461.8 + random(-1.5, 1.5),
      158 + random(-1.5, 1.5),
      476 + random(-1.5, 1.5),
      183 + random(-1.5, 1.5)
    );

    //FILA TRES

    //Triangulo 1

    triangle(
      39 + random(-1.5, 1.5),
      283 + random(-1.5, 1.5),
      52.2 + random(-1.5, 1.5),
      258 + random(-1.5, 1.5),
      64 + random(-1.5, 1.5),
      283 + random(-1.5, 1.5)
    );

    //triangulo 2

    triangle(
      141 + random(-1.5, 1.5),
      283 + random(-1.5, 1.5),
      153.6 + random(-1.5, 1.5),
      258 + random(-1.5, 1.5),
      170 + random(-1.5, 1.5),
      283 + random(-1.5, 1.5)
    );

    //triangulo 4

    triangle(
      352 + random(-1.5, 1.5),
      283 + random(-1.5, 1.5),
      359.4 + random(-1.5, 1.5),
      258 + random(-1.5, 1.5),
      370 + random(-1.5, 1.5),
      283 + random(-1.5, 1.5)
    );

    // triangulo 5

    triangle(
      453 + random(-1.5, 1.5),
      283 + random(-1.5, 1.5),
      461.8 + random(-1.5, 1.5),
      258 + random(-1.5, 1.5),
      476 + random(-1.5, 1.5),
      283 + random(-1.5, 1.5)
    );

    // FILA CUATRO

    // triangulo 1

    triangle(
      39 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5),
      52.2 + random(-1.5, 1.5),
      358 + random(-1.5, 1.5),
      64 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5)
    );

    // triangulo 2

    triangle(
      141 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5),
      153.6 + random(-1.5, 1.5),
      358 + random(-1.5, 1.5),
      170 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5)
    );

    // triangulo 3

    triangle(
      246 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5),
      257 + random(-1.5, 1.5),
      358 + random(-1.5, 1.5),
      270 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5)
    );

    // triangulo 4

    triangle(
      352 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5),
      359.4 + random(-1.5, 1.5),
      358 + random(-1.5, 1.5),
      370 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5)
    );

    // triangulo 5

    triangle(
      453 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5),
      461.8 + random(-1.5, 1.5),
      358 + random(-1.5, 1.5),
      476 + random(-1.5, 1.5),
      383 + random(-1.5, 1.5)
    );

    //FILA CINCO

    // triangulo 1

    triangle(
      39 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5),
      52.2 + random(-1.5, 1.5),
      458 + random(-1.5, 1.5),
      64 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5)
    );

    // triangulo 2

    triangle(
      141 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5),
      153.6 + random(-1.5, 1.5),
      458 + random(-1.5, 1.5),
      170 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5)
    );

    // triangulo 3

    triangle(
      246 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5),
      257 + random(-1.5, 1.5),
      458 + random(-1.5, 1.5),
      270 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5)
    );

    // triangulo 4

    triangle(
      352 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5),
      359.4 + random(-1.5, 1.5),
      458 + random(-1.5, 1.5),
      370 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5)
    );

    // triangulo 5

    triangle(
      453 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5),
      461.8 + random(-1.5, 1.5),
      458 + random(-1.5, 1.5),
      476 + random(-1.5, 1.5),
      483 + random(-1.5, 1.5)
    );
  } else {
    // fila 1
    fill(30);

    //triangulo 1
    triangle(
      0 + random(-2, 2),
      102.4 + random(-2, 2),
      52.2 + random(-2, 2),
      0 + random(-2, 2),
      102.4 + random(-2, 2),
      102.4 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      102.4 + random(-2, 2),
      102.4 + random(-2, 2),
      153.6 + random(-2, 2),
      0 + random(-2, 2),
      204.8 + random(-2, 2),
      102.4 + random(-2, 2)
    );

    //triangulo 3
    triangle(
      204.8 + random(-2, 2),
      102.4 + random(-2, 2),
      257 + random(-2, 2),
      0 + random(-2, 2),
      307.2 + random(-2, 2),
      102.4 + random(-2, 2)
    );

    //triangulo 4
    triangle(
      307.2 + random(-2, 2),
      102.4 + random(-2, 2),
      359.4 + random(-2, 2),
      0 + random(-2, 2),
      409.6 + random(-2, 2),
      102.4 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      409.6 + random(-2, 2),
      102.4 + random(-2, 2),
      461.8 + random(-2, 2),
      0 + random(-2, 2),
      512 + random(-2, 2),
      102.4 + random(-2, 2)
    );

    // fila 2
    fill(30);

    //triangulo 1
    triangle(
      0 + random(-2, 2),
      204.8 + random(-2, 2),
      52.2 + random(-2, 2),
      102.4 + random(-2, 2),
      102.4 + random(-2, 2),
      204.8 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      102.4 + random(-2, 2),
      204.8 + random(-2, 2),
      153.6 + random(-2, 2),
      102.4 + random(-2, 2),
      204.8 + random(-2, 2),
      204.8 + random(-2, 2)
    );

    //triangulo 3
    triangle(
      204.8 + random(-2, 2),
      204.8 + random(-2, 2),
      257 + random(-2, 2),
      102.4 + random(-2, 2),
      307.2 + random(-2, 2),
      204.8 + random(-2, 2)
    );

    //triangulo 4
    triangle(
      307.2 + random(-2, 2),
      204.8 + random(-2, 2),
      359.4 + random(-2, 2),
      102.4 + random(-2, 2),
      409.6 + random(-2, 2),
      204.8 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      409.6 + random(-2, 2),
      204.8 + random(-2, 2),
      461.8 + random(-2, 2),
      102.4 + random(-2, 2),
      512 + random(-2, 2),
      204.8 + random(-2, 2)
    );

    // fila 3
    fill(30);

    //triangulo 1
    triangle(
      0 + random(-2, 2),
      307.2 + random(-2, 2),
      52.2 + random(-2, 2),
      204.8 + random(-2, 2),
      102.4 + random(-2, 2),
      307.2 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      102.4 + random(-2, 2),
      307.2 + random(-2, 2),
      153.6 + random(-2, 2),
      204.8 + random(-2, 2),
      204.8 + random(-2, 2),
      307.2 + random(-2, 2)
    );

    //triangulo 3
    triangle(
      204.8 + random(-2, 2),
      307.2 + random(-2, 2),
      257 + random(-2, 2),
      204.8 + random(-2, 2),
      307.2 + random(-2, 2),
      307.2 + random(-2, 2)
    );

    //triangulo 4
    triangle(
      307.2 + random(-2, 2),
      307.2 + random(-2, 2),
      359.4 + random(-2, 2),
      204.8 + random(-2, 2),
      409.6 + random(-2, 2),
      307.2 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      409.6 + random(-2, 2),
      307.2 + random(-2, 2),
      461.8 + random(-2, 2),
      204.8 + random(-2, 2),
      512 + random(-2, 2),
      307.2 + random(-2, 2)
    );

    // fila 4
    fill(30);

    //triangulo 1
    triangle(
      0 + random(-2, 2),
      409.6 + random(-2, 2),
      51.2 + random(-2, 2),
      307.2 + random(-2, 2),
      102.4 + random(-2, 2),
      409.6 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      102.4 + random(-2, 2),
      409.6 + random(-2, 2),
      153.6 + random(-2, 2),
      307.2 + random(-2, 2),
      204.8 + random(-2, 2),
      409.6 + random(-2, 2)
    );

    //triangulo 3
    triangle(
      204.8 + random(-2, 2),
      409.6 + random(-2, 2),
      257 + random(-2, 2),
      307.2 + random(-2, 2),
      307.2 + random(-2, 2),
      409.6 + random(-2, 2)
    );

    //triangulo 4
    triangle(
      307.2 + random(-2, 2),
      409.6 + random(-2, 2),
      359.4 + random(-2, 2),
      307.2 + random(-2, 2),
      409.6 + random(-2, 2),
      409.6 + random(-2, 2)
    );

    //triangulo 5
    triangle(
      409.6 + random(-2, 2),
      409.6 + random(-2, 2),
      461.8 + random(-2, 2),
      307.2 + random(-2, 2),
      512 + random(-2, 2),
      409.6 + random(-2, 2)
    );

    //fila 5
    fill(30);

    //triangulo 1
    triangle(
      0 + random(-2, 2),
      510.5 + random(-2, 2),
      51.2 + random(-2, 2),
      409.6 + random(-2, 2),
      102.4 + random(-2, 2),
      510.5 + random(-2, 2)
    );

    //triangulo 2
    triangle(
      102.4 + random(-2, 2),
      510.5 + random(-2, 2),
      153.6 + random(-2, 2),
      409.6 + random(-2, 2),
      204.8 + random(-2, 2),
      510.5 + random(-2, 2)
    );

    //triangulo 3

    triangle(
      204.8 + random(-2, 2),
      510.5 + random(-2, 2),
      257 + random(-2, 2),
      409.6 + random(-2, 2),
      307.2 + random(-2, 2),
      510.5 + random(-2, 2)
    );

    //triangulo 4

    triangle(
      307.2 + random(-2, 2),
      510.5 + random(-2, 2),
      359.4 + random(-2, 2),
      409.6 + random(-2, 2),
      409.6 + random(-2, 2),
      510.5 + random(-2, 2)
    );

    //triangulo 5

    triangle(
      409.6 + random(-2, 2),
      510.5 + random(-2, 2),
      461.8 + random(-2, 2),
      409.6 + random(-2, 2),
      512 + random(-2, 2),
      510.5 + random(-2, 2)
    );

    //TRIANGULITOS

    fill(222);

    //FILA UNO

    //triangulo 1

    triangle(
      17 + random(-1, 1),
      97 + random(-1, 1),
      51.2 + random(-1, 1),
      25 + random(-1, 1),
      87 + random(-1, 1),
      97 + random(-1, 1)
    );

    //triangulo 2

    triangle(
      121 + random(-1, 1),
      97 + random(-1, 1),
      153.6 + random(-1, 1),
      25 + random(-1, 1),
      191 + random(-1, 1),
      97 + random(-1, 1)
    );

    //triangulo 3

    triangle(
      225 + random(-1, 1),
      97 + random(-1, 1),
      257 + random(-1, 1),
      25 + random(-1, 1),
      295 + random(-1, 1),
      97 + random(-1, 1)
    );

    //triangulo 4
    triangle(
      329 + random(-1, 1),
      97 + random(-1, 1),
      359.4 + random(-1, 1),
      25 + random(-1, 1),
      392 + random(-1, 1),
      97 + random(-1, 1)
    );

    //triangulo 5
    triangle(
      426 + random(-1, 1),
      97 + random(-1, 1),
      461.8 + random(-1, 1),
      25 + random(-1, 1),
      496 + random(-1, 1),
      97 + random(-1, 1)
    );

    //FILA DOS

    //triangulo 1
    triangle(
      17 + random(-1, 1),
      197.4 + random(-1, 1),
      51.2 + random(-1, 1),
      127.4 + random(-1, 1),
      87 + random(-1, 1),
      197.4 + random(-1, 1)
    );

    //triangulo 2
    triangle(
      121 + random(-1, 1),
      197.4 + random(-1, 1),
      153.6 + random(-1, 1),
      127.4 + random(-1, 1),
      191 + random(-1, 1),
      197.4 + random(-1, 1)
    );

    //triangulo 3
    triangle(
      225 + random(-1, 1),
      197.4 + random(-1, 1),
      257 + random(-1, 1),
      127.4 + random(-1, 1),
      295 + random(-1, 1),
      197.4 + random(-1, 1)
    );

    //triangulo 4
    triangle(
      329 + random(-1, 1),
      197.4 + random(-1, 1),
      359.4 + random(-1, 1),
      127.4 + random(-1, 1),
      392 + random(-1, 1),
      197.4 + random(-1, 1)
    );

    //triangulo 5
    triangle(
      426 + random(-1, 1),
      197.4 + random(-1, 1),
      461.8 + random(-1, 1),
      127.4 + random(-1, 1),
      496 + random(-1, 1),
      197.4 + random(-1, 1)
    );

    //FILA TRES

    //triangulo 1
    triangle(
      17 + random(-1, 1),
      299.8 + random(-1, 1),
      51.2 + random(-1, 1),
      229.8 + random(-1, 1),
      87 + random(-1, 1),
      297.8 + random(-1, 1)
    );

    //triangulo 2
    triangle(
      121 + random(-1, 1),
      299.8 + random(-1, 1),
      153.6 + random(-1, 1),
      229.8 + random(-1, 1),
      191 + random(-1, 1),
      297.8 + random(-1, 1)
    );

    //triangulo 3
    triangle(
      225 + random(-1, 1),
      299.8 + random(-1, 1),
      257 + random(-1, 1),
      229.8 + random(-1, 1),
      295 + random(-1, 1),
      297.8 + random(-1, 1)
    );

    //triangulo 4
    triangle(
      329 + random(-1, 1),
      299.8 + random(-1, 1),
      359.4 + random(-1, 1),
      229.8 + random(-1, 1),
      392 + random(-1, 1),
      297.8 + random(-1, 1)
    );

    //triangulo 5
    triangle(
      426 + random(-1, 1),
      299.8 + random(-1, 1),
      461.8 + random(-1, 1),
      229.8 + random(-1, 1),
      496 + random(-1, 1),
      297.8 + random(-1, 1)
    );

    //FILA CUATRO

    //triangulo 1
    triangle(
      17 + random(-1, 1),
      402.2 + random(-1, 1),
      51.2 + random(-1, 1),
      332.2 + random(-1, 1),
      87 + random(-1, 1),
      399.9 + random(-1, 1)
    );

    //triangulo 2
    triangle(
      121 + random(-1, 1),
      402.2 + random(-1, 1),
      153.6 + random(-1, 1),
      332.2 + random(-1, 1),
      191 + random(-1, 1),
      399.9 + random(-1, 1)
    );

    //triangulo 3
    triangle(
      225 + random(-1, 1),
      402.2 + random(-1, 1),
      257 + random(-1, 1),
      332.2 + random(-1, 1),
      295 + random(-1, 1),
      399.9 + random(-1, 1)
    );

    //triangulo 4
    triangle(
      329 + random(-1, 1),
      402.2 + random(-1, 1),
      359.4 + random(-1, 1),
      332.2 + random(-1, 1),
      392 + random(-1, 1),
      399.9 + random(-1, 1)
    );

    //triangulo 5
    triangle(
      426 + random(-1, 1),
      402.2 + random(-1, 1),
      461.8 + random(-1, 1),
      332.2 + random(-1, 1),
      496 + random(-1, 1),
      399.9 + random(-1, 1)
    );

    //FILA CINCO

    //triangulo 1
    triangle(
      17 + random(-1, 1),
      503.1 + random(-1, 1),
      51.2 + random(-1, 1),
      434.6 + random(-1, 1),
      87 + random(-1, 1),
      501.3 + random(-1, 1)
    );

    //triangulo 2
    triangle(
      121 + random(-1, 1),
      503.1 + random(-1, 1),
      153.6 + random(-1, 1),
      434.6 + random(-1, 1),
      191 + random(-1, 1),
      501.3 + random(-1, 1)
    );

    //triangulo 3
    triangle(
      225 + random(-1, 1),
      503.1 + random(-1, 1),
      257 + random(-1, 1),
      434.6 + random(-1, 1),
      295 + random(-1, 1),
      501.3 + random(-1, 1)
    );

    //triangulo 4
    triangle(
      329 + random(-1, 1),
      503.1 + random(-1, 1),
      359.4 + random(-1, 1),
      434.6 + random(-1, 1),
      392 + random(-1, 1),
      501.3 + random(-1, 1)
    );

    //triangulo 5
    triangle(
      426 + random(-1, 1),
      503.1 + random(-1, 1),
      461.8 + random(-1, 1),
      434.6 + random(-1, 1),
      496 + random(-1, 1),
      501.3 + random(-1, 1)
    );

    //TRIANGULOS "OJOS"

    fill(171);

    //FILA UNO

    //triangulo 1
    triangle(
      30 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6),
      51.2 + random(-0.6, 0.6),
      45 + random(-0.6, 0.6),
      73 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6)
    );

    //triangulo 2
    triangle(
      134 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6),
      153.6 + random(-0.6, 0.6),
      45 + random(-0.6, 0.6),
      177 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6)
    );

    //triangulo 3
    triangle(
      238 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6),
      257 + random(-0.6, 0.6),
      45 + random(-0.6, 0.6),
      281 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6)
    );

    //triangulo 4
    triangle(
      342 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6),
      359.4 + random(-0.6, 0.6),
      45 + random(-0.6, 0.6),
      382 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6)
    );

    //triangulo 5
    triangle(
      442 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6),
      461.8 + random(-0.6, 0.6),
      45 + random(-0.6, 0.6),
      482 + random(-0.6, 0.6),
      90 + random(-0.6, 0.6)
    );

    //FILA DOS

    //triangulo 1
    triangle(
      30 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6),
      51.2 + random(-0.6, 0.6),
      147.4 + random(-0.6, 0.6),
      73 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6)
    );

    //triangulo 2
    triangle(
      134 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6),
      153.6 + random(-0.6, 0.6),
      147.4 + random(-0.6, 0.6),
      177 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6)
    );

    //triangulo 3
    triangle(
      238 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6),
      257 + random(-0.6, 0.6),
      147.4 + random(-0.6, 0.6),
      281 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6)
    );

    //Triangulo 4
    triangle(
      342 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6),
      359.4 + random(-0.6, 0.6),
      147.4 + random(-0.6, 0.6),
      382 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6)
    );

    //triangulo 5
    triangle(
      442 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6),
      461.8 + random(-0.6, 0.6),
      147.4 + random(-0.6, 0.6),
      482 + random(-0.6, 0.6),
      190.4 + random(-0.6, 0.6)
    );

    //FILA TRES

    //triangulo 1
    triangle(
      30 + random(-0.6, 0.6),
      291.8 + random(-0.6, 0.6),
      51.2 + random(-0.6, 0.6),
      248.8 + random(-0.6, 0.6),
      73 + random(-0.6, 0.6),
      291.8 + random(-0.6, 0.6)
    );

    //traingulo 2
    triangle(
      134 + random(-0.6, 0.6),
      291.8 + random(-0.6, 0.6),
      153.6 + random(-0.6, 0.6),
      248.8 + random(-0.6, 0.6),
      177 + random(-0.6, 0.6),
      291.8 + random(-0.6, 0.6)
    );

    //triangulo 4
    triangle(
      342 + random(-0.6, 0.6),
      291.8 + random(-0.6, 0.6),
      359.4 + random(-0.6, 0.6),
      248.8 + random(-0.6, 0.6),
      382 + random(-0.6, 0.6),
      291.8 + random(-0.6, 0.6)
    );

    //triangulo 5
    triangle(
      442 + random(-0.6, 0.6),
      291.8 + random(-0.6, 0.6),
      461.8 + random(-0.6, 0.6),
      248.8 + random(-0.6, 0.6),
      482 + random(-0.6, 0.6),
      291.8 + random(-0.6, 0.6)
    );

    //FILA CUATRO

    //triangulo 1
    triangle(
      30 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.6),
      51.2 + random(-0.6, 0.6),
      350.2 + random(-0.6, 0.6),
      73 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.63)
    );

    //triangulo 2
    triangle(
      134 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.6),
      153.6 + random(-0.6, 0.6),
      350.2 + random(-0.6, 0.6),
      177 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.6)
    );

    //triangulo 3
    triangle(
      238 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.6),
      257 + random(-0.6, 0.6),
      350.2 + random(-0.6, 0.6),
      281 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.6)
    );

    //triangulo 4
    triangle(
      342 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.6),
      359.4 + random(-0.6, 0.6),
      350.2 + random(-0.6, 0.6),
      382 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.6)
    );

    //triangulo 5
    triangle(
      442 + random(-0.3, 0.6),
      393.2 + random(-0.6, 0.6),
      461.8 + random(-0.6, 0.6),
      350.2 + random(-0.6, 0.6),
      482 + random(-0.6, 0.6),
      393.2 + random(-0.6, 0.6)
    );

    //FILA CINCO

    //triangulo 1
    triangle(
      30 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6),
      51.2 + random(-0.6, 0.6),
      451.6 + random(-0.6, 0.6),
      73 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6)
    );

    //triangulo 2
    triangle(
      134 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6),
      153.6 + random(-0.6, 0.6),
      451.6 + random(-0.6, 0.6),
      177 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6)
    );

    //triangulo 3
    triangle(
      238 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6),
      257 + random(-0.6, 0.6),
      451.6 + random(-0.6, 0.6),
      281 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6)
    );

    //triangulo 4
    triangle(
      342 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6),
      359.4 + random(-0.6, 0.6),
      451.6 + random(-0.6, 0.6),
      382 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6)
    );

    //triangulo 5
    triangle(
      442 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6),
      461.8 + random(-0.6, 0.6),
      451.6 + random(-0.6, 0.6),
      482 + random(-0.6, 0.6),
      494.6 + random(-0.6, 0.6)
    );
  }

  //boton que activa segunda etapa

  if (mouseX > 238 && mouseX < 281 && mouseY > 257 && mouseY < 291.8) {
    fill(250);
  } else {
    fill(171);
  }

  //triangulo 3
  triangle(
    238 + random(-0.6, 0.6),
    291.8 + random(-0.6, 0.6),
    257 + random(-0.6, 0.6),
    248.8 + random(-0.6, 0.6),
    281 + random(-0.6, 0.6),
    291.8 + random(-0.6, 0.6)
  );
}

function mousePressed() {
  if (mouseX > 238 && mouseX < 281 && mouseY > 257 && mouseY < 291.8) {
    disturbio = !disturbio;
  }
}

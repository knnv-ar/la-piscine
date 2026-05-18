let x1, y1, x2, y2, x3, y3; //Triángulo 1
let x4, y4, x5, y5, x6, y6; //Triángulo 2
let x7, y7, x8, y8, x9, y9; //Triángulo 3
let x10, y10, x11, y11, x12, y12; //Triángulo 4
let x13, y13, x14, y14, x15, y15; //Triángulo 5
let mov = 2;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  
  frameRate(30);

  x1 = random(100, 412);
  y1 = random(100, 412);
  x2 = random(100, 412);
  y2 = random(100, 412);
  x3 = random(100, 412);
  y3 = random(100, 412);

  x4 = random(50, 462);
  y4 = random(10, 502);
  x5 = random(50, 462);
  y5 = random(10, 502);
  x6 = random(50, 462);
  y6 = random(10, 502);
  
  x7 = random(100, 412);
  y7 = random(100, 412);
  x8 = random(100, 412);
  y8 = random(100, 412);
  x9 = random(100, 412);
  y9 = random(100, 412);
  
  x10 = random(50, 462);
  y10 = random(10, 502);
  x11 = random(50, 462);
  y11 = random(10, 502);
  x12 = random(50, 462);
  y12 = random(10, 502);
  
  x13 = random(100, 412);
  y13 = random(100, 412);
  x14 = random(100, 412);
  y14 = random(100, 412);
  x15 = random(100, 412);
  y15 = random(100, 412);
  
}

function draw() {
  background(0, 30);
  
  noFill();
  stroke(255);

  x1 += mov;
  y1 += mov;
  x2 -= mov;
  y2 += mov;
  x3 += mov;
  y3 -= mov;

  triangle(x1, y1, x2, y2, x3, y3);

  x4 += mov;
  y4 += mov;
  x5 -= mov;
  y5 += mov;
  x6 += mov;
  y6 -= mov;

  triangle(x4, y4, x5, y5, x6, y6);
  
  x7 += mov;
  y7 += mov;
  x8 -= mov;
  y8 += mov;
  x9 += mov;
  y9 -= mov;

  triangle(x7, y7, x8, y8, x9, y9);
  
  x10 += mov;
  y10 += mov;
  x11 -= mov;
  y11 += mov;
  x12 += mov;
  y12 -= mov;

  triangle(x10, y10, x11, y11, x12, y12);
  
  x13 += mov;
  y13 += mov;
  x14 -= mov;
  y14 += mov;
  x15 += mov;
  y15 -= mov;

  triangle(x13, y13, x14, y14, x15, y15);

  if (x1 < 0 || x1 > width || y1 < 0 || y1 > height || x2 < 0 || x2 > width || y2 < 0 || y2 > height || x3 < 0 || x3 > width || y3 < 0 || y3 > height
  ){
    x1 = random(100, 412);
    y1 = random(100, 412);
    x2 = random(100, 412);
    y2 = random(100, 412);
    x3 = random(100, 412);
    y3 = random(100, 412);
  }

  if (x4 < 0 || x4 > width || y4 < 0 || y4 > height || x5 < 0 || x5 > width || y5 < 0 || y5 > height || x6 < 0 || x6 > width || y6 < 0 || y6 > height
  ) {
    x4 = random(50, 462);
    y4 = random(10, 502);
    x5 = random(50, 462);
    y5 = random(10, 502);
    x6 = random(50, 462);
    y6 = random(10, 502);
  }

  if (x7 < 0 || x7 > width || y7 < 0 || y7 >   height || x8 < 0 || x8 > width || y8 < 0 || y8 > height || x9 < 0 || x9 > width || y9 < 0 || y9 > height
  ) {
    x7 = random(100, 412);
    y7 = random(100, 412);
    x8 = random(100, 412);
    y8 = random(100, 412);
    x9 = random(100, 412);
    y9 = random(100, 412);
  }
  
  if (x10 < 0 || x10 > width || y10 < 0 || y10 >   height || x11 < 0 || x11 > width || y11 < 0 || y11 > height || x12 < 0 || x12 > width || y12 < 0 || y12 > height
  ) {
    x10 = random(50, 462);
    y10 = random(10, 502);
    x11 = random(50, 462);
    y11 = random(10, 502);
    x12 = random(50, 462);
    y12 = random(10, 502);
  }
  
  if (x13 < 0 || x13 > width || y13 < 0 || y13 >   height || x14 < 0 || x14 > width || y14 < 0 || y14 > height || x15 < 0 || x15 > width || y15 < 0 || y15 > height
  ) {
    x13 = random(100, 412);
    y13 = random(100, 412);
    x14 = random(100, 412);
    y14 = random(100, 412);
    x15 = random(100, 412);
    y15 = random(100, 412);
  }

}
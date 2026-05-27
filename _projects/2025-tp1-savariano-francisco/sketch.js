let flash_timer = 900;
let flash_linger = 0; //permite que el flash quede blanco puro un segundo
let transparency = 3; //la transparencia del bg
let transparency_reset = 0; //con esto retorno al lienzo negro total
const MAX_LENGTH = 55; //la máxima longitud de una línea. "abre/cierra" sobre el lienzo.
const SPEED = 6; //controla cuántos pixel por frames muevo la línea. > 10 traba un poco.

let frames = 0; //se decide una cantidad random, cuando llega a 0 cambia dir.
let start_x = 127,
  start_y = 127;
let x = start_x,
  y = start_y;
let dir_x = 0,
  dir_y = -1;

let frames2 = 0;
let start_x2 = 383,
  start_y2 = 383;
let x2 = start_x2,
  y2 = start_y2;
let dir_x2 = 0,
  dir_y2 = -1;
const SPEED2 = 6;

let frames3 = 0;
let start_x3 = 127,
  start_y3 = 383;
let x3 = start_x3,
  y3 = start_y3;
let dir_x3 = 0,
  dir_y3 = 1;
const SPEED3 = 6;

//modificación
let graphics;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  stroke(255);
  
  graphics = createGraphics(width, height);
}

function draw() {
  strokeWeight(2);
  background(0, transparency);

  //línea 1
  if (frames == 0) {
    //cambio dirección, seteo starts y elijo un timer nuevo
    if (dir_x == 0) {
      dir_y = 0;
      dir_x = random(1) < 0.5 ? -1 : 1;
    } else {
      dir_x = 0;
      dir_y = random(1) < 0.5 ? -1 : 1;
    }
    //
    start_x = x;
    start_y = y;
    //
    frames = int(random(10, MAX_LENGTH) / SPEED);
  } else {
    //corre el timer, avanzo x,y
    frames--;

    //esto ""fixea"" que se vea más cuadrado con alta SPEED
    let extra = 0;
    if (frames == 0) {
      extra = int(random(1, SPEED));
    }
    x += (SPEED + extra) * dir_x;
    y += (SPEED + extra) * dir_y;

    //wrap-around
    if (x < 0 || x > 511) {
      line(
        //terminá la línea primero...
        start_x,
        start_y,
        511 * (x < 0 ? 0 : 1),
        y
      );
      start_x = 511 * (x < 0 ? 1 : 0);
      x += 512 * (x < 0 ? 1 : -1);
    }
    if (y < 0 || y > 511) {
      line(start_x, start_y, x, 511 * (y < 0 ? 0 : 1));
      start_y = 511 * (y < 0 ? 1 : 0);
      y += 512 * (y < 0 ? 1 : -1);
    }
  }

  //línea 2
  if (frames2 == 0) {
    if (dir_x2 == 0) {
      dir_y2 = 0;
      dir_x2 = random(1) < 0.5 ? -1 : 1;
    } else {
      dir_x2 = 0;
      dir_y2 = random(1) < 0.5 ? -1 : 1;
    }
    //
    start_x2 = x2;
    start_y2 = y2;
    //
    frames2 = int(random(10, MAX_LENGTH) / SPEED2);
  } else {
    frames2--;

    let extra = 0;
    if (frames2 == 0) {
      extra = int(random(1, SPEED2));
    }
    x2 += (SPEED2 + extra) * dir_x2;
    y2 += (SPEED2 + extra) * dir_y2;

    if (x2 < 0 || x2 > 511) {
      line(start_x2, start_y2, 511 * (x2 < 0 ? 0 : 1), y2);
      start_x2 = 511 * (x2 < 0 ? 1 : 0);
      x2 += 512 * (x2 < 0 ? 1 : -1);
    }
    if (y2 < 0 || y2 > 511) {
      line(start_x2, start_y2, x2, 511 * (y2 < 0 ? 0 : 1));
      start_y2 = 511 * (y2 < 0 ? 1 : 0);
      y2 += 512 * (y2 < 0 ? 1 : -1);
    }
  }

  //línea 3
  if (frames3 == 0) {
    if (dir_x3 == 0) {
      dir_y3 = 0;
      dir_x3 = random(1) < 0.5 ? -1 : 1;
    } else {
      dir_x3 = 0;
      dir_y3 = random(1) < 0.5 ? -1 : 1;
    }
    //
    start_x3 = x3;
    start_y3 = y3;
    //
    frames3 = int(random(10, MAX_LENGTH) / SPEED3);
  } else {
    frames3--;

    let extra = 0;
    if (frames3 == 0) {
      extra = int(random(1, SPEED3));
    }
    x3 += (SPEED3 + extra) * dir_x3;
    y3 += (SPEED3 + extra) * dir_y3;

    if (x3 < 0 || x3 > 511) {
      line(start_x3, start_y3, 511 * (x3 < 0 ? 0 : 1), y3);
      start_x3 = 511 * (x3 < 0 ? 1 : 0);
      x3 += 512 * (x3 < 0 ? 1 : -1);
    }
    if (y3 < 0 || y3 > 511) {
      line(start_x3, start_y3, x3, 511 * (y3 < 0 ? 0 : 1));
      start_y3 = 511 * (y3 < 0 ? 1 : 0);
      y3 += 512 * (y3 < 0 ? 1 : -1);
    }
  }

  line(start_x, start_y, x, y);
  line(start_x2, start_y2, x2, y2);
  line(start_x3, start_y3, x3, y3);

  //flash
  if (flash_timer == 0) {
    just_flashed = true;
    flash_timer = 850 + int(random(-100, 100));
    flash_linger = 70;
    transparency_reset = 55;
  } else {
    flash_timer--;
  }
  if (flash_linger > 0) {
    flash_linger--;
    fill("white");
    rect(0, 0, width, height);
  }
  if (transparency_reset > 0 && flash_linger <= 0) {
    transparency_reset--;
    if (frameCount % 15 == 0) {
      transparency += transparency + 4; //arbitrario, aesthetics
    }
  } else {
    transparency = 1;
  }
//   if (keyIsPressed) {
//     //ESTO ES PARA DEBUG
//     if (keyCode == ENTER) {
//       flash_timer = 0;
//     }
//   }
//   graphics.background(255,0,0);
}

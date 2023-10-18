let x = 130;
let y = 130;

let reset = 0;

let a = 25;
let r = 0.01;
let t = 0;
let e = 1234;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  
  frameRate(30);
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    background(220);
  }

  push();
  scale(0.25);

  translate(0 + x, 0 + y);

  //////////////////////////////////////////////////////////////////////////////////////
  /////////////      1°      ///////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  push();
  noStroke();
  rotate(-0.8);
  fill(220, 5);
  rect(-1200, 900, 700);
  pop();

  if (t < 0 && !keyIsPressed) {
    t += 2;
  }

  if (true) {
    push();
    translate(t, 0);
    translate(-350 + 120 + 120, 1250 + 120 + 120);
    rotate(112.3);
    push();
    fill(220, 5);
    noStroke();
    rect(0 - 60, 0 - 60, 512 + 120);
    pop();

    ////cuadrados base

    var sumaXb = 0;
    var sumaYb = 0;

    for (var j = 0; j < 4; j++) {
      for (var i = 0; i < 4; i++) {
        push();
        translate(6 + sumaXb, 6 + sumaYb);
        strokeWeight(2);
        noFill();
        rect(0, 0, 120, 120);
        pop();

        sumaXb += 126;
      }
      sumaXb = 0;
      sumaYb += 126;
    }

    /////fin cuadrados base

    ///////////////////////////////////////////////

    //cuadrados move

    var sumaXm = 0;
    var sumaYm = 0;
    var intensidad = 0;

    for (var n = 0; n < 4; n++) {
      for (var ñ = 0; ñ < 4; ñ++) {
        push();

        translate(66 + sumaXm + random(-2, 2), 66 + sumaYm + random(-2, 2));
        rotate(random(0, 0.02));

        strokeWeight(random(0, 2));

        stroke(random(0, 20));

        noFill();

        rect(-60, -60, 120 + random(-2, 2), 120 + random(-2, 2));

        pop();

        sumaXm += 126;
      }
      sumaXm = 0;
      sumaYm += 126;
    }

    ///fin cuadrados move

    //////////////////////////////////////////////

    //degradé intensidad x

    var sumaXdx = 0;
    var sumaYdx = 0;
    intensidad = 1;

    for (var q = 0; q < 4; q++) {
      for (var w = 0; w < 4; w++) {
        push();

        translate(
          66 + sumaXdx + random(-2, 2) * intensidad,
          66 + sumaYdx + random(-2, 2) * intensidad
        );
        rotate(random(-0.1, 0.1) * intensidad);

        strokeWeight(random(0, 2));

        stroke(random(0, 5) * intensidad);

        noFill();

        rect(
          -60,
          -60,
          120 + random(-2, 2) * intensidad,
          120 + random(-2, 2) * intensidad
        );

        pop();

        intensidad += 0.5;

        sumaXdx += 126;
      }
      sumaXdx = 0;
      sumaYdx += 126;
    }

    //fin degradé intensidad x

    //////////////////////////////////////////////

    //degradé intensidad y

    var sumaXdy = 0;
    var sumaYdy = 0;
    intensidad = 1;

    for (var p = 0; p < 4; p++) {
      for (var o = 0; o < 4; o++) {
        push();

        translate(
          66 + sumaXdy + random(-2, 2) * intensidad,
          66 + sumaYdy + random(-2, 2) * intensidad
        );
        rotate(random(-0.1, 0.1) * intensidad);

        strokeWeight(random(0, 2));

        stroke(random(0, 5) * intensidad);

        noFill();

        rect(
          -60,
          -60,
          120 + random(-2, 2) * intensidad,
          120 + random(-2, 2) * intensidad
        );

        pop();

        intensidad += 0.5;

        sumaYdy += 126;
      }
      sumaYdy = 0;
      sumaXdy += 126;
    }

    //fin degradé intensidad y

    pop();
  }

  //////////////////////////////////////////////////////////////////////////////////////
  /////////////      2°      ////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  if (true) {
    for (let a; a < 4; a++) {
      for (let b; b < 4; b++) {
        line();
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////
  /////////////      5°      ////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  if (true) {
    push();

    rotate(random(r, r * -1));

    push();

    fill(220, 15);
    noStroke();
    rect(0 - 60, 0 - 60, 512 + 120);

    pop();

    let sumaXy = 0;
    let sumaYy = 0;

    let intensidady = 0;

    /////Y

    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 4; i++) {
        push();

        translate(
          6 + sumaXy + 60 + random(-1 * intensidady, 1 * intensidady),
          6 + sumaYy + 60 + random(-1 * intensidady, 1 * intensidady)
        );

        rotate(random(-1 * intensidady, 1 * intensidady));

        scale(random(-0.1, 0.1) * intensidady);

        strokeWeight(2);
        noFill();
        rect(0 - 60, 0 - 60, 120, 120);
        pop();

        sumaXy += 126;
      }
      sumaXy = 0;
      sumaYy += 126;
      intensidady += 3;
    }

    /////X
    let sumaXx = 0;
    let sumaYx = 0;
    let intensidadx = 0;

    for (let w = 0; w < 4; w++) {
      for (let q = 0; q < 4; q++) {
        push();
        translate(
          6 + sumaXx + 60 + random(-1 * intensidadx, 1 * intensidadx),
          6 + sumaYx + 60 + random(-1 * intensidadx, 1 * intensidadx)
        );

        rotate(random(-0.1, 0.1) * intensidadx);

        scale(random(-0.1 * intensidadx, 0.1 * intensidadx));

        strokeWeight(2);
        noFill();
        rect(0 - 60, 0 - 60, 120, 120);
        pop();

        sumaYx += 126;
      }
      sumaYx = 0;
      sumaXx += 126;
      intensidadx += 3;
    }
    pop();
  }

  //////////////////////////////////////////////////////////////////////////////////////
  ///////////        9°      ///////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  if (true) {
    push();

    translate(512 - 30, 512 - 30);
    scale(1.5);

    if (frameCount % 100 == 0 || (key == "e" && keyIsPressed)) {
      fill(220);
      noStroke();
      //rect(0-60,0-60,512+120);
      rect(100, 0, 400, 500);
      rect(0, 100, 500, 400);
    }
    //traslacion canvas
    ///////////
    let sumaXy = 0;
    let sumaYy = 0;

    let intensidady = 0;

    /////Y

    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 4; i++) {
        push();

        translate(
          6 + sumaXy + 60 + random(-1 * intensidady, 1 * intensidady),
          6 + sumaYy + 60 + random(-1 * intensidady, 1 * intensidady)
        );

        rotate(random(-1 * intensidady, 1 * intensidady));

        scale(random(-0.1 * intensidady, 0.1 * intensidady));

        strokeWeight(2);
        noFill();
        rect(0 - 60, 0 - 60, 120, 120);
        pop();

        sumaXy += 126;
      }
      sumaXy = 0;
      sumaYy += 126;
      intensidady += 2;
    }

    /////X
    let sumaXx = 0;
    let sumaYx = 0;
    let intensidadx = 0;

    for (let w = 0; w < 4; w++) {
      for (let q = 0; q < 4; q++) {
        push();
        translate(
          6 + sumaXx + 60 + random(-1 * intensidadx, 1 * intensidadx),
          6 + sumaYx + 60 + random(-1 * intensidadx, 1 * intensidadx)
        );

        rotate(random(-1 * intensidadx, 1 * intensidadx));

        scale(random(-0.1 * intensidadx, 0.1 * intensidadx));

        strokeWeight(2);
        noFill();
        rect(0 - 60, 0 - 60, 120, 120);
        pop();

        sumaYx += 126;
      }
      sumaYx = 0;
      sumaXx += 126;
      intensidadx += 2;
    }
    //if(frameCount==100 || frameCount%100 == 0){background(220);}
    pop();
  }

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////
  /////////      lineas arriba      ////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  if (true) {
    push();

    scale(2.7);
    translate(240 - 36, 0);

    stroke(random(0, a));
    //1
    /////////////////////////////////////////////////////////////////////
    line(random(0, 60), random(30, 60), random(70, 80), random(100, 110));
    /////////////////////////////////////////////////////////////////////
    //2
    /////////////////////////////////////////////////////////////////////
    push();
    translate(120, 0);
    line(random(0, 60) + 5, random(20, 60), random(65, 75), random(100, 120));

    pop();
    /////////////////////////////////////////////////////////////////////
    //3
    /////////////////////////////////////////////////////////////////////
    push();
    translate(240, 0);
    line(random(0, 60) + 10, random(10, 60), random(55, 70), random(100, 120));

    pop();
    /////////////////////////////////////////////////////////////////////
    //4
    /////////////////////////////////////////////////////////////////////
    push();
    translate(360, 0);
    line(random(0, 75) + 15, random(0, 60), random(50, 65), random(100, 120));

    pop();
    /////////////////////////////////////////////////////////////////////
    pop();
  }

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  pop();

  /*
  if(frameCount%100==0){
    x-=512;
    y-=512;
    reset++;}
    if (reset == 3){
      x=0;
      y=0;
      reset = 0;
}*/
  push();
  noStroke();
  fill(220);
  circle(460, 420, 60);
  pop();
  if (mouseIsPressed) {
    push();
    fill(220);
    rect(0, 0, 512);
    fill(0);
    circle(460, 420, 50);
    pop();
  }
}

////////////////////////////////////////////////////

function keyPressed() {
  if (key == "a" && a < 255) {
    a += 90;
  } else if (key == "r" && r < 0.5) {
    r += 0.1;
  } else if (key == "t" && t > -2000) {
    t = -375;
  }
  //   else if (key  ) {
  //       fill(220);
  //       noStroke();
  //       //rect(0-60,0-60,512+120);
  //       rect(100, 0, 400, 500);
  //       rect(0, 100, 500, 400);
}

function keyReleased() {
  if (key == "a" && a > 50) {
    a -= 100;
  } else if (key == "r" && r > -0.1) {
    r = 0.01;
  } else if (key == "t" && t < 0) {
    t++;
  }
}

/////////////////////////////////////

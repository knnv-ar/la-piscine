/*
Instrucciones:
Usa WASD para moverte 
Presiona E para cambiar entre ENTIDAD y CÁMARA LIBRE
Presiona ESPACIO para PROGRESAR
Este mundo es cúbico, al caminar por un borde avanzarás a otra cara
Cada cara tiene 5 niveles de progreso, ¿Qué pasará si cambian todas?
*/

let terreno, sol, nucleo, luna, estrellas, edificio, arbol;
let song1, song2, song3;

const cara = ["sup", "inf", "fro", "tra", "der", "izq"];
let caraActual = cara[0];

let bichoTex = [];
let zorroTex = [];

let zorros = []; //pos ; rot ; cara ; citadino
let cantZ = 10;
let frame;

let edificios = []; //pos ; rot ; alt ; cara
let cantEd = 8;
let maxAlt = 5;

let angSol = 0,
  radSol = 2000,
  velSol = 0.001;
let angLuna = 4,
  radLuna = 1000,
  velLuna = 0.004;

let R = 200; // radio del planeta
let A = 10; //altura de camara
let O = 5; //offset tp

let velMov = 100;
let velCam = 2;
let velEje = 1;

let mov, nMov, ejeMov;
let shiftCam = false;
let angulo = 0;

let infierno=[false,false,false,false,false,false];

function preload() {
  for (let i = 0; i < 4; i++) {
    zorroTex.push(loadImage(`sprites/zorro${nf(i)}.png`));
  }
  for (let i = 0; i < 4; i++) {
    bichoTex.push(loadImage(`sprites/bicho${nf(i)}.png`));
  }

  terreno = loadImage("texturas/terreno.jpg");
  luna = loadImage("texturas/moon.jpg");
  estrellas = loadImage("texturas/milky.jpg");

  sol = loadImage("texturas/sun.jpg");
  nucleo = loadImage("texturas/montage.jpg");
  edificio = loadImage("texturas/edificio.jpg");
  arbol = loadImage("texturas/tree.png");
  song1 = loadSound("sonido/ghosts9.mp3");
  song2 = loadSound("sonido/ghosts2.mp3");
  song3 = loadSound("sonido/ghosts10.mp3");
}

function setup() {
  let canvas = createCanvas(750, 500, WEBGL);
  canvas.parent('div-sketch');

  song1.loop();
  song1.setVolume(1);
  song1.play();
  
  song2.loop();
  song2.setVolume(0);
  
  song3.loop();
  song3.setVolume(0);
  
  perspective(PI/3.5, width / height, 0.1, 10000);

  mov = createVector(0, -R - A, 0);
  ejeMov = createVector(0, 1, 0);
  nMov = createVector(0, 0, -1);

  //Superior
  for (let i = 0; i < cantEd; i++) {
    edificios.push([
      createVector(random(-R, R), -R + 24.9, random(-R, R)),
      createVector(0, 0, 0),
      0,
      0,
    ]);
  }
  for (let i = 0; i < cantZ; i++) {
    zorros.push([
      createVector(random(-R, R), -R - 10, random(-R, R)),
      createVector(0, random(PI, -PI), 0),
      0,
      false,
    ]);
  }

  //Inferior
  for (let i = 0; i < cantEd; i++) {
    edificios.push([
      createVector(random(-R, R), R - 24.9, random(-R, R)),
      createVector(PI, 0, 0),
      0,
      1,
    ]);
  }
  for (let i = 0; i < cantZ; i++) {
    zorros.push([
      createVector(random(-R, R), R + 10, random(-R, R)),
      createVector(PI, random(PI, -PI), 0),
      1,
      false,
    ]);
  }
  //Frontal
  for (let i = 0; i < cantEd; i++) {
    edificios.push([
      createVector(random(-R, R), random(-R, R), -R + 24.9),
      createVector(PI / 2, 0, 0),
      0,
      2,
    ]);
  }
  for (let i = 0; i < cantZ; i++) {
    zorros.push([
      createVector(random(-R, R), random(-R, R), -R - 10),
      createVector(PI / 2, random(PI, -PI), 0),
      2,
      false,
    ]);
  }
  //Trasero
  for (let i = 0; i < cantEd; i++) {
    edificios.push([
      createVector(random(-R, R), random(-R, R), R - 24.9),
      createVector(-PI / 2, 0, 0),
      0,
      3,
    ]);
  }
  for (let i = 0; i < cantZ; i++) {
    zorros.push([
      createVector(random(-R, R), random(-R, R), R + 10),
      createVector(-PI / 2, random(PI, -PI), 0),
      3,
      false,
    ]);
  }
  //Derecho
  for (let i = 0; i < cantEd; i++) {
    edificios.push([
      createVector(R - 24.9, random(-R, R), random(-R, R)),
      createVector(0, 0, PI / 2),
      0,
      4,
    ]);
  }
  for (let i = 0; i < cantZ; i++) {
    zorros.push([
      createVector(R + 10, random(-R, R), random(-R, R)),
      createVector(random(PI, -PI), 0, PI / 2),
      4,
      false,
    ]);
  }
  //Izquierdo
  for (let i = 0; i < cantEd; i++) {
    edificios.push([
      createVector(-R + 24.9, random(-R, R), random(-R, R)),
      createVector(0, 0, -PI / 2),
      0,
      5,
    ]);
  }
  for (let i = 0; i < cantZ; i++) {
    zorros.push([
      createVector(-R - 10, random(-R, R), random(-R, R)),
      createVector(random(PI, -PI), 0, -PI / 2),
      5,
      false,
    ]);
  }
}

function draw() {
  background(0);
  noStroke();
  let dt = deltaTime / 1000.0; //segundos

  let cam = this._renderer._curCamera;
  
  let fin=0
  for(let i=0;i<infierno.length;i++){
    if(infierno[i])fin++;
  }

  if(fin==3){
    song1.setVolume(0);
    song2.setVolume(1);
  }else if(fin==6){
    song2.setVolume(0);
    song3.setVolume(1);
  }

  if(!shiftCam) movimiento(dt);
  else orbitControl();

  ambientLight(75);


  
  //Sol
  push();
  ambientLight(255);
  let yS = radSol * cos(angSol);
  let zS = radSol * sin(angSol);
  angSol += velSol;
  angSol = (angSol + TWO_PI) % TWO_PI; //normaliza

  translate(0, yS, zS);
  rotateX(0.001 * frameCount);
  noStroke();
  texture(sol);
  specularMaterial(255);
  sphere(200);
  pop();
  ///////////////////////////////

  //Luna
  push();
  let xL = radLuna * cos(angLuna);
  let yL = radLuna * sin(angLuna);
  angLuna += velLuna;
  angLuna = (angLuna + TWO_PI) % TWO_PI; //normaliza

  translate(xL, yL, 0);
  rotateX(0.001 * frameCount);
  ambientLight(255);
  texture(luna);
  sphere(50);
  pop();
  ///////////////////////////////
  
  //Tierra
  push();
  noStroke();
  ambientLight(25);
  //Luz sol
  let yT = 500 * cos(angSol);
  let zT = 500 * sin(angSol);
  pointLight(255,255,255,0, yT, zT);
  specularMaterial(15);
  if(fin<6) texture(terreno);
  else texture(edificio);
  box(R * 2);
  
  pop();
  ///////////////////////////////

  //universo
  push();
  rotateX(0.0001 * frameCount);
  ambientLight(250);
  if(fin<6) texture(estrellas);
  else texture(nucleo);
  sphere(5000);
  pop();
  ////////////////////////////////

  //estructuras
  for (let i = 0; i < edificios.length; i++) {
    dibujarEstructura(edificios[i][0], edificios[i][1], edificios[i][2]);
  }

  //Zorros
  frame = floor(millis() / 250) % zorroTex.length;
  for (let i = 0; i < zorros.length; i++) {
    dibujarZorro(zorros[i][0], zorros[i][1], zorros[i][3]);
  }

  ///////////////////////////////
  ///////////////////////////////
}

function dibujarEstructura(pos, rot, alt) {
  push();
  translate(pos.x, pos.y, pos.z);
  rotateX(rot.x);
  rotateY(rot.y);
  rotateZ(rot.z);
  if (alt > 0) {
    for (let j = 0; j < alt; j++) {
      translate(0, -50, 0);
      texture(edificio);
      box(50);
    }
  } else {
    translate(0, -75, 0);
    texture(arbol);
    plane(100);
    rotateY(PI / 2);
    plane(100);
  }
  pop();
}

function dibujarZorro(pos, rot, ciud) {
  push();
  ambientLight(215);
  translate(pos.x, pos.y, pos.z);
  rotateX(rot.x);
  rotateY(rot.y);
  rotateZ(rot.z);
  if (!ciud) texture(zorroTex[frame]);
  else texture(bichoTex[frame]);
  plane(20, 20);
  pop();
}

function progresar() {
  let aux = 0;
  switch (caraActual) {
    case cara[0]:
      for (let i = 0; i < edificios.length; i++) {
        if (edificios[i][3] == 0) {
          aux = edificios[i][2];
          if (edificios[i][2] < maxAlt) edificios[i][2]++;
          if(edificios[i][2] == maxAlt) infierno[0]=true;
        }
      }
      for (let i = 0; i < zorros.length; i++) {
        if (zorros[i][2] == 0 && !zorros[i][3]) {
          if (aux > 0) {
            zorros[i][3] = true;
            aux--;
          }
        }
      }
      break;

    case cara[1]:
      for (let i = 0; i < edificios.length; i++) {
        if (edificios[i][3] == 1) {
          aux = edificios[i][2];
          if (edificios[i][2] < maxAlt) edificios[i][2]++;
          if(edificios[i][2] == maxAlt) infierno[1]=true;
        }
      }
      for (let i = 0; i < zorros.length; i++) {
        if (zorros[i][2] == 1 && !zorros[i][3]) {
          if (aux > 0) {
            zorros[i][3] = true;
            aux--;
          }
        }
      }
      break;

    case cara[2]:
      for (let i = 0; i < edificios.length; i++) {
        if (edificios[i][3] == 2) {
          aux = edificios[i][2];
          if (edificios[i][2] < maxAlt) edificios[i][2]++;
          if(edificios[i][2] == maxAlt) infierno[2]=true;
        }
      }
      for (let i = 0; i < zorros.length; i++) {
        if (zorros[i][2] == 2 && !zorros[i][3]) {
          if (aux > 0) {
            zorros[i][3] = true;
            aux--;
          }
        }
      }
      break;

    case cara[3]:
      for (let i = 0; i < edificios.length; i++) {
        if (edificios[i][3] == 3) {
          aux = edificios[i][2];
          if (edificios[i][2] < maxAlt) edificios[i][2]++;
          if(edificios[i][2] == maxAlt) infierno[3]=true;
        }
      }
      for (let i = 0; i < zorros.length; i++) {
        if (zorros[i][2] == 3 && !zorros[i][3]) {
          if (aux > 0) {
            zorros[i][3] = true;
            aux--;
          }
        }
      }
      break;

    case cara[4]:
      for (let i = 0; i < edificios.length; i++) {
        if (edificios[i][3] == 4) {
          aux = edificios[i][2];
          if (edificios[i][2] < maxAlt) edificios[i][2]++;
          if(edificios[i][2] == maxAlt) infierno[4]=true;
        }
      }
      for (let i = 0; i < zorros.length; i++) {
        if (zorros[i][2] == 4 && !zorros[i][3]) {
          if (aux > 0) {
            zorros[i][3] = true;
            aux--;
          }
        }
      }
      break;

    case cara[5]:
      for (let i = 0; i < edificios.length; i++) {
        if (edificios[i][3] == 5) {
          aux = edificios[i][2];
          if (edificios[i][2] < maxAlt) edificios[i][2]++;
          if(edificios[i][2] == maxAlt) infierno[5]=true;
        }
      }
      for (let i = 0; i < zorros.length; i++) {
        if (zorros[i][2] == 5 && !zorros[i][3]) {
          if (aux > 0) {
            zorros[i][3] = true;
            aux--;
          }
        }
      }
      break;
  }
}

function movimiento(dt) {
  gravedad(dt);

  //rotación
  if (keyIsDown(65)) {
    //a
    angulo -= velCam * dt;
  }
  if (keyIsDown(68)) {
    //d
    angulo += velCam * dt;
  }
  angulo = (angulo + TWO_PI) % TWO_PI; //normaliza

  //eje
  switch (caraActual) {
    case cara[0]:
      nMov = createVector(Math.sin(angulo), 0, -Math.cos(angulo));
      ejeMov = createVector(0, 1, 0);
      break;

    case cara[1]:
      nMov = createVector(Math.sin(angulo), 0, Math.cos(angulo));
      ejeMov = createVector(0, -1, 0);
      break;

    case cara[2]:
      nMov = createVector(Math.sin(angulo), Math.cos(angulo), 0);
      ejeMov = createVector(0, 0, 1);
      break;

    case cara[3]:
      nMov = createVector(Math.sin(angulo), -Math.cos(angulo), 0);
      ejeMov = createVector(0, 0, -1);
      break;

    case cara[4]:
      nMov = createVector(0, Math.sin(angulo), -Math.cos(angulo));
      ejeMov = createVector(-1, 0, 0);
      break;

    case cara[5]:
      nMov = createVector(0, Math.sin(angulo), Math.cos(angulo));
      ejeMov = createVector(1, 0, 0);
      break;
  }

  nMov.normalize();

  //movimiento
  if (keyIsDown(87)) {
    //w
    mov.add(p5.Vector.mult(nMov, velMov * dt));
  }
  if (keyIsDown(83)) {
    //s
    mov.sub(p5.Vector.mult(nMov, velMov * dt));
  }

  let auxCam = p5.Vector.add(mov, nMov);
  camera(
    mov.x,
    mov.y,
    mov.z,
    auxCam.x,
    auxCam.y,
    auxCam.z,
    ejeMov.x,
    ejeMov.y,
    ejeMov.z
  );
}

function gravedad(dt) {
  //cara superior
  if (mov.y < -R) {
    if (abs(mov.z) > R - O) {
      //trasero o frontal
      if (mov.z > 0) {
        caraActual = cara[3];
        mov.z = R + A;
        mov.y = -(R - O - 1);
      } else {
        caraActual = cara[2];
        mov.z = -(R + A);
        mov.y = -(R - O - 1);
      }
    }
    if (abs(mov.x) > R - O) {
      //derecha o izquierda
      if (mov.x > 0) {
        caraActual = cara[4];
        mov.x = R + A;
        mov.y = -(R - O - 1);
      } else {
        angulo += PI;
        caraActual = cara[5];
        mov.x = -(R + A);
        mov.y = -(R - O - 1);
      }
    }
  }
  ////////////////////////////////////////
  //cara inferior
  if (mov.y > R) {
    if (abs(mov.z) > R - O) {
      //atras o adelante
      if (mov.z > 0) {
        caraActual = cara[3];
        mov.z = R + A;
        mov.y = R - O - 1;
      } else {
        caraActual = cara[2];
        mov.z = -(R + A);
        mov.y = R - O - 1;
      }
    }
    if (abs(mov.x) > R - O) {
      //derecha o izquierda
      if (mov.x > 0) {
        angulo += PI;
        caraActual = cara[4];
        mov.x = R + A;
        mov.y = R - O - 1;
      } else {
        caraActual = cara[5];
        mov.x = -(R + A);
        mov.y = R - O - 1;
      }
    }
  }
  ////////////////////////////////////////
  //cara frontal
  if (mov.z < -R) {
    if (abs(mov.y) > R - O) {
      //Abajo o arriba
      if (mov.y > 0) {
        caraActual = cara[1];
        mov.y = R + A;
        mov.z = -(R - O - 1);
      } else {
        caraActual = cara[0];
        mov.y = -(R + A);
        mov.z = -(R - O - 1);
      }
    }
    if (abs(mov.x) > R - O) {
      //derecha o izquierda
      if (mov.x > 0) {
        angulo += PI / 2;
        caraActual = cara[4];
        mov.x = R + A;
        mov.z = -(R - O - 1);
      } else {
        angulo += PI / 2;
        caraActual = cara[5];
        mov.x = -(R + A);
        mov.z = -(R - O - 1);
      }
    }
  }
  ////////////////////////////////////////
  //cara trasera
  if (mov.z > R) {
    if (abs(mov.y) > R - O) {
      //abajo o arriba
      if (mov.y > 0) {
        caraActual = cara[1];
        mov.y = R + A;
        mov.z = R - O - 1;
      } else {
        caraActual = cara[0];
        mov.y = -(R + A);
        mov.z = R - O - 1;
      }
    }
    if (abs(mov.x) > R - O) {
      //derecha o izquierda
      if (mov.x > 0) {
        angulo -= PI / 2;
        caraActual = cara[4];
        mov.x = R + A;
        mov.z = R - O - 1;
      } else {
        angulo -= PI / 2;
        caraActual = cara[5];
        mov.x = -(R + A);
        mov.z = R - O - 1;
      }
    }
  }
  ////////////////////////////////////////
  //cara izquierda
  if (mov.x < -R) {
    if (abs(mov.y) > R - O) {
      //abajo o arriba
      if (mov.y > 0) {
        caraActual = cara[1];
        mov.y = R + A;
        mov.x = -(R - O - 1);
      } else {
        angulo += PI;
        caraActual = cara[0];
        mov.y = -(R + A);
        mov.x = -(R - O - 1);
      }
    }
    if (abs(mov.z) > R - O) {
      //atras o adelante
      if (mov.z > 0) {
        angulo += PI / 2;
        caraActual = cara[3];
        mov.z = R + A;
        mov.x = -(R - O - 1);
      } else {
        angulo -= PI / 2;
        caraActual = cara[2];
        mov.z = -(R + A);
        mov.x = -(R - O - 1);
      }
    }
  }
  ////////////////////////////////////////
  //cara derecha
  if (mov.x > R) {
    if (abs(mov.y) > R - O) {
      //abajo o arriba
      if (mov.y > 0) {
        angulo += PI;
        caraActual = cara[1];
        mov.y = R + A;
        mov.x = R - O - 1;
      } else {
        caraActual = cara[0];
        mov.y = -(R + A);
        mov.x = R - O - 1;
      }
    }
    if (abs(mov.z) > R - O) {
      //atras o adelante
      if (mov.z > 0) {
        angulo += PI / 2;
        caraActual = cara[3];
        mov.z = R + A;
        mov.x = R - O - 1;
      } else {
        angulo -= PI / 2;
        caraActual = cara[2];
        mov.z = -(R + A);
        mov.x = R - O - 1;
      }
    }
  }
}

function keyPressed() {
  if (keyCode == 32 && !shiftCam) progresar();
  if (keyCode == 69) shiftCam=!shiftCam;
}

/*
música de NINE INCH NAILS
Ghosts I-IV (2008)
*/

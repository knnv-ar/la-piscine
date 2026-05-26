let movimiento = 0;
let obstaculos = [];
let tiempoUltimo = 0;
let move = 0;
let angle = 0.01;
let vida = 100;
let muerte = false;
let start = false;
let relleno = 255;
let direccion = 1;
let c1 = 0;
let tiempoGameOver = 0;
let perdidas = 0;
let modoPerturbador = false;
let musicaReproduciendo = false;
let sonidoReproducido = false;
let musicaActual = null;
let colapso = false;
let tiempoColapso = 0;
let partes = 0;
let falloTimer = 0;
let endSong= [];
let indiceCancionesFinal = 0;
let musicaActiva = false;

//______________________TP1
let fondo=255;
let cambio=false;
let cambio1=false;
let cambio2=false;
let cambio3=false;
let cambio4=false;
let lineCol=0;
let corte = 190;
let angulo1 = 0.01;
let angulo = 0.01;
let tamaño = 0;
let delay = 0;
//_______________________TP1

function preload() {
  font = loadFont('fuentes/AvenirLTStd-Medium.otf');
  mainMenu = loadSound('audio/mainMenu.mp3');
  mainMenuPerturbador = loadSound('audio/mainMenuPerturbador.mp3');
  musicChill= loadSound('audio/witsiArañaLoop.mp3');
  musicHell = loadSound('audio/TimeToDIE.mp3');
  endSong[1] =loadSound('audio/end_1.mp3');
  endSong[2] =loadSound('audio/end_2.mp3');
  endSong[3] =loadSound('audio/end_3.mp3');
  endSong[4] =loadSound('audio/end_4.mp3');
  fallo = loadSound('audio/glitch.mp3');
}

function setup() {
 let canvas = createCanvas(600, 600, WEBGL); //Canvas con camara y 3D
 canvas.parent('div-sketch');
}

function draw() {
  if (!start) {
    menuPrincipal();
  } else if (muerte && start == true) {
    gameOver();
    if (millis() - tiempoGameOver > 5000) {
      muerte = false;
      vida = 100;
      obstaculos = [];
      start = false;
    }
  } else {
    if (mainMenu.isPlaying()) mainMenu.stop();
    if (mainMenuPerturbador.isPlaying()) mainMenuPerturbador.stop();

    if (modoPerturbador) {
      background(0);
    } else {
      background('#90d5ff');
    }

  
    //camaaraaaaaaaaaa - Acción
    camera(0, -318, 410, 0, 0, 0, 0, 1, 0);
    
    if (!musicaReproduciendo) {
      if (modoPerturbador) {
        if (musicChill.isPlaying()) musicChill.stop();
        musicHell.loop();
        musicaActual = musicHell;
      } else {
        if (musicHell.isPlaying()) musicHell.stop();
        musicChill.loop();
        musicaActual = musicChill;
      }
      musicaReproduciendo = true;
    }
    
    if(colapso){
      jugador();
      musicHell.stop();
    }
    else{
      mapa();
      jugador();
      lineasCamino();
      enemigos();
    }
    
    push();
    textSize(16);
    textFont(font);
    fill(0);
    if (modoPerturbador) {
      fill(random(104,237),0,40);
      textSize(random(8,34));
      text("Vida: 666", -150, -175);
    } else {
      text("Vida: " + vida, -150, -175);
    }
    if (modoPerturbador && musicHell.isPlaying()) {
      let duracion = musicHell.duration();
      let tiempo = musicHell.currentTime();

      if (duracion - tiempo < 10 && !colapso) {
        colapso = true;
        tiempoColapso = millis();
      }
    }

    if (colapso && modoPerturbador) {
      efectoColapso();
    }

    // Si terminó la canción perturbadora, queda solo el cubo girando
    if (modoPerturbador && !musicHell.isPlaying() && colapso) {
      soloCubo();
    }

    pop();
  }

  if (perdidas >= 6) {
    modoPerturbador = true;
  }
  
  if (musicaReproduciendo) {
    if (modoPerturbador && musicaActual !== musicHell) {
      if (musicChill.isPlaying()) musicChill.stop();
      //musicHell.loop();
      musicaActual = musicHell;
    } else if (!modoPerturbador && musicaActual !== musicChill) {
      if (musicHell.isPlaying()) musicHell.stop();
      musicChill.loop();
      musicaActual = musicChill;
  }
}
}

function mouseClicked(){
  if(mouseX>240 && mouseX<360 && mouseY>400 && mouseY<430){
    start=true;
  }
}


function enemigos() {
  if (millis() - tiempoUltimo > random(150, 600)) {
    let nuevo = {
      x: random(-130, 130),
      z: -1000,
      h: random(20, 80)
    };
    obstaculos.push(nuevo);
    tiempoUltimo = millis();
  }

  for (let i = 0; i < obstaculos.length; i++) {
    let mal = obstaculos[i];
    mal.z += 15;

    push();
    translate(mal.x, (mal.h / 2) + 10, mal.z);
    stroke('yellow');
    fill('brown');
    box(60, mal.h, 40);
    pop();

    let distanciaX = abs(mal.x - move);
    let distanciaZ = abs(mal.z - 150);
    let colisionX = distanciaX < (60 / 2 + 40 / 2);
    let colisionZ = distanciaZ < (40 / 2 + 40 / 2);

    if (modoPerturbador) {
      continue;
    }

    if (colisionX && colisionZ && !muerte) {
      vida -= 10;
      obstaculos.splice(i, 1);
      i--;
      continue;
    }

    if (vida <= 0 && !muerte) {
      if (musicaActual && musicaActual.isPlaying()) {
        musicaActual.stop();
        musicaReproduciendo = false;
      }
      muerte = true;
      vida = 0;
      tiempoGameOver = millis();
      perdidas++;
      break;
    }

    if (mal.z > 400) {
      obstaculos.splice(i, 1);
      i--;
    }
  }
}
function mapa() {
  noStroke();
  if (modoPerturbador) {
    background(0); 
    fill(random(40,100), 0, 0); 
  } else {
    fill(60);
  }
  beginShape();
  vertex(-300, 100, 300);
  vertex(300, 100, 300);
  vertex(80, 100, -1000);
  vertex(-80, 100, -1000);
  endShape(CLOSE);
}

function menuPrincipal() {
  if (modoPerturbador) {
    background(random(115, 245), 24, 55);

    if (musicaActual !== mainMenuPerturbador) {
      if (mainMenu.isPlaying()) mainMenu.stop();
      mainMenuPerturbador.loop();
      musicaActual = mainMenuPerturbador;
    }

  } else {
    background(0);

    if (musicaActual !== mainMenu) {
      if (mainMenuPerturbador.isPlaying()) mainMenuPerturbador.stop();
      mainMenu.loop();
      musicaActual = mainMenu;
    }
  }

  push();
  translate(-290, -290);
  if(modoPerturbador){
     let mitad = width/2;
    if(fondo>1 && cambio==false){
      fondo-=10;
      lineCol+=8;
    }else{
      cambio=true;
    }
    if(fondo<255 && cambio==true){
      fondo+=10;
      lineCol-=8;
    }else{
      cambio=false;
    }
    
    push();
      rectMode(CENTER);
      translate(mitad,mitad);
      if(!cambio2){
        angulo1+=0.5;
      }else{angulo1-=0.2;}

      rotate(angulo1);
      stroke(fondo);
      strokeWeight(random(2,5));
      fill(lineCol,70)
      for(let i=0;i<=20;i++){
        rect(0,0,i*tamaño);
      }
  
    if (tamaño<2 && cambio2==false) {
      tamaño +=0.3;
    }else if(tamaño >4 && tamaño<8 && cambio2==false) {
      tamaño +=0.25;
    }else if(tamaño >10 && tamaño<14 && cambio2==false) {
      tamaño +=0.2;
    }else{
      cambio2=true;
    }
    if (tamaño>14 && cambio2==true) {
      tamaño -=0.35;
    }else if(tamaño <14 && tamaño>10 && cambio2==true) {
      tamaño -=0.3;
    }else if(tamaño <8 && tamaño>4 && cambio2==true) {
      tamaño -=0.2;
    }else if(tamaño <4 && tamaño==2 && cambio2==true){
      tamaño=0.01;
    }
  else{
      if(delay<=300){
        delay++;
      }
      else{
        delay=0;
        cambio2=false;
      }
    }
    pop();
  }else{
    for (let i = 0; i < 20; i++) {
    stroke(random(220, 255));
    strokeWeight(2);
    point(random(0, 600), random(0, 700));
    }
  }
  

  textSize(58);
  relleno += direccion;
  direccion = relleno > 254 ? -3 : relleno < 50 ? 3 : direccion;
  fill(relleno);
  textFont(font);
  textAlign(CENTER, TOP);

  if (modoPerturbador) {
    fill(random(100,240))
    text('emaGebuC', 280, 100);
  } else {
    text('CubeGame', 280, 100);
  }

  fill(255);
  textSize(24);
  textAlign(RIGHT, TOP);
  if(!modoPerturbador){
    text("Derrotas: " + perdidas, width - 30, 10);
  }
  fill('cyan');
  textFont(font);
  textAlign(CENTER, CENTER);
  if(modoPerturbador){
    text("sOlo quEd4 lA mUERRTe", 280, 270);
  }else{
    text('Toca click en START para iniciar el juego.', 280, 240);
    text("Teclas: Flecha izquierda y flecha derecha.", 280, 270);
    text("No te dejes atrapar por los enemigos.", 280, 300);
    textSize(38);
    fill(random(0, relleno - 40));
    text('emaGebuC', 280, 550);
  }
  
  
  pop();

  push();
  
  if(modoPerturbador){
    fill(0);
    textFont(font);
    textAlign(CENTER, TOP);
    textSize(random(16,42));
    text('Morir', -10, 100);
  }else{
    fill(c1);
    textFont(font);
    textSize(38);
    textAlign(CENTER, TOP);
    text('START', -10, 100);
  }
  
  pop();

  if (mouseX > 240 && mouseX < 360 && mouseY > 400 && mouseY < 430) {
    push();
    translate(-300, -310);
    stroke(225);
    strokeWeight(3);
    fill(100, 89, 190, 100);
    rect(145, 400, 290, 50);
    pop();
    c1 = 'cyan';
  } else {
    c1 = 'red';
  }
}
function gameOver(){
  resetMatrix();
  camera(); // vuelve a la cámara por defecto
  push();
  translate(-290,-290);
  background(0);
  textSize(32);
  fill('red');
  textFont(font);
  textAlign(CENTER,TOP);
  text('PERDISTE',280,210);
  if((6-perdidas)==1){
    text('Te queda '+(6-perdidas)+" vida.",280,250);
  }else{
    text('Te quedan '+(6-perdidas)+" vidas.",280,250);
  }
  
  pop();
}

function lineasCamino() {
  movimiento += 10;
  stroke(255);
  strokeWeight(4);

  for (let i = 0; i < 30; i++) {
    let z = (i * -200 + (movimiento % 200));
    line(0, 100, z, 0, 100, z - 100);
  }
}

function jugador(){
  if(vida==0 && muerte== true){
    return false;
  }

  push();
  fill(255);
  translate(move,0,150); 
  rotateX(angle);
  strokeWeight(3);
  stroke('blue');
  box(40,40);
  angle-=23;
  pop();

  if(keyIsPressed){
    if(keyCode==RIGHT_ARROW && move<125){
      move+=6;
    }
    if(keyCode==LEFT_ARROW && move>-120)
      move-=6;
  }
}

function efectoColapso() {
  if (frameCount % int(random(2, 6)) === 0) {
    background(random(0, 255));
  }
  let temblor = sin(frameCount * 0.3) * 10;
  translate(temblor, temblor, 0);
  push();
  noStroke();
  fill(random(100,255), 0, 0, random(100, 200));
  rect(random(-width/2, width/2), random(-height/2,     height/2),random(50,150),random(10,60));
  pop();
  push();
  translate(move, 0, 150);
  rotateX(frameCount * 0.3);
  rotateY(frameCount * 0.2);
  fill(random(100,255), 0, 0);
  stroke(255);
  strokeWeight(random(1, 4));
  box(random(30, 50));
  pop();
}

function soloCubo() {
  background(random(0,240));
  camera(0, -318, 410, 0, 0, 0, 0, 1, 0);
  push();
    fill(255);
    stroke(255);
    strokeWeight(2);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.07);
    box(80);
  pop();
  orbitControl();
  if (!musicaActiva) {
    musicaActiva = true;
    for (let i = 1; i <= endSong.lenght; i++) {
      endSong[i].onended(() => {
        endSong[i].stop();
        indiceCancionesFinal = i + 1;
        if (indiceCancionesFinal > 4) indiceCancionesFinal = 1;
        endSong[indiceCancionesFinal].play();
      });
    }
    endSong[1].play();
    indiceCancionesFinal = 1;
  }
}


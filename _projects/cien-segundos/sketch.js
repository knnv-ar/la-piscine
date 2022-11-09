//Para Cuadro
const secsDoomsDay = 86220; //horario actual del reloj en s
const secs24hs = 86400; //s en 24 hs
let cuadro;
let paneo = 0.75;
let vol = 0;
let xPunto;
let yPunto;
//Para interferencia
let interferencia; //Genera puntos cuadrados de distintos tamaños
let amountInter = 1000; // cantidad de puntos
const blanco = [255, 255, 255, 255]; //Valor de blanco
let appleFont, beep, shephard;

//==============================================================

function preload() {
  appleFont = loadFont("./assets/apple.ttf");
  beep = loadSound("./assets/beep.wav");
  shephard = loadSound("./assets/shepard.mp3");
}

//==============================================================

function setup() {
  let canvas = createCanvas(900, 500);
  canvas.parent('div-sketch');
  frameRate(60);
  beep.setVolume(0.7);
  shephard.setVolume(0);
  cuadro = new doomsDayClock(secsDoomsDay, beep, shephard, appleFont);
  interferencia = new Interferencia(amountInter, blanco);
  interferencia.shuffle(); //llena los arrays de interferencia para que pueda dibujar
}

//=============================================================

function draw() {
  cuadro.run();
  interferencia.draw();
  //if (frameCount % 60 == 13) {
  interferencia.shuffle(); //}
  cuadro.drawReloj();
}

//=================================

class doomsDayClock {
  constructor(secsDoomsDay, beep, shephard, font) {
    this.secsDoomDay = secsDoomsDay; //s en la hora actual
    this.font = font;
    this.secs24hs = 86400; //s en 24 hs
    //Props de los sonidos
    this.beep = beep;
    this.shephard = shephard;
    this.paneoBeep = 0.75;
    this.volShephard = 0;
    this.volBeep = 0.7;
    //punto para get
    this.xPunto = 0;
    this.yPunto = 0;
    //valor para panel del medio
    this.valor = 0;
  }

  //========================================================
  run() {
    this.drawFondo();
    this.playBeep();
    this.playShephard();
    //this.drawReloj();
  }
  //Calcula el valor en función de la hora actual del DoomsDayClock
  calcValor() {
    this.valor = map(this.secsDoomDay, 0, this.secs24hs, 0, 255);
    return this.valor;
  }
  //Fondo
  drawFondo() {
    noStroke();
    //Recuadro izquierdo (Hora 00:00)
    fill(255);
    rect(0, 0, 290, 500);
    //Recuadro derecho (Hora 24:00)
    fill(0);
    rect(600, 0, 300, 500);
    //Recuadro central (Hora actual)
    fill(255 - round(this.calcValor(this.secsDoom, this.secs24h))); //Calcula el valor en función de la hora actual del DoomsDayClock
    rect(290, 0, 320, 500);
    //Separadores ==============================
    stroke(0);
    strokeWeight(3);
    //Separador blanco izquierda
    line(290, 0, 290, 500);
    strokeWeight(3);
    stroke(255);
    //Separador negro izquierda
    line(294, 0, 294, 500);
    //Separador negro derecha
    line(603, 0, 603, 500);
    //valores proporcionales a la hora
    noStroke();
    fill(0);
    textSize(12);
    textFont(this.font);
    textStyle(BOLD);
    text("255.00", 15, 30); //Panel izq
    fill(255);
    this.valor = 255 - this.calcValor();
    text(this.valor, 341, 330); //panel centro
    text("0.00", 738, 136); //Panel der
    //Marco del reloj
    stroke(255);
    noFill();
    rect(500, 337, 270, 60);
  }

  //===============================================
  //Reloj
  drawReloj() {
    fill(255);
    //fill(160, 22, 24);
    //fill(255, 20, 20);
    //fill(0, 248, 31);
    stroke(255);
    textFont(this.font);
    noStroke();
    fill(255);
    if (frameCount % 60 > 13) {
      textSize(30);
      text("23:58:20", 519, 380);
    }
  }

  //Beep =====================================
  playBeep() {
    if (frameCount % 60 == 13) {
      //alternar de lado
      if (this.paneoBeep == 0.75) {
        this.paneo = -0.75;
      } else if (this.paneoBeep == -0.75) {
        this.paneo = 0.75;
      }
      this.beep.pan(this.paneoBeep);
      this.beep.play(0, 1.5);
    }
  }

  //Shephard
  //Empieza a sonar a los 40 segundos
  playShephard() {
    if (frameCount > 200) {
      if (!this.shephard.isPlaying()) {
        this.shephard.loop();
      }
    }
    //Fade in a partir de los 40 s
    if (frameCount > 500) {
      //Hasta que llegue al volumen deseado
      if (this.volShephard < 1) {
        //Cada 10 frames aumenta 0.01
        if (frameCount % 10 == 0) {
          this.volShephard += 0.01;
          this.shephard.setVolume(this.volShephard);
        }
      }
    }
  }
}

//===================================================================

//Genera puntos cuadrados
//negros si el fondo es blanco, si no blancos.
class Interferencia {
  //Constructor
  constructor(amount, blanco) {
    this.blanco = blanco; //Blanco de referencia
    this.amount = amount; //Cantidad de puntos
    this.puntosX = []; //Posiciones y tamaños de los puntos
    this.puntosY = [];
    this.puntosW = [];
    this.puntosH = [];
    this.pixel = [0, 0, 0, 255];
    this.posX = 0;
    this.posY = 0;
    this.sizeX = 0;
    this.sizeY = 0;
  }
  //Borra las posiciones y tamaños de los puntos y las reemplaza por otras nuevas
  shuffle() {
    this.puntosX = [];
    for (let i = 0; i < this.amount; i++) {
      append(this.puntosX, random(width));
    }
    this.puntosY = [];
    for (let i = 0; i < this.amount; i++) {
      append(this.puntosY, round(random(height) + 1));
    }
    this.puntosW = [];
    for (let i = 0; i < this.amount; i++) {
      append(this.puntosW, round(random(4) + 3));
    }
    this.puntosH = [];
    for (let i = 0; i < this.amount; i++) {
      append(this.puntosH, round(random(2) + 1));
    }
  }
  //dibuja los puntos
  draw() {
    noStroke();
    for (let i = 0; i < this.amount; i++) {
      this.checkFill(this.blanco, this.puntosX[i], this.puntosY[i]);
      rect(this.puntosX[i], this.puntosY[i], this.puntosW[i], this.puntosH[i]);
    }
  }
  checkFill(blanco, pixelX, pixelY) {
    this.pixel = get(pixelX, pixelY);
    if (this.pixel.toString() == blanco.toString()) {
      fill(0);
      //stroke(255);
    } else {
      fill(255);
      //stroke(0);
    }
  }
}


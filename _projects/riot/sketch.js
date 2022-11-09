/*
Trabajo Practico 2
Nicole Mejia Cruz
*/

//pistola

var gun;
var posx;
var posy;

//sonido

var shot;
var riot;

//escenario

var wall;
var pisos;
var fondo;
let noticias = false;
let numeroRecorte;

//luz pistola

let locX = mouseX - width / 2;
let locY = mouseY - height / 2;

//recortes

let imgs = [];

function preload() {
    riot = loadSound("assets/ambiente/riots.mp3");
    gun = loadModel("assets/gun.obj");
    shot = loadSound("assets/gunshot.wav");
    wall = loadImage("assets/ambiente/pared.png");
    pisos = loadImage("assets/ambiente/piso.png");
    fondo = loadImage("assets/ambiente/fondo.png");
    for (var i = 1; i < 29; i++) {
        imgs[i] = loadImage("assets/recortes/" + i + ".png");
        }
}

function setup() {
    let canvas = createCanvas(1280, 720, WEBGL);
    canvas.parent('div-sketch');
//ocultar cursor
    noCursor();
//video de pared de sangre
    pared = createVideo("assets/ambiente/paredv.mp4");
    pared.loop();
    pared.hide();
//loop audio de fondo
    riot.loop();

}

function draw() {
    background(0);

  //luces
  //luz general
    lights();
  //luz pistola

    spotLight(139, 0, 0, locX, locY, 100, 0, 0, -1, Math.PI / 1);

  //escenario
    noStroke();

  //fondo
    push();
    texture(fondo);
    translate(0, 0, -490);
    plane(1280, 720);
    pop();

  //piso
    push();
    texture(pisos);
    translate(0, 400, -150);
    rotateX(1.4);
    plane(1280, 720);
    pop();

  //pared derecha video
    push();
    texture(pared);
    translate(650, 0, -140);
    rotateY(2);
    plane(1280, 720);
    pop();

  //pared izq
    push();
    texture(wall);
    translate(-650, 0, -140);
    rotateY(-2);
    plane(1280, 720);
    pop();

  // pistola

     //apunta 
    posx = mouseX - 625;
    posy = mouseY - 300;

    push();
    translate(posx, posy, 410);

     //perspectiva
    rotateX(3.3);
    rotateY(1.5);
    rotateZ(0);
    pointLight(255, 255, 255, 0, 0, 50);
    normalMaterial();
    noStroke();
    fill(10);
    model(gun);
    pop();

// recorte
    if (noticias) {
        push();
        noStroke();
        translate(0, 0, 100);
        texture(imgs[numeroRecorte]);
        plane(1280, 720);
        pop();
    }
}

//disparo-click
function mousePressed() {
    //fondo
    riot.play();

    //disparo
    shot.play();
    numeroRecorte = int(random(27) + 1);
    noticias = true;
}

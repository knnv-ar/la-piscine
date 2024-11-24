
//////////////PARA INTERACTUAR, PRESIONE DOBLE CLICK///////////////

let tarima, cabeza;
let cam1, cam2, cam3;
let c1, c2, c3;
let camara=1;
let flash, ruido;

//--------CARGA DE IMAGENES---------//
function preload(){ 
  cabeza = loadModel('/img/sin_nombre.obj', true);
  c1= loadImage('/img/camara1.png');
  c2= loadImage('/img/camara2.png');
  c3= loadImage('/img/camara3.png');
  c4 = loadImage("/img/camara4.png");

  flash= loadSound('audio-video/flash.mp3');
  ruido= loadSound('audio-video/ruidodefondo.mp3');
}

//--------POSICION DE CAMARAS---------//
function setup() {
  let canvas= createCanvas(700, 500, WEBGL);
  canvas.parent('div-sketch');

  tarima = buildGeometry(createShape);

  cam1= createCamera();
  cam1.camera(0,0,1000,0,0,70);

  cam2= createCamera();
  cam2.camera(650,150,500,100,50,130);

  cam3= createCamera();
  cam3.camera(70,-270,200,0,50,0);

  cam4 = createCamera();
  cam4.camera( 90, -100,-400, 0,20,0);

  setCamera(cam1);

  flash.rate(1.5);
  ruido.setVolume(0.5);
  ruido.loop();
}


function draw() {
  background(0,80,90);
  noStroke();

  //orbitControl();

  //-------------LUCES-------------//
  ambientLight(150,100);
  directionalLight(100,100,150,0,-100,40,);
  directionalLight(160,50,200,-100,-50,50);
  directionalLight(16,200,150,100,-50,-50);
  
  //----------MODELOS 3D-----------//

  model(tarima); //LINEA 88

  push();
  rectMode(CENTER);
  rotateX(3.15);
  rotateY(1.4);
  translate(-10,-5,5);
  fill(200,150,220);
  model(cabeza);
  pop();

  //----------IMG CAMARAS----------//
  if(camara==1){
    push();
    rectMode(CENTER);
    translate(0,0,300);
    texture(c1);
    plane(600,400);
    pop();
  }else if(camara==2){
    push();
    rectMode(CENTER);
    fill(150,150,150,90);
    translate(220,50,200);
    rotateX(0);
    rotateY(1,2);
    texture(c2);
    plane(500,400);
    pop();
    }
  else if(camara==3){
    push();
    rectMode(CENTER);
    fill(150,150,150,90);
    translate(40,-120,105);
    rotateX(1.15);
    rotateZ(-0.32);
    rotateY(0.2)
    texture(c3);
    plane(200,100);
    pop();
    }
  else if (camara == 4){
    push();
    rectMode(CENTER);
    fill(150, 150, 150, 90);
    translate(30,-50,-230);
  rotateX(-0.3);
    rotateZ(-0.1 );
    rotateY(-0.1);
    texture(c4); 
    plane(200, 100);
    pop();
  }

}

//-------------MODELO TARIMA-----------//
function createShape(){
  fill(200,150,220);  

  rectMode(CENTER);
  rotateY(5);

  push();  
  translate(0,200,0);
  cylinder(30,180);
  pop();

  push();
  translate(0,120,0);
  box(100,10,100);
  pop();

  push();
  translate(0,110,0);
  box(120,10,120);
  pop();

  
  
}

//----------CAMBIO DE CAMARA----------//
function doubleClicked(){
  if (camara==1){
    setCamera(cam2);
    camara++;
    flash.play();
    directionalLight(250,250,250,100,50,130);
  }
  else if (camara==2){
    setCamera(cam3);
    camara++;
    flash.play();
    directionalLight(250,250,250,0,50,0);
  }
  else if (camara == 3) {
    setCamera(cam4);
    camara++;
    flash.play();
    directionalLight(250, 250, 250, 0, 50, 0);
  }
  else {
    setCamera(cam1);
    camara=1;
    flash.play();
    directionalLight(250,250,250,0,0,70);
  }
}


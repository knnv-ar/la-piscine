let img;
let circleDiameter = 100;
let positionX = 130;
let positionY = -220;
let activado = false;
let t = 1; 
let angle = 90; 
let radius = 100; 
let rubi;
let telon;

let imagenes = [];
let currentIndex = 0;
let intervaloCambio = 2000; 
let tiempoUltimoCambio = 0;

let centerX, centerY; 

function preload() {
 
  sound = loadSound("img/thecolorofthefire.mp3")
  
  madera = loadImage("img/WoodSeemles.jpg");


  imagenes[0] = loadImage("img/dolin1.jpg");
  imagenes[1] = loadImage("img/dolin2.jpg");
  imagenes[2] = loadImage("img/dolin4.jpg");
  imagenes[3] = loadImage("img/dolin5.jpg");

  textura_vela = loadImage("img/texture_candle.png");
  

  cuerpo1 = loadImage("img/cuerpo_1.jpg");
  cuerpo2 = loadImage("img/cuerpo_2.jpg");
  cuerpo3 = loadImage("img/cuerpo_3.jpg");

  //---------objetos
  tv = loadModel("img/tev.obj");
  cama = loadModel("img/Bed.obj");
  mesa = loadModel("img/table.obj");
  vela = loadModel("img/vela.obj");
  vela2 = loadModel("img/vela2.obj");
  vela3 = loadModel("img/vela3.obj");

}

function setup() {
  let canvas = createCanvas(800, 800, WEBGL)
  canvas.parent('div-sketch');
  
  angleMode(DEGREES);
  sound.loop();
  sound.setVolume(0.5);

  centerX = -200;
  centerY = 100;

  vid = createVideo(['img/video.mp4']);   
  vid.play()
  vid.loop();   
  vid.hide();

  
  cam = createCamera();
  cam.setPosition(200, -200, 1500);
}

function draw() {
  background(255);
  pointLight(255, 0, 0, 200, 0, 100);
  pointLight(255, 0, 0, -1000, 180, 100);
  pointLight(0, 0, 255, 700, 90, 0);
  pointLight(0, 0, 255, -200, 0, 0);
  specularMaterial(20);
  noStroke();
  orbitControl();
  

  //------------MESA
  push();
  translate(300, 148, 105);
  rotateX(180);
  rotateY(12);
  model(mesa);
  pop();


   //------------cama
   push();
   translate(800, 190, 105);
   rotateX(180);
   rotateY(-50);
   scale(170)
   model(cama);
   pop();
  

   //-----------------------velas
   //------velas mesa
   push();
   translate(470, 100, 300);
   rotateX(180);
   rotateY(15);
   texture(textura_vela)
   model(vela);
   pop();

   push();
   translate(450, 100, 300);
   rotateX(180);
   rotateY(0);
   
   texture(textura_vela)
   model(vela);
   pop();


   //------velas piso
   push();
   translate(-100, 200, 300);
   rotateX(180);
   rotateY(12);
   texture(textura_vela)
   scale(2)
   model(vela);
   pop();

   push();
   translate(-110, 200, 300);
   rotateX(180);
   rotateY(0);
   
   texture(textura_vela)
   model(vela);
   pop();
//----------velas cubo
   push();
   translate(500, 200, 0);
   rotateX(180);
   rotateY(12);
   texture(textura_vela)
   scale(2)
   model(vela);
   pop();


   push();
   translate(-550, 200, 550);
   rotateX(180);
   rotateY(12);
   texture(textura_vela)
   scale(2)
   model(vela);
   pop();


   push();
   translate(-600, 200, 200);
   rotateX(180);
   rotateY(50);
   scale(2)
   texture(textura_vela)
   model(vela);
   pop();

//-----------velas2
   push();
   translate(300, 190, -200);
   rotateX(180);
   rotateY(12);
   texture(textura_vela)
   scale(10)
   model(vela2);
   pop();


   //-----------velas3
   push();
   translate(500, 190, -250);
   rotateX(180);
   rotateY(12);
   texture(textura_vela)
   scale(20)
   model(vela3);
   pop();

   push();
   translate(700, 190, 350);
   rotateX(180);
   rotateY(50);
   texture(textura_vela)
   scale(30)
   model(vela3);
   pop();

   push();
   translate(-1000, 190, 250);
   rotateX(180);
   rotateY(50);
   texture(textura_vela)
   scale(30)
   model(vela3);
   pop();


  //-----------TVS
  push();
  translate(-300, 148, 405);
  rotateY(180);
 
  model(tv);
  pop();
  
  push();
  translate(-120, -88, 395);
  rotateY(180);
 
  model(tv);
  pop();

  push();
  translate(75, 70, 410);
  rotateY(180);
 
  model(tv);
  pop();

  push();
  translate(200, 140, 400);
  rotateY(180);
  
  model(tv);
  pop();

  push();
  translate(-100, 148, 390);
  rotateY(180);
  
  model(tv);
  pop();

  push();
  translate(-90, -10, 405);
  rotateY(180);
  
  model(tv);
  pop();

  push();
  translate(40, 148, 395);
  rotateY(180);
  
  model(tv);
  pop();

  push();
  translate(-70, 68, 400);
  rotateY(180);
  model(tv);
  pop();

  
  push();
  translate(-200, 150, 0);
  rotateY(120);
  noStroke();
  
  model(tv);
  pop();

  push();
  rotateY(0);
  translate(7, 50, -400);
  
  model(tv);
  pop();
  
  push();
  rotateY(0);
  translate(7, -300, -400);
  
  model(tv);
  pop();
  
  
  
  //------------------------------fotografias
  
  let tiempoActual = millis();
  let tiempoTranscurrido = tiempoActual - tiempoUltimoCambio;

 
  if (tiempoTranscurrido >= intervaloCambio) {
    currentIndex = (currentIndex + 1) % imagenes.length; 
    tiempoUltimoCambio = tiempoActual; 
  }

  push();
  
  translate(-200, -700, -200);
  
  image(imagenes[currentIndex], 0, 0);
  
  pop();

  //----------------------------piso madera
  push();
  translate(0, 200, -100);
  rotateX(90);
  noStroke();
  texture(madera);
  plane(2500, 1300);
  pop();

  //cubo
  push();
  ambientLight(255)
  texture(vid);
  box(5000);
  pop();

  //------------------------------paneles
  push()
  for (let x = -900; x < -300; x += 50) {
    for (let y = -800; y < 200; y += 50) {
      push();
      translate(x, y, -400);
      box(30, 50, 15);
      pop();
    }
  }
  pop()

  push()

  for (let x = 600; x < 1200; x += 50) {
    for (let y = -800; y < 200; y += 50) {
      push();
      translate(x, y, -400);
      box(30, 50, 15);
      pop();
    }
  }
  pop()
//---------------cajas
push()
  translate(-700, 150, 0);
  texture(cuerpo1)
  box(300, 100, 100);
pop()

push()
  translate(-700, 60, 0);
  texture(cuerpo2)

  box(50, 80, 100);
pop()

push()
  translate(-700, 100, 400);
  texture(cuerpo3)

  box(150, 200, 150);
pop()
  angle += 50;
}

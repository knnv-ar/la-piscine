var posZ=100;
var puntero;

function preload() {
  
  puntero = loadImage ("imagenes/flare.png");
  sonido = loadSound("sound/Spa.mp3");
 
}


function setup() {
  
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  
//----------------------Audio-------------------------
  sonido.play();
  sonido.loop();
  
//   cam = createCapture(VIDEO);
//   cam.size(320, 240);
//   cam.hide();
     
}


function draw() {
  
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  var v = createVector (locX, locY,0);
  v.normalize();
  
//---------------------LUCES----------------------------------

 ambientLight(50,50,100) ; // Luz de todo el ambiente 
 pointLight(120,150,255,mouseX-200, mouseY-200,450); // Luz posicionada con el mouse
//directionalLight(205,255,250,v); // Luz para performance(proviene de un lugar lejano)
  
//-------------------------------------------------------------
  
  background(0, 0, 0);
  
//---------------------Camara----------------------------------

  // ortho();
  translate (0,0, mouseX);
   
//---------------------Objetos 3D------------------------------

//Esfera Grande
  push();
  translate(0, 0, 0);// Ubicacion posicion de la figura
  noFill();
  stroke("#fae");
  strokeWeight(0.3);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(340); // Parametro radio del circulo
  pop();

//Esfera grande Blanca
  push();
  translate(0, 0, 0);// ubicacion posicion de la figura
  noFill();
  stroke(255,235,230);
  strokeWeight(0.1);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(310); // parametro radio del cirkulo
  pop();
  
  
//esfera mediana
  push();
  translate(0, 0, 0);// ubicacion posicion de la figura
  specularMaterial(220,120,183);
  noStroke();
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  sphere(250); // parametro radio del circulo
  pop();
  
// normalMaterial(); // arcoiris 
       
  
//esfera mas chica
  push();
  translate(0, 0, 0);// ubicacion posicion de la figura
  specularMaterial(210);
  pointLight(255,0,255, locX, locY, posZ);
  strokeWeight(0.2);
  noStroke();
  // texture(cam);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(130); // parametro radio del circulo
//  sphere(30);
  pop();
  
  
  
//-------------------Mouse--------------------------
  
  tint(255,200)
  image(puntero, mouseX, mouseY, 400, 400);
  
     
  }

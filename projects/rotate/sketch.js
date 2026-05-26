var img1;
var cantidadEstrellas = 800;
var estrellasDatos = [];

function preload() {
   img1 = loadImage("./imagenes/textura.jpg");
   sonido = loadSound("./musica/rock.m4a");
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
  sonido.loop();
  populateStars(cantidadEstrellas);
}

function draw() {
  background(0);
  estrellas(cantidadEstrellas);

   //mouse presionado
  if (mouseIsPressed) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  } else {
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.009);
  rotateZ(frameCount * 0.008);  
  rotateZ(frameCount * 0.002);
  rotateZ(PI / 3.0);
  }
  if (mouseIsPressed){
    rotateZ(PI / 1.0);
    box(400);
    stroke(10)
  }
  //noStroke();
  //figura del centro
  ambientLight(255);
  ambientMaterial(255);
  sphere(5);
  
  stroke(255, 200);
  strokeWeight(1);
  //bucle
  for (var x = 0; x <= height; x = x + 50) {
  noFill();
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.009);
  rotateZ(frameCount * 0.008);  
  rotateZ(frameCount * 0.002);
  rotateZ(PI / 3.0);
  box(300); 
  
  //figura dentro del cubo
  push();
  texture(img1);
  //rotateX(frameCount * 0.02);
  //rotateY(frameCount * 0.03);
  //rotateZ(frameCount * 0.009);
    rect(0, 0, 110, 110);
    rect(0, 0, 105, 105);
    rect(0, 0, 100, 100);
    rect(0, 0, 95, 95);
    rect(0, 0, 90, 90);
    rect(0, 0, 85, 85);
  translate(0, 0, 50);
  pop();
  }
   
  function estrellas(numero) {

      for (let i = 0; i < numero; i++) {
      stroke(estrellasDatos[i][0]);
      strokeWeight(estrellasDatos[i][1]);
      point(estrellasDatos[i][2], estrellasDatos[i][3], estrellasDatos[i][4]);
    }
  }
}

function populateStars(numero) {

  for (let i = 0; i < numero; i++) {
    estrellasDatos.push([
      random(130, 255),
      random(4),
      random(-400, 500),
      random(-400, 500),
      random(-400, 500),
    ]);
  }
}

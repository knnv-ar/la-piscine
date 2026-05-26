//cubo grande con cosas adentro y uno mas chico, sin nada dentro. Se interactua mediante el movimiento del mouse
var r = 50;
var a = 0;
var c = 10;
var color1 = 0;
var color2, color4;
var color3 = 20;
var color5 = 20;

function setup() {
  let canvas = createCanvas(650, 650, WEBGL);
  canvas.parent('div-sketch');
  graficocubo1=createGraphics(200,200); //grafico para cubo1
  graficocubo1.fill(255,0);
  graficoellip=createGraphics(20,20); //grafico para ellipsoide
  graficoellip.background(255, 255, 102);
  graficocubo2=createGraphics(100,100); //grafico para cubo2
  graficocubo2.fill(255,0);
  
}
function mouseClicked(){
  resetSketch();
}
function draw() {
  background(0);
  lights();
  noStroke();
  //camara
  camera(mouseX,mouseY, (height / 2) / tan(PI / 2), 0, 0, 0, 0, 1, 0);

  //ellipses que se dibujan sobre el cubo1
  push();
  var x = r + c * cos(a);
  var y = r + c * sin(a);
  
  color2 = map(mouseX,0,500,0,200);
  color4 = map(mouseY,0,500,0,200);
  graficocubo1.fill(color2,color1,color3);
  graficocubo1.ellipse(x + 45, y + 45, 8, 8);
  
  color5 = map(mouseX,500,0,200,0);
  color3 = map(mouseY,500,0,200,0);
  graficocubo1.fill(color4,color1,color5);
  graficocubo1.ellipse(x + 50, y + 50, 4, 4);
  
  color1 +=1.0;
  c += 0.2;
  color3 += 0.2;
  color5 += 0.2;
  a += 0.8;
  pop(); 
  
  //ellipses que se dibujan sobre el cubo2
  push();
  var x2 = r + c * cos(a);
  var y2 = r + c * sin(a);
  
  color2 = map(mouseX,0,500,0,200);
  color4 = map(mouseY,0,500,0,200);
  graficocubo2.fill(color1,color2,color5);
  graficocubo2.ellipse(x2 + 5, y2 + 5, 8, 8);
  
  color5 = map(mouseX,500,0,200,0);
  color3 = map(mouseY,500,0,200,0);
  graficocubo2.fill(color4,color2,color3);
  graficocubo2.ellipse(x2 + 10, y2 + 10, 4, 4);
  
  color2 +=1.0;
  c += 0.2;
  color3 += 0.2;
  color5 += 0.2;
  a += 0.7;
  pop(); 
  
  //cubo1
  push();
  texture(graficocubo1);
  translate(0, 0, 0);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  rotateZ(frameCount * 0.005);
  box(200, 200);
  pop();
  
  //torus 1 dentro del cubo1
  push();
  normalMaterial()
  translate(0,0,0);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 0.03);
  torus(50,10);
  pop();
  
  //torus 2 dentro del cubo1
   push();
  normalMaterial()
  translate(0,0,0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
  torus(50,10);
  pop();
  
  //esfera dentro de los torus
  push();
  pointLight(255, 255, 91);
  texture(graficoellip);
  translate(0,0,0);
  ellipsoid(10,10);
  pop();
  
  //cubo2
  push();
  texture(graficocubo2);
  translate(-100, 200, -200);
  rotateX(frameCount * 0.010);
  rotateY(frameCount * 0.010);
  rotateZ(frameCount * 0.010);
  box(100, 100);
  pop();
  
}
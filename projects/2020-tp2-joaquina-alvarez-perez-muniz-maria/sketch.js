//Parcial nro2, cátedra Lacabanne
//Joaquina Alvarez

var x1=0;
var velocidad1=7;
var velocidad2=12;
var x2=0;
var destinoX=0;
var destinoY=0;
var x3=0;
var y=0;
var easing=0.05;
var angulo=0.0;
var linea=0;
var linea2=0;
var img1;
var img2;
var bomb;
var glaze;
var cuerpo=[];
var numeroCuerpos=40;

function setup() {
  let canvas = createCanvas(900, 900);
  canvas.parent('div-sketch');
img2= loadImage("img/cuerpo-saturado.webp"); 
 for (let i = 0; i < numeroCuerpos; i++) {
    cuerpo.push(new cuerpx(random(0,500), random(580,900)));
  }
  
glaze.loop();}

function preload(){
img1= loadImage("img/sin-titulo.webp");
bomb= loadSound("audio/bombita.mp3");
glaze= loadSound("audio/glaze.mp3");
}

function draw() {
  background(220,0);
  
  x1 += velocidad1;
  x2-= velocidad2;
  x3+= (destinoX-x3)*easing;
  y+= (destinoY-y)*easing;  
 
noStroke(); 
  
  fill(120,10,255,10);
  rect(0,0,500,400);
  
  
push();
 noStroke();
 translate(x3,y);
 tint(255,30);
 image(img1,-240,-190,500,400);
  pop();
 
  
  push()
translate(x1,10);
  for(var i=linea;i<5;i++){
 stroke(250,255,0); 
 strokeWeight(15);
  line(0+i*40,-10,0+i*40,405);
  }
  if (x1 > width+linea) {
  x1 =-linea-200; }  
 pop();

 push();
  translate(x2, 0);
  strokeWeight(3);
  stroke(0);
  for (var i2 = linea2; i2 < 10; i2++) {
    line(700 + i2 * 0, -45, 510 + i2 * 30, 405);}
  if (x2 < -width-300) {
    x2 = linea2;}
  pop();

  fill(10,20,190);
  rect(0,400,500,500);
  
 for(let i = 0; i < cuerpo.length; i++) {
  cuerpo[i].show();}
  
fill(0);
rect(500,0,400,900); 
  
  fill(random(0,255),random(0,199),random(0,255));
  rect(520,50,360,770);
  stroke(100);
  strokeWeight(10);
  line(660,25,730,25);
  fill(70);
  ellipse(695,860,45,45);
  

 push();
 noStroke();
  textSize(50);
  textFont("Unique");
  textStyle(BOLD);
  textAlign(CENTER);
  fill(random(0,255),random(0,255),random(0,255));
  text("No ver nada inteligible es la nueva normalidad",560,200,300,300);
  textAlign(CENTER);
fill(random(0,255),random(0,255),random(0,255));
  text("No ver nada inteligible es la nueva normalidad",560,300,300,300);
  textAlign(CENTER);
  fill(random(0,255),random(0,255),random(0,255));
  text("No ver nada inteligible es la nueva normalidad",560,400,300,300);
pop();

image(img2,-30,400,450,400);

}
function mousePressed(){
bomb.play();
  destinoX=mouseX;
  destinoY=mouseY;
}
function keyPressed(){
  if (key == "s");{
 glaze.stop()}
  if (key == "p"){
 glaze.play();
  }
}  

class cuerpx {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.s = random(80, 350);
  }
  show() {
    push();
    translate(this.x, this.y);
    let angle = map(mouseX, 0, width, 10, -10);
    rotate(angle);
    imageMode(CENTER);
    image(img2, 0, 0, this.s, this.s);
    pop();
  }
}

//AM1 catedra Lacabanne
//TP Nº1 
//Obra: La cosecha
//Alumno: Franco Sardón
//Pulsa z para cambiar de color

let fondo=215;
let linfren=2;
let linabaj=250;

function setup() {
  //createCanvas(512, 512);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  frameRate(5);
}

function draw() {
  background(fondo);
  let degra;
  let y2= random(50,0);
  //Lineas blancas 
  stroke(linabaj);
  let x2=random(20,25);
  for (let e = 0; e < 500; e += 23){
  push() 
  translate(e,0);
  line(20,552,x2,352);
  line(random(5,8),random(360,355),x2,390);
  line(random(12,15),random(395,390),x2,420);
  line(random(15,18),random(450,453),x2,460);
  line(random(30,25),random(365,363),x2,365);
  line(random(27,25),random(365,363),x2,365);
  line(random(30,35),random(398,403),x2,440);
  line(random(28,25),random(460,465),20,490);
  pop();
}
  stroke(linfren);
//Lineas negras
  strokeWeight(2);
  let x1=random(85,89);
for (var i = 0; i < 400; i += 35){
  push () 
  translate(i,random(0,2));
  line(85,552, x1,350);  
  line(random(65,70),random(350,355),x1,380); 
  line(random(105,100),random(350,355),x1,395); 
  line(random(75,70),random(390,385),x1,410);
  line(random(100,95),random(400,395),x1,420);
  line(random(90,95),random(420,425),x1,435);
  line(random(100,95),random(440,445),x1,458);
  line(random(65,60),random(430,425),random(x1,85),445);
  line(random(68,73),random(455,450),random(x1,85),473);
  pop ()
}
  push()
  translate(-50,0);
  line(85,552, x1,350);  
  line(random(65,70),random(350,355),x1,380); 
  line(random(105,100),random(350,355),x1,395); 
  line(random(75,70),random(390,385),x1,410);
  line(random(100,95),random(400,395),x1,420);
  line(random(90,95),random(420,425),x1,435);
  line(random(100,95),random(440,445),x1,458);
  line(random(65,60),random(430,425),random(x1,85),445);
  line(random(68,73),random(455,450),random(x1,85),473);
  pop()
  
  //lineas grises
  for (let o = 0; o < 520; o += 20){
  push()
  translate(o,0);  
  let x3=random(5,10);
  strokeWeight(1);
  stroke(linfren);
  line(5,552,x3,343);
  line(random(-10,-7),random(360,355),x3,370);
  line(random(-7,-5),random(400,405),x3,410);
  line(random(10,13),random(380,385),x3,390);
  line(random(17,13),random(405,415),x3,440);
  line(random(17,13),random(465,470),5,480);
  pop();
  }
  
  fill(linfren);
  ellipse(400,100,120,120);
  push();
  strokeWeight(1);
  noFill();
  for(let l=0; l<50; l+=10){
  l= l+2;
  let xc=random(130+l,125+l);
  let yc=random(130+l,135+l);
  ellipse(400,100,xc,yc);}
  pop();
  
  if (keyIsPressed) {
      if (key=='z'||key=='Z') {
  // Cambia el color de fondo al presionar cualquier tecla
  if (fondo === 215) {
    fondo = 15; // noche
    linfren = 250;
    linabaj = 120;
  } else {
    fondo = 215; // dia
    linfren = 2;
    linabaj = 250;
  }
} }
}
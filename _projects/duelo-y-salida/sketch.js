let xoff = 1;
let xspeed = 0.10;

// color fondo: #3ec193 -- #9A9A9A
// color triángulos: "#dc2566 -- #777777

let colorFondo ="#9A9A9A";
let colorTriangulos = "white";
let colorRostro = "#2E3640";
let recorridoLagrimas1 = 0;
let recorridoLagrimas2 = 0;


function setup() { 
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {

  let x = noise(xoff) * 45;
  let y = noise(xoff) * 15;
  let z = noise(xoff) * 5;
  
  xoff += xspeed;

  push();
  background("#D1D0CE");
  stroke(colorRostro);
  pop();

  push();
  stroke("white");
  strokeWeight(25);
  quad(0,235+45,0,512,155,512,0,400);
  quad(512,512,510,150,490,400,340,512);
  pop();

  push();
  strokeWeight(x); 
  stroke(colorRostro);
  quad(160,400,235,350,500-160,400,250,350);
  pop();
  
  push();
  
  let f = 0;
  strokeWeight(x);  
  fill(colorTriangulos); 
  
  strokeWeight(5+y);
  quad(220,500+f,220,120+f,275,245+f,275,500+f);

  strokeWeight(5+y);
  triangle(220,500+f,220,360+f,275,500+f);
  triangle(220,360+f,220,255+f,270,360+f);
  rect(210,500+f,75,10+f); 
  rect(220,330,10,5);

  stroke(colorRostro);
  
  strokeWeight(x);
  let a = 20;
  quad(55,55+a,100,80+a,150,55+a,100,65+a);

  strokeWeight(x);
  let c = 280;
  quad(45+c,45,100+c,70,150+c,45,100+c,55);

  pop();

  
  push();
  stroke(colorRostro);
  strokeWeight(x);
  quad(5,235,20,400,195,515,30,400);
  quad(498,150,480,370,300,515,475,390);
  
  pop();

  
  push();
  
  strokeWeight(y);
  
  triangle(100,80+recorridoLagrimas1,
           95,95+recorridoLagrimas1,
           105,90+recorridoLagrimas1);

  triangle(100+c,80+recorridoLagrimas2,
           95+c,95+recorridoLagrimas2,
           105+c,100+recorridoLagrimas2);

  recorridoLagrimas1++;
  recorridoLagrimas2 += 1.5;

  if(recorridoLagrimas1 > 512){
    recorridoLagrimas1 = 1;
  }

  if(recorridoLagrimas2 > 512){
    recorridoLagrimas2 = 1;
  }

  pop();



}
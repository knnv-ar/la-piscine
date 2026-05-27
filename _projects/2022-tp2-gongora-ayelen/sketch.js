/* Artilugio */
//Recorrer presionando "0" , "1" , "2"

var actos;
var col;
var transp3 = 0;
var transp2 = 533;
var transp = 10;
var amanece;
var x = 255;
var lup = 90;
var r = 50;
let thet;
var prueba = 1000;
var prueba2 = 600;
var xre = 150;

function setup() {
  let canvas = createCanvas(600, 390);
  canvas.parent('div-sketch');
  actos = 0;
  background(0);
  ilumina();
}

function draw() {
  fill(255);
  textSize(14);
  text(
    `
  text("El lenguaje 
  se descubre movimiento", 
  50,200);

`,
    50,
    200
  );

  //Intro 0
  if (actos == "0") {
    frameRate(30);
    push();
    background(0);
    movimiento();
    pop();
  }
  //Acto I
  if (actos == "1") {
    frameRate(30);
    push();
    image(amanece, 0, 0, 600, 390);
    //movimiento ();
    pop();
    somos();
  }
  //Intro 2
  if (actos == "2") {
    frameRate(30);
    push();
    //background(50);
    fill(50, 15);
    rect(0, 0, 600, 600);
    movimiento();
    pop();
  }
}

function keyPressed() {
  if (key === "0") {
    actos = 0;
  }
  if (key === "1") {
    actos = 1;
  } else if (key === "2") {
    actos = 2;
  }
  document.oncontextmenu = function () {
    return false;
  };
}

// I
function ilumina() {
  amanece = createVideo("videos/amanecer1.mp4");
  amanece.hide();
  amanece.loop();
  amanece.volume(0.2);
}

function somos() {
  textFont("Courier New");
  textSize(16);

  transp += 0.2;
  transp2 -= 0.2;
  if (transp > 300) {
    transp = transp2;

   
  }
  
  fill(255, transp);

  text(
    `var amanece;

function setup() {
  createCanvas(600, 390);
  ilumina();     
  }
                 
function draw()  {
  image(amanece, 0, 0, 600, 390);
  somos();       
  }
                
`,
    60,
    70
  );
 
}

// Símbolo recursivo transición

function branch(h) {
  

  h *= 0.5;

  if (h > 2) {
    push();
    rotate(thet);
   /* if ( actos == "3") {
     textSize(10);
text("El lenguaje se descubre movimiento", 150, -30);
     // line(0, 0, 0, -h);
      point(150,-30);
      // point(100, 100);
      // line(150, -30, 0, -h);
      //rect(xre, -30, 300, 300);
     // ellipse(150, -80,400,400);
    }*/
    if ( actos == "2") {
      line(0, 0, 0, -h);
      point(150,-30);
       //point(100, 100);
   //line(100, 0, 100, -h/2);
      fill(0,10);
      ellipse(150, -190,500,500);
      
      }
    
    translate(0, -h);
    branch(h);
    pop();

    push();
    rotate(-thet);
    if (actos == "2" ) {
      line(0, 0, 0, -h);
      
     // line(100, 0, 100, -h/2);
    }
    if (actos == "0" ||  actos =="2")
    {point(-h, -h);
    point(0, 0);
    point(10, 10);}
    point(150,-30);
    point(-600,-600)
    translate(0, -h);
    branch(h);
    pop();
  }
  document.oncontextmenu = function () {
    return false;
  };
}

function movimiento() {
   //background(0);
  var col = 255;
 
  
  
  
 r += 0.45; 
  
  if (r >= 200) {
    r = r* -1.10; 
  }
  
  fill(0, 30);
  frameRate(30);
  stroke(col);

  let a = (r / width) * 180;

  thet = radians(a);

  translate(300, 245);
  
  branch(120);
  branch(60);
  branch(30);
  branch(10);

  
}


/* Artes Multimediales I - Cátedra Lacabanne
Ayelén Góngora - 2022 */

let contador = 0;
let espacioAleatorio = 20; // Controla el rango del espacio aleatorio
let factorAmpliacion=0.005;
let grosor;
let value=0;




function setup() {
  let canvas = createCanvas(512,512);
  canvas.parent('div-sketch');
  background(255);
  textSize(15);
  fill(230);
  textFont("Franklin Gothic");
  text("Presione el botón izquierdo ó derecho del mouse para generar la imágen",10, 460,500,200 );
}

function draw() {
  strokeWeight(1);
  
 if(mouseIsPressed){
   if (mouseButton===RIGHT){
  let grosor = (contador /2) * factorAmpliacion;
    strokeWeight(grosor)  


  }
   
dibujolineas();
   
}
  // Ejecutar solo 210 veces (30 para cada línea)
  function dibujolineas()
 { if (contador < 30) {
    // Dibuja la primera línea recta
    let x1 = random(100);
    let y1 = random(100);
    let x2 = random(80);
    let y2 = random(80);
    line(x1, y1, x2, y2);
  } else if (contador < 60) {
    // Dibuja la segunda línea
    let x1 = random(150, 250);
    let y1 = random(100);
    let x2 = random(130, 230);
    let y2 = random(80);
    let xOffset = random(-espacioAleatorio, espacioAleatorio);
    let yOffset = random(-espacioAleatorio, espacioAleatorio);
    line(x1 + xOffset, y1 + yOffset, x2 + xOffset, y2 + yOffset);
  } else if (contador < 90) {
    // Dibuja la tercera línea
    let x1 = random(330, 390);
    let y1 = random(100);
    let x2 = random(280, 370);
    let y2 = random(80);
    let xOffset2 = random(-espacioAleatorio, espacioAleatorio);
    let yOffset2 = random(-espacioAleatorio, espacioAleatorio);
    line(x1 + xOffset2, y1 + yOffset2, x2 + xOffset2, y2 + yOffset2);
  } else if (contador < 120) {
    // Dibuja la cuarta línea
    let x1 = random(100);
    let y1 = random(150, 200);
    let x2 = random(80);
    let y2 = random(120, 220);
    let xOffset = random(-espacioAleatorio, espacioAleatorio);
    let yOffset = random(-espacioAleatorio, espacioAleatorio);
    line(x1 + xOffset, y1 + yOffset, x2 + xOffset, y2 + yOffset);
  } else if (contador < 150) {
    // Dibuja la quinta línea
    let x1 = random(150, 250);
    let y1 = random(150, 250);
    let x2 = random(130, 230);
    let y2 = random(130, 230);
    let xOffset3 = random(-espacioAleatorio, espacioAleatorio);
    let yOffset3 = random(-espacioAleatorio, espacioAleatorio);
    line(x1 + xOffset3, y1 + yOffset3, x2 + xOffset3, y2 + yOffset3);
  } else if (contador < 180) {
    // Dibuja la sexta línea
    let x1 = random(330, 390);
    let y1 = random(150, 250);
    let x2 = random(280, 370);
    let y2 = random(130, 230);
    let xOffset4 = random(-espacioAleatorio, espacioAleatorio);
    let yOffset4 = random(-espacioAleatorio, espacioAleatorio);
    line(x1 + xOffset4, y1 + yOffset4, x2 + xOffset4, y2 + yOffset4);
  } else if (contador < 210) {
    // Dibuja la séptima línea debajo de la cuarta línea
    let x1 = random(100);
    let y1 = random(280, 370); 
    let x2 = random(80);
    let y2 = random(280, 350); // Asegura que y2 esté debajo de la cuarta línea
    let xOffset5 = random(-espacioAleatorio, espacioAleatorio);
    let yOffset5 = random(-espacioAleatorio, espacioAleatorio);
    line(x1 + xOffset5, y1 + yOffset5, x2 + xOffset5, y2 + yOffset5);
} else if (contador < 240) {
    // Dibuja la octava línea al lado de la séptima línea
    let x1 = random(150, 230);
    let y1 = random(280, 350); 
    let x2 = random(140, 230); 
    let y2 = random(290, 380);
    let xOffset6 = random(-espacioAleatorio, espacioAleatorio);
    let yOffset6 = random(-espacioAleatorio, espacioAleatorio);
    line(x1 + xOffset6, y1 + yOffset6, x2 + xOffset6, y2 + yOffset6);
  } else if (contador < 270) {
    // Dibuja la octava línea al lado de la séptima línea
    let x1 = random(340, 370);
    let y1 = random(290, 360); 
    let x2 = random(300, 320); 
    let y2 = random(290, 380);
    let xOffset6 = random(-espacioAleatorio, espacioAleatorio);
    let yOffset6 = random(-espacioAleatorio, espacioAleatorio);
    line(x1 + xOffset6, y1 + yOffset6, x2 + xOffset6, y2 + yOffset6);
  }
  
  // Incrementa el contador
  contador++; }
  }
document.oncontextmenu = 
function(){
return false;
}

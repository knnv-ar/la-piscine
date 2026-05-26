//declaro las imagenes
//declaro las imagenes
let fondo_1;
let  fondo_2;

//declaro el sonido
let version_1;
let version_2;
let musicaon = true;
// declaro perimetro
let calendarioX = 10, calendarioY = 180, calendarioAncho = 170, calendarioAlto = 55;
//---------------------------------------------------------------------------
function preload() {
  //imagenes
  fondo_1 = loadImage("img/fondo-1.png");
  fondo_2 = loadImage("img/fondo-2.png");
  //sonidos
  version_1 = loadSound ("version-1.MP3"); 
  version_2 = loadSound ("version-2.MP3"); 
}
//---------------------------------------------------------------------------
function setup() {
  let canvas = createCanvas(500, 690);
canvas.parent('div-sketch');
  version_1.loop();
}
//---------------------------------------------------------------------------
function draw() {
   // Lo que se muestra cuando el Mouse no está apretado
  if (musicaon) {
    // Muestra fondo 1
 image (fondo_1, 0, 0); 
//---------------------------------------------------------------------------
  } else {
    //aparece fondo 2
     image (fondo_2, 0, 0,); 
  }
}
//Si presiono el mouse:
function mousePressed() {
  if (mouseX >= calendarioX && mouseX <= calendarioX + calendarioAncho && mouseY >= calendarioY && mouseY <= calendarioY + calendarioAlto) {
  if (musicaon) {
    version_1.stop(); // Detiene la version 1
    version_2.loop(); // Reproduce la version 2
//si lo vuelvo a presionar:
  } else {
    version_2.stop(); // Detiene version 2
    version_1.play(); // vuelve a poner la version 1
  }
//---------------------------------------------------------------------------  
  // Cambia el estado
  musicaon = !musicaon;
}
}
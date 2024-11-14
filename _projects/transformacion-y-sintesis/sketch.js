
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let captura;
let rectX;
let rectY;
let rectW = 100;
let rectH = 100;
let insta = [];


let subirRojo = 0;
let subirVerde = 0;
let subirAzul = 0;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
let font;
////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let diapositivas = [];
let diapositivaActual = 0;
let mostrarDiapositivas = false;
////////////////////////////////////////////////////////////////////////////////////////////////////////////



function setup() {
  
  let canvas = createCanvas(960, 540);
  canvas.parent('div-sketch');
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  diapositivas = [
    "PRESIONE CUALQUIER TECLA PARA COMENZAR",
    "ESA NO",
    "TAMPOCO",
    "CASI",
    "AHI VA",
    "AHORA SI EMPEZAMOS"
  ];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  textFont(font);
  textSize(50)
  textAlign(CENTER,CENTER);
  fill(255);
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  rectX = 480 - rectW;
  rectY = 270 - rectH;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

function preload(){
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  font = loadFont('/font/jersey.ttf')
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  captura = createCapture(VIDEO);
  captura.size(960,540)
  captura.hide()
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

function draw() {
  createCanvas(960, 540);
  background(0);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if(mostrarDiapositivas){   
    
    for(let i = 0; i < insta.length; i ++){
      image(insta[i].img, insta[i].x, insta[i].y,rectW, rectH)
    }
    
    image(captura,rectX, rectY, rectW,rectH);
    noFill();
    noStroke();
    rect(rectX, rectY, rectW, rectH);
    } else{
    text(diapositivas[diapositivaActual], width/2, height/2);
    }    
  

  
  
  
  
  
  //console.log(mostrarBrave)
}
function mousePressed() {
 
  if (mouseX > rectX && mouseX < rectX + rectW && mouseY > rectY && mouseY < rectY + rectH) {
    
    let img = captura.get(rectX, rectY, rectW, rectH);
    
    
    insta.push({ img: img, x: rectX, y: rectY });
    
    rectX = random(0, width - rectW);
    rectY = random(0, height - rectH);
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function keyPressed(){
  diapositivaActual++;

  if (diapositivaActual >= diapositivas.length){
    mostrarDiapositivas = true;
 
  }
  if(keyCode === ENTER || keyCode == 32){
    let img = captura.get(rectX, rectY, rectW, rectH);
    
    
    insta.push({ img: img, x: rectX, y: rectY });
    
    rectX = random(0, width - rectW);
    rectY = random(0, height - rectH);
  }
  if(key === "i" || key === "I"){
    invertirColores();
  }
  if(key === "a" || key === "A"){ // achicar ancho
    rectW -= 10;
  }
  if(key === "d" || key === "D"){ // agrandar ancho
    rectW += 10;
  }
  if(key === "w" || key === "W"){ // agrandar alto
    rectH -= 10;
  }
  if(key === "s" || key === "S"){ // achicar alto
    rectH += 10;
  }
  if(key === "r" || key === "R"){ // solo colores rojo
    mostrarSoloRojo();
  }
  if(key === "g" || key === "G"){ // solo colores verdes
    mostrarSoloVerde();
  }
  if(key === "b" || key === "B"){ // solo colores azules
    mostrarSoloAzul();
  }
  if(key === "n" || key === "N"){ 
    subirAzul +=5;
  }
  if(key === "v" || key === "V"){
    subirAzul -=5;   
  }
  if(key === "h" || key === "H"){
    subirVerde +=5;
  }
  if(key === "f" || key === "F"){
     subirVerde -=5;  
  }
  if(key === "t" || key === "T"){
     subirRojo += 5;
     }
  if(key === "e" || key === "E"){
     subirRojo -=5;
  }
}

function invertirColores(){
  let img = captura.get(rectX, rectY, rectY, rectH);

  img.loadPixels();
  for(let i = 0; i < img.pixels.length; i += 4){
    img.pixels[i] = 255 - img.pixels[1]; //rojo
    img.pixels[i + 1] = 255 - img.pixels[i + 1]; //verde
    img.pixels[i + 2] = 255 - img.pixels[i + 2] 
    
  }
    img.updatePixels();
  
    insta.push({img: img, x: rectX, y: rectY})
  
    rectX = random(0, width - rectW);
    rectY = random(0, height - rectH);
}



function mostrarSoloRojo() {
  let img = captura.get(rectX, rectY, rectW, rectH);

  img.loadPixels();
  for(let i = 0; i < img.pixels.length; i += 4){
    let red = img.pixels[i];
    img.pixels[i] = red;         
    img.pixels[i + 1] = subirVerde;       
    img.pixels[i + 2] = subirAzul;       
  }
  img.updatePixels();
  
  insta.push({img: img, x: rectX, y: rectY});
  
  rectX = random(0, width - rectW);
  rectY = random(0, height - rectH);
}

function mostrarSoloVerde(){
  let img = captura.get(rectX,rectY, rectW, rectH);
  img.loadPixels();
  
    for(let i = 0; i < img.pixels.length; i += 4){
      let green = img.pixels[i + 1];
      img.pixels[i] = subirRojo;
      img.pixels[i + 1] = green;
      img.pixels[i + 2] = subirAzul;
    }
    img.updatePixels();
    
    insta.push({img: img,x: rectX, y:rectY});
    
    rectX = random(0, width - rectW);
    rectY = random(0, height - rectH);
}

function mostrarSoloAzul() {
  let img = captura.get(rectX, rectY, rectW, rectH);

  img.loadPixels();
  for(let i = 0; i < img.pixels.length; i += 4){
    let blue = img.pixels[i + 2];
    img.pixels[i] = subirRojo;           
    img.pixels[i + 1] = subirVerde;       
    img.pixels[i + 2] = blue;    
  }
  img.updatePixels();
  
  insta.push({img: img, x: rectX, y: rectY});
  
  rectX = random(0, width - rectW);
  rectY = random(0, height - rectH);
}






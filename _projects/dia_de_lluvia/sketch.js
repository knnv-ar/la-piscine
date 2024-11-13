// al hacer click el barquito cae
// al caer se puede mover hacia la izquierda o derecha con las flechitas

let img, img1, im2, img3
let velocidad = 1.5
let falling = false
let img2Y = 260
let img2X = 250
let lluvia
let risa
let gotas = []

function preload() { 
  img = loadImage("fondo.jpg") 
  img1 = loadImage("nena.png") 
  img2 = loadImage("barquito.png") 
  lluvia= loadSound("lluvia.mp3") 
  risa = loadSound("risa.mp3")
  }

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch'); 
  image(img, 0, 0)
  image(img1, 180, 180, 350, 350)
  image(img2, 250, 260, 80, 80)
  lluvia.loop () 

// gotas de lluvia random  
 for (let i=0; i<100; i++) {
   gotas.push({
  x: random(width),
  y: random(-height, 0) ,  
  length: random(10, 20),
  speed: random (2, 5)
  })
} 
}

function draw() {
  image(img, 0, 0)
  image(img1, 180, 180, 350, 350)

 //dibujar las gotas
 stroke (173, 216, 230) 
 strokeWeight(2) 

 for (let i=0; i< gotas.length; i++ ) {
 line (gotas[i].x, gotas[i].y, gotas[i].x, gotas[i].y + gotas.length) 
 gotas[i].y += gotas[i].speed

//reiniciar gota si cae fuera d pantalla
 if (gotas[i].y > height) {  
  gotas[i].y = random(-20,0) 
  gotas[i].x = random (width)
   }
   }

//caiga el barquito
  if (falling) {
    if (img2Y + 80 < height) {
  img2Y += velocidad
  }  
   else {
    falling = false
}
    }

//cuando cae se pueda mover  
  if (!falling) {
    if (keyIsDown(LEFT_ARROW)) {
    img2X -= 2 }
    if (keyIsDown(RIGHT_ARROW)) {
    img2X += 2  }
  }
  image(img2, img2X, img2Y, 80, 80)
  }
 function mousePressed() {
  falling = true
   if (!risa.isPlaying()) {
   risa.loop ()  }
}   
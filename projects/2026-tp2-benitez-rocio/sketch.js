//Variables
let imgFlores = [];
let sonido;
let floresAgregadas = [];
let fondoCesped;

async function setup() {
  let canvas = createCanvas(600, 445); 
  canvas.parent('div-sketch'); 

//Guardo las imagenes
  imgFlores[0] = await loadImage("img/flor 1.png");
  imgFlores[1] = await loadImage("img/flor 2.png");
  imgFlores[2] = await loadImage("img/flor 3.png");
  imgFlores[3] = await loadImage("img/flor 4.png");
  imgFlores[4] = await loadImage("img/flor 5.png");

//Imagen de Cesped
  fondoCesped = await loadImage("img/pasto.png");
  
//Guardo el sonido
  sonido = await loadSound("sonidos/pop.mp3");
}

function draw() {
  background(197, 229, 245);
  image(fondoCesped, 0, 0, 600, 445);
  
//Titulos
  textFont("Redaction");
  fill(28, 74, 130);
  textSize(28);
  textAlign(CENTER);
  text("Un Jardín Primaveral", 300, 35);
  
  textSize(16);
  text("Haga clic para agregar flores | Toque la tecla B para borrar todo", 300, 65);

//for que recorre las flores que se van agregando
  for (let i = 0; i < floresAgregadas.length; i++) {
    let flor = floresAgregadas[i];

//Agrega la imagen de la flor en el lienzo
    image(imgFlores[flor.tipo], 
          flor.x - 35, 
          flor.y - 35, 
          70, 70);
  }
}

function mousePressed() {
  if (mouseY < 150) {
    return;
  }

//Creo una variable, para que las flores aparezcan en orden
  let numeroFlor = floresAgregadas.length % 5;

//3 objetos, donde se guarda la posición horizontal, la posición vertical y el tipo de flor que se agrego
  let flor = {
    x: mouseX,
    y: mouseY,
    tipo: numeroFlor
  };

//Agrego el objeto flor al array floresAgregadas
  floresAgregadas.push(flor);

//Se reproduce el sonido
  sonido.stop();
  sonido.play();
}

function keyPressed() {
  if (key == "b" || key == "B") {
   floresAgregadas = [];
  }
}

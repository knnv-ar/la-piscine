let camara;
let imagen;

let perfil_inf
let perfil_sup

let perfil_sup_y = 130

let velocidadY = 0;
let velocidadX = 0;
let foto = -1;

let galeria;

let aspiradora;

let efecto = 0;

let canciones = [
  "bach_badinerie.mp3",
  "bach_tocata_y_fuga.mp3",
  "lofi_toybox.mp3"
]

let fuentes = [
  "Arial",
  "Courier",
  "Georgia",
  "Times New Roman"
]

let textos = [
  "¿Llegaste a verlo?",
  "¿Lo pudiste ver?",
  "Medio rápido, ¿no?",
  "Decime que lo viste",
  "No te lo perdiste, ¿no?"
]

let textoFinal
let fuente

function preload() {
  
  camara = createCapture(VIDEO);
  camara.hide();
  galeria = loadImage("Imagenes/galeria.jpg");
  perfil_inf = loadImage("Imagenes/perfil_inf.png")
  perfil_sup = loadImage("Imagenes/perfil_sup.png")
  aspiradora = loadSound("Sonidos/aspiradora.mp3")
  ruido_gente = loadSound("Sonidos/ruido_gente.mp3")
  sonido_caida = loadSound("Sonidos/sonido_caida.mp3")
  sonido_pixel = loadSound("Sonidos/sonido_pixel.mp3")
  musica = loadSound("Musica/" + random(canciones))
}

function setup() {
  let canvas = createCanvas(747, 560);
  canvas.parent('div-sketch');
  camara.hide();
  
  //Ajusto el tamaño de la camara al marco
  camara.size(240, 157);
  noStroke();
  
  //Seteo el sonido
  ruido_gente.loop()
  musica.setVolume(0.2)
  musica.loop()
  
  //Defino el texto y la fuente que se muestran al final
  fuente = random(fuentes)
  textoFinal = random(textos)
}

function draw() {
  background(0);
  image(galeria, 1, 1);
  fill(0)
  rect(625,222,44,62)
  image(perfil_inf, 440, 280)
  image(perfil_sup, 512, perfil_sup_y)
  

  //Valido si se sacó una captura o no
  if (foto == -1) {
    //Si no se sacó una captura, muestro la camara como video
    imagen = camara;
    velocidadY = 0;
    velocidadX = 0;
    image(imagen, 74, 178);
  } else {
    
    switch(evento){
      case 0:
        aspirarCamara()
        break;
      case 1:
        caidaCamara()
        break;
      default:
        pixelarCamara()
        break;
    }
  }
  
  
  //Al finalizar la ejecución, se muestra una pantalla negra con un texto aleatorio predefinido
  if(foto == 2){
    musica.stop()
    ruido_gente.stop()
    aspiradora.stop()
    fill(0)
    rect(0,0, 747, 560)
    
    textFont(fuente)
    textSize(30)
    textAlign(CENTER)
    fill(255)
    text(textoFinal, 373, 280)
    
  }


}

function mousePressed() {

  if(foto == -1){
    
    imagen = camara.get();
    evento = int(random(0, 3))
    console.log(evento)
    
    if(evento == 0){
      aspiradora.play()
      perfil_sup_y = 80
    } else if(evento == 1){
      sonido_caida.play()
    } else {
      sonido_pixel.play()
    }
    
    foto = 1;
  }

}

function pixelarCamara(){
  //Se carga la imagen
  imagen.loadPixels();
  
  //Recorro el ancho de la captura
  for (let x = 0; x < 240; x +=5){
    //Recorro el alto de la captura
    for (let y = 0; y < 157; y +=5){
      
      //Genero un rect en forma de pixel
      let offset = (x + y * 240) * 4
      fill(
        imagen.pixels[offset],
        imagen.pixels[offset + 1],
        imagen.pixels[offset + 2]
      );
      rect(x + 74, y + 178, 5, 5)
      
    }
  }
  
  //Valido el tiempo transcurrido mediante frames y finalizo la ejecución
  if((frameCount % 180) == 0){
      foto = 2;
    }
}

function caidaCamara(){
  //Se carga la imagen
  imagen.loadPixels();
  
  //Recorro el ancho de la captura
  for (let x = 0; x < 240; x +=2){
    //Recorro el alto de la captura
    for (let y = 0; y < 157; y +=2){

      //Genero un rect en forma de pixel
      let offset = (x + y * 240) * 4
      fill(
        imagen.pixels[offset],
        imagen.pixels[offset + 1],
        imagen.pixels[offset + 2]
      );
      
      rect(x + 74, y + 178 + velocidadY, 2, 2)
      
    }
  }
  
  //Deslizo la imagen hacia abajo
  velocidadY+=10;
  
  //Valido la posición del pixel más alto y si sale del canvas finalizó la ejecución
  if(velocidadY > 382){
      foto = 2;
    }
}

function aspirarCamara(){
    //Se carga la imagen
    imagen.loadPixels();

    //Recorro el ancho de la captura
    for (let x = 0; x < 240; x += 2) {
      //Recorro la primera mitad del alto de la captura (de arriba para abajo)
      for (let y = 0; y < 78; y += 2) {
        //Genero un rect en forma de pixel
        let offset = (x + y * 240) * 4;
        fill(
          imagen.pixels[offset],
          imagen.pixels[offset + 1],
          imagen.pixels[offset + 2]
        );

        //Valido si se llegó a la boca del espectador
        if (x + velocidadX <= 550 && y + 178 + velocidadY <= 256) {
          //Si no se llegó, se dibuja el rect
          rect(x + 74 + velocidadX, y + 178 + velocidadY, 2, 2);
        }
      }

      //Recorro la segunda mitad del alto de la captura (de abajo para arriba)
      for (let y = 78; y < 157; y += 2) {
        //Genero un rect en forma de pixel
        let offset = (x + y * 240) * 4;
        fill(
          imagen.pixels[offset],
          imagen.pixels[offset + 1],
          imagen.pixels[offset + 2]
        );

        //Valido si se llegó a la boca del espectador
        if (x + velocidadX <= 550 && y + 178 - velocidadY >= 256) {
          //Si no se llegó, se dibuja el rect
          rect(x + 74 + velocidadX, y + 178 - velocidadY, 2, 2);
        }
      }
    }

    //Se incrementa la velocidad de X e Y para mover los rect
    velocidadY += 1;
    velocidadX += 5;
  

    //Valido la posición del pixel mas a la izquierda y si llega a la boca finalizo la ejecución
    if(velocidadX > 350){
      perfil_sup_y = 130;
      foto = 2;
    }
}

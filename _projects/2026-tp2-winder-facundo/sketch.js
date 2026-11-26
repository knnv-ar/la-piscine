let Artista1;
let Artista2;
let Meme1;
let Meme2;
let Meme3;
let Meme4;
let Meme5;
let FondoBanana;
let Obras = [];

let ImagenActual = 0;
let Estado = 0;
let imagenesCargadas = false;

async function CargarImagenes() {
//Obras
  Obras[0] = {
    original: await loadImage("arte/comediante.jpeg"),
    nombre: "Comediante"
  };

  Obras[1] = {
    original: await loadImage("arte/lafuente.jpeg"),
    nombre: "Lafuente"
  };

  Obras[2] = {
    original: await loadImage("arte/popart.jpg"),
    nombre: "Pop Art"
  };

  //Meme
  Meme1 = await loadImage("retoque/memesorprendido.png");
  Meme2 = await loadImage("retoque/negrosorprendido.png");
  Meme3 = await loadImage("retoque/anteojos.png");
  Meme4 = await loadImage("retoque/riendoMeme.png");
  Meme5 = await loadImage("retoque/monomeme.png");

  //Artistas
  Artista1 = await loadImage("artistas/maurizzioc.png");
  Artista2 = await loadImage("artistas/marcel_duchamp.png");

  //Fondos
  FondoBanana = await loadImage("fondos/comediante.jpg");

  imagenesCargadas = true;
}

function setup() {
  function setup() {
  let canvas = createCanvas(1000, 1000); 
  canvas.parent('div-sketch'); 
  createCanvas(1000, 1000);
  frameRate(30);

  CargarImagenes();
}

function draw() {

  if (!imagenesCargadas) {
    return;
  }

  background(220);

  // ESTADO 0: INICIO

  if (Estado == 0) {

    textSize(30);
    textAlign(CENTER);
    text("Presiona cualquier tecla para comenzar", 500, 500);

  }

  // ESTADO 1: MUESTRA

  else if (Estado == 1) {

    RetocarObra();

    if (ImagenActual == 2) {
      image(Obras[ImagenActual].original, 125, 250);
    } else {
      image(Obras[ImagenActual].original, 300, 300);
    }
  }

  // ESTADO 2: FINAL

  else if (Estado == 2) {

    textSize(30);
    textAlign(CENTER);
    text("Gracias por ver", 500, 500);

  }

}


// CAMBIO DE ESTADOS CON EL TECLADO

function keyPressed() {

  if (!imagenesCargadas) {
    return;
  }

  if (Estado == 0) {

    Estado = 1;
    ElegirObra();

  }

  else if (Estado == 1) {

    Estado = 2;

  }

  else if (Estado == 2) {

    Estado = 0;
    ImagenActual = 0;

  }

}


// CAMBIO DE OBRAS CON EL MOUSE

function mousePressed() {

  if (!imagenesCargadas) {
    return;
  }

  if (Estado == 1) {

    ElegirObra();

  }

}


// SELECCION ALEATORIA

function ElegirObra() {

  ImagenActual = floor(random(Obras.length));

}


// FUNCION PARA RETOCAR LAS OBRAS

function RetocarObra() {

  if (ImagenActual == 0) {

    // RETOQUES DE COMEDIANTE
    push();
    push();

    tint(random(180, 255), random(0, 220), 0);
    image(FondoBanana, 0, 0);

    pop();
    strokeWeight(5);

    push();

    for (let i = 0; i < 70; i++) {
      line(10 + i * 15, 0, 10 + i * 15, 1000);
    }

    pop();
    push();

    textSize(60);
    text("6", 65, 160);

    for (let x = 100; x < 1000; x += 40) {
      for (let y = 160; y < 1000; y += 40) {
        text("0", x, y);
      }
    }

    pop();
    push();
    translate(850, 700);
    rotate(PI / 6);
    image(Meme1, 0, 0);
    pop();
    image(Meme2, 0, 500);
    image(Artista1, 500, 80);
    image(Meme3, 545, 179);
    textSize(80);
    textAlign(CENTER);
    fill(200, 200, 0);
    text("El Comediante", 300, 100);
    push();

    pop();
    pop();
  }


  else if (ImagenActual == 1) {

    // RETOQUES DE LAFUENTE
    fill(random(50, 200));
    rect(0, 0, 1000, 1000);
    textSize(50);
    stroke(0);
    strokeWeight(3);
    text("La Fuente", 200, 100);
    image(Meme4, 0, 500);
    image(Artista2, 680, 70);
    image(Meme5, 500, 600);
    push();
    textSize(30);
    textAlign(CENTER);
    text("Aceptan cualquier cosa ¿No?", 400, 200);
    pop();
  }

  else if (ImagenActual == 2) {
    // RETOQUES DE POP ART
    push();
    fill(255, 20, 147);
    rect(0, 0, 1000, 1000);
    noStroke();

    for (let i = 0; i < 30; i++) {
      let x = random(-150, 1000);
      let y = random(-150, 1000);

      fill(
        random(255),
        random(255),
        random(255)
      );

      rect(x, y, 300, 300);
      textSize(100);
      textAlign(CENTER);
      stroke(0);
      strokeWeight(15);

      fill(random(255), random(255), random(255));
      text("PoP ArT", 500, 150);
    }

    pop();
  }

}
// variables, arrays
let fondo;
let mouseClick;
let imagenes = [];
let rects = [];

// cargo imagenes y sonido
function preload() {
  fondo = loadImage("./img/fondo1.jpg"); // imagen cuadros de fondo
  mouseClick = loadSound("./audio/mouseClick.mp4");
  imagenes = [
    loadImage("./img/cds.png"),
    loadImage("./img/telefonito.png"),
    loadImage("./img/zapatitos.png"),
    loadImage("./img/disney.png"),
    null, // cuadro sin imagen
    loadImage("./img/ps2.png"),
    loadImage("./img/ned.png"),
    loadImage("./img/bananitaDolca.png"),
    loadImage("./img/radio.png"),
    loadImage("./img/pata.png"),
    loadImage("./img/mdq.png"),
    null, // cuadro sin imagen
    loadImage("./img/compu.png"),
    loadImage("./img/bombuchas.png"),
    loadImage("./img/walkieTalkie.png"),
    loadImage("./img/petShop.png"),
    loadImage("./img/gogos.png"),
  ];
}

function setup() {
  let canvas = createCanvas(735, 622);
  canvas.parent('div-sketch');

  // posiciones, tamaños, colores y estado de desbloqueo de los rects
  rects = [
    { x: 18, y: 169, w: 144, h: 183, color: [53, 121, 116], unlocked: false }, // cuadro 1
    { x: 178, y: 56, w: 49, h: 73, color: [223, 201, 180], unlocked: false }, // cuadro 2
    { x: 270, y: 40, w: 64, h: 92, color: [223, 201, 180], unlocked: false }, // cuadro 3
    { x: 371, y: 34, w: 104, h: 129, color: [223, 201, 180], unlocked: false }, // cuadro 4
    { x: 522, y: 105, w: 43, h: 30, color: [190, 202, 193], unlocked: false }, // cuadro 5 sin imagen
    { x: 209, y: 160, w: 131, h: 105, color: [208, 201, 178], unlocked: false }, // cuadro 6
    { x: 371, y: 196, w: 62, h: 88, color: [208, 201, 178], unlocked: false }, // cuadro 7
    { x: 470, y: 192, w: 63, h: 90, color: [16, 71, 83], unlocked: false }, // cuadro 8
    { x: 567, y: 179, w: 136, h: 175, color: [192, 109, 93], unlocked: false }, // cuadro 9
    { x: 462, y: 329, w: 50, h: 76, color: [192, 109, 93], unlocked: false }, // cuadro 10
    { x: 81, y: 378, w: 97, h: 75, color: [40, 185, 166], unlocked: false }, // cuadro 11
    { x: 220, y: 419, w: 43, h: 30, color: [211, 112, 96], unlocked: false }, // cuadro 12 sin imagen
    { x: 303, y: 315, w: 118, h: 147, color: [13, 20, 25], unlocked: false }, // cuadro 13
    { x: 204, y: 290, w: 65, h: 90, color: [208, 201, 178], unlocked: false }, // cuadro 14
    { x: 222, y: 496, w: 50, h: 76, color: [231, 168, 115], unlocked: false }, // cuadro 15
    { x: 321, y: 485, w: 84, h: 113, color: [13, 20, 25], unlocked: false }, // cuadro 16
    { x: 454, y: 447, w: 105, h: 133, color: [13, 20, 25], unlocked: false }, // cuadro 17
  ];
}

function draw() {
  background(220);
  image(fondo, 0, 0);

  // dibujo los rects y sus imagenes si estan desbloqueadas
  for (let i = 0; i < rects.length; i++) {
    const rectData = rects[i];
    fill(rectData.color);
    rect(rectData.x, rectData.y, rectData.w, rectData.h);

    // se muestran las imagenes si el rectangulo esta desbloqueado
    if (rectData.unlocked && imagenes[i]) {
      image(imagenes[i], rectData.x, rectData.y, rectData.w, rectData.h);
    }
  }
}

// clicks sobre los rects
function mousePressed() {
  for (let i = 0; i < rects.length; i++) {
    const rectData = rects[i];
    if (
      mouseX > rectData.x &&
      mouseX < rectData.x + rectData.w &&
      mouseY > rectData.y &&
      mouseY < rectData.y + rectData.h
    ) {
      rectData.unlocked = true; // desbloqueo de rectangulos
      mouseClick.play(); // suena el click
    }
  }
}

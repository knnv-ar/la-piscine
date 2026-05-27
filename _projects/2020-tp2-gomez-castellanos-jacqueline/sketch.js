
var img2, img3, img4, img5, img6, img7, img8, img9, img10
var offset = 0;
var easing = 1;
var texto;
var sonido;

function preload() {
  img1 = loadImage("fotos/img0.webp"); //
  img2 = loadImage("fotos/foto2.webp");
  img3 =
    loadImage("fotos/jhoncara.webp");
  img4 =
    loadImage("fotos/img4.webp");
  img5 =
    loadImage("fotos/img5.webp");
  img6 = loadImage("fotos/img6.webp");
  img7 = loadImage("fotos/img7.webp");
  img8 = loadImage("fotos/img8.webp");
  img9 = loadImage("fotos/img9.webp");
  img10 = loadImage("fotos/img10.webp");
  fond = loadImage("textonegro1.webp");
  sonido = loadSound("sonidos/sonido.mp3");
}

function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent('div-sketch');
  sonido.loop();
}

function draw()

{
  texto = "Cosificar"; // 
  texto = "¿Qué marcas nos está dejando el vivir?";

  stroke(0);
  fill(0, 102, 153);
  textSize(60);
  textFont("Arial");
  textStyle(NORMAL);

  tint(231, 220, 156);

  image(img1, 250, 500); //collage diarios argentinos
  let dx = mouseX - img1.width / 2 - offset;
  offset += dx * easing;
  // Mostrar a media opacidad
  image(img1, offset, 0);

  stroke(0);
  fill(148, 129, 43);
  //ll(150, 75, 0);
  textSize(60);
  textFont("Arial");
  textStyle(NORMAL);
  text("Territorio ", 30, 50);

  stroke(0);
  fill(148, 129, 43);
  textSize(60);
  textFont("Arial");
  textStyle(NORMAL);
  text("Cuerpo", mouseX, 50);


  fill(148, 129, 43);
  text("Vida", 690, 50);
  fill(190, 142, 130);

  
  fill(148, 129, 43);
  text("vida cotidiana", mouseY, 500);
  fill(94, 10, 11);

  //fill(248, 153, 35);
  text("¡Ay, en la piel se siente!", mouseX, 580);


  tint(250)
  image(img2, 567, 38, 116, 88, mouseY, mouseX); //ojoEliza
  image(img3, 626, 126, 52, 72, mouseY, mouseX); //BocaJhon
  image(img4, 552, 104, 72, 84, mouseY, mouseX); //orejaCaliche
  image(img6, 550, 354, 139, 83, mouseY, mouseX); //piernas
  image(img7, 550, 200, 139, 156, mouseY, mouseX); //torso
  image(img8, 530, 186, 96, 76, mouseY, mouseX); //senoizquierdo
  image(img9, 626, 188, 94, 72, mouseY, mouseX); //senoderecho
  fill(69, 50, 46);
  textStyle("Helvetica");
  text("IMPREDECIBLES", mouseX, mouseY);
  //image(img10, 11, 60, 200, 180); //querido diario
  //tint(0);
  // image(img11, mouseY, mouseX);
  //image(img11,500, 100, 900, 600);
  image(fond, 0, mouseY, mouseX, 0);



}

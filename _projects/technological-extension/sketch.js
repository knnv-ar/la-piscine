let camaraZ;
let angle = 2;

let video;
let eye;
let text1;
let text2;
let text3;
let text4;
let text5;
let text6;
let texto;

let torusVisible = true;
let textVisible = true;

function preload() {
  video = createVideo("redes-sociales.mp4");
  eye = loadImage("eye.jpg");
  fondo = loadImage("fondo.png");
  text1 = loadImage("text1.jpg");
  text2 = loadImage("text2.jpg");
  text3 = loadImage("text3.png");
  text4 = loadImage("text4.png");
  text5 = loadImage("text5.png");
  text6 = loadImage("internet.png");
  
  texto = loadFont('RubikMonoOne-Regular.ttf')
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
  angleMode(DEGREES);
  camaraZ = -700;
  video.hide();
  video.loop();
  
  textFont(texto)
}

function draw() {
  background(0);
  siguientesPartes();
  noStroke();
  noFill();
  pointLight(255, 0, 0, 0, 0, 0);
  ambientMaterial(255);
  
  // Bucle de donas al principio
  if (torusVisible) {
    
    camera(0, 0, camaraZ, 0, 0, 0, 0, 1, 0);
    camaraZ += 0.5;
    
    for (let i = -5; i <= 5; i++) {
      // translate(0, 0, 15);
      let radio = 260 - i * 47;
      let grosor = 55 - i * 7;
      torus(radio, grosor);
    }
    
    //texto
    fill('yellow');
    translate(65, 0, -230)
    rotateY(180)
    text('Presiona "R" para ingresar', -70, 0);
    translate(10, 30, -70);
    text('al universo del internet', -70, 0);
  }
  
}


function siguientesPartes() {
  function hide() {
    torusVisible = false;
  }
  //////////////////PARTE 2
  if (key === "e" || key === "E") {
    hide();
    camera(0, 0, -550, 0, 0, 0, 0, 1, 0);
    // esfera fondo
    push();
    texture(fondo);
    rotateY(frameCount * 0.1);
    rotateX(frameCount * 1)
    sphere(600);
    pop();

    //esfera medio
    push();
    texture(text6);
    // ambientLight(0, 255, 0)
    rotateY(frameCount * 0.5);
    sphere(130);
    pop();

    //orbita 1
    push();
    rotateY(-frameCount * 2.5);
    texture(text6);
    ambientLight(255, 0, 100);
    translate(0, 0, 160);
    sphere(20);
    pop();

    //orbita 2
    push();
    rotateX(frameCount * 2.5);
    rotateY(frameCount * 0.04);
    texture(text2);
    translate(0, 160, 0);
    sphere(20);
    pop();

    //orbita 3
    push();
    rotateX(frameCount * 2.5);
    texture(text3);
    translate(0, -160, 0);
    sphere(20);
    pop();

    //orbita 4
    push();
    rotateY(-frameCount * 2.5);
    texture(text4);
    translate(0, 0, -160);
    sphere(20);
    pop();

    //orbita 5 (con cambio en Z)
    rotateZ(130);
    push();
    rotateY(-frameCount * 2.7);
    texture(text5);
    // ambientLight(255, 0, 0)
    translate(0, 0, -160);
    sphere(20);
    pop();

    //orbita 6 (con cambio en Z)
    rotateZ(-70);
    push();
    rotateY(frameCount * 2.5);
    texture(text1);
    translate(0, 0, -160);
    sphere(20);
    pop();
    
     //texto
    fill('yellow');
    translate(0, 18, -170)
    rotateZ(120)
    rotateX(145)
    text('Lo siento, has quedado atrapado', -170, 0);
  }

  ////////////////PARTE 1
  if (key === "r" || key === "R") {
    hide();    
    camera(0, 0, -550, 0, 0, 0, 0, 1, 0);

    //pared final
    push();
    texture(video);
    translate(-7, -50, 1400);
    plane(580, 410);
    pop();

    //pared der
    push();
    texture(video);
    translate(130, -27, 0);
    rotateY(90);
    plane(900, 205);
    pop();

    //piso
    push();
    texture(video);
    translate(0, 130, 0);
    rotateX(90);
    plane(450, 2200);
    pop();

    //pared izq
    push();
    texture(video);
    translate(-230, 0, -0);
    rotateY(90);
    plane(2400, 460);
    pop();

    //esfera
    push();
    texture(eye);
    rotateX(angle);
    rotateY(angle);
    sphere(3000, 200, 20);

    angle += 1;
    pop();
    
     //texto
    fill('yellow');
    translate(50, -180, -200)
    rotateY(180)
    text('Presiona "E" cuando quieras salir.', -120, 0);
  }
}
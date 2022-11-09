var randomtxt = [
  "te oxido",
  "corazón - de - cenizas",
  "corazón -de -paloma",
  "piedra - de - sangre",
  "te extraño",
  "voyage au bout du rouge",
  "los - faros - me - llevan",
  "me oxido",
  "diablo corazón",
  "rojo amapola",
  "corazón pórfido",
];
var angulo = 0.0;
var desplazamientox = 257;
var desplazamientoy = 358;
var escalar = 60;
var velocidad = 0.5;
var angulo2 = 0.0;
var desplazamientox2 = 257;
var desplazamientoy2 = 358;
var escalar2 = 60;
var velocidad2 = 0.2;

function setup() {
  let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
  background(0);
  //angleMode(DEGREES);
  stroke(256);
  strokeWeight(2);
  line(256, 160, 256, 260);
  line(256, 160, 235, 135);
  line(256, 160, 277, 135);

  //LADO IZQUIERDO OJOS
  //primer ojo
  noFill();
  strokeWeight(1);
  quad(225, 165, 130, 180, 225, 195, 256, 180);
  quad(225, 160, 135, 180, 225, 200, 256, 180);
  line(215, 168, 207, 180);
  line(207, 180, 215, 192);
  line(223, 168, 231, 180);
  line(231, 180, 223, 193);
  strokeWeight(5);
  point(220, 178);
  point(220, 180);
  //segundo ojo
  strokeWeight(1);
  quad(225, 210, 140, 250, 225, 240, 256, 215);
  quad(225, 215, 135, 250, 225, 235, 256, 215);
  line(218, 218, 213, 226);
  line(213, 226, 218, 235);
  line(225, 217, 230, 221);
  line(230, 221, 228, 232);
  strokeWeight(5);
  point(222, 225);
  //tercerojo
  strokeWeight(1);
  quad(227, 255, 160, 290, 232, 282, 256, 260);
  quad(227, 260, 155, 290, 232, 277, 256, 260);
  line(222, 262, 216, 270);
  line(216, 270, 220, 277);
  line(230, 261, 235, 266);
  line(234, 266, 233, 274);
  strokeWeight(5);
  point(226, 268);
  //otros ojitos
  strokeWeight(1);
  quad(215, 128, 203, 85, 236, 116, 235, 135);
  strokeWeight(5);
  point(226, 120);
  point(224, 120);

  //LADO DERECHO OJOS
  strokeWeight(1);
  quad(287, 165, 382, 180, 287, 195, 256, 180);
  quad(287, 160, 387, 180, 287, 200, 256, 180);
  line(297, 168, 305, 180);
  line(305, 180, 297, 192);
  line(289, 168, 281, 180);
  line(281, 180, 289, 193);
  strokeWeight(5);
  point(292, 178);
  point(292, 180);
  //segundo ojo
  strokeWeight(1);
  quad(287, 210, 372, 250, 287, 240, 256, 215);
  quad(287, 215, 377, 250, 287, 235, 256, 215);
  line(294, 218, 299, 226);
  line(299, 226, 294, 235);
  line(287, 217, 282, 221);
  line(282, 221, 284, 232);
  strokeWeight(5);
  point(290, 225);
  //tercerojo
  strokeWeight(1);
  quad(285, 255, 352, 290, 280, 282, 256, 260);
  quad(285, 260, 357, 290, 280, 277, 256, 260);
  line(290, 262, 296, 270);
  line(296, 270, 292, 277);
  line(282, 261, 277, 266);
  line(278, 266, 279, 274);
  strokeWeight(5);
  point(286, 268);
  //otros ojitos
  strokeWeight(1);
  quad(297, 128, 309, 85, 276, 116, 277, 135);
  strokeWeight(5);
  point(286, 120);
  point(288, 120);
  
  //ESTRELLA
  strokeWeight(1);
  //lado izquierdo
  line(256,20,244,37);
  line(244,37,215,37);
  line(215,37,232,45);
  line(232,45,229,55);
  line(229,55,244,53);
  line(244,53,256,99);
  //lado derecho
  line(256,20,268,37);
  line(268,37,297,37);
  line(297,37,280,45);
  line(280,45,283,55);
  line(283,55,268,53);
  line(268,53,256,99);
  
  //PUNTITOS
  strokeWeight(7);
  point(110,180);
  point(406,180);
  strokeWeight(5); 
  point(120,254);
  point(392,254);
  point(256,10);
  point(256,145);
  strokeWeight(4);
  point(140,294);
  point(372,294);
  point(197,76);
  point(315,76);
  
  //TEXTO
  fill(256)
  textAlign(CENTER);
  textStyle(ITALIC);
   textFont('Space Mono');
   strokeWeight(0)
   textSize(20);
  text(random(randomtxt),255,480);
}

function draw() {
  stroke(256);
  strokeWeight(1);
  if (escalar > 0){ 
  var x = desplazamientox + cos(angulo) * escalar;
  var y = desplazamientoy + sin(angulo) * escalar;
  ellipse(x, y, 2, 2);
  angulo += velocidad;
  escalar -= velocidad;
  }
    stroke(0);
   if (escalar2 > 0){ 
  var x = desplazamientox2 + cos(angulo2) * escalar2;
  var y = desplazamientoy2 + sin(angulo2) * escalar2;
  ellipse(x, y, 2, 2);
  angulo2 += velocidad2;
  escalar2 -= velocidad2;
  }
 
  
  console.log(escalar)
}

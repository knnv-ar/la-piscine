//Obra: Bugeado

//Para interacciones presionar "click izquierdo"
//O la letra "F"

var giro = 200;
var value = 1600;
var vuelta = 1;
var vuelta2 = 1;
function setup() {
//  createCanvas(512, 512);
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
  background(255);
}

function draw() {

  //fondo

  push();
  scale(value / 200);
  translate(400, 200);
  rotate(value / giro);
  push();
  translate(-200, -200);
  blendMode(DIFFERENCE);
  push();
  noStroke();
  fill(150);
  rect(100, 100, value);
  fill(220);
  rect(0, 512, value);
  pop();

  push();
  noStroke();
  translate(300, 200);
  fill(200);
  rect(100, 100, value);
  pop();

  push();
  translate(200, 0);
  noStroke();
  fill(180);
  rect(100, 100, value);
  pop();

  pop();
  value = value + vuelta;
  if (value > 1000) {
    vuelta--;
  }
  if (value < 0) {
    vuelta = vuelta2;
  }
  pop();
  push();
  if (keyIsPressed) {
    if (key == "f" || key == "F") {
      stroke(220);
      fill(220);
      quad(0, 0, 512, 0, 512, 512, 0, 512);
    }
  }
  pop();
  push();
  //Marco
  fill(100);
  stroke(100);
  quad(0, 0, 62, 0, 62, 512, 0, 512);
  quad(0, 0, 512, 0, 512, 62, 0, 62);
  quad(0, 450, 512, 450, 512, 512, 0, 512);
  quad(450, 0, 512, 0, 512, 512, 450, 512);
  fill(50);
  quad(196, 457, 300, 457, 300, 500, 196, 500);
  stroke(200);
  strokeWeight(3);

  line(250, 466, 250, 493);
  stroke(240);
  strokeWeight(1);
  line(250, 466, 255, 461);
  line(250, 466, 244, 460);
  fill(240);
  bezier(250, 473, 232, 455, 238, 487, 250, 480);
  bezier(250, 478, 228, 487, 237, 500, 250, 489);

  bezier(250, 473, 270, 455, 260, 487, 250, 480);
  bezier(250, 478, 268, 487, 267, 500, 250, 489);
  //Lineas marco
  strokeWeight(5);
  stroke(80);
  line(0, 0, 62, 62);
  line(512, 0, 450, 62);
  line(0, 512, 62, 450);
  line(512, 512, 450, 450);

  pop();

  push();

  //sosten
  strokeWeight(5);
  fill(120);
  stroke(120);
  ellipse(250, 430, 150, 20, 1500);

  line(251, 424, 251, 261);

  fill(0);
  stroke(0);

  //cabeza
  bezier(256, 140, 235, 134, 215, 177, 256, 205);
  bezier(256, 140, 270, 134, 302, 175, 256, 205);

  //Cuello
  strokeWeight(13);
  line(256, 203, 256, 213);

  //torso
  strokeWeight(1);
  bezier(249, 210, 224, 205, 210, 272, 253, 279);

  bezier(249, 210, 295, 200, 295, 279, 253, 279);

  bezier(253, 276, 219, 256, 224, 295, 253, 288);
  bezier(253, 276, 290, 256, 285, 295, 253, 288);

  quad(230, 284, 207, 322, 300, 322, 275, 284);

  //piernas
  circle(237, 327, 20);
  circle(268, 327, 20);
  quad(226, 328, 244, 336, 234, 378, 220, 378);

  circle(228, 375, 20);
  quad(220, 380, 235, 381, 241, 429, 228, 429);

  quad(260, 335, 276, 332, 285, 373, 269, 375);
  circle(277, 374, 20);
  quad(270, 380, 284, 381, 271, 427, 260, 429);

  //pies
  bezier(246, 422, 189, 427, 193, 440, 244, 433);
  bezier(254, 423, 315, 430, 294, 450, 252, 435);

  //brazos

  circle(223, 224, 18);
  quad(215, 226, 190, 174, 204, 171, 224, 212);
  circle(196, 172, 18);
  quad(189, 165, 205, 114, 216, 119, 200, 165);
  bezier(214, 108, 198, 93, 217, 77, 232, 91);
  circle(210, 111, 15);

  circle(283, 221, 18);
  quad(282, 208, 301, 158, 315, 156, 293, 223);
  circle(308, 156, 18);
  quad(300, 153, 270, 107, 284, 98, 310, 146);
  circle(275, 101, 18);
  bezier(267, 97, 284, 83, 264, 70, 247, 83);

  push();
  if (mouseIsPressed) {
    strokeWeight(3);
    stroke(230);
    for (var a = 112; a <= 395; a += 30) {
      var m = mouseX / 60;
      var despl = random(m);
      push();
      strokeWeight(10);
      stroke(random(255));
      circle(268, 225, 5);
      pop();
      fill(0);

      line(217 + despl, 431 + despl, 234 + despl, 429 + despl);
      line(234 + despl, 425 + despl, 226 + despl, 380 + despl);
      line(226 + despl, 373 + despl, 240 + despl, 310 + despl);
      line(282 + despl, 436 + despl, 259 + despl, 432 + despl);
      line(266 + despl, 427 + despl, 278 + despl, 376 + despl);
      line(278 + despl, 371 + despl, 262 + despl, 310 + despl);

      bezier(
        250 + despl,
        289 + despl,
        225 + despl,
        287 + despl,
        225 + despl,
        309 + despl,
        250 + despl,
        312 + despl
      );
      bezier(
        258 + despl,
        289 + despl,
        285 + despl,
        288 + despl,
        281 + despl,
        313 + despl,
        258 + despl,
        312 + despl
      );
      line(254 + despl, 313 + despl, 256 + despl, 204 + despl);
      line(244 + despl, 217 + despl, 267 + despl, 217 + despl);
      line(242 + despl, 224 + despl, 270 + despl, 224 + despl);
      line(238 + despl, 232 + despl, 274 + despl, 232 + despl);
      line(242 + despl, 240 + despl, 270 + despl, 240 + despl);
      line(247 + despl, 249 + despl, 265 + despl, 249 + despl);
      line(222 + despl, 225 + despl, 195 + despl, 172 + despl);
      line(194 + despl, 165 + despl, 210 + despl, 106 + despl);
      line(214 + despl, 101 + despl, 225 + despl, 91 + despl);
      line(283 + despl, 220 + despl, 307 + despl, 154 + despl);
      line(305 + despl, 149 + despl, 271 + despl, 96 + despl);
      line(266 + despl, 89 + despl, 254 + despl, 82 + despl);
      circle(256 + despl, 173 + despl, 40);
    }
  }
  pop();
}

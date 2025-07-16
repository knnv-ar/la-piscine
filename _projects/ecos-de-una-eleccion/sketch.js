function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(255);

  // Primer grupo
  if (frameCount > 0) {
    rect(340, 0, 100, 100);
  }
  if (frameCount > 30) {
    rect(350, 10, 80, 80);
  }
  if (frameCount > 60) {
    rect(360, 20, 60, 60);
  }
  if (frameCount > 90) {
    rect(370, 30, 40, 40);
  }
  if (frameCount > 120) {
    rect(380, 40, 20, 20);
  }

  //cuadrado pequeños
  if (frameCount > 0) {
    rect (170,350,80,80);
    }
  if (frameCount > 30){ 
    rect(180, 360, 60, 60);
  }
  if (frameCount > 60) {
    rect(190, 370, 40, 40);
  }
  if (frameCount > 90) {
    rect(200, 380, 20, 20);
  }
  if (frameCount > 120) {
    rect(208, 388, 5, 5);
  }

  // Segundo grupo
  if (frameCount > 150) {
    rect(40, 51, 100, 100);
  }
  if (frameCount > 180) {
    rect(50, 61, 80, 80);
  }
  if (frameCount > 210) {
    rect(60, 71, 60, 60);
  }
  if (frameCount > 240) {
    rect(70, 81, 40, 40);
  }
  if (frameCount > 270) {
    rect(80, 91, 20, 20);
  }

  //cuadrados pequeños 2
  
  if (frameCount > 150){
    rect (410,260,80,80);
  }

  if (frameCount > 180) {
    rect(420, 270, 60, 60);
  }
  if (frameCount > 210) {
    rect(430, 280, 40, 40);
  }
  if (frameCount > 240) {
    rect(440, 290, 20, 20);
  }
  if (frameCount > 270) {
    rect(448, 298, 5, 5);
  }

  // Tercer grupo
  if (frameCount > 300) {
    rect(390, 150, 100, 100);
  }
  if (frameCount > 330) {
    rect(400, 160, 80, 80);
  }
  if (frameCount > 360) {
    rect(410, 170, 60, 60);
  }
  if (frameCount > 390) {
    rect(420, 180, 40, 40);
  }
  if (frameCount > 420) {
    rect(430, 190, 20, 20);
  }

  //cuadrados pequeños 3
  if (frameCount >300){
    rect (25,190,80,80);
  }
  if (frameCount > 330) {
    rect(35, 200, 60, 60);
  }
  if (frameCount > 360) {
    rect(45, 210, 40, 40);
  }
  if (frameCount > 390) {
    rect(55, 220, 20, 20);
  }
  if (frameCount > 420) {
    rect(63, 228, 5, 5);
  }

  // Cuarto grupo
  if (frameCount > 450) {
    rect(153, 190, 100, 100);
  }
  if (frameCount > 480) {
    rect(163, 200, 80, 80);
  }
  if (frameCount > 510) {
    rect(173, 210, 60, 60);
  }
  if (frameCount > 540) {
    rect(183, 220, 40, 40);
  }
  if (frameCount > 570) {
    rect(193, 230, 20, 20);
  }

  //cuadrado pequeños 4
  
  if(frameCount >450){
    rect(420,430,80,80);
  }
  if (frameCount > 480) {
    rect(430, 440, 60, 60);
  }
  if (frameCount > 510) {
    rect(440, 450, 40, 40);
  }
  if (frameCount > 540) {
    rect(450, 460, 20, 20);
  }
  if (frameCount > 570) {
    rect(458, 468, 5, 5);
  }

  // Quinto grupo
  if (frameCount > 600) {
    rect(300, 320, 100, 100);
  }
  if (frameCount > 630) {
    rect(310, 330, 80, 80);
  }
  if (frameCount > 660) {
    rect(320, 340, 60, 60);
  }
  if (frameCount > 690) {
    rect(330, 350, 40, 40);
  }
  if (frameCount > 720) {
    rect(340, 360, 20, 20);
  }

  //cuadrados pequeños 5
  if (frameCount >600){
    rect (200,40,80,80);
  }
  if (frameCount > 630) {
    rect(210, 50, 60, 60);
  }
  if (frameCount > 660) {
    rect(220, 60, 40, 40);
  }
  if (frameCount > 690) {
    rect(230, 70, 20, 20);
  }
  if (frameCount > 720) {
    rect(238, 78, 5, 5);
  }

  // Sexto grupo
  if (frameCount > 750) {
    rect(51, 350, 100, 100);
  }
  if (frameCount > 780) {
    rect(61, 360, 80, 80);
  }
  if (frameCount > 810) {
    rect(71, 370, 60, 60);
  }
  if (frameCount > 840) {
    rect(81, 380, 40, 40);
  }
  if (frameCount > 870) {
    rect(91, 390, 20, 20);
  }

  //cuadros pequeñoz 6
  
  if (frameCount >750){
    rect (270,190,80,80);
  }
  if (frameCount > 780) {
    rect(280, 200, 60, 60);
  }
  if (frameCount > 810) {
    rect(290, 210, 40, 40);
  }
  if (frameCount > 840) {
    rect(300, 220, 20, 20);
  }
  if (frameCount > 870) {
    rect(308, 228, 5, 5);
  }
}

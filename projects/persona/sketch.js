// TP N°1 - Victoria Carrer - TM
// Título de la obra: "Persona"

// Mantener presionado click del mouse para mostrar aquello que cubre la persona

let contornoF;
let anchoF;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  frameRate(45);
  contornoF = random(width / 2, 512);
  anchoF = random(width / 2, 20);

  // Luz del fondo
  push();
  ellipseMode(CENTER);
  strokeWeight(anchoF);
  stroke(10, 10, 10, 20);
  fill(60, 60, 60, 10);
  ellipse(width / 2, height / 2, contornoF);
  pop();

  // Cara detrás de la máscara
  push();
  if (frameCount > 73) {
    if (mouseIsPressed) {
      stroke(87);
      line(width / 2 - 40, 95, width / 2 + 40, 95);
      line(width / 2 - 60, 100, width / 2 + 60, 100);
      line(width / 2 - 80, 105, width / 2 + 80, 105);
      line(width / 2 - 95, 110, width / 2 + 95, 110);
      line(width / 2 - 102, 115, width / 2 + 102, 115);
      line(width / 2 - 105, 120, width / 2 + 105, 120);
      line(width / 2 - 107, 125, width / 2 + 107, 125);
      line(width / 2 - 110, 130, width / 2 - 55, 130);
      line(width / 2 + 55, 130, width / 2 + 110, 130);
      line(width / 2 - 113, 135, width / 2 + 113, 135);
      line(width / 2 - 114, 140, width / 2 + 114, 140);
      line(width / 2 - 115, 145, width / 2 - 70, 145);
      line(width / 2 + 70, 145, width / 2 + 115, 145);
      line(width / 2 - 115, 150, width / 2 + 115, 150);
      line(width / 2 - 115, 155, width / 2 + 115, 155);
      line(width / 2 - 116, 160, width / 2 - 55, 160);
      line(width / 2 + 55, 160, width / 2 + 116, 160);
      line(width / 2 - 116, 165, width / 2 + 116, 165);
      line(width / 2 - 116, 170, width / 2 + 116, 170);
      line(width / 2 - 117, 175, width / 2 + 117, 175);
      line(width / 2 - 117, 180, width / 2 + 117, 180);
      line(width / 2 - 118, 185, width / 2 + 118, 185);
      line(width / 2 - 118, 190, width / 2 + 118, 190);
      line(width / 2 - 119, 195, width / 2 + 119, 195);
      line(width / 2 - 120, 200, width / 2 + 120, 200);
      line(width / 2 - 121, 205, width / 2 - 107, 205);
      line(width / 2 - 20, 205, width / 2 + 20, 205);
      line(width / 2 + 107, 205, width / 2 + 121, 205);
      line(width / 2 - 122, 210, width / 2 + 122, 210);
      line(width / 2 - 123, 215, width / 2 + 123, 215);
      line(width / 2 - 124, 220, width / 2 - 100, 220);
      line(width / 2 - 30, 220, width / 2 - 17, 220);
      line(width / 2 + 17, 220, width / 2 + 30, 220);
      line(width / 2 + 100, 220, width / 2 + 124, 220);
      line(width / 2 - 125, 225, width / 2 - 90, 225);
      line(width / 2 - 40, 225, width / 2 - 16, 225);
      line(width / 2 + 16, 225, width / 2 + 40, 225);
      line(width / 2 + 90, 225, width / 2 + 125, 225);
      line(width / 2 - 126, 230, width / 2 - 80, 230);
      line(width / 2 - 50, 230, width / 2 - 15, 230);
      line(width / 2 + 15, 230, width / 2 + 50, 230);
      line(width / 2 + 80, 230, width / 2 + 126, 230);
      line(width / 2 - 127, 235, width / 2 - 70, 235);
      line(width / 2 - 60, 235, width / 2 - 14, 235);
      line(width / 2 + 14, 235, width / 2 + 60, 235);
      line(width / 2 + 70, 235, width / 2 + 127, 235);
      line(width / 2 - 128, 240, width / 2 - 13, 240);
      line(width / 2 + 13, 240, width / 2 + 128, 240);
      line(width / 2 - 129, 245, width / 2 - 12, 245);
      line(width / 2 + 12, 245, width / 2 + 129, 245);
      line(width / 2 - 131, 250, width / 2 - 11, 250);
      line(width / 2 + 11, 250, width / 2 + 131, 250);
      line(width / 2 - 131, 255, width / 2 - 10, 255);
      line(width / 2 + 10, 255, width / 2 + 131, 255);
      line(width / 2 - 132, 260, width / 2 - 9, 260);
      line(width / 2 + 9, 260, width / 2 + 132, 260);
      line(width / 2 - 131, 265, width / 2 - 8, 265);
      line(width / 2 + 8, 265, width / 2 + 131, 265);
      line(width / 2 - 130, 270, width / 2 - 7, 270);
      line(width / 2 + 7, 270, width / 2 + 130, 270);
      line(width / 2 - 129, 275, width / 2 - 6, 275);
      line(width / 2 + 6, 275, width / 2 + 129, 275);
      line(width / 2 - 128, 280, width / 2 - 5, 280);
      line(width / 2 + 5, 280, width / 2 + 128, 280);
      line(width / 2 - 127, 285, width / 2 - 5, 285);
      line(width / 2 + 5, 285, width / 2 + 127, 285);
      line(width / 2 - 126, 290, width / 2 - 10, 290);
      line(width / 2 + 10, 290, width / 2 + 126, 290);
      line(width / 2 - 125, 295, width / 2 - 15, 295);
      line(width / 2 + 15, 295, width / 2 + 125, 295);
      line(width / 2 - 124, 300, width / 2 + 124, 300);
      line(width / 2 - 123, 305, width / 2 - 25, 305);
      line(width / 2 - 10, 305, width / 2 + 10, 305);
      line(width / 2 + 25, 305, width / 2 + 123, 305);
      line(width / 2 - 110, 310, width / 2 - 15, 310);
      line(width / 2 + 15, 310, width / 2 + 110, 310);
      line(width / 2 - 122, 315, width / 2 - 10, 315);
      line(width / 2 + 10, 315, width / 2 + 122, 315);
      line(width / 2 - 100, 320, width / 2 + 100, 320);
      line(width / 2 - 121, 325, width / 2 + 121, 325);
      line(width / 2 - 95, 330, width / 2 + 95, 330);
      line(width / 2 - 120, 335, width / 2 - 20, 335);
      line(width / 2 - 6, 335, width / 2 + 6, 335);
      line(width / 2 + 20, 335, width / 2 + 120, 335);
      line(width / 2 - 90, 340, width / 2 - 30, 340);
      line(width / 2 - 3, 340, width / 2 + 3, 340);
      line(width / 2 + 30, 340, width / 2 + 90, 340);
      line(width / 2 - 115, 345, width / 2 - 35, 345);
      line(width / 2 + 35, 345, width / 2 + 115, 345);
      line(width / 2 - 85, 350, width / 2 - 40, 350);
      line(width / 2 + 40, 350, width / 2 + 85, 350);
      line(width / 2 - 111, 355, width / 2 - 45, 355);
      line(width / 2 + 45, 355, width / 2 + 111, 355);
      line(width / 2 - 80, 360, width / 2 - 50, 360);
      line(width / 2 - 20, 360, width / 2 + 20, 360);
      line(width / 2 + 50, 360, width / 2 + 80, 360);
      line(width / 2 - 110, 365, width / 2 - 45, 365);
      line(width / 2 + 45, 365, width / 2 + 110, 365);
      line(width / 2 - 76, 370, width / 2 - 40, 370);
      line(width / 2 + 40, 370, width / 2 + 76, 370);
      line(width / 2 - 105, 375, width / 2 - 35, 375);
      line(width / 2 + 35, 375, width / 2 + 105, 375);
      line(width / 2 - 75, 380, width / 2 - 30, 380);
      line(width / 2 + 30, 380, width / 2 + 75, 380);
      line(width / 2 - 100, 385, width / 2 - 25, 385);
      line(width / 2 + 25, 385, width / 2 + 100, 385);
      line(width / 2 - 76, 390, width / 2 - 15, 390);
      line(width / 2 + 15, 390, width / 2 + 76, 390);
      line(width / 2 - 90, 395, width / 2 + 90, 395);
      line(width / 2 - 80, 400, width / 2 + 80, 400);
      line(width / 2 - 80, 405, width / 2 + 80, 405);
      line(width / 2 - 75, 410, width / 2 + 75, 410);
      line(width / 2 - 70, 415, width / 2 + 70, 415);
      line(width / 2 - 65, 420, width / 2 + 65, 420);
      line(width / 2 - 50, 425, width / 2 + 50, 425);
      line(width / 2 - 40, 430, width / 2 + 40, 430);
    }
  }
  pop();

  // Máscara
  push();
  stroke(255);
  if (frameCount > 0) {
    line(width / 2 - 30, 75, width / 2 + 30, 75); //1
  }
  if (frameCount > 1) {
    line(width / 2 - 45, 80, width / 2 + 45, 80);
  }
  if (frameCount > 2) {
    line(width / 2 - 60, 85, width / 2 + 60, 85);
  }
  if (frameCount > 3) {
    line(width / 2 - 80, 90, width / 2 + 80, 90);
  }
  if (frameCount > 4) {
    line(width / 2 - 90, 95, width / 2 - 40, 95);
    line(width / 2 + 40, 95, width / 2 + 90, 95);
  }
  if (frameCount > 5) {
    line(width / 2 - 97, 100, width / 2 - 60, 100);
    line(width / 2 + 60, 100, width / 2 + 97, 100);
  }
  if (frameCount > 6) {
    line(width / 2 - 102, 105, width / 2 - 80, 105);
    line(width / 2 + 80, 105, width / 2 + 102, 105);
  }
  if (frameCount > 7) {
    line(width / 2 - 108, 110, width / 2 - 95, 110);
    line(width / 2 + 95, 110, width / 2 + 108, 110);
  }
  if (frameCount > 8) {
    line(width / 2 - 110, 115, width / 2 - 102, 115);
    line(width / 2 + 102, 115, width / 2 + 110, 115);
  }
  if (frameCount > 9) {
    line(width / 2 - 112, 120, width / 2 - 105, 120);
    line(width / 2 + 105, 120, width / 2 + 112, 120);
  }
  if (frameCount > 10) {
    line(width / 2 - 114, 125, width / 2 - 107, 125);
    line(width / 2 + 107, 125, width / 2 + 114, 125);
  }
  if (frameCount > 11) {
    line(width / 2 - 115, 130, width / 2 - 110, 130);
    line(width / 2 + 110, 130, width / 2 + 115, 130);
    line(width / 2 - 55, 130, width / 2 + 55, 130);
  }
  if (frameCount > 12) {
    line(width / 2 - 116, 135, width / 2 - 113, 135);
    line(width / 2 + 113, 135, width / 2 + 116, 135);
  }
  if (frameCount > 13) {
    line(width / 2 - 117, 140, width / 2 - 114, 140);
    line(width / 2 + 114, 140, width / 2 + 117, 140);
  }
  if (frameCount > 14) {
    line(width / 2 - 118, 145, width / 2 - 115, 145);
    line(width / 2 + 115, 145, width / 2 + 118, 145);
    line(width / 2 - 70, 145, width / 2 + 70, 145);
  }
  if (frameCount > 15) {
    line(width / 2 - 119, 150, width / 2 - 115, 150);
    line(width / 2 + 115, 150, width / 2 + 119, 150);
  }
  if (frameCount > 16) {
    line(width / 2 - 120, 155, width / 2 - 115, 155);
    line(width / 2 + 115, 155, width / 2 + 120, 155);
  }
  if (frameCount > 17) {
    line(width / 2 - 120, 160, width / 2 - 116, 160);
    line(width / 2 - 55, 160, width / 2 + 55, 160);
    line(width / 2 + 116, 160, width / 2 + 120, 160);
  }
  if (frameCount > 18) {
    line(width / 2 - 121, 165, width / 2 - 116, 165);
    line(width / 2 + 116, 165, width / 2 + 121, 165);
  }
  if (frameCount > 19) {
    line(width / 2 - 122, 170, width / 2 - 116, 170);
    line(width / 2 + 116, 170, width / 2 + 122, 170);
  }
  if (frameCount > 20) {
    line(width / 2 - 123, 175, width / 2 - 117, 175);
    line(width / 2 + 117, 175, width / 2 + 123, 175);
  }
  if (frameCount > 21) {
    line(width / 2 - 124, 180, width / 2 - 117, 180);
    line(width / 2 + 117, 180, width / 2 + 124, 180);
  }
  if (frameCount > 22) {
    line(width / 2 - 125, 185, width / 2 - 118, 185);
    line(width / 2 + 118, 185, width / 2 + 125, 185);
  }
  if (frameCount > 23) {
    line(width / 2 - 126, 190, width / 2 - 118, 190);
    line(width / 2 + 118, 190, width / 2 + 126, 190);
  }
  if (frameCount > 24) {
    line(width / 2 - 127, 195, width / 2 - 119, 195);
    line(width / 2 + 119, 195, width / 2 + 127, 195);
  }
  if (frameCount > 25) {
    line(width / 2 - 128, 200, width / 2 - 120, 200);
    line(width / 2 + 120, 200, width / 2 + 128, 200);
  }
  if (frameCount > 26) {
    line(width / 2 - 129, 205, width / 2 - 121, 205);
    line(width / 2 - 20, 205, width / 2 - 107, 205);
    line(width / 2 + 20, 205, width / 2 + 107, 205);
    line(width / 2 + 121, 205, width / 2 + 129, 205);
  }
  if (frameCount > 27) {
    line(width / 2 - 130, 210, width / 2 - 122, 210);
    line(width / 2 + 122, 210, width / 2 + 130, 210);
  }
  if (frameCount > 28) {
    line(width / 2 - 131, 215, width / 2 - 123, 215);
    line(width / 2 + 123, 215, width / 2 + 131, 215);
  }
  if (frameCount > 29) {
    line(width / 2 - 132, 220, width / 2 - 124, 220);
    line(width / 2 - 17, 220, width / 2 + 17, 220);
    line(width / 2 - 30, 220, width / 2 - 100, 220);
    line(width / 2 + 30, 220, width / 2 + 100, 220);
    line(width / 2 + 124, 220, width / 2 + 132, 220);
  }
  if (frameCount > 30) {
    line(width / 2 - 133, 225, width / 2 - 125, 225);
    line(width / 2 - 16, 225, width / 2 + 16, 225);
    line(width / 2 - 90, 225, width / 2 - 40, 225);
    line(width / 2 + 40, 225, width / 2 + 90, 225);
    line(width / 2 + 125, 225, width / 2 + 133, 225);
  }
  if (frameCount > 31) {
    line(width / 2 - 134, 230, width / 2 - 126, 230);
    line(width / 2 - 15, 230, width / 2 + 15, 230);
    line(width / 2 - 80, 230, width / 2 - 50, 230);
    line(width / 2 + 50, 230, width / 2 + 80, 230);
    line(width / 2 + 126, 230, width / 2 + 134, 230);
  }
  if (frameCount > 32) {
    line(width / 2 - 135, 235, width / 2 - 127, 235);
    line(width / 2 - 14, 235, width / 2 + 14, 235);
    line(width / 2 + 60, 235, width / 2 + 70, 235);
    line(width / 2 - 60, 235, width / 2 - 70, 235);
    line(width / 2 + 127, 235, width / 2 + 135, 235);
  }
  if (frameCount > 33) {
    line(width / 2 - 136, 240, width / 2 - 128, 240);
    line(width / 2 - 13, 240, width / 2 + 13, 240);
    line(width / 2 + 128, 240, width / 2 + 136, 240);
  }
  if (frameCount > 34) {
    line(width / 2 - 144, 245, width / 2 - 148, 245);
    line(width / 2 - 137, 245, width / 2 - 129, 245);
    line(width / 2 - 12, 245, width / 2 + 12, 245);
    line(width / 2 + 129, 245, width / 2 + 137, 245);
    line(width / 2 - 144, 245, width / 2 - 148, 245);
    line(width / 2 + 144, 245, width / 2 + 148, 245);
  }
  if (frameCount > 35) {
    line(width / 2 - 144, 250, width / 2 - 146, 250);
    line(width / 2 - 137, 250, width / 2 - 131, 250);
    line(width / 2 - 11, 250, width / 2 + 11, 250);
    line(width / 2 + 131, 250, width / 2 + 137, 250);
    line(width / 2 + 144, 250, width / 2 + 146, 250);
  }
  if (frameCount > 36) {
    line(width / 2 - 143, 255, width / 2 - 142, 255);
    line(width / 2 - 135, 255, width / 2 - 131, 255);
    line(width / 2 - 10, 255, width / 2 + 10, 255);
    line(width / 2 + 131, 255, width / 2 + 135, 255);
    line(width / 2 + 143, 255, width / 2 + 142, 255);
  }
  if (frameCount > 37) {
    line(width / 2 - 142, 260, width / 2 - 141, 260);
    line(width / 2 - 134, 260, width / 2 - 132, 260);
    line(width / 2 - 9, 260, width / 2 + 9, 260);
    line(width / 2 + 132, 260, width / 2 + 134, 260);
    line(width / 2 + 142, 260, width / 2 + 141, 260);
  }
  if (frameCount > 38) {
    line(width / 2 - 141, 265, width / 2 - 140, 265);
    line(width / 2 - 133, 265, width / 2 - 131, 265);
    line(width / 2 - 8, 265, width / 2 + 8, 265);
    line(width / 2 + 131, 265, width / 2 + 133, 265);
    line(width / 2 + 141, 265, width / 2 + 140, 265);
  }
  if (frameCount > 39) {
    line(width / 2 - 140, 270, width / 2 - 139, 270);
    line(width / 2 - 132, 270, width / 2 - 130, 270);
    line(width / 2 - 7, 270, width / 2 + 7, 270);
    line(width / 2 + 130, 270, width / 2 + 132, 270);
    line(width / 2 + 140, 270, width / 2 + 139, 270);
  }
  if (frameCount > 40) {
    line(width / 2 - 139, 275, width / 2 - 138, 275);
    line(width / 2 - 131, 275, width / 2 - 129, 275);
    line(width / 2 - 6, 275, width / 2 + 6, 275);
    line(width / 2 + 129, 275, width / 2 + 131, 275);
    line(width / 2 + 139, 275, width / 2 + 138, 275);
  }
  if (frameCount > 41) {
    line(width / 2 - 140, 280, width / 2 - 137, 280);
    line(width / 2 - 130, 280, width / 2 - 128, 280);
    line(width / 2 - 5, 280, width / 2 + 5, 280);
    line(width / 2 + 128, 280, width / 2 + 130, 280);
    line(width / 2 + 140, 280, width / 2 + 137, 280);
  }
  if (frameCount > 42) {
    line(width / 2 - 141, 285, width / 2 - 136, 285);
    line(width / 2 - 129, 285, width / 2 - 127, 285);
    line(width / 2 - 5, 285, width / 2 + 5, 285);
    line(width / 2 + 127, 285, width / 2 + 129, 285);
    line(width / 2 + 141, 285, width / 2 + 136, 285);
  }
  if (frameCount > 43) {
    line(width / 2 - 141, 290, width / 2 - 135, 290);
    line(width / 2 - 128, 290, width / 2 - 126, 290);
    line(width / 2 - 10, 290, width / 2 + 10, 290);
    line(width / 2 + 126, 290, width / 2 + 128, 290);
    line(width / 2 + 141, 290, width / 2 + 135, 290);
  }
  if (frameCount > 44) {
    line(width / 2 - 142, 295, width / 2 - 133, 295);
    line(width / 2 - 126, 295, width / 2 - 125, 295);
    line(width / 2 - 15, 295, width / 2 + 15, 295);
    line(width / 2 + 125, 295, width / 2 + 126, 295);
    line(width / 2 + 142, 295, width / 2 + 133, 295);
  }
  if (frameCount > 45) {
    line(width / 2 - 142, 300, width / 2 - 133, 300);
    line(width / 2 - 126, 300, width / 2 - 124, 300);
    line(width / 2 + 124, 300, width / 2 + 126, 300);
    line(width / 2 + 142, 300, width / 2 + 133, 300);
  }
  if (frameCount > 46) {
    line(width / 2 - 142, 305, width / 2 - 133, 305);
    line(width / 2 - 126, 305, width / 2 - 123, 305);
    line(width / 2 - 25, 305, width / 2 - 10, 305);
    line(width / 2 + 10, 305, width / 2 + 25, 305);
    line(width / 2 + 123, 305, width / 2 + 126, 305);
    line(width / 2 + 142, 305, width / 2 + 133, 305);
  }
  if (frameCount > 47) {
    line(width / 2 - 140, 310, width / 2 - 133, 310);
    line(width / 2 - 126, 310, width / 2 - 110, 310);
    line(width / 2 - 15, 310, width / 2 + 15, 310);
    line(width / 2 + 110, 310, width / 2 + 126, 310);
    line(width / 2 + 140, 310, width / 2 + 133, 310);
  }
  if (frameCount > 48) {
    line(width / 2 - 138, 315, width / 2 - 133, 315);
    line(width / 2 - 126, 315, width / 2 - 122, 315);
    line(width / 2 - 10, 315, width / 2 + 10, 315);
    line(width / 2 + 122, 315, width / 2 + 126, 315);
    line(width / 2 + 138, 315, width / 2 + 133, 315);
  }
  if (frameCount > 49) {
    line(width / 2 - 136, 320, width / 2 - 133, 320);
    line(width / 2 - 126, 320, width / 2 - 100, 320);
    line(width / 2 + 100, 320, width / 2 + 126, 320);
    line(width / 2 + 136, 320, width / 2 + 133, 320);
  }
  if (frameCount > 50) {
    line(width / 2 - 126, 325, width / 2 - 121, 325);
    line(width / 2 + 121, 325, width / 2 + 126, 325);
  }
  if (frameCount > 51) {
    line(width / 2 - 125, 330, width / 2 - 95, 330);
    line(width / 2 + 95, 330, width / 2 + 125, 330);
  }
  if (frameCount > 52) {
    line(width / 2 - 123, 335, width / 2 - 120, 335);
    line(width / 2 - 20, 335, width / 2 - 6, 335);
    line(width / 2 + 6, 335, width / 2 + 20, 335);
    line(width / 2 + 120, 335, width / 2 + 123, 335);
  }
  if (frameCount > 53) {
    line(width / 2 - 122, 340, width / 2 - 90, 340);
    line(width / 2 - 30, 340, width / 2 - 3, 340);
    line(width / 2 + 3, 340, width / 2 + 30, 340);
    line(width / 2 + 90, 340, width / 2 + 122, 340);
  }
  if (frameCount > 54) {
    line(width / 2 - 121, 345, width / 2 - 115, 345);
    line(width / 2 - 35, 345, width / 2 + 35, 345);
    line(width / 2 + 115, 345, width / 2 + 121, 345);
  }
  if (frameCount > 55) {
    line(width / 2 - 120, 350, width / 2 - 85, 350);
    line(width / 2 - 40, 350, width / 2 + 40, 350);
    line(width / 2 + 85, 350, width / 2 + 120, 350);
  }
  if (frameCount > 56) {
    line(width / 2 - 119, 355, width / 2 - 111, 355);
    line(width / 2 - 45, 355, width / 2 + 45, 355);
    line(width / 2 + 111, 355, width / 2 + 119, 355);
  }
  if (frameCount > 57) {
    line(width / 2 - 116, 360, width / 2 - 80, 360);
    line(width / 2 - 50, 360, width / 2 - 20, 360);
    line(width / 2 + 20, 360, width / 2 + 50, 360);
    line(width / 2 + 80, 360, width / 2 + 116, 360);
  }
  if (frameCount > 58) {
    line(width / 2 - 114, 365, width / 2 - 110, 365);
    line(width / 2 - 45, 365, width / 2 + 45, 365);
    line(width / 2 + 110, 365, width / 2 + 114, 365);
  }
  if (frameCount > 59) {
    line(width / 2 - 112, 370, width / 2 - 76, 370);
    line(width / 2 - 40, 370, width / 2 + 40, 370);
    line(width / 2 + 76, 370, width / 2 + 112, 370);
  }
  if (frameCount > 60) {
    line(width / 2 - 110, 375, width / 2 - 105, 375);
    line(width / 2 - 35, 375, width / 2 + 35, 375);
    line(width / 2 + 105, 375, width / 2 + 110, 375);
  }
  if (frameCount > 61) {
    line(width / 2 - 108, 380, width / 2 - 75, 380);
    line(width / 2 - 30, 380, width / 2 + 30, 380);
    line(width / 2 + 75, 380, width / 2 + 108, 380);
  }
  if (frameCount > 62) {
    line(width / 2 - 102, 385, width / 2 - 100, 385);
    line(width / 2 - 25, 385, width / 2 + 25, 385);
    line(width / 2 + 100, 385, width / 2 + 102, 385);
  }
  if (frameCount > 63) {
    line(width / 2 - 97, 390, width / 2 - 76, 390);
    line(width / 2 - 15, 390, width / 2 + 15, 390);
    line(width / 2 + 76, 390, width / 2 + 97, 390);
  }
  if (frameCount > 64) {
    line(width / 2 - 92, 395, width / 2 - 90, 395);
    line(width / 2 + 90, 395, width / 2 + 92, 395);
  }
  if (frameCount > 65) {
    line(width / 2 - 87, 400, width / 2 - 80, 400);
    line(width / 2 + 80, 400, width / 2 + 87, 400);
  }
  if (frameCount > 66) {
    line(width / 2 - 82, 405, width / 2 - 80, 405);
    line(width / 2 + 80, 405, width / 2 + 82, 405);
  }
  if (frameCount > 67) {
    line(width / 2 - 76, 410, width / 2 - 75, 410);
    line(width / 2 + 75, 410, width / 2 + 76, 410);
  }
  if (frameCount > 68) {
    line(width / 2 - 72, 415, width / 2 - 70, 415);
    line(width / 2 + 70, 415, width / 2 + 72, 415);
  }
  if (frameCount > 69) {
    line(width / 2 - 67, 420, width / 2 - 65, 420);
    line(width / 2 + 65, 420, width / 2 + 67, 420);
  }
  if (frameCount > 70) {
    line(width / 2 - 60, 425, width / 2 - 50, 425);
    line(width / 2 + 50, 425, width / 2 + 60, 425);
  }
  if (frameCount > 71) {
    line(width / 2 - 55, 430, width / 2 - 40, 430);
    line(width / 2 + 40, 430, width / 2 + 55, 430);
  }
  if (frameCount > 72) {
    line(width / 2 - 40, 435, width / 2 + 40, 435);
  }
  if (frameCount > 73) {
    line(width / 2 - 30, 440, width / 2 + 30, 440);
  }
  pop();

  document.oncontextmenu = function () {
    return false;
  };
}

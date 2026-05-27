function setup() {
  let canvas = createCanvas(520, 520);
  canvas.parent('div-sketch');
  background(210);
}

function draw() {
  if (mouseIsPressed == false) {
      background(210);
    push(); //cuello
    fill(20);
    noStroke();
    bezier(300, 380, 0, 480, 0, 160, 00, 1000);
    bezier(257, 380, 500, 480, 600, 100, 500, 1600);
    rect(194, 300, 133, 230);

    pop();

    push(); //Cabecita
    noStroke();
    ellipse(255, 154, 269);
    bezier(127, 277, 260, 483, 310, 333, 380, 277);
    line(122, 182, 126, 276);
    line(383, 193, 380, 275);
    rect(126, 160, 253, 130, 30);
    pop();

    push(); //ojitos cerrados
    strokeWeight(3);
    ellipse(180, 215, 70, 40);
    ellipse(310, 215, 70, 40);
    noStroke();
    rect(140, 170, 223, 50, 10);
    pop();

    push(); //naricita
    line(241, 236, 238, 266);
    ellipse(238, 273, 15);
    stroke(240);
    ellipse(242, 273, 20, 15);
    fill(1);
    ellipse(246, 280, 7, 3);
    pop();

    push(); // boca owo
    line(225, 327, 260, 327);
    ellipse(243, 338, 20, 9);
    ellipse(243, 318, 20, 9);
    stroke(260);
    ellipse(243, 336, 20, 9);
    ellipse(243, 320, 20, 9);
    pop();

    push(); //cejas
    line(219, 173, 158, 173);
    line(219, 176, 158, 176);
    line(219, 179, 158, 179);
    line(158, 173, 140, 189);
    line(158, 176, 140, 189);
    line(158, 179, 140, 189);
    line(273, 173, 334, 173);
    line(273, 176, 334, 176);
    line(273, 179, 334, 179);
    line(334, 173, 349, 189);
    line(334, 176, 349, 189);
    line(334, 179, 349, 189);
    pop();

    push(); //cuadrados
    noStroke();
    fill(1);
    square(145, 100, 50);
    fill(50);
    square(200, 110, 40);
    fill(100);
    square(245, 120, 30);
    fill(150);
    square(280, 130, 20);
    fill(200);
    square(305, 140, 10);
    pop();
  }
  if (mouseIsPressed == true) {
        push();
    fill(100);
    stroke(100);
    fill (260)
    stroke(0)
    ellipse (constrain(mouseX, 0, 520),constrain(mouseY, 0, 520),55,50,20);
    fill(0)
    ellipse (constrain(mouseX, 0, 520),constrain(mouseY, 0, 520), 20, 20, 20);
    fill (260)
    stroke(0)
    ellipse (constrain(mouseX, 0, 520),constrain(mouseY, 0, 512),55,50,20);
    fill(0)
    ellipse (constrain(mouseX, 0, 520),constrain(mouseY, 0, 512), 20, 20, 20);
    pop();
    push(); //cuello
    fill(20);
    noStroke();
    bezier(300, 380, 0, 480, 0, 160, 00, 1000);
    bezier(257, 380, 500, 480, 600, 100, 500, 1600);
    rect(194, 300, 133, 230);

    pop();

    push(); //Cabecita
    noStroke();
    ellipse(255, 154, 269);
    bezier(127, 277, 260, 483, 310, 333, 380, 277);
    line(122, 182, 126, 276);
    line(383, 193, 380, 275);
    rect(126, 160, 253, 130, 30);
    pop();

    push(); //ojitos abiertos
    strokeWeight(3);
    ellipse(180, 215, 80, 30);
    ellipse(310, 215, 80, 30);
    fill(150);
    stroke(100);
    ellipse(180, 213, 34, 28);
    ellipse(309, 213, 34, 28);
    fill(0);
    ellipse(180, 213, 20);
    ellipse(309, 213, 20);

    pop();

    push(); //naricita
    line(241, 236, 238, 266);
    ellipse(238, 273, 15);
    stroke(240);
    ellipse(242, 273, 20, 15);
    fill(1);
    ellipse(246, 280, 7, 3);
    pop();

    push(); // boca owo
    line(225, 327, 260, 327);
    ellipse(243, 338, 20, 9);
    ellipse(243, 318, 20, 9);
    stroke(260);
    ellipse(243, 336, 20, 9);
    ellipse(243, 320, 20, 9);
    pop();

    push(); //cejas
    line(219, 173, 158, 173);
    line(219, 176, 158, 176);
    line(219, 179, 158, 179);
    line(158, 173, 140, 189);
    line(158, 176, 140, 189);
    line(158, 179, 140, 189);
    line(273, 173, 334, 173);
    line(273, 176, 334, 176);
    line(273, 179, 334, 179);
    line(334, 173, 349, 189);
    line(334, 176, 349, 189);
    line(334, 179, 349, 189);
    pop();
    
    push();
    strokeWeight(3);
    ellipse(245, 125, 80, 30);
     fill(150);
    stroke(100);
    ellipse(245, 125, 34, 28);
    fill(0);
    ellipse(245, 125, 20);
    
    pop ();
  }
}

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch'); 
}

function draw() {
  for (let i = 0; i < 40; i++) {
    // angulo base de cada rayo
    let anguloBase = (i * TWO_PI) / 40; // 2 pi para q se dibuje en ambos lados de la pantalla
    // movimiento
    let angulo = anguloBase + sin(frameCount * 0.0005 + i) * 0.03; 

    push();

    translate(width / 2, 120);
    rotate(angulo);

    noStroke();
    fill(195, 6);

    beginShape();

    // parte superior (cerca del "resplandor")
    vertex(-8, 0);
    vertex(8, 0);

    // parte inferior
    vertex(55, height);
    vertex(-55, height);

    endShape(CLOSE);

    pop();

    push(); //capa de proporciones del buda

    strokeWeight(0.5);
    stroke(165);
    noFill();

    rect(102, 178, 320, 295);

    line(128, 178, 128, 473);
    line(164, 178, 164, 473);
    line(191, 178, 191, 473);
    line(258, 178, 258, 473);
    line(334, 178, 334, 473);
    line(361, 178, 361, 473);
    line(389, 178, 389, 473);

    line(102, 201, 422, 201);
    line(102, 261, 422, 261);
    line(102, 327, 422, 327);
    line(102, 345, 422, 345);
    line(102, 381, 422, 381);
    line(102, 417, 422, 417);
    line(102, 435, 422, 435);
    line(102, 473, 422, 473);

    rect(208, 42, 98, 136);

    line(258, 16, 258, 230);

    line(208, 54, 306, 54);
    line(208, 78, 306, 78);
    line(208, 103, 306, 103);
    line(208, 127, 306, 127);
    line(208, 151, 306, 151);
    line(208, 178, 306, 178);

    line(258, 42, 208, 103);
    line(258, 42, 306, 103);

    line(258, 42, 258, 16);

    line(208, 103, 208, 178);
    line(306, 103, 306, 178);

    ellipse(257, 45, 34, 40);

    line(258, 103, 220, 178);
    line(258, 103, 296, 178);

    line(208, 151, 258, 178);
    line(306, 151, 258, 178);

    line(220, 151, 296, 151);

    line(208, 127, 306, 127);

    line(220, 127, 296, 178);
    line(296, 127, 220, 178);

    line(208, 151, 306, 151);

    line(258, 127, 239, 151);
    line(258, 127, 277, 151);
    line(239, 151, 258, 178);
    line(277, 151, 258, 178);

    line(164, 178, 258, 473);

    line(361, 178, 258, 473);

    line(191, 178, 334, 473);
    line(334, 178, 191, 473);

    line(258, 178, 164, 327);
    line(258, 178, 361, 327);

    line(258, 327, 191, 435);
    line(258, 327, 334, 435);

    line(164, 381, 258, 473);
    line(361, 381, 258, 473);

    line(102, 417, 258, 327);
    line(422, 417, 258, 327);

    line(102, 435, 258, 381);
    line(422, 435, 258, 381);

    line(128, 473, 258, 381);
    line(389, 473, 258, 381);

    line(164, 473, 258, 417);
    line(361, 473, 258, 417);

    line(102, 435, 258, 473);
    line(422, 435, 258, 473);

    line(258, 178, 202, 327);
    line(258, 178, 315, 327);

    line(258, 327, 175, 435);
    line(258, 327, 339, 435);

    line(258, 178, 258, 473);

    ellipse(258, 178, 5, 5);
    ellipse(258, 327, 5, 5);
    ellipse(258, 381, 5, 5);
    ellipse(258, 435, 5, 5);
    pop();
  }

  push(); //cursor

  translate(mouseX, mouseY);

  noFill();
  stroke(0);
  strokeWeight(0.5);

  beginShape();
  vertex(0, 0);
  vertex(0, 18);
  vertex(5, 14);
  vertex(9, 22);
  vertex(13, 20);
  vertex(8, 12);
  vertex(17, 12);
  endShape(CLOSE);

  pop();
}

// AM1 TM TP Nº1 - Lucía Marcinkevicius - Título de la obra: "Koi". Inspirado en las obras de Vera Molnár y Ben F. Laposky.

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  a = random(0, 500);
  b = random(0, 500);
  frameRate(24);
}

function draw() {
  background(0);

  for (var i = 0; i < 1000; i += 25) {
    for (var j = 0; j < 1000; j += 25) {
      escalagrises = random(0, 255);
      var frames = frameCount * 0.0005;
      rotate(frames);
      stroke(0);
      fill(escalagrises);
      ellipse(i, a, j, b);
    }
  }

  if (mouseIsPressed) {
    setup();
  }
}

// The test is over. You win. Go back to the discovery annex for your cake.

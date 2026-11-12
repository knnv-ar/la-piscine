let img;
let paletteIndex = 0;

let palettes = [
  { bg: [245, 240, 225], wave: [20, 50, 90], accent: [210, 50, 45] },
  { bg: [20, 20, 22], wave: [220, 220, 220], accent: [180, 180, 180] },
  { bg: [10, 15, 30], wave: [0, 230, 240], accent: [255, 40, 130] }
];

async function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('div-sketch');

  img = await loadImage('foto.jpg');
  if (img) img.resize(500, 500);
}

function draw() {
  let p = palettes[paletteIndex];
  background(p.bg[0], p.bg[1], p.bg[2]);

  if (img && img.width) {
    push();
    tint(p.wave[0], p.wave[1], p.wave[2], 120);
    image(img, 0, 0, width, height);
    pop();
  }

  let slices = int(map(mouseY, 0, height, 8, 35));
  let sliceHeight = int(height / slices);

  for (let i = 0; i < slices; i++) {
    let y = int(i * sliceHeight);
    let shiftX = int((noise(i, frameCount * 0.03) - 0.5) * map(mouseX, 0, width, 0, 120));

    if (img && img.width) {
      copy(img, 0, y, width, sliceHeight, shiftX, y, width, sliceHeight);
    }

    if (i % 2 === 0) {
      push();
      stroke(p.accent[0], p.accent[1], p.accent[2], 160);
      strokeWeight(2);
      noFill();
      let waveY = y + sin(i + frameCount * 0.05) * 10;
      line(0, waveY, width + shiftX, waveY);
      pop();
    }
  }

  drawSakuraPetals(p.accent);

  if (mouseIsPressed) {
    filter(INVERT);
  }
}

function drawSakuraPetals(accentColor) {
  noStroke();
  fill(accentColor[0], accentColor[1], accentColor[2], 180);

  let windX = map(mouseX, 0, width, -2, 2);

  for (let i = 0; i < 15; i++) {
    let px = (i * 35 + frameCount * (1 + i * 0.1) + windX * 20) % width;
    let py = (i * 40 + sin(frameCount * 0.02 + i) * 20) % height;
    
    push();
    translate(px, py);
    rotate(sin(frameCount * 0.03 + i));
    ellipse(0, 0, 12, 6);
    pop();
  }
}

function keyPressed() {
  if (key === '1') paletteIndex = 0;
  if (key === '2') paletteIndex = 1;
  if (key === '3') paletteIndex = 2;
}
// Marina Müller
// Obra de Vera Molnár (adaptación)

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(155);

  fill(0);
  quad(
    55 + sin(frameCount / 20) * 10,
    80,
    50,
    220,
    83,
    220,
    90 + sin(frameCount / 20) * 10,
    80
  );
  quad(
    100 + sin(frameCount / 20) * 10,
    90,
    90,
    230,
    120,
    230,
    125 + sin(frameCount / 20) * 10,
    90
  );
  quad(
    155 + sin(frameCount / 20) * 10,
    90,
    140,
    235,
    160,
    235,
    180 + sin(frameCount / 20) * 10,
    90
  );
  quad(
    195 + sin(frameCount / 20) * 10,
    85,
    180,
    220,
    210,
    220,
    220 + sin(frameCount / 20) * 10,
    85
  );
  quad(
    235 + sin(frameCount / 20) * 10,
    90,
    225,
    230,
    240,
    230,
    265 + sin(frameCount / 20) * 10,
    90
  );
  quad(
    265 + sin(frameCount / 20) * 10,
    110,
    267,
    243,
    294,
    243,
    285 + sin(frameCount / 20) * 10,
    110
  );
  quad(
    300 + sin(frameCount / 20) * 10,
    100,
    300,
    240,
    335,
    240,
    322 + sin(frameCount / 20) * 10,
    100
  );
  quad(
    350 + sin(frameCount / 20) * 10,
    90,
    348,
    230,
    370,
    230,
    376 + sin(frameCount / 20) * 10,
    90
  );
  quad(
    384 + sin(frameCount / 20) * 10,
    108,
    380,
    245,
    405,
    245,
    412 + sin(frameCount / 20) * 10,
    108
  );
  quad(
    421 + sin(frameCount / 20) * 10,
    100,
    410,
    237,
    440,
    240,
    450 + sin(frameCount / 20) * 10,
    100
  );

  quad(
    62,
    258,
    65 + sin(frameCount / 20) * 10,
    390,
    85 + sin(frameCount / 20) * 10,
    390,
    85,
    258
  );
  quad(
    102,
    260,
    105 + sin(frameCount / 20) * 10,
    395,
    125 + sin(frameCount / 20) * 10,
    395,
    130,
    260
  );
  quad(
    133,
    258,
    145 + sin(frameCount / 20) * 10,
    390,
    165 + sin(frameCount / 20) * 10,
    390,
    160,
    258
  );
  quad(
    182,
    255,
    180 + sin(frameCount / 20) * 10,
    390,
    210 + sin(frameCount / 20) * 10,
    390,
    210,
    255
  );
  quad(
    225,
    250,
    217 + sin(frameCount / 20) * 10,
    385,
    250 + sin(frameCount / 20) * 10,
    385,
    245,
    250
  );
  quad(
    270,
    250,
    260 + sin(frameCount / 20) * 10,
    380,
    290 + sin(frameCount / 20) * 10,
    380,
    290,
    250
  );
  quad(
    310,
    245,
    302 + sin(frameCount / 20) * 10,
    385,
    330 + sin(frameCount / 20) * 10,
    385,
    330,
    245
  );
  quad(
    345,
    260,
    345 + sin(frameCount / 20) * 10,
    390,
    365 + sin(frameCount / 20) * 10,
    390,
    375,
    260
  );
  quad(
    380,
    265,
    380 + sin(frameCount / 20) * 10,
    400,
    400 + sin(frameCount / 20) * 10,
    400,
    410,
    265
  );
  quad(
    425,
    265,
    410 + sin(frameCount / 20) * 10,
    409,
    435 + sin(frameCount / 20) * 10,
    409,
    450,
    265
  );
}

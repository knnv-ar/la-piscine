let imgs = [];
let sounds = [];
let current = 0;

let imgJesus, imgLayer;

async function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('div-sketch');

  imgJesus = await loadImage("img/jesus.png");
  imgLayer = await loadImage("img/layer.png");

  imgs[0] = await loadImage("img/virgen.png");
  imgs[1] = await loadImage("img/jesuspint.png");
  imgs[2] = await loadImage("img/jesuspint2.png");

  sounds[0] = await loadSound("sonido/drone.ogg");
  sounds[1] = await loadSound("sonido/drone2.ogg");
  sounds[2] = await loadSound("sonido/drone3.ogg");
}

function draw() {
  background(255);

  image(imgJesus, 0, 0, 400, 400);
  image(imgLayer, 120, 120, 210, 210);
  image(imgLayer, 100, 100, 210, 210);

  image(imgs[current], 100, 100, 200, 200);
}

function mousePressed() {
  if (sounds[current].isPlaying()) {
    sounds[current].stop();
  }

  current = (current + 1) % sounds.length;

  sounds[current].loop(true);
  sounds[current].play();
}

////Sasha Gauna TP2 Artes Multimediales 1 Lacabanne TM
//fuentes de los videos:
//"A Computer-Generated Ballet" (1965) Corto dirigido por A. Michael Noll
//Publicidades argentinas 1982 compilado subido a youtube por el canal dulatina: https://www.youtube.com/watch?v=jgFmYWDzAuU
//"Coraje el perro cobarde"-John R. Dilworth Cartoon Network

let img1;
let videos = [];
let videoactual;
let indicevideo = 0;
let tiempovideo = 0;

function preload() {
  img1 = loadImage("imagenes/testparallaxv4.png");

  videos.push(createVideo("videos/computerballetanimations2.mp4"));
  videos.push(createVideo("videos/publicidades.mp4"));
  videos.push(createVideo("videos/lamascara.mp4"));
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('div-sketch');

  for (let video of videos) {
    video.hide(); // para que no se vea el boton de pausa o avanzado
  }

  videoactual = videos[indicevideo];
}

function draw() {
  background(0, 15, 24);

  // parallax para que se mueva la imagen
  let parallaxX = map(mouseX, 0, width, 0, -(img1.width - width));

  // esto es para que el video se mantenga en el medio de la tele 
  if (videoactual) {
    image(videoactual, parallaxX + 780, 72, 320, 320); 

    //esto es mi dibujito
    image(img1, parallaxX, 0);
  }
}

function mousePressed() {
  if (videoactual) {
    videoactual.stop();
    tiempovideo = videoactual.time();
  }

  // cambia el vidio
  indicevideo = (indicevideo + 1) % videos.length;
  videoactual = videos[indicevideo];

  // esto no sirve
  //videoactual.time(currentTime);
  videoactual.loop();
}

/*
Artes Multimediales I - T.N.
Películas Viejas en Oferta
2024
Juan Bautista Giménez
*/

let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let vid;
let vid2;
let vid3;
let vid4;
let vid5;
let milei;
let poema;
let telon = 0
let paneo = 0


function preload() {
  img = loadImage("imagenes/ojos1.jpg");
  img2 = loadImage("imagenes/tele.png");
  img3 = loadImage("imagenes/cuadros.jpeg");
  img4 = loadImage("imagenes/milei.jpg");
  img5 = loadImage("imagenes/nuncamas.jpg");
  img6 = loadImage("imagenes/militares.jpeg");
  img7 = loadImage("imagenes/ojos2.jpg");
  img8 = loadImage("imagenes/ruido.gif");
  img9 = loadImage("imagenes/ruido2.gif");
  img10 = loadImage("imagenes/ruido3.gif");
  img11 = loadImage("imagenes/ruido4.gif");
  img12 = loadImage("imagenes/ruido5.gif");

  vid = createVideo("videos/gas.mp4");
  vid.hide();
  vid2 = createVideo("videos/hijos.mp4");
  vid2.hide();
  vid3 = createVideo("videos/piedras.mp4");
  vid3.hide();
  vid4 = createVideo("videos/dictadura.mp4");
  vid4.hide();
  vid5 = createVideo("videos/fuego.mp4");
  vid5.hide();
  
  milei = loadSound("audios/vozmilei.mp3");
  poema = loadSound("audios/peliculas_viejas_en_oferta.mp3");
}

function setup() {
  let canvas = createCanvas(800, 450);
  canvas.parent('div-sketch');
  vid.loop();
  vid2.loop();
  vid3.loop();
  vid4.loop();
  vid5.loop();
  vid.volume(0);
  vid2.volume(0);
  vid3.volume(0);
  vid4.volume(0);
  vid5.volume(0);
  milei.loop();
  poema.loop();
}

function draw() {
  background(255);
  
  //audio
  
  paneo = map(mouseX, 0, width, 0, 1);
  paneo = constrain(paneo, 0, 1);
  
  milei.setVolume(1 - paneo);
  poema.setVolume(paneo);
  
  //imagenes del fondo
  telon = map(mouseX, 0, width, 0, 1);
  telon = constrain(telon, 0, 1);
  tint(255, (1 - telon) * 255);
  image(img, 0, 0, width, height);
  tint(255, telon * 255);
  image(img7, 0, 0, width, height);

  // teles para los videos
  image(img2, 0, 0);

  //imagenes y videos

  image(img8, 71, 90);
  image(img4, 173, 64);
  image(img9, 215, 123);
  image(img10, 248, 292);
  image(img6, 329, 84);
  image(img11, 420, 88);
  image(img3, 516, 90);
  image(img12, 504, 173);
  image(img5, 683, 183);
  image(vid, 338, 155);
  image(vid2, 15, 255);
  image(vid3, 178, 189);
  image(vid4, 401, 277);
  image(vid5, 592, 314);
}


let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let vid;
let vid2;
let vid3;
let vid4;
let vid5;

function preload() {

  img = loadImage("imagenes/mumii.jpg");
  //img2 = loadImage ("imagenes/fondo.jpg");
  img3 = loadImage('imagenes/tini.jpg');
  img4 = loadImage("imagenes/floo.jpg");
  img5 = loadImage ("imagenes/azuul.jpg");
  img6 = loadImage('imagenes/ventii.jpg');
  img7 = loadImage('imagenes/gritoo.jpg');
  img8 = loadImage('imagenes/finn.jpg');
  



}
function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  
  //baudromeda
  vid = createVideo("videos/bioo.mp4");
  vid.size(350, 250);
  vid.loop();
  //vid.play();
  
  //yo
  vid2 = createVideo("videos/okidokii.mp4");
  vid2.size(305, 220);
  vid2.loop();
  //vid2.play();
 
  //medromeda
  vid3 = createVideo("videos/mebb.mp4");
  vid3.size(350, 350);
  vid3.loop();
  //vid3.play();
  
   //fondo
  vid4 = createVideo("videos/lidromeda.mp4");
  vid4.size(350, 250);
  vid4.loop();
  
  
  //extension de mi
  vid5 = createVideo("videos/pabletee.mp4");
  vid5.size(250, 250);
  vid5.loop();
  
 
}

function draw() {
 
        {
      
  background(220);
  let targetX = map(mouseX, 0, width, -width / 2, width / 2);
  let targetY = map(mouseY, 0, height, -height / 2, height / 2);
  let targetZ = map(mouseY, 0, height, -600, 600); // Mapea la posición vertical del mouse a un      rango de valores para la coordenada Z
  
 noStroke();
  
 
  //Fondo
  push();
 translate (targetX, targetY, targetZ);
  texture(img6);
   rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.001);
  sphere(600);
  pop();

  //Nidromeda
  push();
  texture(vid2);
  rotateY(frameCount * 0.01);
  sphere(130);
  pop();
          
  //Medromeda
  push();
  texture(vid3);
  rotateY(frameCount * 0.03);
  translate (5, 7, 270)
  sphere(90);
  pop();

  //Mundo 1
  push();
  rotateY((-frameCount * 0.5) / 9);
  texture(img8);
  translate(0, 0, 160);
  sphere(20);
  pop();

  //Mundo 2
  push();
  rotateY((-frameCount * 0.9) / 9);
  texture(img6);
  translate(0, 0, 240);
  sphere(20);
  pop();
          
  //Mundo 3
  push();
  rotateX((-frameCount * 0.5) / 9);
  rotateY(frameCount * 0.04);
  texture(img3);
  translate(0, 160, 0);
  sphere(20);
  pop();

  //Mundo 4
  push();
  rotateX((-frameCount * 0.5) / 9);
  texture(img5);
  translate(0, -160, 0);
  sphere(20);
  pop();

  //Mundo 5
  push();
  rotateY((-frameCount * 0.5) / 9);
  texture(img7);
  translate(0, 0, -160);
  sphere(20);
  pop();

  //Buadromeda
  push();
  rotateZ(70);
  rotateY((-frameCount * 0.3) / 9);
  texture(vid);
  translate(4, 6, -370);
  sphere(90);
  pop();

  //Mundo 6 (con cambio en Z)
  rotateZ(70);
  push();
  rotateY((-frameCount * 0.4) / 8);
  texture(img);
  translate(0, 0, -160);
  sphere(20);
  pop();
          
  //Mundo 7 (con cambio en Z)
  rotateZ(70);
  push();
  rotateY((-frameCount * 0.4) / 8);
  texture(img4);
  translate(0, 0, -172);
  sphere(40);
  pop();

  //Lidromeda
  rotateZ(30);
  push();
  rotateY((-frameCount * 0.3) / 8);
  texture(vid4);
  translate(2, 4, 290);
  sphere(85);
  pop(); 
  
  //Mundo 8
  rotateZ(30);
  push();
  rotateY((-frameCount * 0.6) / 8);
  texture(img);
  translate(0, 0, -160);
  sphere(20);
  pop(); 
  
  //Mundo 9
  rotateZ(30);
  push();
  rotateY((-frameCount * 0.4) / 8);
  texture(img);
  translate(0, 0, -160);
  sphere(25);
  pop(); 
  
  //Mundo 10
  rotateZ(70);
  push();
  rotateY((-frameCount * 0.4) / 8);
  texture(img7);
  translate(0, 90, -180);
  sphere(40);
  pop(); 
       
  //Mundo 11 extension de mi
  rotateZ(70);
  push();
  rotateY((-frameCount * 0.5 / 8));
  texture(vid5);
  translate(0, 75, -190);
  sphere(65);
  pop();
        }
}
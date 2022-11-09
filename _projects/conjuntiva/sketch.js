//"CONJUNTIVA"
//si queres acomapañar la obra con musica toca la pantalla
var luces = false;
var posZ = 2000;
var cancion;

function mouseClicked() {
  cancion.loop()
}
function preload() {
  cancion = loadSound("death.mp3");
  cancion.setVolume(1);

}
function setup() {
 
 let canvas = createCanvas(500,500, WEBGL);
 canvas.parent('div-sketch');
  

  
    
}

function draw() {
 
     
  background(0);

  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;

  //contorno ojo
  push();
  strokeWeight(0.08);
  spotLight(205, 128, 108, locX, locY, posZ, 0, 0, -1);
  translate(0, 0, 170);
  rotateZ(frameCount * 12);
  fill(205, 128, 108);
  torus(100, 10);
  pop();
  if (mouseX >= 400) {
    
    push();
    strokeWeight(0.8);
    stroke(134, 159, 227);
    spotLight(134, 159, 227, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 170);
    rotateZ(frameCount * 12);
    rotateZ(frameCount * 0.5);

    fill(245, 132, 2);
    torus(130, 40);
    spotLight(205, 5, 255, locX, locY, posZ, 0, 0, -1);
    stroke(205, 5, 255);
    rotateZ(frameCount * 12);
    fill(205, 5, 255);
    torus(100, 40);

    pop();
  }
  if (mouseY >= 400) {
    push();
    strokeWeight(0.8);
    stroke(205, 128, 108);
    spotLight(205, 128, 108, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 170);
    rotateZ(frameCount * 12);
    fill(205, 128, 108);
    torus(130, 40);
    strokeWeight(1);
    spotLight(31, 38, 34, locX, locY, posZ, 0, 0, -1);
    stroke(31, 38, 34);
    rotateZ(frameCount * 12);

    fill(31, 38, 34);
    torus(100, 40);
    pop();
  }

  //pupila
  push();
  strokeWeight(0);

  spotLight(0, 0, 0, locX, locY, posZ, 0, 0, -1);
  translate(0, 0, 230);
  rotateZ(frameCount * 12);
  rotateY(frameCount * 12);
  rotateX(frameCount * 1);
  fill(0.0, 0);
  sphere(25);
  pop();
  if (mouseX >= 400) {
    push();
    strokeWeight(0.2);
    stroke(94, 97, 93);
    spotLight(0, 0, 0, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 230);
    rotateZ(frameCount * 12);
    rotateY(frameCount * 12);
    rotateX(frameCount * 1);
    fill(0.0, 0);
    sphere(45);
    pop();
  }
  if (mouseY > 400) {
    push();
    strokeWeight(0.5);
    stroke(94, 97, 93);
    spotLight(0, 0, 0, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 230);
    rotateZ(frameCount * 12);
    rotateY(frameCount * 12);
    rotateX(frameCount * 1);
    fill(0.0, 0);
    sphere(47);
    pop();
  }
  //parte verde
  push();
  strokeWeight(0.5);
  stroke(0, 0, 0);
  spotLight(7, 230, 59, locX, locY, posZ, 0, 0, -1);
  translate(0, 0, 200);
  rotateZ(frameCount * 12);
  fill(7, 230, 59);
  sphere(50);
  pop();
  
     if (mouseX >= 400) {
    push();
    strokeWeight(0.5);
    stroke(7,245, 221);
    spotLight(7, 245, 221, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 200);
    rotateZ(frameCount * 12);

    fill(7, 245, 221);
    sphere(70);
    pop();
  }
  
   if (mouseX >= 450) {
    push();
    strokeWeight(0.5);
    stroke(209, 4, 35);
    spotLight(209, 4, 35, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 200);
    rotateZ(frameCount * 12);

    fill(209, 4, 35);
    sphere(70);
    pop();
  }
  
  
  if (mouseY > 390) {
    push();
    strokeWeight(0.5);
    stroke(72, 52, 201);
    spotLight(72, 52, 201, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 200);
    rotateZ(frameCount * 12);
    rotateX(frameCount * 12);
    rotateY(frameCount * 12);
    fill(72, 52, 201);
    sphere(70);
    pop();
  }
  
   if (mouseY >= 440) {
    push();
    strokeWeight(0.5);
    stroke(209, 4, 35);
    spotLight(209, 4, 35, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 200);
    rotateZ(frameCount * 12);

    fill(209, 4, 35);
    sphere(70);
    pop();
  }

  //parteblanca
  push();
  strokeWeight(0.79);
  stroke(194, 37, 37);
  spotLight(250, 250, 250, locX, locY, posZ, 0, 0, -1);
  translate(0, 0, 0);
  rotateZ(frameCount * 12);
  rotateY(frameCount * 12);
  fill(250, 250, 250);
  sphere(145);
  pop();

  if (mouseX >= 390) {
    push();
    strokeWeight(0.79);
    stroke(194, 37, 37);
    spotLight(250, 250, 250, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 0);
    rotateZ(frameCount * 1);
    rotateY(frameCount * 12);
    fill(250, 250, 250);
    sphere(235);
    pop();
  }
  if (mouseY >= 390) {
    push();
    strokeWeight(0.79);
    stroke(194, 37, 37);
    spotLight(250, 250, 250, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 0);
    rotateZ(frameCount * 12);
    rotateY(frameCount * 12);
    fill(250, 250, 250);
    sphere(235);
    pop();
    
   
   
  //contorno ojo
  push();
  strokeWeight(0.08);
  spotLight(205, 128, 108, locX, locY, posZ, 0, 0, -1);
  translate(0, 0, 170);
  rotateZ(frameCount * 12);
  fill(205, 128, 108);
  torus(100, 10);
  pop();
  if (mouseX >= 400) {
    push();
    strokeWeight(0.8);
    stroke(134, 159, 227);
    spotLight(134, 159, 227, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 170);
    rotateZ(frameCount * 12);
    rotateZ(frameCount * 0.5);

    fill(245, 132, 2);
    torus(130, 40);
    spotLight(205, 5, 255, locX, locY, posZ, 0, 0, -1);
    stroke(205, 5, 255);
    rotateZ(frameCount * 12);
    fill(205, 5, 255);
    torus(100, 40);

    pop();
  }
  if (mouseY >= 400) {
    push();
    strokeWeight(0.8);
    stroke(205, 128, 108);
    spotLight(205, 128, 108, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 170);
    rotateZ(frameCount * 12);
    fill(205, 128, 108);
    torus(130, 40);
    strokeWeight(1);
    spotLight(31, 38, 34, locX, locY, posZ, 0, 0, -1);
    stroke(31, 38, 34);
    rotateZ(frameCount * 12);

    fill(31, 38, 34);
    torus(100, 40);
    pop();
  }

  //pupila
  push();
  strokeWeight(0);

  spotLight(0, 0, 0, locX, locY, posZ, 0, 0, -1);
  translate(0, 0, 230);
  rotateZ(frameCount * 12);
  rotateY(frameCount * 12);
  rotateX(frameCount * 1);
  fill(0.0, 0);
  sphere(25);
  pop();
  if (mouseX >= 400) {
    push();
    strokeWeight(0.2);
    stroke(94, 97, 93);
    spotLight(0, 0, 0, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 230);
    rotateZ(frameCount * 12);
    rotateY(frameCount * 12);
    rotateX(frameCount * 1);
    fill(0.0, 0);
    sphere(45);
    pop();
  }
  if (mouseY > 400) {
    push();
    strokeWeight(0.5);
    stroke(94, 97, 93);
    spotLight(0, 0, 0, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 230);
    rotateZ(frameCount * 12);
    rotateY(frameCount * 12);
    rotateX(frameCount * 1);
    fill(0.0, 0);
    sphere(47);
    pop();
  }
  //parte verde
  push();
  strokeWeight(0.5);
  stroke(0, 0, 0);
  spotLight(7, 230, 59, locX, locY, posZ, 0, 0, -1);
  translate(0, 0, 200);
  rotateZ(frameCount * 12);
  fill(7, 230, 59);
  sphere(50);
  pop();
  
     if (mouseX >= 400) {
    push();
    strokeWeight(0.5);
    stroke(7,245, 221);
    spotLight(7, 245, 221, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 200);
    rotateZ(frameCount * 12);

    fill(7, 245, 221);
    sphere(70);
    pop();
  }
  
   if (mouseX >= 450) {
    push();
    strokeWeight(0.5);
    stroke(209, 4, 35);
    spotLight(209, 4, 35, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 200);
    rotateZ(frameCount * 12);

    fill(209, 4, 35);
    sphere(70);
    pop();
  }
  
  
  if (mouseY > 390) {
    push();
    strokeWeight(0.5);
    stroke(72, 52, 201);
    spotLight(72, 52, 201, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 200);
    rotateZ(frameCount * 12);
    rotateX(frameCount * 12);
    rotateY(frameCount * 12);
    fill(72, 52, 201);
    sphere(70);
    pop();
  }
  
   if (mouseY >= 440) {
    push();
    strokeWeight(0.5);
    stroke(209, 4, 35);
    spotLight(209, 4, 35, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 200);
    rotateZ(frameCount * 12);

    fill(209, 4, 35);
    sphere(70);
    pop();
  }

  //parteblanca
  push();
  strokeWeight(0.79);
  stroke(194, 37, 37);
  spotLight(250, 250, 250, locX, locY, posZ, 0, 0, -1);
  translate(0, 0, 0);
  rotateZ(frameCount * 12);
  rotateY(frameCount * 12);
  fill(250, 250, 250);
  sphere(145);
  pop();

  if (mouseX >= 390) {
    push();
    strokeWeight(0.79);
    stroke(194, 37, 37);
    spotLight(250, 250, 250, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 0);
    rotateZ(frameCount * 1);
    rotateY(frameCount * 12);
    fill(250, 250, 250);
    sphere(235);
    pop();
  }
  if (mouseY >= 390) {
    push();
    strokeWeight(0.79);
    stroke(194, 37, 37);
    spotLight(250, 250, 250, locX, locY, posZ, 0, 0, -1);
    translate(0, 0, 0);
    rotateZ(frameCount * 12);
    rotateY(frameCount * 12);
    fill(250, 250, 250);
    sphere(235);
    pop();
      
       }
  }


   
  
} 

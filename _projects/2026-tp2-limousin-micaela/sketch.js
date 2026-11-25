//EL click activa la música
let bajo;
let bajo2;
let carcasa;
let parlante;
let parlante2;
let tv;
let video;
let luces;
let ojo;
let byn;
let pulso;
let bastard;
let cop;
let estrellas;

async function setup() {
  let canvas =  createCanvas(800,800,WEBGL);
 canvas.parent('div-sketch');
 bastard = await loadSound('sonido/polizei.mp3')
  bajo = await loadImage('img/scoopp.jpg')
  bajo2 = await loadImage('img/scoopp2.jpg')
  carcasa = await loadImage('img/caja.jpg')
  parlante = await loadImage('img/rectangulo.jpg')
  parlante2 = await loadImage('img/recta.jpg')
  tv = await loadImage('img/tevi.jpg')
  video  = createVideo('video/spiral.mp4')
  luces = createVideo('video/intermitente.mp4')
  ojo = await loadImage('img/eye.gif')
  byn = await loadImage('img/trip.gif')
  cop = await loadImage('img/cerdo.jpg')
  estrellas = await loadImage('img/giphy.gif')

  video.hide()
  video.pause()
  video.loop()
  luces.hide()
  luces.pause()
  luces.loop()
 
}


function pua(){
  push();
  texture(video)
  cone(50,180)
  pop()
}

function scoop(x,y,z){
  push();
  translate(x,y,z);
  texture(carcasa)
  box(120,80,-150);
  pop();
}

function tele(x,y,z){
 push()
  translate(x,y,z)
  texture(tv);
  box(130,100,-120)
  pop()
}

function pantalla(x,y,z){
  push()
  translate(x,y,z)
  texture(video)
  ellipsoid(60,40,20)
  pop()
}

function pantalla2(x,y,z){
  push()
  translate(x,y,z)
  texture(ojo)
  ellipsoid(60,40,20)
  pop()
}
function draw() {
 background(150)
  orbitControl(1,0,1)
  directionalLight(255, 0, 183,30,-1,-100)
  directionalLight(0, 234, 255,-30,-1,-100)
  directionalLight(187, 255, 0,30,-1,100)
  directionalLight(162, 0, 255,-30,-1,100)
  specularMaterial(10)
  pointLight(255, 0, 144,0,180,120)
  push()
  spotLight(255, 0, 144,0,180,120,200,200,180)
  pop()
  noStroke()
 
  pulso = 1 + sin(frameCount * 0.15)* 0.08;
    
  push()
  translate(0,290,0)
  texture(byn)
  rotateX(HALF_PI)
  plane(1500,1500)
  pop()
  
  push()
  scale(-1, 1)
  texture(estrellas)
  cylinder(1500,600)
  pop()
  
  scoop(-190,250,0)
  scoop(-70,250,0)
  scoop(-190,170,0)
  scoop(-70,170,0)
  scoop(50,250,0)
  scoop(170,250,0)
  scoop(50,170,0)
  scoop(170,170,0)

  push();
  translate(-140,30,0);
  texture(parlante2)
  box(130,200,-150);
  pop();

  push()
  translate(-140,30,77)
  texture(parlante)
  plane(130,200)
  pop()
  
  push();
  translate(-140,60,80);
  scale( pulso)
  tint(255, 0, 230)
  texture(video)
  torus(50,7)
  torus(40,5)
  torus(30,5)
  pop();

  push()
  translate(120,30,0)
  texture(parlante2)
  box(130,200,-150)
  pop()

  push()
  translate(120,30,77)
  texture(parlante)
  plane(130,200)
  pop()

  push()
  translate(120,60,80)
  scale(pulso)
  tint(255, 0, 230)
  texture(video)
  torus(50,7)
  torus(40,5)
  torus(30,5)
  pop()

  push()
  translate(-140,60,60)
  texture(luces)
  sphere(30)
  pop()

  push()
  translate(120,60,60)
  texture(luces)
  sphere(30)
  pop()

  tele(-10,80,0)
  tele (-10,-20,0)
  tele(50,-120,0)
  tele(-80,-120,0)
  tele(-15,-220,0)

  pantalla(-10,80,60)
  pantalla2(-10,-20,60)//2
  pantalla2(50,-120,60)//2
  pantalla(-15,-220,60)
  pantalla2(-80,-120,60)//2

  let totalDientes = 8;     
  let radioCirculo = 500;
  
  for (let i = 0; i < totalDientes; i++) {
    let angulo = (i / totalDientes) * TWO_PI;
    
    
    let x = cos(angulo) * radioCirculo;
    let z = sin(angulo) * radioCirculo;
    let y = 250; 

    push();
    translate(x, y, z); 
    rotateY(0); 
    rotateX(3.2)
    rotateZ(0); 
    pua(); 
    pop();
  }

  
  push()
  fill(0)
  translate(-130,210,76)
  texture(bajo)
  plane(240,160)
  pop()

  push()
  fill(50)
  translate(110,210,76)
  texture(bajo2)
  plane(240,160)
  pop()

  push()
  translate(-200,200,100)
  fill(150)
  rotateZ(6)
  cylinder(5,300)
  pop()

  push()
  translate(-250,50,110)
  rotateZ(6)
  texture(cop)
  plane(115,115)
  pop()
}
 function mousePressed(){

  if (!bastard.isPlaying()) {
    bastard.loop(true); 
    bastard.play();
  }
}
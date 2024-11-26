let bomba;
let cuadro;
let bebe;
let efecto;
let miedo;
let rapido;
let audio1;
let audio2;

let x = 0;
let op = 255;


function preload(){
  bebe = loadImage ("bebe.png")
  
  audio1 = loadSound("audio1.mp3")
  audio2 = loadSound("audio2.mp3")
}

function setup() {
  //createCanvas(640, 480);
  let canvas = createCanvas(640, 480);
  canvas.parent('div-sketch');
  
  audio1.loop();
  

  bomba = createVideo("bomba.mp4");
  bomba.hide();
  bomba.loop();
  
  cuadro = createVideo("cuadro.mp4");
  cuadro.hide();
  cuadro.loop();
  
  efecto = createVideo("efecto.mp4");
  efecto.hide();
  efecto.loop();
  
  miedo = createVideo("miedo.mp4");
  miedo.hide();
  miedo.loop();
  
  rapido = createVideo("rapido.mp4");
  rapido.hide();
  rapido.loop();
}

function draw() {  
  
  //Video bomba

  tint(255, op);
  image(bomba, x, 0, 640, 480);

  
  //Imagen bebe y lineas
  
  if (frameCount == 800 ){
    audio2.loop();
  }
  
 if(frameCount > 800){
  op = 20
  x = 10
  audio1.stop();
    
  image(bebe, 0, 0, 640, 480);
  
  //Lineas arriba a la izquierda
  line(random(25, 250), random(20, 230), random(25, 230), random(20, 230))
  line(random(25, 250), random(20, 230), random(25, 230), random(20, 230))
  
  //Lineas abajo a la derecha
  line (random(330, 600), random(265, 460), random(330, 600), random(265, 460))
  line (random(330, 600), random(265, 460), random(330, 600), random(265, 460))
 
  //Lineas arriba a la derecha
  line(random(405, 600), random(20, 200), random(405, 600), random(20, 200))
  line(random(405, 600), random(20, 200), random(405, 600), random(20, 200))
  
  //Lineas abajo a la izquierda
  line(random(10, 250), random(260, 460), random(10, 250), random(260, 460));
  line(random(10, 250), random(260, 460), random(10, 250), random(260, 460));
  
    
 }  
  
  //Videos arriba a la izquierda
  
  if(frameCount > 1200){
  
  tint(255, 30)
  image(rapido, 25, 100, 150, 112);
  
  image(rapido, 110, 25, 150, 112);
  
  tint(255, 40)
  image(miedo, 10, 15, 150, 112);
  
  tint(200, 40, 170, 40)
  image(miedo, 100, 90, 150, 112);
  
  tint(255, 0, 0, 80)
  image(miedo, 30, 40, 150, 112);
    
    //Videos abajo a la derecha
  
  tint(255, 30)
  image(cuadro, 330, 265, 150, 112);
  
  image(cuadro, 425, 330, 150, 112);
  
  image(efecto, 370, 295, 150, 112);
  
  tint(170, 40, 140, 30)
  image(efecto, 510, 375, 125, 93);
  
  tint(255, 0, 0, 80)
  image(efecto, 410, 275, 125, 93);
    
  } 
  
  if(frameCount > 1500){
  
  //Videos arriba a la derecha
  
  tint(255, 0, 0, 80)
  image(rapido, 440, 50, 150, 112);
  
  tint(255, 40);
 
  image(rapido, 480, 120, 150, 112);
  
  
  tint(255, 30)
  
  image(efecto, 460, 20, 150, 112);
  
  image(efecto, 430, 140, 150, 112);
  
  tint(170, 0, 80, 30)
  image(rapido, 405, 35, 150, 112);
  
  //Videos abajo a la izquierda
  
  tint(255, 30)
  image(cuadro, 130, 360, 150, 112);
  
  tint(255, 0, 0, 70)
  image(miedo, 10, 265, 150, 112); 
    
  tint(255, 40);
  image(cuadro, 30, 370, 150, 112);
  image(miedo, 120, 280, 150, 112);
  
  tint(180, 0, 100, 40);
  image(cuadro, 65, 320, 150, 112);
  
  
}
 

  
  
}
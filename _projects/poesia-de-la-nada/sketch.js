var img;
var img1;
var x=730;
var velocidad=300;
var y=1;
var transparente=100-5;
var text= "";
var mic;
var grabador, sonido;
var escala = 1.0;
var mensaje = "";
var r = 50;

function preload (){
  cancion = loadSound ("multimedia-cabeza.mp3");
  img = loadImage ("fondo-a.webp");
  img1= loadImage("cabeza-1.webp");
  img2= loadImage("cabeza-2.webp");
   img3= loadImage("cabeza-3.webp");
   img4= loadImage("cabeza-4.webp");
   img5= loadImage("cabeza-5.webp");
   img6= loadImage("cabeza-6.webp");
   img7= loadImage("volumne-1.webp");
   img8= loadImage("volumen-2.webp");
  img9= loadImage("piedra.webp");
  img10= loadImage("pago.webp");

  
}

function setup() {
  let canvas = createCanvas(450, 600);
  canvas.parent('div-sketch');
  

  
    // entrada de audio
  mic = new p5.AudioIn();
  mic.start();

  // crear un nuevo grabador de sonido
  grabador = new p5.SoundRecorder();
  // conectar el micrófono al grabador
  grabador.setInput(mic);
  // crear un archivo de audio vacío que será usado para la reproducción de la grabación
  sonido = new p5.SoundFile();
  
  cancion.loop();
}


//function resetSketch (){
  
 //Flok = new Flok ();
  
 //for (var i=0; i < 100; i++){
    
//var b = new Boid (width/2, height/2); flok.addboid (b);
 //}
  
//}


function draw() {
  
  
   if (mouseIsPressed) { 
   
    if(mouseButton === LEFT);{
      
      setup;
    }
   }
  
  
  
  scale (0.4);
  
  
  //FONDO
  
  push();
  //background (100,100,100, 10);
  tint (y/200, y/500);
  //image (img, 0, 0);
  pop ();
  
  //SOMBRAS
  
  push ();
  
  tint (0, r)
  translate (205,-y/200);
  image (img8, 5, 740);
  
  pop ();
  

  
  push ();
  translate (225, -y/450)
  image (img7, 0, 680);
  
  pop();
  
  
  
   //TEXTOS
  push ()
  fill (255,255,255)
  textSize (30);
  textAlign (CENTER);
  textFont ("Courier New");
  text ("Médula del tiempo", 520, 680);
  
  pop ()
  
    push ()
  fill (255,255,255)
  textSize (30);
  textAlign (CENTER);
  textFont ("Courier New");
  text ("eterna y socavada,", 520, 630);
  
  pop ()
  
   push ()
  fill (255,255,255)
  textSize (30);
  textAlign (CENTER);
  textFont ("Courier New");
  text ("guarda entre la nada", 520, 580);
  
  pop ()
  
   push ()
  fill (255,255,255)
  textSize (30);
  textAlign (CENTER);
  textFont ("Courier New");
  text ("respuesta y universo,", 520, 530);
  
  pop ()
  
  
   push ()
  fill (255,255,255)
  textSize (30);
  textAlign (CENTER);
  textFont ("Courier New");
  text ("aún así, el arqueólogo", 520, 480);
  
    
  pop ()
  
    push ()
  fill (255,255,255)
  textSize (30);
  textAlign (CENTER);
  textFont ("Courier New");
  text ("quizo detenerse.", 520, 430);
  
    
  pop ()
    
  
  
   push ();
  
  scale (1);
  tint (random(100,200),100, random (200,250));

 translate (1, -y/2000);
  image (img9, 390, 480);
  
  pop ();

  
  

  
    //ramdon Lineas 1// 
  push ()
  
  translate (0, -y/1100)
  
  stroke (random (0, 255),250, random (0, 250));
  line(360, random (600,900), 660,random (600,900));
  pop()
  
   
  
  // ROSTRO AMARILLO
  
  push ();
  tint (random (100, 250))
translate (301, 659)
  image (img6, 0, 0);
 pop ();
  
    //ramdon Lineas 2// 
  push ()
  
  translate (0, -y/1200)
  
  stroke (200, 100, 200);
  line(290, random (600,900), 700,random (600,900));
  pop()
  
  push ()
  tint (random (200, 250), 100,10)
  y +=velocidad;
  translate (0, -y/1050)
  //image (img5,230, 350);
  
  pop()
  
 
  
  //ROSTRO MORADO
  
  push ();
  tint (255, random (200, 250));
  translate (220, 700)
  image (img4, 0, 0);
  pop();
  
  push ();
tint (255, random (200,250));
  y +=velocidad;
  translate (180, -y/450)
  r = map(mic.getLevel(random ()), 0, 0.08, 0, 255);
  image (img3, 0, 350);
  pop ();
  
  //ramdon Lineas 3// 
  push ()
  translate (0, -y/200)
  stroke (250);
  line(220, random (600,1000), 750,random (600,1000));
  pop()
  
  //ROSTRO GRIS
  
  push ();
  
  translate (200, 840);
  image (img2, 0, 0);
  pop ();
  
  push ();

  y +=velocidad;
  
  tint (255, random (200,250));
  translate (124, -y/200);
   r = map(mic.getLevel(), 0, 0.02, 0, 250);
  image (img1, 0, 355);
  
  pop ();
  
  //LINEAS
  
  push ();
  
  
  stroke (100);
  strokeWeight(2)
  
line (540, 955, mouseX*4, mouseY*4);
  
  pop();
  
  push ();
  
  translate (0, -y/200);
  stroke(250);
  
line (390, x, mouseX*4, mouseY*4);
  pop();
  
  push ();
  
  translate (0, -y/200);
  fill (y/200, 100, y/10)
  
line (650, 730, mouseX*4, mouseY*4);
  pop();
  
  
  //TEXTOS
  push ()
  fill (r, 100, 100)
  textSize (40);
  textAlign (CENTER);
  textFont ("Courier New");
  text ("para una piedra", 500, 1450);
  
  pop ()
  
  push ()
  //textSize (40);
  //textAlign (CENTER);
  //textFont ("Courier New");
  text ("cavar y cavar", mouseX*4, mouseY*4);
  
  pop ()
  
 
}


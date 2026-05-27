var x = [1,1,1,1,1,1,1,1,1,1];
var y = [1,1,1,1,1,1,1,1,1,1];
var imagen = [];
var final;
var aux = 0;
var consigna;
var enlab;
var error;
var control = false;

function preload() {
  consigna =  loadSound("audios/consigna.mp3");
  enlab    =  loadSound("audios/enlab.mp3");
  error    =  loadSound("audios/error.mp3");

  imagen[0] = loadImage("imagenes/caja.webp");
  imagen[1] = loadImage("imagenes/chelo.webp");
  imagen[2] = loadImage("imagenes/ladrillo.webp");
  imagen[3] = loadImage("imagenes/lampara.webp");
  imagen[4] = loadImage("imagenes/llaves.webp");
  imagen[5] = loadImage("imagenes/marte.webp");
  imagen[6] = loadImage("imagenes/paleta.webp");
  imagen[7] = loadImage("imagenes/plasticola.webp");
  imagen[8] = loadImage("imagenes/teletubbie.webp");
  imagen[9] = loadImage("imagenes/termometro.webp");
  final= loadImage("imagenes/libertad.webp");


}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  consigna.setVolume(0.65);
  consigna.loop();


}

function draw() {

 if (aux == 10) {

      
            if (x[0] >1 && x[0]<400 &&x[1] >1 && x[1]<400 && x[2] >100 && x[2]<400 && x[3] >1 && x[3]<400 && x[4]>1 && x[4]<400 && x[5] >1 && x[5]<400 && x[6]>1 && x[6]<400 && x[7] >1 && x[7]<400 && x[8]>1 && x[8]<400 && x[9] >1&& x[9]<400 ){
                         background(220);

                
                  consigna.stop();

                  image(final, 150,150);
              if (control == false){
                        enlab.setVolume(0.65);

                           enlab.play();
                        control = true;
                    }
                    

               }else{
                     
                     consigna.stop();

                 if (control == false){
                        error.setVolume(0.65);
                                            error.play();

                        control = true;
                    }
                    
                      
                 
               }
  }else{
background(220);
    mostrarimagen();
  }
    
    
    
    
  
  print(aux,x,y);
}

function touchMoved() {
   if (aux <= 9) {
x[aux] = mouseX;
  y[aux] = mouseY; 
    }
  
  
  
}

function mouseReleased() {
  if (aux <= 9) {
  aux = aux + 1;
    }
}

function mostrarimagen() {
  image(imagen[aux], x[aux], y[aux]);
  if (aux==1 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[aux], x[aux], y[aux]);

  }else if (aux==2 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[aux], x[aux], y[aux]);
  } else if (aux==3 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[2], x[2], y[2]);
    image(imagen[aux], x[aux], y[aux]);
  }else if (aux==4 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[2], x[2], y[2]);
    image(imagen[3], x[3], y[3]);
    image(imagen[aux], x[aux], y[aux]);
  }else if (aux==5 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[2], x[2], y[2]);
    image(imagen[3], x[3], y[3]);
    image(imagen[4], x[4], y[4]);
    image(imagen[aux], x[aux], y[aux]);
  }else if (aux==6 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[2], x[2], y[2]);
    image(imagen[3], x[3], y[3]);
    image(imagen[4], x[4], y[4]);
    image(imagen[5], x[5], y[5]);
    image(imagen[aux], x[aux], y[aux]);
  }else if (aux==7 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[2], x[2], y[2]);
    image(imagen[3], x[3], y[3]);
    image(imagen[4], x[4], y[4]);
    image(imagen[5], x[5], y[5]);
    image(imagen[6], x[6], y[6]);
    image(imagen[aux], x[aux], y[aux]);
  }else if (aux==8 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[2], x[2], y[2]);
    image(imagen[3], x[3], y[3]);
    image(imagen[4], x[4], y[4]);
    image(imagen[5], x[5], y[5]);
    image(imagen[6], x[6], y[6]);
    image(imagen[7], x[7], y[7]);
    image(imagen[aux], x[aux], y[aux]);
  }else if (aux==9 ) {
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[2], x[2], y[2]);
    image(imagen[3], x[3], y[3]);
    image(imagen[4], x[4], y[4]);
    image(imagen[5], x[5], y[5]);
    image(imagen[6], x[6], y[6]);
    image(imagen[7], x[7], y[7]);
    image(imagen[8], x[8], y[8]);
    image(imagen[aux], x[aux], y[aux]);
     } else if (aux > 9){
    image(imagen[0], x[0], y[0]);
    image(imagen[1], x[1], y[1]);
    image(imagen[2], x[2], y[2]);
    image(imagen[3], x[3], y[3]);
    image(imagen[4], x[4], y[4]);
    image(imagen[5], x[5], y[5]);
    image(imagen[6], x[6], y[6]);
    image(imagen[7], x[7], y[7]);
    image(imagen[8], x[8], y[8]);
    image(imagen[9], x[9], y[9]);
  }
}

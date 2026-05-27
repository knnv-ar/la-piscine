let radio = 250;
let c = 0;
let escena = 0;
let inicio = true;


function setup() {
  let canvas = createCanvas(700,700, WEBGL);
  canvas.parent('div-sketch');
  angleMode(DEGREES);
  colorMode(HSB); //tono, saturacion y brillo
}

function draw() {
  background(0);
  stroke(270, 40, 100);
  strokeWeight(2);
  orbitControl(); //para mover la cámara con el mouse
  
    //=============================================================Rotación
     // rotateY(frameCount * 0.3);
     //  rotateX(frameCount * 0.3);
     //  rotateZ(frameCount * 0.5 );
  
  
    if (inicio) {
      e2();
    }
  
    if (escena == 1) {
      e1();
      inicio = false;
    } else if (escena == 2) {
      e2();
      inicio = false;
    }
  

  
  // if(escena==1){
  //         e1(); 
  //   }else if(escena==2){
  //         e2(); 
  //   }
  
}

function keyPressed(){

    if(key=="a"||key=="A"){
      escena=1;
    }
  
      if(key=="s"||key=="S"){
      escena=2;
    }

  }


//=============================================================ESCENA 1
function e1(){

  rotateY(90);
        c+=0.01;
       if(c>2){
         c=1;
       }
  
  //=====Figura
  for(let a=0; a<180; a+=8){
    beginShape();
      for(let b=0; b<360; b+=3){
        let x = radio *(1+0.3*tan(b*4+c)*sin(a*7)) * cos(a); //plano x
        let y = radio *(1+0.3*tan(b*4*c)*sin(a*7)) * tan(a) * sin (b);// plano xy
        let z = radio *(1+0.3*tan(b*4*c)*sin(a*7))* tan(a) * cos (b);//plano xz
        point(x, y, z);
    }
    endShape();
  }
  
}

//=============================================================ESCENA 2
function e2(){
  
      c+=0.005;
       if(c>2){
         c=1;
       }
  
  //=====Figura
  for(let a=0; a<180; a+=8){
    beginShape();
      for(let b=0; b<360; b+=2){
        let x = radio *(1+0.3*sin(b*4+c)*sin(a*7)) * cos(a); //plano x
        let y = radio *(1+0.3*sin(b*4*c)*sin(a*7)) * sin(a) * sin (b);// plano xy
        let z = radio *(1+0.3*sin(b*4*c)*sin(a*7))* sin (a) * cos (b);//plano xz
        point(x, y, z);
    }
    endShape();
  }
  
}
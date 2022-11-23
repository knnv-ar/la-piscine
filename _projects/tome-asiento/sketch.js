var dsillon;
var ojo1;
var ojo2;
var t1;
var t2;
var t3;
var t4;
var mov;
var movaux;
var fondo;
var c1;
var c2;
var c3;
var c4;
var cf;

function preload(){
  dsillon=loadImage("dsilon.png");
  ojo1=loadImage("ojo1.gif");
  ojo2=loadImage("ojo2.gif");
  t1=loadImage("1.gif");
  t2=loadImage("2.gif");
  t3=loadImage("3.gif");
  t4=loadImage("4.gif");
  
}

function tc(){
  cf=cf+1;
  if (cf==0){
      c1=t1;
      c2=t2;
      c3=t3;
      c4=t4;
      fondo=t2;
  } else if(cf==1){
      c1=t2;
      c2=t3;
      c3=t4;
      c4=t1;
      fondo=t3;
  } else if(cf==2) {
      c1=t3;
      c2=t4;
      c3=t1;
      c4=t2;
      fondo=t4;
  } else if(cf==3) {
      c1=t4;
      c2=t1;
      c3=t2;
      c4=t3;
      fondo=t1;
    } else if(cf==4) {
      c1=t1;
      c2=t2;
      c3=t3;
      c4=t4;
      fondo=t2;
  } else if(cf==5) {
      cf=0;
  }
}

function anim(){
  if (mov<300){
    mov++;
  } else{
    mov=0;
    tc();
  }
}

function setup() {
  let canvas = createCanvas(800, 600, WEBGL);
  canvas.parent('div-sketch');
  mov=0;
  cf=0;
  tc();
}

function draw() {
  anim();
  background(30);
  push();
  texture(fondo);
  translate(0,0,1);
  box(800, 600, 10);
  pop();
  push();
  texture(c1);
  translate(-300-mov,-150,2);
  box(250,188,10);
  pop();
  push();
  texture(c2);
  translate(0-mov,-150,2);
  box(250,188,10);
  pop();
  push();
  texture(c3);
  translate(300-mov,-150,2);
  box(250,188,10);
  pop();
  push();
  texture(c4);
  translate(600-mov,-150,2);
  box(250,188,10);
  pop();
  translate(0,0,10);
  push();
  scale(0.6);
  image(ojo1, -23, 3);
  scale(0.8);
  image(ojo2, 85, 11);
  pop();
  push();
  scale(0.8);
  image(dsillon, -325 , -300);
  pop();
  document.oncontextmenu = function () {
  return false;
  }
}
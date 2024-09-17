//la obra se desordena al precionar la tecla space
//presionando la a/A cambia de obra
let mx  = 0 ;
let my =0;
let desplazamientoA =0;
let desplazamientoB =0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}


function draw() {
  frameRate(10);
  let color1 =0;
  color1= random(0,255);
  
 //  if(keyIsDown(32)){
  desplazamientoA = random(-150, 150);
  desplazamientoB = random(-150, 150);
 /*  }
  else{
    desplazamientoA = 0;
    desplazamientoB = 0;
  }*/
  
  
  background(255);
  stroke(0);
  fill(color1)
  rect(270+desplazamientoB,125+desplazamientoA,20-desplazamientoA,40+desplazamientoB)
  rect(285+desplazamientoB,150+desplazamientoA,15-desplazamientoA,60+desplazamientoB)
  rect(255+desplazamientoB,110+desplazamientoA,35-desplazamientoA,65+desplazamientoB)
  rect(270+desplazamientoB,100+desplazamientoA,35-desplazamientoA,65+desplazamientoB)
    rect(280+desplazamientoB,100+desplazamientoA,10-desplazamientoA,40+desplazamientoB)
    //pecho
  rect(275+desplazamientoB,190+desplazamientoA,30-desplazamientoA,35+desplazamientoB)
  rect(285+desplazamientoB,180+desplazamientoA,30-desplazamientoA,35+desplazamientoB)
  rect(295+desplazamientoB,220+desplazamientoA,20-desplazamientoA,35+desplazamientoB)
  rect(260+desplazamientoB,185+desplazamientoA,20-desplazamientoA,50+desplazamientoB)
  rect(270+desplazamientoB,235+desplazamientoA, 25-desplazamientoA,60+desplazamientoB)
  rect(288+desplazamientoB,240+desplazamientoA, 25-desplazamientoA,60+desplazamientoB)
  //ernas
  rect(259+desplazamientoB,300+desplazamientoA,25-desplazamientoA,45+desplazamientoB)
  rect(257+desplazamientoB,335+desplazamientoA,20-desplazamientoA,30+desplazamientoB)
  rect(260+desplazamientoB,350+desplazamientoA,20-desplazamientoA,45+desplazamientoB)
  rect(255+desplazamientoB,390+desplazamientoA,20-desplazamientoA,40+desplazamientoB)
  rect(260+desplazamientoB,425+desplazamientoA,15-desplazamientoA,25+desplazamientoB)
  rect(255+desplazamientoB,445+desplazamientoA,15-desplazamientoA,30+desplazamientoB)
rect(285+desplazamientoB,275+desplazamientoA,35-desplazamientoA,45+desplazamientoB)
rect(305+desplazamientoB,300+desplazamientoA,20-desplazamientoA,30+desplazamientoB)
  rect(302+desplazamientoB,325+desplazamientoA,20-desplazamientoA,45+desplazamientoB)
   rect(299+desplazamientoB,355+desplazamientoA,15-desplazamientoA,30+desplazamientoB) 
  rect(295+desplazamientoB,385+desplazamientoA,20-desplazamientoA,40+desplazamientoB)
  rect(290+desplazamientoB,420+desplazamientoA,15-desplazamientoA,25+desplazamientoB)
  rect(299+desplazamientoB,440+desplazamientoA,15-desplazamientoA,30+desplazamientoB) 
 
  
  
fill(color1-40);
  //espalda/pecho1
  rect(190+desplazamientoB,145+desplazamientoA,20-desplazamientoA,40+desplazamientoB)
  rect(180+desplazamientoB,120+desplazamientoA,10-desplazamientoA,40+desplazamientoB)
  rect(175+desplazamientoB,150+desplazamientoA,15-desplazamientoA,60+desplazamientoB)
  rect(160+desplazamientoB,115+desplazamientoA,35-desplazamientoA,65+desplazamientoB)
  rect(170+desplazamientoB,185+desplazamientoA,35-desplazamientoA,65+desplazamientoB)
  //pecho
  rect(145+desplazamientoB,190+desplazamientoA,30-desplazamientoA,35+desplazamientoB)
  rect(165+desplazamientoB,225+desplazamientoA,30-desplazamientoA,35+desplazamientoB)
  rect(195+desplazamientoB,220+desplazamientoA,20-desplazamientoA,35+desplazamientoB)
  rect(130+desplazamientoB,185+desplazamientoA,20-desplazamientoA,50+desplazamientoB)
  rect(140+desplazamientoB,245+desplazamientoA, 25-desplazamientoA,60+desplazamientoB)
  rect(150+desplazamientoB,240+desplazamientoA, 25-desplazamientoA,60+desplazamientoB)
  //brazo
  rect(200+desplazamientoB,210+desplazamientoA,25-desplazamientoA,25+desplazamientoB)
  rect(220+desplazamientoB,225+desplazamientoA,15-desplazamientoA,15+desplazamientoB)
  rect(195+desplazamientoB,220+desplazamientoA,20-desplazamientoA,35+desplazamientoB)
  rect(130+desplazamientoB,185+desplazamientoA,20-desplazamientoA,50+desplazamientoB)
  rect(140+desplazamientoB,245+desplazamientoA, 25-desplazamientoA,60+desplazamientoB)
  rect(150+desplazamientoB,240+desplazamientoA, 25-desplazamientoA,60+desplazamientoB)
  rect(230+desplazamientoB,235+desplazamientoA, 15-desplazamientoA,10+desplazamientoB)
  rect(220+desplazamientoB,240+desplazamientoA, 15-desplazamientoA,10+desplazamientoB)
  rect(240+desplazamientoB,225+desplazamientoA,15-desplazamientoA,25+desplazamientoB)
  rect(245+desplazamientoB,200+desplazamientoA,20-desplazamientoA,35+desplazamientoB)
  rect(256+desplazamientoB,165+desplazamientoA,10-desplazamientoA,30+desplazamientoB)
  rect(260+desplazamientoB,150+desplazamientoA,15-desplazamientoA,20+desplazamientoB)
  //piernas
  rect(160+desplazamientoB,300+desplazamientoA,25-desplazamientoA,45+desplazamientoB)
  rect(155+desplazamientoB,335+desplazamientoA,20-desplazamientoA,30+desplazamientoB)
  rect(160+desplazamientoB,350+desplazamientoA,20-desplazamientoA,45+desplazamientoB)
  rect(155+desplazamientoB,390+desplazamientoA,20-desplazamientoA,40+desplazamientoB)
  rect(150+desplazamientoB,425+desplazamientoA,15-desplazamientoA,25+desplazamientoB)
  rect(155+desplazamientoB,445+desplazamientoA,15-desplazamientoA,30+desplazamientoB)
  rect(120+desplazamientoB,295+desplazamientoA,25-desplazamientoA,45+desplazamientoB)
  rect(115+desplazamientoB,330+desplazamientoA,20-desplazamientoA,30+desplazamientoB)
  rect(120+desplazamientoB,345+desplazamientoA,20-desplazamientoA,45+desplazamientoB)
  rect(115+desplazamientoB,385+desplazamientoA,20-desplazamientoA,40+desplazamientoB)
  rect(110+desplazamientoB,420+desplazamientoA,15-desplazamientoA,25+desplazamientoB)
  rect(115+desplazamientoB,440+desplazamientoA,15-desplazamientoA,30+desplazamientoB) 
  
 if(keyIsPressed){
//  if (key == "a" || key == "A") {
   if(keyIsDown(32)){   
      background(1);
      stroke(255);
      noFill();
     desplazamientoA = random(-10, 10);
     desplazamientoB = random(-10, 10);
       //cabeza 1
       bezier(170+desplazamientoB,110,210-desplazamientoA,110,223,185-desplazamientoA,180,160-desplazamientoA);
       bezier(170,190-desplazamientoA,215,70,110+desplazamientoB,110,180-desplazamientoA,160);
       bezier(170-desplazamientoA,150,190,200+desplazamientoB,200,200,205+desplazamientoB,150);
       //espalda1
       bezier(125,180+desplazamientoB,190,200,200+desplazamientoB,200,201,190);
       bezier(170,185-desplazamientoA,200,230,170-desplazamientoA,250,155,295+desplazamientoB);
       bezier(200-desplazamientoA,190,200+desplazamientoB,230,170+desplazamientoB,250,180,300);
       bezier(125,180+desplazamientoB,150,220,150-desplazamientoA,260,125+desplazamientoB,285);
      //brazo izq
      bezier(125+desplazamientoB,180,100,270+desplazamientoB,223,190,210+desplazamientoB,200);
      bezier(125-desplazamientoA,180,150,240+desplazamientoB,200,230-desplazamientoA,210+desplazamientoB,200);
      //brazo der
      bezier(200,200-desplazamientoA,270+desplazamientoB,270,210,220+desplazamientoB,260,230+desplazamientoB);
      bezier(200,200+desplazamientoB,220,270,250+desplazamientoB,240,260,230-desplazamientoA);
      //pierna der
      bezier(180+desplazamientoB,300,115,330+desplazamientoB,200,380,160+desplazamientoB,450);
      bezier(180,300+desplazamientoB,200,420-desplazamientoA,140,320+desplazamientoB,160,450);
      //pierna izq
      bezier(125,285+desplazamientoB,90,380,170,350+desplazamientoB,115,440);
      bezier(125+desplazamientoB,285,185+desplazamientoB,370,105-desplazamientoA,330+desplazamientoB,115,440);
      //pie izq
      bezier(115+desplazamientoB,440-desplazamientoA,100+desplazamientoB,490,100,400+desplazamientoB,125,470);
      //pie der
      bezier(160-desplazamientoA,450+desplazamientoB,150,490+desplazamientoB,140,400,170+desplazamientoB,480);
    
      //cabeza 2
      bezier(300-desplazamientoA,120,330+desplazamientoB,140+desplazamientoA,305-desplazamientoA,165+desplazamientoB,300-desplazamientoB,170+desplazamientoB)
      bezier(300,120+desplazamientoB,250,140,280-desplazamientoA,150,310+desplazamientoA,160);
      bezier(275+desplazamientoB,140+desplazamientoA,270,150,270+desplazamientoB,210,300+desplazamientoB,170);
      //espalda2
      bezier(310+desplazamientoB,160,340+desplazamientoA,260,280+desplazamientoB,180,300+desplazamientoA,280);
      bezier(280,200+desplazamientoA,280,200+desplazamientoB,290,170+desplazamientoA,340,225+desplazamientoB);
      bezier(280+desplazamientoA,200+desplazamientoB,270,230+desplazamientoA,295,260+desplazamientoB,280,300);
      bezier(340,225+desplazamientoA,280,290+desplazamientoB,330,260+desplazamientoA,300,320+desplazamientoA);
       //brazo2 izq
      bezier(340,225,330+desplazamientoB,270,350,290+desplazamientoA,260+desplazamientoA,230);
      bezier(340,225+desplazamientoB,310,260,350,320+desplazamientoB,260,230);
      //brazo2 der
      bezier(280+desplazamientoB,205,270+desplazamientoA,230+desplazamientoB,210,200,200+desplazamientoB,200);
      bezier(280,210,270+desplazamientoB,220,290+desplazamientoA,250,201,200+desplazamientoA);
      //pierna izq
      bezier(300+desplazamientoB,320,270+desplazamientoA,339,320+desplazamientoA,390,300,450+desplazamientoA);
      bezier(310+desplazamientoB,290,330+desplazamientoB,390,270+desplazamientoA,339,300+desplazamientoB,450);
      //pierna der
      bezier(280+desplazamientoB,300,250+desplazamientoA,339,310+desplazamientoA,370,270+desplazamientoA,430+desplazamientoB);
      bezier(285,280+desplazamientoB,310,380+desplazamientoA,270,339+desplazamientoA,270,430+desplazamientoA);
      //pie izq
      bezier(270+desplazamientoB,430,290+desplazamientoB,470,290,390+desplazamientoB,265,460);
      //pie der
      bezier(300,450+desplazamientoB,315,490+desplazamientoB,320,410,290+desplazamientoB,480);
    }
 }
  
  
   
}

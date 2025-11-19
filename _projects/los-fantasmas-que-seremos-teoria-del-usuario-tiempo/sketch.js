//--------------CONFIG.D.2025-----------

  
//------propiedadesDEFAULT-------
  
propradius = 256  //def 8 (en 8 no rebota?) // divisiones de width van genial
propspeedX = 360  //def 2
propaltura = 600 // def 512
propvelocidad = 0.05 //def 0.05
propcojos = 4 //def 4 // WOW 0.2
propbg1Alpha = 50  //def 120
propbg2Alpha = 2  //def 10 // numeros altos para cuando no haya blur
proprelojeo = 1
proprelojeoModulo = 2 //def 2
proprelojeoModulEq = 0 //def 0
proprelojeoBlackAlpha = (255/100)*0.7 //def 0.05
proprelojeoBlackColor = {r:150,g:150,b:150}    //def 50,50,50
proprelojeoBlackStroke = 40 //def 90
proprelojeoWhiteAlpha = 120 //def 0.99
proprelojeoWhiteColor = {r:255,g:255,b:255}
proprelojeoWhiteStroke = 4 //def 1
propXshear = 0 //0.5
propYshear = 0 
proproteta = 0
proptight = 1
proptranslateX = 0
proptranslateY = 0
propbg3Alpha = 120  //def 10 IMPORTANTE 
propremovedor = 0  // esta rota la logica, arreglar
propremovedorAlpha = (255/100)*0.2 // es decir 0.2
propblur = 4 //def 1
propblur2 = 0
propposterize = 255   // 16 


let movX = 0
let t = 0
let tempMod = 1 
let radius = propradius
let speedX = propspeedX
let t2s = 1
let t3s = 1  
let t4s = 1
let t5s = 1
let t6s = 1
let t7s = 1
let t8s = 1
let t9s = 1
let t15s = 1
let t30s = 1
let numRows = 3;
let numCols = 4;
//let rowSpacing = height / 4;
//let colSpacing = width / 4;

function setup() {
  frameRate(60)
  //createCanvas(512, 512);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  /*bufferCirculo = createGraphics(512,512)
  bufferGlobal = createGraphics(512,512)  */
}

function draw() {
//----------------DRAWSETUP-------------
   
  
//--------Generales--------
  
let bfTiempo = (frameCount%100)
let alturaParp = propaltura//original 500
let velocidad = propvelocidad // original 0.05
let ratePos = (sin((frameCount * velocidad)-PI/2) + 1) / 2
let rateNeg = (cos(frameCount * velocidad) - 1) / 2
let osc1 = (alturaParp * ratePos) + height/2
let osc2 = (alturaParp * rateNeg)  + height/2
let cantidadOjos = propcojos
let efectoActual = OVERLAY
let tiempoReset = 1000  
  
//--------Mov-x------------
  
movX += speedX;
if (movX > width - radius || movX < radius) {speedX *= -1;}
movX = (movX + speedX + width) % width;
movX = constrain(movX, radius, width - radius);

//------propiedadesDEFAULT-------
  
propradius = 256  //def 8 (en 8 no rebota?) // divisiones de width van genial
propspeedX = 360  //def 2
propaltura = 512 // def 512
propvelocidad = 0.05 //def 0.05
propcojos = 4 //def 4 // WOW 0.2
propbg1Alpha = 50  //def 120
propbg2Alpha = 2  //def 10 // numeros altos para cuando no haya blur
proprelojeo = 1
proprelojeoModulo = 2 //def 2
proprelojeoModulEq = 0 //def 0
proprelojeoBlackAlpha = (255/100)*0.2 //def 0.05
proprelojeoBlackColor = {r:150,g:150,b:150}    //def 50,50,50
proprelojeoBlackStroke = 40 //def 90
proprelojeoWhiteAlpha = 120 //def 0.99
proprelojeoWhiteColor = {r:255,g:255,b:255}
proprelojeoWhiteStroke = 4 //def 1
propXshear = 0 //0.5
propYshear = 0 
proproteta = 0
proptight = 1
proptranslateX = 0
proptranslateY = 0
propbg3Alpha = 120  //def 10 IMPORTANTE 
propremovedor = 0  // esta rota la logica, arreglar
propremovedorAlpha = (255/100)*0.2 // es decir 0.2
propblur = 4 //def 1
propblur2 = 0
propposterize = 255   // 16    

  
//------ clocktower---------
 
segundoX0 = parseInt(second()/10)
segundo0X = second()%10
segundoXX = second()
  
minutoX0 = parseInt(minute()/10)
minuto0X = minute()%10
minutoXX = minute()
  
//minutoX0 = 5
//minuto0X = 1
  
diaX0 = parseInt(day()/10)
dia0X = day()%10
diaXX = day()
  
mesX0 = parseInt(month()/10)
mes0X = month()%10
mesXX = month()

anioX0 = parseInt((year()/10)%10)
anio0X = year()%10
anioXX = year()



/*
Modulo de frameCount   15 = 1/4s 
                       30 = 1/2s
                       60 = 1s  
*/

fcRatio = 15
  
if (frameCount % fcRatio === 0) { t2s = (t2s % 2) + 1; }  
if (frameCount % fcRatio === 0) { t3s = (t3s % 3) + 1; }  
if (frameCount % fcRatio === 0) { t4s = (t4s % 4) + 1; }  
if (frameCount % fcRatio === 0) { t5s = (t5s % 5) + 1; }  
if (frameCount % fcRatio === 0) { t6s = (t6s % 6) + 1; }  
if (frameCount % fcRatio === 0) { t7s = (t7s % 7) + 1; }  
if (frameCount % fcRatio === 0) { t8s = (t8s % 8) + 1; }  
if (frameCount % fcRatio === 0) { t9s = (t9s % 9) + 1; }  
t10s = segundo0X+1 // mmmedio al cuete pero bueno orden estructura regularidad
if (frameCount % fcRatio === 0) { t15s = (t15s % 15) + 1; }  
if (frameCount % fcRatio === 0) { t30s = (t30s % 30) + 1; }    
tAddedstring = t4s.toString() + t2s.toString() + t30s.toString()
tAddednumero = parseInt(tAddedstring)
  
  
//--------.._-.|S W I T C H E R|.-_..-----------  

  
  
if (segundoXX > 30)  {
  
  propcojos = 0.2
  
}
  
if (segundoXX < 30) {
  
    proprelojeo = 1
    proprelojeoModulo = 2 //def 2
    proprelojeoModulEq = 25 //def 0
    proprelojeoBlackAlpha = (255/100)*0.1 //def 0.05
    proprelojeoBlackColor = {r:150,g:150,b:150}    //def 50,50,50
    proprelojeoBlackStroke = 120 //def 90
    proprelojeoWhiteAlpha = 90 //def 0.99
    proprelojeoWhiteColor = {r:255,g:255,b:255}
    proprelojeoWhiteStroke = 1.2*t30s //def 1
  
}
  
  
  
  
/*if (anio0X >= 5) {
  
  propradius = 8  //def 8 (en 8 no rebota?) // divisiones de width van genial
  propspeedX = 1  //def 2
  propaltura = 512 // def 512
  propvelocidad = 0.05 //def 0.05
  //propcojos = 4 //def 4 // WOW 0.2
  propbg1Alpha = 50  //def 120
  propbg2Alpha = 2  //def 10 // numeros altos para cuando no haya blur
  proprelojeo = 1
  proprelojeoModulo = 2 //def 2
  proprelojeoModulEq = 0 //def 0
  proprelojeoBlackAlpha = (255/100)*0.2 //def 0.05
  proprelojeoBlackColor = {r:150,g:150,b:150}    //def 50,50,50
  proprelojeoBlackStroke = 40 //def 90
  proprelojeoWhiteAlpha = 120 //def 0.99
  proprelojeoWhiteColor = {r:255,g:255,b:255}
  proprelojeoWhiteStroke = 4 //def 1
  propXshear = 0 //0.5
  propYshear = 0 
  proproteta = 0
  proptight = 1
  proptranslateX = 0
  proptranslateY = 0
  propbg3Alpha = 120  //def 10 IMPORTANTE 
  propremovedor = 0  // esta rota la logica, arreglar
  propremovedorAlpha = (255/100)*0.2 // es decir 0.2
  propblur = 4 //def 1
  propblur2 = 0
  propposterize = 255   // 16  
  
    if (mes0X >= 6) { 
      
      propradius = 8  //def 8 (en 8 no rebota?) // divisiones de width van genial
      propspeedX = 1  //def 2
      propaltura = 512 // def 512
      propvelocidad = 0.05 //def 0.05
      //propcojos = 4 //def 4 // WOW 0.2
      propbg1Alpha = 50  //def 120
      propbg2Alpha = 2  //def 10 // numeros altos para cuando no haya blur
      proprelojeo = 1
      proprelojeoModulo = 2 //def 2
      proprelojeoModulEq = 0 //def 0
      proprelojeoBlackAlpha = (255/100)*0.2 //def 0.05
      proprelojeoBlackColor = {r:150,g:150,b:150}    //def 50,50,50
      proprelojeoBlackStroke = 90 //def 90
      proprelojeoWhiteAlpha = 120 //def 0.99
      proprelojeoWhiteColor = {r:255,g:255,b:255}
      proprelojeoWhiteStroke = 4 //def 1
      propXshear = 0 //0.5
      propYshear = 0 
      proproteta = 0
      proptight = 1
      proptranslateX = 0
      proptranslateY = 0
      propbg3Alpha = 120  //def 10 IMPORTANTE 
      propremovedor = 0  // esta rota la logica, arreglar
      propremovedorAlpha = (255/100)*0.2 // es decir 0.2
      propblur = 4 //def 1
      propblur2 = 0
      propposterize = 255   // 16
      
      
      
      if (diaXX > 10){
        
        if (minutoXX > 30) {
          
          if (segundoXX > 30){
            

            
            
            
            
          }
          
        }
        
        
        
      }
  
  
  }  
}  */
  
  
/* if año es par 

      if month late half of year
      
        if weekday
        
            if night
            
              if day is divisible by 3 
              
                if minutes is div by 5
                
                  if seconds is smaller than 10
                
                if minutes is exactly 23
                
                
              
              if day is divisible by 8
            
            if daylight
            
            
        
        if weekend 
        
          if night
          
              if day is divisible by 2 
              
                if minutes is div by 8
                
                  if seconds is bigger than 30
                
                if minutes is exactly 23
          
          if day
      
      if month is early half of year
--
    if año es impar
    
    if month late half of year
      
        if weekday
        
            if night
            
              if day is divisible by 3 
              
                if minutes is div by 5
                
                  if seconds is 
                
                if minutes is exactly 23
                
                
              
              if day is divisible by 8
            
            if day
        
        if weekend 
        
          if night
          
          if day
    
    
  
  

  */
  
  

  

  
//------------------------DRAW---------------------------
background(0,propbg1Alpha);
noFill()
stroke('white')
  
  
  //blendMode(ADD)
  background(0,propbg2Alpha); // original alfa 120
  fill('black')
  //bufferCirculo.noFill()
  stroke('white')
  strokeWeight(1) //original 1.0 // modificar
  
//-----------------slicker-flicker 
 
          if (proprelojeo==1) {

           if ((millis()%proprelojeoModulo == proprelojeoModulEq)) {

                  stroke(proprelojeoBlackColor.r,
                         proprelojeoBlackColor.g,
                         proprelojeoBlackColor.b,
                         proprelojeoBlackAlpha) //en 185x3 y stroke 12 ta lindo
                  strokeWeight(proprelojeoBlackStroke)
           }
           else { 

                  stroke(proprelojeoWhiteColor.r,
                       proprelojeoWhiteColor.g,
                       proprelojeoWhiteColor.b,
                       proprelojeoWhiteAlpha);

                  strokeWeight(proprelojeoWhiteStroke) // stroke 50 o 90 con alfa ta weno
           }  
          }

          else {//y este para que sirve?? nada
            

          }//endoflickr    
  

  
  
//----------------circulos
noFill()
//-----------------ARRIBA
push()
translate(0,-(height/4)*1)
//-------1/4---  
// -top----  
  push()
  translate(-(width/4)*1,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//   
  
//-------2/4---  
// -top----  
  
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape(); 
//
  
//-------3/4---  
// -top----  
  push()
  translate((width/4)*1,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//
  
//-------4/4---  
// -top----  
  push()
  translate((width/4)*2,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//

pop()
  
//-----------------CENTRO  
//-------1/4---  
// -top----  
  push()
  translate(-(width/4)*1,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//   
  
//-------2/4---  
// -top----  
  
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape(); 
//
  
//-------3/4---  
// -top----  
  push()
  translate((width/4)*1,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//
  
//-------4/4---  
// -top----  
  push()
  translate((width/4)*2,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//
//-----------------ABAJO
push()
translate(0,(height/4)*1)
//-------1/4---  
// -top----  
  push()
  translate(-(width/4)*1,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//   
  
//-------2/4---  
// -top----  
  
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape(); 
//
  
//-------3/4---  
// -top----  
  push()
  translate((width/4)*1,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//
  
//-------4/4---  
// -top----  
  push()
  translate((width/4)*2,0) //width/4 obvio pero consist.
  beginShape();

    curveVertex((width/(propcojos*2)*3), osc1);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc1);

  endShape(); 
  
// -bot-----------
  
  beginShape();

    curveVertex((width/(propcojos*2)*3),osc2);
    curveVertex(width/4, height/2); //ancla izq
    curveVertex((width/4)*2, height/2); //ancla der
    curveVertex((width/(propcojos*2)*3), osc2);

  endShape();
  
  pop()
//

pop()
  
//-----------------Removedor

if (propremovedor==1){  

  
    if ((t2s/2)%2==1/*t2s<=1*/) {
      
    noStroke()
    blendMode(ADD)
    fill(0,0,0,propremovedorAlpha)    
    //filter(BLUR,1)
    rect(0,0,512,512)
    }
    else if ((t2s/4)%2==0/*t2s>1*/) {    
    noStroke()
    blendMode(SCREEN)
    fill(255,255,255,propremovedorAlpha)    
    filter(POSTERIZE,4/*propposterize*/) //multplos de 2 // mas lindo sin 

    rect(0,0,512,512)}
  
}
else if (propremovedor==0){}
//console.log(segundoXX)    
  
  
  push()



 pop()
    
 
}//end of Draw

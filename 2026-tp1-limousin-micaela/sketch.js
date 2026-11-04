//Esta obra tiene como inspiracion el cuadro "Habitat para un pez"
// de Luis Benedit, realizado en 1968.
//
//
let barcoX = 125
let barcoVel = 0.5
let barcoTam = 150
let tiempoAgua = 0

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  
}
function draw() {
   background(150);
  tiempoAgua += 0.04;
  
  //fondo
  noStroke()
  fill(200)
  rect(0,0,512,200)
  fill(110)
  rect(0,300,512,200)
  bezier(0,300,50,260,100,270,150,300)
  bezier(400,300,440,270,480,240,512,300)
  fill(160)
  rect(0,330,512,200)
  bezier(0,330,50,290,100,300,150,330)
  bezier(400,330,440,300,480,270,512,330)
  fill(200)
  rect(0,360,512,200)
  bezier(0,360,50,320,100,330,150,360)
  bezier(400,360,440,330,480,300,512,360)
  fill(80)
  rect(0,390,512,200)
  bezier(0,390,50,350,100,360,150,390)
  bezier(400,390,440,360,480,330,512,390)
  
  
  fill(255)
  stroke(60)
   barcoX += barcoVel;
  if (barcoX > width - 75 || barcoX < 75) {
    barcoVel *= -1;
  }
  
  push();
  translate(barcoX,200)
   strokeWeight(5)
  triangle(-55,0,0,-100,55,0)
  line(0,-100,0,0)
  triangle(-75,0,-75,-100,0,0)
  triangle(-0,0,75,-100,75,0)
  pop()
  
  noStroke()
  
 let flotarY = sin(tiempoAgua) * 8; 

  push()
  translate(0, flotarY)
  //estructura del pescao
  fill(180)
   noStroke()
   triangle(100,400,260,160,270,440)
   triangle(220,440,340,165,425,400)
   fill(140)
   quad(260,156,265,310,275,312,270,155)
   quad(330,157,340,160,275,310,272,300)
   stroke(60)
   strokeWeight(3)
  fill(235)
  //point(80,400)
  //point(240,140)
  //primer bezier lado izq
  bezier(100,400,100,350,180,200,260,160)
  //point(425,400)
  //point(340,140)
  //segunda lado derc
  bezier(425,400,400,330,410,220,340,165)
  point(270,310)
  //DIENTES izq
  fill(255)
  triangle(270,160,280,165,270,175)
  triangle(270,173,278,180,270,185)
  triangle(270,183,280,190,270,200)
  triangle(270,196,285,205,272,215)
  triangle(271,213,282,220,271,230)
  triangle(271,226,283,238,271,245)
  triangle(271,242,278,253,271,260)
  triangle(271,260,277,267,271,272)
  triangle(271,277,276,282,271,289)
  //dientes derech
  triangle(327,165,315,165,323,175)
  triangle(323,173,311,175,319,185)
  triangle(319,183,305,185,315,195)
  triangle(315,193,302,195,310,205)
  triangle(310,203,300,206,306,215)
  triangle(306,212,294,214,302,225)
  triangle(302,222,290,224,298,235)
  triangle(299,232,288,240,294,245)
  triangle(294,243,280,249,289,258)
  triangle(289,257,277,260,284,270)
  triangle(283,270,274,275,280,280)
  //boca
  line(260,156,265,310)
  line(340,160,275,310)
  line(265,310,275,312)//comisura
  line(270,155,272,300)
  line(330,157,272,300)
  //fin de labios
  line(260,156,270,155)
  line(330,157,340,160)
  //point(130,280)
  //point(270,310)
  //abajo del ojo lado izq
  noFill()
  bezier(150,280,160,360,240,335,270,310)
  //point(320,340)
  //point(380,330)
  //abajo del ojo lado derec
  bezier(270,310,320,370,380,350,410,330)
  point(255,420)
  //linea del medio
  line(255,420,270,310)
  //escamas lrpm en q me meti
  //point(110,410) 
  //verticales izq
  bezier(110,410,107,370,125,330,152,290)
  bezier(125,420,124,370,140,330,159,310)
  bezier(145,430,150,400,155,370,170,325)
  bezier(175,430,185,400,195,370,195,335)
  bezier(210,430,215,400,215,370,220,335)
  bezier(230,430,235,400,235,370,240,328)
//horizontales izq
  bezier(140,290,150,350,200,365,265,330)
  bezier(130,315,150,375,200,390,265,350)
  bezier(120,335,150,395,200,410,260,370)
  bezier(110,355,150,420,200,430,260,390)
  bezier(105,375,150,440,200,450,255,410)
  //lado derecho
  //verticales
  bezier(280,430,275,410,275,350,285,325)
  bezier(300,430,300,410,300,350,300,335)
  bezier(330,430,327,410,325,350,320,345)
  bezier(355,430,350,410,345,350,340,350)
  bezier(375,430,370,410,365,350,360,350)
  bezier(390,430,385,410,380,350,375,345)
  bezier(405,430,400,410,395,350,390,340)
  bezier(420,430,410,410,405,350,400,335)
  //horizontales derec
  bezier(270,330,300,370,350,380,410,350)
  bezier(265,350,300,390,350,400,415,370)
  bezier(265,370,300,410,350,420,420,390)
  bezier(260,390,300,430,350,440,425,410)

  let mirarX = map(mouseX, 0, width, -8, 8)
  let mirarY = map(mouseY, 0, height, -8, 8)
   //ojoss
  //borde
  stroke(80)
  fill(160)
  ellipse(220,280,85,90)
  ellipse(350,290,80,90)
  //rojo
  stroke(74)
  fill(74)
  ellipse(220,280,70,75)
  ellipse(350,290,65,75)
  //parte blanca
  fill(220)
  stroke(220)
  ellipse(221,278,60,65)
  ellipse (350,287,57,65)
  //pupila negra
  fill(0)
  stroke(0)
  ellipse(226 + mirarX,274 + mirarY,53,50);
  ellipse(350 + mirarX,280 + mirarY,50,53);

  pop();

  //empiezo con el agua 
 // bezier(0,350,100,450,120,420,150,400)
  noFill()
  //burbujas
  stroke(215)
  strokeWeight(4)
  fill(166,140)
  //variables para movimiento 
   let b1X = sin(tiempoAgua * 1.20) * 6.5
  let b1Y = cos(tiempoAgua * 1.25) * 6.5
  let b2X = sin(tiempoAgua * 0.73 + 1) * 5
  let b2Y = cos(tiempoAgua * 0.73 + 1) * 5
  let b3X = sin(tiempoAgua  + 3) * 2
  let b3Y = cos(tiempoAgua + 2) * 2

  
  ellipse(35 + b1X, 400 + b1Y, 50)
  ellipse(40 + b2X, 430 + b2Y, 50)
  ellipse(70 + b3X, 410 + b3Y, 50)
  ellipse(85 + b1X, 370 + b1Y, 40)
  ellipse(95 + b2X, 340 + b2Y, 40)
  ellipse(65 + b3X, 370 + b3Y, 40)
  ellipse(100 + b1X, 430 + b1Y, 55)
  ellipse(120 + b2X, 410 + b2Y, 30)
  ellipse(140 + b3X, 415 + b3Y, 35)
  ellipse(130 + b1X, 390 + b1Y, 25)
  ellipse(20 + b2X, 470 + b2Y, 50)
  ellipse(55 + b3X, 470 + b3Y, 70)
  ellipse(90 + b1X, 485 + b1Y, 60)
  ellipse(130 + b2X, 450 + b2Y, 45)
  ellipse(160 + b3X, 440 + b3Y, 50)
  ellipse(130 + b1X, 490 + b1Y, 55)
  ellipse(160 + b2X, 480 + b2Y, 40)
  ellipse(200 + b3X, 460 + b3Y, 60)
  ellipse(230 + b1X, 430 + b1Y, 30)
  ellipse(210 + b2X, 420 + b2Y, 25)
  ellipse(200 + b3X, 500 + b3Y, 40)
  ellipse(170 + b1X, 500 + b1Y, 30)
  ellipse(230 + b2X, 490 + b2Y, 40)
  ellipse(240 + b3X, 460 + b3Y, 50)
  ellipse(255 + b1X, 485 + b1Y, 20)
  ellipse(270 + b2X, 470 + b2Y, 25)
  ellipse(265 + b3X, 440 + b3Y, 40)
  ellipse(260 + b1X, 510 + b1Y, 35)
  ellipse(290 + b2X, 490 + b2Y, 50)
  ellipse(300 + b3X, 460 + b3Y, 60)
  ellipse(330 + b1X, 440 + b1Y, 30)
  ellipse(340 + b2X, 460 + b2Y, 20)
  ellipse(330 + b3X, 490 + b3Y, 40)
  ellipse(380 + b1X, 500 + b1Y, 30)
  ellipse(410 + b2X, 480 + b2Y, 60)
  ellipse(395 + b3X, 440 + b3Y, 40)
  ellipse(380 + b1X, 420 + b1Y, 20)
  ellipse(400 + b2X, 415 + b2Y, 25)
  ellipse(420 + b3X, 420 + b3Y, 30)
  ellipse(425 + b1X, 440 + b1Y, 25)
  ellipse(455 + b2X, 430 + b2Y, 50)
  ellipse(440 + b3X, 460 + b3Y, 30)
  ellipse(450 + b1X, 490 + b1Y, 40)
  ellipse(480 + b2X, 470 + b2Y, 60)
  ellipse(490 + b3X, 420 + b3Y, 70)
  ellipse(450 + b1X, 400 + b1Y, 40)
  ellipse(430 + b2X, 380 + b2Y, 20)
  ellipse(470 + b3X, 370 + b3Y, 50)
  ellipse(500 + b1X, 380 + b1Y, 30)
  ellipse(500 + b2X, 350 + b2Y, 40)
  ellipse(470 + b3X, 340 + b3Y, 25)

}
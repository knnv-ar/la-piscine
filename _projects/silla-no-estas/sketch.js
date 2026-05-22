var angulo = 0.0;
var desplazamiento = 60;
var escalar = 15;
var velocidad = 0.07;
var x= desplazamiento
var v2= 1.5
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(220);
  
  fill(0);
  noStroke();
  //primera pata
  quad(144,290,144,410,157,410,157,292);
  
  //parte adelante
  quad(140,275,140,290,310,320,310,304);
  
  //segunda pata
  quad(200,300,200,375,215,373,215,300);
  
  //tercera pata
  quad(290,315,290,425,303,425,303,318);
  
  //parte del costado
  quad(310,320,310,304,340,245,340,275);
  
  //cuarta pata
  quad(340,275,340,365,325,365,325,290);
  
  //parte del asiento
  quad(215,220,140,275,310,304,340,245);
  
  //respaldo
  quad(215,220,230,70,250,72,230,224);
  quad(340,245,363,82,345,79,324,252);
  quad(240,100,245,85,344,95,350,110);
  quad(240,110,235,125,340,135,340,120);
  
  if(mouseIsPressed){
    background (220);
    
    fill(90);
    quad(215,175,215,220,0,380,0,175);
    fill(190);
    quad(0,380,140,275,140,512,0,512);
    
    fill(45);
    quad(157,512,200,512,200,300,157,292);
    quad(140,410,157,410,157,512,140,512);
    quad(200,375,215,373,217,512,200,512);
    
    fill(90);
    quad(215,512,290,512,290,315,215,300);
    
    fill(150);
    quad(290,425,306,425,307,512,290,512);
    
    fill(170);
    quad(303,512,325,512,325,290,310,320);
    
    fill(112);
    quad(340,365,325,365,325,512,340,512);
    
    fill(145);
    quad(340,245,340,512,512,512,512,300);
    fill(145);
    triangle(340,245,512,300,512,200);
    
    //ventanas 1er edificio
    rect(165,305,10,20);
    rect(183,310,10,20);
   rect(165,330,10,20);
    rect(183,335,10,20);
    rect(165,355,10,20);
    rect(183,360,10,20);
    rect(165,380,10,20);
    rect(183,385,10,20);
    rect(165,405,10,20);
    rect(183,410,10,20);
    rect(165,430,10,20);
    rect(183,435,10,20);
    rect(165,455,10,20);
    rect(183,460,10,20);
    
    //ventanas 2do edificio
    fill(160);
    rect(225,325,55,10);
    rect(225,350,55,10);
    rect(225,375,55,10);
    rect(225,400,55,10);
    rect(225,425,55,10);
    rect(225,450,55,10);
     rect(225,475,55,10);
    
    //ventana 3er edificio
    fill(190);
    ellipse(298,435,10,10);
    ellipse(298,450,10,10);
    ellipse(298,465,10,10);
    ellipse(298,480,10,10);
    ellipse(298,495,10,10);

    //ventana 4to edificio
quad(315,320,320,310,320,480,315,490);
push()
    translate(x-90,0)
   var y1 = desplazamiento + sin(angulo) * escalar;
   
    triangle (30,40+y1,50,60+y1,70,40+y1);
    triangle(50,40+y1,70,20+y1,90,40+y1);
    angulo += velocidad;
    x+=v2;
    if(x>width+desplazamiento){
      x=desplazamiento-150
    }
    
    document.oncontextmenu = function () {
    return false;
  }
  }
  
}
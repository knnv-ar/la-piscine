var desplazamiento = 420;
var angulo = 0.0;
var desplazamiento2 = 420;
var escalar = 40;
var velocidad2 = 0.05;
var velocidad3 = 0.05;


function setup() {
  let canvas = createCanvas(500, 600);
  canvas.parent('div-sketch');
  frameRate(30);
}

function draw() {  
  background(10);
  push()
  
  
  
  //ELLIPSES
  
    
  
    strokeWeight(5);
    stroke(0,0,255);
  
    fill(255,255,100);
    ellipse(150,80,150,150);//ellipse1
  
    stroke(random(255));
    fill(random(255),random(255),random(255));
  
  
    strokeWeight(5);
    stroke(255,255,0,100);
    line(75,70,150,5);
    line(75,70,150,155);
    line(150,155,225,80);
    line(150,5,225,80);
    stroke(0,0,255,100);
    line(75,70,225,80);
    line(150,5,150,155);
  
    stroke(0,0,255,255);
    fill(255,255,0);
    ellipse(150,80,75,75); //ellipse2
  
    strokeWeight(3);
    stroke(0,0,255,170);
    fill(255,255,0);
    ellipse(150,80,50,50);//ellipse3
    stroke(0,0,255,85);
    ellipse(150,80,25,25);
  
  
  //QUAD PRINCIPAL
  
    stroke(10);
    strokeWeight(15);
  
    fill(200);
    quad(150,200,160,500,360,500,360,200);
  
  //LÍNEAS DEL QUAD
    stroke(255);
    strokeWeight(2);
      //VERTICAL IZQ
    line(148,198,149,230);
    point(149,235);
    point(149,237);
    point(149,238);
    point(149,243);
    line(149,247,150,280);
    point(150,283);
    point(150,286);
    point(150,288);
    line(155,230,160,350);
    line(152,205,153,250);
    line(153,253,154,275);
  
    line(153,353,154,388);
  
    line(155,400,160,500);
    //vertical derecha
    strokeWeight(2);
    stroke(255);
    line(365,198,365,230);
    point(365,235);
    point(365,237);
    point(365,238);
    point(365,243);
    line(365,247,365,280);
    line(365,285,365,315);
    point(365,320);
    line(365,330,365,390);
    point(365,393);
    point(365,394);
    point(365,395);
    point(365,400);
    line(365,405,365,425);
    point(365,430);
    point(365,433);
    line(365,436,365,460);
    line(365,465,365,503);

    line(357,215,357,280);
    point(357,283);
    point(357,286);
    point(357,288);
    line(357,292,357,350);
    point(357,353);
    point(357,356);
    point(357,359);
    point(357,366);
    point(357,372);
    point(357,376);
    line(357,376,357,430);
    line(357,436,357,478);
    line(152,205,153,250);
    line(153,253,154,288);
    line(153,353,154,388);
    line(155,400,160,500);
    point(357,490);
    point(357,492);
    point(357,493);
    point(357,487);


    //horizontal arriba
    line(362,197,280,198);
    point(276,198);
    point(272,198);
    line(268,198,220,198);
    point(217,198);
    point(214,198);
    point(212,198);
    point(209,198);
    point(207,198);
    point(202,198);
    line(199,198,158,198);

    line(357,201,350,201);
    point(346,201);
    point(343,201);
    line(340,201,300,201);
    line(290,201,217,201);
    point(214,201);
    point(211,201);
    point(209,201);
    line(206,201,170,201);
    point(168,201);
    point(164,201);

    line(360,207,256,207);
    point(253,207);
    point(250,207);
    line(247,207,200,207);
    point(197,207);
    point(195,207);
    line(192,207,160,207);


    point(153,253);
    point(155,254);
    point(152,300);
    line(152,303,153,340);
    point(153,373);
    point(153,379);
    point(156, 390);

    point(160, 360);
    point(160, 365);

    line(161,370,165,500);

    //horizontal abajo
    point(171,495);
    line(175,495,255,495);
    line(260,495,264,495);
    point(268,495);
    point(272,495);
    line(276,495,315,495);
    line(320,495,349,495);

    line(169,499,199,499);  
    point(203,499);
    point(206,499);
    point(209,499);
    line(214,499,276,499);
    line(280,499,290,499);
    point(296,499);
    line(303,499,358,499);


    line(155,505,175,505);
    point(178,505);
    point(181,505);
    line(185,505,225,505);
    point(230,505);
    line(235,505,280,505);
    line(285,505,290,505);
    point(294,505);
    line(297,505,351,505);
    point(358,505);
  //TERMINA QUAD PRINCIPAL
  
     if(mouseIsPressed){
       background(255);
    stroke(0,0,255);
  fill(random(255),random(255),0);
  bezier(75,70,120,random(150),180,random(150),225,80);
       //cuadros
       strokeWeight(5);
    stroke(random(255));
       line(250,0,250,600);
    line(0,300,500,300);
       fill(248,243,053);
       quad(0,0,250,0,250,300,0,300);
       fill(247,094,037);
       
       quad(250,0,500,0,500,300,250,300);
       fill(255,120,0);
       quad(0,300,250,300,250,600,0,600);
       fill(255,035,1);
       quad(250,300,500,300,500,600,250,600);
       
       //relleno cuadros
    for(i=0;i<=25;i++){
      
      
      
        strokeWeight(10);
      stroke(255,122,0);
      
      point(random(x),random(maxY));      
      strokeWeight(1);
      fill(255,255,0);
      stroke(0,0,random(255));
      var x=250;
      var maxX=500;
      var y=0;
      var maxY=300;
      var maxmaxY=600;
      ellipse(random(x,maxX),random(y,maxY),random(20),random(20));
      
      stroke(0,random(255),0);
      square(random(x),random(maxY,maxmaxY),10);
      
      stroke(random(255),0,0);
      fill(236,124,38,random(255));
      triangle(random(x,maxX),random(maxY,maxmaxY),random(x,maxX),random(maxY,maxmaxY),random(x,maxX),random(maxY,maxmaxY)); 
     
      
      //triangle(random(x,maxX),random(maxY,maxmaxY),random(x,maxX),random(maxY,maxmaxY),random(x,maxX),random(maxY,maxmaxY));
      
      
     
      }
   
  }
  

  

  
  
  //PERSPECTIVAS CUADRADOS
  if(mouseIsPressed){
     //CUADRO 3
    var s= 'CIRCULO';
    stroke(0);
    fill(random(255),0,0)
    
    var q3=330;
    var q2=337;
    var q1=344;
    var q4=323;
    var q5=323;
    var q6=330;
    var q7=337;
    var q8=344;
    
    for(i=0; i< s.length;i++){
      
    
    textSize(random(1,15));
      
    
      text(s.charAt(i),50,q1);
      q1=q1+9;
      text(s.charAt(i),65,q2);
      q2=q2+12;
      text(s.charAt(i),80,q3);
      q3=q3+15;
      textSize(random(1,20));
      text(s.charAt(i),95,q4);
      q4=q4+18;
      text(s.charAt(i),110,q5);
      q5=q5+18;
      textSize(random(1,15));
      text(s.charAt(i),125,q6);
      q6=q6+15;
      text(s.charAt(i),140,q7);
      q7=q7+12;
      text(s.charAt(i),155,q8);
      q8=q8+9;
       }
     var d= 'RECTÁNGULO';
    
    var d1=450;
      stroke(0);
      
      fill(random(255),0,0)
      
      for(j=0;j< d.length;j++){
        textSize(random(1,30));
        
        text(d.charAt(j),125,d1);
        textSize(random(1,15));
        text(d.charAt(j),140,d1);
        text(d.charAt(j),155,d1);
        text(d.charAt(j),170,d1);
        text(d.charAt(j),185,d1);
        textSize(random(1,30));
        text(d.charAt(j),200,d1);
        d1=d1+15;
      }
    //FIN CUADRO 3
    //QUAD PRINCIPAL
    
    
    
    
     //CUADRO 2
    pop()
    
    quad(290,10,293,80,360,80,360,10);
    
    ellipse(370,180,70,185)
    
    //FINAL CUADRO2
    
   
    
    
   
    //CUADRO 1
    //ELLIPSES
  
    
  
    strokeWeight(5);
    stroke(0);
  
    fill(0);
    ellipse(150,80,150,150);//ellipse1
  
    stroke(random(255));
    fill(random(255),random(255),random(255));
  
  
    strokeWeight(5);
    stroke(255,255,0,100);
    line(75,70,150,5);
    line(75,70,150,155);
    line(150,155,225,80);
    line(150,5,225,80);
    stroke(0,0,255,100);
    line(75,70,225,80);
    line(150,5,150,155);
  
    stroke(45);
    fill(15);
    ellipse(150,80,75,75); //ellipse2
  
    strokeWeight(3);
    stroke(0,0,255,170);
    fill(30);
    ellipse(150,80,50,50);//ellipse3
    stroke(0,0,255,85);
    ellipse(150,80,25,25);
  
     //BEZIER DEL ELLIPSE
    stroke(0,0,255);
  fill(random(255));
  bezier(75,70,120,random(150),180,random(150),225,80);
  
  
  
   

    
    
    stroke(0);
    
    
  
  //segundo
    
    scale(0.5);
    
    strokeWeight(5);
    stroke(0);
  
    fill(255,0,0);
    ellipse(150,80,150,150);//ellipse1
  
    stroke(random(255));
    fill(random(255),random(255),random(255));
  
  
    strokeWeight(5);
    stroke(255,255,0,100);
    line(75,70,150,5);
    line(75,70,150,155);
    line(150,155,225,80);
    line(150,5,225,80);
    stroke(0,0,255,100);
    line(75,70,225,80);
    line(150,5,150,155);
  
    stroke(45);
    fill(15);
    ellipse(150,80,75,75); //ellipse2
  
    strokeWeight(3);
    stroke(0,0,255,170);
    fill(30);
    ellipse(150,80,50,50);//ellipse3
    stroke(0,0,255,85);
    ellipse(150,80,25,25);
  
     //BEZIER DEL ELLIPSE
    stroke(0,0,0);
  fill(random(255),0,0);
  bezier(75,70,120,random(150),180,random(150),225,80);
    
    
  //quad(150,200,mouseX,mouseY,360,500,360,200);
    fill(175,32,23,200);
    quad(150,200,160,500,360,500,360,200);
    //vertical izq
    stroke(0);
  strokeWeight(2);
    line(mouseX,mouseY,149,230);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,150,280);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,160,350);
  line(mouseX,mouseY,153,250);
  line(mouseX,mouseY,154,288);
  line(mouseX,mouseY,154,388);
  line(mouseX,mouseY,160,500);
    //vertical der
  strokeWeight(2);
  stroke(0);
  line(mouseX,mouseY,365,230);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,365,280);
  line(mouseX,mouseY,365,315);
  point(mouseX,mouseY);
  line(mouseX,mouseY,365,390);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,365,425);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,365,460);
  line(mouseX,mouseY,365,503);
  
  line(mouseX,mouseY,357,280);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,357,350);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,357,430);
  line(mouseX,mouseY,357,478);
  line(mouseX,mouseY,153,250);
  line(mouseX,mouseY,154,288);
  line(mouseX,mouseY,154,388);
  line(mouseX,mouseY,160,500);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  
  //horizontal arriba
  line(mouseX,mouseY,280,198);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,220,198);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,158,198);
  
  line(mouseX,mouseY,350,201);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,300,201);
  line(mouseX,mouseY,217,201);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,170,201);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  
  line(mouseX,mouseY,256,207);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,200,207);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,160,207);

  
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,153,340);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX, mouseY);
  
  point(mouseX, mouseY);
  point(mouseX, mouseY);
 
  line(mouseX,mouseY,165,500)
    
    //horizontal abajo
  point(mouseX,mouseY);
  line(mouseX,mouseY,255,495);
  line(mouseX,mouseY,264,495);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,315,495);
  line(mouseX,mouseY,349,495);
  
  line(mouseX,mouseY,199,499);  
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  point(mouseX,mouseY);
  line(mouseX,mouseY,499);
  line(mouseX,mouseY,290,499);
  point(mouseX,mouseY);
  line(mouseX,mouseY,358,499);
  
  
  line(mouseX,mouseY,175,505);
  point(mouseX);
  point(mouseX,mouseY);
  line(mouseX,mouseY,225,505);
  point(mouseX,mouseY);
  line(mouseX,mouseY,280,505);
  line(mouseX,mouseY,290,505);
  point(mouseX,mouseY);
  line(mouseX,mouseY,351,505);
  point(mouseX,mouseY);
    
    //FINAL CUADRO 1
    
    
   //CUADRO 4
    scale(1);
    translate(250,300);
    
    stroke(10);
    strokeWeight(15);
  
    fill(200);
    quad(150,200,160,500,360,500,360,200);
  
  //LÍNEAS DEL QUAD
    stroke(255);
    strokeWeight(2);
      //VERTICAL IZQ
    line(148,198,149,230);
    point(149,235);
    point(149,237);
    point(149,238);
    point(149,243);
    line(149,247,150,280);
    point(150,283);
    point(150,286);
    point(150,288);
    line(155,230,160,350);
    line(152,205,153,250);
    line(153,253,154,275);
  
    line(153,353,154,388);
  
    line(155,400,160,500);
    //vertical derecha
    strokeWeight(2);
    stroke(255);
    line(365,198,365,230);
    point(365,235);
    point(365,237);
    point(365,238);
    point(365,243);
    line(365,247,365,280);
    line(365,285,365,315);
    point(365,320);
    line(365,330,365,390);
    point(365,393);
    point(365,394);
    point(365,395);
    point(365,400);
    line(365,405,365,425);
    point(365,430);
    point(365,433);
    line(365,436,365,460);
    line(365,465,365,503);

    line(357,215,357,280);
    point(357,283);
    point(357,286);
    point(357,288);
    line(357,292,357,350);
    point(357,353);
    point(357,356);
    point(357,359);
    point(357,366);
    point(357,372);
    point(357,376);
    line(357,376,357,430);
    line(357,436,357,478);
    line(152,205,153,250);
    line(153,253,154,288);
    line(153,353,154,388);
    line(155,400,160,500);
    point(357,490);
    point(357,492);
    point(357,493);
    point(357,487);


    //horizontal arriba
    line(362,197,280,198);
    point(276,198);
    point(272,198);
    line(268,198,220,198);
    point(217,198);
    point(214,198);
    point(212,198);
    point(209,198);
    point(207,198);
    point(202,198);
    line(199,198,158,198);

    line(357,201,350,201);
    point(346,201);
    point(343,201);
    line(340,201,300,201);
    line(290,201,217,201);
    point(214,201);
    point(211,201);
    point(209,201);
    line(206,201,170,201);
    point(168,201);
    point(164,201);

    line(360,207,256,207);
    point(253,207);
    point(250,207);
    line(247,207,200,207);
    point(197,207);
    point(195,207);
    line(192,207,160,207);


    point(153,253);
    point(155,254);
    point(152,300);
    line(152,303,153,340);
    point(153,373);
    point(153,379);
    point(156, 390);

    point(160, 360);
    point(160, 365);

    line(161,370,165,500);

    //horizontal abajo
    point(171,495);
    line(175,495,255,495);
    line(260,495,264,495);
    point(268,495);
    point(272,495);
    line(276,495,315,495);
    line(320,495,349,495);

    line(169,499,199,499);  
    point(203,499);
    point(206,499);
    point(209,499);
    line(214,499,276,499);
    line(280,499,290,499);
    point(296,499);
    line(303,499,358,499);


    line(155,505,175,505);
    point(178,505);
    point(181,505);
    line(185,505,225,505);
    point(230,505);
    line(235,505,280,505);
    line(285,505,290,505);
    point(294,505);
    line(297,505,351,505);
    point(358,505);
  }
  
  
  ///FLOTANTES
  scale(1)
  fill(25);
    var y1 = desplazamiento + sin(angulo) * escalar;
     var y2 = desplazamiento + sin(angulo + 0.4) * escalar;
     var y3 = desplazamiento + sin(angulo + 0.8) * escalar;
     ellipse( 80, y1, 40, 40);
     ellipse(120, y2, 40, 40);
     ellipse(160, y3, 40, 40);
     angulo += velocidad2;

    var y11 = desplazamiento2 + sin(angulo) * escalar;
     var y22 = desplazamiento2 + sin(angulo + 0.4) * escalar;
     var y33 = desplazamiento2 + sin(angulo + 0.8) * escalar;

     triangle( 340, y11-20, 360, y11+20,320,y11-20);
     triangle(380, y22-150, 400,y22,360,y22);
     triangle(420, y33-(20), 440, y33,400,y33);
     angulo += velocidad3;
  
  
  
  
 
  
  
}

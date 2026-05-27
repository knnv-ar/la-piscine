//fluidez
let easing = 0.7;

//capa de puntos
let extensionPuntos = 470;
let contornoPuntos = 4;
let tonalidadPuntos = 75;
let cambioTonalidad = 20;
/*                                                    --------sogas------- 
*/
//primera (izquierda)
let sogas = 130;
let partidaSogas = 140;
let destinoSogas = 95;
let movimientoSogas = -1;
/*                                                    ------barriletes----- 
*/
let movimientoBarrileteI =  0.8;           
let movimientoBarrileteD =  0.8;
let direccionMovimientoBarrileteD = 1;
let direccionMovimientoBarrileteI = 1;
let velRotacion = -0.8

let barrileteX = 120; //                         base x para los barriletes
let costadoIzquierdoX = -35; //                  costado izquierdo del barrilete
let costadoDerechoX = 15; //                     costado derecho del barrilete
let limenI = -5; //                              punto liminal para el costado izquierdo
let alcanzadoLimenI = false;
let alcanzadoLimenD = false;
let limenD = -15; //                             punto liminal para el costado derecho
//                                               puntos de origen para detener el movimiento:
let origenCostadoIzquierdoX = -35;  
let origenCostadoDerechoX = 15;  
//                                               rotación de barriletes para simular viento 
let rotacionBarriletes = -5;
let rotacionMinima = -25;
let rotacionMaxima = 15;
/*                                                --------movimiento de ojos-------
*/
let origenOjoX = 372.5;
let origenOjoY = 397.5;
let origenOjo2X = 410;
let origenOjo2Y = 411.5;
let ojoX= 372.5;
let ojoY= 397.5;
let ojo2X = 410;
let ojo2Y = 411.5;
let movimientoOjo = 5;
let diferenciaMovimiento = -2;
let direccionX = 1;
let direccionY = 1;
let direccionX2 = 1;
let direccionY2 = 1;
let colorOjo= 20;


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);//                           ------------------fondo------------------
  
  /*                                         ---------iteración capa de puntos--------
  */
 for (let x = 40; x < extensionPuntos; x += 5) {
   for (let y = 40; y < extensionPuntos; y += 5) {
       stroke(tonalidadPuntos);
      strokeWeight(contornoPuntos);
       point(x, y);
       tonalidadPuntos += cambioTonalidad;
       if (tonalidadPuntos > 155) {
         tonalidadPuntos = 75;
       }
     }
   }
   /*                                              -----------atributos---------
   */                                                 

  noFill();
  strokeWeight(3);
  stroke(75);
  strokeCap(ROUND);
  strokeJoin(ROUND)
  rectMode(CORNERS);
  rect(40, 40, 470, 470);
  stroke(0);

  /*                                       ----------figuras vertex barriletes--------- 
  */
  
  let escalaBarrilete = 1;
  let barrileteY = 280;
  
 for(let i = 1; i <= 3; i ++){
  push();
  strokeWeight(4)
  translate(barrileteX * escalaBarrilete, barrileteY); 
  rotate(radians(rotacionBarriletes)); 
  beginShape(TRIANGLE_STRIP);
  vertex(0, 0); 
  vertex(costadoIzquierdoX, -38);
  vertex(-20, -80);
  vertex(costadoDerechoX, -38);
  vertex(0, 0);
  endShape();
  pop();
  if(escalaBarrilete == 1.67 && barrileteY == 180){
  escalaBarrilete = 2.5;
  barrileteY = 120;
  } 
   else if (escalaBarrilete != 2.5 && barrileteY !=120){
  escalaBarrilete += 0.67;
  barrileteY -= 100 } 
}
  
  /*                                           -----------Sogas barriletes-------- 
  */
  
  /*1*/ bezier(40, 469, 80, 440, sogas + 10, 370, 120, 280);
  /*2*/ bezier(40, 469, 150, 440, sogas * 2, 330, 200, 180);
  /*3*/ bezier(40, 469, 290, 440, sogas * 3, 330, 300, 120);

  /*                                        ------------movimiento barriletes--------- 
  */

  /*                                                         --soga-- 
  */
 sogas += movimientoSogas;
  if (sogas < destinoSogas || sogas > partidaSogas) {
    movimientoSogas = -movimientoSogas;
  }
  /*                                                   --inclinación viento--
  */
  rotacionBarriletes -= velRotacion ;
  if (rotacionBarriletes <= rotacionMinima || rotacionBarriletes >= rotacionMaxima){
    velRotacion = -velRotacion;
  }
  

  /*                                             --liminalidad al pasar el mouse-- 
  */
  if ((mouseX >= 57 && mouseX <= 330) && (mouseY >= 40 && mouseY <= 285)) {
   
    /*                                                 -vértice izquierdo- 
    */ 
    if (!alcanzadoLimenI) {
      costadoIzquierdoX += movimientoBarrileteI * direccionMovimientoBarrileteI  ;
      if (costadoIzquierdoX >= limenI) {
        alcanzadoLimenI = true;
        direccionMovimientoBarrileteI = -direccionMovimientoBarrileteI; // invierte dirección
      }
    } else {
      costadoIzquierdoX += movimientoBarrileteI * direccionMovimientoBarrileteI  ;
      if (costadoIzquierdoX >= limenI || costadoIzquierdoX <= limenD) {
       direccionMovimientoBarrileteI = -direccionMovimientoBarrileteI; // invierte dirección al alcanzar limen
      }
    }

    /*                                                  -vértice derecho- 
    */
    if (!alcanzadoLimenD) {
      costadoDerechoX -= movimientoBarrileteD * direccionMovimientoBarrileteD ;
      if (costadoDerechoX <= limenD) {
        alcanzadoLimenD = true;
        direccionMovimientoBarrileteD = -direccionMovimientoBarrileteD;
      }
    } else {
      costadoDerechoX -= movimientoBarrileteD  *  direccionMovimientoBarrileteD ;
      if (costadoDerechoX <= limenD || costadoDerechoX >= limenI) {
       direccionMovimientoBarrileteD  = -direccionMovimientoBarrileteD ;
      }
    }
    
    /*                                               --movimiento de ojos--
    */
    ojoX += movimientoOjo * direccionX ;
    if (ojoX > 522  || ojoX < (-10) ){
      direccionX = -direccionX;
     
    }
    ojoY += (movimientoOjo * diferenciaMovimiento) * direccionY;
    if(ojoY > 535  || ojoY < (-23) ){
      direccionY = -direccionY;
      
    }
    
     ojo2X += movimientoOjo * direccionX2 ;
    if (ojo2X > 522  || ojo2X < -10 ){
      direccionX2 = -direccionX2;
     
    }
    ojo2Y += (movimientoOjo * diferenciaMovimiento ) * direccionY2;
    if(ojo2Y > 535  || ojo2Y < -23 ){
      direccionY2 = -direccionY2;
      
    }
    
    colorOjo = random(150, 255)
    
    
     
    /*                                                --vuelve a su lugar--
    */
  } else {
    /*                                                      -vértices-
    */
    alcanzadoLimenI = false;
    alcanzadoLimenD = false;
    let vueltaBarrileteI = origenCostadoIzquierdoX - costadoIzquierdoX;
    let vueltaBarrileteD = origenCostadoDerechoX - costadoDerechoX;
    costadoIzquierdoX += vueltaBarrileteI * (easing - 0.65);
    costadoDerechoX += vueltaBarrileteD * (easing - 0.65);

    /*                                                        -ojos-
    */                                                 

  let vueltaOjoY = origenOjoY - ojoY;
  let vueltaOjoX = origenOjoX - ojoX;
  ojoX += vueltaOjoX * (easing - 0.62);
  ojoY += vueltaOjoY * (easing - 0.62);
  let vueltaOjo2X = origenOjo2X - ojo2X;
  let vueltaOjo2Y = origenOjo2Y - ojo2Y;
  ojo2X += vueltaOjo2X * (easing - 0.62);
  ojo2Y += vueltaOjo2Y * (easing - 0.62);
  colorOjo = 20 // reestablecimiento color de ojos
  //reestablecimiento de direcciones
  if(direccionX == direccionX2){
      direccionX2 = -direccionX2; 
    }
  if(direccionMovimientoBarrileteI < 0){
      direccionMovimientoBarrileteI = -direccionMovimientoBarrileteI;
    }
 if(direccionMovimientoBarrileteD < 0){
     direccionMovimientoBarrileteD = -direccionMovimientoBarrileteD;
   }
   
  }
  /*                                                         -------Ramona------
  */
  
  /*-----cara-----*/
  push()
  ellipseMode(CENTER)
  fill(colorOjo)
  strokeWeight(1)
  stroke(150)
  ellipse(ojoX,ojoY,9,9)
  ellipse(ojo2X,ojo2Y,9,9)
  pop()
  //CEJAS
  line(403,395,433,405)
  line(387,390,365,380)
  //OJOS
  bezier(365,398,350,400,415,415,370,390) // ojo 1420,422 375,395
  bezier(420,422,405,417,380,395,424,411) // ojo 2
  //NARIZ
  strokeJoin(ROUND)
  line(388,391,392,401)//superior
  line(393,403,378,416) //media
  line(378,416,382,422) //inferior
  //LINEAS CARA
  bezier(370,376,367,370,345,420,367,457) // izquierda
  bezier(435,430,425,438,390,460,367,457) // derecha
  //LINEAS PELO
  bezier(410,355,400,370,440,405,450,412); // derecha
  bezier(410,355,350,330,335,400,332,410); // izquierda
  bezier(332,410,340,440,310,470,300,455); // izquierda inferior
  bezier(300,455,300,465,300,470,303,470); // cierre izquierda
  bezier(390,350,395,345,440,345,450,365); // superior 1
  bezier(450,365,460,362,471,373,470,375); // superior 2
  bezier(442,406,450,406,445,436,435,436); // inferior derecha 1
  bezier(435,436,430,450,435,465,438,470); // inferior derecha 2
  //LINEAS CUELLO
  line(370,463,370,470);
  bezier(400,455,397,460,400,465,400,470);
  /*                                         LINEAS FUERA DEL CUADRO
  */
  stroke(75)
  //CUELLO
  line(370,470,370,477)
  bezier(400,470,401,470,400,482,415,486);
  //HOMBRO
  bezier(415,486,404,485,480,498,475,510); 
  //PECHO
  bezier(328,493,274,545,400,566,380,507); //izquierdo
  bezier(444,504,490,554,371,570,390,507); // derecho
  //PELO
  bezier(301.5,472,303,485,320,502,321,497) //cierre izquierdo
  bezier(438,470,438,480,450,490,460,498) //cierre derecho inferior
  bezier(470,373,470,376,508,387,475,505) //cierre derecho superior
  
}
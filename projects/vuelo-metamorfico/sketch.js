//TP1-Patricia Fernández Girado
//Artes Multimediales 1- Cat. Lacabanne

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');}

function draw() {
  background(255);
 
  //color y forma del suelo
  fill(0);
  rect (0, 400, 512, 400)
  
  //tallo
  stroke(0)
  strokeWeight(3);
  bezier(161, 219, 140, 279, 177, 344, 156, 419);
  
  //CENTRO DE LA FLOR
  stroke(0)
  strokeWeight(20);
  point(161,219);
  
  //pelos-lineas largas flor
  strokeWeight(1);
  stroke(0)
  line(161, 167, 161, 267);
  line(111, 218, 211, 218);
  line(126, 254, 197, 183);
  line(124, 182, 196, 253);
  line(138, 171, 180, 263);
  line(181, 171, 140, 263);
  line(114, 200, 206, 237);
  line(206, 200, 114, 237);
  
  //pelos-lineas cortas flor
  stroke(0)
  line(167, 184, 152, 251);
  line(181, 189, 141, 246);
  line(190, 199, 132, 236);
  line(194, 211, 127, 225);
  line(194, 225, 127, 211);
  line(190, 238, 132, 199);
  line(180, 246, 141, 189);
  line(167, 252, 152, 184);
  
  //puntos grandes flor
  stroke(150)
  strokeWeight(10)
  point(161, 167);
  point(161, 267);
  point(111, 218);
  point(211, 218);
  point(126, 254);
  point(197, 183);
  point(124, 182);
  point(197, 183);
  point(124, 182);
  point(196, 251);
  point(138, 171);
  point(180, 263);
  point(181, 171);
  point(140, 263);
  point(114, 200);
  point(115, 237);
  point(206, 200);
  point(206, 237);
  
  //puntos chicos flor
  stroke(200);
  strokeWeight(7);
  point(167, 184);
  point(152, 251);
  point(181, 189);
  point(141, 246);
  point(190, 199);
  point(132, 236);
  point(194, 211);
  point(127, 225);
  point(194, 225);
  point(127, 211);
  point(190, 238);
  point(132, 199);
  point(180, 246);
  point(141, 189);
  point(167, 252);
  point(152, 184);
 
  //pelos-lineas voladores
  stroke(0);
  strokeWeight(1);
  line(210, 160, 229, 138);
  line(229, 192, 259, 186);
  line(260, 209, 284, 209);
  line(195, 141, 195, 102);
  line(260, 145, 276, 121);
  line(293, 161, 322, 151);
  ellipse(195, 136, 3,10);
  ellipse(260, 209, 10, 3);
  
  //parte inferior de pelos voladores
  strokeWeight(3);
  strokeCap(ROUND);
  line( 214, 156, 209, 162);
  line(223, 192, 234, 191);
  line(258, 146, 262, 142);
  line(290, 163, 297, 160);
  
  //parte superior de pelos voladores
  //punto grande
  stroke(150);
  strokeWeight(10);
  point(195, 104);
  
  //punto chico
  stroke(200);
  strokeWeight(7);
  point(284, 209);
  
  //puntos abriendose
  noStroke();
  strokeWeight(1);
  fill(150);
  stroke(150);
  arc(228, 139, 10, 10, 0, 350);
  arc(259, 186, 10, 10, 26, 350);
  
  strokeWeight(3);
  arc(276, 120, 10, 10, 0, 350);
  
  //comienzo de metamorfosis
  strokeWeight(2);
  line(316 ,153, 327, 149);
  line(316, 153, 319, 142);
  line(316, 153, 327, 156);
  
  line(272, 73, 289, 59);
  line(272, 73, 272, 51);
  line(272, 73, 293, 73);
  
  line(371, 195, 393, 183);
  line(371, 195, 376, 167 );
  line(371, 195, 396, 202);
  
  line(338, 115, 347, 109);
  line(338, 115, 335, 90);
  line(338, 115, 358, 128);
  
  line(317, 46, 315, 18);
  line(317, 46, 343, 60);
  
  //metamorfosis
  stroke(110);
  strokeWeight(3);
  
  line(402,161,423,187);
  line(328,67, 357,90);
 
  
  
  noFill();
  ellipse(399, 143, 20, 40);
  ellipse(377, 92, 40, 10);
  
  noStroke();
  fill(255);
  rect(383, 116, 19, 50);
  rect(356,91, 50, 19);
  
  
  //pájaro-alas
  stroke(0)
  strokeWeight(3);
  fill(0);
  curveTightness(-3);
  strokeWeight(7)
  curve(390,78,373,30,422,78, 410,78);
  curve( 448,127 ,478 , 127 , 422, 78,468 ,127 );
   
  //cola del pájaro
  noStroke();
  fill(0);
  triangle(400,77,423,72, 420,105);
  fill(0);
  
  //cabeza del pájaro
  stroke(0);
  strokeWeight(15)
  point(421,75)
  
  
  
  

}

//para que no se abra el menú del navegador
document.oncontextmenu = function() {
  return false;
}
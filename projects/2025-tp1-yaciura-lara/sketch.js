function setup() {

  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  stroke(255);

  let mx = mouseX / 150;

  // Línea 1
  let dx1 = random(-mx, mx);
  let dy1 = random(-mx, mx);
  let dx2 = random(-mx, mx);
  let dy2 = random(-mx, mx);
  line(120 + dx1, 405 + dy1, 275 + dx2, 80 + dy2);

  // Línea 2
  dx1 = random(-mx, mx);
  dy1 = random(-mx, mx);
  dx2 = random(-mx, mx);
  dy2 = random(-mx, mx);
  line(145 + dx1, 415 + dy1, 277 + dx2, 80 + dy2);

  // Línea 3
  dx1 = random(-mx, mx);
  dy1 = random(-mx, mx);
  dx2 = random(-mx, mx);
  dy2 = random(-mx, mx);
  line(175 + dx1, 425 + dy1, 279 + dx2, 80 + dy2);

  // Línea 4
  dx1 = random(-mx, mx);
  dy1 = random(-mx, mx);
  dx2 = random(-mx, mx);
  dy2 = random(-mx, mx);
  line(200 + dx1, 435 + dy1, 281 + dx2, 80 + dy2);

  // Línea 5
  dx1 = random(-mx, mx);
  dy1 = random(-mx, mx);
  dx2 = random(-mx, mx);
  dy2 = random(-mx, mx);
  (255 + dx1, 445 + dy1, 284 + dx2, 82 + dy2);
  
  // Línea 6
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(255 + dx1, 445 + dy1, 284 + dx2, 82 + dy2);

  // Línea 7
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(280 + dx1, 445 + dy1, 286 + dx2, 83 + dy2);

  // Línea 8
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(300 + dx1, 440 + dy1, 288 + dx2, 84 + dy2);

  // Línea 9
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(325 + dx1, 432 + dy1, 289 + dx2, 85 + dy2);

  // Línea 10
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx);
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(310 + dx1, 170 + dy1, 291 + dx2, 86 + dy2);

  // Línea 11
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(315 + dx1, 160 + dy1, 293 + dx2, 87 + dy2);

  // Línea 12
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(320 + dx1, 150 + dy1, 295 + dx2, 89 + dy2);

  // Línea 13
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(320 + dx1, 135 + dy1, 298 + dx2, 90 + dy2);

  // Línea 14
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx);
  dy2 = random(-mx, mx);
  line(320 + dx1, 120 + dy1, 300 + dx2, 91 + dy2);

  // Línea 11 p2
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(311 + dx1, 173 + dy1, 323 + dx2, 243 + dy2);

  // Línea 11 p4
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(343 + dx1, 420 + dy1, 323 + dx2, 245 + dy2);

  // Línea 12 p2
  dx1 = random(-mx, mx);
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(316 + dx1, 164 + dy1, 337 + dx2, 235 + dy2);

  // Línea 12 p3
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(337 + dx1, 234 + dy1, 357 + dx2, 359 + dy2);

  // Línea 12 p4
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(365 + dx1, 410 + dy1, 357 + dx2, 360 + dy2);

  // Línea 13 p2
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(322 + dx1, 152 + dy1, 345 + dx2, 224 + dy2);

  // Línea 13 p3
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(346 + dx1, 229 + dy1, 360 + dx2, 300 + dy2);

  // Línea 13 p4
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(377 + dx1, 400 + dy1, 360 + dx2, 300 + dy2);

  // Línea 14 pt2
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(350 + dx1, 210 + dy1, 320 + dx2, 135 + dy2);

  // Línea 14 pt3
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(365 + dx1, 270 + dy1, 350 + dx2, 212 + dy2);

  // Línea 14 pt4
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(379 + dx1, 329 + dy1, 365 + dx2, 270 + dy2);

  // Línea 14 pt5
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(390 + dx1, 385 + dy1, 379 + dx2, 330 + dy2);

  // Línea 15 pt2
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(320 + dx1, 120 + dy1, 355 + dx2, 190 + dy2);

  // Línea 15 pt3
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(355 + dx1, 190 + dy1, 375 + dx2, 250 + dy2);

  // Línea 15 pt4
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(375 + dx1, 250 + dy1, 390 + dx2, 310 + dy2);

  // Línea 15 pt5
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(405 + dx1, 365 + dy1, 390 + dx2, 310 + dy2);

  // Línea 16
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(342 + dx1, 140 + dy1, 303 + dx2, 90 + dy2);

  // Línea 16 pt2
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(343 + dx1, 141 + dy1, 375 + dx2, 210 + dy2);

  // Línea 16 pt3
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(376 + dx1, 212 + dy1, 399 + dx2, 290 + dy2);

  // Línea 16 pt4
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(415 + dx1, 350 + dy1, 399 + dx2, 291 + dy2);

    // Línea 17
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(344 + dx1, 130 + dy1, 310 + dx2, 93 + dy2);

  // Línea 17 pt2
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(344 + dx1, 130 + dy1, 380 + dx2, 190 + dy2);

  // Línea 17 pt3
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(410 + dx1, 270 + dy1, 380 + dx2, 190 + dy2);

  // Línea 17 pt4
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(425 + dx1, 320 + dy1, 410 + dx2, 270 + dy2);

  // Línea 18
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(346 + dx1, 120 + dy1, 320 + dx2, 99 + dy2);

  // Línea 18 pt2
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(346 + dx1, 120 + dy1, 380 + dx2, 169 + dy2);

  // Línea 18 pt3
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(410 + dx1, 230 + dy1, 380 + dx2, 170 + dy2);

  // Línea 19 pt4
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(435 + dx1, 300 + dy1, 410 + dx2, 230 + dy2);

  // Línea 19
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(413 + dx1, 200 + dy1, 346 + dx2, 115 + dy2);

  // Línea (sin número, de tu comentario)
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(443 + dx1, 270 + dy1, 415 + dx2, 204 + dy2);

  // Línea 20
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(415 + dx1, 190 + dy1, 345 + dx2, 110 + dy2);

  // Línea 20 pt2
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(449 + dx1, 245 + dy1, 415 + dx2, 190 + dy2);

  // Línea 21
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(450 + dx1, 215 + dy1, 358 + dx2, 118 + dy2);

  // Línea 22
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(445 + dx1, 195 + dy1, 363 + dx2, 119 + dy2);

  // Línea 23
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(444 + dx1, 180 + dy1, 367 + dx2, 120 + dy2);

  // Línea 24
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(439 + dx1, 166 + dy1, 370 + dx2, 120 + dy2);

  // Línea 25
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(430 + dx1, 152 + dy1, 370 + dx2, 120 + dy2);

  // Línea extra final
  dx1 = random(-mx, mx); 
  dy1 = random(-mx, mx); 
  dx2 = random(-mx, mx); 
  dy2 = random(-mx, mx);
  line(420 + dx1, 139 + dy1, 370 + dx2, 119 + dy2);
/////////
  stroke(255);
  let my = mouseY /150
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(175 + dy1, 38 + dx1, 370 + dy2, 120 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(160 +dy1, 40 + dx1, 370 + dy2, 120 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(150 + dy1, 44 + dx1, 370 + dy2, 120 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(140 + dy1, 49 + dx1, 370 + dy2, 120 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(130 + dy1, 54 + dx1, 370 + dy2, 120 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(120 + dy1, 59 + dx1, 370 + dy2, 120 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(170 + dy1, 78 + dx1, 345 + dy2, 115 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(110 + dy1, 68 + dx1, 170 + dy2, 78 + dx2); //linea chica
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(170 + dy1, 83 + dx1, 345 + dy2, 117 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(100 + dy1, 77 + dx1, 171 + dy2, 84 + dx2); //linea chica
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(165 + dy1, 90 + dx1, 340 + dy2, 120 + dx2);
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(90 + dy1, 85 + dx1, 165 + dy2, 90 + dx2); //linea chica
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(200 + dy1, 104 + dx1, 340 + dy2, 126 + dx2); //linea atras 1
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(150 + dy1, 99 + dx1, 198 + dy2 , 104 + dx2); //linea medio
  
  dy1 =random(-my, my);
  dx1 =random(-my, my);
  dy2 =random(-my, my);
  dx2 =random(-my, my);
  line(80 + dy1, 95 + dx1, 145 + dy2, 97 + dx2)
  
 dy1 = random(-my, my);
 dx1 = random(-my, my);
 dy2 = random(-my, my);
 dx2 = random(-my, my);
  line(194 + dx1, 114 + dy1, 340 + dx2, 133 + dy2); //linea atras 2

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(140 + dx1, 110 + dy1, 190 + dx2, 114 + dy2); //linea medio 2

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(70 + dx1, 110 + dy1, 137 + dx2, 109 + dy2); //linea chica 3

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(184 + dx1, 124 + dy1, 340 + dx2, 143 + dy2); //linea atras 4

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(135 + dx1, 120 + dy1, 182 + dx2, 123 + dy2); //linea medio 4

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(60 + dx1, 124 + dy1, 134 + dx2, 120 + dy2); //linea chica 4

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(167 + dx1, 134 + dy1, 310 + dx2, 152 + dy2); //linea atras 5

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(103 + dx1, 133 + dy1, 165 + dx2, 133 + dy2); //linea medio 5

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(55 + dx1, 140 + dy1, 100 + dx2, 133 + dy2); //linea chica 5

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(147 + dx1, 149 + dy1, 292 + dx2, 155 + dy2); //linea atras 6

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(98 + dx1, 150 + dy1, 145 + dx2, 149 + dy2); //linea medio 6

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(45 + dx1, 160 + dy1, 95 + dx2, 151 + dy2); //linea chica 6

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(127 + dx1, 165 + dy1, 280 + dx2, 160 + dy2); //linea atras 7

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(80 + dx1, 169 + dy1, 125 + dx2, 165 + dy2); //linea medio 7

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(35 + dx1, 180 + dy1, 81 + dx2, 169 + dy2); //linea chica 7

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(107 + dx1, 188 + dy1, 270 + dx2, 169 + dy2); //linea atras 8

  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(25 + dx1, 206 + dy1, 110 + dx2, 188 + dy2); //linea medio 8

  
  
//lineas horizontales
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(120 + dy1,320 + dx1,290 + dy2,340 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(25 + dy1,290 + dx1,120 + dy2,320 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(130 + dy1,340 + dx1,295 + dy2,345 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(70 + dy1,330 + dx1,130 + dy2,340 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(30 + dy1,319 + dx1 ,70 + dy2,330 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(120 + dy1,355 + dx1,305 + dy2,350 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(70 + dy1,350 + dx1,120 + dy2,355 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(35 + dy1,340 + dx1,70 + dy2,350 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(120 + dy1,370 + dx1,325 + dy2,355 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(70 + dy1,365 + dx1,120 + dy2,370 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(45 + dy1,360 + dx1,70 + dy2,365 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(220 + dy1,378 + dx1,400 + dy2,355 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(110 + dy1,385 + dx1,220 + dy2,378 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(50 + dy1 ,375 + dx2,110 + dy2,385 + dx1);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(260 + dy1,385 + dx2,400 + dy2,355 + dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(185 + dy1,395 + dx1,260 + dy2,385 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(110 + dy1,400 + dx1,184 + dy2,395 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(60 + dy1,395 + dx1,110 + dy2,400 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(280 + dy1,390 + dx1,420 + dy2,350 +dx2);
  
  dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(210 + dy1,405 + dx1,280 + dy2,390 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(140 + dy1,415+ dx1,210 + dy2,405 +dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(70 + dy1,420 + dx1,140 + dy2,415 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(220 + dy1,420 + dx1,420 + dy2,350 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(150 + dy1,430 + dx1,220 + dy2,420 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(85 + dy1,435 + dx1,150 + dy2,430 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(225 + dy1,430 + dx1,420 + dy2,350 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(160 + dy1,445 + dx1,225 + dy2,430 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(100 + dy1,450 + dx1,160 + dy2,445 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(240 + dy1,440 + dx1,420 + dy2,350 +dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(190 + dy1,455 + dx1,240 + dy2,440 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(120 + dy1,465 + dx1,190 + dy2,455 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(250 + dy1,450 + dx1,420 + dy2,350 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(190 + dy1,470 + dx1,250 + dy2,450 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(140 + dy1,480 + dx1,190 + dy2,470 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(255 + dy1,460 + dx1,420 + dy2,350 + dx1);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(170 + dy1,487 + dx1,255 + dy2,460 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(255 + dy1,470 + dx1,420 + dy2,350 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(190 + dy1,492 + dx1,255 + dy2,470 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(270 + dy1,469 + dx1,380 + dy2,380 + dx2);
  
    dy1 = random(-my, my);
  dx1 = random(-my, my);
  dy2 = random(-my, my);
  dx2 = random(-my, my);
  line(220 + dy1,495 + dx1,270 + dy2,469 + dx2);
  
  
  
 //parte de arriba
  dx1 = random(-mx, mx);
  dy1 = random(-mx, mx);
  dx2 = random(-mx, mx);
  dy2 = random(-mx, mx);
  line(120 + dx1,107 + dy1,275 + dx2,432 + dy2);
  
  line(145 + dx1,97 + dy1,277 + dx2,432 + dy2);
  line(175 + dx1,87 + dy1,279 + dx2,432 + dy2);
 
  
  line(175 + dx1, 87 + dy1, 279 + dx2, 432 + dy2);
  line(200 + dx1, 77 + dy1, 281 + dx2, 432 + dy2);
  line(225 + dx1, 72 + dy1, 283 + dx2, 431 + dy2);
  line(255 + dx1, 67 + dy1, 284 + dx2, 430 + dy2);
  line(278 + dx1, 67 + dy1, 286 + dx2, 429 + dy2);
  line(300 + dx1, 72 + dy1, 288 + dx2, 428 + dy2);
  line(325 + dx1, 80 + dy1, 289 + dx2, 427 + dy2);
  line(310 + dx1, 342 + dy1, 291 + dx2, 426 + dy2);
  line(315 + dx1, 352 + dy1, 293 + dx2, 425 + dy2);
  line(320 + dx1, 362 + dy1, 295 + dx2, 423 + dy2);
  line(320 + dx1, 387 + dy1, 298 + dx2, 422 + dy2);
  line(320 + dx1, 399 + dy1, 300 + dx2, 421 + dy2);
  line(311 + dx1, 339 + dy1, 323 + dx2, 269 + dy2);
  line(343 + dx1, 85 + dy1, 323 + dx2, 267 + dy2);
  line(316 + dx1, 348 + dy1, 337 + dx2, 277 + dy2);
  line(337 + dx1, 278 + dy1, 357 + dx2, 153 + dy2);
  line(365 + dx1, 92 + dy1, 357 + dx2, 152 + dy2);
  line(322 + dx1, 360 + dy1, 345 + dx2, 288 + dy2);
  line(346 + dx1, 283 + dy1, 360 + dx2, 212 + dy2);
  line(377 + dx1, 100 + dy1, 360 + dx2, 212 + dy2);
  line(350 + dx1, 302 + dy1, 320 + dx2, 377 + dy2);
  line(365 + dx1, 242 + dy1, 350 + dx2, 300 + dy2);
  line(379 + dx1, 183 + dy1, 365 + dx2, 242 + dy2);
  line(390 + dx1, 117 + dy1, 379 + dx2, 182 + dy2);
  line(320 + dx1, 392 + dy1, 355 + dx2, 322 + dy2);
  line(355 + dx1, 322 + dy1, 375 + dx2, 262 + dy2);
  line(375 + dx1, 262 + dy1, 390 + dx2, 202 + dy2);
  line(405 + dx1, 120 + dy1, 390 + dx2, 202 + dy2);
  line(342 + dx1, 372 + dy1, 303 + dx2, 422 + dy2);
  line(343 + dx1, 371 + dy1, 375 + dx2, 302 + dy2);
  line(376 + dx1, 300 + dy1, 399 + dx2, 222 + dy2);
  line(420 + dx1, 130 + dy1, 399 + dx2, 221 + dy2);
  line(340 + dx1, 382 + dy1, 310 + dx2, 416 + dy2);
  line(340 + dx1, 382 + dy1, 380 + dx2, 322 + dy2);
  line(410 + dx1, 242 + dy1, 380 + dx2, 322 + dy2);
  line(435 + dx1, 150 + dy1, 410 + dx2, 242 + dy2);
  line(336 + dx1, 392 + dy1, 320 + dx2, 413 + dy2);
  line(336 + dx1, 392 + dy1, 380 + dx2, 333 + dy2);
  line(410 + dx1, 282 + dy1, 380 + dx2, 332 + dy2);
  line(445 + dx1, 190 + dy1, 410 + dx2, 282 + dy2);
  line(405 + dx1, 312 + dy1, 336 + dx2, 397 + dy2);
  line(443 + dx1, 242 + dy1, 406 + dx2, 308 + dy2);
  line(409 + dx1, 322 + dy1, 345 + dx2, 393 + dy2);
  line(449 + dx1, 267 + dy1, 409 + dx2, 322 + dy2);
  line(440 + dx1, 297 + dy1, 358 + dx2, 384 + dy2);
  line(435 + dx1, 317 + dy1, 363 + dx2, 383 + dy2);
  line(424 + dx1, 332 + dy1, 367 + dx2, 382 + dy2);
  
  


}
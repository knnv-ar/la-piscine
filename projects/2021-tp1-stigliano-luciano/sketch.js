function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(0.7);
}

function draw() {
  background(random(height));
  
  // FONDO
  smooth();
  strokeWeight(1);
  stroke(random(height));

 
  //elipses
  
  push();
  for (var elipses=random(height);elipses<=512;elipses+=7){
    stroke(3)
    // un solo random
    ellipse(elipses,33,240,3);
    ellipse(22,elipses,100,1);
    ellipse(30,20,elipses,4);
    ellipse(13,34,45,elipses);
    // dos randoms
    ellipse(elipses,elipses,46,9);
    ellipse(elipses,66,elipses,8);
    ellipse(elipses,78,86,elipses);
    ellipse(95,elipses,elipses,7);
    ellipse(37,elipses,54,elipses);
    ellipse(82,12,elipses,elipses);
    // tres randoms
    ellipse(elipses,elipses,elipses,1);
    ellipse(elipses,elipses,45,elipses);
    ellipse(elipses,70,elipses,elipses);
    ellipse(58,elipses,elipses,elipses);
    // cuatro randoms
    ellipse(elipses,elipses,elipses,elipses);
  }

    //triangulos
  
  push();
  for (var triangulos=random(height);triangulos<=512;triangulos+=3){
    // un random
    triangle(triangulos,499,200,300,44,159);
    triangle(23,triangulos,70,30,234,115);
    triangle(77,9,triangulos,300,440,328);
    triangle(126,512,200,triangulos,4,401);
    triangle(180,333,200,300,triangulos,278);
    triangle(241,295,170,0,4,triangulos);
    // dos randoms
    triangle(triangulos,triangulos,18,215,190,201);
    triangle(triangulos,365,triangulos,44,501,203);
    triangle(triangulos,221,12,triangulos,90,496);
    triangle(triangulos,333,222,11,triangulos,0);
    triangle(triangulos,373,301,294,111,triangulos);
    triangle(368,triangulos,triangulos,120,333,290);
    triangle(512,triangulos,500,triangulos,400,23);
    triangle(169,triangulos,34,99,triangulos,300);
    triangle(98,triangulos,39,58,91,triangulos);
    triangle(88,76,triangulos,triangulos,209,401);
    triangle(19,397,triangulos,503,triangulos,225);
    triangle(444,385,triangulos,175,394,triangulos);
    triangle(210,213,270,triangulos,triangulos,327);
    triangle(155,195,159,triangulos,72,triangulos);
    triangle(506,60,50,65,triangulos,triangulos);
    // tres randoms
    triangle(triangulos,triangulos,triangulos,345,453,504);
    triangle(triangulos,triangulos,290,triangulos,54,45);
    triangle(triangulos,triangulos,350,402,triangulos,207);
    triangle(triangulos,triangulos,209,178,97,triangulos);
    triangle(triangulos,388,triangulos,triangulos,90,24);
    triangle(triangulos,299,triangulos,77,triangulos,100);
    triangle(triangulos,102,triangulos,307,76,triangulos);
    triangle(triangulos,59,105,triangulos,triangulos,500);
    triangle(triangulos,177,73,triangulos,197,triangulos);
    triangle(triangulos,90,101,488,triangulos,triangulos);
    triangle(108,triangulos,triangulos,triangulos,407,209);
    triangle(408,triangulos,triangulos,204,triangulos,106);
    triangle(301,triangulos,triangulos,79,108,triangulos);
    triangle(88,triangulos,290,triangulos,triangulos,400);
    triangle(122,triangulos,376,triangulos,450,triangulos);
    triangle(45,triangulos,500,233,triangulos,triangulos);
    triangle(197,466,triangulos,triangulos,triangulos,140);
    triangle(297,297,triangulos,triangulos,388,triangulos);
    triangle(90,450,450,triangulos,triangulos,triangulos);
    // Cuatro Randoms
    triangle(triangulos,triangulos,triangulos,triangulos,90,512);
    triangle(triangulos,triangulos,triangulos,87,triangulos,102);
    triangle(triangulos,triangulos,394,triangulos,triangulos,234);
    triangle(triangulos,290,triangulos,triangulos,triangulos,499);
    triangle(345,triangulos,triangulos,triangulos,triangulos,219);
    triangle(triangulos,triangulos,triangulos,197,43,triangulos);
    triangle(triangulos,triangulos,233,43,triangulos,triangulos);
    triangle(triangulos,421,241,triangulos,triangulos,triangulos);
    triangle(90,192,triangulos,triangulos,triangulos,triangulos);
    // cinco randoms
triangle(triangulos,triangulos,triangulos,triangulos,triangulos,333);
triangle(triangulos,triangulos,triangulos,triangulos,94,triangulos); triangle(triangulos,triangulos,triangulos,101,triangulos,triangulos); triangle(triangulos,triangulos,89,triangulos,triangulos,triangulos); triangle(triangulos,276,triangulos,triangulos,triangulos,triangulos); triangle(510,triangulos,triangulos,triangulos,triangulos,triangulos); 
// seis randoms
triangle(triangulos,triangulos,triangulos,triangulos,triangulos,triangulos);
    
  }
  pop();
  
  //rectangulos
  
  push();
  for (var rectangulos=random(height);rectangulos<=512;rectangulos+=4){
    stroke(3)
    // un solo random
    rect(rectangulos,30,230,20);
    rect(230,rectangulos,400,1);
    rect(0,190,rectangulos,10);
    rect(140,45,90,rectangulos);
    // dos randoms
    rect(rectangulos,rectangulos,470,2);
    rect(rectangulos,33,rectangulos,0);
    rect(rectangulos,234,123,rectangulos);
    rect(176,rectangulos,rectangulos,5);
    rect(10,rectangulos,432,rectangulos);
    rect(157,359,rectangulos,rectangulos);
    // tres randoms
    rect(rectangulos,rectangulos,rectangulos,1);
    rect(rectangulos,rectangulos,77,rectangulos);
    rect(rectangulos,445,rectangulos,rectangulos);
    rect(236,rectangulos,rectangulos,rectangulos);
    // 4 randoms
    rect(rectangulos,rectangulos,rectangulos,rectangulos);
  }
    pop();
  
  //circulos
  
  push();
  for ( var circulos=random(height);circulos<=512;circulos+=random(height)){
    stroke(3)
    // un solo random
    circle(circulos,200,1);
    circle(120,circulos,3);
    circle(512,222,circulos);
    // dos randoms
    circle(circulos,circulos,2);
    circle(33,circulos,circulos);
    circle(circulos,4,circulos);
    // tres randoms
    circle(circulos,circulos,circulos);
  }
    pop();
  
  //bezier
  
  push();
  for (var beziere=random(height);beziere<=512;beziere+=random(height)){
    stroke(random(height));
    strokeWeight(256);
    bezier(beziere,beziere,beziere,beziere,beziere,beziere,beziere,beziere);
  }
   pop(); 
 
  //Puntos
  
  push();
  for (var puntos=random(height);puntos<=512;puntos+=random(height)){
    // un solo random
    point(puntos,30);
    point(20,puntos);
    // dos randoms
    point(puntos,puntos);
  }
  pop();
  
  // Lineas
  
  push();
  for (var lineas=random(height);lineas<=512;lineas +=random(height)){
    // un solo random
    line(lineas,20,30,100);
    line(10,lineas,50,120);
    line(100,200,lineas,200);
    line(333,222,111,lineas);
    // dos randoms
    line(lineas,70,lineas,20);
    line(lineas,lineas,100,90);
    line(lineas,500,147,lineas);
    line(280,lineas,27,lineas);
    line(20,lineas,lineas,420);
    line(97,132,lineas,lineas);
    // tres randoms
    line(lineas,lineas,lineas,100);
    line(lineas,lineas,192,lineas);
    line(lineas,257,lineas,lineas);
    line(0,lineas,lineas,lineas);
    // cuatro randoms
    line(lineas,lineas,lineas,lineas);
  }
  pop();
  
    //Fin Fondo
  
    //Puntos y Lineas 
  
  //Lineas
  
 push();
  stroke(random(height));
  strokeWeight(1);
  line(random(height),random(height),random(height),random(height));
  strokeWeight(2);
  line(random(height),random(height),random(height),random(height));
  strokeWeight(3);
  line(random(height),random(height),random(height),random(height));
  strokeWeight(4);
  line(random(height),random(height),random(height),random(height));
 strokeWeight(5);
  line(random(height),random(height),random(height),random(height));
  strokeWeight(6);
  line(random(height),random(height),random(height),random(height));
strokeWeight(7);
  line(random(height),random(height),random(height),random(height));
  strokeWeight(8);
  line(random(height),random(height),random(height),random(height));
  strokeWeight(9);
  line(random(height),random(height),random(height),random(height));
  strokeWeight(10);
  line(random(height),random(height),random(height),random(height));
 strokeWeight(11);
  line(random(height),random(height),random(height),random(height));
  strokeWeight(12);
  line(random(height),random(height),random(height),random(height));

  pop();
  
  //Puntos
  
  push();
  stroke(random(height));
  strokeWeight(1);
  point(random(height),random(height));
  strokeWeight(2);
  point(random(height),random(height));
  strokeWeight(3);
  point(random(height),random(height));
  strokeWeight(4);
  point(random(height),random(height));
  strokeWeight(5);
  point(random(height),random(height));
  strokeWeight(6);
  point(random(height),random(height));
  strokeWeight(7);
  point(random(height),random(height));
  strokeWeight(8);
  point(random(height),random(height));
  strokeWeight(9);
  point(random(height),random(height));
  strokeWeight(10);
  point(random(height),random(height));
  strokeWeight(11);
  point(random(height),random(height));
  strokeWeight(12);
  point(random(height),random(height));
  stroke(random(height));
  strokeWeight(13);
  point(random(height),random(height));
  strokeWeight(14);
  point(random(height),random(height));
  strokeWeight(15);
  point(random(height),random(height));
  strokeWeight(16);
  point(random(height),random(height));
  strokeWeight(17);
  point(random(height),random(height));
  strokeWeight(18);
  point(random(height),random(height));
  strokeWeight(19);
  point(random(height),random(height));
  strokeWeight(20);
  point(random(height),random(height));
  strokeWeight(21);
  point(random(height),random(height));
  strokeWeight(22);
  point(random(height),random(height));
  strokeWeight(23);
  point(random(height),random(height));
  strokeWeight(24);
  point(random(height),random(height));

  pop();
  
   
}
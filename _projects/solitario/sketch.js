//Moviendo el mouse al círculo hace que se ilumine

/*
AM1 Cátedra Lacabanne
Trabajo Práctico N°2 "Solitario"
Llamosas Juan Pedro
2022

Música: Atrea - Heimanu
https://open.spotify.com/track/3qW4aAMcwXPzIdcC3lJ6l7?si=d69dcc8b1fbd4869

Playlist NIGHTMODE:
https://open.spotify.com/playlist/3ZJgbUEIeQNyfzNNKjzyRu?si=d1e2a7721c374925
*/

function preload() {
  music = loadSound("contenido/Atrea-Heimanu-Recortado.mp3");
}

var luces = true;
var velocidadCamara = 0.5;

var velocidadObjetos = 0.001;
var velocidadObjetosX = 0.0005;
var velocidadObjetosY = 0.00005;
var velocidadObjetos2 = 0.001;
var velocidadObjetosX2 = 0.0005;
var velocidadObjetosY2 = 0.00005;

var velocidadObjetosX3= 0.0005;
var velocidadObjetosX4= 0.0005;
var velocidadObjetosX5= 0.0005;
var velocidadObjetosX6= 0.0005;

var radioMayor = 50;
var x = radioMayor;
var y = radioMayor;
var x2 = radioMayor;
var y2 = radioMayor;
var x3 = radioMayor;
var y3 = radioMayor;
var x4 = radioMayor;
var y4 = radioMayor;
var x5 = radioMayor;
var y5 = radioMayor;
var x6 = radioMayor;
var y6 = radioMayor;
var x7 = radioMayor;
var y7 = radioMayor;
var x8 = radioMayor;
var y8 = radioMayor;
var x9 = radioMayor;
var y9 = radioMayor;

var velocidadX = 2; 
var velocidadY = 3.5; 
var direccionX = 1; 
var direccionY = 1; 

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');
  music.play();
  //background(0);
}

function draw() { 
  background(0);
  noCursor();
//FONDO
if (frameCount > 260) { 
//LLUVIA
push();
  translate(x-400, y -400);
  stroke(0, 13, 48);
  strokeWeight(1);
  
push();
  for (var lluvia = -400; lluvia < 400; lluvia += 60) {
    line(lluvia, 0, lluvia+20, 50);
  
  x+= velocidadX * direccionX;
if (x > width + radioMayor) {
    x = -radioMayor; // Mueve la figura al borde izquierdo
  }
y += velocidadY * direccionY;
if (y > height + radioMayor) {
    y = -radioMayor; // Mueve la figura al borde izquierdo
}
}
pop();    
push();
    for (var lluviaa = -400; lluviaa < 400; lluviaa += 60) {
    line(lluviaa-10, -400, lluviaa+20-10, -350);
    
x2+= velocidadX * direccionX;
if (x2 > width + radioMayor) {
    x2 = -radioMayor; // Mueve la figura al borde izquierdo
  }
y2 += velocidadY * direccionY;
if (y2 > height + radioMayor) {
    y2 = -radioMayor; // Mueve la figura al borde izquierdo
}
    }
pop();  
push();
    for (var lluviaaa = -400; lluviaaa < 400; lluviaaa += 60) {
    line(lluviaaa-20, -300, lluviaaa+20-20, -250);
    
x3+= velocidadX * direccionX;
if (x3 > width + radioMayor) {
    x3 = -radioMayor; // Mueve la figura al borde izquierdo
  }
y3 += velocidadY * direccionY;
if (y3 > height + radioMayor) {
    y3 = -radioMayor; // Mueve la figura al borde izquierdo
}
    }
pop();  
push();
    for (var lluviaaaa = -400; lluviaaaa < 400; lluviaaaa += 60) {
    line(lluviaaaa-30, -200, lluviaaaa+20-30, -150);
    
x4+= velocidadX * direccionX;
if (x4 > width + radioMayor) {
    x4 = -radioMayor; // Mueve la figura al borde izquierdo
  }
y4 += velocidadY * direccionY;
if (y4 > height + radioMayor) {
    y4 = -radioMayor; // Mueve la figura al borde izquierdo
}
    }
pop();  
push();
    for (var lluviaaaaa = -400; lluviaaaaa < 400; lluviaaaaa += 60) {
    line(lluviaaaaa-40, -100, lluviaaaaa+20-40, -50);
    
x5+= velocidadX * direccionX;
if (x5 > width + radioMayor) {
    x5 = -radioMayor; // Mueve la figura al borde izquierdo
  }
y5 += velocidadY * direccionY;
if (y5 > height + radioMayor) {
    y5 = -radioMayor; // Mueve la figura al borde izquierdo
}
    }
pop();  
push();
    for (var lluviaaaaaa = -400; lluviaaaaaa < 400; lluviaaaaaa += 60) {
    line(lluviaaaaaa-50, 100, lluviaaaaaa+20-50, 150);
    
x6+= velocidadX * direccionX;
if (x6 > width + radioMayor) {
    x6 = -radioMayor; // Mueve la figura al borde izquierdo
  }
y6 += velocidadY * direccionY;
if (y6 > height + radioMayor) {
    y6 = -radioMayor; // Mueve la figura al borde izquierdo
}
    }
pop();  
push();
    for (var lluviaaaaaaa = -400; lluviaaaaaaa < 400; lluviaaaaaaa += 60) {
    line(lluviaaaaaaa-60, 200, lluviaaaaaaa+20-60, 250);
    
x7+= velocidadX * direccionX;
if (x7 > width + radioMayor) {
    x7 = -radioMayor; // Mueve la figura al borde izquierdo
  }
y7 += velocidadY * direccionY;
if (y7 > height + radioMayor) {
    y7 = -radioMayor; // Mueve la figura al borde izquierdo
}
    }
pop();  
push();
    for (var lluviaaaaaaaa = -400; lluviaaaaaaaa < 400; lluviaaaaaaaa += 60) {
    line(lluviaaaaaaaa-70, 300, lluviaaaaaaaa+20-70, 350);
    
x8+= velocidadX * direccionX;
if (x8 > width + radioMayor) {
    x8 = -radioMayor; // Mueve la figura al borde izquierdo
  }
y8 += velocidadY * direccionY;
if (y8 > height + radioMayor) {
    y8 = -radioMayor; // Mueve la figura al borde izquierdo
}
    }
pop();
push();
    for (var lluviaaaaaaaaa = -400; lluviaaaaaaaaa < 400; lluviaaaaaaaaa += 60) {
    line(lluviaaaaaaaaa-80, 400, lluviaaaaaaaaa+20-80, 450);
    
x9+= velocidadX * direccionX;
if (x9 > width + radioMayor) {
    x9 = -radioMayor; // Mueve la figura al borde izquierdo
  }
y9 += velocidadY * direccionY;
if (y9 > height + radioMayor) {
    y9 = -radioMayor; // Mueve la figura al borde izquierdo
}
    }
pop();
pop();
}
  
  //Light at the end of the tunnel
  if (frameCount < 250) {
push();
    pointLight(255, 254, 217, 0, 0, -450);
    translate(0, 0, -500);
    ellipsoid(50, 50, 50);
pop();
  }

  //LUCES
  if (luces == true) {
    pointLight(0, 255, 255, 0, 0, 500);
    //pointLight(color1, color2, color3, x, y, z,);
  }

  
  
  //MOVIMIENTO DE CÁMARA
  if (frameCount < 1100) {
    camera(0, 0, frameCount * velocidadCamara, 0, 0, 0, 0, 1, 0);
  }

  
  
  noStroke();

  //MOUSE SPOTLIGHT
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
push();
  spotLight(189, 252, 249, locX, locY, 500, 0, 0, -1);
  spotLight(140, 255, 250, locX, locY, 500, 0, 0, -1);
  translate(0, 0, 90);
  ellipsoid(15, 15, 15); //Parámetros: radioX, radioY, radioZ
pop();

  //OBJETOS
if (frameCount > 250) {  
  for (var i = -300; i < 300; i += 30) {
    rotateX(frameCount * velocidadObjetosX);
    rotateY(frameCount * velocidadObjetosY);
    rotate(frameCount * velocidadObjetos);
push();
    translate(i, 0, 100);
    beginShape();
    vertex(-10, 0); //punto 1(izq)
    vertex(0, 0, 10); //punto 5 (adelante)
    vertex(-10, 0);
    vertex(0, 0, -10); //punto 6 (atras)
    vertex(-10, 0);
    vertex(0, -10); //punto 2(arriba)
    vertex(0, 0, 10);
    vertex(0, -10);
    vertex(0, 0, -10);
    vertex(0, -10);
    vertex(10, 0); // punto 3(der)
    vertex(0, 0, 10);
    vertex(10, 0);
    vertex(0, 0, -10);
    vertex(10, 0);
    vertex(0, 10); // punto 4(abajo)
    vertex(0, 0, 10);
    vertex(0, 10);
    vertex(0, 0, -10);
    vertex(0, 10);
    vertex(-10, 0);
    endShape();
    pop();
  }
  for (var ii = 300; ii > -300; ii -= 30) {
    rotateX(frameCount * velocidadObjetosX2);
    rotateY(frameCount * velocidadObjetosY2);
    rotate(frameCount * velocidadObjetos2);
    push();
    translate(ii, 0, 100);
    box(10)
    pop();
  }
for (var iii = 400; iii > -400; iii -= 30) {
    rotateX(frameCount * velocidadObjetosX3);
    push();
    translate(-200, iii, 10);
    //box(10)
    beginShape();
    vertex(-10, 0); //punto 1(izq)
    vertex(0, 0, 10); //punto 5 (adelante)
    vertex(-10, 0);
    vertex(0, 0, -10); //punto 6 (atras)
    vertex(-10, 0);
    vertex(0, -10); //punto 2(arriba)
    vertex(0, 0, 10);
    vertex(0, -10);
    vertex(0, 0, -10);
    vertex(0, -10);
    vertex(10, 0); // punto 3(der)
    vertex(0, 0, 10);
    vertex(10, 0);
    vertex(0, 0, -10);
    vertex(10, 0);
    vertex(0, 10); // punto 4(abajo)
    vertex(0, 0, 10);
    vertex(0, 10);
    vertex(0, 0, -10);
    vertex(0, 10);
    vertex(-10, 0);
    endShape();
    pop();
  }
for (var iiii = 400; iiii > -400; iiii -= 30) {
    rotateX(frameCount * velocidadObjetosX4);
    push();
    translate(-80, iiii, 10);
    //box(10)
    beginShape();
    vertex(-10, 0); //punto 1(izq)
    vertex(0, 0, 10); //punto 5 (adelante)
    vertex(-10, 0);
    vertex(0, 0, -10); //punto 6 (atras)
    vertex(-10, 0);
    vertex(0, -10); //punto 2(arriba)
    vertex(0, 0, 10);
    vertex(0, -10);
    vertex(0, 0, -10);
    vertex(0, -10);
    vertex(10, 0); // punto 3(der)
    vertex(0, 0, 10);
    vertex(10, 0);
    vertex(0, 0, -10);
    vertex(10, 0);
    vertex(0, 10); // punto 4(abajo)
    vertex(0, 0, 10);
    vertex(0, 10);
    vertex(0, 0, -10);
    vertex(0, 10);
    vertex(-10, 0);
    endShape();
    pop();
  }
for (var iiiii = 400; iiiii > -400; iiiii -= 30) {
    rotateX(frameCount * velocidadObjetosX5);
    push();
    translate(80, iiiii, 10);
    //box(10)
    beginShape();
    vertex(-10, 0); //punto 1(izq)
    vertex(0, 0, 10); //punto 5 (adelante)
    vertex(-10, 0);
    vertex(0, 0, -10); //punto 6 (atras)
    vertex(-10, 0);
    vertex(0, -10); //punto 2(arriba)
    vertex(0, 0, 10);
    vertex(0, -10);
    vertex(0, 0, -10);
    vertex(0, -10);
    vertex(10, 0); // punto 3(der)
    vertex(0, 0, 10);
    vertex(10, 0);
    vertex(0, 0, -10);
    vertex(10, 0);
    vertex(0, 10); // punto 4(abajo)
    vertex(0, 0, 10);
    vertex(0, 10);
    vertex(0, 0, -10);
    vertex(0, 10);
    vertex(-10, 0);
    endShape();
    pop();
  }
for (var iiiiii = 400; iiiiii > -400; iiiiii -= 30) {
    rotateX(frameCount * velocidadObjetosX6);
    push();
    translate(200, iiiiii, 10);
    //box(10)
    beginShape();
    vertex(-10, 0); //punto 1(izq)
    vertex(0, 0, 10); //punto 5 (adelante)
    vertex(-10, 0);
    vertex(0, 0, -10); //punto 6 (atras)
    vertex(-10, 0);
    vertex(0, -10); //punto 2(arriba)
    vertex(0, 0, 10);
    vertex(0, -10);
    vertex(0, 0, -10);
    vertex(0, -10);
    vertex(10, 0); // punto 3(der)
    vertex(0, 0, 10);
    vertex(10, 0);
    vertex(0, 0, -10);
    vertex(10, 0);
    vertex(0, 10); // punto 4(abajo)
    vertex(0, 0, 10);
    vertex(0, 10);
    vertex(0, 0, -10);
    vertex(0, 10);
    vertex(-10, 0);
    endShape();
    pop();
  }
}
if (frameCount > 1100) {
    velocidadObjetosX = 0.001
    velocidadObjetosY = 0.001

    velocidadObjetos2 = 0.0015;
    velocidadObjetosX2 = 0.00015;
    
    velocidadObjetosX3= 0.0001;
    velocidadObjetosX4= -0.0001;
    velocidadObjetosX5= -0.0001;
    velocidadObjetosX6= 0.0001;
}  
if (frameCount > 1500) {
    velocidadObjetosX = 0.0025
    velocidadObjetosY = 0.00025
  
    velocidadObjetos2 = 0.005;
    velocidadObjetosX2 = 0.0005;
  
    velocidadObjetosX3= 0.00025 
    velocidadObjetosX4= -0.00025 
    velocidadObjetosX5= -0.00025 
    velocidadObjetosX6= 0.00025
} 
  if (frameCount > 1700) {
    velocidadObjetosX = 0.05
    velocidadObjetosY = 0.005
    
    velocidadObjetos2 = 0.001;
    velocidadObjetosX2 = 0.001;
    
    velocidadObjetosX3= 0.0001
    velocidadObjetosX4= -0.0001 
    velocidadObjetosX5= -0.0001 
    velocidadObjetosX6= 0.0001
} 
  if (frameCount > 1800) {
    velocidadObjetosX = 0.1
    velocidadObjetosY = 0.01
    
    velocidadObjetos2 = 0.5;
    velocidadObjetosX2 = 0.05;
    
    velocidadObjetosX3= 0.001
    velocidadObjetosX4= -0.001
    velocidadObjetosX5= -0.001
    velocidadObjetosX6= 0.001
}  //FINAL
  if (frameCount > 1900) {
    velocidadObjetosX = 0.0005;
    velocidadObjetosY = 0.00005;
    velocidadObjetos = 0.0005;
    
    velocidadObjetos2 = 0.0001;
    velocidadObjetosX2 = 0.00001;
    velocidadObjetosY2 = 0.0001;
    
    velocidadObjetosX3= 0.0005;
    velocidadObjetosX4= -0.0005;
    velocidadObjetosX5= -0.0005;
    velocidadObjetosX6= 0.0005;
}
}

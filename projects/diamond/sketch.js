var angulo = 0.0;
var movimiento = 0;
var tamano = 230;
var velocidad = 0.07;

function setup() {
   let canvas = createCanvas(512, 512);
   canvas.parent('div-sketch');
   background(255);
}

function draw() {
  
  if(mouseIsPressed)
    { background(200);
     if(mouseButton == RIGHT)
      {
      push()
  var x = movimiento + cos(angulo) * tamano;
  var y = movimiento + sin(angulo) * tamano;
   fill(0);
   stroke(100)
   ellipse(128, 256, x, y);
   angulo += velocidad;  
  pop();
  
   push(); 
  var x = movimiento + cos(angulo) * tamano;
  var y = movimiento + sin(angulo) * tamano;
  fill(200);
  stroke(130);
  ellipse(256, 128, x, y)  ;
  pop();
  
   push(); 
  var x = movimiento + cos(angulo) * tamano;
  var y = movimiento + sin(angulo) * tamano;
  fill(0);
  stroke(100);
  ellipse(384, 256, x, y);
  pop();
  
  push(); 
  var x = movimiento + cos(angulo) * tamano;
  var y = movimiento + sin(angulo) * tamano;
  fill(200);
  stroke(250);
  ellipse(256, 384, x, y);
  pop(); } else if (mouseButton == LEFT)
    {
      background(0);
    }
    }
  
 else {
   //MIENTRAS NO SE APRETA EL MOUSE
  push(); 
  var x = movimiento + cos(angulo) * tamano;
  var y = movimiento + sin(angulo) * tamano;
   fill(120);
   stroke(255)
   ellipse(128, 256, x, y);
   angulo += velocidad;  
  pop();
  
   push(); 
  var x = movimiento + cos(angulo) * tamano;
  var y = movimiento + sin(angulo) * tamano;
  fill(200);
  stroke(250);
  ellipse(256, 128, x, y)  ;
  pop();
  
   push(); 
  var x = movimiento + cos(angulo) * tamano;
  var y = movimiento + sin(angulo) * tamano;
  fill(100);
  stroke(180);
  ellipse(384, 256, x, y);
  pop();
  
  push(); 
  var x = movimiento + cos(angulo) * tamano;
  var y = movimiento + sin(angulo) * tamano;
  fill(240);
  stroke(80);
  ellipse(256, 384, x, y);
  pop(); 
}

  document.oncontextmenu = function() {
  return false;
}
  
}
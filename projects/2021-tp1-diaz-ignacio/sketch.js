/// Ignacio Díaz
/// TRABAJO PRÁCTICO 01: REALIDADES

//// ------ CONFIGURACIÓN ------ ////
document.oncontextmenu = function()
{
  return false;
}
var tamCURSOR = 8;
var linFINA = tamCURSOR/20;

var angMOUSE = 0.0;
var angMOUSE2 = 0.0;

var decRANDOM = 0;
var modZOOM = 0;

var modCENTRO = 8;
var angCENTRO = 0.0;
var movCENTROX = 0;
var movCENTROY = 0;

function setup() 
{
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(10);
  noCursor();
}

function draw() 
{
// --- VARIABLES CENTRO --- //
  var senoCENTRO = sin(angCENTRO);
  var opcCENTRO = map(senoCENTRO, -1, 1, 30, 85);
  angCENTRO += 0.05;
// --- CONFIG --- //
  background(10);
  frameRate(60);
  noFill();
  stroke(255, 100);
  strokeWeight(tamCURSOR);
//// ------ MIENTRAS CLICK ------ ////
  if (mouseIsPressed)
  {
    switch (mouseButton)
    {
    // --- BOTON DERECHO --- //
      case RIGHT:
        frameRate(24);
        if (decRANDOM == 1)
        {
          push();
          for(let i=0;i<=frameCount;i++)
          {
            rotate(radians(i/frameCount%2));
            rotate(radians(i/10));
            strokeWeight(linFINA);

            line((width/2)+i, (height/2)-i,
                 (width/2)+i*2, (height/2)+i*2);
            line((width/2)-i, (height/2)+i,
                 (width/2)+i*2, (height/2)+i*2);
            line((width/2)+i, (height/2)-i,
                 (width/2)-i*2, (height/2)-i*2);
            line((width/2)-i, (height/2)+i,
                 (width/2)-i*2, (height/2)-i*2);
          }
          pop();
        }
        else if (decRANDOM == 2)
        {
          push();
          for(let i=0;i<=frameCount;i++)
          {

            rotate(radians(i/(frameCount/2)));
            rotate(radians(i/modZOOM));
            strokeWeight(tamCURSOR/7);

            line(i, -i, i*2, i*2);
            line(-i, i, i*2, i*2);
          }
          pop();
        }
        else if (decRANDOM == 3)
        {
          push();
          for(let i=0;i<=frameCount;i++)
          {
            rotate(radians(i/frameCount%2));
            rotate(radians(i/10));
            strokeWeight(linFINA);

            line((width/2)+i, (height/2)-i,
                 (width/2)+i*2, (height/2)+i*2);
            line((width/2)-i, (height/2)+i,
                 (width/2)+i*2, (height/2)+i*2);
            line((width/2)+i, (height/2)-i,
                 (width/2)-i*2, (height/2)-i*2);
            line((width/2)-i, (height/2)+i,
                 (width/2)-i*2, (height/2)-i*2);
          }
          pop();

          push();
          for(let i=0;i<=frameCount;i++)
          {

            rotate(radians(i/(frameCount/2)));
            rotate(radians(i/modZOOM));
            strokeWeight(tamCURSOR/7);

            line(i, -i, i*2, i*2);
            line(-i, i, i*2, i*2);
          }
          pop();
        }
      break;
    // --- BOTON IZQUIERDO --- //
      case LEFT:
        frameRate(24);
      // --- LADO DERECHO --- //
        push();
        for(let i=0;i<=frameCount;i++)
        {
          stroke(255, opcCENTRO);
          strokeWeight(linFINA);
          translate(i/movCENTROX, i/movCENTROY);

          triangle((width)-modCENTRO*i, (height/4)+modCENTRO*i,
                   (width)+modCENTRO*i, (height/4)+modCENTRO*i,
                   (width/2), (height/2)-modCENTRO*i);
          triangle((width)-modCENTRO*i, (height/4)-modCENTRO*i,
                   (width)+modCENTRO*i, (height/4)-modCENTRO*i,
                   (width/2), (height/2)+modCENTRO*i);
        }
        pop();
      // --- LADO IZQUIERDO --- //
        push();
        for(let e=0;e<=frameCount;e++)
        {
          stroke(255, opcCENTRO);
          strokeWeight(linFINA);
          translate(-e/movCENTROX, -e/movCENTROY);

          triangle(8*e, (height-(height/4))-modCENTRO*e,-modCENTRO*e,
                   (height-(height/4))-modCENTRO*e,
                   (width/2), (height/2)+modCENTRO*e);
          triangle(8*e, (height-(height/4))+modCENTRO*e,-modCENTRO*e,
                   (height-(height/4))+modCENTRO*e,
                   (width/2), (height/2)-modCENTRO*e);
        }
        pop();

      break;

    }
  }
//// ------ MIENTRAS NO HAYA CLICK ------ ////
  else
  {
    decRANDOM = Math.trunc(random(1,4));
    
    movCENTROX = Math.trunc(random(-30,30)); //Math.floor devuelve la parte entera de un num decimal
    movCENTROY = movCENTROX++;

    if (movCENTROX > 0 )
      {
      modZOOM = Math.trunc(random(5,100));
      }
    else
      {
      modZOOM = Math.trunc(random(-5,-100));
      }

    dibMOUSE(); //DIBUJO MOUSE
    
    frameCount = 0; //CONTADOR DE VUELTA A 0
    
  }
/*
  if (frameCount > 0)
  {
    //console.log("fps:"+frameCount);
    console.log("MOVX:"+movCENTROX);
    console.log("MOVY:"+movCENTROY);
  }*/
  
  //console.log("x:"+decRANDOM);
  //console.log("y:"+mouseY);
  
}

//// ------ DIBUJO MOUSE ------ ////
function dibMOUSE()
{
// --- VARIABLES MOUSE --- //
  var senoMOUSE = sin(angMOUSE);
  var opcMOUSE = map(senoMOUSE, -1, 1, 150, 10);
  angMOUSE += 0.02;
  var senoMOUSE2 = sin(angMOUSE2);
  var opcMOUSE2 = map(senoMOUSE2, 0, 1, 80, 10);
  angMOUSE2 += 0.06;
//----------------------//
  push();
  strokeJoin(ROUND);
  strokeCap(SQUARE);
// --- CONTORNO MOUSE --- //
  beginShape();
  vertex(208, 146);
  vertex(300, 146);
  vertex(330, 200);
  vertex(312, 337);
  vertex((width/2)+20,370);
  vertex((width/2)-20,370);
  vertex(198, 337);
  vertex(180, 200);
  endShape(CLOSE);

// --- LINEA MEDIO VERTICAL --- //
  line(width/2,150,width/2,195);

// --- LINEA MEDIO HORIZONTAL --- //
  push();
  strokeJoin(MITER);
  strokeWeight(tamCURSOR/2);
  quad(188,197,187,199,323,199,322,197); //296 150
  pop();

// --- BOTON IZQUIERDO --- //
  push();
  noStroke();
  fill(255, opcMOUSE)
  quad(210,150,187,195,(width/2)-(tamCURSOR/2),195,(width/2)-(tamCURSOR/2),150);
  pop();

// --- BOTON DERECHO --- //
  push();
  noStroke();
  fill(255, opcMOUSE2)
  quad((width/2)+(tamCURSOR/2),150,(width/2)+(tamCURSOR/2),195,323,195,298,150);
  pop();
  pop();
}
//declaracion de variables

var a = 85;
var b = 100;

var f = 512;

var pincel = 5;
var ancho = 360;
var alto = 300;
var oscuros=5;
var claros =225;



function setup() {
  let canvas = createCanvas(f, f);
  canvas.parent('div-sketch');
  frameRate (30);
  textSize(30);
  textAlign(CENTER);
 textFont("arial");
  
}

function draw() {
  stroke (pincel);
  background(220);
  
  push();
  strokeWeight (10);
  line (1,1,512,512);
  pop();
  
        for (var i = 2; i < f; i += 4) {
  line(1, i, f, f);
}
  
     for (var i = 2; i < f; i += 4) {
  line(1, i, f, 1);
   }

     for (var i = 2; i < f; i += 4) {
  line(f, i, 1, f);
   }
        for (var i = 1; i < f; i += 4) {
  line(i,1,f ,f );
            
} 
          for (var i = 1; i < 512; i += 4) {
  line(f,f,i ,i );
            
} 
            for (var i = 1; i < 500; i += 4) {
  line(f,8,i ,i );
            
} 
            for (var i = 1; i < 500; i += 4) {
  line(550,8,i ,i );
            
} 
              for (var i = 1; i < 512; i += 4) {
  line(i,f,i-20 ,i-20 );
            
} 

              for (var i = 1; i < 600; i += 4) {
  line(1,f,18,550 );
            
} 
                for (var i = 1; i < 600; i += 4) {
  line(i-20,550,1,6 );
            
}                 for (var i = 1; i < 600; i += 4) {
  line(550,i,1,1 );}
                for (var i = 1; i < 650; i += 4) {
  line(1-20,i-20,f,f );}

  //rectangulo fondo
  push ();
   noStroke ();
  fill (oscuros);
  rect (a-10, b-10,ancho, alto,5);
  //"pantalla"
  fill(claros) 
  rect (a, b, ancho-20, alto-20);
pop ();
  
  noStroke();

  var gridSize = 3;

  for (var x = gridSize; x <= 350 - gridSize; x += gridSize) {
    for (var y = gridSize; y <= 305 - gridSize; y += gridSize) {
      noStroke();
      fill(0);
      circle(x +80, y +90, 3);
   
    }
  }

}

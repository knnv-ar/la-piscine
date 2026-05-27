function setup() {
  let canvas = createCanvas (512, 512);
  canvas.parent('div-sketch');

}

function draw() {
  background(210);
  stroke(0);
  strokeWeight(1)
  noFill(0);
  
 push();
 rect(150,150,200,200);
 rect(110,170,250,250);
 rect(80,130,310,240);
 rect(100,100,350,300);
 rect(30,20,400,400);
 rect(40,50,350,400);
 rect(80,80,410,410);
 rect(150,140,100,40);
 rect(250,250,50,40);
 rect(220,240,60,60);
 rect(290,230,80,40);
 rect(190,200,160,140);
  
  //-gris
  stroke(20)
  strokeWeight(1)
  
 rect(170,150,220,200);
 rect(110,170,250,250);
 rect(90,120,350,240);
 rect(110,150,360,310);
 rect(80,20,400,400);
 rect(70,50,320,400);
 rect(250,270,50,90);
 rect(120,230,70,50);
 rect(290,230,80,40);
 pop()

  
    //click
  if (mouseIsPressed) {
    background(0)
    //fill(0)
    stroke(255);
    
 push();
 rect(150,150,200,200);
 rect(110,170,250,250);
 rect(80,130,310,240);
 rect(100,100,350,300);
 rect(30,20,400,400);
 rect(40,50,350,400);
 rect(80,80,410,410);
 rect(150,140,100,40);
 rect(250,250,50,40);
 rect(220,240,60,60);
 rect(290,230,80,40);
 rect(190,200,160,140);
  
  //-gris
  
 rect(170,150,220,200);
 rect(110,170,250,250);
 rect(90,120,350,240);
 rect(110,150,360,310);
 rect(80,20,400,400);
 rect(70,50,320,400);
 rect(250,270,50,90);
 rect(120,230,70,50);
 rect(290,230,80,40);
 pop()
     
}
  document.oncontextmenu = function() {
  return false;
}
    }
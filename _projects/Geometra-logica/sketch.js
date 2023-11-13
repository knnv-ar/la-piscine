function setup() 
{
  let canvas = createcanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  frameRate(24);
    
}

function draw()
{
  for(i = 0; i < 255; i++)
  { 
    stroke(100,i);
    line(i*4 , 512, i*4, 0,410);
  }
  
   for(a = 1; a < 800; a+=10)
  {
    fill(0);
    circle(a,a,a);

  }
  
    

}
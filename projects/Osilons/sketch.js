//Omenaje a:
//Ben Laposky 1914-2000
//obra:Oscillon 40-1952

//link a la obra
//https:/collections.vam.ac.uk/item/O187634/oscillon-40-photograph-laposky-ben/


let a,b,c,d,t,freq1,freq2,freq3,freq4,phase,phase2,x,y;

function setup() {
  let canvas = createCanvas(512,512);
  canvas.parent('div-sketch');
  background(0);
  stroke(255, 40); 
  strokeWeight(4);
  noFill();
}

function draw() {
  
  background(0, 10); 
  translate(width / 2, height / 2); 
  
  

  // Control del tamaño con el mouse
  //amplitud en x e y sinusoide 1 y 2
  a = (mouseX / width) * 300+ 150; 
  b = (mouseY / height) * 300 + 150; 
  
 //amplitud en x e y sinusoide central 
  c = (mouseX / width) * 300 + 100;
  d = (mouseY / height) * 300 + 100; 
  
  //frecuencias sinusoide 1 y 2
  freq1 = 2;
  freq2 = 2;
  
  //frecuencias sinusoide central 
  freq3 = 3;
  freq4 = 2;
  
  //fase general
  phase = frameCount * 0.01; 
  //fase opuesta y desfasada
  phase2 = frameCount * -0.015;
  
  //-----------------dibujar sinusoide 1---------------------------------------------------
  
  beginShape();
  for (t = 0; t < TWO_PI * 10; t += 0.01) {
     x = a * sin(freq1 * t + phase);
     y = b * cos(freq2 * t);
    vertex(x,y);
  }
  endShape();
  
  
  //----------------dibujar sinusoide 2----------------------------------------------------
  

  beginShape();
  for (t = 0; t < TWO_PI * 10; t += 0.01) {
     x = a * sin(freq1 * t + phase2);
     y = b * cos(freq2 * t);
    vertex(x,y);
  }
  endShape();

  
  //----------------dibujar sinusoide central-----------------------------------------------
   
  
  beginShape();
  for (t = 0; t < TWO_PI * 10; t += 0.01) {
    y = c * sin(freq3 * t + phase);
    x = d * cos(freq4 * t);
    vertex(x,y);
  }
  endShape();
 

}


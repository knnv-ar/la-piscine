function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

/*Herbert W. Franke, Math Art, series Logik, (“Logics”), 1980-1995. Copyright Archive Art Meets Science
*/
let uwu=400;
let num=3;

function draw() {
 
 
  background(0, 0, 0);
  noFill();
  push();
 
  
  translate(-90,0);


  /*
  
  for(let i=1;i<=900;i++){
    push()
    noStroke();
    
    fill(random(0, 255),random(0,255));
        
    rect(0,i,900,100);
 
  
   
    
    pop();
         
         
    
    
  
     }*/
  for(let i=100;i<=400;i++){
     bezier(i, 750, 0, 200, 440, 100, 200, 0, 20, 0, 100, 10);
    
  }
  pop();
  
     uwu+=num;
  if(uwu>=490){
    num=-num;
  }
 /*
   if(uwu<290){
    num=-num;
  }
  */
  for(let i=400;i<600;i++){
  push()
  bezier(i, 900,100, 600, 900, 600, 140, 0, 0, 0, 300, 30);
  pop();
  }
 
  
 
  //cantidad de beziers
  for(let i=500;i<=560;i++){
  
    bezier(i,900,800, 100, 100+uwu, 500, 10, 0, 0, 0, 300, 30);
    translate(400,90)
    rotate(3);
    
   if(mouseIsPressed){ 
    
     uwu-=1;
    
   
  }
 
    
    
  }
  
 
 
   
   
  
 stroke(250);
  
  

  
  
}
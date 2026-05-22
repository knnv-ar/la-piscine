//Artes Multimediales I Cát. Lacabanne 2021
//Autor: Andrés Báez
//Obra: Umbral

let angle = 0;

function setup() {
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
}

function draw() {

background(0);

angle += radians(0.7);
for (let a=0; a<radians(360); a+=radians(12)){
    
//draw
    push();
    translate(width/2, height/2);   
    rotate(a);                     
    translate(0, 50);              
    rotate(angle);                
    fill (255);
    textSize (30);
    text('draw',20,20);
    pop();
    
//random
    push();
    translate(width/2, height/2);   
    rotate(a);                     
    translate(0, 50);              
    rotate(angle);                
    fill (255);
    textSize (30);
    text('random',80,80);
    pop();
    
//if, interacción con distinta direccionalidad con respecto a las otras palabras  
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 50);             
    rotate(-angle);               
    fill (255);
    textSize (50);
    text('if',mouseX,mouseY);
    pop();
  
//a
    push();
    translate(width/2, height/2);   
    rotate(a);                     
    translate(0, 300);             
    rotate(-angle);                
    fill (random (255));
    text('a',165,541);
    pop();
  
//b    
    push();
    translate(width/2, height/2);   
    rotate(a);                     
    translate(0, 300);             
    rotate(-angle);                
    fill (random (255));
    text('b',363,424);
    pop();
    
//c    
    push();
    translate(width/2, height/2);   
    rotate(a);                     
    translate(0, 300);             
    rotate(-angle);                
    fill (random (255));
    text('c',147,224);
    pop();
  
//d     
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('d',160,160);
    pop();
    
//e     
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                
    fill (random (255));
    text('e',180,250);
    pop();
    
//f     
    push();
    translate(width/2, height/2);   
    rotate(a);                     
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('f',300,290);
    pop();

//g  
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                
    fill (random (255));
    text('g',400,330);
    pop();
    
//h
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('h',600,450);
    pop();

//i 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('i',360,200);
    pop();
    
//j
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('j',140,680);
    pop();
    
//k
    push();
    translate(width/2, height/2);  
    rotate(a);                     
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('k',840,614);
    pop();
    
//l
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('l',200,142);
    pop();
    
//m
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('m',100,112);
    pop();

//n
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('n',150,130);
    pop();    
    
//ñ
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('ñ',200,140);
    pop(); 
    
//o 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                
    fill (random (255));
    text('o',250,112);
    pop();
    
//p    
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('p',300,150);
    pop();

//q 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                
    fill (random (255));
    text('q',350,200);
    pop();
    
//r 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                
    fill (random (255));
    text('r',400,250);
    pop();
    
//s
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('s',450,300);
    pop();
    
//t
    push();
    translate(width/2, height/2);  
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('t',500,350);
    pop();
  
//u
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('u',550,400);
    pop();
    
//v
    push();
    translate(width/2, height/2);  
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                
    fill (random (255));
    text('v',220,450);
    pop();
    
//w
    push();
    translate(width/2, height/2);  
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);               
    fill (random (255));
    text('w',320,460);
    pop();
    
//x
    push();
    translate(width/2, height/2);  
    rotate(a);                      
    translate(0, 300);              
    rotate(-angle);                 
    fill (random (255));
    text('x',340,440);
    pop();
    
//y
    push();
    translate(width/2, height/2);   
    rotate(a);                     
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('y',360,500);
    pop();
    
//z 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('z',380,510);
    pop();
  
//[]
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('[ ]',285,517);
    pop();
  
// ""
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('""',146,158);
    pop();
  
/// 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('/',441,449);
    pop();
  
//& - +  
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('& - +',370,362);
    pop();
  
//_-
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('_-',248,183);
    pop();
  
//{} = > < 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text(' = {}',213,418);
    pop();
  
//¿? # 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('¿? # ',263,392);
    pop();
  
// @ !¡ % 
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('@ ! %',477,395);
    pop();
  
//0
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('0',384,475);
    pop();
  
//1
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('1',268,479);
    pop();
    
//2
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('2',493,123);
    pop();
  
//3
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('3',511,243);
    pop();
   
//4
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('4',346,310);
    pop();
    
  
//5
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('5',478,463);
    pop();
    
  
//6
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('6',157,267);
    pop();
    
//7
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('7',159,383);
    pop();

//8
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('8',247,385);
    pop();
  
//9
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 300);             
    rotate(-angle);                 
    fill (random (255));
    text('9',109,116);
    pop();
  }
}



//NOTA:ESTE TP 1° NO ES INTERACTIVO ಥ_ಥ
//NOTA 2 :SE PUEDE CONSEGIR OTRO EFECTO SI VA A LA LINEA 129 DE FILL      〆(・∀・＠)
var angulo = 0.0;
var desplazamiento = 60;
var escalar = 2;
var velocidad = 0.10;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
 //background(0,0,0,-1);
  
  for (var y = 25; y <= height - 1; y += 25) {
    for (var x = 25; x <= width - 5; x += 20) {
      
      fill(-x,-y);
      stroke(225);
      ellipse(x, y, 100, 100);
    }
  }
}

function draw() {
   
  // background(0,0,0,5);
  
  
   Mujer();
  circulo();

  
    for(var i=0;i<=1;i++){
      
 cudradito(random(width),random(height),random(100),random(100));
  }
   
 // circulo(); 
 
}
function Mujer() {
  
  translate(10, 60);
  
  //naris 
  fill(147, 143, 143 );
  stroke(147, 143, 143 );
  quad(303,152,330,177,313,191);
  quad(305,161,309,175,300,170);
  
  //ojos
  fill(222, 222, 222);
  quad(305,161,302,146,285,161);
  fill(0);
  stroke(0);
  quad(305,161,300,170,285,161);
  
  //sejas 
  fill(88, 84, 84);
  stroke(88, 84, 84 );
  quad(285,161,311,137,292,136,283,158);
  
  //voca
  fill(222, 222, 222 );
  quad(309,175,318,223,305,219);
  fill(114, 103, 103);
  quad(312,192,318,220,320,186);
  
  
  //cuello
  fill(222, 222, 222 );
  stroke(222,222,222);
  quad(282,218,248,168,240,168,255,292);
  quad(240,168,255,290,227,271);
  
  //cachete
  fill(114, 103, 103);
  stroke(114, 103, 103);
  quad(308,175,270,148,250,169);
  quad(309,175,305,219,266,207,250,169);
  
  //frente
  fill(222, 222, 222);
  stroke(222,222,222);
  quad(311,137,300,110,260,106,268,133);
  quad(268,133,270,148,283,156,291,136);
  
  //pelo
  fill(44, 39, 39  );
  stroke(0);
  quad(270,148,260,106,213,102,249,168);
  quad();
  
  //papada
  quad(318,223,266,207,271,217);
  
  //adorno 
  fill(146, 144, 144);
  quad(249,168,238,167,187,99,212,101);
  
  //pelo
  fill(0);
  quad(300,110,299,97,267,75,260,105);
  quad(267,75,260,105,186,100,206,78);
  quad(188,100,239,167,226,270,153,183);

}

function circulo(){
  
  
  var x = desplazamiento + cos(angulo) * escalar;
 var y = desplazamiento + sin(angulo) * escalar;
  translate(100, 50);
  scale(3.0);
  fill(255,y);
  ellipse(x, y, 4);
  angulo += velocidad;
  escalar += velocidad;
  
  
}

function cudradito(x, y,an,al) {  

  
  scale();
 translate(-50,-50);
  noFill();
  //fill(x,y);//<----- este ᕙ(⇀‸↼‶)ᕗ
  stroke(+x)
  rect(x,y,an,al);
}

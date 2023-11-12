//Título de la Obra: desESPERA

//Año: 2023

//Autora: Malena Souto
//Fotografía de mi autoría//@shotbysouto
//Segundo sonido: Pink Floyd-Time

//Breve descripción:
//El paso del tiempo y la desesperación que me causa es lo que me generó querer representarlo de alguna manera posible en este trabajo.Todos sabemos que el tiempo pasa y nada podemos hacer, algunos vivimos la vida como si fuese una carrera, apurados y apurando , furiosos con el que no se apura, no entendemos al que vive en el presente, al que va "lento",desde nuestra percepción, ya que sugerimos que nos está haciendo perder el tiempo, pero; ¿el tiempo realmente existe? podríamos decir que el tiempo es una percepcion subjetiva de cada ser ,ya que el pasado no siempre es verdadero por la percepción finita del ser humano ,-el presente en el momento que es presente,deja de serlo-<<La condición del presente>>(Bergson) y el futuro es incierto , o el futuro es ahora mismo ,cuando el presente deja de ser presente.¿Entonces qué es el tiempo? ¿Por qué corremos? ¿Por qué no lo detenemos?.

//Desarrollo: En este trabajo quiero jugar con los contrastes ; el clima cálido con ambientación de playa, donde el usuario pueda ver una imágen que de sensaciones cálidas , pero que al interactuar con la obra , se sienta descolocado por tanto ruido y "contaminación visual" de golpe,también utilizando un color rojo de fondo ya que al ojo humano el color rojo en algunas ocasiónes lo altera . Haciendo quizás que el usuario silenciar el sonido ,y dejar la obra como estaba al inicio. Con esto quiero representar de alguna forma lo que pasa por mi cabeza constantemente;estar en "paz" y que el tiempo venga a abrumarme y apurarme.





let img = 0;
let ambiente = 0;
let tiempo = 0;
let dali = 0;
let gif = 0;
let gif2 = 0;
let time = 0;
let gota = 0;

function preload() {
  img = loadImage("amarillo1.jpg");
  ambiente = loadSound("sonidoplaya.mp3");
  tiempo = loadImage("rojo1.jpg");
  dali = loadImage("DALI2.png");
  pink = loadSound("pink.mp3");
  gif = loadImage("tiempo1.gif");
  gif2 = loadImage("tiempo2.gif");
   time= loadImage("TIME.gif");
  gota= loadImage("lagrimas.gif");
}

function setup() {
  createCanvas(800, 600);
  noCursor()
  ambiente.play();
  img.resize(width, height);
  print(img.width);
}

function draw() {
  background(0);
  image(img, 0, 0, 800, 600);
  tint(210,220,220)
  
  
  //click para ver el cambio
  if (mouseIsPressed) {
    
   //imágen ojos
    image(tiempo, 0, 0, 800, 600);
  //reloj grande
    image(gif, 500, -55, 380, 400);
//reloj chico
    image(gif2, 50, 0, 100, 100);
    image(gif2, 50, 700, 100, 100);
    image(gif2, 50, 600, 100, 100);
    image(gif2, 50, 500, 100, 100);
    image(gif2, 50, 400, 100, 100);
    image(gif2, 50, 300, 100, 100);
    image(gif2, 50, 200, 100, 100);
    image(gif2, 50, 100, 100, 100);
    //timeisover
      image(time, 50, 0, 100, 100);
    image(time, 50, 700, 100, 100);
    image(time, 50, 600, 100, 100);
    image(time, 50, 500, 100, 100);
    image(time, 50, 400, 100, 100);
    image(time, 50, 300, 100, 100);
    image(time, 50, 200, 100, 100);
    image(time, 50, 100, 100, 100);
    
    //"sudor"
        image(gota, 350, 10,200, 200);

   
  }
}

function mousePressed() {
  pink.play();
  ambiente.stop();
}

function mouseReleased() {
  pink.stop();
  ambiente.play();
}

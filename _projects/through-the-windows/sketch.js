//declaración de variables
let angulo = 0.0;
let angulo2 = 0.0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(10);
  
  //----------------------------------TRONCOS LEJANOS-------------------

    for (var i = 150; i < 390; i += 50) { //determino coordenada donde quiero que empiece a dibujarse el primer árbol (será en 150) y la última (máx 390)
      stroke(150);
      strokeWeight(0.5);
      line(i, 320, i, 200); //si cambio y inicial a 350 queda a la altura de la linea piso
    }
  
    //variables de inicio y fin para los troncos lejanos
    var yinicio = 320; //parámetro primera rama
    var yfinal = 310; //parámetro primera rama
    var xinicio = 150; //parámetro primera rama
    var xfinal = 160; //parámetro primera rama
    var xfinalizq = 140; //150 (xinicio) -10
  
    //Este for se itera 5 veces, que es la cantidad de árboles (x). 
    for (var numArboles = 0; numArboles < 5; numArboles += 1) {
      
      //Este for se itera 11 veces que es la cantidad de ramas por árbol (y)
      for (var numRamas = 0; numRamas < 11; numRamas += 1) {
        line(xinicio, yinicio, xfinal, yfinal);
        line(xinicio,yinicio,xfinalizq,yfinal);
        yinicio -= 10;
        yfinal -= 10;
      }
      
      //Me muevo de árbol
      xinicio += 50;
      xfinal = xinicio + 10;
      xfinalizq = xinicio - 10;
      
      //Reinicio coordenada y
      yinicio = 320;
      yfinal = 310;
    }
  
  
  
  //----------------------------------TRONCOS INTERMEDIOS-------------------

    for (var p = 130; p < 390; p += 50) { //dibuja líneas que empiezan en 130 y se van dibujando cada 50 en X
      stroke(80);
      strokeWeight(1);
      line(p, 330, p, 150);
    }
  
    //variables de inicio y fin para troncos intermedios
    var intYInicio = 320;
    var intYFinal = 310;
    var intXInicio = 130;
    var intXFinal = 140;
    var intXFinalIzq = 120; //xinicio (130) - 10
    
    //el siguiente for se itera 6 veces
    for (var numArboles = 0; numArboles < 6; numArboles += 1) { //ahora son 6 árboles
      for (var numRamas = 0; numRamas < 16; numRamas += 1) { //ahora son 19 ramas
        line(intXInicio, intYInicio, intXFinal, intYFinal); //ramas derechas
        line(intXInicio, intYInicio, intXFinalIzq, intYFinal); //ramas izquierdas
        intYInicio -= 10; //voy dibujando las ramas hacia arriba (y)
        intYFinal -= 10;
      }
  
      //Me muevo de árbol (x)
      intXInicio += 50;
      intXFinal = intXInicio + 10;
      intXFinalIzq = intXInicio - 10;
      
      //Reinicio coordenada y para que se redibujen desde abajo de vuelta
      intYInicio = 320;
      intYFinal = 310;
    }
  

  
  //----------------------------------TRONCOS CERCANOS-------------------
    var senoangulo = sin(angulo);
    var posicion1 = map(senoangulo, -1, 1, 140, 160);
    var posicion2 = map(senoangulo, -1, 1, 340, 350);
    var posicion3 = map(senoangulo, -1, 1, 240,255)
    angulo += 0.01;

    
    //líneas troncos árboles cercanos blancos
    stroke(255);
    strokeWeight(1);
    line(160, 350, posicion1, 120); //arbol izquierdo
    line(350, 350, posicion2, 190); //arbol derecho
    line (250, 350,posicion3, 110); //arbol intermedio

  //--------------RAMAS EN MOVIMIENTO-------------

  //ARBOL IZQUIERDO----------
    //encuentro la ecuación de la recta (arbol) que va de (160, 350) a (posicion1, 120) para saber el X incógnito para cada rama
    //DATOS:
    x1 = 160 //x inicio del arbol izquierdo
    y1 = 350 //altura inicio del arbol
    x2 = posicion1 //como el árbol se mueve, su posición final depende del movimiento seno
    y2 = 120 //altura final del arbol

    m = (y1 - y2) / (x1 - x2) //averiguo pendiente
    b = y1 - m*x1 //averiguo ord al origen
    
    //altura inicial rama más abajo
    var y = 340;    
    
    //for que dibuja las ramas del arbol de la izquierda
    for (i=0; i<20; i++){
      y = y - 10; //voy reiniciando la Y para que vaya subiendo
      x = (y - b)/m //el valor de x depende de quién es Y. X sería un punto de la recta que es el árbol, que se modifica todo el tiempo. Es el X inicial de cada rama que es el que se mueve
      line(x, y, x-10, y-10); //rama izquierda. Acá el X final es x-10 y va a funcionar bien porque x inicial está en movimiento, por eso va a estar en movimiento también x final.
      line(x, y, x+10, y-10); //rama derecha
    }

  //ARBOL DERECHO-----
    //busco nuevamente la recta del arbol para poder despejar el X en movimiento de cada rama (que es un x que varía dentro de la recta del tronco que se mueve)
    x1 = 350
    y1 = 350
    x2 = posicion2
    y2 = 190
    m = (y1 - y2) / (x1 - x2)
    b = y1 - m*x1
    
    //altura inicial primera rama
    var y = 340;
    
    
    //for que dibuja las ramas del arbol de la izquierda
    for (i=0; i<19; i++){
      y = y - 7; //el -7 es porque quise cambiar la cantidad de ramas que había
      x = (y - b)/m
      line(x, y, x-10, y-10); //rama izquierda
      line(x, y, x+10, y-10); //rama derecha
    }

  //ARBOL INTERMEDIO-----
    x1 = 250
    y1 = 350
    x2 = posicion3
    y2 = 110
    m = (y1 - y2) / (x1 - x2)
    b = y1 - m*x1
    
    //altura inicial primera rama
    var y = 340;   
    
    //for que dibuja las ramas del arbol de la izquierda
    for (i=0; i<14; i++){
      y = y - 15;
      x = (y - b)/m
      line(x, y, x-10, y-10); //rama izquierda
      line(x, y, x+10, y-10); //rama derecha
    }


  //------------------ESTRELLAS---------------------
    var senoangulo2 = sin(angulo2);
    var posicionestrella = map (senoangulo2, -1, 1, 0,520);
    angulo2 += 0.001;

    point (200,100);
    point (310,200);
    point (80,50);
    point (150,50);
    point (300,50);
    point (400,50);
    point (250,20);
    point (490, 100);
    point (490, 50);
    point (300,50);
    point (410, 200);
    point (430,190);
    point (350,100);
    point (90,300);

    strokeWeight(2);
    point (50,100);
    point (50,200);
    point (400,100);
    point (20,70);
    point (30, 50);
    point(posicionestrella,70);  
    point (100, 50);
    point (260,90);
    point (410,60);

  //---------LINEA DE HORIZONTE-----------
  strokeWeight(0.5);
  line(0,350,520,350);
}
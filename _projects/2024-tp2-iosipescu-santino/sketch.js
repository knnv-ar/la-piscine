let lineas = []; // almacena todas las figuras vertex que se van generando
let puntosVertex = []; // guarda el conjunto de objetos con los puntos de cada figura
let paleta = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"];
let colores = []; // guarda colores para cada figura dentro de `lineas`
let grosores = [];
let contador = 0;

// Escala sol mayor
let escala = [];
let g,am,bmG,bmB,c,d,em,fsosb5;
let gradoReproducido;

//control de volumen
let volumen = 1;
let velocidadScroll = 0.001;
let sono = false;
let contadorSonido = 0;


function preload(){
  g = loadSound('sonidinhos/juntos/g.mp3');
  am = loadSound('sonidinhos/juntos/am.mp3');
  bmG = loadSound('sonidinhos/guitarra/bm7.mp3');
  bmB = loadSound('sonidinhos/bass/bm.mp3');
  c = loadSound('sonidinhos/juntos/c.mp3');
  d = loadSound('sonidinhos/juntos/db5.mp3');
  em = loadSound('sonidinhos/juntos/em.mp3');
  fsosb5 = loadSound('sonidinhos/juntos/fsharp-m7b5.mp3');
  escala.push(g,am,bmG,bmB,c,d,em,fsosb5);
}



function setup() {
  //Establezco canvas con fondo blanco fijo
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  background(255);
}

setInterval(() => {
    solMayor();
    if(contadorSonido < 1){
      contadorSonido ++;
      sono = true;
    }
  }, 5000);

function draw() {      
  
  let xOff = random(10000); 
  /*                              
  -->"xOff":
                                  Determino un amplio rango de posiciones en torno al eje x
                                  sobre las que quiero que `noise()` me devuelva un valor
                                  particular: la idea es que las lineas generadas puedan estar
                                  lo + dispersas posibles.                                    
  */
  
  let incremento = random(0.0015,0.0001);
  /*                             
  -->"incremento":
                                  Genero también un incremento de distintos valores dentro de un
                                  rango particular, para que el trazado de cada línea sea 
                                  ligeramente distinto, variando su prolijidad.
                                  (modifica la cercanía entre un punto y otro que va generar
                                  `noise()`, al incrementar el valor de `xOff`)              
  */                  
  
  let cantidadVertices = random(100,501); // cantidad de vértices variables entre cada linea
  
  
  /*--Genero vertices--*/
  if(puntosVertex.length == 0){ // Validación de puntosVertex vacío para dibujar un nuevo trazo
    
  for(let i = 0; i < cantidadVertices; i ++){  // inicio for() principal
    
  /*--Vertices hechos con noise para formar lineas pseudoaleatoriamente--*/
    
  let xNoise = map(noise(xOff),0,1,-50,675); 
  let yNoise = map(noise(xOff + 1200),0,1,-50,675);
  puntosVertex.push({x: xNoise, y: yNoise});
  xOff += incremento; 
  
  }                                            // final for() principal
    
  lineas.push(puntosVertex);
  let colorFigura = random(paleta);
  let grosorFigura = random(0.5,4);
  colores.push(colorFigura);
  grosores.push(grosorFigura);
  
    
  /*--Figura resultante de los vertices generados--*/
  for(let i = 0; i < lineas.length; i ++){
  beginShape()
  noFill();
  stroke(colores[i]);
  strokeWeight(grosores[i]);
  for(let v = 0; v < lineas[i].length; v ++){  
    
    vertex(lineas[i][v].x,lineas[i][v].y);      /*recorro array multidimensional para capturar
                                                  las coordenadas xy de cada vertice; dentro del                                                   array de todas las figuras, y dentro del array
                                                  cada figura: para capturar los objetos con las
                                                  coordenadas de cada vértice.*/
  }
  endShape()

    
  // cada 4 bucles restablezco el grosor de todas las lineas
  if(contador % 5 == 0 && contador != 0 ){
    grosores[i] = random(0.5,4.1);       
  }
  }
    
  puntosVertex = [];
  contador ++;
    
  }
  
}

//reinicia el dibujo
function mouseClicked() {
  puntosVertex= [];
  lineas = [];
  grosores = [];
  colores = []; 
  contador = 0;
  background(255);
}

function keyPressed(){
  if (key == "a" || key == "A"){
    solMayor();
  }
  if (key == "p" || key == "P"){
    gradoReproducido.stop();
  }
}

function solMayor(){
  gradoReproducido = random(escala);
  if(gradoReproducido == bmG || gradoReproducido == bmB){
    bmG.setVolume(volumen);
    bmB.setVolume(volumen);
    bmG.play();
    bmB.play();
  } else{
  gradoReproducido.setVolume(volumen);
  gradoReproducido.play();
  }
}

function mouseWheel(event){ 
  if (sono){
    gradoReproducido.setVolume(volumen);
    volumen += (-event.delta * velocidadScroll);
    volumen = constrain(volumen,0,3)
   
    }
    return false;
}




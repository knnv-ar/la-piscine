 let palitos = [];            // variable de figura 
let numPalitos = 200;         // cantidad de figuras en el array
let girando = 0;              // empieza en 0 
let coloresActivos = false;   // empiezan en b&n
let sueltos = false;          // empiezan unidos
  

//-----------------------------SETUP--------------------------------------


function setup() {
  
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  
  angleMode(DEGREES);                     // configura las funciones de angulos en grados
  
  
  for (let i = 0; i < numPalitos; i++) {  // crea palitos y sus condiciones
    palitos.push({                        
      angulo:   360,
      longitud: random(50, 280),
      grosor:   random(1, 26),
      velocidad:random(0.2, 3),
      color:    color(100),
      x: 0,                              // posiciones iniciales
      y: 0,
      vx: random(-2, 2),                 // velocidad horizontal 
      vy: random(-2, 2),                 // velocidad vertical
    });
  }
}



//-----------------------------DRAW--------------------------------------



function draw() {
  
  background(0);
  
  ambientLight(150);                                 // luz ambiental para que no esten en sombra
     
  girando += 0.5;                                    // giro de figuras
  
  
  for (let i = 0; i < palitos.length; i++) {        // recorre cada uno de los palitos
    let p = palitos[i];    
    
    push();

    
    if (sueltos) {  // a su ubicación actual se le suma su velocidad generando movimiento
      p.x += p.vx;
      p.y += p.vy;
    }
  
    
    translate(p.x, p.y, 0);                        // ubicamos palitos
    
    rotateZ(p.angulo + girando * p.velocidad);     // giran
    
    translate(0, p.longitud / 2, 0);               // salen del centro y se ven completos
  

    
    
    if (coloresActivos) {                         // movimiento y cambio de color 
      
        stroke(map(sin(frameCount + i), -1, 1, 0, 255),
               map(cos(frameCount + i), -1, 1, 0, 255),
               map(sin(frameCount * 0.5 + i), -1, 1, 0, 255));
               
    } else {
      stroke(p.color);                            // color original
    }

    cylinder(p.grosor, p.longitud);               // dibujar palitos
    
    pop();
  }
}


 
function mousePressed() {                        // manejo de mouse 
  
  if (mouseButton === LEFT) {
    coloresActivos = !coloresActivos;
    }

  else if (mouseButton === RIGHT) {
    sueltos = !sueltos;
  }
  
   canvas.oncontextmenu = () => false;          

}

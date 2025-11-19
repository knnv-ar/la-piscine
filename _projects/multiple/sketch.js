/////   TP N°2 - Artes Multimediales I - UNA - Micaela Calvo     /////

/*
El clic controla la imágen. Según cuántos clics o el tiempo que se mantenga, 
se pueden crear distintas formas de las figuras 
*/

let c1, c2, c3;

// c1
let esferas1 = [];
let color1c1; let color2c1;

let sphereSize = 155;
let creciendo = false;

// c2
let cols, rows;
let densidad = 15; 
let w = 1200;
let h = 800;
let velocidadOndulacion = 0;
let strokeC2;

// c3 
let cantidad = 8;
let numLineas = 100; 
let maxRadio = 500;   
let num = 4; 
let strokeC3;


function setup() { 
  let canvas = createCanvas(600, 600,WEBGL);
  canvas.parent('div-sketch');
  
  background(1);
  c1 = createGraphics(400,400,WEBGL);
  c2 = createGraphics(850,370, WEBGL);
  c3 = createGraphics(430,400,WEBGL);
  
  // c1 //
  esferas1 = [
    { x: 0,   y: 0,   rotX: 0.01, rotY: 0.008, size: 100 },   // centro
    { x: 120, y: 130, rotX: 0.01, rotY: 0.02, size: sphereSize }, // abajo derecha
    { x: -120, y: 130, rotX: -0.01, rotY: -0.01, size: sphereSize },  // abajo izquierda
    { x: -120, y: -130, rotX: 0.01, rotY: 0.02, size: sphereSize }, // arriba izquierda
    { x: 120, y: -130, rotX: -0.01, rotY: -0.01, size: sphereSize }   // arriba derecha
  ];
  
  // c2 //
  cols = w / densidad;
  rows = h / densidad;
  
  color1c1 = color(10); 
  color2c1 = color(220);
  strokeC2 = color(250);
  strokeC3 = color(250);

}

function draw() {
push();
  scale(0.65);
  
  image(c1,-420,-395);
  image(c2,-420,30);
  image(c3,0,-395);
  
  // canvas
  canvas1();
  canvas2();
  canvas3();
pop();
  
  // c1 // se agrandan esferas al hacer clic
  if(creciendo) {
      sphereSize  += 3; 
    }
}


/////////////////////////        funciones usuario      /////////////////////////////

function mousePressed() {
    c2.rotateX(1);
    densidad = 20;
    creciendo = true;
}

function mouseReleased() {
   c2.rotateX(PI / 3);
   densidad = 15;
   creciendo = false;
}

/////////////////////////        canvas      ////////////////////////////////////

// canvas 1: 5 esferas (arriba izquierda)
function canvas1() {
  c1.background(10);
  // dibujar esferas
   for (let i = 0; i < esferas1.length; i++) {
    let e = esferas1[i];
    let s = (i === 0) ? e.size : sphereSize; // centro mantiene tamaño

    c1.push();
      c1.noFill();
      c1.translate(e.x, e.y);
      c1.rotateY(frameCount * e.rotX);
      c1.stroke(150);
      c1.sphere(s);
    c1.pop();
  }
}

// canvas 2: superficie ondulada (abajo)
function canvas2() {
  velocidadOndulacion -= 0.03; // velocidad de ondulación 
  let yoff = velocidadOndulacion;
  
  c2.push();
    c2.background(10);
    c2.rotateX(PI / 3); // sin esto se ve plano en toda la pantalla
    c2.translate(-w/2, -h/2); // centrar
    c2.stroke(strokeC2);
    c2.noFill();

    for (let y = 0; y < rows-1; y++) {
      c2.beginShape(TRIANGLE_STRIP);
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let z1 = map(noise(xoff, yoff), 0, 1, -100, 100);
        let z2 = map(noise(xoff, yoff + 0.1), 0, 1, -100, 100);
        c2.vertex(x * densidad, y * densidad, z1);
        c2.vertex(x * densidad, (y+1) * densidad, z2);
        xoff += 0.1;
      }
      c2.endShape();
      yoff += 0.1;
    } 
  c2.pop();
 
}

// canvas 3: circulo inmersivo (arriba derecha)
function canvas3() {
  c3.noFill();
  c3.strokeWeight(1);   
  c3.background(10);
   
  //   tamaño de formas que se expanden
  cantidad += 0.10; 
  cantidad = constrain(cantidad, 30, 500);
 
  // tamño de figura completa que se agranda
   maxRadio += 1; 
   maxRadio = constrain(maxRadio, 100, 500);
  
  c3.push(); 
   
    c3.translate(0,0); 
    for (let r = 10; r < maxRadio; r += cantidad) { 
      for (let i = 0; i < numLineas; i++) { 
        c3.push();  
        c3.stroke(strokeC3);
          c3.rotate((TWO_PI / numLineas) * i); 
          c3.arc(500, 100, r*num, r, 0, PI); 
        // primer valor son lineas de adentro y el segundo es el circulo del centro
        c3.pop(); } 
      } 
  c3.pop();
}



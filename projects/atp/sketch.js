let spheres = [];
let agua;

let lastInteractionTime;
let inactivityThreshold = 30000;

function preload() {
  // Carga el archivo de sonido
  agua = loadSound('sonidos/agua.wav');
 }
function setup() {
  let canvas = createCanvas(1000,1000, WEBGL);
  canvas.parent('div-sketch');
   lastInteractionTime = millis();
}

function draw() {
background(frameCount%100);
  
  if (millis() - lastInteractionTime > inactivityThreshold) {
    background(0); 
  }
  
  orbitControl(1,1)
  //texture(txt1)
  stroke(2)
  noFill()
  box(1000)

  for (let i = 0; i < spheres.length; i++) {
    push();
    translate(spheres[i].x, spheres[i].y, spheres[i].z);
    fill(spheres[i].color);
    noStroke(); 
    ellipsoid(10, 10, 10);
    pop();

  //conecta la esfera
    if (i > 0) {
      stroke(0);
      line(spheres[i].x, spheres[i].y, spheres[i].z, spheres[i - 1].x, spheres[i - 1].y, spheres[i - 1].z);
    }
  }
}

function mouseClicked() {
  const x = random(-900, 900);
  const y = random(-900, 900);
  const z = random(-900, 900);
  const r = random(255);
  const g = random(255);
  const b = random(255);
  const col = color(r, g, b);

  spheres.push({ x, y, z, color: col });
  agua.play();
  lastInteractionTime = millis(); 
}

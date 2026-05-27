let planePositions = [];
let textures = [];
let planeTextures = [];
let numTextures = 18; 
let planos = 150
let trafico;


function preload() {
  
  for (let i = 1; i <= numTextures; i++) {
    textures.push(loadImage('texturas/txt' + i + '.png'));
  }
  
   trafico = loadSound('audio/traf.mp3')
}

 

function setup() {

  //createCanvas(800, 600, WEBGL);
  let canvas = createCanvas(800, 600, WEBGL);
  canvas.parent('div-sketch');
  noStroke()
  
  trafico.loop()
  
  //osc = new p5.Oscillator('sawtooth');
  //osc.start();
  //osc.amp(0.3); // Set volume (0-1)
  
    
  for (let i = 0; i < planos; i++) {
    planePositions.push({
      x: random(-0, 1000),
      y: random(-10, 10),// es z
      z: random(-10, 10), // es y
      sizeA: random(10, 250),
      sizeB: random(10, 50),
      rotX: random(TWO_PI),
      rotY: random(TWO_PI),
      rotZ: random(TWO_PI)
    });
    
    planeTextures.push(random(textures));
  }
}

function draw() {
  background(0);
  
  
  ambientLight(150); 
  directionalLight(255, 255, 255, 0, 0, -1); 

  

  
  for (let i = 0; i < planos; i++) {
    push();
    
    let pos = planePositions[i];
    translate(pos.x, pos.y, pos.z);
    //rotateX(pos.rotX);
    rotateY(pos.rotY);
    //rotateZ(pos.rotZ);
    
    
    //specularMaterial(0); 
    //shininess(0)
 
    
    //emissiveMaterial(100, 100, 100)
    
    texture(planeTextures[i]);
    plane(pos.sizeA, pos.sizeB);
    
    pop();
    
    
    
  let camX = frameCount * 0.500;
  let camY = cos(frameCount * 0.005) * 200;
  let camZ = cos(frameCount * 0.001) * 500;
  camera(camX, 0, 0, 0, 0, 0, 0, 1, 0) 
  //pointLight('rgba(0,0,255,0.33)(255,0,0,0.22)', 200, 0, 0);
  //pointLight('blue', -200, 0, 0);
  //pointLight(255, 255, 255, 0, 200, 0);
  //pointLight(255, 255, 255, 0, -200, 0);
    
    blendMode(REPLACE)
    //background('rgba(255,255,255)') 
    

    
 
    
    
  }
}
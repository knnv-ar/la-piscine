//Eco visual - Franco Sardón
let s1, fon, audi;
let cubos = [];
let nCube;

function preload() {
  s1 = loadSound("sound/echo.mp3"); 
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  orbitControl();  
  rotateX(mouseX * 0.01);
  rotateY(mouseY * 0.01);
  
   
  for (let i = 0; i < cubos.length; i++) {   
    push();
   let c = color((cubos[i].x + width / 2) % 255, (cubos[i].y + height / 2) %  255, frameCount % 255);
  fill(c); 
    translate(cubos[i].x, cubos[i].y, cubos[i].z); 
    box(cubos[i].size); 
    pop();
  }  

}

function mousePressed() {
  
  
   nCubo ={ x: random(-200, 200), 
    y: random(-200, 200),
    z: random(-200, 200),
    size: random(20, 50),  
  };
   cubos.push(nCubo);  

  s1.play();  
}

function keyPressed() {
  if (key === 'z' || key === 'Z') {
    saveCanvas('eco', 'jpg'); 
  }
}
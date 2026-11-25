let vX, vY, vZ;
let czX = 0, czY = 0,  czZ = -400;
let corazoncitos = [];
let posZ=500;
let saltoX = 190;
let saltoY=0;
let saltoZ=0;
let scaleC =1;
let aa=1500;


async function setup() {
  let canvas = createCanvas(800, 800, WEBGL);
  canvas.parent('div-sketch'); // ESTA LÍNEA ES OBLIGATORIA
  img1 = await loadImage("assets/cd1.png"); 
  img2 = await loadImage("assets/cd2.png"); 
  img3 = await loadImage("assets/cd3.png"); 
  img4 = await loadImage("assets/cd4.png"); 
  img5 = await loadImage("assets/cd5.png"); 
  img6 = await loadImage("assets/cd6.png"); 
  
}


function draw() {
  background(50);
  /////// 3d settings
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  let options = {
  disableTouchActions: false,
  freeRotation: false
  };
  orbitControl(1, 1, 1, options);

  /////// 3d luces
  ambientLight(120)
  fill(150,100)
 // pointLight(0,0,150, locX, locY, posZ);
  directionalLight(255, 0, 0, -1, -1, -1,);
  directionalLight(255, 0, 255, 0, 1, 1);
  /////// construccion del espacio
  push();
  translate(0, aa/2);
  rotateX(HALF_PI);
  texture(img4);
  plane(aa, aa);
  pop();
  
  push();
  translate(0, 0,(aa/2)*-1);
  texture(img1)
  plane(aa, aa);
  pop();

  push();
  translate((aa/2)*-1, 0);
  rotateY(HALF_PI)
  texture(img2)
  plane(aa, aa);
  pop();

  push();
  translate(aa/2, 0);
  rotateY(HALF_PI);
  texture(img3);
  plane(aa, aa);
  pop();

  push();
  translate(0, (aa/2)*-1);
  rotateX(HALF_PI);
  texture(img5);
  plane(aa, aa);
  pop();

  push();
  translate(0, 0,aa/2);
  texture(img6)
  plane(aa, aa);
  pop();


  
  ////// Rotacion de elementos
  if(frameCount>600){
    saltoX=map(sin(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);
    saltoY=map(sin(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);
    saltoZ=map(cos(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);

    scaleC=saltoX*0.01;
    
  } if (frameCount>1200){
    saltoX=map(sin(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);
    saltoY=map(sin(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);
    saltoZ=map(cos(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);
    scaleC=saltoY*0.01;
  } if (frameCount>2200){
    saltoX=map(sin(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);
    saltoY=map(sin(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);
    saltoZ=map(cos(frameCount*0.02),-1,1,(aa/2)*-1,aa/2);
    scaleC=saltoZ*0.01;
  }

  ////// llamada a elementos
  piramide(saltoX, saltoY*-1.1, saltoZ,scaleC);
  piramide(saltoX*-1, saltoY, saltoZ,scaleC);
  
  line (saltoX, saltoY*-1.1,saltoX*-1, saltoY)

  /////// sist. particulas
  noStroke();
  for (let i = 0; i < corazoncitos.length; i++) { 
    fill(corazoncitos[i].cG,corazoncitos[i].vida);

    push();
    beginShape(TRIANGLE_FAN);
    vertex(corazoncitos[i].X - 30, corazoncitos[i].Y - 15, corazoncitos[i].Z);
    vertex(corazoncitos[i].X - 45, corazoncitos[i].Y - 30, corazoncitos[i].Z);
    vertex(corazoncitos[i].X - 60, corazoncitos[i].Y - 10, corazoncitos[i].Z);
    vertex(corazoncitos[i].X - 30, corazoncitos[i].Y + 15, corazoncitos[i].Z);
    vertex(corazoncitos[i].X, corazoncitos[i].Y - 10, corazoncitos[i].Z);
    vertex(corazoncitos[i].X - 15, corazoncitos[i].Y - 30, corazoncitos[i].Z);
    endShape();
    pop();
    
    corazoncitos[i].X += corazoncitos[i].vX;
    corazoncitos[i].Y += corazoncitos[i].vY;
    corazoncitos[i].Z += corazoncitos[i].vZ;

    if (corazoncitos[i].X > 500 || -500 > corazoncitos[i].X) {
      corazoncitos[i].vX = corazoncitos[i].vX * -1;
    }
    if ( corazoncitos[i].Y > 500 || -500 > corazoncitos[i].Y) {
      corazoncitos[i].vY = corazoncitos[i].vY * -1;
    }
    corazoncitos[i].vZ += 0.2;
    if (corazoncitos[i].Z > 500 || corazoncitos[i].Z<-500){
      corazoncitos[i].vZ = corazoncitos[i].vZ * -1;
    }

    
    corazoncitos[i].vida -= 1;
    if (corazoncitos[i].vida == 0) {
      corazoncitos.splice(i, 1);
    }
  }
}


function mousePressed() {
  for (let i = 0; i < 10; i++) {
    let objC = {
      X: czX,
      Y: czY,
      Z: czZ,
      vX: (vX = random(-4, 7)),
      vY: (vY = random(-4, 7)),
      vZ: (vZ = random(-2,2)),
      vida: 300,
      cG: random(0, 255),
    };
    corazoncitos.push(objC);
  }
}

function piramide(a, b,c,s) { ////construccion elementos
  stroke(10);
 
  push();
  translate(a, b,c);
  scale(s);
  
  ambientMaterial(0, 0, 200);
  beginShape(TRIANGLE_FAN);
  vertex(-30, -30, 0);
  vertex(-30, 10, -30);
  vertex(-60, 10, 0);
  vertex(-30, 10, 30);
  vertex(-30, 10, -30);
  vertex(0, 0, 0);
  vertex(-30, 10, 30);
  endShape();

  beginShape(TRIANGLE_FAN);
  vertex(+30, -30, 0);
  vertex(+30, 10, -30);
  vertex(+60, 10, 0);
  vertex(+30, 10, 30);
  vertex(+30, 10, -30);
  vertex(0, 0, 0);
  vertex(+30, 10, 30);
  endShape();

  ambientMaterial(0, 0, 200);
  beginShape(TRIANGLE_FAN);
  vertex(0, 70, 0);
  vertex(0, 40, -35);
  vertex(60, 10, 0);
  vertex(0, 40, +35);
  vertex(0, 40, -35);
  vertex(-60, 10, 0);
  vertex(0, 40, +35);
  endShape();

  ambientMaterial(0, 0, 200);
  beginShape(TRIANGLE_FAN);

  vertex(0, 40, +35);
  vertex(+30, 10, 30);
  vertex(60, 10, 0);
  vertex(+30, 10, 30);
  vertex(-30, 10, 30);
  vertex(0, 0, 0);
  vertex(+30, 10, 30);
  vertex(-30, 10, 30);
  vertex(-60, 10, 0);
  endShape();

  beginShape(TRIANGLE_FAN);
  vertex(0, 40, -35);
  vertex(+30, 10, -30);
  vertex(60, 10, 0);
  vertex(+30, 10, -30);
  vertex(-30, 10, -30);
  vertex(0, 0, 0);
  vertex(+30, 10, -30);
  vertex(-30, 10, -30);
  vertex(-60, 10, 0);
  endShape();

  pop();
}

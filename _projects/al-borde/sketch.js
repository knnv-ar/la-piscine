////////////////////////////////////////////////////////////////////////////////////////
//////////////        PULSAR "D" PARA AVANZAR            ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////



let img = []; 
let pasos = 0; 


// =================================================================
// PRELOAD 
// =================================================================
function preload() {
 for (let i = 0; i <= 4; i++) {
  img.push(loadImage("imagenes/imagen" + i + ".png"));
}
}

// =================================================================
// SETUP
// =================================================================


function setup() {
  let canvas = createCanvas(700, 700);
  canvas.parent('div-sketch');
  
  noStroke();
  


}

// =================================================================
// DRAW 
// =================================================================
function draw() {
  
  if (pasos == 0) {
    CieloSoleado();
  } else if (pasos == 1) {
    CieloOtonio();
  } else if (pasos == 2) {
    CieloLluvioso(); 
  } else if (pasos == 3) {
    CieloTriste();
  }
   else if (pasos == 4) {
    CieloRenacer(); 
  }

 
  image(img[pasos], 0, 0, 700, 700); 

  

}


// =================================================================
// KEYPRESSED
// =================================================================

function keyPressed() {
  if (key == 'D'||key == 'd') {
    pasos = (pasos + 1) % img.length;
  } //else if (key == 'A'||key == 'a') {
  //  pasos = (pasos - 1) % img.length;
  //}
}



// =================================================================
// FUNCIONES DE CIELOS
// =================================================================

function CieloSoleado() {
  
  background(150, 210, 255); 

  //sol 
  for (let i = 200; i > 0; i -= 10) {
    fill(255, 230, 150, 20);
    ellipse(550, 200, i); 
  }
  fill(255, 255, 150);
  ellipse(550, 200, 80); 
}

function CieloOtonio() {

  background(255, 200, 120, 30);
  //sol
  fill(255, 140, 0);
  ellipse(550, 200, 100); 
  
  fill(200, 100, 0, 180);
 
  //lluvia de hojas
  for (let i = 0; i < 20; i++) {
    let x = random(0,700); 
    let y = random(0,700); 
    rect(x, y, 3, 5);
  }
}

// Cielo lluvioso 
function CieloLluvioso() {
  background(40, 60, 80, 50);

  noStroke();
  fill(60, 80, 100, 200);
  ellipse(350, 140, 400, 250);

  // Lluvia: 
  
  

  for (let i = 0; i < 120; i++) {
   
    let x = random(0,700); 
    let y = random(0,700); 
   
    stroke(220);
    line(x, y,   x + 5,    y + 10);
  }
  

}

function CieloTriste() {
  noStroke();
  background(10, 15, 25);

  
   // Luna menguante
  fill(220, 220, 230, 200);
  ellipse(175, 210, 80);
  
  
  fill(10, 15, 25);
  ellipse(190, 210, 80);

  
}

function CieloRenacer() {
 

  background(255, 210, 105, 15); 

  // Sol naciendo
  noStroke();
  
  fill(255, 230, 150);
  ellipse(550, 150, 100);
  fill(255, 255, 180);
  ellipse(550, 150, 60);
}



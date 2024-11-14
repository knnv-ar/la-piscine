let imagen;
let shapes = [];
let shapes2 = [];
let shapes3 = [];
let shapes4 = [];
let interval = 60; 
let frameCounter = 0;
let currentArray = 0; 

function preload() {
  imagen = loadImage("persona.jpg");
}

function setup() {
  createCanvas(1100, 800);
 
  shapes.push({ type: 'ellipse', x:560, y: 450, w: 50, h: 50 });
  shapes.push({ type: 'triangle', x1: 600, y1: 300, x2: 650, y2: 250, x3: 700, y3: 300 });
  shapes.push({ type: 'triangle', x1: 400, y1: 300, x2: 450, y2: 250, x3: 500, y3: 300 });
  shapes.push({ type: 'rect', x: 450, y: 400, w: 50, h: 150 });
  shapes.push({ type: 'rect', x: 610, y: 400, w: 50, h: 150 });
  shapes.push({ type: 'quad', x1: 530, y1: 550, x2: 570, y2: 550, x3: 600, y3: 600, x4: 500, y4: 600 });
  
 shapes2.push({ type: 'rect', x: 500, y: 200, w: 100, h: 100 });
 shapes2.push({ type: 'line', x1: 450, y1: 500, x2: 700, y2: 250 });
 shapes2.push({ type: 'line', x1: 670, y1: 500, x2: 400, y2: 250 });
 shapes2.push({ type: 'circle', x: 670, y: 430, size: 70 });
 shapes2.push({ type: 'circle', x: 450, y: 430, size: 70 });
 shapes2.push({ type: 'triangle', x1: 500, y1: 600, x2: 560, y2: 540, x3: 630, y3: 600 });

  
 shapes3.push({ type: 'rect', x: 430, y: 400, w: 30, h: 150 });
 shapes3.push({ type: 'rect', x: 550, y: 300, w: 30, h: 150 });
 shapes3.push({ type: 'rect', x: 650, y: 400, w: 30, h: 150 });
 shapes3.push({ type: 'rect', x: 430, y: 260, w: 250, h: 30 });

  
shapes4.push({ type: 'quad', x1: 490, y1: 520, x2: 530, y2: 540, x3: 550, y3: 600, x4: 450, y4: 550 });
shapes4.push({ type: 'quad', x1: 630, y1: 515, x2: 590, y2: 545, x3: 580, y3: 600, x4: 670, y4: 550 });
shapes4.push({ type: 'triangle', x1: 510, y1: 460, x2: 560, y2: 500, x3: 610, y3: 460 });
shapes4.push({ type: 'circle', x: 430, y: 300, size: 50 });
shapes4.push({ type: 'circle', x: 690, y: 300, size: 50 });
shapes4.push({ type: 'rect', x: 400, y: 400, w: 50, h: 50 });
shapes4.push({ type: 'rect', x: 660, y: 400, w: 50, h: 50 });
}

function draw() {
  background(220);
  image(imagen, -100, 0);

 if (currentArray === 0) {
    drawShapes(shapes);
  } else if (currentArray === 1) {
    drawShapes(shapes2);
  } else if (currentArray === 2) {
    drawShapes(shapes3);
  } else if (currentArray === 3) {
    drawShapes(shapes4);
  }

  
  if (!mouseIsPressed) {
    frameCounter++;
    if (frameCounter >= interval) {
      frameCounter = 0; 
      currentArray = (currentArray + 1) % 4; 
    }
  }
}


function drawShapes(shapeArray) {
  for (let shape of shapeArray) {
    drawShape(shape);
  }
}

function drawShape(shape) {
  if (shape.type === 'circle') {
    ellipse(shape.x, shape.y, shape.size);
  } else if (shape.type === 'rect') {
    rect(shape.x, shape.y, shape.w, shape.h);
  } else if (shape.type === 'line') {
    line(shape.x1, shape.y1, shape.x2, shape.y2);
  } else if (shape.type === 'ellipse') {
    ellipse(shape.x, shape.y, shape.w, shape.h);
  } else if (shape.type === 'triangle') {
    triangle(shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3);
  } else if (shape.type === 'quad') {
  quad(shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3, shape.x4, shape.y4);
}
}

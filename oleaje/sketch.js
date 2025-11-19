let lines = [];
let numLines = 13; // menos líneas para mejor rendimiento
let spacing = 20;

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  colorMode(HSB, 360, 100, 100, 1);

  for (let i = 0; i < numLines; i++) {
    lines.push(new WaveLine(i * spacing - numLines*spacing/2));
  }
}

function draw() {
  background(10, 0, 20); // fondo oscuro tipo océano
  orbitControl(); // permite rotar la vista con el mouse

  ambientLight(80);
  directionalLight(200, 80, 100, 0, -1, -1);

  for (let l of lines) {
    l.update();
    l.show();
  }
}

class WaveLine {
  constructor(zOffset) {
    this.zOffset = zOffset;
    this.points = [];
    this.numPoints = 30; // menos puntos por línea para fluidez
    this.speed = random(0.01, 0.03);

    for (let i = 0; i < this.numPoints; i++) {
      this.points.push(createVector(i * 8 - this.numPoints*4, 0, this.zOffset));
    }
  }

  update() {
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      p.y = sin(i * 0.2 + frameCount * this.speed + this.zOffset*0.1) * 50;
      p.x = i * 8 - this.numPoints*4 + sin(frameCount * this.speed + i*0.1) * 10;
      p.z = this.zOffset + sin(frameCount * this.speed + i*0.05) * 20;
    }
  }

  show() {
    noFill();
    // colores tipo océano: azul-cian degradado
    for (let i = 0; i < this.points.length - 1; i++) {
      let hue = map(i, 0, this.points.length, 180, 220); // tonos azules
      stroke(hue, 80, 100);
      strokeWeight(2);
      let p1 = this.points[i];
      let p2 = this.points[i+1];
      line(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
    }
  }
}

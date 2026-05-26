
let kitty;
let musica;
let sangre = [];
let manchas = [];    
let clickSostenido = false;

let escala = 800 / 2048;


let puntosSangre = {
  corona: [
    { x: 744 * escala, y: (633 - 230) * escala },
    { x: 1310 * escala, y: (633 - 230) * escala }
  ],
  mano_izq: { x: (610 + 40) * escala, y: (694 - 150) * escala },
  mano_der: { x: (1435 - 40) * escala, y: (696 - 150) * escala },
  pies:     { x: 1035 * escala, y: (1503 - 150) * escala }
};

function preload() {
  kitty = loadImage('kitty.png');
  musica = loadSound('musica.mp3');
}

function setup() {
  let canvas = createCanvas(800, 600);
canvas.parent('div-sketch');
 
  imageMode(CENTER);
  
  musica.loop();
  musica.setVolume(0.4);
}

function draw() {
  background(255);
  
  image(kitty, width/2, height/2, 700, 700);
  
  // manchas
  noStroke();
  fill(150, 0, 0);
  for (let m of manchas) {
    // mancha base y extencion hacia los costados
    ellipse(m.x, m.y, m.tam, m.tam * 1.8);
    if (m.tam > 30) {
      ellipse(m.x - m.tam * 0.6, m.y + 10, m.tam * 0.7, m.tam * 0.4);
      ellipse(m.x + m.tam * 0.6, m.y + 10, m.tam * 0.7, m.tam * 0.4);
    }
  }
  
  // gotas de sangre
  for (let i = sangre.length - 1; i >= 0; i--) {
    let g = sangre[i];
    fill(220, 0, 0, g.alpha);
    ellipse(g.x, g.y, g.tamX, g.tamY);
    
    g.y += g.vel;
    g.vel += 0.35;
    g.alpha -= 1.8;
    
    if (g.y > height - 40) {
      
      let spread = random(-40, 40); 
      manchas.push({
        x: g.x + spread,
        y: height - 25 + random(-8, 8),
        tam: g.tamX * random(2, 3.5)
      });
      sangre.splice(i, 1);
    } else if (g.alpha <= 0) {
      sangre.splice(i, 1);
    }
  }
  
  // sangre manteniendo click
  if (clickSostenido && frameCount % 3 === 0) {
    // sangre frente
    let inicio = puntosSangre.corona[0];
    let fin = puntosSangre.corona[1];
    let num = 14;
    for (let i = 0; i < num; i++) {
      let t = i / (num - 1);
      let x = lerp(inicio.x, fin.x, t);
      if (random() < 0.9) {
        sangre.push({
          x: x + random(-5, 5),
          y: inicio.y + random(-4, 4),
          tamX: random(4, 9),
          tamY: random(10, 18),
          vel: random(1.8, 3.8),
          alpha: 255
        });
      }
    }
    
    // sangre manos y pies 
    ['mano_izq', 'mano_der', 'pies'].forEach(p => {
      let punto = puntosSangre[p];
      if (random() < 0.95) {
        sangre.push({
          x: punto.x + random(-9, 9),
          y: punto.y + random(-7, 7),
          tamX: random(5, 11),
          tamY: random(12, 22),
          vel: random(2, 4),
          alpha: 255
        });
      }
    });
  }
}

function mousePressed() {
  clickSostenido = true;
}

function mouseReleased() {
  clickSostenido = false;
}
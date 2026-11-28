// variable
let movimiento =0
let velocidad=1;


function setup() {
let canvas = createCanvas (640,460);
canvas.parent('div-sketch');
}

function draw() {
background(230);

movimiento = movimiento + velocidad;

if (movimiento > 80 || movimiento < -80) {
    velocidad = velocidad * -1;
}

for (let i = 0; i < 20; i++) {

    fill(0, 150);
    
    rect( 
random (width) + movimiento,
random (height), 
    mouseX / 10,
    mouseY / 10,

    );
}
}

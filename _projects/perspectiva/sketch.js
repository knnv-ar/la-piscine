let colores = [];
let numSubdivisiones = 10;
let tamCaja;
let animar = false;
let audio; 

function preload() {
    audio = loadSound('sonidos/fondo.mp3');
}

function setup() {
    let canvas = createCanvas(600, 600, WEBGL);
    canvas.parent('div-sketch');

    colores = [
        color(255, 0, 100),
        color(235, 194, 0),
        color(0, 255, 200),
        color(0, 100, 255),
        color(0, 0, 0)
    ];
    camera(0, 900, 700);
}

function draw() {
    background(0);
    tamCaja = height / ((colores.length - 1) * numSubdivisiones);

    directionalLight(255, 255, 255, 0, 0, -1);
    ambientLight(60);

    for (let i = 0; i < colores.length - 1; i++) {
        for (let j = 0; j < numSubdivisiones; j++) {
            let inter = map(j, 0, numSubdivisiones, 0, 1);
            let c = lerpColor(colores[i], colores[i + 1], inter);
            fill(c);
            
            let y = (i * numSubdivisiones + j) * tamCaja - height / 2;
            let z = animar ? sin((frameCount + j * 15) * 0.05) * 20 : 0;
            
            push();
            translate(0, y, z);
            box(width, tamCaja, tamCaja);
            pop();
        }
    }
        
    rotateX(5);
  
    const ajusteAltura = -200;
  
    push();
    fill(0, 100, 255);
    translate(0, ajusteAltura + 50, 0);
    box(50, 100, 30);
    pop();

    push();
    fill(255, 220, 185);
    translate(0, ajusteAltura - 30, 0);
    sphere(25);
    pop();

    push();
    fill(255, 220, 185);
    translate(0, ajusteAltura - 10, 0);
    cylinder(10, 20);
    pop();

    push();
    fill(255, 220, 185);
    translate(-30, ajusteAltura + 45, 0);
    rotateZ(PI / 7);
    cylinder(10, 70);
    pop();

    push();
    fill(255, 220, 185);
    translate(30, ajusteAltura + 45, 0);
    rotateZ(-PI / 7);
    cylinder(10, 70);
    pop();

    push();
    fill(255, 220, 185);
    translate(-12, ajusteAltura + 120, -5);
    rotateX(PI / -20);
    cylinder(10, 80);
    pop();

    push();
    fill(255, 220, 185);
    translate(12, ajusteAltura + 120, 10);
    rotateX(PI / 15);
    cylinder(10, 80);
    pop();
  
    orbitControl();
}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        animar = !animar;
        if (!audio.isPlaying()) {
            audio.loop(); 
        } else {
            audio.stop();
        }
    }  
}
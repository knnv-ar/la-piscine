// ***** si el usuario clickea un cubo formará un autorretrato loquito, eventualmente . . . ******


let tamañodeCubos;
let espacio;
let cubes = []; //creo el array para los cubos
let textures = []; //creo el array para las texturas
let currentTextureIndex = 0; // índice de la textura actual
let cam;


function preload() {
    for (let i = 0; i < 10; i++) { // cargo las imagenes para las texuras
        textures[i] = loadImage(`assets/img0${i}.jpg`); // literal strings
    }
}

function setup() {
    let canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('div-sketch');

    // cargo los datos de la camara para usar luego
    cam = createCapture(VIDEO);
    cam.size(300, 240);
    cam.hide();

    tamañodeCubos = 90;
    espacio = 10;

    for (let i = 0; i < 9; i++) { // creo los 9 Cubos van Gogh
        let x = (i % 3 - 1) * (tamañodeCubos + espacio);
        let y = floor(i / 3 - 1) * (tamañodeCubos + espacio);
        let cube = new Cube(x, y, tamañodeCubos, textures[currentTextureIndex]);
        cubes.push(cube);
    }
}

function draw() {
    background(255, 0, 0);

    // display del Cubo van Gogh
    for (let cube of cubes) {
        cube.display();
    }

    // background real de la obra
    push();
    ambientLight(170);
    directionalLight(255);
    texture(cam);
    box(600, 600, 100, 100, 600);
    pop();
}

function mouseClicked() {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;

    for (let cube of cubes) {
        if (cube.isMouseOver(mx, my)) {
            currentTextureIndex = (currentTextureIndex + 1) % textures.length;
            cube.setTexture(textures[currentTextureIndex]);
        }
    }
}

class Cube { // clase de los cubos, donde defino posicion, tamaño, la rotacion y la textura
    constructor(x, y, size, texture) {
        this.position = createVector(x, y);
        this.size = size;
        this.rotation = createVector(0, 0, 0);
        this.texture = texture;
    }

    display() {
        push();
        translate(this.position.x, this.position.y, this.size / 2);
        rotateX(this.rotation.x);
        rotateY(this.rotation.y);
        rotateZ(this.rotation.z);
        texture(this.texture);
        noStroke();
        box(this.size);
        pop();
    }

    rotateRandomly() { // rota las caras del cubo
        this.rotation.x += random([0, HALF_PI, -HALF_PI]);
        this.rotation.y += random([0, HALF_PI, -HALF_PI]);
        this.rotation.z += random([0, HALF_PI, -HALF_PI]);
    }

    isMouseOver(mx, my) { // determina si el mouse está sobre el cubo en la pantalla
        let halfSize = this.size / 2;
        let x1 = this.position.x - halfSize;
        let x2 = this.position.x + halfSize;
        let y1 = this.position.y - halfSize;
        let y2 = this.position.y + halfSize;
        return mx >= x1 && mx <= x2 && my >= y1 && my <= y2;
    }

    setTexture(newTexture) {
        this.texture = newTexture;
    }

}
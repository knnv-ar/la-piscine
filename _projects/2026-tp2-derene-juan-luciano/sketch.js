/*
--------------------------------------------------------
Juan Luciano Derene
Artes Multimediales 1
Trabajo Practico N°2
"Entropia" (2026)
Catedra: Lacabanne
Turno: Mañana
SUGERENCIAS:
Pulsa la tecla "E" para generar entropia.
--------------------------------------------------------
*/

let texturaExterior;
let texturaMesa;
let texturaPared;
let synth1;
let synth2;

async function setup() {
  let canvas = createCanvas(1024, 1024, WEBGL); 
  canvas.parent('div-sketch');

  texturaExterior = await loadImage("img/texturametal.png");
  texturaMesa = await loadImage("img/texturamesa.png");
  texturaPared = await loadImage("img/texturapared.png");
  synth1 = await loadSound("son/synth1.mp3");
  synth2 = await loadSound("son/synth2.mp3");
  frameRate(60);
  noStroke();
  synth1.play();
  synth1.onended(() => {
    synth2.loop(true);
    synth2.play();
  });
}

function draw() {
  background(110, 106, 106);
  camera(0, 30, 1300, 0, 0, 0, 0, 500, 0);

  let options = { disableTouchActions: true, freeRotation: false };
  orbitControl(1, 1, 1, options);

  ambientLight(40);
  pointLight(255, 121, 0, 0, -850, -170);
  pointLight(255, 121, 0, 0, 300, 100);
  pointLight(255, 255, 255, 400, 700, 170);

  push();
  texture(texturaMesa);
  translate(0, 650, 0);
  rotateX(1.5708);
  noStroke();
  plane(1300, 1300);
  pop();

  for (let i = 0; i < 10; i++) {
    push();
    // Vel
    let vel = map(i % 2, 0, 2, 0.001, 0.002);
    let vel2 = frameCount * vel + i * 0.5;
    // Mov
    let x = map(noise(i * 9, vel2 * 0.5), 0, 1, -90, 90);
    let y = map(sin(vel2), -1, 1, 390, -370); // Arriba y Abajo
    let z = map(noise(i * 20, vel2 * 0.3), 0, 1, -70, 70);

    translate(x, y, z);

    // Deformación conectada con Mov
    let velY = cos(vel2);
    let estirarY = map(abs(velY), 0, 1, 0.5, 2);
    let estirarXZ = map(abs(velY), 0, 1, 1.25, 2);
    scale(estirarXZ, estirarY, estirarXZ);

    specularMaterial(255, 121, 0);
    shininess(3);
    Fluido(53, vel2, i);
    pop();
  }

  push();
  texture(texturaPared);
  translate(0, 0, 200);
  sphere(1700, 300);
  pop();
  // Arriba

  push();
  specularMaterial(255, 121, 0);
  shininess(20);
  translate(0, -434, 0);
  fill("white");
  cylinder(200, 3);
  pop();

  push();
  texture(texturaExterior);
  translate(0, -450, 0);
  cylinder(200, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, -470, 0);
  cylinder(190, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, -490, 0);
  cylinder(180, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, -510, 0);
  cylinder(170, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, -530, 0);
  cylinder(160, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, -550, 0);
  cylinder(150, 30);
  pop();

  push();
  specularMaterial(255, 144, 26);
  shininess(4);
  translate(0, 434, 0);
  fill("white");
  cylinder(200, 3);
  pop();

  //Centro
  push();
  specularMaterial(255, 255, 255);
  shininess(10);
  translate(0, 0, 0);
  fill(255, 255, 255, 60);
  cylinder(200, 870);
  pop();

  //Abajo
  push();
  texture(texturaExterior);
  translate(0, 450, 0);
  cylinder(200, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 470, 0);
  cylinder(180, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 490, 0);
  cylinder(160, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 510, 0);
  cylinder(140, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 530, 0);
  cylinder(120, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 550, 0);
  cylinder(100, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 570, 0);
  cylinder(100, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 590, 0);
  cylinder(110, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 610, 0);
  cylinder(120, 30);
  pop();

  push();
  texture(texturaExterior);
  translate(0, 630, 0);
  cylinder(130, 30);
  pop();
}

//Fluido
function Fluido(radius, vel2, id) {
  let redondearU = 8;
  let redondearV = 8;
  let distU = 9;
  let distV = 1.6;

  for (let i = 0; i < redondearV; i++) {
    let redV1 = map(i, 0, redondearV, -distV, distV);
    let redV2 = map(i + 1, 0, redondearV, -distV, distV);

    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j <= redondearU; j++) {
      let redUV1 = map(j, 0, redondearU, 0, distU);

      // Vertice 1
      let v1 = deformarConRedondear(radius, redV1, redUV1, vel2, id);
      vertex(v1.x, v1.y, v1.z);

      // Vertice 2
      let v2 = deformarConRedondear(radius, redV2, redUV1, vel2, id);
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
  }
}

function deformarConRedondear(r, lat, redUV1, vel2, id) {
  let deformar =
    sin(lat * 3 + redUV1 * 4 + vel2 * 7 + id) * 6 + cos(redUV1 * 3 - vel2) * 7;

  let rFinal = r + deformar;

  return createVector(
    rFinal * cos(lat) * cos(redUV1),
    rFinal * sin(lat),
    rFinal * cos(lat) * sin(redUV1)
  );
}

function keyPressed() {
  if (key === "e" || key === "E") {
    saveCanvas("entropia", "jpeg");
  }
}

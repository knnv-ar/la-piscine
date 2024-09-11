let tamañoCuadrado = 50; 
let espacioEntre = -40; 
let cantidadCuadrados = 21; 

function setup() {
  // createCanvas(512, 512);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  //---------------------------------------------------CUADRADO_1 (esquina inferior izquierda)
  push();
  fill(100);
  noStroke();
  for (let i = 0; i < cantidadCuadrados; i++) {
    let x_caja = 135 - i * (tamañoCuadrado + espacioEntre) * 1; // Calcula la posición X de cada cuadrado
    let y_caja = 280 + i * (tamañoCuadrado + espacioEntre); // Centra los cuadrados en el eje Y
    fill(i % 2 == 0 ? 255 : 0); // Alterna el color
    rect(x_caja, y_caja, tamañoCuadrado, tamañoCuadrado);
  }
  pop();
  
  //---------------------------------------------------CUADRADO_2 (costado superior derecho)
  push();
  fill(100);
  noStroke();
  for (let i = 0; i < cantidadCuadrados; i++) {
    let x_caja = width - 16 - i * (tamañoCuadrado + espacioEntre); // Calcula la posición X de cada cuadrado
    let y_caja = 60 + i * (tamañoCuadrado + espacioEntre); // Centra los cuadrados en el eje Y
    fill(i % 2 == 0 ? 255 : 0); // Alterna el color
    rect(x_caja, y_caja, tamañoCuadrado, tamañoCuadrado);
  }
  pop();
  
  //---------------------------------------------------CUADRADO_3 (cuadrados juntos y centrados)
  push();
  fill(100);
  noStroke();
  for (let i = 0; i < cantidadCuadrados; i++) {
    let x_caja = width / 2 - i * (tamañoCuadrado + (espacioEntre - 10)); // Calcula la posición X de cada cuadrado
    let y_caja = height / 4 - i * (tamañoCuadrado + (espacioEntre - 8)); // Centra los cuadrados en el eje Y
    fill(i % 2 == 0 ? 255 : 0); // Alterna el color
    rect(x_caja, y_caja, tamañoCuadrado, tamañoCuadrado);
  }
  pop();
  
  //---------------------------------------------------CUADRADO_4 (esquina superior izquierda)
  push();
  fill(100);
  noStroke();
  for (let i = 0; i < cantidadCuadrados; i++) {
    let x_caja = i * (tamañoCuadrado + espacioEntre); // Calcula la posición X de cada cuadrado
    let y_caja = i * (tamañoCuadrado + espacioEntre); // Centra los cuadrados en el eje Y
    fill(i % 2 == 0 ? 255 : 0); // Alterna el color
    rect(x_caja, y_caja, tamañoCuadrado, tamañoCuadrado);
  }
  pop();
  
  //---------------------------------------------------CUADRADO_5 (superior izquierdo centrado)
  push();
  fill(100);
  noStroke();
  for (let i = 10; i < cantidadCuadrados; i++) {
    let x_caja = 115 - i * (tamañoCuadrado + (espacioEntre - 15)); // Calcula la posición X de cada cuadrado
    let y_caja = 100 + i * (tamañoCuadrado + (espacioEntre - 15)); // Centra los cuadrados en el eje Y
    fill(i % 2 == 0 ? 255 : 0); // Alterna el color
    rect(x_caja, y_caja, tamañoCuadrado, tamañoCuadrado);
  }
  pop();
  
  //---------------------------------------------------CUADRADO_6 (diagonal inferior derecha)
  push();
  fill(100);
  noStroke();
  for (let i = 0; i < cantidadCuadrados; i++) {
    let x_caja = width - 170 - i * (tamañoCuadrado + espacioEntre) * 0.5; // Calcula la posición X de cada cuadrado
    let y_caja = height - 45 - i * (tamañoCuadrado + espacioEntre) * 0.6 ; // Calcula la posición Y de cada cuadrado
    fill(i % 2 == 0 ? 255 : 0); // Alterna el color
    rect(x_caja, y_caja, tamañoCuadrado, tamañoCuadrado);
  }
  pop();
}

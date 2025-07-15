// console.log("'barras'");;
// console.log("Tobias Gorschin - TP1 Artes Multimediales Cat.Lacabanne");
// console.log("Título de la Obra: Des(Ordres)");
// console.log("Año: 1974");
// console.log("Autor/a: Vera Molnár"); 
// console.log ("Enlace a la obra: https://dam.org/museum/artists_ui/artists/molnar-vera/des-ordres/");

let x = 0;
let y = 0;
let espacio = 20;

function setup() {
  createCanvas(512, 512);
  background(0);
  stroke(0);
  frameRate(120);

}

function draw() {
  stroke(255);
  strokeWeight(2)
  if (random(1) < 0.250) {
    line(x, y, x + espacio, y + espacio); // barra normal
  } else {
    line(x, y + espacio, x + espacio, y); // barra invertida
  }
  
  x = x + espacio;
  if (x >= width) {
    x = 0;
    y = y + espacio;
  }

  if (y >= height) {
    noLoop();
  }
}

// Funcion para que cuando haga click, se reinicie la pantalla.

function mousePressed() {
    x = 0;
    y = 0;
    background(0);
    espacio = int(random(20, 100)); // se le asigna un valor random entre 20 y 100 al espacio para que cambie en cada imagen nueva.
    loop();  // vuelve a activar draw()
}

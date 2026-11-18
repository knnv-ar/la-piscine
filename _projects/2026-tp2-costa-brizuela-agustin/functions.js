
// Dibuja las tres bandas del fondo, de arriba hacia abajo
function dibujarFondo() 
{
  for (let i = 0; i < fondo.length; i++) 
  {
    dibujarBanda(fondo[i].img, fondo[i].y, fondo[i].actual); //cada ciclo manda a laburar a "dibujarBanda" le suma 1 en cada iteracion y eso hace que i valga 1 mas justamente, entonces llama a la imagen, a la posicion y, y al estado actual de cada imagen en especifico
  }
}

// Llena una banda horizontal repitiendo la imagen a lo ancho, el desplazamiento mueve la imagen, con el módulo (%) lo que sale por un lado vuelve a entrar por el otro, así nunca quedan huecos.
function dibujarBanda(img, y, desplazamiento) {
  let anchoImagen = altoBanda * (img.width / img.height);
  let desfase = ((desplazamiento % anchoImagen) + anchoImagen) % anchoImagen;

  for (let x = desfase - anchoImagen; x < width; x += anchoImagen) 
  {
    image(img, x, y, anchoImagen, altoBanda);
  }
}

function dibujarCopias() {
  for (let i = 0; i < copias.length; i++) 
  {
    dibujarInterface(copias[i].x, copias[i].y, copias[i].ancho);
  }
}

// Dibuja interface centrada en (x, y), manteniendo la proporción
function dibujarInterface(x, y, ancho) {
  let alto = ancho * (imgInterface.height / imgInterface.width);
  image(imgInterface, x - ancho / 2, y - alto / 2, ancho, alto);
}

//esto es para que cree la copia cuando haces click y que agrande la siguiente

function crearCopia() {
  // cuando haces click las cordenadas del cursor quedan guardadas, se lo manda a copias y deja ahi la imagen 
  copias.push
  ({
    x: mouseX,
    y: mouseY,
    ancho: width * escalaNueva,
  });
}

function agrandarProximaCopia() {
  escalaNueva = escalaNueva * crecimiento;

  // Tope: nunca más grande que el lienzo
  if (escalaNueva > escalaMaxima()) 
  {
    escalaNueva = escalaMaxima();
  }
}

// Devuelve la escala con la que interface ocupa justo el lienzo (ancho y alto)
function escalaMaxima() {
  let proporcion = imgInterface.height / imgInterface.width;
  let maxima = (height / width) / proporcion;

  if (maxima > 1) {
    maxima = 1;
  }
  return maxima;
}

function desplazarFondo() {
  for (let i = 0; i < fondo.length; i++) {
    fondo[i].objetivo += pasoDesplazamiento * fondo[i].dir;
  }
}

//reinicia todo 
function reiniciar() {
  copias = [];
  escalaNueva = escalaInicial;

  for (let i = 0; i < fondo.length; i++) {
    fondo[i].actual = 0;
    fondo[i].objetivo = 0;
  }
}

//Esto es para que si le falta un toquesito avance un poco mas asi no queda cortina la animacion

function actualizarFondo() {
  for (let i = 0; i < fondo.length; i++) {
    fondo[i].actual += (fondo[i].objetivo - fondo[i].actual) * facilidad;
  }
}

// Devuelve true si el mouse está dentro del lienzo, si no, no hace na 
function mouseEnLienzo() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    return true;
  }
  return false;
}
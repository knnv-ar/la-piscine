///////////////////////////////////VARIABLES/////////////////////////////////////////////////////
let lomejor;
let megusta;
let viernes;
let grasa;
let violencia;
let bruma;
let font;
let escena = 0;
let tamanio = 200; // tamaño de imágenes del fondo
let portada; // cambio de portada
let anguloY = 0;
let anguloMouseY = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////
function preload() {
  lomejor = loadImage("./img/lo-mejor-de-pescado-rabioso.png");
  megusta = loadSound("./musica/me-gusta-ese-tajo.mp3");
  viernes = loadSound("./musica/viernes-3am.mp3");
  grasa = loadImage("./img/la-grasa-de-las-capitales.png");
  violencia = loadSound("./musica/violencia-en-el-parque.mp3");
  bruma = loadImage("./img/bruma.png");
  font = loadFont("./fuente/typewriter.otf");
  colectivo = loadSound("./musica/inconsciente-colectivo.mp3");
}
///////////////////////////////////////////SETUP/////////////////////////////////////////////////

function setup() {
  //createCanvas(800, 800, WEBGL);
  let canvas = createCanvas(800, 800, WEBGL);
  canvas.parent('div-sketch');
  textFont(font); //fuente
  colectivo.loop();

  //////////////////////////////////////////BOTON////////////////////////////////////////////////

  let boton = createButton("siguiente");
  boton.position(700, 760);
  boton.mouseClicked(siguienteEscena);
}

//////////////////////////////////////////DRAW///////////////////////////////////////////////////

function draw() {
  background(0);
  //////////////////////////////////////////ESCENAS//////////////////////////////////////////////

  if (escena === 0) {
    background(0);

    push();
    textSize(40);
    textAlign(CENTER);
    text('"Del 76"', 0, -300);
    pop();

    mostrarTextoCensura();
  } else if (escena === 1) {
    portada = lomejor;
    InfoCancion(
      "Me gusta ese tajo",
      "Luis Alberto Spinetta",
      "Censurada por su connotación sexual."
    );
  } else if (escena === 2) {
    portada = grasa;
    InfoCancion(
      "Viernes 3 AM",
      "Serú Girán",
      "Censurada por 'incentivar al suicidio'."
    );
  } else if (escena === 3) {
    portada = bruma;
    InfoCancion(
      "Violencia en el parque",
      "Aquelarre",
      "Censurada por su crítica a la violencia y represión."
    );
  } 

  //////////////////////////////////////////IMAGENES DEL FONDO///////////////////////////////////

  if (escena > 0 && escena < 4) {
    // Asegúrate de que haya una portada válida
    push();
    scale(1.4);
    translate(-400, -400, -200);
    for (let x = 0; x < width; x += tamanio) {
      for (let y = 0; y < height; y += tamanio) {
        image(portada, x, y, tamanio, tamanio);
      }
    }
    pop();
  }

  //////////////////////////////////////////CUADRADO QUE GIRA///////////////////////////////////

  if (escena > 0 && escena < 4) {
    // Solo dibuja el vinilo si hay una portada
    dibujarVinilo(portada);
  }

  //////////////////////////////////////////FONDO MEDIO OSCURO///////////////////////////////////

  push();
  translate(0, 0, -190); // -190 para que esté por delante de las imágenes del for
  fill(0, 150); // opacidad
  noStroke();
  plane(1000);
  pop();

  //////////////////////////////////////////ILUMINACIÓN//////////////////////////////////////////

  ambientLight(125); // para que sume luz
  pointLight(255, 255, 255, 0, 0, 300); // luz delantera del rect que gira
  pointLight(255, 255, 255, 0, 0, -300); // luz trasera del rect que gira
} // fin draw

//////////////////////////////////////////FUNCIONES//////////////////////////////////////////////

function siguienteEscena() {
  escena++;
  if (escena === 1) {
    colectivo.stop();
    megusta.loop();
  } else if (escena === 2) {
    megusta.stop();
    viernes.loop();
  } else if (escena === 3) {
    viernes.stop();
    violencia.loop();
  } else if (escena > 3) {
    escena = 0;
    violencia.stop();
    colectivo.stop();
    colectivo.loop();
  } 
}

function InfoCancion(cancion, artista, descripcion) {
  push();
  textAlign(LEFT);
  textSize(25);
  text(cancion + " - " + artista, -350, 300);
  text(descripcion, -350, 320);
  pop();
}

function dibujarVinilo(portada) {
  push();
  //rotateY(frameCount * 0.01); // Rotación en el eje Y y velocidad de giro
  anguloY += 0.01;
  rotateY(anguloY + anguloMouseY);
  texture(portada);
  noStroke();
  plane(300, 300); // Usa plane con las dimensiones deseadas
  pop();
}

function mostrarTextoCensura() {
  push();
  textSize(18);
  textAlign(CENTER);

  let texto = `Durante la dictadura militar en Argentina (1976-1983), la censura y 
la prohibición de canciones fueron herramientas clave para controlar la 
cultura y suprimir cualquier forma de oposición. El régimen perseguía a 
artistas y músicos cuyas letras criticaban el autoritarismo, la represión 
y la violencia del gobierno.
  
Canciones que abordaban temas como la libertad, la justicia social y los 
derechos humanos fueron censuradas o modificadas. Muchas obras de artistas 
emblemáticos como Luis Alberto Spinetta, Serú Girán y Aquelarre fueron 
prohibidas por considerarse subversivas. Esta censura no solo afectó 
a la música, sino que también contribuyó a un ambiente de miedo y 
autocensura en la sociedad, en la cual el arte se convirtió en un 
medio de resistencia.
  
A pesar de la represión, muchos músicos lograron transmitir mensajes de 
esperanza y lucha a través de sus obras, dejando un legado que perdura 
hasta hoy. La censura en esta época es recordada como una violación grave 
de la libertad de expresión, y su impacto aún resuena en la cultura 
argentina contemporánea.`;

  // Ajustar las coordenadas para centrar el texto en el canvas
  text(texto, 0, -180); // Ajusta según sea necesario para centrar
  pop();
}

function mouseDragged() {
  // Ajustar la rotación en el eje X con el movimiento del mouse
  anguloMouseY += movedX * 0.01; // Cambia la sensibilidad si es necesario
}
/////////////////////////////////////////////////////////////////////////////////////////////////
let phrasesD = [
  "instruírse", 
  "comprendiendo la posibilidad de los lenguajes", 
  "sin juicio, dejar que la historia se cuente", 
  "que se construya", 
  "sin intentar construírla",
  "conformar una narrativa en conjunto",
  "acoger,tambien, lo ajeno",
  "salir un poco de la propia narrativa",
];

let phrasesI = [
  "instruirse bajo la aceptacion;", 
  "digamos, estar en paz con la ambiguedad", 
  "Con la dificultad de las contradicciones", 
  "Es un aprender a acoger la pluralidad de versiones",
  "dejarse instruír por la polifonia",
  "conformar una polifonia",
  "dejarla sonar",
];

let currentPhrase = 0;
let clickableLetter = '';
let xPos, yPos;
let clickableIndicesD = [[0], [6], [27, 37], [11], [21], [31], [11], [4]]; 
let clickableIndicesI = [[2], [34], [4], [6, 46], [0], [12], [10], [0]];  
let imagesD = [];
let imagesI = [];
let soundsD = [];
let soundsI = [];
let currentImage, currentSound;
let currentClickableIndex = 0;
let versionSelected = '';
let fadeOpacity = 2;
let showCredits = false;
let creditButton;

function preload() {
  // Cargar imágenes y sonidos
  imagesD[0] = loadImage("img/d02.jpg");
  imagesD[1] = loadImage("img/d03.jpg");
  imagesD[2] = loadImage("img/d04.jpg");
  imagesD[3] = loadImage("img/d06.jpg");
  imagesD[4] = loadImage("img/d08.jpg");
  imagesD[5] = loadImage("img/d09.jpg");
  imagesD[6] = loadImage("img/d10.jpg");

  soundsD[0] = loadSound("sonidos/trenambiente001.mp3");

  imagesI[0] = loadImage("img/i1.jpg");
  imagesI[1] = loadImage("img/i2.jpg");
  imagesI[2] = loadImage("img/i3.jpg");
  imagesI[3] = loadImage("img/i4.jpg");
  imagesI[4] = loadImage("img/i5.jpg");
  imagesI[5] = loadImage("img/i6.jpg");

  soundsI[0] = loadSound("sonidos/birds1.mp3");
  soundsI[2] = loadSound("sonidos/birds2.mp3");
  soundsI[4] = loadSound("sonidos/birds4.mp3");

  tipografia = loadFont('CourierPrime-Regular.ttf');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  let canvas = createCanvas(700, 600);
   canvas.parent('div-sketch');
  textSize(18);
  textFont(tipografia);
  noStroke();

  // Crear el botón de reinicio
  creditButton = createButton('instrucciónes');
  creditButton.position(width / 2 - 60, height / 1.5);
  creditButton.mousePressed(restartGame);
  creditButton.hide();
  
  creditButton.style('color', '#7C1A2D');
  creditButton.style('border-radius', '5px');
  creditButton.style('cursor', 'pointer');
  creditButton.style('border', 'none');
}

function draw() {
  if (showCredits) {
    // Mostrar los créditos si ya hemos llegado al final
    displayCredits();
    return;
  }

  background(250);
  fill(210);
  rect(0, 0, width, height, 50);
  textAlign(LEFT, TOP);

  if (versionSelected === '') {
    let phrase = "Dejarse instru r";
    xPos = width / 2 - textWidth(phrase) / 2;
    yPos = height / 2;

    fill(255);
    text(phrase, xPos, yPos);

    fill(124, 26, 45);
    text('D', xPos, yPos);
    text('í', xPos + textWidth("Dejarse Inst r"), yPos);
  }

  if (versionSelected !== '') {
    let phrasesList = versionSelected === 'D' ? phrasesD : phrasesI;
    let clickableIndices = versionSelected === 'D' ? clickableIndicesD : clickableIndicesI;
    let imagesList = versionSelected === 'D' ? imagesD : imagesI;
    let soundsList = versionSelected === 'D' ? soundsD : soundsI;

    if (currentPhrase < phrasesList.length) {
      let phrase = phrasesList[currentPhrase];
      xPos = width / 2 - textWidth(phrase) / 2;
      yPos = 500;

      fadeOpacity = lerp(fadeOpacity, 255, 0.05);
      fill(255, fadeOpacity);
      text(phrase, xPos, yPos);
 
      let clickableIndexes = clickableIndices[currentPhrase];

      // Resaltar las letras correspondientes
      clickableIndexes.forEach((index) => {
        clickableLetter = phrase.charAt(index);
        let clickableX = xPos + textWidth(phrase.substring(0, index));
        let clickableY = yPos;
        fill(124, 26, 45);
        text(clickableLetter, clickableX, clickableY);
      });

      currentImage = imagesList[currentPhrase];
      if (currentImage) {
        image(currentImage, width / 2 - currentImage.width / 2, 50);
      }

      currentSound = soundsList[currentPhrase];
      if (currentSound && !currentSound.isPlaying()) {
        currentSound.play();
      }
    } else {
      if (currentPhrase === phrasesList.length) {
        showCredits = true;
      }
    }
  }
}

function keyPressed() {
  if (versionSelected === '') {
    if (key.toLowerCase() === 'd') {
      versionSelected = 'D';
      currentPhrase = 0;
      fadeOpacity = 0;
    } else if (key.toLowerCase() === 'i') {
      versionSelected = 'I';
      currentPhrase = 0;
      fadeOpacity = 0;
    }
  } else {
    let phrasesList = versionSelected === 'D' ? phrasesD : phrasesI;
    let clickableIndices = versionSelected === 'D' ? clickableIndicesD : clickableIndicesI;
    let imagesList = versionSelected === 'D' ? imagesD : imagesI;
    let soundsList = versionSelected === 'D' ? soundsD : soundsI;

    if (currentPhrase < phrasesList.length) {
      let phrase = phrasesList[currentPhrase];
      let clickableLetters = clickableIndices[currentPhrase];

      // Avanzar si se presiona la letra correcta
      clickableLetters.forEach((letterIndex) => {
        if (key.toLowerCase() === phrase.charAt(letterIndex).toLowerCase()) {
          currentPhrase++;
          if (currentPhrase < phrasesList.length) {
            currentImage = imagesList[currentPhrase];
            currentSound = soundsList[currentPhrase];

            if (currentSound && !currentSound.isPlaying()) {
              currentSound.play();
            }

            fadeOpacity = 0;
          }
        }
      });

      // Cambiar de historia si se presiona la letra 'c' o 'o'
      if (key.toLowerCase() === 'c' || key.toLowerCase() === 'o') {
        versionSelected = versionSelected === 'D' ? 'I' : 'D';
        currentPhrase = 0;
      }
    }
  }
}

function restartGame() {
  soundsD.forEach(sound => sound.stop());
  soundsI.forEach(sound => sound.stop());
  versionSelected = '';
  currentPhrase = 0;
  fadeOpacity = 0;
  showCredits = false;
  creditButton.hide();
}

function displayCredits() {
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("creditos: a usted, y a la maquina. \n ambos fueron instruídos \n nada más. una entrega abierta ", windowWidth / 2, windowHeight / 2);
  creditButton.show();
}

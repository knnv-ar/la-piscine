//Obra 1
let color1Obra1;
let color2Obra1;
let color3Obra1;

//Obra 2
let fondoObra2;
let lunaObra2;

//Obra 3
let song;
let noteTimes = [ 179320, 180117, 186993, 187809 ];
let currentNoteIndex = 0;
let circleColor = 0; // El círculo inicia como negro (sin relleno)
let activeSquare = -1; 
let score = 0;
let buttonPressed = false;
let noteActive = false;
let noteDuration = 400;
let gameStarted = false; 
let gameEnded = false; 
let fondoObra3;

//Obra 4
let info1, info2, info3, info4, info5, info6, info7, info8, info9, info10, info11;
let inputsCreated = false;

let posicionPuntNegX;
let posicionPuntNegY;
let puntoGris1X = 900;
let puntoGris1Y = 712;
let puntoGris2X = 170;
let puntoGris2Y = 412;
let puntoGris3X = 200;
let puntoGris3Y = 860;
let puntoGris4X = 600;
let puntoGris4Y = 98;

let obra1 = false;
let obra2 = false;
let obra3 = false;
let obra4 = false;
let puntosMuseo = 0;
let sumaPuntos1 = false;
let sumaPuntos2 = false;
let sumaPuntos3 = false;
let textoInfoYPuntos = true;

let proximidad = 15;

function preload() {
  //obra 2
  fondoObra2 = loadImage('obra2/gefi.gif');
  //obra 3
  song = loadSound("obra3/suerte.mp3");
  //obra 4
  certificado = loadImage('obra4/certificado.png');
}


function setup() {
  let canvas = createCanvas(1024, 1024);
  canvas.parent('div-sketch');
  posicionPuntNegX = 512;
  posicionPuntNegY = 512;
  textFont('Courier New');
  
  
    
}

function draw() {
  background(255);
  
  let d1 = dist(posicionPuntNegX, posicionPuntNegY, puntoGris1X, puntoGris1Y);
  let d2 = dist(posicionPuntNegX, posicionPuntNegY, puntoGris2X, puntoGris2Y);
  let d3 = dist(posicionPuntNegX, posicionPuntNegY, puntoGris3X, puntoGris3Y);
  let d4 = dist(posicionPuntNegX, posicionPuntNegY, puntoGris4X, puntoGris4Y);

  // Aparece obra 1
  if (d1 < proximidad) {
    obra1 = true;
    textoInfoYPuntos = false;
    if (!sumaPuntos1) {
    puntosMuseo++; 
    sumaPuntos1 = true;
  }
    } else {
    obra1 = false;
    textoInfoYPuntos = true;
  }
  
   // decide si hay o no obra2
  if (d2 < proximidad) {
    obra2 = true;
    textoInfoYPuntos = false;
    if (!sumaPuntos2) {
    puntosMuseo++; 
    sumaPuntos2 = true;
    }
    } else {
    obra2 = false;
    textoInfoYPuntos = true;
  }
    // decide si hay o no obra3
    if (d3 < proximidad) {
    obra3 = true;
    textoInfoYPuntos = false;
    if (!sumaPuntos3) {
        puntosMuseo++; 
        sumaPuntos3 = true;
    }
          } else {
    obra3 = false;
    textoInfoYPuntos = true;
    // Si no estás en proximidad de obra3, resetea el estado del juego
    if (!gameStarted) {
        gameEnded = false; // Asegúrate de que el juego no haya terminado
        currentNoteIndex = 0; // Reinicia el índice de notas
        score = 0; // Reinicia la puntuación si es necesario
    }
}

// Controla el inicio del juego para obra3
if (obra3) {
    if (!gameStarted) {
        // Aquí se puede iniciar la música
        song.play();
        gameStarted = true; // Marca que el juego ha comenzado
    }
}

  
  //decide si hay o no obra4
  if (d4 < proximidad) {
    obra4 = true;
    textoInfoYPuntos = false;
    } else {
    obra4 = false;
    textoInfoYPuntos = true;
  }
  
  // decide si hay texto
  if (obra1 || obra2 || obra3 || obra4) {
    textoInfoYPuntos = false;
  } else {
    textoInfoYPuntos = true;
  }

  // aparece la obra
  if (obra1) {
  color1Obra1 = min((frameCount * 0.02), 255);
  color2Obra1 = min((frameCount * 0.035), 255);
  color3Obra1 = min((frameCount * 0.013), 255);
  
  background(0);
  strokeWeight(0.5);

  
  stroke(color1Obra1);
  noFill();
  rect(24, 40, 160, 400);
  rect(100, 120, 240, 200);
  rect(300, 20, 180, 360);
  rect(140, 300, 200, 120);
  rect(400, 80, 112, 280);
  rect(180, 140, 220, 180);
  rect(60, 360, 160, 300);
  rect(320, 240, 140, 160);
  rect(40, 500, 200, 140);
  rect(360, 400, 80, 240);
  rect(100, 400, 280, 160);
  rect(240, 300, 120, 180);
  rect(4, 600, 260, 100);
  stroke(color2Obra1);
  rect(400, 300, 104, 200);
  rect(120, 800, 140, 60);
  rect(60, 700, 180, 80);
  rect(440, 140, 80, 220);
  rect(200, 600, 120, 180);
  rect(380, 440, 100, 140);
  rect(80, 800, 220, 120);
  rect(300, 500, 140, 220);
  rect(60, 200, 180, 260);
  rect(420, 60, 80, 180);
  rect(10, 400, 40, 160);
  rect(450, 480, 86, 40);
  stroke(color3Obra1);
  rect(450, 500, 80, 50)
  rect(240, 160, 140, 120);
  rect(160, 400, 180, 140);
  rect(320, 360, 120, 100);
  rect(100, 240, 260, 100);
  rect(200, 700, 200, 180);
  rect(8, 800, 180, 140);
  rect(400, 812, 112, 156);
  rect(380, 600, 120, 270);
  rect(358, 820, 80, 400);
  rect(58, 820, 80, 400);
  rect(198, 880, 80, 400);
  rect(40, 540, 466, 470);
  
  stroke(color2Obra1);
  textSize(250);
  text("2", 750, 540);
  }
  
  // Aparece la obra 2
  if (obra2) {
  background(fondoObra2);
  
  push();
  textSize(12);
  stroke(20)
  text("si, esto es todo, andate", 845, 1021)
  pop();
  }
  
  // Aparece la obra 3
  if (obra3) {
  push();
  background(0);

  if (!gameStarted) {
    // Pantalla de inicio del menú
    background(0);
    return;
  }

  if (gameEnded) {
   obra3 = false;
  }

  // Cuadrados
  let squares = [
    { x: 212, y: 212 },
    { x: 612, y: 212 },
    { x: 212, y: 612 },
    { x: 612, y: 612 }
  ];

  for (let i = 0; i < squares.length; i++) {
    if (i === activeSquare && noteActive) {
      fill(255); // Se ilumina de blanco cuando la nota está activa
      noStroke();
    } else {
      stroke(255); // Borde blanco
      strokeWeight(5);
      fill(0); // Fondo negro
    }
    rect(squares[i].x, squares[i].y, 200, 200);
  }

  // Círculo
  stroke(255); // Borde blanco
  strokeWeight(5);
  fill(circleColor); // Solo se llena cuando está activo
  ellipse(512, 512, 120, 120);

  // Puntaje
  noStroke();
  fill(255);
  textSize(42);
  textAlign(CENTER);
  text(`Puntaje: ${score}`, width / 2, 100);
    
  push();
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(`Haz click en los cuadrados cuando se iluminen, cada vez que las vocales digan "i"`, width / 2, 940);
  pop();

  // Nota
  let currentTime = song.currentTime() * 1000; // Tiempo en milisegundos

  if (currentNoteIndex < noteTimes.length) {
    if (currentTime >= noteTimes[currentNoteIndex] && !noteActive) {
      activeSquare = floor(random(4));
      circleColor = 255; // El círculo se ilumina de blanco
      noteActive = true;
      buttonPressed = false;
    }

    if (noteActive && currentTime >= noteTimes[currentNoteIndex] + noteDuration) {
      noteActive = false;
      circleColor = 0; // Vuelve al fondo negro sin relleno
      activeSquare = -1;
      currentNoteIndex++;
    }
  }

  // Verificar si la canción ha terminado
  if (!song.isPlaying() && currentNoteIndex >= noteTimes.length) {
    gameEnded = true; // Fin del juego
  } 
  pop();
}
  
  //aparece la obra 4
  if (obra4) {
    
  background(0);

  if (!inputsCreated) {
    info1 = createInput();
    info1.position(5, 45);
    info1.size(500, 45);
    info1.style('font-size', '50px');
    info1.style('text-align', 'center');

    info2 = createInput();
    info2.position(5, 135);
    info2.size(130, 45);
    info2.style('font-size', '45px');
    info2.style('text-align', 'center');

    info3 = createInput();
    info3.position(5, 225);
    info3.size(85, 45);
    info3.style('font-size', '40px');
    info3.style('text-align', 'center');

    info4 = createInput();
    info4.position(5, 305);
    info4.size(620, 45);
    info4.style('font-size', '35px');
    info4.style('text-align', 'center');

    info5 = createInput();
    info5.position(5, 395);
    info5.size(150, 45);
    info5.style('font-size', '30px');
    info5.style('text-align', 'center');

    info6 = createInput();
    info6.position(5, 485);
    info6.size(220, 45);
    info6.style('font-size', '25px');
    info6.style('text-align', 'center');

    info7 = createInput();
    info7.position(5, 575);
    info7.size(200, 45);
    info7.style('font-size', '20px');
    info7.style('text-align', 'center');

    info8 = createInput();
    info8.position(5, 665);
    info8.size(200, 45);
    info8.style('font-size', '15px');
    info8.style('text-align', 'center');

    info9 = createInput();
    info9.position(5, 755);
    info9.size(100, 45);
    info9.style('font-size', '10px');
    info9.style('text-align', 'center');

    info10 = createInput();
    info10.position(5, 845);
    info10.size(50, 45);
    info10.style('font-size', '5px');
    info10.style('text-align', 'center');

    info11 = createInput();
    info11.position(5, 935);
    info11.size(950, 45);
    info11.style('font-size', '90px');
    info11.style('text-align', 'center');

    inputsCreated = true;  // Indica que los inputs ya fueron creados
  }

  // Dibuja los títulos para cada barra de texto
  textSize(22);
  textStyle(BOLD);
  fill(255);
  
  text('N. de tarjeta:', 5, 30);
  text('Caducidad:', 5, 120);
  text('Numero de Seguridad:', 5, 210);
  text('Nombre del titular:', 5, 300);
  text('DNI:', 5, 390);
  text('Direccion:', 5, 480);
  text('Ciudad:', 5, 570);
  text('Provincia:', 5, 660);
  text('Codigo Postal:', 5, 750);
  text("Numeros de Alerces™️ cortados:", 5, 840);
  text("Opinion sobre la venta de preservativos en forma de animales marinos (SI/NO):", 5, 930);

  // Mensaje final
  fill(100);
  text("Aprete ENTER una", 800, 540);
  text("vez que haya terminado", 720, 570);
  text("de rellenar la informacion necesaria", 540, 600);
}

  // mover punto
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      posicionPuntNegY--;
    }
    if (keyCode === DOWN_ARROW) {
      posicionPuntNegY++;
    }
    if (keyCode === LEFT_ARROW) {
      posicionPuntNegX--;
    }
    if (keyCode === RIGHT_ARROW) {
      posicionPuntNegX++;
    }
  }
  
  //TEXTO Y PUNTOS
  if (textoInfoYPuntos && puntosMuseo >= 0) {
  //punto negro 
  stroke(0);
  strokeWeight(9);
  fill(0);
  point(posicionPuntNegX, posicionPuntNegY, 10);
  }

  if (textoInfoYPuntos && puntosMuseo == 0) {
  // punto gris 1
  fill(150);
  noStroke();
  ellipse(puntoGris1X, puntoGris1Y, 22.5);
  //TEXTO OBRA1
  fill(0);
  stroke(0);
  strokeWeight(1.5);
  textSize(25);
  text("Vertical-horizontal number three 2", 680, 570);
  textSize(42);
  text("A.Michael Noll", 680, 600);
  textSize(21);
  text("This is a photographic print of a computer-generated image", 680, 620);
  text("originally created by A. Michael Noll", 680, 656);
  text("at Bell Labs, Murray Hill, New Jersey", 680, 677);
  text("Noll has explained that 'The", 680, 694);
  text("position of the end points of the lines", 680, 740);
  text("was chosen at random with a uniform probability density", 680, 758);
  text("One of the coordinates was then changed", 680, 778);
  text("alternately to create horizontal and vertical lines", 680, 796);
  // punto negro 
  stroke(0);
  strokeWeight(9);
  fill(0);
  point(posicionPuntNegX, posicionPuntNegY, 10);
  }
  
  if (textoInfoYPuntos && puntosMuseo == 1) {
  // punto gris 2
  fill(150);
  noStroke();
  ellipse(puntoGris2X, puntoGris2Y, 22.5);
  //TEXTO OBRA2
  push();
  fill(234, 120, 35);
  stroke(234, 120, 35);
  strokeWeight(1);
  textSize(56);
  text("COLOR COLOR", -14, 390)
  fill(24, 220, 85);
  stroke(24, 220, 85);
  textSize(36);
  text("COLOR C  OLOR COLOR", 0, 420)
  fill(34, 10, 235);
  stroke(34, 10, 235);
  textSize(20);
  text("COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR", -320, 460)
  fill(234, 12, 25);
  stroke(234, 12, 25);
  text("COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR", -800, 476);
  fill(144, 220, 35);
  stroke(144, 220, 35);
  text("COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR", -360, 492);
  fill(244, 120, 225);
  stroke(244, 120, 225);
  text(" COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR", -560, 508);
  fill(250, 200, 10);
  stroke(250, 200, 10);
  text("COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR", -500, 524);
  fill(20, 200, 180);
  stroke(20, 200, 180);
  text("COLOR COLOR COLOR COLOR COLOR", -2, 540);
  fill(250, 0, 180);
  stroke(250, 5, 180);
  text("COLOR COLOR COLOR COLOR COLOR", -45, 560);
  fill(25, 10, 250);
  stroke(25, 10, 250);
  text("COLOR COLOR COLOR COLOR COLOR COLOR COLOR", -220, 583);
  fill(75, 250, 42);
  stroke(75, 250, 42);
  text("COLOR COLOR COLOR COLOR COLOR COLOR", -190, 610);
  fill(200, 70, 30);
  stroke(200, 70, 30);
  text("COLOR COLOR COLOR COLOR COLOR COLOR COLOR", -290, 640);
  fill(130, 250, 220);
  stroke(130, 250, 220);
  text("COLOR COLOR COLOR COLOR", -120, 677);
  fill(200, 250, 175);
  stroke(200, 250, 175);
  text("COLOR COLOR COLOR COLOR COLOR", -230, 720)
  fill(250, 190, 190);
  stroke(250, 190, 190);
  text("COLOR COLOR COLOR COLOR COLOR COLOR", -340, 775);
  fill(220, 220, 250);
  stroke(220, 220, 250);
  text("COLOR COLOR COLOR COLOR", -220, 835);
  fill(0);
  stroke(240, 240, 240);
  text("COLOR COLOR COLOR COLOR", -260, 900);
  pop();

  }
  
  if (textoInfoYPuntos && puntosMuseo == 2) {
  // punto gris 3
  fill(150);
  noStroke();
  ellipse(puntoGris3X, puntoGris3Y, 22.5);
  //TEXTO OBRA3
  fill(0);
  strokeWeight(1)
  stroke(0)
  textSize(50);
  text("SEYCHELLES (ALBUM)", 0, 760);
  textSize(45);
  text("高中正義", 0, 875)
  textSize(18);
  text("SEYCHELLES（セイシェルズ）[1]は、日本 ", 80, 780);
  text("のギタリストである高中正義が1976年7", -80, 804);
  text("月1日にKitty Recordsよりリリー ", 80, 828);
  text("リリースした初となるオリジナル・アルバムであ", 40, 900);
  text("る。", 100, 930);
  text("LPとカセットテープでリリースされ、1984年にはCDとして再", 140, 944);
  text("発売された。", 60, 960);
  text("解説", 80, 980);
  text("高中自身にとって初めてのソロアルバムであり、サディスティ", -140, 996);
  text("ックス在籍中にリリースした。アルバムタイトルはセーシェル諸島", 180, 1014);
  text("に由来するが、高中はセーシェル諸島を訪れたことはないという。", 60, 1035);
  }
    
  if (textoInfoYPuntos && puntosMuseo == 3) {
  // punto gris 4
  fill(150);
  noStroke();
  ellipse(puntoGris4X, puntoGris4Y, 22.5);
  //TEXTO OBRA4
  fill(0);
  strokeWeight(1.5);
  stroke(0);
  push();
  translate(0, height);
  rotate(-HALF_PI);
  textSize(25);
  text("A shop or store", 840, 380);
  text("ore is a p", 868, 400);
  textSize(40);
  text("lace wh", 850, 438);
  text("ere p", 905, 468);
  textSize(20);
  text("eople can go to buy items tha", 680, 500);
  text("t they need or want. Peopl", 710, 520);
  text("e might go to a shop to buy", 700, 540);
  text("food, clothes, furni", 768, 560);
  text("ture, jewelry, or m", 768, 580);
  text("any other things. There   are lo", 634, 600);
  text("s of shops in the w-   -orld ", 669, 626);
  text("people can buy their th   ings f", 634, 646);
  text("rom.People m   ight als", 750, 666);
  text("o go to a repair    shop if s", 680, 686);
  text("omething is broken, and they-   -want the ", 520, 706);
  text("shop to fix", 900, 726);
  text("x it. For example, someone mi", 676, 750);
  text("ght bring a broken bicycle to a bi", 615, 770);
  text("cycle repair shop. Shops can b", 663, 790);
  text("e anything from large supermarke", 640, 810)
  text("t chains to small businesses.", 678, 830)
  pop();
  }
  
}

function mousePressed() {
      if (obra3) {
  if (noteActive && !buttonPressed && !gameEnded) {
    if (mouseX >= 212 && mouseX <= 412 && mouseY >= 212 && mouseY <= 412 && activeSquare === 0) {
      score += 1;
    } else if (mouseX >= 612 && mouseX <= 812 && mouseY >= 212 && mouseY <= 412 && activeSquare === 1) {
      score += 1;
    } else if (mouseX >= 212 && mouseX <= 412 && mouseY >= 612 && mouseY <= 812 && activeSquare === 2) {
      score += 1;
    } else if (mouseX >= 612 && mouseX <= 812 && mouseY >= 612 && mouseY <= 812 && activeSquare === 3) {
      score += 1;
    } else {
      score -= 1000;
    }

    buttonPressed = true;
  }
 }
}


function keyPressed() {
  //Obra 3
    if (obra3) {
    if (key === ' ') {
    if (!gameStarted) {
      gameStarted = true;
      song.play();
    }
   }
  }
  //Obra 4
    if (obra4) {
    if (keyCode === ENTER) {
      certificado.save('certificado', 'png');
       }
      }
}



// Este trabajo ni llega a las 650 lineas, que verguenza

// Jueguen Guilty Gear que es muy divertido

// Tambien deberian jugarse todos los juegos de Suda51
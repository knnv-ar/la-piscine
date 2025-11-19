//personaje
let x, y;
let speed = 5;
let vy = 0;
let gravity = 0.6;
let onGround = false;
let moving=false

//bloques
let blocks = [];
let numBlocks = 6;

//animation
let spriteSheet,spriteSheet_static;
let numFrames = 15;
let frameIndex = 0;
let frameDelay = 5;
let delayCounter = 0;
let facing = 1;
let scaleFactor = 0.20;
let frameWidth_walk, frameHeight_walk;
let frameWidth_static, frameHeight_static;

let frameIndex_walk = 0;
let frameIndex_static = 0;
let delayCounter_walk = 0;
let delayCounter_static = 0;

let currentStyleIndex = -1; 
let styles = []; 
let imgGotico,imgRen, imgBar, imgRoc, imgNeo, imgRom,fondo;


function preload() {
  fondo = loadImage("img/fondo_principal.jpg");
  spriteSheet_static = loadImage("img/animation_static.png");
  spriteSheet = loadImage("img/animation_walk.png");
  imgGotico = loadImage("img/estilo_gotico .jpg");
  imgRen = loadImage("img/estilo_renacentista.jpg");
  imgBar =  loadImage("img/estilo_barroco.jpg");
  imgRoc = loadImage("img/estilo_rococo.png");
  imgNeo = loadImage("img/estilo_neoclasico.jpg");
  imgRom = loadImage("img/estilo_romantisismo.jpg");
}

function setup() {
  let canvas = createCanvas(1200, 650);
  canvas.parent('div-sketch');
  textAlign(CENTER, CENTER);
  textSize(20);
  noStroke();
  x = width / 2;
  y = height - 50;
  frameWidth_walk = spriteSheet.width / numFrames;
  frameHeight_walk = spriteSheet.height;
  frameWidth_static = spriteSheet_static.width / numFrames;
  frameHeight_static = spriteSheet_static.height;
  let blockWidth = 150;
  let blockHeight = 20;
  let startX = 100;
  let startY = 530;
  let xSpacing = 170;

  for (let i = 0; i < numBlocks; i++) {
    blocks.push({
      x: startX + i * xSpacing,
      y: startY,
      w: blockWidth,
      h: blockHeight,
    });
  }

     styles = [
    {
      name: "Gótico",
      forma: "Verticalidad / punta / arco ojival / luz ascendente / vitrales de colores que filtran lo divino.",
      contexto: "Surge en la Europa medieval (siglos XII–XV), impulsado por el poder de la Iglesia y el auge de las ciudades. Las catedrales góticas son centros de fe y también de saber: uniendo arquitectura, escultura y pintura en un único mensaje visual. La sociedad comienza a organizarse en torno a los gremios urbanos, donde el arte expresa tanto la devoción colectiva como el ascenso del individuo en la comunidad.",
      peso: "El arte gótico es una herramienta espiritual y política. Representa la autoridad religiosa y el orden divino, pero también da lugar a una sensibilidad más humana: los santos y vírgenes adquieren rasgos emocionales. La monumentalidad y la altura legitiman el poder eclesiástico, mientras la luz simboliza la presencia divina y el conocimiento.",
      idea: "El alma se eleva hacia Dios a través de la arquitectura. La belleza, la altura y la luz se funden en un mismo gesto: conectar lo terrenal con lo celestial.",
    },
    {
      name: "Renacimiento",
      forma: "Círculo / triángulo / proporción áurea / perspectiva lineal / simetría perfecta.",
      contexto: "Entre los siglos XV y XVI, en Italia, el Humanismo coloca al ser humano en el centro del universo. Se recuperan los ideales clásicos de armonía y razón, y el arte se nutre de la observación científica y matemática. Florencia, Roma y Venecia son centros de mecenazgo y experimentación. Los artistas se consideran intelectuales: Leonardo da Vinci, Miguel Ángel y Rafael son ejemplos de esta nueva figura del creador como genio universal.",
      peso: "El arte renacentista consolida el poder político de las ciudades y las familias nobles, como los Médici, y refuerza la confianza en la razón y la naturaleza humana. La perspectiva crea una nueva forma de ver el mundo: el espectador se vuelve sujeto, el espacio adquiere profundidad, y la realidad se ordena según la mirada humana. El arte se convierte en emblema del pensamiento racional y del dominio sobre la materia.",
      idea: "El hombre es la medida de todas las cosas. La belleza surge del equilibrio entre razón y emoción, donde el conocimiento del mundo es también conocimiento de uno mismo.",
    },
     {
      name: "Barroco",
      forma: "Espiral / diagonal / claroscuro / teatralidad / contraste entre luz y sombra.",
      contexto: "El Barroco surge en el siglo XVII como respuesta directa a la Reforma protestante. Tras las críticas de Lutero y Calvino al culto de las imágenes, la Iglesia Católica impulsa la Contrarreforma con el Concilio de Trento, defendiendo el poder de lo visual para guiar la fe. Las iglesias se llenan de dramatismo, color y emoción: la pintura y la escultura buscan conmover al creyente y reafirmar la presencia divina frente a la austeridad protestante. En este contexto, Roma se convierte en el gran escenario de la fe y del espectáculo religioso.",
      peso: "El arte barroco expresa la tensión entre lo divino y lo humano, entre el orden celestial y la fragilidad del mundo. refleja la crisis del ideal renacentista de equilibrio. El barroco es tanto propaganda como autoconciencia del desengaño moderno.",
      idea: "El mundo es un teatro donde lo divino se representa en lo sensible. La luz, el movimiento y la emoción reemplazan al dogma: el arte convence a través del asombro y la fe visual.",
    },
    {
      name: "Rococó",
      forma: "Curva / arabesco / asimetría / colores pasteles / ornamentación delicada.",
      contexto: "En el siglo XVIII, el Rococó florece en Francia como expresión de la vida cortesana y la aristocracia previa a la Revolución. Los interiores se llenan de estucos, espejos y escenas galantes. Es un arte íntimo, sensual y decorativo, que deja atrás la solemnidad religiosa del Barroco para celebrar el placer y el ocio. Fragonard, Boucher y Watteau pintan jardines, fiestas y juegos amorosos con un aire de fantasía y ligereza.",
      peso: "El Rococó refleja una sociedad refinada pero en decadencia. La élite busca en el arte un refugio ante la tensión social y el cambio político. La belleza se vuelve un lujo efímero, una forma de distraer al espectador de la crisis que se aproxima. Aunque ligero y frívolo, su exceso decorativo anticipa el colapso del Antiguo Régimen y el surgimiento de nuevas sensibilidades más críticas y racionales.",
      idea: "El arte se convierte en un juego sensual y efímero. La belleza ya no busca enseñar o moralizar, sino provocar placer y ensoñación.",
    },
  {
    name: "Neoclasicismo",
    forma: "Línea recta / triángulo / simetría / equilibrio / sobriedad.",
    contexto: "A fines del siglo XVIII, el Neoclasicismo nace junto a la consolidación del pensamiento ilustrado y el sujeto moderno. Pero ese sujeto, lejos de colocarse en el centro, se reconoce como parte de un orden racional que lo supera. La razón, la ciencia y la observación astronómica revelan un universo vasto y gobernado por leyes objetivas: el hombre deja de ser el eje del cosmos para convertirse en un observador consciente de su lugar. El arte neoclásico traduce esta nueva concepción: busca expresar la claridad, el equilibrio y la universalidad de la razón, entendida como principio estructurador del mundo.",
    peso: "El arte neoclásico se vuelve una herramienta pedagógica del Estado moderno y de la razón ilustrada. Enseña la virtud, la mesura y la disciplina del pensamiento. La belleza no es un placer personal, sino una forma de conocer y ordenar la realidad.",
    idea: "El arte encarna la razón que revela el orden del mundo. El sujeto moderno comprende su límite y su pertenencia a una totalidad más vasta: el cosmos de la razón y la naturaleza.",
  },
    {
      name: "Romanticismo",
      forma: "Línea ondulante / ruina / tormenta / sublime / dramatismo emocional.",
      contexto: "En el siglo XIX, el Romanticismo se impone como una reacción frente al racionalismo ilustrado y la mecanización industrial. El artista se vuelve un espíritu libre, que expresa su individualidad a través del sentimiento, la imaginación y la naturaleza. La soledad, el amor imposible, la melancolía y lo sublime marcan su estética. En pintura, música y literatura, el Romanticismo rompe con las reglas y celebra la emoción como verdad interior.",
      peso: "El arte deja de servir al Estado o la religión para convertirse en expresión de la libertad subjetiva. Es una forma de resistencia al orden burgués y a la racionalidad del progreso. En figuras como Friedrich, Goya o Delacroix, el arte se convierte en testimonio de la angustia y la grandeza del individuo frente al infinito y al destino histórico.",
      idea: "El sentimiento es conocimiento. El arte expresa la búsqueda de libertad y trascendencia del alma humana frente a la inmensidad del mundo.",
    },
  ];
}

function draw() {
  
  drawBackground(); 
 
  handleMovement();
  
  handleCollisions(); 
  
  drawTextBox();

  handleAnimation(moving);
  
  drawCharacter();
  
  handletext();


}

function drawBackground() {
      if (currentStyleIndex === -1) {  
    image(fondo, 0, 0, width, height);
  } else if (currentStyleIndex === 0) {  
    image(imgGotico, 0, 0, width, height);
  } else if (currentStyleIndex === 1) {  
    image(imgRen, 0, 0, width, height);
  } else if (currentStyleIndex === 2) {  
    image(imgBar, 0, 0, width, height);
  } else if (currentStyleIndex === 3) {  
    image(imgRoc, 0, 0, width, height);
  } else if (currentStyleIndex === 4) {  
    image(imgNeo, 0, 0, width, height);
  }  else if (currentStyleIndex === 5) {  
    image(imgRom, 0, 0, width, height);
  }

}

function drawTextBox() {
  
  fill(1255, 255, 255);

  // Plataformas
   for (let i = 0; i < numBlocks; i++) {
    let b = blocks[i];
    if (i === currentStyleIndex) {
      fill(200, 189, 180);
      stroke(200, 189, 180);
      strokeWeight(10);
    } else {
      fill(60, 42, 26);
      noStroke();
      
    } 
    rect(b.x, b.y, b.w, b.h, 4);
    textSize(15); 
    if (i === currentStyleIndex) {
      fill(60, 42, 26);
    } else {
      fill(200, 189, 180);
       
    }
    text(styles[i].name, b.x + b.w / 2, b.y + b.h / 2); 
  }

}



function handleCollisions() {
  
  let pw = frameWidth_walk * scaleFactor * 0.95;
  let ph = frameHeight_walk * scaleFactor * 0.95;
  let left = x - pw / 2;
  let right = x + pw / 2;
  let top = y - ph / 2;
  let bottom = y + ph / 2;
  
  
  let wasOnGround = onGround;
  onGround = false;

  // Colisión con plataformas
  for (let i = 0; i < blocks.length; i++) {
    let b = blocks[i];
    let blockTop = b.y;
    let blockBottom = b.y + b.h;
    let blockLeft = b.x;
    let blockRight = b.x + b.w;

    if (right > blockLeft && left < blockRight && bottom > blockTop && top < blockBottom && vy > 0) {
      y = blockTop - ph / 2;
      vy = 0;
      onGround = true;
    if (currentStyleIndex !== i) {
        changeArtStyle(i);
      }
    }
  }

  // Suelo
  if (bottom > height) {
    y = height - ph / 2;
    vy = 0;
    onGround = true;
    if (!wasOnGround) {
      changeArtStyle(-1); 
    }
  }

  // Límites laterales
  if (left < 0) x = pw / 2;
  if (right > width) x = width - pw / 2;
  
}

function handleMovement() {
   moving = false;

  //movimiento personaje
  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
    moving = true;
    facing = -1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
    moving = true;
    facing = 1;
  }

  // Gravedad
  vy += gravity;
  y += vy;
  
  return moving;
}

function handleAnimation(moving) {
  if (moving && onGround) {
    delayCounter_walk++;
    if (delayCounter_walk >= frameDelay) {
      frameIndex_walk = (frameIndex_walk + 1) % numFrames;
      delayCounter_walk = 0;
    }
  } else if (!moving && onGround) {
    // Animación de quieto (pestañas y pelo)
    delayCounter_static++;
    if (delayCounter_static >= frameDelay) {
      frameIndex_static = (frameIndex_static + 1) % numFrames;
      delayCounter_static = 0;
    }
  }
}
function drawCharacter(){
  push();
  translate(x, y);
  scale(facing * scaleFactor, scaleFactor);

  if (!moving && onGround) {
    // sprite estático animado
    image(
      spriteSheet_static,
      0, -frameHeight_static / 2,
      frameWidth_static, frameHeight_static,
      frameIndex_static * frameWidth_static, 0,
      frameWidth_static, frameHeight_static
    );
  } else {
    // sprite caminando
    image(
      spriteSheet,
      0, -frameHeight_walk / 2,
      frameWidth_walk, frameHeight_walk,
      frameIndex_walk * frameWidth_walk, 0,
      frameWidth_walk, frameHeight_walk
    );
  }

  pop();
}

function handletext(){
  if (currentStyleIndex >= 0) {
    push();
      let s = styles[currentStyleIndex];
 
      // Dimensiones del cuadro de fondo con más margen y título
      let margin = 20; // margen alrededor del contenido
      let boxX = width/2 - 380 - margin; // izquierda
      let boxY = 65 - margin;            // arriba, incluyendo el título
      let boxWidth = 760 + margin*2;     // ancho total
      let boxHeight = 320 + 30 + margin*2; // altura total: 320 del texto + 30 para título + margen

      
      fill(60, 42, 26, 220); 
      noStroke();
      rect(boxX, boxY, boxWidth, boxHeight, 10);


      // contenido
      fill(255);
      textAlign(CENTER, TOP);
      textStyle(BOLD);
      textSize(26);
      text(s.name, width / 2, 65);

      textStyle(NORMAL);
      textSize(16);
      text(
        `Forma emblemática: ${s.forma}\n\n` +
        `Contexto histórico: ${s.contexto}\n\n` +
        `Peso político: ${s.peso}\n\n` +
        `Idea clave: ${s.idea}`,
        width / 2 - 380,
        95,               
        760,              
        320            
      );
    pop();
    
      }
    if (currentStyleIndex === -1) {
      push();
      fill(60, 42, 26);
      textAlign(CENTER, TOP);
      textStyle(BOLD);
      textSize(26);
      text("Plataformas del arte", width / 2, 70);

      textStyle(NORMAL);
      textSize(20);
      text(
          "Una figura atraviesa en el tiempo algunos estilos artistícos.\n" +
        "Cada superficie que pisa abre una forma distinta de ver, de creer, de pensar el mundo.\n\n" +
        "No hay una línea que avance, sino un movimiento: el de las imágenes que cambian,\n" +
        "el de las ideas que se transforman, el de la mirada que busca sentido.\n\n" +
        "Este recorrido es una invitación a habitar las formas del pasado\n" +
        "y a descubrir, en cada una, como formamos nuestro presente.",
        width / 2 - 380, // posición X
        110,             // posición Y
        760,             // ancho máximo
        300              // alto máximo
      );
      pop();
    }
}

function changeArtStyle(index) {
    currentStyleIndex = index;
}

function keyPressed() {
  if (keyCode === UP_ARROW && onGround) {
    vy = -12;
  }
}


const FADERS_RADIUS = 15;
const FADERS_X = 100;
const FADERS_LENGTH = 200;
const FADERS_Y = [100, 300, 500];

let faders_values = [0, 0, 0];
let faders_functions = [0, 1, 2]; //comentar asignaciones
let fader_alt_value = 99;
let faders_lookup = [];

let img, lovecry;
let dino =
  "In questo istante egli capisce: non la rivoluzione, né un siluramento, né un equivoco: si è compiuto soltanto il suo destino. Perché la salita è lunga, la salita consuma il meglio della vita. Ma quando si è giunti in cima si precipita, basta un istante per ritornare là donde si era partiti giovanetti. E siccome l'uomo non ci pensa, viene colpito di sorpresa, e piange, e invoca il Cielo, e annaspa per tornare su. E anche se il crollo è progressivo e c'è tutto il tempo di pensarci, ce ne accorgiamo sempre troppo tardi, quando si è in fondo. E chi è caduto – così sta scritto – chi è scivolato in basso anche di un metro, non potrà risollevarsi più. \nIl Ricci si riscuote – quanto tempo è passato? – per una serie di rudi scossoni. Apre gli occhi. Guarda. L'usciere gli sta dando delle allegre pacche sulle spalle e lo osserva estremamente divertito.";

let maskCircle;

//VARIABLES DE EFECTO
// let bg_r = 50, bg_g = 50, bg_b = 50;
let bg_gray = 50,
  bg_gray_lower = 70,
  bg_gray_upper = 100,
  bg_alpha = 255;
let is_bg_darkening = false,
  fluctuation_speed = 0;
let lovecry_vol = 0.0,
  lovecry_pan = 0.0,
  lovecry_rate = 1.0;
let dino_alpha = 4,
  dino_size = 33,
  dino_y = 520;
let monochromia = 0;
let noise_factor = 0.0; //def = 0
//noise?
let offset1 = 0,
  offset2 = 0;

//

function preload() {
  img = loadImage("./img.jpg");
  molnar = loadImage("./molnar.webp");
  lovecry = loadSound("./lovecry.wav");
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  background(200);

  stroke("black");
  textStyle(BOLD);
  textAlign(CENTER);
  textFont("Courier");
  textSize(33);

  lovecry.setVolume(0);
  lovecry.loop();

  let arra = []; // con este auxiliar me aseguro que esté bien distribuido el fader alt
  for (let i = 0; i < 10; i++) {
    arra[i] = 10;
  }

  for (let i = 0; i < 3; i++) {
    faders_lookup[i] = [];
  }

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 100; i++) {
      //asigno valores del fader a las funciones de los otros
      while (true) {
        let random_number = int(random(0, 10));
        if (arra[random_number] != 0) {
          faders_lookup[j][i] = random_number;
          arra[random_number]--;
          break;
        }
      }
    }
    //lleno array auxiliar
    for (let i = 0; i < 10; i++) {
      arra[i] = 10;
    }
  }

  //esto puedo comentarlo para fixear las funciones de cada slider.
  let aux = 0;
  faders_functions[0] = faders_lookup[0][fader_alt_value];
  while (true) {
    if (
      faders_lookup[1][(fader_alt_value + aux) % 100] != faders_functions[0]
    ) {
      faders_functions[1] = faders_lookup[1][(fader_alt_value + aux) % 100];
      break;
    } else {
      aux++;
    }
  }
  aux = 0;
  while (true) {
    if (
      faders_lookup[2][(fader_alt_value + aux) % 100] != faders_functions[0] &&
      faders_lookup[2][(fader_alt_value + aux) % 100] != faders_functions[1]
    ) {
      faders_functions[2] = faders_lookup[2][(fader_alt_value + aux) % 100];
      break;
    } else {
      aux++;
    }
  }

  //   print(faders_lookup);
  //   randomSeed(11);

  //falopa de ia
  maskCircle = createGraphics(FADERS_RADIUS * 2, FADERS_RADIUS * 2);
  maskCircle.clear();
  maskCircle.noStroke();
  maskCircle.fill(255);
  maskCircle.circle(FADERS_RADIUS, FADERS_RADIUS, FADERS_RADIUS * 2);

  //   print(arr);
}

function draw() {
  //cambio valores de fader clickeado
  if (mouseIsPressed) {
    //este fader altera los otros valores a su vez.
    if (mouseInFader(width - 100, false)) {
      fader_alt_value = int(map(mouseY, height - 100, 100, 0, 99, true));
      //esto puedo comentarlo para fixear las funciones de cada slider.
      let aux = 0;
      faders_functions[0] = faders_lookup[0][fader_alt_value];
      while (true) {
        if (
          faders_lookup[1][(fader_alt_value + aux) % 100] != faders_functions[0]
        ) {
          faders_functions[1] = faders_lookup[1][(fader_alt_value + aux) % 100];
          break;
        } else {
          aux++;
        }
      }
      aux = 0;
      while (true) {
        if (
          faders_lookup[2][(fader_alt_value + aux) % 100] !=
            faders_functions[0] &&
          faders_lookup[2][(fader_alt_value + aux) % 100] != faders_functions[1]
        ) {
          faders_functions[2] = faders_lookup[2][(fader_alt_value + aux) % 100];
          break;
        } else {
          aux++;
        }
      }
    } else {
      for (let i = 0; i < 3; i++) {
        if (mouseInFader(FADERS_Y[i], true)) {
          let initial_value = faders_values[i];
          let new_value = map(
            mouseX, 
            FADERS_X,
            FADERS_X + FADERS_LENGTH,
            0,
            99,
            true
          );
          faders_values[i] = new_value;
          change_variable(initial_value, new_value, faders_functions[i]);
          break;
        }
      }
    }
  }

  system_process();

  //dibujo los faders
  for (let i = 0; i < 3; i++) {
    push();
    strokeCap(ROUND);
    strokeWeight(12);
    line(
      FADERS_X + offset2,
      FADERS_Y[i] + offset2,
      FADERS_X + FADERS_LENGTH + offset2,
      FADERS_Y[i] + offset2
    );
    pop();

    //sigo sin saber muy bien cómo funciona esto pero bue
    push();
    let knobX = map(
      faders_values[i],
      0,
      100,
      FADERS_X,
      FADERS_X + FADERS_LENGTH
    );
    let knobY = FADERS_Y[i];
    let diameter = FADERS_RADIUS * 2;

    let portion = img.get(
      knobX + fader_alt_value - FADERS_RADIUS + offset1,
      knobY - FADERS_RADIUS + offset1,
      diameter,
      diameter
    );
    portion.mask(maskCircle.get());

    image(portion, knobX - FADERS_RADIUS, knobY - FADERS_RADIUS);

    noFill();
    stroke(
      255,
      255 - monochromia + offset1 * noise_factor,
      255 - monochromia + offset1 * noise_factor
    );
    strokeWeight(2);
    circle(knobX + offset2, knobY + offset1, diameter);
    pop();
  }
  //dibujo fader alt
  push();
  strokeCap(ROUND);
  strokeWeight(12);
  line(width - 100, 100, width - 100, height - 100);
  pop();
  push();
  rectMode(CENTER);
  fill(
    255,
    255 - monochromia + offset1 * noise_factor,
    255 - monochromia + offset1 * noise_factor
  );
  stroke("black");
  strokeWeight(5);
  rect(width - 100, map(fader_alt_value, 0, 99, height - 100, 100), 90, 50);
  pop();
  push();
  textFont("Georgia");
  let ch = String.fromCharCode(fader_alt_value + 586);
  noStroke();
  fill(0, 100 + offset2);
  textSize(22);
  text(ch, width - 101, 8+map(fader_alt_value, 0, 99, height - 100, 100));
  pop();
}

function mouseInFader(fader_pos, y_pos) {
  if (y_pos) {
    let margin = 20;
    return mouseY < fader_pos + margin && mouseY > fader_pos - margin;
  } else {
    let margin = 70;
    return mouseX < fader_pos + margin && mouseX > fader_pos - margin;
  }
}

//acorde a la key, el fader funciona de x manera
function change_variable(initial_value, new_value, fader_key) {
  diff = new_value - initial_value;
  switch (fader_key) {
    case 0:  //vol de sonido
      lovecry_vol += diff * 0.01;
      constrain(lovecry_vol, 0, 1.5);
      break;
    case 1:  //paneo de sonido
      lovecry_pan = sin(new_value * 0.02 * PI);
      break;
    case 2:  //play rate de sonido
      lovecry_rate += diff * 0.01;
      lovecry_rate = constrain(lovecry_rate, 0.2, 2.5);
      break;
    case 3:  //alpha de texto
      dino_alpha += map(diff, 0, 100, 0, 255);
      dino_alpha = constrain(dino_alpha, 0, 255);
      break;
    case 4:  //y_pos de texto
      dino_y -= map(diff, 0, 100, 0, 2000);
      //dino_y += diff;
      dino_y = constrain(dino_y, -1400, 600);
      break;
    case 5:  //tinte rojo
      monochromia += map(diff, 0, 100, 0, 190);
      monochromia = constrain(monochromia, 0, 190);
      break;
    case 6:  //fontsize
      dino_size += map(diff, -100, 100, -33, 33);
      dino_size = constrain(dino_size, 0, 50);
      break;
    case 7:  //bg y fluctuación
      bg_gray_upper += map(diff, 0, 100, 0, 50);
      bg_gray_lower -= map(diff, 0, 100, 0, 50);
      bg_gray_upper = constrain(bg_gray_upper, 90, 190);
      bg_gray_lower = constrain(bg_gray_lower, 10, 85);
      fluctuation_speed = int(map(diff, -100, 100, -2, 2));
      break;
    case 8:  //bg alpha
      bg_alpha -= map(diff, 0, 100, 0, 230);
      bg_alpha = constrain(bg_alpha, 0, 230);
      break;
    case 9:   //noise
      noise_factor += diff * 0.01;
      noise_factor = constrain(noise_factor, 0, 2.0);
      break;
  }
}

//con esto proceso todo el sistema
function system_process() {
  //   print(noise_factor);
  //visuales
  image(molnar, -5 + offset1, -5 + offset2, 610, 610);
  background(bg_gray, bg_alpha + offset1);

  //sonido
  lovecry.setVolume(lovecry_vol);
  lovecry.pan(lovecry_pan);
  lovecry.rate(lovecry_rate);
  //   lovecry.pitch()

  //texto
  if (noise_factor > 0.7) {
    if (frameCount % 10 == 0) {
      dino[int(random(0, 852))] = int(random(0, 10));
    }
  }
  push();
  translate(0, dino_y);
  textSize(dino_size);
  stroke(
    255,
    255 - monochromia + offset1 * noise_factor,
    255 - monochromia + offset1 * noise_factor,
    dino_alpha
  );
  fill(255, dino_alpha);
  text(dino, 0, 0, 600, height * 3);
  pop();

  ///actualizo valores
  if (bg_gray > bg_gray_upper || bg_gray < bg_gray_lower) {
    is_bg_darkening = !is_bg_darkening;
  }
  if ((frameCount % 5) - fluctuation_speed == 0) {
    offset1 = int(2 * noise_factor * random(-4, 4));
    offset2 = int(2 * noise_factor * random(-4, 4));
    if (is_bg_darkening) {
      bg_gray--;
    } else {
      bg_gray++;
    }
  }

  //   debug
//   print("slider 1 función", faders_functions[0]);
//   print("slider 2 función", faders_functions[1]);
//   print("slider 3 función", faders_functions[2]);
}

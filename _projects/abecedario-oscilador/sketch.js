//tiempos de letra

let t_a = -1, t_b = -1, t_c = -1, t_d = -1, t_e = -1, t_f = -1, t_g = -1, t_h = -1, t_i = -1, t_j = -1, 
    t_k = -1, t_l = -1, t_m = -1, t_n = -1, t_o = -1, t_p = -1, t_q = -1, t_r = -1, t_s = -1, t_t = -1, 
    t_u = -1, t_v = -1, t_w = -1, t_x = -1, t_y = -1, t_z = -1;
let stepSize = 0.015;
let fadeTime = 5; // fade

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  blendMode(MULTIPLY);
  fill(0, 0, 0, 10);
  rect(0, 0, width, height);
  blendMode(ADD);
  translate(width / 3, height / 4);
  scale(40, -40);

  // entrada de letra
  if (keyIsPressed && key.length === 1 && key.match(/[a-z]/i)) {
    let pressedKey = key.toLowerCase();
    if (pressedKey === 'a' && t_a === -1) t_a = 0;
    if (pressedKey === 'b' && t_b === -1) t_b = 0;
    if (pressedKey === 'c' && t_c === -1) t_c = 0;
    if (pressedKey === 'd' && t_d === -1) t_d = 0;
    if (pressedKey === 'e' && t_e === -1) t_e = 0;
    if (pressedKey === 'f' && t_f === -1) t_f = 0;
    if (pressedKey === 'g' && t_g === -1) t_g = 0;
    if (pressedKey === 'h' && t_h === -1) t_h = 0;
    if (pressedKey === 'i' && t_i === -1) t_i = 0;
    if (pressedKey === 'j' && t_j === -1) t_j = 0;
    if (pressedKey === 'k' && t_k === -1) t_k = 0;
    if (pressedKey === 'l' && t_l === -1) t_l = 0;
    if (pressedKey === 'm' && t_m === -1) t_m = 0;
    if (pressedKey === 'n' && t_n === -1) t_n = 0;
    if (pressedKey === 'o' && t_o === -1) t_o = 0;
    if (pressedKey === 'p' && t_p === -1) t_p = 0;
    if (pressedKey === 'q' && t_q === -1) t_q = 0;
    if (pressedKey === 'r' && t_r === -1) t_r = 0;
    if (pressedKey === 's' && t_s === -1) t_s = 0;
    if (pressedKey === 't' && t_t === -1) t_t = 0;
    if (pressedKey === 'u' && t_u === -1) t_u = 0;
    if (pressedKey === 'v' && t_v === -1) t_v = 0;
    if (pressedKey === 'w' && t_w === -1) t_w = 0;
    if (pressedKey === 'x' && t_x === -1) t_x = 0;
    if (pressedKey === 'y' && t_y === -1) t_y = 0;     
    if (pressedKey === 'z' && t_z === -1) t_z = 0;
  }

  // curvas
  let letras = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < letras.length; i++) {
    let letra = letras[i];
    let t = eval('t_' + letra);
    
    if (t >= 0) {
      let x, y;
      let alpha = 255;
      if (t > fadeTime) {
        alpha = map(t, fadeTime, fadeTime + 1, 255, 0);
      }
      
      //LETRA A       
      if (letra === 'a') {
        if (t % 2 < 1) {
          x = 0.39 * pow(1-(t%1), 3) + 12.23 * (t%1) * pow(1-(t%1), 2) + 12.12 * pow(t%1, 2) * (1-(t%1)) + 4.03 * pow(t%1, 3);
          y = -0.3 * pow(1-(t%1), 3) + 0.28 * (t%1) * pow(1-(t%1), 2) + 0.77 * pow(t%1, 2) * (1-(t%1)) - 4.2 * pow(t%1, 3);
        } else {
          let u = t % 1;
          x = 4.03 * pow(1-u, 3) + 12.03 * u * pow(1-u, 2) - 13.43 * pow(u, 2) * (1-u) + 3.76 * pow(u, 3);
          y = -4.2 * pow(1-u, 3) - 34.03 * u * pow(1-u, 2) - 8.95 * pow(u, 2) * (1-u) - 3.25 * pow(u, 3);
        }
        //LETRA B
      } else if (letra === 'b') {
        if (t % 2 < 1) {
          x = 0.26 * pow(1 - t, 3) - 1.25 * t * pow(1 - t, 2) + 8.58 * pow(t, 2) * (1 - t) + 2.92 * pow(t, 3);
          y = -0.2 * pow(1 - t, 3) - 26.07 * t * pow(1 - t, 2) - 15.2 * pow(t, 2) * (1 - t) - 3.96 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 2.92 * pow(1 - u, 3) + 8.94 * u * pow(1 - u, 2) + 1.4 * pow(u, 2) * (1 - u) + 0.57 * pow(u, 3);
          y = -3.96 * pow(1 - u, 3) - 8.55 * u * pow(1 - u, 2) - 7.78 * pow(u, 2) * (1 - u) - 3.75 * pow(u, 3);
        }
      }
      //LETRA C
      else if (letra === 'c') {
        if (t % 2 < 1) {
          x = 2.87 * pow(1 - t, 3) + 8.62 * t * pow(1 - t, 2) + 0.26 * pow(t, 2) * (1 - t) + 0.09 * pow(t, 3);
          y = y1 = -0.27 * pow(1 - t, 3) - 0.8 * t * pow(1 - t, 2) + 0.3 * pow(t, 2) * (1 - t) - 1.74 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.09 * pow(1 - u, 3) + 0.29 * u * pow(1 - u, 2) + 8.65 * pow(u, 2) * (1 - u) + 2.88 * pow(u, 3);
          y = -1.74 * pow(1 - u, 3) - 10.75 * u * pow(1 - u, 2) - 8.81 * pow(u, 2) * (1 - u) - 2.94 * pow(u, 3);
        }
      }
      // LETRA D
      else if (letra === 'd') {
        if (t % 2 < 1) {
          x = 2.83 * pow(1 - t, 3) + 10.51 * t * pow(1 - t, 2) + 0.68 * pow(t, 2) * (1 - t) + 0.17 * pow(t, 3);
          y = -0.2 * pow(1 - t, 3) - 26.07 * t * pow(1 - t, 2) - 15.2 * pow(t, 2) * (1 - t) - 3.96 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.17 * pow(1 - u, 3) + 0.32 * u * pow(1 - u, 2) + 7.86 * pow(u, 2) * (1 - u) + 2.52 * pow(u, 3);
          y = -3.96 * pow(1 - u, 3) - 8.55 * u * pow(1 - u, 2) - 7.78 * pow(u, 2) * (1 - u) - 3.75 * pow(u, 3);
        }
      }
      // LETRA E
      else if (letra === 'e') {
        if (t % 2 < 1) {
          x = 0.51 * pow(1 - t, 3) + 10.57 * t * pow(1 - t, 2) + 0.59 * pow(t, 2) * (1 - t) + 0.22 * pow(t, 3);
          y = -1.58 * pow(1 - t, 3) - 4.57 * t * pow(1 - t, 2) + 2.86 * pow(t, 2) * (1 - t) - 1.25 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.22 * pow(1 - u, 3) + 0.76 * u * pow(1 - u, 2) + 5.53 * pow(u, 2) * (1 - u) + 1.84 * pow(u, 3);
          y = -1.25 * pow(1 - u, 3) - 10.38 * u * pow(1 - u, 2) - 7.67 * pow(u, 2) * (1 - u) - 2.56 * pow(u, 3);
        }
      }
      //LETRA F
      else if (letra === 'f') {
        if (t % 2 < 1) {
          x = 0.61 * pow(1 - t, 3) + 1.78 * t * pow(1 - t, 2) + 0.77 * pow(t, 2) * (1 - t) + 1.54 * pow(t, 3);
          y = -3.33 * pow(1 - t, 3) - 5.5 * t * pow(1 - t, 2) - 1.21 * pow(t, 2) * (1 - t) - 0.4 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 1.23 * pow(1 - u, 1) + 0.11 * pow(u, 1);
          y = -1.44 * pow(1 - u, 1) - 1.41 * pow(u, 1);
        }
      }
      // LETRA G
      else if (letra === 'g') {
        if (t % 2 < 1) {
          x = 1.49 * pow(1 - t, 3) - 4.57 * t * pow(1 - t, 2) + 5.41 * pow(t, 2) * (1 - t) + 1.78 * pow(t, 3);
          y = -1.58 * pow(1 - t, 3) - 4.57 * t * pow(1 - t, 2) + 2.86 * pow(t, 2) * (1 - t) - 1.25 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 1.78 * pow(1 - u, 3) + 5.24 * u * pow(1 - u, 2) + 0.47 * pow(u, 2) * (1 - u) + 0.16 * pow(u, 3);
          y = -1.25 * pow(1 - u, 3) - 10.38 * u * pow(1 - u, 2) - 7.67 * pow(u, 2) * (1 - u) - 2.56 * pow(u, 3);

        }
      }
      //LETRA H
      else if (letra === 'h') {
        if (t % 2 < 1) {
          x = 0.28 * pow(1 - t, 3) + 0.83 * t * pow(1 - t, 2) + 0.92 * pow(t, 2) * (1 - t) + 0.29 * pow(t, 3);
          y = -0.18 * pow(1 - t, 3) - 0.54 * t * pow(1 - t, 2) - 5.65 * pow(t, 2) * (1 - t) - 2.81 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.29 * pow(1 - u, 3) + 0.85 * u * pow(1 - u, 2) + 3.6 * pow(u, 2) * (1 - u) + 2.13 * pow(u, 3);
          y = -2.81 * pow(1 - u, 3) - 11.21 * u * pow(1 - u, 2) + 2.7 * pow(u, 2) * (1 - u) - 3.01 * pow(u, 3);
        }
      }
      
      // LETRA I
      else if (letra === 'i') {
        if (t % 2 < 1) {
          x = 0.77 * pow(1-t, 3) + 2.3 * t * pow(1-t, 2) + 2.3 * pow(t, 2) * (1-t) + 0.83 * pow(t, 3);
          y = -0.38 * pow(1-t, 3) - 1.15 * t * pow(1-t, 2) - 7.81 * pow(t, 2) * (1-t) - 2.7 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.83 * pow(1-u, 3) + 2.88 * u * pow(1-u, 2) + 2.7 * pow(u, 2) * (1-u) + 1.18 * pow(u, 3);
          y = -2.7 * pow(1-u, 3) - 8.75 * u * pow(1-u, 2) - 8.61 * pow(u, 2) * (1-u) - 2.74 * pow(u, 3);
        }
      }
      // LETRA J
      else if (letra === 'j') {
        if (t % 2 < 1) {
          x = 1.1 * pow(1-t, 3) + 3.31 * t * pow(1-t, 2) + 3.79 * pow(t, 2) * (1-t) + 0.96 * pow(t, 3);
          y = -0.38 * pow(1-t, 3) - 1.15 * t * pow(1-t, 2) - 7.39 * pow(t, 2) * (1-t) - 2.79 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.96 * pow(1-u, 3) + 1.76 * u * pow(1-u, 2) + 1.41 * pow(u, 2) * (1-u) + 0.29 * pow(u, 3);
          y = -2.79 * pow(1-u, 3) - 9.59 * u * pow(1-u, 2) - 8.95 * pow(u, 2) * (1-u) - 2.43 * pow(u, 3);
        }
      }
      // LETRA K
      else if (letra === 'k') {
        if (t % 2 < 1) {
          x = 0.54 * (1-t) + 0.55 * t;
          y = -0.37 * (1-t) - 3.76 * t;
        } else {
          let u = t % 1;
          x = 1.81 * pow(1-u, 3) + 1.01 * u * pow(1-u, 2) + 1.41 * pow(u, 2) * (1-u) + 1.83 * pow(u, 3);
          y = -1.31 * pow(1-u, 3) - 7.16 * u * pow(1-u, 2) - 8.04 * pow(u, 2) * (1-u) - 3.71 * pow(u, 3);
        }
      }
      
      //LETRA L
      else if (letra === 'l') {
        if (t % 2 < 1) {
          x = 0.46 * pow(1-t, 3) + 1.42 * t * pow(1-t, 2) + 1.05 * pow(t, 2) * (1-t) + 0.61 * pow(t, 3);
          y = -0.14 * pow(1-t, 3) - 2.78 * t * pow(1-t, 2) - 7.54 * pow(t, 2) * (1-t) - 2.71 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.61 * pow(1-u, 3) + 2.86 * u * pow(1-u, 2) + 2.94 * pow(u, 2) * (1-u) + 1.46 * pow(u, 3);
          y =-2.71 * pow(1-u, 3) - 8.44 * u * pow(1-u, 2) - 8.32 * pow(u, 2) * (1-u) - 2.6 * pow(u, 3);
        }
      }
      
      //LETRA M
      else if (letra === 'm') {
        if (t % 2 < 1) {
          x = 0.34 * pow(1-t, 3) + 0.98 * t * pow(1-t, 2) + 0.59 * pow(t, 2) * (1-t) + 0.79 * pow(t, 3);
          y = -3.01 * pow(1-t, 3) - 7.44 * t * pow(1-t, 2) + 0.45 * pow(t, 2) * (1-t) - 0.77 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.79 * pow(1-u, 3) + 6.32 * u * pow(1-u, 2) + 7.14 * pow(u, 2) * (1-u) + 2.79 * pow(u, 3);
          y = -0.77 * pow(1-u, 3) - 13.42 * u * pow(1-u, 2) + 8.45 * pow(u, 2) * (1-u) - 2.91 * pow(u, 3);
        }
      }
      
      //LETRA N
      else if (letra === 'n') {
        if (t % 2 < 1) {
          x = 0.73 * pow(1-t, 3) + 2.1 * t * pow(1-t, 2) + 2.37 * pow(t, 2) * (1-t) + 0.94 * pow(t, 3);
          y = -0.25 * pow(1-t, 3) - 1.27 * t * pow(1-t, 2) - 6.92 * pow(t, 2) * (1-t) - 2.61 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.94 * pow(1-u, 3) + 2.59 * u * pow(1-u, 2) + 2.6 * pow(u, 2) * (1-u) + 1.07 * pow(u, 3);
          y = -2.61 * pow(1-u, 3) - 8.47 * u * pow(1-u, 2) - 8.03 * pow(u, 2) * (1-u) - 2.59 * pow(u, 3);
        }
      }
      
      //LETRA O
      else if (letra === 'o') {
        if (t % 2 < 1) {
          x = 0.71 * pow(1-t, 3) + 2.07 * t * pow(1-t, 2) + 2.24 * pow(t, 2) * (1-t) + 0.88 * pow(t, 3);
          y = -0.2 * pow(1-t, 3) - 1.11 * t * pow(1-t, 2) - 6.79 * pow(t, 2) * (1-t) - 2.65 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.88 * pow(1-u, 3) + 2.51 * u * pow(1-u, 2) + 2.7 * pow(u, 2) * (1-u) + 1.09 * pow(u, 3);
          y = -2.65 * pow(1-u, 3) - 8.28 * u * pow(1-u, 2) - 8.21 * pow(u, 2) * (1-u) - 2.67 * pow(u, 3);
        }
      }
      
      //LETRA P
      
      else if (letra === 'p') {
        if (t % 2 < 1) {
          x = 0.67 * pow(1-t, 3) + 1.97 * t * pow(1-t, 2) + 2.12 * pow(t, 2) * (1-t) + 0.84 * pow(t, 3);
          y = -0.18 * pow(1-t, 3) - 1.08 * t * pow(1-t, 2) - 6.59 * pow(t, 2) * (1-t) - 2.61 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.84 * pow(1-u, 3) + 2.38 * u * pow(1-u, 2) + 2.51 * pow(u, 2) * (1-u) + 1.08 * pow(u, 3);
          y = -2.61 * pow(1-u, 3) - 8.15 * u * pow(1-u, 2) - 8.03 * pow(u, 2) * (1-u) - 2.62 * pow(u, 3);
        }
      }
      
      //LETRA Q
      else if (letra === 'q') {
        if (t % 2 < 1) {
          x = 0.72 * pow(1-t, 3) + 2.09 * t * pow(1-t, 2) + 2.28 * pow(t, 2) * (1-t) + 0.91 * pow(t, 3);
          y = -0.19 * pow(1-t, 3) - 1.13 * t * pow(1-t, 2) - 6.74 * pow(t, 2) * (1-t) - 2.63 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.91 * pow(1-u, 3) + 2.47 * u * pow(1-u, 2) + 2.6 * pow(u, 2) * (1-u) + 1.07 * pow(u, 3);
          y = -2.63 * pow(1-u, 3) - 8.23 * u * pow(1-u, 2) - 8.12 * pow(u, 2) * (1-u) - 2.65 * pow(u, 3);
        }
      }
      
      //LETRA R
      
      else if (letra === 'r') {
        if (t % 2 < 1) {
          x = 0.69 * pow(1-t, 3) + 2.02 * t * pow(1-t, 2) + 2.2 * pow(t, 2) * (1-t) + 0.87 * pow(t, 3);
          y = -0.17 * pow(1-t, 3) - 1.05 * t * pow(1-t, 2) - 6.63 * pow(t, 2) * (1-t) - 2.57 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.87 * pow(1-u, 3) + 2.42 * u * pow(1-u, 2) + 2.52 * pow(u, 2) * (1-u) + 1.06 * pow(u, 3);
          y = -2.57 * pow(1-u, 3) - 8.12 * u * pow(1-u, 2) - 8.01 * pow(u, 2) * (1-u) - 2.58 * pow(u, 3);
        }
      }
      
      //LETRA S
      
      else if (letra === 's') {
        if (t % 2 < 1) {
          x = 0.66 * pow(1-t, 3) + 1.94 * t * pow(1-t, 2) + 2.08 * pow(t, 2) * (1-t) + 0.83 * pow(t, 3);
          y = -0.15 * pow(1-t, 3) - 1.01 * t * pow(1-t, 2) - 6.54 * pow(t, 2) * (1-t) - 2.55 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.83 * pow(1-u, 3) + 2.36 * u * pow(1-u, 2) + 2.48 * pow(u, 2) * (1-u) + 1.05 * pow(u, 3);
          y = -2.55 * pow(1-u, 3) - 8.05 * u * pow(1-u, 2) - 7.97 * pow(u, 2) * (1-u) - 2.56 * pow(u, 3);
        }
      }
      
      // LETRA T
      
      else if (letra === 't') {
        if (t % 2 < 1) {
          x = 0.68 * pow(1-t, 3) + 2.04 * t * pow(1-t, 2) + 2.16 * pow(t, 2) * (1-t) + 0.85 * pow(t, 3);
          y = -0.16 * pow(1-t, 3) - 1.03 * t * pow(1-t, 2) - 6.58 * pow(t, 2) * (1-t) - 2.56 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.85 * pow(1-u, 3) + 2.39 * u * pow(1-u, 2) + 2.5 * pow(u, 2) * (1-u) + 1.06 * pow(u, 3);
          y = -2.56 * pow(1-u, 3) - 8.09 * u * pow(1-u, 2) - 7.98 * pow(u, 2) * (1-u) - 2.57 * pow(u, 3);
        }
      }
      // LETRA U
      
      else if (letra === 'u') {
        if (t % 2 < 1) {
          x = 0.29 * pow(1-t, 3) + 0.28 * t * pow(1-t, 2) + 7.56 * pow(t, 2) * (1-t) + 1.83 * pow(t, 3);
          y = -0.48 * pow(1-t, 3) - 12.31 * t * pow(1-t, 2) - 7.66 * pow(t, 2) * (1-t) - 0.48 * pow(t, 3);
        } 
      }
      
      // LETRA V
      
      else if (letra === 'v') {
        if (t % 2 < 1) {
          x = 0.21 * pow(1-t, 3) + 1.23 * t * pow(1-t, 2) + 1.25 * pow(t, 2) * (1-t) + 0.84 * pow(t, 3);
          y = -0.27 * pow(1-t, 3) - 2.91 * t * pow(1-t, 2) - 6.88 * pow(t, 2) * (1-t) - 2.34 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.84 * pow(1-u, 3) + 4.62 * u * pow(1-u, 2) + 3.99 * pow(u, 2) * (1-u) + 1.5 * pow(u, 3);
          y = -2.34 * pow(1-u, 3) - 5.69 * u * pow(1-u, 2) - 3.03 * pow(u, 2) * (1-u) - 0.32 * pow(u, 3);
        }
      }
      //LETRA W
      
      else if (letra === 'w') {
        if (t % 2 < 1) {
          x = 0.34 * pow(1-t, 3) + 0.98 * t * pow(1-t, 2) + 0.59 * pow(t, 2) * (1-t) + 0.79 * pow(t, 3);
          y = -0.45 * pow(1-t, 3) - 2.92 * t * pow(1-t, 2) - 10.82 * pow(t, 2) * (1-t) - 2.68 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 0.79 * pow(1-u, 3) + 6.32 * u * pow(1-u, 2) + 7.14 * pow(u, 2) * (1-u) + 2.79 * pow(u, 3);
          y = -2.68 * pow(1-u, 3) + 3.05 * u * pow(1-u, 2) - 18.82 * pow(u, 2) * (1-u) - 0.55 * pow(u, 3);
        }
      }
      
      // LETRA X
      
      else if (letra === 'x') {
        if (t % 2 < 1) {
          x = 0.49 * (1-t) + 1.88 * t;
          y = -0.51 * (1-t) - 2.15 * t;
        } else {
          let u = t % 1;
          x = 0.44 * (1-u) + 1.82 * u;
          y = -2.18 * (1-u) - 0.44 * u;
        }
      }
      
      //LETRA Y
      
      else if (letra === 'y') {
        if (t % 2 < 1) {
          x = 0.83 * pow(1-t, 3) + 2.62 * t * pow(1-t, 2) + 4.71 * pow(t, 2) * (1-t) + 1.9 * pow(t, 3);
          y = -2.34 * pow(1-t, 3) - 5.04 * t * pow(1-t, 2) - 3.08 * pow(t, 2) * (1-t) - 0.36 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 1.36 * (1-u) + 0.73 * u;
          y = -1.21 * (1-u) - 0.43 * u;
        }
      }
      
      //LETRA Z
      else if (letra === 'z') {
        if (t % 2 < 1) {
          x = 0.46 * pow(1-t, 3) + 6.26 * t * pow(1-t, 2) + 5.99 * pow(t, 2) * (1-t) + 1.08 * pow(t, 3);
          y = -0.47 * pow(1-t, 3) - 0.66 * t * pow(1-t, 2) - 2.28 * pow(t, 2) * (1-t) - 1.57 * pow(t, 3);
        } else {
          let u = t % 1;
          x = 1.08 * pow(1-u, 3) + 0.47 * u * pow(1-u, 2) + 0.68 * pow(u, 2) * (1-u) + 1.83 * pow(u, 3);
          y = -1.57 * pow(1-u, 3) - 7.57 *u * pow(1-u, 2) - 8.74 * pow(u, 2) * (1-u) - 2.4 * pow(u, 3);
        }
      }
      
  
      
          
      
      
    
      if (x !== undefined && y !== undefined) {
        strokeWeight(0.12);
        stroke(255, 255, 255, alpha);
        point(x, y);
      }

      // Update t value
      t += stepSize;
      if (t > fadeTime + 1) {
        t = -1;  // Reset to inactive state
      }
      eval('t_' + letra + ' = ' + t);
    }
  }
}
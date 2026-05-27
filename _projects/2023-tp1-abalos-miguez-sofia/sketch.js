function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  if (mouseIsPressed) {
    background(255);
    //Sol
    push();
    strokeWeight(2);
    stroke(0);
    fill(0);
    ellipse(450, 70, 100, 100);
    line(375, 70, 525, 70);
    line(450, -5, 450, 145);
    line(405, 25, 495, 115);
    line(405, 115, 495, 25);
    pop();
    //Troncos
    push();
    stroke(195);
    //a es el eje x
    for (var a = 3; a < 380; a += 10) {
      line(a, 60, a, 512); 
      //b es el eje y
      //primer a y b donde arranca, segundo donde termina 
      for (var b = 63; b < 512; b += 10) {
        line(a, b + 7, a + 2, b);
        line(a, b + 12, a - 2, b + 5);
      }
    }
    for (var c = 383; c < 507; c += 10) {
      line(c, 130, c, 512);
      for (var d = 133; d < 512; d += 10) {
        line(c, d + 7, c + 2, d);
        line(c, d + 12, c - 2, d + 5);
      }
    }
    pop();

    push();
    stroke(60);
    for (var e = 5; e < 380; e += 20) {
      line(e, 70, e, 512);
      for (var f = 73; f < 512; f += 20) {
        line(e, f + 7, e + 5, f);
        line(e, f + 17, e - 5, f + 10);
      }
    }
    for (var g = 385; g < 507; g += 20) {
      line(g, 140, g, 512);
      for (var h = 143; h < 512; h += 20) {
        line(g, h + 7, g + 5, h);
        line(g, h + 17, g - 5, h + 10);
      }
    }
    pop();

    push();
    stroke(0);
    for (var i = 2; i < 402; i += 50) {
      line(i, 80, i, 512);
      for (var j = 83; j < 512; j += 50) {
        line(i, j + 7, i + 10, j);
        line(i, j + 32, i - 10, j + 25);
      }
    }
    for (var k = 402; k < 510; k += 50) {
      line(k, 150, k, 512);
      for (var l = 153; l < 512; l += 50) {
        line(k, l + 7, k + 10, l);
        line(k, l + 32, k - 10, l + 25);
      }
    }
    pop();
  } else {
    background(0);
    //Luna
    if (mouseX < 128) {
      push();
      stroke(255);
      fill(0);
      ellipse(450, 70, 100, 100);
      pop();
    } else if (mouseX > 128 && mouseX < 256) {
      ellipse(450, 70, 100, 100);

      push();
      fill(0);
      ellipse(480, 70, 100, 100);
      pop();
    } else if (mouseX > 256 && mouseX < 384) {
      ellipse(450, 70, 100, 100);
    } else {
      ellipse(450, 70, 100, 100);
      push();
      fill(0);
      ellipse(420, 70, 100, 100);
      pop();
    }
    //Troncos
    push();
    stroke(30);
    for (var m = 3; m < 380; m += 10) {
      line(m, 60, m, 512);
      for (var n = 63; n < 512; n += 10) {
        line(m, n + 7, m + 2, n);
        line(m, n + 12, m - 2, n + 5);
      }
    }
    for (var o = 383; o < 507; o += 10) {
      line(o, 130, o, 512);
      for (var p = 133; p < 512; p += 10) {
        line(o, p + 7, o + 2, p);
        line(o, p + 12, o - 2, p + 5);
      }
    }
    pop();

    push();
    stroke(80);
    for (var q = 5; q < 380; q += 20) {
      line(q, 70, q, 512);
      for (var r = 73; r < 512; r += 20) {
        line(q, r + 7, q + 5, r);
        line(q, r + 17, q - 5, r + 10);
      }
    }
    for (var s = 385; s < 507; s += 20) {
      line(s, 140, s, 512);
      for (var t = 143; t < 512; t += 20) {
        line(s, t + 7, s + 5, t);
        line(s, t + 17, s - 5, t + 10);
      }
    }
    pop();

    push();
    stroke(255);
    for (var u = 2; u < 402; u += 50) {
      line(u, 80, u, 512);
      for (var v = 83; v < 512; v += 50) {
        line(u, v + 7, u + 10, v);
        line(u, v + 32, u - 10, v + 25);
      }
    }
    for (var w = 402; w < 510; w += 50) {
      line(w, 150, w, 512);
      for (var x = 153; x < 512; x += 50) {
        line(w, x + 7, w + 10, x);
        line(w, x + 32, w - 10, x + 25);
      }
    }
    pop();
  }
}

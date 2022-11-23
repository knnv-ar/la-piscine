function cues() {
  if (startClick) {
    cRojo = color(255, 0, 0, 100);
    cBlanco = color(255, 255, 255);

    song.loop();
  }
}
 let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
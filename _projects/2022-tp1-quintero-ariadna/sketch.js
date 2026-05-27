function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(110);

  push()
  noStroke()
  fill(55)
  arc(270, 257, 400, 400, 0, PI, OPEN);
  pop()
  
  
  push() // reflejo de edificios
  translate(width/1.67, height-60);
  rotate(PI);
  strokeWeight(0)
  fill(100)
  rect(82,188,49,68)
  rect(131,150,44,50)
  rect(175,169,49,88)
  rect(40,180,44,68)
  rect(-12,170,52,68)
  rect(-60,158,48,88)
  rect(-104,175,46,135)
  rect(-152,148,50,160)
  pop()
  
  push() //edificios del exterior
  strokeWeight(0)
  fill(180)
  rect(82,188,49,68)
  rect(131,121,44,135)
  rect(175,169,49,88)
  rect(224,97,44,160)
  rect(268,188,49,68)
  rect(317,169,49,88)
  rect(366,121,44,135)
  rect(410,97,50,160)
  pop()
  
  line(0,256,512,256) //linea del medio
  strokeWeight(2)
}
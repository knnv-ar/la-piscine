//CORRARELLO NAHUEL- AM1-TP1
//ARTISTA REFERENCIA GEORGE NEES
function setup() {
 let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');

   background(250);
}

function draw() {
  
  
             //mapa
  strokeWeight(4);
  line (512,0,512,512);
  line (0,0,512,0);
  line (0,0,0,512);
  line (0,512,512,512);
  for (var i = 0 ; i < 512; i += 51) {
  line(i,0, i,512);}
  for (var i = 0 ; i < 512; i += 51) {
  line(0,i,512,i);}
  
    for (var i = 255 ; i < 512; i += 51) {
  rect(i,0,i,51);}
  
  //A---------------------------------------------------------
  fill(25)
  for (var i = 102 ; i < 255; i += 51) {
  rect(i,102,52);}
  rect(102,152,51);
  
  for (var i = 154 ; i < 357; i += 51) {
  rect(306,i,51);}
  rect(255,306,51);
  
  rect(0,357,51);
  rect(0,408,51);
  
  rect(306,407,51);
  rect(306,458,51);
  
  rect(459,357,51);
  
  rect(0,0,51);
  rect(0,51,51);
  
  //B ______-------------------------------------------------
  
  fill(50)
  for (var i = 51 ; i < 408; i += 51) {
  rect(51,i, 51);}
  rect(102,255,51);
  
  for (var i = 102 ; i < 257; i += 51) {
  rect(i,51,51);}
  
  for (var i = 154 ; i < 307; i += 51) {
  rect(i,153,51);}
  
  for (var i = 358 ; i < 512; i += 51) {
  rect(i,458,51);}
  
  for (var i = 154 ; i < 357; i += 51) {
  rect(306,i,51);}
  rect(153,460,51);
  rect(204,460,51);
  
 for (var i = 204 ; i < 357; i += 51) {
  rect(459,i,51);}
  rect(408,51,51);
  rect(408,102,51);
  
             //D--------------------------------------------------
  fill(12)
  for (var i = 153 ; i < 357; i += 51) {
  rect(0,i,51);}
  
  for (var i = 255 ; i < 459; i += 51) {
  rect(203,i,51);}
  for (var i = 102 ; i < 259; i += 51) {
  rect(i,204,51);}
  
  for (var i = 51 ; i < 204; i += 51) {
  rect(459,i,51);}
  for (var i = 407 ; i < 512; i += 51) {
  rect(51,i,51);}
  
for (var i = 306 ; i < 459; i += 51) {
  rect(357,i,51);}
  
  //E ---------------------------------------------------------
  
  fill(40)
  for (var i = 51 ; i < 204; i += 51) {
  rect(i,0,51);}
  for (var i = 254 ; i < 409; i += 51) {
  rect(153,i,51);}
  
  for (var i = 204 ; i < 356; i += 51) {
  rect(408,i,51);}
  for (var i = 255 ; i < 404; i += 51) {
  rect(i,102,51);}
  
  for (var i = 357 ; i < 512; i += 51) {
  rect(255,i,51);}
  
  // F -------------------------------------------------------
  
  fill(20)
  for (var i = 307 ; i < 459; i += 51) {
  rect(102,i,51);}
  
  for (var i = 152 ; i < 255; i += 51) {
  rect(358,i,51);}
  for (var i = 357 ; i < 409; i += 51) {
  rect(408,i,51);}
  for (var i = 306 ; i < 404; i += 51) {
  rect(i,51,51);}
  
  //G---------------------------------------------------
  
  fill(1)
  rect(0,102,51);
  rect(0,460,51);
  rect(102,460,51);
  rect(204,0,51);
  rect(409,154,51);
  rect(255,255,51); //centroo
  rect(306,357,51);
  rect(459,408,51);
  

  
  
  
  
  
  

  
}
function setup() {
  let canvas=createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(240);
  fill(25);
  strokeWeight(0.5);
  rectMode(CENTER);
  translate(width / 10, height / 10);
  translate(p5.Vector.fromAngle(millis() / 100, 1));
  rect(30, 20, 70, 70);
  rect(110, 25, 70, 70);
  rect(210, 35, 70, 70);
  rect(280, 55, 70, 70);
  rect(400, 95, 70, 70);
   rectMode(CENTER);
  translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 200, 1));
  rect(30, 100, 70, 70);
  rect(130, 100, 70, 70);
  rect(190, 100, 70, 70);
  rect(300, 150, 70, 70);
  rect(370, 165, 70, 70);
   rectMode(CENTER);
  translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 200, 1));
  rect(40, 180, 70, 70);
  rect(110, 165, 70, 70);
  rect(180, 175, 70, 70);
  rect(250, 215, 70, 70);
  rect(375, 225, 70, 70);
  rectMode(CENTER);
  translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 200, 1));
  rect(30, 250, 70, 70);
  rect(110, 250, 70, 70);
  rect(185, 290, 70, 70);
  rect(260, 310, 70, 70);
  rect(370, 295, 70, 70);
   rectMode(CENTER);
  translate(width / 100, height / 100);
  translate(p5.Vector.fromAngle(millis() / 200, 1));
  rect(30, 350, 70, 70);
  rect(100, 350, 70, 70);
  rect(190, 380, 70, 70);
  rect(265, 400, 70, 70);
  rect(365, 360, 70, 70);
//Inspirado en la obra de la artista Vera Molnar https://www.bing.com/images/search?view=detailV2&ccid=2ybYsOyC&id=180EB13FB87D14CE6306EFEE573EF292A0B40178&thid=OIP.2ybYsOyCsNs2xOn0OIaB8wAAAA&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.db26d8b0ec82b0db36c4e9f4388681f3%3frik%3deAG0oJLyPlfu7w%26riu%3dhttp%253a%252f%252f3.bp.blogspot.com%252f_9fKtttqmeIE%252fSceRsoAbPKI%252fAAAAAAAAABA%252f9Meauc0cWKE%252fs400%252fmolnar.bmp%26ehk%3dA8CnBVQLYvFVMgo6zIhpcTxmBQ0am2%252focXG%252fkfpDMb0%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=400&expw=397&q=vera+molnar+obras&simid=608050387599235619&FORM=IRPRST&ck=B1A91BEAC41B1FB3BE3C0694B3F5D9BA&selectedIndex=21&ajaxhist=0&ajaxserp=0
}

let fuegif1;
let fuegif1alto;
let fuegif2;
let fuegif2alto;
let fuegif3;
let fuegif3alto;
let drop;
let awasound;

function preload() {
     
  awasound = loadSound("multi/awasound.mp3");


  fuegif1alto = 150;
  fuegif2alto = 150;
  fuegif3alto = 150;

  velas = loadImage("multi/velas.webp");
  fuegif1 = createImg("multi/fuegif.webp");
  fuegif2 = createImg("multi/fuegif.webp");
  fuegif3 = createImg("multi/fuegif.webp");

  fuegif1.style("width", "100px")
  fuegif2.style("width", "100px")
  fuegif3.style("width", "100px")
  fuegif2.style("height", "150px");
  fuegif2.style("height", "150px");
  fuegif3.style("height", "150px");
  
}

function setup() {
  let canvas = createCanvas(800, 1200);
  canvas.parent('div-sketch');
  background(0)

  position1 = 600;
  position2 = 390;
  position3 = 700;

}

function draw() {


  image(velas, 100, 400);

  fuegif1.position(475, position1); //tercera
  fuegif2.position(325, position2); //segunda
  fuegif3.position(217, position3); // primera



  if (mouseIsPressed) {
    fuegif1.style("height", fuegif1alto + "px");
    fuegif1.position(475, position1); //tercera
    
    fuegif2.style("height", fuegif2alto + "px");
    fuegif2.position(325, position2); //tercera
    
    fuegif3.style("height", fuegif3alto + "px");
    fuegif3.position(217, position3); //tercera


    if (fuegif1alto < 650) {
      fuegif1alto = fuegif1alto + 4;
      position1 = position1 - 4;
      
      fuegif2alto = fuegif2alto + 2;
      position2 = position2 - 2;
      
      fuegif3alto = fuegif3alto + 5;
      position3 = position3 - 5;
      
      
    } else {
              awasound.play();
      
      gota1 = createImg("multi/drop.webp");
      gota1.style("width", "150px");
      gota1.position(460, 140); // awa3
      
      gota2 = createImg("multi/drop.webp");
      gota2.style("width", "150px");
      gota2.position(320, 140); // awa2
      
      gota3 = createImg("multi/drop.webp");
      gota3.style("width", "150px");
      gota3.position(185, 140); // awa1
      
      setTimeout(function() {
        gota1.remove()
        gota2.remove()
        gota3.remove()
        

        
     }, 2000)
      position1 = 600;
      fuegif1alto = 150;
      
      
      position2 = 390;
      fuegif2alto = 150;
      
      position3 = 700;
      fuegif3alto = 150;
    }
    

  }
}

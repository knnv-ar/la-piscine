class Jeringa {

  constructor() {
    this.x = 0;
    this.y = 0;


  }

  draw() {

    //aguja
    fill(0);
    noStroke();
    rect(width / 2, mouseY + 200, 2, 50);
    //tubo
    fill(0, 255, 255);
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2);
    rect(width / 2, mouseY + 260, 50, 90);
    //pulsor
    fill(255);
    rect(width / 2, mouseY + 310, 70, 20);
    noCursor();




  }

}
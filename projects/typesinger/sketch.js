function setup() {
    let canvas = createCanvas(512, 512);
    canvas.parent('div-sketch');
}

function draw() {
    background(220);

    push();
    rectMode(CENTER)
        //rectangulos
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var x = i * 50 + 81;
            var y = j * 50 + 128;
            var d = j * 7;

            fill(j * 20);
            noStroke();

            rect(x, y, d);
        }
    }
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var x = i * 50 + 81;
            var y = j * 50 + 128;
            var d = j * 5;

            fill(j * 30);
            noStroke();

            rect(x, y, d);
        }
    }
    pop();

    //lineas horizontales superiores
    push();
    if (keyIsPressed) {
        var lineSpacing = 600 / 380;
        var lineWidth = 0.15;
        push();
        stroke(0);
        strokeWeight(lineWidth);
        for (let i = 0; i < 80; i++) {
            var y = lineSpacing * (i + 10);

            line(0, y, width, y, lineWidth);
        }
        pop();
    } else {
        var lineSpacing = 600 / 380;
        var lineWidth = 0.5;

        push();
        stroke(0);
        strokeWeight(lineWidth);
        for (let i = 0; i < 80; i++) {
            var y = lineSpacing * (i + 10);

            line(0, y, width, y, lineWidth);
        }
        pop();
    }
    pop();

    //Si se mantiene el mouse clickeado cambia el color de las 3 primitivas
    push();
    var shapeType = floor(random(3));
    var x = random(width);
    var y = random(height / 4);


    if (mouseIsPressed) {
        noStroke();
        fill(100, 100, 100);

        switch (shapeType) {
            case 0:
                ellipse(x, y, 20, 20);
                break;
            case 1:
                rect(x, y, 50, 50);
                break;
            case 2:
                triangle(x, y, x + 50, y, x + 30, y + 30);
                break;
        }
    } else {
        noStroke();
        fill(255, 255, 255);

        switch (shapeType) {
            case 0:
                ellipse(x, y, 20, 20);
                break;
            case 1:
                rect(x, y, 50, 50);
                break;
            case 2:
                triangle(x, y, x + 50, y, x + 30, y + 30);
                break;
        }
    }
    pop();
}

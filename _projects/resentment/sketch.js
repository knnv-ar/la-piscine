//Título de la Obra: Resentment

//Año: 2022

//Autor/a: Romina González

//tecla 1 "Kiss the Gogoat"
//tecla 2 "Dance Macabre"
//tecla 3 "Con Clavi Con Dio"
//tecla P para Pausar


let song, song2, song3;
let texto = "";
let myFont;
var luces = false;
var posZ = 100;
var img, img2, img3, img4, luna, saturn, lapida1, lapida2, men, men2, lucy, rock;
let angle = 0;

function preload() {
    song = loadSound("./assets/kissTheGoGoat.mp3");
    song2 = loadSound("./assets/danceMacabre.mp3");
    song3 = loadSound("./assets/conClaviConDio.mp3");
    myFont = loadFont("./assets/greenLondon.ttf");
    img = loadImage("./assets/fondosfera.png");
    img2 = loadImage("./assets/saturno.png");
    img3 = loadImage("./assets/love.png");
    img4 = loadImage("./assets/dance.png");
    luna = loadImage("./assets/luna.jpg");
    saturn = loadImage("./assets/saturn.png");
    lapida1 = loadImage("./assets/lapida1.png");
    lapida2 = loadImage("./assets/lapida2.png");
    men = loadImage("./assets/men.png");
    men2 = loadImage("./assets/men2.png");
    lucy = loadImage("./assets/lucy.png");
    rock = loadImage("./assets/rock.png");
}

function setup() {
    let canvas = createCanvas(800, 850, WEBGL);
    canvas.parent('div-sketch');
}

function draw() {
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    let locZ = width - height / 2;
    if (key == 0) {
        escena = 0;

        push();
        noStroke();
        texture(img);
        pointLight(255, 0, 200, locX, locY, posZ);
        background(0);
        translate(0, 0, -600);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        sphere(600);
        pop();

        push();
        noStroke();
        fill(110, 51, 47);
        rect(-1000, -60, 8000, 200);
        pop();

        push();
        textFont(myFont);
        textSize(35);
        fill(0);
        text("Presione 1 para la escena 1", -150, 0);
        text("Presione 3 para la escena 3", -150, 100);
        text("Presione 2 para la escena 2", -150, 50);
        pop();
    }

    if (key == 1) {
        escena = 1;

        push(); //estrellas
        background(10);
        fill("withe");
        for (i = 0; i < 300; i++) {
            ellipse(random(-800, width), random(-850, height), random(2, 6));
        }
        pop();

        push(); //planeta central
        texture(img2);
        translate(0, 1090, -500);
        //rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        //rotateZ(frameCount * 0.01);
        sphere(750);
        pop();

        push(); //anillo saturno
        fill(205, 137, 121);
        translate(-600, -700, -800);
        //rotateX(frameCount * 0.03);
        //rotateY(frameCount * 0.01)
        rotateZ(frameCount * 0.01);
        torus(200, 20);
        pop();

        push(); //saturno
        pointLight(209, 155, 96, locX, locY, posZ);
        texture(saturn);
        noStroke();
        translate(-600, -700, -800);
        //rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        //rotateZ(frameCount * 0.01);
        sphere(140);
        pop();

        push(); //2do planeta
        pointLight(165, 130, 93, locX, locY, posZ);
        ambientLight(105, 73, 38);
        noStroke();
        translate(400, -600, -300);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        rotateZ(frameCount * 0.01);
        sphere(200);
        pop();

        push(); //personas
        image(img3, -200, -200, 500, 500);
        pop();
    }

    if (key == 2) {
        escena = 2;

        push(); //estrellas
        background(0);
        fill("withe");
        for (i = 0; i < 300; i++) {
            ellipse(random(-800, width), random(-850, height), random(2, 6));
        }
        pop();

        push(); //Luna
        pointLight(165, 130, 93, locX, locY, posZ);
        ambientLight(105, 73, 38);
        texture(luna);
        noStroke();
        translate(-400, -600, -300);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        rotateZ(frameCount * 0.01);
        sphere(200);
        pop();

        push(); //anillo saturno
        fill(205, 137, 121);
        translate(600, -700, -800);
        //rotateX(frameCount * 0.03);
        //rotateY(frameCount * 0.01)
        rotateZ(frameCount * 0.01);
        torus(200, 20);
        pop();

        push(); //saturno
        pointLight(184, 84, 61, locX, locY, posZ);
        texture(saturn);
        noStroke();
        translate(600, -700, -800);
        //rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        //rotateZ(frameCount * 0.01);
        sphere(140);
        pop();

        push(); //planeta central
        texture(img2);
        translate(0, 1090, -500);
        //rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        //rotateZ(frameCount * 0.01);
        sphere(750);
        pop();

        push(); //personas bailando
        image(img4, -200, -90, 350, 400);
        pop();

        push(); //lapida 1
        image(lapida1, -450, 95, 550, 500);
        pop();

        push(); //lapida 2
        image(lapida2, 95, 200, 450, 250);
        pop();
    }

    if (key == 3) {
        escena = 3;
        push(); //estrellas
        background(10);
        fill("withe");
        for (i = 0; i < 300; i++) {
            ellipse(random(-800, width), random(-850, height), random(2, 6));
        }
        pop();

        push(); //2do planeta
        pointLight(165, 130, 93, locX, locY, posZ);
        ambientLight(105, 73, 38);
        texture(img2);
        noStroke();
        translate(-400, -600, -300);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        rotateZ(frameCount * 0.01);
        sphere(200);
        pop();

        push(); //anillo saturno
        fill(205, 137, 121);
        translate(600, -700, -800);
        //rotateX(frameCount * 0.03);
        //rotateY(frameCount * 0.01)
        rotateZ(frameCount * 0.01);
        torus(200, 20);
        pop();

        push(); //saturno
        pointLight(184, 84, 61, locX, locY, posZ);
        ambientLight(184, 84, 61);
        texture(img2);
        noStroke();
        translate(600, -700, -800);
        //rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        //rotateZ(frameCount * 0.01);
        sphere(140);
        pop();

        push(); //planeta central
        texture(img);
        translate(0, 1090, -500);
        //rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        //rotateZ(frameCount * 0.01);
        sphere(750);
        pop();

        push(); //hombre y caballo
        image(men, -240, -90, 550, 550);
        pop();

        push(); //hombre2
        image(men2, -300, 200, 250, 300);
        pop()


        push(); //isla
        image(rock, 100, -250, 250, 300);
        pop();


        push(); //lucy
        image(lucy, 10, -440, 350, 400);
        pop();


    }
}

function keyPressed() {
    song.stop();
    song2.stop();
    song3.stop();
    if (key == "p") {
        song.pause(); //pausa
    }
    if (key == "1") {
        song.play(); //empieza cancion.
    }
    if (key == "2") {
        song2.play(); //empieza cancion 2.
    }
    if (key == "p") {
        song2.pause(); //pausa
    }
    if (key == "3") {
        song3.play(); //empieza cancion 3.
    }

    if (key == "p") {
        song3.pause(); //pausa
    }
}

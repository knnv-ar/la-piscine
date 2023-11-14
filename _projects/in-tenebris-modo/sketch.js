
let angle = 0;
let z3 = 170;
let z2 = 0;
let zDirection3 = 1;
let zDirection2 = 1;
let sonido;

let txtr = [
  "आदि मे भगवान् आकाश आ पृथ्वी के निर्माण केने छलाह ",
  " บัดนี้แผ่นดินโลกไม่มีรูปร่างและว่างเปล่า ความมืดปกคลุมเหนือผิวน้ำลึก ",
  "  ஆதியில்     வுள்      பூமியையும்    ைத்தார்",
  "  Тэрээр мөн дэлхийг бүрхсэн",
" «در تاریکی تنها و بی حرکتی و سکوت شب».",
  "   太初有道：道與神同在：道就是神",
  "     শুরুতে বাক্য ছিল, এবং বাক্য ঈশ্বরের সঙ্গে ছিল এবং বাক্য ঈশ্বর ছিলেন৷",
  "  য ঈশ্বরের সঙ্গে ছিল এবং বাক্য ঈশ্বর ছিলেন৷",
  "   இருந்தது, ஆழத்தின் மேற்பரப்பில் இருள் இருந்தது, ",
  "  आब पृथ्वी निराकार आ खाली , गहींरक सतह पर अन्हार छल आ परमेश् वरक आत् ",
   "  Խավարը քայլում է խորը փեսայի և փեսայի փեսայի հոգու վրա:  ",
  "   และพระวิญญาณของพระเจ้าลอยอยู่เหนือน้ ำ ",
];

function preload() {
  sonido = loadSound("principio7sn.mp3");
 
}

function setup() {
 let canvas =  createCanvas(700, 700, WEBGL);
 canvas.parent('div-sketch');
  sonido.loop();
  
  
  texto1 = createGraphics(320, 280);
  texto1.textAlign(RIGHT);
  texto1.textSize(24);
  texto1.fill(230, 120, 55);
  texto1.text("Սկզբում Աստված  ու երկիրը Հողն էր", 100, 120);

  texto2 = createGraphics(320, 150);
  texto2.textAlign(CENTER);
  texto2.textSize(12);
  texto2.fill(210, 60, 55);
  texto2.text( 
  "   در ابتدا کلمه بود و کلمه نزد خدا بود و کلمه خدا بود.           ",
    150,
    80
  );

  texto3 = createGraphics(320, 250);
  texto3.textAlign(CENTER);
  texto3.textSize(12);
  texto3.fill(255);

  for (let i = 0; i < txtr.length; i++) {
    let yPos = (i - (txtr.length - 1) / 2) * 25;
    texto3.text(txtr[i], 100, 100 + yPos);
  }
  
  
}



function draw() {
  background(20);
  noStroke();
  ambientLight(45);
  
 push()
  camera(0, 0, z3,0, 0, 1, 0, 91, -410);

 
  z3 += 0.0095 * zDirection3;
  z2 += 0.005 * zDirection2;
 
   if (z3 >= 225 || z3 <= 165) {
    zDirection3 *= -1;
  }


//esferas centrales

  push();
  translate(0, 0, 150);
  texture(texto2);
  // rotateZ(angle * 1.7);
  rotateX(angle * 1.7);
  rotateY(angle * 1.7);
  pointLight(255, 255, 25, 150, 30, 100);
  //  pointLight(55, 55, -25, 150, 130, 150);
  specularMaterial(180);
  shininess(180);
  sphere(10);
  pop();

  push();
  translate(0, 0, 150);
  texture(texto1);
  rotateZ(angle * 1.1);
  // rotateX(angle * 1.1);
  rotateY(angle * 1.1);
  pointLight(255, 155, 25, 50, 130, 50);
  // pointLight(55, 55, -25, 150, 130, 150);
  specularMaterial(180);
  shininess(180);
  sphere(15);
  pop();

  push();
  translate(0, 0, 150);
  texture(texto1);
  rotateZ(angle * -1.3);
  rotateX(angle * -1.3);
  //rotateY(angle * -1.3);
  pointLight(255, 255, 25, 100, 230, 0);
  //  pointLight(55, 55, -25, 150, 130, 150);
  specularMaterial(180);
  shininess(180);
  sphere(20);
  pop();

  push();
  translate(0, 0, 150);
  texture(texto2);
  rotateZ(angle * 1.5);
  rotateX(angle * 1.5);
  rotateY(angle * 1.5);
  pointLight(255, 155, 25, 0, 130, 20);
  // pointLight(55, 55, -25, 150, 130, 150);
  specularMaterial(180);
  shininess(180);
  sphere(25);
  pop();

  push();
  translate(0, 0, 150);
  texture(texto1);
  rotateZ(angle * 0.9);
  rotateX(angle * 0.9);
  rotateY(angle * 0.9);
  pointLight(255, 155, 25, -250, 10, 250);
  // pointLight(55, 55, -25, 150, 130, 150);
  specularMaterial(180);
  shininess(180);
  sphere(30);
  pop();

  push();
  translate(0, 0, 150);
  texture(texto2);
  rotateZ(angle * -1.3);
  rotateX(angle * -1.3);
  //rotateY(angle * -1.3);
  pointLight(255, 155, 25, -10, -230, -220);
  // pointLight(55, 55, -25, 150, 130, 150);
  specularMaterial(180);
  shininess(180);
  sphere(35);
  pop();

  //cubo rojo
  push();
  noFill();
  // pointLight(165, 5, 65, 420, 0, 820);
  pointLight(215, 5, 25, 0, 0, 300);
  specularMaterial(117);
  texture(texto3);
  translate(0, 0, 200);
  rotateX(angle * 0.64);
  rotateY(angle * 0.42);
  rotateZ(angle * 0.37);
  box(100);
  pop();

  //cubo azul
  push();
  pointLight(0, 32, 140, 420, 0, 820);
  //pointLight(122, 5, 1, 0, 0, 0 );
  specularMaterial(117);
  texture(texto3);
  translate(1, 1, 200);
  rotateX(angle * 0.64);
  rotateY(angle * 0.42);
  rotateZ(angle * 0.37);
  box(100);
  pop();
pop()
  
  
  
  angle += 0.03;
}


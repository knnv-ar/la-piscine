// Variables figuras
let x1, y1, velocidadX1, direccionX1, velocidadY1, direccionY1;
let x2, y2, velocidadX2, direccionX2, velocidadY2, direccionY2;
let x3, y3, velocidadX3, direccionX3, velocidadY3, direccionY3;
let x4, y4, velocidadX4, direccionX4, velocidadY4, direccionY4;
let x5, y5, velocidadX5, direccionX5, velocidadY5, direccionY5;
let x6, y6, velocidadX6, direccionX6, velocidadY6, direccionY6;
let x7, y7, velocidadX7, direccionX7, velocidadY7, direccionY7;
let x8, y8, velocidadX8, direccionX8, velocidadY8, direccionY8;
let x9, y9, velocidadX9, direccionX9, velocidadY9, direccionY9;
let x10, y10, velocidadX10, direccionX10, velocidadY10, direccionY10;
let x11, y11, velocidadX11, direccionX11, velocidadY11, direccionY11;
let x12, y12, velocidadX12, direccionX12, velocidadY12, direccionY12;
let x13, y13, velocidadX13, direccionX13, velocidadY13, direccionY13;
let x14, y14, velocidadX14, direccionX14, velocidadY14, direccionY14;
let x15, y15, velocidadX15, direccionX15, velocidadY15, direccionY15;
let x16, y16, velocidadX16, direccionX16, velocidadY16, direccionY16;
let x17, y17, velocidadX17, direccionX17, velocidadY17, direccionY17;
let x18, y18, velocidadX18, direccionX18, velocidadY18, direccionY18;
let x19, y19, velocidadX19, direccionX19, velocidadY19, direccionY19;
let x20, y20, velocidadX20, direccionX20, velocidadY20, direccionY20;
let x21, y21, velocidadX21, direccionX21, velocidadY21, direccionY21;
let x22, y22, velocidadX22, direccionX22, velocidadY22, direccionY22;
let x23, y23, velocidadX23, direccionX23, velocidadY23, direccionY23;
let x24, y24, velocidadX24, direccionX24, velocidadY24, direccionY24;
let x25, y25, velocidadX25, direccionX25, velocidadY25, direccionY25;
let x26, y26, velocidadX26, direccionX26, velocidadY26, direccionY26;
let x27, y27, velocidadX27, direccionX27, velocidadY27, direccionY27;
let x28, y28, velocidadX28, direccionX28, velocidadY28, direccionY28;
let x29, y29, velocidadX29, direccionX29, velocidadY29, direccionY29;
let x30, y30, velocidadX30, direccionX30, velocidadY30, direccionY30;
let x31, y31, velocidadX31, direccionX31, velocidadY31, direccionY31;
let x32, y32, velocidadX32, direccionX32, velocidadY32, direccionY32;
let x33, y33, velocidadX33, direccionX33, velocidadY33, direccionY33;
let x34, y34, velocidadX34, direccionX34, velocidadY34, direccionY34;
let x35, y35, velocidadX35, direccionX35, velocidadY35, direccionY35;
let x36, y36, velocidadX36, direccionX36, velocidadY36, direccionY36;
let x37, y37, velocidadX37, direccionX37, velocidadY37, direccionY37;
let x38, y38, velocidadX38, direccionX38, velocidadY38, direccionY38;
let x39, y39, velocidadX39, direccionX39, velocidadY39, direccionY39;
let x40, y40, velocidadX40, direccionX40, velocidadY40, direccionY40;
let x41, y41, velocidadX41, direccionX41, velocidadY41, direccionY41;
let x42, y42, velocidadX42, direccionX42, velocidadY42, direccionY42;
let x43, y43, velocidadX43, direccionX43, velocidadY43, direccionY43;
let x44, y44, velocidadX44, direccionX44, velocidadY44, direccionY44;
let x45, y45, velocidadX45, direccionX45, velocidadY45, direccionY45;
let x46, y46, velocidadX46, direccionX46, velocidadY46, direccionY46;
let x47, y47, velocidadX47, direccionX47, velocidadY47, direccionY47;
let x48, y48, velocidadX48, direccionX48, velocidadY48, direccionY48;
let x49, y49, velocidadX49, direccionX49, velocidadY49, direccionY49;
let x50, y50, velocidadX50, direccionX50, velocidadY50, direccionY50;
let x51, y51, velocidadX51, direccionX51, velocidadY51, direccionY51;
let x52, y52, velocidadX52, direccionX52, velocidadY52, direccionY52;
let x53, y53, velocidadX53, direccionX53, velocidadY53, direccionY53;
let x54, y54, velocidadX54, direccionX54, velocidadY54, direccionY54;
let x55, y55, velocidadX55, direccionX55, velocidadY55, direccionY55;
let x56, y56, velocidadX56, direccionX56, velocidadY56, direccionY56;
let x57, y57, velocidadX57, direccionX57, velocidadY57, direccionY57;
let x58, y58, velocidadX58, direccionX58, velocidadY58, direccionY58;
let x59, y59, velocidadX59, direccionX59, velocidadY59, direccionY59;
let x60, y60, velocidadX60, direccionX60, velocidadY60, direccionY60;
let x61, y61, velocidadX61, direccionX61, velocidadY61, direccionY61;
let x62, y62, velocidadX62, direccionX62, velocidadY62, direccionY62;
let x63, y63, velocidadX63, direccionX63, velocidadY63, direccionY63;
let x64, y64, velocidadX64, direccionX64, velocidadY64, direccionY64;


// Variable velocidad
let velocidad = 2;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  stroke(255);
  strokeWeight(2);
  noFill();

  
  // Figura 1
  x1 = random(0, width);
  y1 = random(0, height);
  velocidadX1 = velocidad;
  direccionX1 = random([-1, 1]);
  velocidadY1 = velocidad;
  direccionY1 = random([-1, 1]);

  // Figura 2
  x2 = random(0, width);
  y2 = random(0, height);
  velocidadX2 = velocidad;
  direccionX2 = random([-1, 1]);
  velocidadY2 = velocidad;
  direccionY2 = random([-1, 1]);

  // Figura 3
  x3 = random(0, width);
  y3 = random(0, height);
  velocidadX3 = velocidad;
  direccionX3 = random([-1, 1]);
  velocidadY3 = velocidad;
  direccionY3 = random([-1, 1]);
  
  // Figura 4
  x4 = random(0, width);
  y4 = random(0, height);
  velocidadX4 = velocidad;
  direccionX4 = random([-1, 1]);
  velocidadY4 = velocidad;
  direccionY4 = random([-1, 1]);

  // Figura 5
  x5 = random(0, width);
  y5 = random(0, height);
  velocidadX5 = velocidad;
  direccionX5 = random([-1, 1]);
  velocidadY5 = velocidad;
  direccionY5 = random([-1, 1]);

  // Figura 6
  x6 = random(0, width);
  y6 = random(0, height);
  velocidadX6 = velocidad;
  direccionX6 = random([-1, 1]);
  velocidadY6 = velocidad;
  direccionY6 = random([-1, 1]);

  // Figura 7
  x7 = random(0, width);
  y7 = random(0, height);
  velocidadX7 = velocidad;
  direccionX7 = random([-1, 1]);
  velocidadY7 = velocidad;
  direccionY7 = random([-1, 1]);

  // Figura 8
  x8 = random(0, width);
  y8 = random(0, height);
  velocidadX8 = velocidad;
  direccionX8 = random([-1, 1]);
  velocidadY8 = velocidad;
  direccionY8 = random([-1, 1]);

  // Figura 9
  x9 = random(0, width);
  y9 = random(0, height);
  velocidadX9 = velocidad;
  direccionX9 = random([-1, 1]);
  velocidadY9 = velocidad;
  direccionY9 = random([-1, 1]);
  
  // Figura 10
  x10 = random(0, width);
  y10 = random(0, height);
  velocidadX10 = velocidad;
  direccionX10 = random([-1, 1]);
  velocidadY10 = velocidad;
  direccionY10 = random([-1, 1]);
  
  // Figura 11
  x11 = random(0, width);
  y11 = random(0, height);
  velocidadX11 = velocidad;
  direccionX11 = random([-1, 1]);
  velocidadY11 = velocidad;
  direccionY11 = random([-1, 1]);
  
  // Figura 12
  x12 = random(0, width);
  y12 = random(0, height);
  velocidadX12 = velocidad;
  direccionX12 = random([-1, 1]);
  velocidadY12 = velocidad;
  direccionY12 = random([-1, 1]);
  
  // Figura 13
  x13 = random(0, width);
  y13 = random(0, height);
  velocidadX13 = velocidad;
  direccionX13 = random([-1, 1]);
  velocidadY13 = velocidad;
  direccionY13 = random([-1, 1]);
  
  // Figura 14
  x14 = random(0, width);
  y14 = random(0, height);
  velocidadX14 = velocidad;
  direccionX14 = random([-1, 1]);
  velocidadY14 = velocidad;
  direccionY14 = random([-1, 1]);

  // Figura 15
  x15 = random(0, width);
  y15 = random(0, height);
  velocidadX15 = velocidad;
  direccionX15 = random([-1, 1]);
  velocidadY15 = velocidad;
  direccionY15 = random([-1, 1]);
  
  // Figura 16
  x16 = random(0, width);
  y16 = random(0, height);
  velocidadX16 = velocidad;
  direccionX16 = random([-1, 1]);
  velocidadY16 = velocidad;
  direccionY16 = random([-1, 1]);

  // Figura 17
  x17 = random(0, width);
  y17 = random(0, height);
  velocidadX17 = velocidad;
  direccionX17 = random([-1, 1]);
  velocidadY17 = velocidad;
  direccionY17 = random([-1, 1]);

  // Figura 18
  x18 = random(0, width);
  y18 = random(0, height);
  velocidadX18 = velocidad;
  direccionX18 = random([-1, 1]);
  velocidadY18 = velocidad;
  direccionY18 = random([-1, 1]);
  
  // Figura 19
  x19 = random(0, width);
  y19 = random(0, height);
  velocidadX19 = velocidad;
  direccionX19 = random([-1, 1]);
  velocidadY19 = velocidad;
  direccionY19 = random([-1, 1]);

  // Figura 20
  x20 = random(0, width);
  y20 = random(0, height);
  velocidadX20 = velocidad;
  direccionX20 = random([-1, 1]);
  velocidadY20 = velocidad;
  direccionY20 = random([-1, 1]);

  // Figura 21
  x21 = random(0, width);
  y21 = random(0, height);
  velocidadX21 = velocidad;
  direccionX21 = random([-1, 1]);
  velocidadY21 = velocidad;
  direccionY21 = random([-1, 1]);

  // Figura 22
  x22 = random(0, width);
  y22 = random(0, height);
  velocidadX22 = velocidad;
  direccionX22 = random([-1, 1]);
  velocidadY22 = velocidad;
  direccionY22 = random([-1, 1]);

  // Figura 23
  x23 = random(0, width);
  y23 = random(0, height);
  velocidadX23 = velocidad;
  direccionX23 = random([-1, 1]);
  velocidadY23 = velocidad;
  direccionY23 = random([-1, 1]);

  // Figura 24
  x24 = random(0, width);
  y24 = random(0, height);
  velocidadX24 = velocidad;
  direccionX24 = random([-1, 1]);
  velocidadY24 = velocidad;
  direccionY24 = random([-1, 1]);
  
  // Figura 25
  x25 = random(0, width);
  y25 = random(0, height);
  velocidadX25 = velocidad;
  direccionX25 = random([-1, 1]);
  velocidadY25 = velocidad;
  direccionY25 = random([-1, 1]);

  // Figura 26
  x26 = random(0, width);
  y26 = random(0, height);
  velocidadX26 = velocidad;
  direccionX26 = random([-1, 1]);
  velocidadY26 = velocidad;
  direccionY26 = random([-1, 1]);

  // Figura 27
  x27 = random(0, width);
  y27 = random(0, height);
  velocidadX27 = velocidad;
  direccionX27 = random([-1, 1]);
  velocidadY27 = velocidad;
  direccionY27 = random([-1, 1]);

  // Figura 28
  x28 = random(0, width);
  y28 = random(0, height);
  velocidadX28 = velocidad;
  direccionX28 = random([-1, 1]);
  velocidadY28 = velocidad;
  direccionY28 = random([-1, 1]);

  // Figura 29
  x29 = random(0, width);
  y29 = random(0, height);
  velocidadX29 = velocidad;
  direccionX29 = random([-1, 1]);
  velocidadY29 = velocidad;
  direccionY29 = random([-1, 1]);

  // Figura 30
  x30 = random(0, width);
  y30 = random(0, height);
  velocidadX30 = velocidad;
  direccionX30 = random([-1, 1]);
  velocidadY30 = velocidad;
  direccionY30 = random([-1, 1]);

  // Figura 31
  x31 = random(0, width);
  y31 = random(0, height);
  velocidadX31 = velocidad;
  direccionX31 = random([-1, 1]);
  velocidadY31 = velocidad;
  direccionY31 = random([-1, 1]);

  // Figura 32
  x32 = random(0, width);
  y32 = random(0, height);
  velocidadX32 = velocidad;
  direccionX32 = random([-1, 1]);
  velocidadY32 = velocidad;
  direccionY32 = random([-1, 1]);

  // Figura 33
  x33 = random(0, width);
  y33 = random(0, height);
  velocidadX33 = velocidad;
  direccionX33 = random([-1, 1]);
  velocidadY33 = velocidad;
  direccionY33 = random([-1, 1]);

  // Figura 34
  x34 = random(0, width);
  y34 = random(0, height);
  velocidadX34 = velocidad;
  direccionX34 = random([-1, 1]);
  velocidadY34 = velocidad;
  direccionY34 = random([-1, 1]);

  // Figura 35
  x35 = random(0, width);
  y35 = random(0, height);
  velocidadX35 = velocidad;
  direccionX35 = random([-1, 1]);
  velocidadY35 = velocidad;
  direccionY35 = random([-1, 1]);

  // Figura 36
  x36 = random(0, width);
  y36 = random(0, height);
  velocidadX36 = velocidad;
  direccionX36 = random([-1, 1]);
  velocidadY36 = velocidad;
  direccionY36 = random([-1, 1]);

  // Figura 37
  x37 = random(0, width);
  y37 = random(0, height);
  velocidadX37 = velocidad;
  direccionX37 = random([-1, 1]);
  velocidadY37 = velocidad;
  direccionY37 = random([-1, 1]);

  // Figura 38
  x38 = random(0, width);
  y38 = random(0, height);
  velocidadX38 = velocidad;
  direccionX38 = random([-1, 1]);
  velocidadY38 = velocidad;
  direccionY38 = random([-1, 1]);

  // Figura 39
  x39 = random(0, width);
  y39 = random(0, height);
  velocidadX39 = velocidad;
  direccionX39 = random([-1, 1]);
  velocidadY39 = velocidad;
  direccionY39 = random([-1, 1]);

  // Figura 40
  x40 = random(0, width);
  y40 = random(0, height);
  velocidadX40 = velocidad;
  direccionX40 = random([-1, 1]);
  velocidadY40 = velocidad;
  direccionY40 = random([-1, 1]);

  // Figura 41
  x41 = random(0, width);
  y41 = random(0, height);
  velocidadX41 = velocidad;
  direccionX41 = random([-1, 1]);
  velocidadY41 = velocidad;
  direccionY41 = random([-1, 1]);

  // Figura 42
  x42 = random(0, width);
  y42 = random(0, height);
  velocidadX42 = velocidad;
  direccionX42 = random([-1, 1]);
  velocidadY42 = velocidad;
  direccionY42 = random([-1, 1]);

  // Figura 43
  x43 = random(0, width);
  y43 = random(0, height);
  velocidadX43 = velocidad;
  direccionX43 = random([-1, 1]);
  velocidadY43 = velocidad;
  direccionY43 = random([-1, 1]);

  // Figura 44
  x44 = random(0, width);
  y44 = random(0, height);
  velocidadX44 = velocidad;
  direccionX44 = random([-1, 1]);
  velocidadY44 = velocidad;
  direccionY44 = random([-1, 1]);

  // Figura 45
  x45 = random(0, width);
  y45 = random(0, height);
  velocidadX45 = velocidad;
  direccionX45 = random([-1, 1]);
  velocidadY45 = velocidad;
  direccionY45 = random([-1, 1]);

  // Figura 46
  x46 = random(0, width);
  y46 = random(0, height);
  velocidadX46 = velocidad;
  direccionX46 = random([-1, 1]);
  velocidadY46 = velocidad;
  direccionY46 = random([-1, 1]);

  // Figura 47
  x47 = random(0, width);
  y47 = random(0, height);
  velocidadX47 = velocidad;
  direccionX47 = random([-1, 1]);
  velocidadY47 = velocidad;
  direccionY47 = random([-1, 1]);

  // Figura 48
  x48 = random(0, width);
  y48 = random(0, height);
  velocidadX48 = velocidad;
  direccionX48 = random([-1, 1]);
  velocidadY48 = velocidad;
  direccionY48 = random([-1, 1]);

  // Figura 49
  x49 = random(0, width);
  y49 = random(0, height);
  velocidadX49 = velocidad;
  direccionX49 = random([-1, 1]);
  velocidadY49 = velocidad;
  direccionY49 = random([-1, 1]);

  // Figura 50
  x50 = random(0, width);
  y50 = random(0, height);
  velocidadX50 = velocidad;
  direccionX50 = random([-1, 1]);
  velocidadY50 = velocidad;
  direccionY50 = random([-1, 1]);

  // Figura 51
  x51 = random(0, width);
  y51 = random(0, height);
  velocidadX51 = velocidad;
  direccionX51 = random([-1, 1]);
  velocidadY51 = velocidad;
  direccionY51 = random([-1, 1]);

  // Figura 52
  x52 = random(0, width);
  y52 = random(0, height);
  velocidadX52 = velocidad;
  direccionX52 = random([-1, 1]);
  velocidadY52 = velocidad;
  direccionY52 = random([-1, 1]);

  // Figura 53
  x53 = random(0, width);
  y53 = random(0, height);
  velocidadX53 = velocidad;
  direccionX53 = random([-1, 1]);
  velocidadY53 = velocidad;
  direccionY53 = random([-1, 1]);

  // Figura 54
  x54 = random(0, width);
  y54 = random(0, height);
  velocidadX54 = velocidad;
  direccionX54 = random([-1, 1]);
  velocidadY54 = velocidad;
  direccionY54 = random([-1, 1]);

  // Figura 55
  x55 = random(0, width);
  y55 = random(0, height);
  velocidadX55 = velocidad;
  direccionX55 = random([-1, 1]);
  velocidadY55 = velocidad;
  direccionY55 = random([-1, 1]);

  // Figura 56
  x56 = random(0, width);
  y56 = random(0, height);
  velocidadX56 = velocidad;
  direccionX56 = random([-1, 1]);
  velocidadY56 = velocidad;
  direccionY56 = random([-1, 1]);

  // Figura 57
  x57 = random(0, width);
  y57 = random(0, height);
  velocidadX57 = velocidad;
  direccionX57 = random([-1, 1]);
  velocidadY57 = velocidad;
  direccionY57 = random([-1, 1]);

  // Figura 58
  x58 = random(0, width);
  y58 = random(0, height);
  velocidadX58 = velocidad;
  direccionX58 = random([-1, 1]);
  velocidadY58 = velocidad;
  direccionY58 = random([-1, 1]);

  // Figura 59
  x59 = random(0, width);
  y59 = random(0, height);
  velocidadX59 = velocidad;
  direccionX59 = random([-1, 1]);
  velocidadY59 = velocidad;
  direccionY59 = random([-1, 1]);

  // Figura 60
  x60 = random(0, width);
  y60 = random(0, height);
  velocidadX60 = velocidad;
  direccionX60 = random([-1, 1]);
  velocidadY60 = velocidad;
  direccionY60 = random([-1, 1]);

  // Figura 61
  x61 = random(0, width);
  y61 = random(0, height);
  velocidadX61 = velocidad;
  direccionX61 = random([-1, 1]);
  velocidadY61 = velocidad;
  direccionY61 = random([-1, 1]);

  // Figura 62
  x62 = random(0, width);
  y62 = random(0, height);
  velocidadX62 = velocidad;
  direccionX62 = random([-1, 1]);
  velocidadY62 = velocidad;
  direccionY62 = random([-1, 1]);

  // Figura 63
  x63 = random(0, width);
  y63 = random(0, height);
  velocidadX63 = velocidad;
  direccionX63 = random([-1, 1]);
  velocidadY63 = velocidad;
  direccionY63 = random([-1, 1]);

  // Figura 64
  x64 = random(0, width);
  y64 = random(0, height);
  velocidadX64 = velocidad;
  direccionX64 = random([-1, 1]);
  velocidadY64 = velocidad;
  direccionY64 = random([-1, 1]);
}

function draw() {
  background(0);

  //1
  x1 += velocidadX1 * direccionX1;
  y1 += velocidadY1 * direccionY1;
  line(x1 - 30, y1 - 30, x1 - 30, y1 + 30);
  line(x1 - 30, y1 - 30, x1, y1 - 30);
  line(x1 - 30, y1 + 30, x1, y1 + 30);
  
  if (x1 - 30 < 0 || x1 + 30 > width) { direccionX1 *= -1; }
  if (y1 - 30 < 0 || y1 + 30 > height) { direccionY1 *= -1; }

  //2
  x2 += velocidadX2 * direccionX2;
  y2 += velocidadY2 * direccionY2;
  line(x2 + 30, y2 - 30, x2 + 30, y2 + 30);
  line(x2, y2 - 30, x2 + 30, y2 - 30);
  line(x2, y2 + 30, x2 + 30, y2 + 30);

  if (x2 - 30 < 0 || x2 + 30 > width) { direccionX2 *= -1; }
  if (y2 - 30 < 0 || y2 + 30 > height) { direccionY2 *= -1; }

  //3
  x3 += velocidadX3 * direccionX3;
  y3 += velocidadY3 * direccionY3;
  line(x3 - 30, y3 + 30, x3 + 30, y3 + 30);
  line(x3 - 30, y3 - 30, x3 - 30, y3 + 30);
  line(x3 + 30, y3 - 30, x3, y3 - 30);

  if (x3 - 30 < 0 || x3 + 30 > width) { direccionX3 *= -1; }
  if (y3 - 30 < 0 || y3 + 30 > height) { direccionY3 *= -1; }

  //4
  x4 += velocidadX4 * direccionX4;
  y4 += velocidadY4 * direccionY4;
  line(x4 + 30, y4 - 30, x4 - 30, y4 - 30);
  line(x4 + 30, y4 - 30, x4 + 30, y4 + 30);
  line(x4 - 30, y4 + 30, x4, y4 + 30);

  if (x4 - 30 < 0 || x4 + 30 > width) { direccionX4 *= -1; }
  if (y4 - 30 < 0 || y4 + 30 > height) { direccionY4 *= -1; }

  //5
  x5 += velocidadX5 * direccionX5;
  y5 += velocidadY5 * direccionY5;
  line(x5 - 30, y5 - 30, x5, y5 - 30);
  line(x5 - 30, y5 - 30, x5 - 30, y5 + 30);

  if (x5 - 30 < 0 || x5 + 30 > width) { direccionX5 *= -1; }
  if (y5 - 30 < 0 || y5 + 30 > height) { direccionY5 *= -1; }

  //6
  x6 += velocidadX6 * direccionX6;
  y6 += velocidadY6 * direccionY6;
  line(x6 + 30, y6 + 30, x6, y6 + 30);
  line(x6 + 30, y6 + 30, x6 + 30, y6 - 30);

  if (x6 - 30 < 0 || x6 + 30 > width) { direccionX6 *= -1; }
  if (y6 - 30 < 0 || y6 + 30 > height) { direccionY6 *= -1; }

  //7
  x7 += velocidadX7 * direccionX7;
  y7 += velocidadY7 * direccionY7;
  line(x7 - 30, y7 - 30, x7 + 30, y7 - 30);
  line(x7 + 30, y7 - 30, x7 + 30, y7 + 30);

  if (x7 - 30 < 0 || x7 + 30 > width) { direccionX7 *= -1; }
  if (y7 - 30 < 0 || y7 + 30 > height) { direccionY7 *= -1; }

  //8
  x8 += velocidadX8 * direccionX8;
  y8 += velocidadY8 * direccionY8;
  line(x8 - 30, y8 + 30, x8 + 30, y8 + 30);
  line(x8 - 30, y8 + 30, x8 - 30, y8 - 30);

  if (x8 - 30 < 0 || x8 + 30 > width) { direccionX8 *= -1; }
  if (y8 - 30 < 0 || y8 + 30 > height) { direccionY8 *= -1; }

  //9
  x9 += velocidadX9 * direccionX9;
  y9 += velocidadY9 * direccionY9;
  line(x9 - 30, y9 - 30, x9 + 30, y9 - 30);
  line(x9 + 30, y9 + 30, x9 - 30, y9 + 30);

  if (x9 - 30 < 0 || x9 + 30 > width) { direccionX9 *= -1; }
  if (y9 - 30 < 0 || y9 + 30 > height) { direccionY9 *= -1; }

  //10
  x10 += velocidadX10 * direccionX10;
  y10 += velocidadY10 * direccionY10;
  line(x10 - 30, y10 - 30, x10 - 30, y10 + 30);
  line(x10 + 30, y10 - 30, x10 + 30, y10 + 30);

  if (x10 - 30 < 0 || x10 + 30 > width) { direccionX10 *= -1; }
  if (y10 - 30 < 0 || y10 + 30 > height) { direccionY10 *= -1; }
  
  //11
  x11 += velocidadX11 * direccionX11;
  y11 += velocidadY11 * direccionY11;
  line(x11 - 30, y11 - 30, x11 + 30, y11 - 30);
  line(x11 - 30, y11 - 30, x11 - 30, y11 + 30);
  
  if (x11 - 30 < 0 || x11 + 30 > width) { direccionX11 *= -1; }
  if (y11 - 30 < 0 || y11 + 30 > height) { direccionY11 *= -1; }
  
  //12
  x12 += velocidadX12 * direccionX12;
  y12 += velocidadY12 * direccionY12;
  line(x12 + 30, y12 - 30, x12 + 30, y12 + 30);
  line(x12 - 30, y12 + 30, x12 + 30, y12 + 30);
  
  if (x12 - 30 < 0 || x12 + 30 > width) { direccionX12 *= -1; }
  if (y12 - 30 < 0 || y12 + 30 > height) { direccionY12 *= -1; }

  //13
  x13 += velocidadX13 * direccionX13;
  y13 += velocidadY13 * direccionY13;
  line(x13 - 30, y13 - 30, x13 - 30, y13 + 30);
  line(x13 - 30, y13 + 30, x13 + 30, y13 + 30);
  
  if (x13 - 30 < 0 || x13 + 30 > width) { direccionX13 *= -1; }
  if (y13 - 30 < 0 || y13 + 30 > height) { direccionY13 *= -1; }

  //14
  x14 += velocidadX14 * direccionX14;
  y14 += velocidadY14 * direccionY14;
  line(x14 - 30, y14 - 30, x14 + 30, y14 - 30);
  line(x14 + 30, y14 - 30, x14 + 30, y14 + 30);

  if (x14 - 30 < 0 || x14 + 30 > width) { direccionX14 *= -1; }
  if (y14 - 30 < 0 || y14 + 30 > height) { direccionY14 *= -1; }
  
  //15
  x15 += velocidadX15 * direccionX15;
  y15 += velocidadY15 * direccionY15;
  line(x15 - 30, y15 + 30, x15 + 30, y15 + 30);
  line(x15 - 30, y15 + 30, x15 - 30, y15 - 30);

  if (x15 - 30 < 0 || x15 + 30 > width) { direccionX15 *= -1; }
  if (y15 - 30 < 0 || y15 + 30 > height) { direccionY15 *= -1; }
  
  //16
  x16 += velocidadX16 * direccionX16;
  y16 += velocidadY16 * direccionY16;
  line(x16 + 30, y16 - 30, x16 + 30, y16 + 30);
  line(x16 + 30, y16 - 30, x16 - 30, y16 - 30);

  if (x16 - 30 < 0 || x16 + 30 > width) { direccionX16 *= -1; }
  if (y16 - 30 < 0 || y16 + 30 > height) { direccionY16 *= -1; }

  //17
  x17 += velocidadX17 * direccionX17;
  y17 += velocidadY17 * direccionY17;
  line(x17 - 30, y17 - 30, x17, y17 - 30);
  line(x17 - 30, y17 - 30, x17 - 30, y17 + 30);
  
  if (x17 - 30 < 0 || x17 + 30 > width) { direccionX17 *= -1; }
  if (y17 - 30 < 0 || y17 + 30 > height) { direccionY17 *= -1; }

  //18
  x18 += velocidadX18 * direccionX18;
  y18 += velocidadY18 * direccionY18;
  line(x18 + 30, y18 + 30, x18, y18 + 30);
  line(x18 + 30, y18 + 30, x18 + 30, y18 - 30);
  
  if (x18 - 30 < 0 || x18 + 30 > width) { direccionX18 *= -1; }
  if (y18 - 30 < 0 || y18 + 30 > height) { direccionY18 *= -1; }

  //19
  x19 += velocidadX19 * direccionX19;
  y19 += velocidadY19 * direccionY19;
  line(x19 - 30, y19 - 30, x19 + 30, y19 - 30);
  line(x19 - 30, y19 - 30, x19 - 30, y19 + 30);

  if (x19 - 30 < 0 || x19 + 30 > width) { direccionX19 *= -1; }
  if (y19 - 30 < 0 || y19 + 30 > height) { direccionY19 *= -1; }
  
  //20
  x20 += velocidadX20 * direccionX20;
  y20 += velocidadY20 * direccionY20;
  line(x20 + 30, y20 + 30, x20 - 30, y20 + 30);
  line(x20 + 30, y20 + 30, x20 + 30, y20 - 30);

  if (x20 - 30 < 0 || x20 + 30 > width) { direccionX20 *= -1; }
  if (y20 - 30 < 0 || y20 + 30 > height) { direccionY20 *= -1; }
  
  //21
  x21 += velocidadX21 * direccionX21;
  y21 += velocidadY21 * direccionY21;
  line(x21 - 30, y21 - 30, x21 + 30, y21 - 30);
  line(x21 + 30, y21 - 30, x21 + 30, y21 + 30);

  if (x21 - 30 < 0 || x21 + 30 > width) { direccionX21 *= -1; }
  if (y21 - 30 < 0 || y21 + 30 > height) { direccionY21 *= -1; }

  //22
  x22 += velocidadX22 * direccionX22;
  y22 += velocidadY22 * direccionY22;
  line(x22 - 30, y22 + 30, x22 + 30, y22 + 30);
  line(x22 - 30, y22 + 30, x22 - 30, y22 - 30);
  
  if (x22 - 30 < 0 || x22 + 30 > width) { direccionX22 *= -1; }
  if (y22 - 30 < 0 || y22 + 30 > height) { direccionY22 *= -1; }
  
  //23
  x23 += velocidadX23 * direccionX23;
  y23 += velocidadY23 * direccionY23;
  line(x23 + 30, y23 - 30, x23 + 30, y23 + 30);
  line(x23 - 30, y23 + 30, x23 + 30, y23 + 30);
  
  if (x23 - 30 < 0 || x23 + 30 > width) { direccionX23 *= -1; }
  if (y23 - 30 < 0 || y23 + 30 > height) { direccionY23 *= -1; }
  
  //24
  x24 += velocidadX24 * direccionX24;
  y24 += velocidadY24 * direccionY24;
  line(x24 - 30, y24 - 30, x24 - 30, y24 + 30);
  line(x24 - 30, y24 - 30, x24 + 30, y24 - 30);
  
  if (x24 - 30 < 0 || x24 + 30 > width) { direccionX24 *= -1; }
  if (y24 - 30 < 0 || y24 + 30 > height) { direccionY24 *= -1; }
  
  //25
  x25 += velocidadX25 * direccionX25;
  y25 += velocidadY25 * direccionY25;
  line(x25 + 30, y25 - 30, x25 + 30, y25 + 30);
  line(x25 + 30, y25 - 30, x25 - 30, y25 - 30);
  
  if (x25 - 30 < 0 || x25 + 30 > width) { direccionX25 *= -1; }
  if (y25 - 30 < 0 || y25 + 30 > height) { direccionY25 *= -1; }
  
  //26
  x26 += velocidadX26 * direccionX26;
  y26 += velocidadY26 * direccionY26;
  line(x26 - 30, y26 - 30, x26 - 30, y26 + 30);
  line(x26 + 30, y26 + 30, x26 - 30, y26 + 30);
  
  if (x26 - 30 < 0 || x26 + 30 > width) { direccionX26 *= -1; }
  if (y26 - 30 < 0 || y26 + 30 > height) { direccionY26 *= -1; }
  
  //27
  x27 += velocidadX27 * direccionX27;
  y27 += velocidadY27 * direccionY27;
  line(x27 + 30, y27 - 30, x27 - 30, y27 - 30);
  line(x27 - 30, y27 + 30, x27 + 30, y27 + 30);
  
  if (x27 - 30 < 0 || x27 + 30 > width) { direccionX27 *= -1; }
  if (y27 - 30 < 0 || y27 + 30 > height) { direccionY27 *= -1; }
  
  //28
  x28 += velocidadX28 * direccionX28;
  y28 += velocidadY28 * direccionY28;
  line(x28 - 30, y28 - 30, x28 - 30, y28 + 30);
  line(x28 + 30, y28 - 30, x28 + 30, y28 + 30);
  
  if (x28 - 30 < 0 || x28 + 30 > width) { direccionX28 *= -1; }
  if (y28 - 30 < 0 || y28 + 30 > height) { direccionY28 *= -1; }
  
  //29
  x29 += velocidadX29 * direccionX29;
  y29 += velocidadY29 * direccionY29;
  line(x29 - 30, y29 - 30, x29 - 30, y29 + 30);
  line(x29 + 30, y29 - 30, x29 + 30, y29 + 30);
  
  if (x29 - 30 < 0 || x29 + 30 > width) { direccionX29 *= -1; }
  if (y29 - 30 < 0 || y29 + 30 > height) { direccionY29 *= -1; }

  //30
  x30 += velocidadX30 * direccionX30;
  y30 += velocidadY30 * direccionY30;
  line(x30 - 30, y30 - 30, x30 + 30, y30 - 30);
  line(x30 - 30, y30 + 30, x30 + 30, y30 + 30);

  if (x30 - 30 < 0 || x30 + 30 > width) { direccionX30 *= -1; }
  if (y30 - 30 < 0 || y30 + 30 > height) { direccionY30 *= -1; }
  
  //31
  x31 += velocidadX31 * direccionX31;
  y31 += velocidadY31 * direccionY31;
  line(x31 + 30, y31 - 30, x31 - 30, y31 - 30);
  line(x31 + 30, y31 + 30, x31 + 30, y31 - 30);

  if (x31 - 30 < 0 || x31 + 30 > width) { direccionX31 *= -1; }
  if (y31 - 30 < 0 || y31 + 30 > height) { direccionY31 *= -1; }

  //32
  x32 += velocidadX32 * direccionX32;
  y32 += velocidadY32 * direccionY32;
  line(x32 - 30, y32 + 30, x32 + 30, y32 + 30);
  line(x32 - 30, y32 + 30, x32 - 30, y32 - 30);
  
  if (x32 - 30 < 0 || x32 + 30 > width) { direccionX32 *= -1; }
  if (y32 - 30 < 0 || y32 + 30 > height) { direccionY32 *= -1; }

  //33
  x33 += velocidadX33 * direccionX33;
  y33 += velocidadY33 * direccionY33;
  line(x33 - 30, y33 - 30, x33, y33 - 30);
  line(x33 - 30, y33 - 30, x33 - 30, y33 + 30);
  
  if (x33 - 30 < 0 || x33 + 30 > width) { direccionX33 *= -1; }
  if (y33 - 30 < 0 || y33 + 30 > height) { direccionY33 *= -1; }

  //34
  x34 += velocidadX34 * direccionX34;
  y34 += velocidadY34 * direccionY34;
  line(x34 + 30, y34 + 30, x34, y34 + 30);
  line(x34 + 30, y34 + 30, x34 + 30, y34 - 30);
  
  if (x34 - 30 < 0 || x34 + 30 > width) { direccionX34 *= -1; }
  if (y34 - 30 < 0 || y34 + 30 > height) { direccionY34 *= -1; }

  //35
  x35 += velocidadX35 * direccionX35;
  y35 += velocidadY35 * direccionY35;
  line(x35 - 30, y35 - 30, x35 + 30, y35 - 30);
  line(x35 + 30, y35 - 30, x35 + 30, y35 + 30);

  if (x35 - 30 < 0 || x35 + 30 > width) { direccionX35 *= -1; }
  if (y35 - 30 < 0 || y35 + 30 > height) { direccionY35 *= -1; }
  
  //36
  x36 += velocidadX36 * direccionX36;
  y36 += velocidadY36 * direccionY36;
  line(x36 - 30, y36 + 30, x36 + 30, y36 + 30);
  line(x36 - 30, y36 + 30, x36 - 30, y36 - 30);
  
  if (x36 - 30 < 0 || x36 + 30 > width) { direccionX36 *= -1; }
  if (y36 - 30 < 0 || y36 + 30 > height) { direccionY36 *= -1; }

  //37
  x37 += velocidadX37 * direccionX37;
  y37 += velocidadY37 * direccionY37;
  line(x37 + 30, y37 - 30, x37 + 30, y37 + 30);
  line(x37 - 30, y37 + 30, x37 + 30, y37 + 30);

  if (x37 - 30 < 0 || x37 + 30 > width) { direccionX37 *= -1; }
  if (y37 - 30 < 0 || y37 + 30 > height) { direccionY37 *= -1; }

  //38
  x38 += velocidadX38 * direccionX38;
  y38 += velocidadY38 * direccionY38;
  line(x38 - 30, y38 - 30, x38 - 30, y38 + 30);
  line(x38 - 30, y38 - 30, x38 + 30, y38 - 30);
  
  if (x38 - 30 < 0 || x38 + 30 > width) { direccionX38 *= -1; }
  if (y38 - 30 < 0 || y38 + 30 > height) { direccionY38 *= -1; }

  //39
  x39 += velocidadX39 * direccionX39;
  y39 += velocidadY39 * direccionY39;
  line(x39 - 30, y39 - 30, x39 + 30, y39 - 30);
  line(x39 + 30, y39 + 30, x39 - 30, y39 + 30);

  if (x39 - 30 < 0 || x39 + 30 > width) { direccionX39 *= -1; }
  if (y39 - 30 < 0 || y39 + 30 > height) { direccionY39 *= -1; }
  
  //40
  x40 += velocidadX40 * direccionX40;
  y40 += velocidadY40 * direccionY40;
  line(x40 - 30, y40 - 30, x40 - 30, y40 + 30);
  line(x40 + 30, y40 - 30, x40 + 30, y40 + 30);
  
  if (x40 - 30 < 0 || x40 + 30 > width) { direccionX40 *= -1; }
  if (y40 - 30 < 0 || y40 + 30 > height) { direccionY40 *= -1; }

  //41
  x41 += velocidadX41 * direccionX41;
  y41 += velocidadY41 * direccionY41;
  line(x41 - 30, y41 - 30, x41, y41 - 30);
  line(x41 - 30, y41 - 30, x41 - 30, y41 + 30);

  if (x41 - 30 < 0 || x41 + 30 > width) { direccionX41 *= -1; }
  if (y41 - 30 < 0 || y41 + 30 > height) { direccionY41 *= -1; }

  //42
  x42 += velocidadX42 * direccionX42;
  y42 += velocidadY42 * direccionY42;
  line(x42 + 30, y42 + 30, x42, y42 + 30);
  line(x42 + 30, y42 + 30, x42 + 30, y42 - 30);

  if (x42 - 30 < 0 || x42 + 30 > width) { direccionX42 *= -1; }
  if (y42 - 30 < 0 || y42 + 30 > height) { direccionY42 *= -1; }

  //43
  x43 += velocidadX43 * direccionX43;
  y43 += velocidadY43 * direccionY43;
  line(x43 - 30, y43 - 30, x43 + 30, y43 - 30);
  line(x43 + 30, y43 - 30, x43 + 30, y43 + 30);

  if (x43 - 30 < 0 || x43 + 30 > width) { direccionX43 *= -1; }
  if (y43 - 30 < 0 || y43 + 30 > height) { direccionY43 *= -1; }

  //44
  x44 += velocidadX44 * direccionX44;
  y44 += velocidadY44 * direccionY44;
  line(x44 - 30, y44 + 30, x44 + 30, y44 + 30);
  line(x44 - 30, y44 + 30, x44 - 30, y44 - 30);

  if (x44 - 30 < 0 || x44 + 30 > width) { direccionX44 *= -1; }
  if (y44 - 30 < 0 || y44 + 30 > height) { direccionY44 *= -1; }

  //45
  x45 += velocidadX45 * direccionX45;
  y45 += velocidadY45 * direccionY45;
  line(x45 + 30, y45 - 30, x45 + 30, y45 + 30);
  line(x45 - 30, y45 + 30, x45 + 30, y45 + 30);

  if (x45 - 30 < 0 || x45 + 30 > width) { direccionX45 *= -1; }
  if (y45 - 30 < 0 || y45 + 30 > height) { direccionY45 *= -1; }

  //46
  x46 += velocidadX46 * direccionX46;
  y46 += velocidadY46 * direccionY46;
  line(x46 - 30, y46 - 30, x46 - 30, y46 + 30);
  line(x46 - 30, y46 - 30, x46 + 30, y46 - 30);

  if (x46 - 30 < 0 || x46 + 30 > width) { direccionX46 *= -1; }
  if (y46 - 30 < 0 || y46 + 30 > height) { direccionY46 *= -1; }

  //47
  x47 += velocidadX47 * direccionX47;
  y47 += velocidadY47 * direccionY47;
  line(x47 - 30, y47 - 30, x47 + 30, y47 - 30);
  line(x47 + 30, y47 + 30, x47 - 30, y47 + 30);

  if (x47 - 30 < 0 || x47 + 30 > width) { direccionX47 *= -1; }
  if (y47 - 30 < 0 || y47 + 30 > height) { direccionY47 *= -1; }
  
  //48
  x48 += velocidadX48 * direccionX48;
  y48 += velocidadY48 * direccionY48;
  line(x48 - 30, y48 - 30, x48 - 30, y48 + 30);
  line(x48 + 30, y48 - 30, x48 + 30, y48 + 30);
  
  if (x48 - 30 < 0 || x48 + 30 > width) { direccionX48 *= -1; }
  if (y48 - 30 < 0 || y48 + 30 > height) { direccionY48 *= -1; }
  
  //49
  x49 += velocidadX49 * direccionX49;
  y49 += velocidadY49 * direccionY49;
  line(x49 + 30, y49 - 30, x49 + 30, y49 + 30);
  line(x49 + 30, y49 - 30, x49 - 30, y49 - 30);
  
  if (x49 - 30 < 0 || x49 + 30 > width) { direccionX49 *= -1; }
  if (y49 - 30 < 0 || y49 + 30 > height) { direccionY49 *= -1; }

  //50
  x50 += velocidadX50 * direccionX50;
  y50 += velocidadY50 * direccionY50;
  line(x50 - 30, y50 - 30, x50 - 30, y50 + 30);
  line(x50 + 30, y50 + 30, x50 - 30, y50 + 30);
  
  if (x50 - 30 < 0 || x50 + 30 > width) { direccionX50 *= -1; }
  if (y50 - 30 < 0 || y50 + 30 > height) { direccionY50 *= -1; }

  //51
  x51 += velocidadX51 * direccionX51;
  y51 += velocidadY51 * direccionY51;
  line(x51 + 30, y51 - 30, x51 - 30, y51 - 30);
  line(x51 - 30, y51 + 30, x51 + 30, y51 + 30);
  
  if (x51 - 30 < 0 || x51 + 30 > width) { direccionX51 *= -1; }
  if (y51 - 30 < 0 || y51 + 30 > height) { direccionY51 *= -1; }
  
  //52
  x52 += velocidadX52 * direccionX52;
  y52 += velocidadY52 * direccionY52;
  line(x52 - 30, y52 - 30, x52 - 30, y52 + 30);
  line(x52 + 30, y52 - 30, x52 + 30, y52 + 30);

  if (x52 - 30 < 0 || x52 + 30 > width) { direccionX52 *= -1; }
  if (y52 - 30 < 0 || y52 + 30 > height) { direccionY52 *= -1; }

  //53
  x53 += velocidadX53 * direccionX53;
  y53 += velocidadY53 * direccionY53;
  line(x53 - 30, y53 - 30, x53 - 30, y53 + 30);
  line(x53 - 30, y53 + 30, x53 + 30, y53 + 30);
  
  if (x53 - 30 < 0 || x53 + 30 > width) { direccionX53 *= -1; }
  if (y53 - 30 < 0 || y53 + 30 > height) { direccionY53 *= -1; }

  //54
  x54 += velocidadX54 * direccionX54;
  y54 += velocidadY54 * direccionY54;
  line(x54 - 30, y54 - 30, x54 + 30, y54 - 30);
  line(x54 + 30, y54 - 30, x54 + 30, y54 + 30);

  if (x54 - 30 < 0 || x54 + 30 > width) { direccionX54 *= -1; }
  if (y54 - 30 < 0 || y54 + 30 > height) { direccionY54 *= -1; }
  
  //55
  x55 += velocidadX55 * direccionX55;
  y55 += velocidadY55 * direccionY55;
  line(x55 - 30, y55 + 30, x55 + 30, y55 + 30);
  line(x55 - 30, y55 + 30, x55 - 30, y55 - 30);

  if (x55 - 30 < 0 || x55 + 30 > width) { direccionX55 *= -1; }
  if (y55 - 30 < 0 || y55 + 30 > height) { direccionY55 *= -1; }
  
  //56
  x56 += velocidadX56 * direccionX56;
  y56 += velocidadY56 * direccionY56;
  line(x56 + 30, y56 - 30, x56 + 30, y56 + 30);
  line(x56 + 30, y56 - 30, x56 - 30, y56 - 30);

  if (x56 - 30 < 0 || x56 + 30 > width) { direccionX56 *= -1; }
  if (y56 - 30 < 0 || y56 + 30 > height) { direccionY56 *= -1; }

  //57
  x57 += velocidadX57 * direccionX57;
  y57 += velocidadY57 * direccionY57;
  line(x57 - 30, y57 - 30, x57, y57 - 30);
  line(x57 - 30, y57 - 30, x57 - 30, y57 + 30);

  if (x57 - 30 < 0 || x57 + 30 > width) { direccionX57 *= -1; }
  if (y57 - 30 < 0 || y57 + 30 > height) { direccionY57 *= -1; }
  
  //58
  x58 += velocidadX58 * direccionX58;
  y58 += velocidadY58 * direccionY58;
  line(x58 + 30, y58 + 30, x58, y58 + 30);
  line(x58 + 30, y58 + 30, x58 + 30, y58 - 30);
  
  if (x58 - 30 < 0 || x58 + 30 > width) { direccionX58 *= -1; }
  if (y58 - 30 < 0 || y58 + 30 > height) { direccionY58 *= -1; }

  //59
  x59 += velocidadX59 * direccionX59;
  y59 += velocidadY59 * direccionY59;
  line(x59 - 30, y59 - 30, x59 + 30, y59 - 30);
  line(x59 + 30, y59 - 30, x59 + 30, y59 + 30);

  if (x59 - 30 < 0 || x59 + 30 > width) { direccionX59 *= -1; }
  if (y59 - 30 < 0 || y59 + 30 > height) { direccionY59 *= -1; }

  //60
  x60 += velocidadX60 * direccionX60;
  y60 += velocidadY60 * direccionY60;
  line(x60 - 30, y60 + 30, x60 + 30, y60 + 30);
  line(x60 - 30, y60 + 30, x60 - 30, y60 - 30);

  if (x60 - 30 < 0 || x60 + 30 > width) { direccionX60 *= -1; }
  if (y60 - 30 < 0 || y60 + 30 > height) { direccionY60 *= -1; }

  //61
  x61 += velocidadX61 * direccionX61;
  y61 += velocidadY61 * direccionY61;
  line(x61 + 30, y61 - 30, x61 + 30, y61 + 30);
  line(x61 - 30, y61 + 30, x61 + 30, y61 + 30);

  if (x61 - 30 < 0 || x61 + 30 > width) { direccionX61 *= -1; }
  if (y61 - 30 < 0 || y61 + 30 > height) { direccionY61 *= -1; }
  
  //62
  x62 += velocidadX62 * direccionX62;
  y62 += velocidadY62 * direccionY62;
  line(x62 - 30, y62 - 30, x62 - 30, y62 + 30);
  line(x62 - 30, y62 - 30, x62 + 30, y62 - 30);

  if (x62 - 30 < 0 || x62 + 30 > width) { direccionX62 *= -1; }
  if (y62 - 30 < 0 || y62 + 30 > height) { direccionY62 *= -1; }

  //63
  x63 += velocidadX63 * direccionX63;
  y63 += velocidadY63 * direccionY63;
  line(x63 - 30, y63 - 30, x63 + 30, y63 - 30);
  line(x63 + 30, y63 + 30, x63 - 30, y63 + 30);

  if (x63 - 30 < 0 || x63 + 30 > width) { direccionX63 *= -1; }
  if (y63 - 30 < 0 || y63 + 30 > height) { direccionY63 *= -1; }
  
  //64
  x64 += velocidadX64 * direccionX64;
  y64 += velocidadY64 * direccionY64;
  line(x64 - 30, y64 - 30, x64 - 30, y64 + 30);
  line(x64 + 30, y64 - 30, x64 + 30, y64 + 30);
  
  if (x64 - 30 < 0 || x64 + 30 > width) { direccionX64 *= -1; }
  if (y64 - 30 < 0 || y64 + 30 > height) { direccionY64 *= -1; }
}

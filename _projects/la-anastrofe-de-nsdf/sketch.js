let galeria;


let opacidad = 0;

let pasarPaginas = 0;

let movimientoXNSDF;  
let movimientoYNSDF;  
  
let movimientoXSolar;
let movimientoYSolar;
  
let NSDF1opaca1;
let comunismosolar;
let audioParte1;
let bomba1;
let estatua1;
let stalingrado1;
let stalingrado2;
let buda;
let delfin2;
let humano1;
let humano3;
let planeta2;
let soldado;



let fuente4;

let aleteoPrueba = 0;
let bandera1 = true;

let rotacion = 0;
let bandera2 = true;


let misiles;
let frase;
let angel;



function preload() {
  NSDF1opaca1 = loadImage ('img/NSDF1opaca1.png');
  comunismosolar = loadImage ('img/solarcomunismo2.png');
  bomba1 = loadImage ('img/bomba1.jpeg');
  estatua1 = loadImage ('img/estatua1b.jpeg');
  stalingrado = loadImage ('img/stalingrado2.jpeg');
  buda = loadImage ('img/buda1.jpeg');
  luces = loadImage ('img/luces1.jpeg');
     delfin2 = loadImage ('img/delfin2.jpeg');
 humano2= loadImage ('img/humano2.jpeg');
 humano3= loadImage ('img/humano3.jpeg');
 planeta2= loadImage ('img/planeta2.jpeg');
 soldado= loadImage ('img/soldado.jpeg');
  
  
  audioParte1 = loadSound ('audio/parte1.mp3');
  audioParte2 = loadSound ('audio/parte2.mp3');
  audioParte3 = loadSound ('audio/parte3.mp3');
  misiles = loadSound ('audio/misiles.mp3');
  frase = loadSound ('audio/frase.mp3')
  angel = loadSound ('audio/angel.mp3');
  
  //FUENTES
  
      fuente4 = loadFont('fuentes/fuente4.otf');

  
}



function setup() {
  let canvas = createCanvas(700, 1150);
  canvas.parent('div-sketch');
  crearGaleria ();  

  
 
}

function draw() {
    
  background(0, 20);
  frameRate (30);
  
  
  
  
//__________________TEXTO E IMAGENES GALERIA_____________________________

  
  fill (255,255, 255);
  
   textAlign(CENTER);
  
 

  if (pasarPaginas < galeria.length) {pasajeGaleria ()
  }  else if (pasarPaginas == 14) {intercambioActivo = true; if (intercambioActivo === true) {intercambio ()}}
  
  
   
  
  //____FINALES POSIBLES DEL INTERCAMBIO____________________________________
  
   if (respuesta1 === true) {respuestaBuena ();                              
}
  else if (respuesta2 === true) {respuestaMala ();                              
}
  else if (respuesta3 === true) {respuestaMala2 ();                             
}
  
  
  
  //_____LLAMADO DE BORRADORES___
  
    
  
  
  if (pasarPaginas == 10 || pasarPaginas ==  11 || pasarPaginas == 14 || pasarPaginas == 15) {
    borrador(); }  

  
  if (pasarPaginas == 12 || pasarPaginas == 13 ) {borradorChico(); }
  
  
     
  
  
  
}

let opacidadBorrador = 255;
let opacidadBorradorChico = 255;



function borrador () { 
  
                          push();
                              fill(0, opacidadBorrador);
                              strokeWeight (0);
                              rectMode(CENTER); 
                              rect (350, 600, 2000, 2000);
                            pop ();
  
     
           if (opacidadBorrador > 0) {

        opacidadBorrador -= 2;} 
      
     
}

function borradorChico () { 
                          push();
                              fill(0, opacidadBorradorChico);
                              strokeWeight (0);
                              rectMode(CENTER); 
                              rect (350, 1080, 600, 70);
                            pop ();
  
     
           if (opacidadBorradorChico > 0) {

        opacidadBorradorChico -= 2;} 
  
    
  
  
  
}

// SE MUESTRAN LAS POSIBLES RESPUESTAS_________________________

let intercambioActivo = false;

let respuesta1 = false;
let respuesta2 = false;
let respuesta3 = false;

function intercambio () {
  
  
    push ();
    textSize (25);
    text("La Diosa me había enviado en una misión, pero yo me debatía entre varios pensamientos...", 150, 150, 400, 300);  
  text("Debes elegir alguna de las tres respuestas", 150, 900, 400, 300); 
  pop ();
  push ();
  textSize (20)
    text("Con gusto aceptaré el llamado del Futuro y dedicaré mi vida a su Anástrofe", 50, 500, 200, 300);  
    text("No pondré a la Humanidad en el camino a su perdición", 260, 500, 200, 300);  
    text("Esto sólo es un sueño, una pesadilla de la que pronto despertaré", 470, 500, 200, 300);  
     pop ();
  
  
  if (mouseX >= 50 && mouseX < 250 && mouseY <=800 && mouseY >= 500) {
    
    push();
    fill (255, 5);
    stroke (255)
    strokeWeight (2);
    
    rect (50, 480, 200, 140, 5);
    pop ();
    
  } else if (mouseX >= 260 && mouseX < 470 && mouseY <=800 && mouseY >= 500) {
    
  push();
    fill (255, 5);
    stroke (255)
    strokeWeight (2)   
    rect (260, 480, 200, 140, 5);
  pop ();
    
  } else if (mouseX >= 470 && mouseX < 730 && mouseY <=800 && mouseY >= 500) {
    
  push();
    fill (255, 5);
    stroke (255)
    strokeWeight (2)   
    rect (470, 480, 200, 140, 5);
  pop ();
    
  }
  
  
  
}

//SELECCION DE LAS POSIBLES RESPUESTAS______________________________

function mousePressed () {

if (mouseX >= 50 && mouseX < 250 && mouseY <=800 && mouseY >= 500 && intercambioActivo === true) {
      opacidadBorrador = 255;
      respuesta1 = true;

    pasarPaginas ++

  intercambioActivo = false;
  audioParte3.setVolume(0, 7);  
  setTimeout( () => audioParte3.stop(), 40000)
   
  frase.setVolume (0);
  frase.loop ();
  frase.setVolume (0.3, 15);
  
  angel.play ();
  
     
    
    
  } else if (mouseX >= 260 && mouseX < 470 && mouseY <=800 && mouseY >= 500 && intercambioActivo === true ) {
    
    

        opacidadBorrador = 255;

    pasarPaginas ++
    
   intercambioActivo = false;
          
    setTimeout (() => respuesta2 = true, 10000)
    audioParte3.setVolume(0, 7);   
    setTimeout (() =>   audioParte2.play(), 10000)
    setTimeout( () => audioParte3.stop(), 40000)




    
  } else if (mouseX >= 470 && mouseX < 730 && mouseY <=800 && mouseY >= 500  && intercambioActivo === true) {
       
        opacidadBorrador = 255;
          respuesta3 = true;
    pasarPaginas ++

    intercambioActivo = false;

         
    audioParte3.setVolume(0, 40);   
    misiles.play();
    misiles.setVolume(0, 40);   



    
    
  }
  
}

function crearGaleria () {
  
  
galeria = [
  {texto: 'La Anástrofe de Nuestra Señora del Futuro', imagen:comunismosolar, tecla: 'Apreta "A" para empezar', tamanoTexto:40, posicionXtexto: 150, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 800, escala: 0.70, opacidad:255, anchoTexto: 400},
  {texto: 'No me mostraron exactamente cuándo, ni a que Humanidad le correspondería tal destino, pero la visión empezó como cualquier otro apocalipsis: con fuego lloviendo desde el cielo. Las naciones e imperios de la Tierra habían decidido, por fin, saltar la fina línea que los había excluido durante milenios del catálogo de las extinciones terráqueas. Las causas de este holocausto no me fueron develadas, pero no me costó mucho concebirlas, como creo que tampoco les costará a ustedes esfuerzo alguno, el imaginarlas, si observan con detenimiento a su alrededor.', imagen:bomba1, tecla: 'Apreta "A" para continuar', tamanoTexto: 24, posicionXtexto: 70, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 1070, escala: 0.70, opacidad:80, anchoTexto: 550},
  {texto: 'Horrorizado, pensé que esta era un relato sobre el fin, pero para mi sorpresa, muchos habían sobrevivido. En las sombras de la civilización, las viejas ideas renacieron, los antiguos mitos, las brillantes utopías y los resplandecientes fantasmas, tiempo atrás olvidados, cobraron vida nuevamente. Las porciones supervivientes de la Humanidad empezaron a organizarse de manera colectivista. De las cenizas surgió una civilización basada en la noción del gasto.', imagen:estatua1, tecla: 'Apreta "A" para continuar', tamanoTexto:24, posicionXtexto: 105, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 1030, escala: 0.70, opacidad:40, anchoTexto: 500},
   {texto: 'No había producción ni acumulación en el sentido que nosotros lo entendemos hoy. Estos humanos vivían bajo el principio de la dilapidación y del intercambio simbólico, no existía la idea del trabajo. Concebían que el bien último estaba en llegar al límite y siempre poner en juego al propio ser. Esta humanidad brillaba, entre la abundancia y el juego de los escombros, por su temeridad suicida y su éxtasis orgiástico.', imagen:humano2, tecla: 'Apreta "A" para continuar', tamanoTexto:24, posicionXtexto: 95, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 1000, escala: 0.70, opacidad:80, anchoTexto: 500},
  {texto: 'Sin embargo, estos seres libres, a nuestros ojos post-morales, no se encontraban solos. Algunos fragmentos del Capital habían sobrevivido a la autodestrucción en la forma de trabajo muerto independizado y en una clase dominante que había resistido el holocausto exiliando sus consciencias a las profundidades subterráneas de la Red. Una nueva batalla, contra el capital fijo automatizado aliado con los restos virtuales de la ceocracia de la pre-guerra, comenzó inmediatamente.', imagen:soldado, tecla: 'Apreta "A" para continuar', tamanoTexto:24, posicionXtexto: 80, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 1000, escala: 0.70, opacidad:40, anchoTexto: 550},
  {texto: 'Los Humanos lucharon valientemente entre los cadáveres aplanados de las aniquiladas megalópolis del mundo. A pesar de su entrega, la victoria se encontraba muy lejos. Esta vez, parecía que la extinción estaba más cerca que nunca y que el virus del Tecnocapital iba a engullirse finalmente a la Gaia Extática en un último bostezo.', imagen:stalingrado, tecla: 'Apreta "A" para continuar', tamanoTexto:24, posicionXtexto: 100, posicionYtexto: 130, posicionXimagen: 510, posicionYimagen: 950, escala: 0.70, opacidad:60, anchoTexto: 500},
  {texto: 'Aunque la historia del Homo Sapiens parecía estar por acabar, en una conjunción aparentemente fortuita, a esta especie en vilo se le reveló la clave de la victoria. Bajo la superficie de los mares y océanos del planeta, los delfines habían vivido durante milenios en una cultura y civilización que prescindía de los objetos materiales. Nunca habían concebido los peligros del dinero ni del fetichismo mercantil. Su vida era puro Don. A pesar de esta vida excelsa, a nuestros ojos contemporáneos, el holocausto humano fue tal que ninguna especie del planeta quedo exenta de sus efectos cataclísmicos.', imagen:humano3, tecla: 'Apreta "A" para continuar', tamanoTexto:24, posicionXtexto: 45, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 1030, escala: 0.70, opacidad:80, anchoTexto: 620},
  {texto: 'Ante la situación de emergencia, los cetáceos, organizados en asambleas oceánicas, determinaron que para triunfar en su lucha por la existencia era imperioso el contactar con los terrestres y ayudarlos en su lucha contra el Capital. En un magnánimo acto de solidaridad interespecie, develaron a la Humanidad, mediante proyecciones astrales, los secretos del Tono de los Mares. Fue así que, por primera vez en la historia natural de los mamíferos, las dos especies inteligentes del planeta pudieron hablar y cantar en la misma lengua.', imagen:delfin2, tecla: 'Apreta "A" para continuar', tamanoTexto:24, posicionXtexto: 45, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 985, escala: 0.70, opacidad:40, anchoTexto: 620},
   {texto: 'A partir de este punto la reconstrucción de mi visión se me hace casi imposible. De algún modo, al establecer comunicación entre ellas, la Palabra misma, como un virus, se propagó y unificó a las dos especies en una conciencia global. No esta ya en mí poder comprender lo que habían alcanzado aquellas inteligencias y narrárselo a ustedes. Sin embargo, puedo decirles que esa forma de conciencia colectiva, no implicaba una pérdida de la individualidad, sino que ambos tipos de conciencia coexistían sin contradecirse.', imagen:buda, tecla: 'Apreta "A" para continuar', tamanoTexto:24, posicionXtexto: 45, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 950, escala: 0.70, opacidad:40, anchoTexto: 600},
   {texto: 'Las percepciones y pensamientos individuales estaban disponibles para la totalidad de los miembros de las dos especies, y ambas humanidades podían tomar decisiones como un todo unificado. Sin embargo, cada ser, a pesar de ese tráfico infinito de sensibilidades e intensidades, seguía en posesión de una singularidad que lo diferenciaba del resto. Esta conciencia planetaria, propagándose a través del mismísimo campo magnético y llegando al centro telúrico incandescente de la Tierra, absorbió y neutralizó al Capital, tal como un anticuerpo actuá contra un virus.', imagen:planeta2, tecla: 'Apreta "A" para continuar', tamanoTexto:24, posicionXtexto: 50, posicionYtexto: 100, posicionXimagen: 510, posicionYimagen: 1030, escala: 0.70, opacidad:40, anchoTexto: 600},
  {texto: 'Fue luego de esta visión que la ví a ELLA', imagen:estatua1, tamanoTexto:25, posicionXtexto: 100, posicionYtexto:500, posicionXimagen: 1, posicionYimagen: 1,  tecla: '', escala: 0, opacidad:40, anchoTexto: 500},
  {texto: 'Soy Vuestra Señora del Futuro, la que cabalga sobre los ardientes vientos del Sahel', imagen:NSDF1opaca1, tamanoTexto:22, posicionXtexto: 80, posicionYtexto:1080, posicionXimagen: 540, posicionYimagen: 1050,  tecla: '', escala: 0.65, opacidad:40, anchoTexto: 550},
  {texto: 'Debes predicar este mensaje para que todos los seres de tu planeta atiendan a la Llamada', imagen:NSDF1opaca1, tamanoTexto:22, posicionXtexto: 80, posicionYtexto:1080, posicionXimagen: 540, posicionYimagen: 1050,  tecla: '', escala: 0.65, opacidad:40, anchoTexto: 550},
  {texto: '¿Aceptas dedicar tu vida a esta Visión que te he regalado?', imagen:NSDF1opaca1, tamanoTexto:22, posicionXtexto: 130, posicionYtexto:1080, posicionXimagen: 540, posicionYimagen: 1050,  tecla: '', escala: 0.65, opacidad:40, anchoTexto: 450},
   ];
  
}

//__________________-PASAR PAGINAS Y AUDIO_____________________________




function keyPressed () {
   
  if (key === 'a' && pasarPaginas<10) {
    
    
      pasarPaginas++; 
    
          if (pasarPaginas === 1) {audioParte1.play ()}
          if (pasarPaginas===10) {
            
            audioParte1.setVolume(0, 5)
            audioParte3.setVolume(1, 10)
            audioParte3.play();
            setTimeout( () => audioParte1.stop(), 40000)
            presentacionNSDF ();
          }   

  } else if (key === 'a' && pasarPaginas>9 && pasarPaginas < 14)  {
    
    fill (0, 0, 0, 255);
    rect (0, 0, 900, 80); 
    
          
  
  } 
   
  
}

let timer1 = null;


function presentacionNSDF () {
    if (timer1 === null) { 
        
        timer1 = setInterval( () => {
            
            pasarPaginas++;
            if (pasarPaginas == 11) {opacidadBorrador = 255}
          
            if (pasarPaginas == 13) {opacidadBorradorChico = 255}


            if (pasarPaginas >= 14) {
              
    
            if (pasarPaginas == 14) {opacidadBorrador = 255}

                clearInterval(timer1); 
                
                timer1 = null;         
             
               

            }

        }, 10000); 
    }
}

let movimientoImagen = 0;



function pasajeGaleria () {
  
  if (pasarPaginas >= 1 && pasarPaginas < 14) {   movimientoImagen = random (1, 5);} else {movimientoImagen = 0} 
  
  
    push ();
    imageMode (CENTER);
    
          if (pasarPaginas <9) {tint (255, galeria[pasarPaginas].opacidad)
          } else { opacidad+=2;   tint (255, opacidad)}
    
    scale (galeria[pasarPaginas].escala);
    image(galeria[pasarPaginas].imagen, galeria[pasarPaginas].posicionXimagen-movimientoImagen,             galeria[pasarPaginas].posicionYimagen-movimientoImagen);
    
            if (pasarPaginas > 10) {

            movimientoXSolar = 1360;
            movimientoYSolar = 380;


            push();
            scale(0.40);
            image(comunismosolar, movimientoXSolar-movimientoImagen, movimientoYSolar-movimientoImagen);
            pop();


            }
    pop();
    textFont (fuente4);
    textSize (galeria[pasarPaginas].tamanoTexto);
    text(galeria[pasarPaginas].texto, galeria[pasarPaginas].posicionXtexto,                   galeria[pasarPaginas].posicionYtexto, galeria[pasarPaginas].anchoTexto);
    push();
    textSize (30);
    text(galeria[pasarPaginas].tecla, 200, 1000, 300, 300);
    pop(); 
  

  
  
}


//_______________________________RESPUESTA BUENA______________________________________


function respuestaBuena () {

    //MAQUINA DE ALETEO
    if (aleteoPrueba <= 255 && bandera1 === true) 
      {aleteoPrueba += 20} 
    else if (aleteoPrueba >= 255 && bandera1 === true) 
      {bandera1 = false}
    else if (aleteoPrueba > 0 && bandera1 === false)
      {aleteoPrueba -= 20}
    else if (aleteoPrueba == 0 && bandera1 === false) {bandera1 = true}
   
   
    
    //MAQUINA DE ROTACION
    if (rotacion <= 360 && bandera2 === true) 
      {rotacion += 1} 
    else if (rotacion >= 360 && bandera2 === true) 
      {bandera2 = false}
    else if (rotacion > 0 && bandera2 === false)
      {rotacion -= 1}
    else if (rotacion == 0 && bandera2 === false) {bandera2 = true}
    
   
//_________________________ALA ARRIBA____________________________________________
push();
translate (350, 600);
rotate (radians(220));
   rotate (radians (rotacion))    

for (var i = 0; i < 30; i += 1) { 
    
  
  push();
  noFill ();
  stroke (255, 255, 255, 10);
  strokeWeight (random (1, 15));
  bezier(0+i, 0+i, random (420, 150), random (100, 150)+aleteoPrueba, random (300, 400)-aleteoPrueba, random   (20, 100)+aleteoPrueba, random (200, 240)+i+aleteoPrueba, random (400, 450)+i-aleteoPrueba*2);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100)+aleteoPrueba, random   (300, 400)-aleteoPrueba, random (200, 240)+i-aleteoPrueba, random (400, 450)+i+aleteoPrueba/2);//abajo
  pop();
      
   }
pop ();    
  
//_________________________ALA ABAJO____________________________________________
    
    push();
translate (350, 600);
rotate (radians(40));
   rotate (radians (rotacion))    

for (var i = 0; i < 30; i += 1) { 
    
  
  push();
  noFill ();
  stroke (255, 255, 255, 10);
  strokeWeight (random (1, 15));
  bezier(0+i, 0+i, random (420, 150), random (100, 150)+aleteoPrueba, random (300, 400)-aleteoPrueba, random   (20, 100)+aleteoPrueba, random (200, 240)+i+aleteoPrueba, random (400, 450)+i-aleteoPrueba*2);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100)+aleteoPrueba, random   (300, 400)-aleteoPrueba, random (200, 240)+i-aleteoPrueba, random (400, 450)+i+aleteoPrueba/2);//abajo
  pop();
      
   }
pop (); 
    
    
//_________________________ALA DERECHA____________________________________________
    
    push();
translate (350, 600);
rotate (radians(-40));
   rotate (radians (rotacion))    

for (var i = 0; i < 30; i += 1) { 
    
  
  push();
  noFill ();
  stroke (255, 255, 255, 10);
  strokeWeight (random (1, 15));
  bezier(0+i, 0+i, random (420, 150), random (100, 150)+aleteoPrueba, random (300, 400)-aleteoPrueba, random   (20, 100)+aleteoPrueba, random (200, 240)+i+aleteoPrueba, random (400, 450)+i-aleteoPrueba*2);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100)+aleteoPrueba, random   (300, 400)-aleteoPrueba, random (200, 240)+i-aleteoPrueba, random (400, 450)+i+aleteoPrueba/2);//abajo
  pop();
      
   }
pop (); 
    
    
//_________________________ALA IZQUIERDA____________________________________________
    
     push();
translate (350, 600);
rotate (radians(150));
   rotate (radians (rotacion))    

for (var i = 0; i < 30; i += 1) { 
    
  
  push();
  noFill ();
  stroke (255, 255, 255, 10);
  strokeWeight (random (1, 15));
  bezier(0+i, 0+i, random (420, 150), random (100, 150)+aleteoPrueba, random (300, 400)-aleteoPrueba, random   (20, 100)+aleteoPrueba, random (200, 240)+i+aleteoPrueba, random (400, 450)+i-aleteoPrueba*2);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100)+aleteoPrueba, random   (300, 400)-aleteoPrueba, random (200, 240)+i-aleteoPrueba, random (400, 450)+i+aleteoPrueba/2);//abajo
  pop();
      
   }
pop (); 
    
  
 //_________________REINICIO____________________
    
      setTimeout( () => location.reload(), 40000)  
    
    
}


//______________________________RESPUESTA MALA 1_________________________________________

function respuestaMala () {
  
   movimientoXNSDF = random (0, 20);  
    movimientoYNSDF = random (-100, 100);  
  
    movimientoXSolar = random (1050, 1120);
    movimientoYSolar = random (30, 70);
  
     background(0, 10);
      frameRate (10);
  
    push();

    scale (random (0.65, 0.67));
    image (NSDF1opaca1,movimientoXNSDF, movimientoYNSDF);

  
    pop ();
  
    push ();
  
    tint (255, 230)
    scale (0.25);
    image (comunismosolar, movimientoXSolar, movimientoYSolar);

  
    pop (); 
    
    //__________________TRAZOS BEZIER ALAS FUERZAS_____________________________
    
    ondaX = random (350, 360);
    ondaY = random (500, 600);
  
    let trazoBezier = random (2, 10);
  

          for (i = 0; i < 1200; i += 20) {

          noFill ();
          stroke (255, 255, 255, 30);
          strokeWeight(trazoBezier);
          bezier (100, 0, ondaX, ondaY, ondaX, ondaY, 0, random (0, 1200)-i);
          bezier (600, 0, ondaX, ondaY, ondaX, ondaY, 700, random (0, 1200)-i);

           }
    
    //__________________TEXTO_____________________________

      
    stroke (255, 255, 255, 255);
    strokeWeight (1);
    textAlign(CENTER)
  
  
    text ("Nuestra Señora del Futuro, la que cabalga sobre los ardientes vientos del Sahel", random (-100,           700), random (1050, 1200), 520, 200);
    
    
    //_________________REINICIO____________________
    
      setTimeout( () => location.reload(), 40000)
  
  
}

let opacidadRespuestaMala2 = 255; 
let opacidadBorrador2 = 0;


//______________________________RESPUESTA MALA 2_________________________________________


function respuestaMala2 () {
  
   
push();  
textSize (22);
text ('Despierta amor, ven a mirar las extrañas luces en el cielo', 150, 200, 400, 300);
pop ();
  
push();
rectMode (CENTER);
fill (0, opacidadBorrador2+=0.3);
strokeWeight (0);
rect (300, 200, 500, 100, )
pop();  
  
tint (255, opacidadRespuestaMala2-=0.3)
scale (0.70)
imageMode (CENTER);
image (luces, 510, 800)
  
  
//_________________REINICIO____________________
    
      setTimeout( () => location.reload(), 40000)
  
  

}


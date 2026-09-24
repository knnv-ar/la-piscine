function setup( ){
  createCanvas(512,512); 
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

}


function draw() { 
  background(255);
  let Numero =int( random(0, 100));

   
  /*al principio use un unico "random" pero tras ver que solo me daba una linea digonal y de puntos, le agregue 2 y con los nombres que tienen para identificar cual es cual. sin embargo, solo consigo puntos, y quiero lineas
  despues de preguntarle a chatgpt porque solo me aparecian puntos resulto que era porque tenia dos random, cuando necesito 4 para poder generar un numero para cada X e Y, y como solo habia un X y un Y, los X1 y X2 recibian el mismo numero
*/
  if (Numero % 2 == 0){
  var C1= random(0, 512);
      var C2= random(512,0 );
     var T1= random(0, 512);
     var T2= random(512, 0);
  strokeWeight(5);
  ellipse(C1, C2, T1, T2);
} 
  else if (Numero % 2 != 0) {
 for (var Li= 2; Li < 512; Li += 1  ){
  var X1= random(0, 512);
  var Y1 = random (512, 0);
   var X2= random (0, 512);
   var Y2= random (512, 0);
  strokeWeight(1);
  line(X1, Y1, X2, Y2);
 }
 }
  /*me termine dando cuenta que el codigo solo reproducia el "else if" por lo que le pregunte a chat gpt cual seria la razon de esto. random siempre genera numeros decimales, por lo que resultaba imposible que se ejecutara el primer "if" asi que chat gpt me dio la opcion e usar "int" que seria como una orden de dar siemre numeros enteros, que es lo que necesito. aunque ns si esta permitio usarlo */
}
 




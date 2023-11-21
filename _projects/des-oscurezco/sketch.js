//Título de la Obra: "Desoscurezco"

//Año:2023

//Autora:Malena Souto

//Este trabajo esta realizado con referentes de artistas mujeres ya que me llamó mucho la atención 
//la simetria que manejan Lilian Schwartz y especialmente para este trabajo Vera Molnar.
//Me gusta mucho el arte abstracto y poder plasmarlo a lo digital y futuramente poder animarlo a su vez ,
//es otra manera de realizar y apreciar el arte.

//Obra de referencia de Vera Molnar : https://images.auctionet.com/thumbs/medium_item_2299375_816fa29b8f.jpg


//Para realizar este trabajo utilicé formas 2D en su mayoría...Van a observar que utilizo el numero 5
 //al final de cada código ,para que quede "simétrico" y a su vez al visualizarlo nos da una sensación
//de profundidad en la escala de grises haciendo referencia al titulo de la obra ; "desoscurezco".Utilizo estos
//métodos porque es lo que más me gusta destacar de algunas obras de arte abstracto;la simetría e infinidad 
//de figuras.
//"La conquista de la obiquidad" de Valery me hizo cuestionarme en como valoro o aplico el arte , 
//ya que para su época según el artista habia limitación al momento de apreciarlo porque uno tenía que visitar
//lugares específicamente donde se haga arte para escucharlo o verlo y para hacerlo también y eso justamente hacía 
//que al momento de realizar arte o visualizarlo, se disfrutara más(obviamente exceptuando la subjetividad de cada
//ser).En mi caso siento que como tengo mucha accesibilidad para ver arte por una cuestión tecnológica o mismo
//para realizarlo siento que procastino en disfrutarlo (haciendo,viendo o escuchando) y me replantee mi relación 
//con el arte , para poder darle un lugar más importante y no procastinarlo más.Es por eso que este texto lo
// relaciono con este trabajo , el poder realizarlo progresivamente, visualizarlo y a su vez que el receptor 
//lo visualice y tenga la libertad de poder recibirlo desde su subjetividad del arte, y así también disfrutar ambos
//de este proceso artístico;siendo una misma la autora propia hasta llegar a un resultado final que hace que cada progreso 
//del mismo ,desde el inicio hasta el final lo disfrute más y no lo vea justamente como
// "un trabajo" si no , "una práctica artistica"(Brea).//
//

function setup() {
let canvas = createCanvas(500, 500);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  background(mouseX, mouseY);

  fill(265);
  rect(5, 10, 5);

  fill(255);
  rect(15, 25, 15);

  fill(245);
  rect(25, 35, 25);

  fill(235);
  rect(35, 45, 35);

  fill(225);
  rect(45, 55, 45);

  fill(215);
  rect(55, 65, 55);

  fill(205);
  rect(65, 75, 65);

  fill(195);
  rect(75, 85, 75);

  fill(185);
  rect(85, 95, 85);

  fill(175);
  rect(95, 105, 95);

  fill(165);
  rect(105, 115, 105);

  fill(155);
  rect(115, 125, 115);

  fill(145);
  rect(125, 135, 125);

  fill(135);
  rect(135, 145, 135);

  fill(125);
  rect(145, 155, 145);

  fill(115);
  rect(155, 165, 155);

  fill(105);
  rect(165, 175, 165);

  fill(95);
  rect(175, 185, 175);

  fill(85);
  rect(185, 195, 185);

  fill(75);
  rect(195, 205, 195);

  fill(65);
  rect(205, 215, 205);

  fill(55);
  rect(215, 225, 215);

  fill(45);
  rect(225, 235, 225);

  fill(35);
  rect(235, 245, 235);

  //rects detro de rects

  fill(45);
  rect(245, 255, 105);

  fill(55);
  rect(255, 265, 95);

  fill(65);
  rect(265, 275, 85);

  fill(75);
  rect(275, 285, 75);

  fill(85);
  rect(285, 295, 65);

  fill(95);
  rect(295, 305, 55);

  fill(105);
  rect(305, 315, 45);

  //rects dentro de rects

  fill(25);
  rect(305, 305, 135);

  fill(15);
  rect(315, 315, 125);

  fill(5);
  rect(325, 325, 115);

  fill(5);
  rect(355, 365, 105);

  fill(15);
  rect(365, 365, 95);

  fill(5);
  rect(295, 305, 55);

  fill(105);
  rect(305, 315, 45);
}

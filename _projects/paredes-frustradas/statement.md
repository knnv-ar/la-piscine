---
layout: post
title: "Paredes frustradas"
date: 2022-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Pedro Pontoriero Rojas_, 2022.

**Título de la obra**

La nueva totalidad del humano, su nueva praxis vital, podemos decir que se ha traducido en esta época contemporánea dentro de la naturaleza virtual: un “todo” moderno generador de racionalidades. En una modernidad donde predomina la estética generalizada, donde hemos roto nuestros propios medios de recepción para dar lugar a la institucionalización de la vanguardia, aquello que Peter Burger llama Neo-Vanguardia, donde ya no se es artista sino productor de una narrativa hecha a medida según las exigencias de la sociedad de consumo, aquí, lo único que podemos intentar es traer de nuevo el carácter político y critico que puede lograr una obra de arte, aquella obra que alguna vez fue organizadora de experiencias individuales. Si en algún lugar debemos atacar, quebrar e infringir, yo creo que deberá ser desmantelando esta nueva naturaleza y su nuevo lenguaje: la virtualidad.  


**Desarrollo técnico, estético y conceptual**

A nivel técnico, mi obra no presenta mayores complejidades. La obra se trata de un lienzo de 512x512 pixeles. Se puede observar dentro del código de esta imagen generativa la pluralidad de elementos quad() en diferentes valores de grises asignados y sin ningún tipo de contornos sobre estas figuras primitivas. Todo esto sobre un background() negro. Al mismo tiempo, existe una estructura condicional que manipula un texto definido previamente en la declaración de variables que da lugar a una ubicación constantemente oscilante culpa del atributo random(), durante el tiempo que nosotres no decidamos hacer click sobre el canvas. En caso de que lo hagamos, se cumple la condición y por lo tanto se activara el atributo blendMode() que conquistara todos los fragmentos de la obra para alterar su modo de fusión hasta que se acaba de imprimir fotogramas sobre el lienzo. Un caso que se da debido a la manera que está constituido el condicional if – else, es que al primer click que sostengamos sobre la obra podremos ver el código completa de esta, pero no volveremos a poder en los próximos porque quedara activado el modo de fusión. 

Haremos el detalle técnico a un lado (no se preocupen, no se va a ningún lado) para explicar la característica estética de la obra. Creo poder resumir mi obra a nivel visual en el montaje de 3 elementos. La espacialidad representada por el suelo y paredes negras, la silla que implora un efecto de shock, y el código java script mismo de la obra imprimiendo incesantemente sobre el lienzo. No podría decir que hay una inspiración estética en los artistas pioneros de imagen generativa ya que desde lo conceptual la obra imita o inspira o intenta acercarse más a la producción de una obra antiartística. 

Este sinceramiento da el pie para descubrir cual creo es mi desarrollo conceptual de la obra: 

Parto de la base de que Burger nos explica en “la obra de arte vanguardista” como el movimiento vanguardista nace de la rebelión contra la institución del arte. Aquí, Burger busca explicarnos como a nivel alegórico la obra que entra dentro de los parámetros de la institución es el concepto de “Arte orgánico”: una categoría de obra que basa su estructuralismo en lo sintagmático, o séase, en la interpretación a nivel objetivo de materia viva, la expresión de un discurso con finalidad. La técnica artística del arte orgánico lo único que logrará será recubrir los elementos de una obra para darle un aspecto de naturalidad que no le permita a la obra lucirse fuera de la totalidad del mundo racional como lo conocemos.  

El lienzo ahora es digital. Mi espacio lo defino yo. Acá es donde reside nuestro arte hoy. Lo natural se traduce por un nuevo lenguaje logico-matematico que imita todo expresión que nosotros le indiquemos objetivamente. Hemos dado a luz una nueva totalidad, una nueva naturaleza, donde el campo de visión es tan amplio que hay poco lugar a las subjetividades. Umberto Eco habla en su libro “Obra Abierta” del lenguaje como base de cualquier otro sistema de símbolos, como la fase primaria y esencial: “el lenguaje es realmente el fundamento mismo de la cultura, relacionados con el lenguaje, todos los demás sistemas de símbolos son accesorios o derivados”. Hoy, la programación es nuestro lenguaje primigenio, y si todo lo que hoy podemos expresar naturalmente depende de nuestro previo conocimiento de este lenguaje, entonces no volveremos a ver una obra inorgánica jamás, porque nuestro sistema de creencias y racionalidades tiene tan poca restricción que nada puede ser traer de vuelta a la vanguardia. Por eso es que pienso que la evidencia del código como uso estético de la obra es apenas una pequeña búsqueda de resquebrajar el proceso de producción de la obra, invirtiendo sus facetas y fragmentos, evidenciando lo que Burger desprecia de la obra orgánica que es intento de disimular el artificio de la obra, para permitirme darle la mano a Eco en que cada obra no es más que un artefacto que se posa sobre el lenguaje. Brea me dice: “el que quiera presentarse a sí mismo como otra cosa que coro repetidor de un academicismo prefijado, que se invente un estribillo menos complaciente que el de la expresión antitética. Fin del juego para la herencia Duchamp”, pero como yo sé que como buen vanguardista solo me está provocando. Pero también sé que por mucho que se intente entender el proceso, voy a terminar rompiéndolo. 

¿Dónde está la ruptura de la tradición? Involucro ahora a mi silla. No una silla cualquiera, mi silla. Mi proceso de producción, mi propio lenguaje, mis propios límites, mis propias paredes, donde intento apreciar mi propio universo subjetivo e individual parte de un todo más grande como menciona Eco: “En todo acento de poeta, en cualquier criatura de su fantasía, están todo el humano destino, todas las esperanzas, todas las ilusiones, los dolores y las alegrías, las grandezas y las miserias humanas, el drama entero de lo real, que deviene y crece perpetuamente sobre sí mismo, sufriendo y gozando”.Si Burger dice que el modo de recepción de la obra inorgánica debe basarse en el shock de lo enigmático o sorpresivo de los elementos de una obra, a esta altura siento que almuerzo en mi propia silla eléctrica, y en la boca sabor a nada.  

De eso quiero que trate “Paredes Frustradas”, pero en el medio me frustré.  



Referentes artísticos: movimiento ready-made, René Magritte, lenguaje JavaScript. 

**Bibliografía**

BURGER, Peter. (1974). _"La obra de arte vanguardista"_

BREA, José Luis. (2008). _"Redefinición de las practicas artisticas"_

ECO , Umberto. (1962). _"Obra abierta"_
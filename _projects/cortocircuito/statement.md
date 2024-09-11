---
layout: post
title: "Cortocircuito"
date: 2024-09-10
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Ángel Arellano Torrez_, 2024.

**Cortocircuito**

Esta obra consiste en una animación abstracta de dos figuras conectadas mediante una curva con relleno titilante, que van dejando rastros sobre un fondo negro.
Al presionar la tecla "Enter" el grosor de las figuras empieza a cambiar dependiendo de la posición del mouse en el eje X. Una vez conforme con el grosor, el usuario puede conservar el cambio apretando “Enter” de nuevo.
Al mantener apretado el click izquierdo se generan líneas que van formando el dibujo de un rombo.

**Desarrollo técnico, estético y conceptual**

En la obra se generan dos figuras principales mediante curvas de Bézier, cuyos puntos de control cambian en función de un ángulo que varía continuamente, junto con una curva conectora con puntos de anclaje que la conectan a cada una de las figuras principales, y puntos de control que son aleatorios.

Me inspiré en el movimiento que interpreto al ver las obras de Ben F. Laposky y de Herbert W. Franke, en los que manipulan transmisiones electrónicas a través de un osciloscopio y graban los patrones abstractos para obtener imágenes de patrones abstractos. Por lo que, según la definición de José Luis Brea, entrarían en la categoría de Arte electrónico, y a diferencia de mi reinterpretación digital, son analógicas.

Me interesó como trabajaban con el rastro de las transmisiones y las imágenes interesantes en las que resultaba el recorrido visual de las señales. En base a la información sobre cómo sus obras fueron creadas, quise darle a la obra un efecto “titilante” que remita a las variaciones de luz de la pantalla del osciloscopio. Dicho efecto está logrado mediante variaciones limitadas de valores aleatorios de la escala de grises.

El grosor de las figuras principales puede ser modificado por el usuario, presionando la tecla “Enter” se habilita la variación de grosor, tomando como referencia el punto medio del canvas, si el cursor está a la izquierda el grosor disminuirá y si está a la derecha aumentará.

Además, al mantener apretado el click izquierdo se generará un dibujo compuesto por líneas dibujadas con un punto de inicio en una posición horizontal aleatoria y en el medio vertical de la pantalla, y un punto final en el medio horizontal de la pantalla, pero en una posición vertical aleatoria.

Incluso si se hace un solo click rápido en la obra se puede empezar a ver que las líneas que aparecen tienen una relación en cuanto a donde están posicionadas, pero su aparición dependerá del usuario. De esta forma se propone una colaboración entre autor y usuario que desdibuja las fronteras entre interacción, autoría y producción.

“No existen más los "artistas", como tal. Tan sólo hay productores, gente que produce. Tampoco hay propiamente "autores", cualquier idea de autoría ha quedado desbordada por la lógica de circulación de las ideas en las sociedades contemporáneas.”

La interactividad de la pieza le permite al usuario tomar decisiones sobre la obra, dándole la oportunidad de reconocerse también como “productor” de la obra, o dejar que la obra lo “produzca”. Por otro lado, este también puede negarse, dejando la obra tal como está.

“El artista como productor interviene, cada vez más, en el tiempo real del dominio de la experiencia, no en el del tiempo diferido de la representación.“

Se invita al usuario a cuestionar si interactuar con la obra lo hace sentir como “artista”, como “productor”, tal vez como “colaborador”, o si simplemente siente que solo siguió las instrucciones dadas; pero también se invita a cuestionar su respuesta.


**Bibliografía**

BREA, José Luis. (2002). “Breve (y desordenado) antiglosario –o diccionario de tópicos- sobre el arte electrónico” en La era postmedia.

BREA, José Luis. (2008). “Redefinición de las prácticas artísticas (s. 21)” en El tercer umbral.

IDIS. Ben Laposky. https://proyectoidis.org/ben-laposky/

ATARIARCHIVES.ORG. BEN F. LAPOSKY OSCILLONS: ELECTRONIC ABSTRACTIONS https://www.atariarchives.org/artist/sec6.php

V&A. Analog-Grafik P1 (Pendular Oscillogram) https://collections.vam.ac.uk/item/O188318/analog-grafik-p1-pendular-oscillogram-print-franke-herbert-w/
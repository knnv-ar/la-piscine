---
layout: post
title: "La Carrera"
date: 2025-18-11
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---


<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_César Ramírez_, 2025.

**La Carrera**

La obra propone un sistema generativo tridimensional donde una malla poligonal en constante mutación se despliega en el centro de la escena. Cada figura existe solo por unos segundos antes de ser reemplazada por una nueva, mientras que una versión “capturada” aparece simultáneamente en la esquina superior izquierda, funcionando como réplica diferida. Este mecanismo produce una tensión temporal: la figura principal se transforma más rápido que su propia reproducción, generando una relación inestable entre original y copia.

La pieza escenifica la carrera entre obra y reproducción que plantea César Aira, donde ambas entidades se persiguen, se superponen y, en ocasiones, parecen volverse indistinguibles. La obra principal nunca se consolida como un objeto definitivo; su réplica tampoco es un registro fiel, sino otra instancia generada a partir del mismo algoritmo. La percepción del espectador oscila entre ambas, sin que pueda establecer con claridad cuál es la obra y cuál la reproducción.


**Desarrollo técnico, estético y conceptual**

La obra se desarrolla en p5.js utilizando WEBGL para generar un sistema tridimensional basado en la creación aleatoria de mallas poligonales. Técnicamente, el código produce un conjunto de vértices distribuidos sobre una esfera y los conecta mediante triángulos que conforman una figura en constante mutación. Cada cinco segundos se genera una nueva malla, lo que establece un ritmo de transformación regular pero impredecible. Paralelamente, el sistema produce cada tres segundos una réplica en un buffer gráfico independiente. Esta réplica no es una fotografía, sino una reconstrucción autónoma del mismo algoritmo, que reproduce la figura bajo idénticas condiciones de iluminación, posición y rotación. La coexistencia simultánea de estas dos escenas —la principal y la del buffer— introduce dos temporalidades diferentes dentro de un mismo dispositivo visual.

En términos estéticos, la obra se sitúa dentro del arte generativo, donde las formas emergen de procesos algorítmicos más que de decisiones compositivas tradicionales. El carácter translúcido de los polígonos, la rotación continua y la monocromía fría producen una estética que oscila entre lo geométrico y lo espectral. Las figuras nunca llegan a consolidarse: aparecen, se transforman y desaparecen antes de fijar una identidad estable. La pequeña réplica ubicada en la esquina superior izquierda funciona como un eco visual, una presencia secundaria que a veces parece imitar y otras veces anticipar a la figura central. Esta desjerarquización espacial colabora en desestabilizar la noción de “original”.

Conceptualmente, la obra se construye a partir de las ideas que César Aira desarrolla sobre la relación entre obra y reproducción en el arte contemporáneo. Aira afirma que toda obra lleva implícita su reproducción y que, en la contemporaneidad, se ha entablado una carrera entre ambas. La pieza materializa esa carrera mediante el desfase temporal: la obra principal muta cada cinco segundos, mientras que su reproducción lo hace cada tres. La copia, así, se vuelve más dinámica que el original, lo persigue y en ocasiones lo adelanta. No documenta, sino que produce. Esta tensión hace que ambas instancias —obra y réplica— terminen por confundirse, encarnando la idea de una reproducción que se vuelve obra en sí misma, o de un arte sin obra fija. La pieza propone así un sistema donde la diferencia entre original y copia deja de ser relevante, dando lugar a un flujo de variaciones continuas que solo existen en su devenir.


**Bibliografía**

AIRE, César. (2010). _"Sobre el arte contemporaneo"_ Editorial Grijalbo-Mondadori.


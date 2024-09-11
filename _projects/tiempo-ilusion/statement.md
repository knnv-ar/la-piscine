---
layout: post
title: "Tiempo Ilusión"
date: 2024-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Lucas Milton Dario Burgos_, 2024.

**Tiempo Ilusion**

 Es una pieza de carácter digital la cual está compuesta por un patrón de líneas blancas y negras yuxtapuestas en dos diferentes variables, rectas y curvas. Esta obra puede ser modificada mediante diferentes interacciones previamente establecidas, las cuales generan en la imagen, mediante el desplazamiento de las líneas, la impresión de movimiento, movimiento que irá variando según la interacción elegida por el usuario.


**Desarrollo técnico, estético y conceptual**

La obra comienza con una idea principal, en la investigación de las obras de Vera Molnar me encontré con “Perspective inversée 2” (1957-07), una instalación que fue presentada como un cuadro mural de 4.5 m x 43 m. en Frac Lorraine (Metz, Francia). Esta obra consta de un patrón continuo de líneas blancas y negras y su modificación en ritmo a lo largo de todo el lienzo dadas las diferencias en tamaño, como inclinación de las líneas. Perspectiva invertida 2, sumerge al visitante en una pesadilla óptica, donde, dentro de las franjas blancas y negras, puntos grises fingen aparecer y desaparecer. Al moverse, las paredes se vuelven móviles, fluctuantes, los puntos de referencia se desvanecen.

“Tiempo Ilusión” comenzó con una idea borrosa y sin una dirección clara. Inicialmente, probé mezclar círculos generados aleatoriamente, pero descarté esta opción por falta de fundamento. Luego, decidí enfocar el proyecto desde una base más sólida, realizando una investigación detallada para definir con claridad su propósito.

“Tiempo Ilusión” toma la idea de variantes y así también las diferentes narrativas que se van a ir sumando en las distintas instancias de experiencia con la obra a través del tiempo. “La utilización de la imagen técnica y la imagen-movimiento, en su capacidad de expandirse en un tiempo-interno de relato, multiplica las posibilidades de generación de narrativas”. (Brea, 2008). Cómo uno como usuario puede ser intérprete, y al mismo tiempo, modificador activo de la obra ante la disponibilidad de manipulación que esta ofrece, con la intención de ir re-descubriendo y formando una conexión aún más personal con la pieza. “... hay productores, sí, pero también ellos (nosotros) mismos son cierta forma de ‘productos’.”(Brea, 2008)

Mientras que Molnar discute variantes relacionadas con la escala de una obra y cómo su significado y libertad pueden cambiar según el medio a través del cual se transmite, en mi caso decidí aplicar variantes basadas en el tiempo en lugar de modificar la escala. Esto permitió explorar el impacto de la velocidad y el movimiento sobre la percepción del patrón en lugar de alterar su tamaño o formato.

El código dibuja un conjunto de líneas verticales a lo largo de la pantalla. Cada línea tiene su propio punto de partida en el lienzo. Con el tiempo, estas líneas se mueven horizontalmente. A medida que se mueven, el código asegura que, cuando una línea alcanza el borde derecho de la pantalla, vuelva a aparecer desde el borde izquierdo. Generando la ilusión de que el patrón de líneas se desplaza continuamente. La velocidad de este movimiento puede ajustarse, lo que cambia la forma en que el patrón se ve y se siente.

A bajas velocidades, el movimiento de las líneas es claro y perceptible. Sin embargo, a velocidades altas, las líneas se desplazan tan rápido que el cambio de posición se distorsiona, generando diferentes ilusiones de movimiento.
 
A lo largo de la experiencia con la pieza, podemos ajustar la velocidad a la que las líneas se desplazan por el lienzo. Al modificar la velocidad en las funciones establecidas, observamos cómo las líneas adquieren movimiento, aceleran, desaceleran e incluso parecen retroceder en dirección opuesta.

Click derecho: Establece la velocidad a 2.
Espacio ( ): Establece la velocidad a 541. Acelera el movimiento.
Tecla 'i': Ajusta la velocidad a 543. Invierte el movimiento del fondo.
Tecla 'r': Establece una velocidad extremadamente alta de 35784651. Acelera el fondo, “ralentiza” la figura.
Tecla '0': Detiene el movimiento al ajustar la velocidad a 0.
Con estos controles, los usuarios pueden experimentar cómo diferentes velocidades afectan el patrón y la percepción del movimiento en la obra.

**Bibliografía**

- BREA, José Luis. (2002). “Breve (y desordenado) antiglosario –o diccionario de tópicos- sobre el arte electrónico” en La era postmedia. 
- BREA, José Luis. (2008). “Redefinición de las prácticas artísticas (s. 21)” en El tercer umbral. 
- Miss Cinnamon. (2009). Article sur la pâtisserie [Blog post].
http://miss-cinnamon.over-blog.com/article-33370857.html
-Frac Lorraine. (2009). Vera Molnar : PERSPECTIVES ET VARIATIONS  [PDF]. https://www.fraclorraine.org/ancien-site/media/pdf/Presse_Molnar_FR.pdf

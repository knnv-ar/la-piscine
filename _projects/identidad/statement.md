---
layout: post
title: "Identidad"
date: 2024-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Vera Pallavicini_, 2024.

**Identidad**

Cada día nos convertimos en una nueva versión de nosotros mismos. Nos adaptamos, aprendemos, cuestionamos nuestras creencias y reinventamos nuestra identidad. Este trabajo surge como un intento propio de explorar y comprender este proceso por el que, creería, nos ha tocado atravesar a todos. Al igual que el espectador, esta producción se encuentra en constante cambio: no tiene un final, ni adopta una forma concreta. Inspirada "Oscillons" de Ben Laposky, comparte algunos de sus aspectos más característicos, como las líneas en movimiento, la variedad y superposición de trazos, y la generación de diseños abstractos y similares entre sí. Su obra consiste en una serie de fotografías de larga exposición a una pantalla que proyecta ondas electrónicas, manipuladas a través de un osciloscopio. Lo que capturó mi atención fueron las infinitas posibilidades de generación, creando formas que, si bien son parecidas, rara vez se repiten de manera exacta.

Este trabajo invita al espectador a una reflexión propia. El concepto de transformación no se limita a la identidad, sino que también se extiende al terreno del arte y, me atrevería a decir, a todas las cosas que forman parte de nuestra vida cotidiana.

**Desarrollo técnico, estético y conceptual**

Todo comienza a partir de una línea. O, podríamos decir también, a partir de la unión entre dos puntos. Una línea que se encuentra inmersa en una estructura repetitiva, que se modifica con el tiempo y va dejando un trazado. Pero al fin y al cabo, sigue siendo esencialmente la misma línea.

El trabajo inicia con la creación de dos coordenadas en un lienzo, con una posición específica en el espacio. Para determinar su ubicación, se toma como referencia inicial un punto creado a partir de ruido de perlin, un algoritmo que permite trabajar con valores pseudoaleatorios, pero que siempre se encuentran cercanos entre sí. Esto se diferencia de una generación random, que produce valores sin relación alguna. Al unir estos puntos entre sí, se genera una línea. 

Con cada iteración, la línea pierde opacidad de manera gradual, hasta desvanecerse casi por completo. Una vez que llega a este punto, se borra el dibujo anterior y se crea una nueva imagen, que parte desde la última línea trazada previamente, pero con mayor intensidad. Este bucle interminable, refleja la identidad cambiante de la línea. Una vez que se agota, decide empezar un nuevo camino, siempre partiendo desde lo que alguna vez fue. Así como la línea se recrea y transforma con cada ciclo, esta transformación también se ve reflejada en la práctica artística del creador, que cada vez que produce un nuevo trabajo, se está produciendo también a sí mismo. Según Brea, _"El propio trabajo, la actividad que lo concreta, es en realidad el que nos produce. Quizás incluso podríamos decir que nuestro trabajo (el intelectual, el inmaterial, el trabajo simbólico) tiene que ver básicamente con la producción de gente, como nosotros mismos. No preexistimos (nadie preexiste) en punto alguno a esa producción. La cuestión de la identidad egregia del autor o su condición es una cuestión definitivamente trasnochada"_.

En conclusión, la intención de esta obra es traspasar los límites de la técnica utilizada y generar algún tipo de reflexión. Por otra parte, en palabras de Brea, _"Del computer art puede con certeza decirse que ha sido ya abandonado -o incluso que nunca ha producido trabajo de real interés- toda vez que los territorios de la imagen de síntesis y el arte de programación que le fueron propios han revelado total impotencia para aportar hallazgos reales a la tradición de la autocrítica inmanente que caracteriza el desarrollo del arte del siglo xx."_. A partir de esta obra, se busca precisamente lo contrario: abordar la autocrítica inmanente, que la obra pueda transformarse y reflexionar críticamente acerca de ella misma.


**Bibliografía**

BREA, José Luis. (2002). _“Breve -y desordenado- anti glosario-o diccionario de tópicos-sobre el arte electrónico”_ en _La era postmedia. Acción comunicativa, prácticas (post)artísticas y dispositivos neomediales. Salamanca: CASA Editorial_.

BREA, José Luis. (2008). _"Redefinición de las prácticas artísticas s21"_ en El tercer umbral. Estatuto de las prácticas artísticas en la era del capitalismo cultural. Murcia: CENDEAC.

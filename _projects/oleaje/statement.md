---
layout: post
title: "Oleaje"
date: 2025-11-15
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Bernardini Centrone Macarena_, 2025.

**Oleaje**
Oleaje es una obra inspirada en el mar, el oleaje son las olas del mar moviéndose todo el tiempo. su forma de moverse y el sonido que genera crea una paz haciendo que la persona esté completamente pleta en su mundo cuando alguien se estresa busca varias formas de sacarse el estrés, y una de ellas es escuchando el sonido de la naturaleza en este caso el del mar, el hermoso océano donde viven muchas criaturas en ella un lugar donde podes perderte en tus pensamientos gracias a su ritmo y sus sonidos que te hipnotiza. que te permite relajarte al momento de ir al agua para disfrutar y sacarte el estrés acumulado.


**Desarrollo técnico, estético y conceptual**
El desarrollo técnico de Oleaje se basa en la construcción de un sistema de líneas que simulan el movimiento fluido del mar mediante funciones matemáticas simples, principalmente ondas senoidales. El código genera un arreglo de líneas, y cada una de ellas está formada por una serie de puntos distribuidos a lo largo de un eje. En cada cuadro, la posición de esos puntos se actualiza aplicando funciones seno y coseno que varían con el tiempo, lo que produce una oscilación continua, similar al avance y retroceso de las olas.

Cada línea tiene un desfase propio, lo que permite que no se muevan todas de forma idéntica. Este pequeño corrimiento genera la sensación de profundidad y de oleaje real: mientras una línea sube, la que está al lado puede estar bajando. Además, el código incrementa un valor de desplazamiento temporal en cada frame, lo que permite que el movimiento nunca se detenga y que las curvas parecen deslizarse suavemente hacia adelante.

 El color también está programado desde el código: se utilizan variaciones dentro de una misma gama para crear una transición sutil que evoca los tonos del agua sin necesidad de representar el mar de forma literal.
Desde lo estético, el uso de líneas orgánicas, curvas y cambiantes construye una imagen abstracta que remite directamente a la descripción inicial de la obra: un espacio que fluye, que se mueve sin pausa, que invita a contemplar y relajarse. No es una ilustración del mar, sino su comportamiento traducido a un sistema algorítmico. La repetición de formas y la suavidad en sus desplazamientos generan una atmósfera hipnótica, como mirar las olas por un largo rato.

Conceptualmente, Oleaje se sostiene en la idea de que el código tiene la capacidad de producir mundos, no solo de representarlos. Como plantea Inke Arns, el acto de programar puede entenderse como performativo: escribir el algoritmo es generar el movimiento mismo. Las ondas no existen antes del código; nacen cuando se ejecuta. Esta lógica se articula con la mirada de Christiane Fricke sobre los nuevos medios, entendidos como espacios donde lo digital crea nuevas naturalezas, experiencias que no imitan la realidad sino que la reinventan desde la abstracción.

 A su vez, la variación constante del movimiento, que nunca es idéntico entre una ejecución y otra, dialoga con la idea de César Aira sobre el arte contemporáneo como un espacio abierto a lo imprevisible. Oleaje nunca se repite: cada corrimiento en la función seno genera un mar distinto, como si el propio código respirara. Así, la matemática se vuelve emoción, y el movimiento algorítmico se convierte en una experiencia sensible que refleja el espíritu del mar descrito al inicio.

**Bibliografía**

Arns, Inke (2005). Código: el acto de habla performativo. En Media Art Net.

Fricke, Christiane (1999). Nuevos medios: arte en el umbral de lo digital. Múnich: Prestel.

Aira, César (2013). Sobre el arte contemporáneo. Buenos Aires: Random House Mondadori.

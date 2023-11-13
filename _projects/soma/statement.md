---
layout: post
title: "SOMA"
date: 2022-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

Herrera, Sol, 2023.

*SOMA*

Breve descripción.

La obra “SOMA” está inspirada en las imágenes generadas por Ben F. Laposky, específicamente en “oscillon 7”. El título deviene de la experiencia corporal, la toma de conciencia y la conexión con las experiencias físicas del cuerpo. 
La obra es percibida y no solo por nuestras funciones sensoriales sino también emparentadas con el sentido que cada uno le puede dar e interpretar con su razonamiento y construcción. Es decir que dependerá de la matriz cultural donde opere1 y tendrá una repercusión tanto social como psicológica. Aquí me detengo para hacer referencia a “Lo que se crea no son tanto obras como experiencias” enuncia Nathalie Heinich en “La obra más allá del objeto”, es decir que implica la participación activa de diversos actores y contextos.
Mi relación con la naturaleza y los organismos me producen como contemplador, generando una fuerte inspiración en los crecimientos orgánicos, Considerando así esta obra como un espejo del placer que encuentro en la observación contemplativa y la reproducción.

*Desarrollo técnico, estético y conceptual*

En el aspecto técnico, el código de la obra utiliza como principal función noise() para generar valores pseudoaleatorios basados en el valor actual de xoff y yoff.esto genera un movimiento orgánico controlado.  Estos valores se multiplican por el ancho (width) y alto (height) del lienzo respectivamente, lo que hace que los valore se ajusten a los límites del lienzo y finalmente, se dibuja una elipse en las coordenadas (nX, nY) utilizando la función ellipse(). Esto genera la visualización de la elipse alargada que progresivamente ilustra una estela en cada frame sobre el background que no esta actulizandose.
La obra en cada actualización será siempre distinta, ya que es generada por medio de números pseudoaleatorios que utiliza la función noise().  


*Bibliografía*

- HEINICH, Nathalie. (2014, 2017). “La obra más allá del objeto”
1 - MCLUHAN, Marshall. (1964, 1997). “El medio es el mensaje”
 - VALÉRY, Paul. (1960, 1999). La conquista de la ubicuidad (1928). En Piezas
sobre arte.
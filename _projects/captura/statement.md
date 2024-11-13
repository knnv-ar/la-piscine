---
layout: post
title: "Captura"
date: 2024-12-11
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Aldana Gerpe_, 2024.


Mi obra, “Captura”, es resultado de la mezcolanza entre código, audio, escultura 3D, y el texto de Cesar Aira “Sobre el arte contemporáneo”. Busco transmitir con esta parte de lo que afirma el autor y generar con ello alguna que otra reflexion. 

>"La fotografía da una
idea sólo parcial de la instalación, y hasta algo menos que parcial, ya que la pone en el mismo plano de las ilustraciones de una revista de decoración de interiores." 
*AIRA, César. (2013). Sobre el arte contemporáneo.*

Como podran haber leido, Aira se refiere a las instalaciones artisticas que no pueden ser captadas en su totalidad mediante una fotografía, pero, a mi punto de vista, esto no se limita únicamente a las instalaciones. La reproduccion de la imagen de una obra (ya sea una escultura, una pintura, una intalacion, etc.) va a depender de quien la capture y los medios que tiene para hacerlo. Y aun siendo el/la mejor fotograd@ del mundo con los mejores equipos, la reproduccion seguira sin ser como la original, no tendra el mismo sentido que le dio el autor.

>'Ese faltante, pequeño o grande, en la reproducción (y sigo refiriéndome a las fotos que
ilustran mis revistas de arte), esa reproducción programáticamente imperfecta, sugiere otra obra; el punto irreproducible está ahí para generar no exactamente una obra distinta, sino una historia distinta." *AIRA, César. (2013). Sobre el arte contemporáneo.*

La otra obra, la “Captura”, fue tomada por los espectadores. El observador se convierte de alguna manera en autor, ya sea para guardar un recuerdo, exponerlo en redes sociales o criticar. 

Ahora bien, desde el lado tecnico.La estética de la cabeza con las luces nos da un entorno fantasioso, neón; que es interrumpido con las cámaras del público, cambiando su estética dependiendo del enfoque. 
Para realizar "CAPTURA" descargue algunos modelos 3D de la biblioteca de Paint3D y lo modifique en Blender para formar la cabeza con las flores. La tarima sobre la que se posiciona la dibuje en P5.js con la funcion "createShape()" que permite crear figuras 3D. Modifique el color de las luces y la posicion a la que apuntan con la funcion directionaltLight(). También cree 3 cámaras desde distintas posiciones con diferentes marcos que dan la impresion de ser una cámara de vídeo, una cámara digital y un telefono. Todo esto lo vuelve un disenio generativo. 

>(...) el arte generativo se interesa fundamentalmente por los resultados creados por los procesos generativos. En este ámbito, el software se ve y se emplea como una herramienta o dispositivo pragmático generativo para la creación de ciertos resultados –sin que se cuestione en sí mismo. Los procesos generativos producidos por el software sirven en este caso fundamentalmente para evitar la intencionalidad y producir una inesperada, arbitraria e imperecedera diversidad de formas." *ARNS, Inke. (2005). El código como acto de habla performativo*

---
***REFERENCIAS***

- AIRA, César. ([2013], 2016). “Sobre el arte contemporáneo” en Sobre el arte contemporáneo. Buenos Aires: Literatura Random House, pp. 11-56. (DAA: 1:02m)

- ARNS, Inke (2005). «Code as performative speech act» [‘El código como acto de habla performativo’]. Artnodes [artículo en
línea]. UOC. [Referencia de cita: dd/mm/aa].
<http://www.uoc.edu/artnodes/esp/art/arns0505.pdf>
ISSN 1695-5951


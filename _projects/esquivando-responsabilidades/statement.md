---
layout: post
title: "Esquivando responsabilidades"
date: 2025-11-16
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Angel Marcelo Jimenez_, 2025.

**Esquivando responsabilidades**

Es una obra interactiva realizada en p5.js que adopta la forma de un videojuego sencillo en el que el jugador encarna al propio autor, desplazándose verticalmente mientras esquiva libros y cámaras que avanzan desde la derecha del lienzo. Esta dinámica funciona como una metáfora directa sobre la procrastinación: aun sabiendo que ciertas tareas son necesarias para nuestro desarrollo personal, solemos postergarlas en favor de estímulos más simples e inmediatos.

La obra se inscribe dentro de las prácticas de los nuevos medios, donde la participación activa del espectador es un elemento constitutivo. En línea con lo planteado por Christiane Fricke, el usuario deja de ser un receptor pasivo para convertirse en quien determina el curso de la obra y sitúa al jugador en la posición misma del conflicto entre deber y evasión.

El resultado es una pieza visualmente simple pero conceptualmente cargada, que desde el humor y la autorreferencia expone la facilidad con la que desviamos nuestra atención en un entorno saturado de distracciones digitales, invitándonos irónicamente a postergar, una vez más, nuestras responsabilidades.

**Desarrollo técnico, estético y conceptual**

La obra se estructura mediante un código organizado en bloques que articulan la interacción central. En el preload se cargan los elementos visuales como el fondo, el personaje y las tres variaciones de “enemigos”, junto con la música y el sound Fx de "Game over". En el setup se define el tamaño del canvas, el escalado proporcional del avatar y el inicio de la música en loop, estableciendo así las condiciones iniciales de la experiencia. En el draw se coordina el movimiento del jugador mediante las flechas, se aplican límites con constrain y se gestiona el desplazamiento horizontal de los “enemigos”, cuya velocidad aumenta aleatoriamente para intensificar la dificultad. La detección de colisiones se realiza mediante un método de superposición rectangular que, al activarse, detiene la música, reproduce el efecto sonoro de derrota y despliega una pantalla final.

La función "reiniciarElemento" introduce variaciones en tamaño, posición y velocidad para cada enemigo, garantizando dinamismo y evitando repeticiones mecánicas, mientras que la función "keyPressed" permite reiniciar la partida desde un estado inicial controlado.

En términos estéticos, la obra apuesta por una visualidad clara y directa: imágenes reconocibles, movimiento fluido y un contraste sonoro que diferencia continuidad (la música en loop) y ruptura (el sonido de derrota). Esta simplicidad formal no implica pobreza expresiva; por el contrario, concentra la atención en el gesto central del juego y en el sentido que dicha acción adquiere dentro del marco conceptual. El minimalismo gráfico recuerda ciertas estéticas del videojuego independiente, donde la reducción de elementos permite enfatizar el discurso antes que la espectacularidad visual.

Conceptualmente, la pieza se sostiene en las reflexiones de Christiane Fricke respecto del funcionamiento del arte de los nuevos medios. La autora afirma que “la obra digital no existe únicamente en su soporte, sino en el proceso que se activa cuando el usuario interactúa con ella”, descripción que se ajusta con precisión a la lógica interna del juego. El significado no reside en un objeto terminado, sino en la relación entre sistema, usuario y dispositivo técnico. La metáfora de la procrastinación adquiere carácter performativo: el jugador hace aquello que la obra critica, y es en esa tensión donde emerge el sentido. Como señala Fricke, los nuevos medios permiten “visualizar estructuras invisibles de nuestra vida contemporánea”, y en este caso, el acto de esquivar libros y cámaras representa las estrategias de evasión tan frecuentes en un entorno saturado de pantallas, notificaciones y estímulos veloces.


**Bibliografía**

FRICKE, Christiane. (1999). “Nuevos Medios”. En AAVV. Arte del siglo XX. Vol. II. München: Taschen.
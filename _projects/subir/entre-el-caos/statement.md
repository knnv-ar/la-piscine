---
layout: post
title: "Entre el caos"
date: 2022-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Sofia Mora_, 2024.

**Entre el caos**


Este trabajo está inspirado en las obras de la artista Vera Molnar. En el centro del lienzo negro, se observa un cuadrado formado por múltiples rectángulos pequeños en movimiento, cubiertos por numerosas líneas al azar. A través de las interacciones, la velocidad y cantidad de los elementos varían, generando superposiciones que visualmente evocan desorden.

**Desarrollo técnico, estético y conceptual**

Vera Molnar, pionera en el uso de la computadora como herramienta artística, es reconocida por su exploración del arte algorítmico. Sus obras se caracterizan por figuras geométricas simples y abstractas, reflejando su admiración por la rigidez formal y racional de las matemáticas. Los protagonistas de sus composiciones son el cuadrado y el rectángulo, y mediante sutiles variaciones en tamaño, forma y color, logra crear secuencias visuales progresivas e innovadoras. “Mi vida está en cuadrados, triángulos, líneas”, afirmó la artista, destacando la importancia de estas formas en su obra.

Me inspiré en sus obras Structure de Quadrilatères (1988) y Structure de Quadrilatères (1986), que me cautivaron por el sentimiento que transmiten sobre la interacción entre el orden y el caos, y cómo estos conceptos conviven en sus composiciones.

En mi trabajo, los cambios bruscos de velocidad o desaceleración, determinados por el usuario, buscan representar el punto de quiebre entre la calma y el desorden. Esta dinámica genera un bucle de incomodidad e incertidumbre, mostrando cómo, con una simple acción, todo puede descontrolarse o volver a su lugar.

Decidí utilizar rectángulos y cuadrados, como lo hace Molnar, animándolos mediante movimientos controlados por variaciones de ángulo y velocidad, pero manteniéndolos del mismo tamaño para destacar las líneas aleatorias sobre ellos, que cubren y ocultan lo que simboliza la tranquilidad.

El código comienza definiendo que, al presionar la tecla 'b', se dibujan líneas aleatorias sobre un fondo negro, con coordenadas generadas al azar y trazos con opacidad variable. Luego, se crean los rectángulos, que funcionan como la figura principal de la composición. Estos rectángulos se disponen en una cuadrícula, y sus vértices se desplazan mediante funciones trigonométricas para generar un efecto de vibración. El ángulo de oscilación varía continuamente, afectado por la velocidad. Dentro de cada rectángulo, se trazan líneas caóticas con opacidad variable, añadiendo un sentido de desorden visual. Si se presiona la tecla 'a', se incrementa el número de líneas dentro de los rectángulos, intensificando el caos.

El movimiento del mouse también controla la velocidad de la animación: si el mouse está en la mitad superior de la pantalla, la velocidad aumenta, mientras que en la mitad inferior se reduce gradualmente. La variable velocidad regula la rapidez de oscilación de los rectángulos y se ajusta dinámicamente según las acciones del usuario, proporcionando una experiencia interactiva.

José Luis Brea, en su análisis del arte electrónico, sostiene que la especificación técnica del soporte no debería ser el principal criterio para valorar una obra de arte, sino que el verdadero valor radica en cómo los medios tecnológicos permiten una exploración crítica y expansiva del lenguaje artístico. Este enfoque resuena con las palabras de Vera Molnar: “La computadora... es, por el momento, solo una herramienta que libera al pintor de las limitaciones de una herencia clásica esclerotizada”, señalando que la tecnología permite explorar un campo infinito de posibilidades artísticas, más allá de los métodos tradicionales. Ambos autores coinciden en que las nuevas tecnologías deben ser vistas no solo como herramientas técnicas, sino como vehículos para trascender barreras y expandir el potencial creativo, fomentando así una creación artística más significativa y auténtica.


**Bibliografía**

https://creacionhibrida.net/vera-molnar-una-pionera-del-arte-generativo-del-algoritmo-a-la-nft/

BREA, José Luis. (2002). “Breve (y desordenado) antiglosario –o diccionario de tópicos- sobre el arte electrónico” en La era postmedia. Acción comunicativa, prácticas (post)artísticas y dispositivos neomediales. Salamanca: CASA Editorial.

https://www.invaluable.com/auction-lot/vera-molnar-nee-en-1924-structure-de-quadrilatere-167-c-7094e7c95d

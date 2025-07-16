---
layout: post
title: "Modelo de obra"
date: 2022-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Valentina Monserratt, 2025.

**DES-ORDEN**

"DES-ORDEN" tiene como protagonista un sketch inspirado en la obra "Sans-Titre" (1992), de Vera Molnár. Muestra nueve rectángulos agrupados en un lienzo, pero todos están ligeramente sobrepuestos y desalineados. A partir de la generación de rectángulos en posiciones aleatorias, la composición va evolucionando progresivamente hacia el caos.

**Desarrollo técnico, estético y conceptual**

Desarrollo técnico, estético y conceptual Para la realización de la obra utilicé una serie de rect() para todos los elementos mostrados: un rectángulo de 230x230 píxeles para representar el lienzo físico en el que se hizo la obra original, y nueve más dentro de ese espacio, ubicados en la misma posición que los que se aprecian en la obra de Vera Molnár. Para la generación progresiva de los demás rectángulos, usé la declaración de variables let, con la cual definí los límites de cada rectángulo, tanto en su posición como en su tamaño. Definí el tamaño de los rectángulos declarando boxW y boxH para el width y height de cada uno. Establecí los valores de minX, maxX, minY y maxY para que todos los rectángulos se generaran dentro del primero, y luego hice que x fuera un valor aleatorio entre minX y maxX utilizando random(), lo mismo con el valor y. Por último, dibujé un último rectángulo, poniendo en su posición y tamaño todas las variables previamente mencionadas.

En el ámbito visual, lo que se puede apreciar en esta composición es un homenaje directo a la obra en la cual se inspira. Imita un lienzo cuadrado, pequeño, el cual está ocupado casi en su totalidad por el contorno hueco de rectángulos desalineados y sobrepuestos. Algunos parecen seguir un orden; otros se alejan de este. La obra de Molnár parece estar cerca de un orden perfecto; lo único que la detiene son una serie de alteraciones muy ligeras que, a pesar de ser mínimas, al estar presentes en bastantes rectángulos, crean una sensación de orden en el desorden. En esta versión, van apareciendo más elementos que la van distanciando del orden imperfecto establecido por la obra original.

Lo que más interesante me resultó de Sans-Titre es el hecho de que todos los rectángulos tienen el mismo tamaño y, luego de cierto tiempo de contemplación, el espectador nota que no hay manera de que los rectángulos estuvieran "ordenados", ya que, debido a su tamaño, siempre se iban a sobreponer. Lo que intenta comunicar esta pieza es que se puede encontrar orden en el desorden, tanto en la representación de un lienzo físico que le marca límites a la aleatoriedad, como en la búsqueda inicial de series de rectángulos en la misma posición, como también en el dibujo que aparece cuando los rectángulos generados ocupan el "lienzo imaginario" en su totalidad.

En palabras de José Luis Brea, “una de las marcas del arte electrónico es su tendencia a romper con el principio de unicidad del objeto artístico, desatando el flujo inestable de lo variable, de lo imprevisible, del devenir mismo como materia de la obra” (Brea, 2002, p. 153). En este sentido, DES-ORDEN se posiciona como una práctica artística donde el azar y el código se entrelazan, y donde la desorganización progresiva se convierte en estructura.

**Bibliografía**

BREA, José Luis. (2002). _"Breve (y desordenado) antiglosario –o diccionario de tópicos- sobre el arte electrónico"_ en La era postmedia. Acción comunicativa, prácticas (post)artísticas y dispositivos neomediales. Salamanca: CASA Editorial, pp. 4-8.
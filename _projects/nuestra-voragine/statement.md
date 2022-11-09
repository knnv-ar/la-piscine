---
layout: post
title: "Nuestra Voragine"
date: 2022-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Santiago Zorrilla Jimenez_, 2022.

**Formar Parte**


**Breve Descripción:**  
En esta obra vemos un fondo negro que lleva en el centro un vórtice formado por líneas en escala de grises, estas mismas se van creando en diferentes lugares del lienzo cada vez que se le aprieta el click izquierdo sobre cualquier parte de la obra, esto va generando un efecto de figuras que me parecía interesante y, por lo tanto, que valia la pena darle tiempo al sujeto de experiencia de apreciar lo que ellx habia creado, así que cuando se toca la barra espaciadora la imagen frena para que se pueda ver la figura armada con las lineas y la rotacion, cuando se vuelve a tocar la barra espaciadora el vortice sigue su movimiento giratorio y se puede volver a generar formas nuevas con las lineas al hacer click en el lienzo de la obra.

**Desarrollo técnico, estético y conceptual**

En esta obra me base en el concepto de vorágine, que puede ser un tornado o también una mezcla de sentimientos muy intensos. Usando como referencia las obras de Herbert W. Franke y algunas de Jared Tarbell, por esto decidí usar líneas, creando formas circulares.
Siempre me interesó el círculo como forma geométrica en general, tiene muchos análisis filosóficos y eso me pareció útil a la hora de usarlos. El hecho de querer usar líneas rectas para generar formas circulares me hizo pensar en cómo hacer que funcione, así que pensé en crear muchas líneas pequeñas con dos ciclos de iteración, uno para el valor de la variable x y otro para la variable y, lo que hacen estos ciclos es crear líneas en la pantalla, dentro de estos se crean dos líneas y a estas lineas se le asignan los valores de “x” e “y”, esto hace que se creen líneas en base a los números dados dentro del ciclo. 
Cuando pude crear las líneas en el lienzo pensé en cómo hacer para que se muevan de forma circular, asi que decidi rotarlas, y le fui sumando a la rotación un valor muy bajo (de 0.0001), pero cuando las rotaba se salían de la pantalla todas las lineas, asi que tuve que bajar el tamaño de todo lo que había dentro del ciclo de iteración a 0.5 de tamaño, después lo traslade al centro del lienzo dividiendo el ancho de la imagen por 2 y el alto de la imagen por 2, así el vórtice creado por líneas queda ubicado en el centro de la imagen.
Cuando ya había creado la figura pensé que lo mejor sería hacer que el usuario pueda formar parte de la obra, como mencionaba en su texto “Redefinición de las prácticas artísticas s21” el autor Jose Luis Brea. 
Me interesa el concepto de “Sujetos de Experiencia”, quise llevar eso a lo más concreto que sería que este sujeto de experiencia pueda realmente interactuar con la obra y formar parte de ella, y que cada vez que interactúe con ella pasen cosas diferentes, dentro de el mundo creado por la vorágine. Así que cree 4 variables random entre los números 0 y 250, las use en los valores de las líneas creadas por el ciclo de iteración, por lo tanto, cada vez que se reproduzca la obra van a aparecer en un lugar “aleatorio” dentro de los número 0 y 250 del eje x e y del lienzo. Pero para eso el sujeto de experiencia tenía que apretar el botón de play, y la idea es que no salga del mundo de la vorágine, así que cree una función para que cuando el sujeto de experiencia haga click izquierdo en la pantalla vuelva a empezar la animación. Me parecían interesantes las formas que se generaban con las lineas asi que cree otro ciclo que dice que todo lo que está pasando adentro está animandose, después cree una función que hace que cuando se aprieta la barra espaciadora frena la animación de la obra para que el usuario de la obra pueda ver en detalle las cosas que ellx mismx creó.


**Bibliografía**

Jose Luis Brea - “Redefinición de las prácticas artísticas s21”


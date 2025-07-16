---
layout: post
title: "No me miren"
date: 2025-07-16
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Ani Manuela Amarilla Arancibia_, 2025.

**No me miren**

"No me miren" es una obra que representa el impacto emocional personal de la ansiedad desde una estética minimalista. A partir de una figura humana quieta, el usuario puede mover el cursor —representado por un "ojo"— que, al acercarse al personaje, provoca una reacción corporal cada vez más intensa. El cuerpo comienza a temblar de manera sutil, y la perturbación crece proporcionalmente a la proximidad del ojo hasta alcanzar un punto crítico: la figura vibra violentamente y el fondo cambia a un color oscuro revelando más ojos que observan al tembloroso cuerpo. Con esta transformación busco representar el colapso sensorial que puede desencadenarse en situaciones de exposición o presión, particularmente cuando uno siente observado. La obra invita a reflexionar sobre la percepción, el cuerpo, la vigilancia y la fragilidad emocional.

**Desarrollo técnico, estético y conceptual**

Esta idea surge a partir del deseo de materializar una sensación difícil de explicar con palabras: la ansiedad como experiencia corporal y perceptual. Tomando referencias como "The Aging Process" (1967) de Charles Csuri y "Gravel (Schotter)" (1968) de Georg Nees, busca la progresión del desorden a partir de la atención de un externo.

Desde el punto de vista técnico, la obra siendo desarrollada en p5.js, contiene a la figura humana construida a través de formas geométricas básicas como ellipse(), quad() y bezier(), El temblor corporal se genera mediante un sistema de desplazamientos aleatorios controlados por la posición del cursor. En cada fotograma, se calculan múltiples valores random() cuyos rangos dependen de la variable mouseX, divida por distintos factores para realizar el efecto de un temblor leve entre la "aproximación", y un temblor mucho más descontrolado al obtener la "atención". El cursor, a su vez, está personalizado con un "ojo" que simboliza la mirada ajena, la observación invasiva que desencadena el malestar. A medida que el ojo se acerca, la intensidad de los temblores aumenta, y al llegar al punto de mayor proximidad, el fondo del lienzo cambia a un tono oscuro, con más ojos inquietos que observan, y que refuerza el cambio emocional. Este pasaje de luz a oscuridad representa el paso de una incomodidad leve a un estado de ansiedad severa.

Conceptualmente, la obra trabaja con temas como la ansiedad social, el estrés ante la exposición pública, la autoimagen y la percepción del juicio ajeno. Los ojos como símbolo retoma tanto la idea panóptica del control como la vulnerabilidad del ser observado. La reacción del cuerpo a la mirada propone una metáfora sobre cómo lo invisible (emocional o psicológico) puede exteriorizarse físicamente.

La inspiración en obras del arte digital como las de Charles Csuri y Georg Nees se ve reflejada no solo en el uso del código como medio expresivo, sino también, en la forma del desorden —el temblor progresivo—. Esta obra personal que expresa mi vivencia con la ansiedad social, hago uso del color como transicion al miedo y lo complemento emulando 'el temblor' del que tanto sufro y por lo cual deseo que No me miren.
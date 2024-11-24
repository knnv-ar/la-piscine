---
layout: post
title: "Quiero que me escuchen"
date: 2024-11-11
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Candela S. Di Genova_, 2024.

**Quiero que me escuchen**

"Quiero que me escuchen" es una pieza interactiva que explora el deseo de comunicar y ser comprendido. La obra presenta una composición abstracta y en constante cambio, donde los usuarios pueden modificar parámetros como las rotaciones y el relleno de los elementos visuales. Aunque los rangos de ajuste están predeterminados por las decisiones estéticas de la creadora, ofrecen suficiente libertad al usuario para sentirse como el artista al generar nuevas variaciones de la obra original. Sin embargo, el título plantea una pregunta intrigante: ¿por qué una obra visual expresa el deseo de ser escuchada?

A medida que el usuario interactúa, descubre que, a diferencia de los demás controles que afectan solo una característica, el control de sonido provoca cambios en múltiples aspectos de la composición—tamaño, color y rotación—transformando la obra de manera más profunda e impredecible. Así, "Quiero que me escuchen" invita al público a reflexionar sobre la importancia de escuchar y empatizar con las experiencias ajenas, en una época donde la conexión humana es más necesaria que nunca.


**Desarrollo técnico, estético y conceptual**

  Mi obra se desarrolla en el entorno de `p5.js` y se compone de dos secciones principales. La primera incluye un conjunto de cubos, inspirados en la obra de Vera Molnár "Structure de Quadrilatéres"[^1], a los cuales se les ha añadido una dimensión 3D. La segunda sección consta de controles interactivos que permiten al espectador modificar parámetros visuales, brindándole la oportunidad de convertirse en su propio artista. Además, considerando que hoy en día la mayoría de las personas acceden al contenido multimedia a través de dispositivos móviles, la obra está diseñada para ser responsiva, adaptándose al tamaño y formato del dispositivo en uso.

El concepto de "Quiero que me escuchen" se alinea con la idea de César Aira en “Sobre el arte contemporáneo”[^2] de que "crear valores" implica intervenir en la historia personal del espectador. A través de la interacción, no solo busco ofrecer un objeto visual, sino también propiciar una experiencia reflexiva que invite a los usuarios a explorar su relación con el sonido y la sobreestimulación. En este sentido, la obra funciona como un soporte para narrar una historia íntima y emocional, donde busco situar a la hipersensibilidad auditiva como el eje central de la experiencia.

Siguiendo el pensamiento de Aira, el arte contemporáneo va más allá de la creación de objetos bellos; se adentra en lo que aún no ha sido hecho, donde el relato toma protagonismo. Así, al modificar los parámetros de la obra, el espectador se convierte en co-creador de su propio relato, más allá de la mera estética de los cubos. La obra busca dar voz a las experiencias de quienes enfrentamos esta alta sensibilidad a los sonidos y la incapacidad de filtrar ruido de fondo. Mi intención es visibilizar cómo algo que puede parecer trivial para algunos puede afectar profundamente la vida de quienes lo experimentamos.

Al transformar el audio de la obra de pacífico a caótico y aumentar su volumen, busco intencionalmente aturdir al espectador, reflejando la sobreestimulación sonora de situaciones cotidianas. Cuando el sonido alcanza niveles extremos, la obra se descontrola: las rotaciones y tamaños de los cubos se establecen en valores fijos que el usuario no puede modificar, generando frustración y dificultando la visualización de la pieza. Este descontrol simboliza cómo, ante la sobreestimulación, muchos aspectos de nuestra vida se ven afectados, mientras nuestros sentidos se saturan y sistema nervioso entra en alerta nuestra capacidad para concentrarnos y apreciar lo importante decrece exponencialmente.

Finalmente, Fricke en "Nuevos medios"[^3], habla sobre la "creación permanente" y la interacción constante entre el artista y el espectador, ideas que resuenan en esta obra. Aquí, la creación no se presenta como un objeto acabado, sino como un proceso evolutivo en el cual el espectador juega un rol fundamental al modificar elementos y configurar su propia experiencia. Inspirada en los pensamientos sobre la "imaginación" y la "inocencia" como herramientas creativas, esta obra ofrece al usuario los medios necesarios para intervenir en su desarrollo visual y sensorial, haciendo que el acto de crear sea accesible y estimulante para todos.

Para fomentar la empatía, se ha incluido un control de sonido separado, permitiendo al espectador decidir si desea activar esta dimensión de la obra, invitándolo a explorar la experiencia desde diferentes perspectivas.


**Bibliografía**

[^3]:Fricke, C. (1999). Nuevos medios. En AAVV. Arte de siglo XX (Vol. II, pp. 576-590). München: Taschen.

[^2]:Aira, C. (2016). Sobre el arte contemporáneo. En Sobre el arte contemporáneo (pp. 11-56). Buenos Aires: Literatura. Random House. (Trabajo original publicado en 2013)

[^1]:Spalter Digital. (n.d.). Artwork: 206. Recuperado de [https://spalterdigital.com/artworks/206/](https://spalterdigital.com/artworks/206/)

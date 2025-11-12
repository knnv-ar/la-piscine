---
layout: post
title: "Oscillons"
date: 2025-7-15
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---
<div id="div-sketch">
 <script type="text/javascript">
src="sketch.js"></script>
</div>

Micaela Monti Rechencq, 2025;

***Título de la Obra***

Descripción del trabajo:
La obra creada es una imagen generativa que emula las sinusoides oscilatorias creadas por Ben F. Laposky en los años 50, utilizando osciloscopios y señales electrónicas. Mediante funciones trigonométricas simples y estructuras de repetición, se genera una forma en movimiento que recuerda a las curvas Lissajous(una variación de las sinusoides). El sistema responde a la posición del mouse, permitiendo al espectador modificar la obra.

***Desarollo técnico, estetico y conceptual***

Desarrollo técnico:
Esta obra se desarrolla dentro del entorno de p5.js utilizando únicamente formas primitivas 2D, sin recurrir a imágenes, color, ni modelos 3D. El programa produce curvas oscilatorias mediante funciones `sin()` y `cos()`, construidas dentro de un bucle `for`, que genera una figura utilizando una variación de la ecuación que genera una sinusoide llamada fórmula de la curva de Lissajous, característica del arte osciloscópico.


Desde lo técnico, se utilizan datos endógenos (frameCount para animación interna) y exógenos (posición del mouse para modificar amplitudes), generando una imagen dinámica, viva e interactiva con el espectador. El uso de la función `background()` con baja opacidad produce un efecto de arrastre que hace alusión a las fotografías que le tomaba Ben F Laposky a los osciloscopios.
La estética de la obra recuerda los inicios del arte electrónico, cuando se empezaba a usar tecnología para crear imágenes. José Luis Brea señala que el verdadero valor del arte digital está en cómo se exploran sus herramientas, no en usarlas como si fueran pinceles. Esta obra hace justamente eso: utiliza la programación y la fórmula de la curva de Lissajous como un lenguaje visual para experimentar y generar nuevas formas.
Conceptualmente, la obra refleja la idea de redefinición del arte en el siglo XXI que propone Brea en Redefinición de las prácticas artísticas. La pieza no busca ser una imagen fija y cerrada, sino una experiencia participativa, donde el espectador interviene en la obra sin necesidad de conocimientos técnicos, modificando en tiempo real el desarrollo de la obra. Esta forma abierta de creación refleja cómo el arte digital actual se enfoca menos en el objeto final y más en la experiencia del espectador.
La referencia a Laposky no es únicamente formal, sino también histórica: resalta el gesto de experimentación con tecnología análoga desde una mirada actual. El código se convierte en un lugar de encuentro entre tradición y futuro, entre máquina y cuerpo, entre autor y espectador.

***Bibliografía***
Laposky, B. F. (1952). Oscillon #40 [Fotografía]. Victoria and Albert Museum. https://collections.vam.ac.uk/item/O187634/oscillon-40-photograph-laposky-ben/
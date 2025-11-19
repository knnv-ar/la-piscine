---
layout: post
title: "Parpadeos"
date: 2025-08-25
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---


<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_César Ramírez_, 2025.

**Parpadeos**

El sistema visual genera una cuadrícula cuyos elementos aparecen y desaparecen de forma aleatoria, reemplazándose constantemente por nuevas configuraciones. Esta mutación continua impide que el espectador pueda fijar por completo un patrón antes de que cambie, evocando la dificultad de asimilar y nombrar fenómenos en un contexto donde la tecnología evoluciona más rápido que la capacidad de la lengua para describirla.

La interacción permite que el espectador influya en las variaciones de tamaño y disposición, aunque siempre dentro de parámetros predefinidos por el artista. Este juego entre control y azar produce una experiencia dinámica en la que las formas no se repiten de manera predecible, reforzando la sensación de inmediatez y volatilidad.

La estética se inspira en los patrones geométricos generativos de Frieder Nake, trasladándolos a un lenguaje visual contemporáneo y participativo. La monocromía, la estructura en cuadrícula y el uso del azar como motor compositivo dialogan con la tradición del arte algorítmico, pero incorporan un componente interactivo que transforma al espectador en agente activo de la obra.

**Desarrollo técnico, estético y conceptual**

La obra se desarrolla en p5.js, un entorno de programación creativa basado en JavaScript. Técnicamente, el código genera una cuadrícula de 10 columnas por 10 filas, donde cada celda se dibuja en base a coordenadas calculadas a partir del tamaño total del lienzo. A cada cuadro de animación, el programa decide aleatoriamente si mostrar o no un rectángulo en una celda determinada, produciendo un efecto de parpadeo. Esta decisión se controla con un valor aleatorio que, en un 50% de los casos, oculta la figura. Cuando se dibuja, el rectángulo adopta dimensiones levemente variables en ancho y alto, determinadas por la posición vertical del mouse, lo que añade un componente interactivo. Además, cada rectángulo incorpora líneas internas trazadas según cuatro posibles patrones, también seleccionados aleatoriamente. El frameRate bajo refuerza el efecto de mutación lenta y perceptible de la composición.

En lo estético, la obra toma como referente la producción de Frieder Nake, uno de los pioneros del computer art. Sus patrones geométricos, la organización en cuadrículas y el uso del azar controlado como generador de variación visual inspiran la estructura de esta pieza. La ausencia de color y el trazo negro sobre fondo blanco responden a una estética minimalista, centrada en la forma y la composición, y buscan mantener la sobriedad gráfica propia de las obras algorítmicas de Nake de la década de 1960.

En el plano conceptual, la obra explora la relación entre estética generativa y la noción de obsolescencia y reemplazo rápido de conceptos en la cultura contemporánea, tal como lo plantea José Luis Brea. El parpadeo de las formas simboliza la imposibilidad de fijar una imagen estable: cuando el espectador intenta apropiarse de una figura o patrón, este desaparece, reemplazado por otro. Se establece así un paralelismo con la afirmación de Brea: “La evolución de las tecnologías es ahora más rápida que la de la lengua: para cuando un término es adecuadamente traducido, la función o el objeto a que se refiere habrá ya sido reemplazado por otro” (Brea, 2002). La obra funciona como una visualización abstracta de esta dinámica: el espectador se enfrenta a un sistema en constante mutación, donde las configuraciones visuales se desvanecen antes de ser plenamente asimiladas.

Los parámetros fijos del código (cuadrícula, monocromía, lógica de parpadeo) corresponden a la “condición” definida por el artista, mientras que las variaciones de tamaño y líneas internas responden a la interacción del espectador, introduciendo un espacio de decisión dentro de un marco preestablecido. Esto reafirma la posición del artista como diseñador de un dispositivo de experiencia, más que como creador de un objeto fijo.

**Bibliografía**

BREA, José Luis. (2008). _"Redefinición de las prácticas artísticas"_ .

BREA, José Luis. (2008). _"Breve (y desordenado) antiglosario"_ .

---
layout: post
title: "Código de la nostalgia"
date: 2023-11-12
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
  - face-api
---

 <div id="asciiDiv" style="background-color: black; color: #fff; font-family: Courier; font-size: 12pt; line-height: 10pt;"></div>
    
  <video id="camVideo" autoplay muted playsinline width="1px"></video>
  <script defer src="sketch.js"></script>

_Martina Mainero_, 2022.

# **Código de la nostalgia**

Código de la nostalgia es una obra interactiva donde se combina el análisis de expresiones faciales en tiempo real con una representación visual modificada y una experiencia auditiva de sonidos asociados a las expresiones detectadas. Se fusionan los sonidos en 8 bits, con la estética visual ASCII para crear una experiencia inmersiva que transporta a los espectadores a un espacio temporal nostálgico. La simplicidad de los tonos de 8 bits se entrelaza con la estética retro de los caracteres ASCII, generando una resonancia emocional que recuerda a la época dorada de los primeros videojuegos y computadoras de escritorio personales. Esta conjunción de elementos, que abarca lo visual y lo auditivo, busca sumergir al espectador en un viaje sensorial que evoca la nostalgia, desencadenando recuerdos de una época pasada.

## **Desarrollo técnico, estético y conceptual :**

Al igual que en los Happenings, la obra requiere la participación activa del público. El espectador no es simplemente un observador pasivo, sino que también influye en la obra a través de la cámara web interactuando con los sonidos y la representación visual. La existencia de la obra se despierta solo cuando el espectador decide involucrarse y tomar las riendas de la experiencia. Sin su interacción, la obra yace en un estado latente. Al explorar, descubrir y desencadenar respuestas es cuando la obra cobra vida. La esencia de esta creación es la interactividad; sin la participación activa del espectador, la obra no se manifiesta.

La experiencia única generada por la participación activa del espectador resuena con la noción de la búsqueda de irreproducibilidad en el arte contemporáneo. Cada interacción individual con la obra se convierte en una experiencia única y efímera, moldeada por las acciones específicas de cada participante. Así, la obra interactiva se convierte en una manifestación contemporánea de 'un arte de formatos, una épica de formatos en fuga', donde la fugacidad de cada experiencia individual contribuye a la riqueza y complejidad del panorama artístico contemporáneo.

La obra integra elementos visuales y auditivos en un contexto cotidiano, utilizando la tecnología moderna. Esta integración refleja la noción de que el arte puede existir más allá de los límites de galerías y museos, insertándose en la vida diaria a través de la interacción con la cámara web y la representación visual en tiempo real.

La biblioteca face-api.js se encarga de cargar modelos de detección facial y reconocimiento de expresiones. La cámara web captura el video en tiempo real, y la biblioteca detecta los rostros para identificar las emociones. Las expresiones felices y tristes son identificadas y activan sonidos. Para la representación visual se utiliza p5.js que convierte el flujo de video de la cámara web en arte ASCII. Cada píxel se convierte en un carácter de texto con diferentes densidades de caracteres para representar la variación en la intensidad de color. 

**Bibliografía**
AIRA, César. (2013). Sobre el arte contemporáneo.
KAPROW, Allan. (1961). Happenings en la escena newyorkina.

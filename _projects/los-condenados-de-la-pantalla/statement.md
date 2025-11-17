---
layout: post
title: "Los condenados de la pantalla"
date: 2025-11-15
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Álvaro Oxley_, 2025.

### **Descripción de la Obra**

Mi pieza,  **"Los condenados de la pantalla"**, surge en base a la reinterpretación de la basura en el plano digital luego de ver obras *“trash art”* de Antonio Berni. Además de Berni, la obra *“Baños Públicos”* de Roberto Plate fué el disparador que me ayudó a pensar el objeto de mi obra.

La obra renderiza palabras pertenecientes a frases reales de twitter y estas frases se encuentran guardadas con sus respectivas propiedades (el usuario que lo publicó y si el usuario es anónimo). Lo que tienen en común todas las frases seleccionadas es que estas denigran y discriminan a personas con bajos recursos.

Al ser renderizadas, las palabras empiezan a componer la obra *“Juanito dormido”* de Antonio Berni a lo largo del tiempo. Al apretar la barra, comenzarán a renderizarse los nombres de los usuarios que publicaron las frases. Si el usuario es anónimo su nombre se mostrará con un borde negro, de lo contrario se mostrará con un borde gris claro.

### **Desarrollo de la Obra**

El pilar de la obra es un conjunto de datos reales con tweets, nombres de usuarios e información real que es renderizada dependiendo de las interacciones del usuario. Además, cierta información es renderizada dependiendo de sus propiedades. En la obra se busca transmitir principalmente la agresividad y el impacto desorganizado de la comunicación en línea. También, de una forma más indirecta, se busca mostrar la frustración personal de los usuarios y como estos desplazan sus frustraciones en el plano digital.

La obra aborda la continuidad de la precariedad y la exclusión social, trasladando el personaje de *Juanito Laguna* a la realidad tóxica de la *web*. La obra busca exponer esta nueva forma de marginalización en los medios digitales y mostrar a los hostigadores como sujetos frustrados personalmente.

Más allá de los componentes técnicos de la obra, es relevante citar a César Aira: “El objeto se vuelve secundario respecto del relato del que emerge.” A partir de esta premisa, propongo diferenciar la imagen generativa (objeto) de mi obra del relato que ésta produce. Esta separación revela que la verdadera obra es el marco contextual que envuelve a la imagen renderizada y que este objeto sirve como recipiente del relato.

Conceptualmente, me interesó explorar algunos aspectos dentro de la teoría de Inke Arns sobre cómo el propio lenguaje de programación no es solo un operador de acciones ya que se introduce el concepto de actos inlocutivos. *“Los actos inlocutivos se realizan gracias a las palabras emitidas. Estas «realizaciones» (que crean o hacen lo que designan) se definen como actos en los que una persona que dice algo también hace algo...”.* Este concepto otorga una dimensión performativa al código, que busqué aprovechar mediante el renderizado condicional de los nombres de usuario. El renderizado de estos nombres se realiza en función de su estado de anonimato; si el borde del nombre es de color gris, el espectador puede encontrar el nombre real del comentarista buscando el nombre de usuario en la web. En este escenario, el propio código expone la identidad de los usuarios y se convierte en un sentenciador dentro de la obra.

**Bibliografía** 

- ARNS, Inke. (2005). "El código como acto de habla performativo". En Revista Artnodes, Julio de 2005, ISSN 1695-5951  
    

- AIRA, César. (\[2013\], 2016). “Sobre el arte contemporáneo” en Sobre el arte contemporáneo. Buenos Aires: Literatura Random House, pp. 11-56.

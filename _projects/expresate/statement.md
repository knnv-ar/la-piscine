---
layout: post
title: "Expresate"
date: 2024-11-11
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Vera Pallavicini_, 2024.

**Expresate**

Esta obra tiene como propósito darle al usuario la posibilidad de expresarse a través del micrófono de su dispositivo. Cuando entra a la página, lo único que podrá ver es una pantalla negra con un texto que dice “Expresate”, y un mensaje que le preguntará si desea habilitar su micrófono. Si decide aceptar, entonces se habrá adentrado en la obra. Al percibir su voz, el programa generará en la pantalla figuras que reaccionan al sonido. Esta interacción se traduce en movimientos y cambios de transparencia y tamaño de las formas, lo que crea un resultado visual en tiempo real.

Este trabajo es una invitación al usuario a expresarse, hablar, decir lo que siente y lo que piensa: darle el espacio para escapar de esta realidad repleta de estímulos y distracciones. Prestar atención, estar inmerso en el momento presente. Conectar consigo mismo y experimentar, o simplemente ver lo que sucede.

La realización estuvo inspirada en movimientos artísticos como el arte generativo y el arte sonoro. Mi referente principal fue John Cage, compositor vanguardista que explora el trabajo con lo sonoro y la aleatoriedad, y en el movimiento artístico Fluxus, que busca involucrar directamente al espectador con la obra.

**Desarrollo técnico, estético y conceptual**

Este último tiempo empecé a desarrollar una fascinación por las obras visuales que reaccionan al sonido. Un aspecto que me cautivó fue la capacidad que tenían para retener mi atención: podía estar períodos largos de tiempo mirando la pantalla, a veces reproduciendo el mismo sonido con tal de ver lo que sucedía. Era incapaz de alejar la mirada, viendo cómo se movían los elementos en relación al sonido que estaba escuchando. Esta experiencia fue lo que dió pie a esta obra, aunque mi intención no era crear una representación visual de un sonido cualquiera.

“Expresate” tiene como propósito ser una experiencia, y no un objeto de contemplación. En su texto sobre el arte y los nuevos medios, Fricke habla acerca del cambio que ha atravesado la concepción del artista con la llegada del arte contemporáneo. Él afirma que el espectador pasa de ser un mero observador de la obra a ser partícipe y creador de la misma. En este sentido, “Expresate” involucra al usuario directamente en la producción: sin su intervención, no sería más que una pantalla negra. Si bien es sabido que el artista ha tomado determinadas decisiones estéticas en el proceso, este rol queda en segundo plano, ya que la participación del usuario es lo que hace al resultado final.

La realización de esta obra estuvo centrada en el proceso, sobre todo en la implementación de los algoritmos utilizados. El movimiento de los cubos se genera por medio del análisis de la entrada del micrófono. Las cualidades del estímulo sonoro (volumen, tono) son “traducidas” a cualidades visuales: color, movimiento, posición en el espacio. Los cubos de colores fríos pertenecen a tonos bajos, mientras que los cubos cálidos a tonos más altos. A su vez, los cubos van aumentando y disminuyendo su tamaño en relación al volumen del sonido que capta el micrófono.

Siguiendo el planteo de Aira, “El Artista Contemporáneo sigue adelantándose, sigue un paso adelante, y pone su ingenio e inventiva en conseguir que su obra contenga un aspecto, un costado, una punta, que siga oculta aun a la más novedosa y exhaustiva técnica de reproducción”. Al ser una experiencia, esta obra se convierte en un suceso irrepetible e irreproducible, ya que ni el resultado visual ni las emociones asociadas al momento volverán a ser las mismas una vez que el usuario vuelva a abrir la página (en caso de que esto suceda).

Para finalizar, me parece interesante destacar este pasaje de lo inmaterial a lo tangible. Esta obra explora la relación entre lo inmaterial, como el sonido, y lo material, como los cubos en la pantalla. Esta fusión busca proporcionar una experiencia multisensorial exaltada y única, que solo cobra sentido con la participación del usuario.

**Bibliografía**

AIRA, César. (2013). _Sobre el arte contemporáneo_.
Fricke, Christiane. (1999). _Nuevos Medios_.
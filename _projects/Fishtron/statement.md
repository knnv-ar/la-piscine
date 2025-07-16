---
layout: post
title: "FishTron"
date: 15-07-2025
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Mercedes Velazquez_, 2025.

**FishTron**

Esta obra parte de una estructura cerrada: una vitrina, dentro de esta dos figuras suspendidas (los ‘participantes’), un público y un panel LED. Cuando se presiona la tecla “4” (tecla del símbolo $), aparecen billetes y las figuras internas flotan, como si una cuerda invisible se activara. El trabajo combina influencias de los hábitats experimentales de Luis Benedit y del formato interactivo del reality show Fishtank. Todo el sketch está construido con primitivas 2D, estructuras condicionales y repeticiones para la creación y la activación de un sistema simbólico. Se busca evidenciar una dinámica: alguien observa, alguien “paga”, y entonces el cuerpo se mueve. El resto del tiempo, espera.

**Desarrollo técnico, estético y conceptual**

    En la búsqueda e investigación de artistas, Luis Fernando Benedit fue quien más me atrajo para llevar a cabo la obra en p5.js. En los 70’ expuso una serie de obras donde mezclaba arquitectura, arte y seres vivos;  construía laberintos, hábitats, circuitos que eran transitados por seres vivos. Desde abejas como en Biotron (1970) donde montó un recinto con abejas y flores artificiales que segregaban néctar, hasta humanos como en Laberinto invisible (1971), una instalación interactiva con espejos, sensores y luces. Esta serie de obras reflejan su investigación y búsqueda sobre la relación entre vida y entorno, como es que los organismos se comportan bajo condiciones artificiales, creadas e impuestas. Se podría decir que Benedit fue un pionero del arte-sistema; diseñó interdisciplinariamente entornos vivos y controlados, que dependían de variables externas. Y fueron estos conceptos los que dispararon el comienzo del trabajo.

    El otro disparador en la inspiración  de mi obra vino de un lugar menos académico; un reality show estadounidense, Fishtank. Transcurre en una casa donde conviven participantes, todos pelean por un pozo en común y se stremea todo el día en una página web donde hay usuarios que pueden interaccionar con ellos, únicamente si pagan una cantidad de dinero. Una característica interesante del show es que los espectadores pueden enviar mensajes a los participantes, estos mensajes son reproducidos por parlantes en la casa y también visualizados en un panel led. He aquí el nombre de mi obra y parte de la inspiración visual de esta.

    A partir de estos disparadores se fue gestando mi obra: una vitrina cerrada, un público que observa y  dos figuras suspendidas -los “participantes”- , cuerpos oscuros que no hacen nada por sí solos, pero que sí reaccionan ante un estímulo exterior. El panel led superior funciona como una interfaz simbólica, una forma mínima de interacción que condensa la lógica del espectáculo y la vigilancia. Cuando alguien presiona una tecla, los billetes aparecen y los hilos que sujetan a los participantes comienzan a moverse. Se mueven porque algo afuera —el dinero, el espectador/usuario— les dio una señal.

    Lo que sucede dentro de la vitrina funciona como una pequeña maquinaria simbólica. El sketch activa un espectáculo; condensa sus lógicas, sus estímulos y sus dependencias. El espectador no solo observa, participa. Y al participar, revela su propia función como parte del sistema. En ese sentido, mi vitrina no pretende funcionar como una obra de arte tradicional, sino como un entorno activo que genera una experiencia. Como señala Brea, “No existen ‘obras de arte’. Existen un trabajo y unas prácticas que [...] juegan papeles específicos en relación a los sujetos de experiencia.” (Brea, El Tercer Umbral, p. 107)

    Esta lógica fue también la que guió las decisiones técnicas y estéticas. En el proceso de trasladar todas las ideas al lienzo, decidí tomar una dirección más minimalista y abstracta. La ‘vitrina’ donde conviven los participantes es un cubo con perspectiva, dentro hay una ventana donde vemos un circulo que transiciona de negro a blanco, revelandose una luna. Quería crear formas y elementos simples pero fuertes en su expresión. Esa búsqueda en particular se hizo entretenida en el momento de crear a las figuras “humanas”. Utilizando vertex y jugando con los datos, fui creando prototipos de figuras y caras, resultando finalmente en esas figuras puntiagudas y pregnantes. La pantalla led de arriba es el motor de la obra, en ella se materializa la interacción del público con los participantes, la interacción que en definitiva cristaliza el concepto principal de la obra. Con estructuras de repetición, condicionales y mucho tiempo jugando con vertex, logré crear billetes que se manifiestan en el panel cuando el usuario apreta la tecla “4” -la tecla que contiene el símbolo $-. Simultáneamente, al mantener apretada la tecla, los participantes y las líneas que los conectan al techo de la vitrina se mueven verticalmente, flotan. Quería que esas figuras parecieran títeres siendo controlados por hilos.

    Estas elecciones me hicieron percibir la programación como un lenguaje con potencial expresivo. Como afirma Brea en su Antiglosario, “Sólo aquellos lenguajes, o dominios de producción significante, en los que se procede a una exploración crítica de sus propios límites contribuyen producciones que legítimamente debemos considerar "arte". ” (Brea, Breve (y desordenado) antiglosario, apartado Pixel art). El código entonces no solo construye sino también expone. Expone un vínculo condicionado, una dependencia, y una estructura que solo cobra vida si alguien decide activarla.

**Bibliografía**

•   Brea, José Luis. (2002). _"La era postmedia: Acción comunicativa, prácticas (post)artísticas y dispositivos neomediales."_ Centro de Arte de Salamanca.
•   Brea, José Luis. _“Breve (y desordenado) antiglosario —o diccionario de tópicos— sobre el arte electrónico.”_ En e-barcelona.org, 2004.  
•   Obra de Benedit, Luis Fernando. _https://coleccion.malba.org.ar/fitotron/_



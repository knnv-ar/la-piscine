---
layout: post
title: "100 segundos (as soon as possible)"
date: 2022-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Ignacio Castro Stolkiner_, 2022.

**100 segundos (as soon as possible)**

**100 segundos** es un tríptico multimedial basado en el **Dooms Day Clock**<sup>1</sup>, un reloj simbólico mantenido por la junta directiva del _Boletín de Científicos Atómicos_ de la Universidad de  Chicago. En la metáfora **se utiliza el tiempo restante entre la posición actual de la aguja hasta la medianoche como indicador del nivel de riesgo a escala global de que ocurra un evento catastrófico e irreversible** originado por causas humanas. 

**En el tríptico se mapean los valores en segundos de la distancia temporal a la medianoche a valores de gris**. A la izquierda como referencia una hipotética hora 00:00 inicial, en el centro la hora actual (100 segundos para la medianoche), y a la derecha la medianoche. Estos valores están traducidos a color y además escritos como mecanismo de visualización metafórica. 

A una diferencia de valor casi imperceptible, **se superpone estática como lo hacen rutinariamente distintas agencias a la hora de percibir los riesgos a largo plazo**. 

Sobre procesos graduales que ya son cognitivamente difíciles de percibir en complejidad (cambios en el ambiente, en los biomas, desarrollos científicos, técnicos sociales, etc.) encontramos de agentes concretos introduciendo interferencia. Es decir **contribuyendo a la construcción de formas de habitar el mundo incompatibles con la consciencia del entorno**, la observación de procesos graduales, o simplemente la posibilidad de encargarse de algo más que el cuidado del sí. 

El rango 0-255 no tiene suficiente resolución para mapear la diferencia entre la hora actual y la medianocha, y se debió usar una aproximación para llegar a una diferencia de 1. 

**Desarrollo técnico, estético y conceptual**

<p style=" font-size:8pt; font-style:italic">
"No obstante, lo que estamos considerando aquí son las consecuencias mentales y sociales de los diseños o esquemas...Porque, el «mensaje» de cualquier medio o tecnología es el cambio de escala, ritmo o patrones que introduce en los asuntos humanos."<sup>2</sup>
<p>

En Junio de 1947 el _Boletín de Científicos Atómicos_ de la Universidad de Chicago publicó en su portada por primera vez el llamado **Dooms Day Clock o Reloj del Jucio Final**. Habían pasado menos de dos años desde la utilización por parte de las fuerzas armadas estadounidenses de las bombas Little Boy y Fat Man en las ciudades de Hiroshima y Nagasaki, se terminaban de configurar los bloques y comenzaba configurarse la guerra fría. Dos años después la Unión Soviética haría su primer prueba de armamento nuclear. 

Los editores de la junta directiva del _Boletín_ **eligieron representar el riesgo de una catástrofe nuclear bajo la forma de un reloj en el cual la distancia de la aguja a la medianoche representa el nivel de riesgo**. A menor distancia temporal, mayor riesgo. Eligieron esta metáfora para comunicar que **no necesitamos actuar activamente para acercarnos, sino que por defecto el riesgo crece a menos que se tomen acciones concretas y efectivas para disminuirlo**. En la primera edición la posicionaron a siete minutos. 

Desde entonces existe una junta que se reúne dos veces al año, para determinar si acercan, alejan o dejan la aguja en el mismo lugar en función del los cambios en el panorama global. Actualmente se tienen en cuenta otras variables además del riesgo nuclear: el cambio climático, el desarrollo de tecnologías disruptivas y el riesgo biológico. **Desde 2020 la aguja encuentra a 100 segundos del fin, lo más cerca que ha estado desde su creación**. 

Cabe aclarar que **quienes toman estas decisiones son un subconjunto pequeño de la comunidad científica sitiado en un tiempo y en un espacio particulares** (en este caso, una universidad de élite de Estados Unidos) y depositan sus sesgos en ellas<sup>2</sup>. Esta obra no es una reivindicación tecnocrática, sino la metáfora una de otra metáfora a ser interpretada.

**100 segundos (as soon as possible)** es un **tríptico multimedial que explora una forma alternativa de visualización/codificación de estas ideas y algunas reflexiones sobre las mismas**. La estructura de base es una reinterpretación de la pintura _White Painting_ [three panel] de **Robert Rauschenberg**, un tríptico de lienzos blancos. En esta versión **se mapean las cifras en segundos del Dooms Day Clock (es decir el riesgo) a valores de gris en cada panel**. De izquierda a derecha equivale a del pasado hacia ese futuro hipotético. 

**En el panel de la izquierda se visualiza un momento 00:00** (0 segundos) inicial mapeado al valor 255, es decir al color blanco. **En el panel de la derecha se representa el momento del _Juicio final_** la hora 24:00  (86400 segundos) mapeado al valor 255, es decir, negro. **En el medio la hora actual que marca el Reloj** 23:58:40 (86220) da como resultado 0,53125. Es decir, si la hipótesis del Reloj es cierta, al comprimirla a una escala de 0-255, **la diferencia entre el presente y el fin de los tiempos es la mínima representable**. Llega a ser 1 por redondeo, ya que en este código no se pueden representar números decimales. A los hechos prácticos, la diferencia es casi imperceptible y el riesgo muy grande. **Estos valores aparecen como números visibles en cada panel en una segunda traducción**.

Sobre esta representación estática de base, se sobreimprimen elementos dinámicos para dar cuenta del proceso. Si bien el reloj que se ve no modifica sus cifras, titila y suena para marcar el paso de **ese tiempo abstracto que aún avanza mientras no se logre disputar la hegemonía de los procesos que nos ponen en riesgo**. 

Como mencionamos anteriormente, muchas veces **las fluctuaciones en estos niveles de peligro que el Dooms Day Clock propone representar nos resultan imperceptibles**, ya sea por la escala, por el nivel de abstracción, por lo progresivo o por lo silencioso. Sobre estas dificultades de base, encontramos **una variedad de agencias e intereses que interfieren en nuestra percepción**/distracción respecto de estas cosas. 

**Esta interferencia aparece representada como partículas**. A la hora de generarse el algoritmo obtiene los valores de color del pixel de origen, si este es blanco, la partícula se genera negra, y viceversa. Es decir el ruido general tiene el mayor contraste posible con el fondo para destacar y **ser visualizable más como una distorsión general en cantidad que como elemento particular**.


<br>
<br>
<br>

----
<p style="font-family: times, serif; font-size:9pt">
<sup>1</sup>Sitio Oficial del Dooms Day Clock: https://thebulletin.org/doomsday-clock/
</p>
<p style="font-family: times, serif; font-size:9pt">
<sup>3</sup> McLuhan, M., Fiore, Q., & Agel, J. (1987). El medio es el mensaje. Barcelona, España: Paidós.
</p>
<p style="font-family: times, serif; font-size:9pt">
<sup>3</sup> En 2022 varios sectores científicos y no científicos cuestionaron la decisión de no mover la aguja a pesar del conflicto bélico desencadenado entre Rusia y los países de la OTAN en territorio Ucraniano.
</p>

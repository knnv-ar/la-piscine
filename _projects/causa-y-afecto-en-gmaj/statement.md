---
layout: post
title: "Causa y Afecto en Gmaj"
date: 2024-11-11
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Santino Iosipescu_, 2024.

**Causa y Afecto en Gmaj**

Desde que nacemos, no dejamos de ser interpelados por infinitas sensaciones, reacciones, fuerzas. Nuestros cuerpos —como entidades físicas, de carácter orgánico y sensible— no dejan de recibirlas y responderles. Siendo todos afectados entre sí por los movimientos que irradian del interior de cada uno, como producto de aquellas intensidades.<br>
Nuestra existencia esta condicionada por esa constante relación corporal. Una interacción que puede ser permanente por su continuidad, pero que involucra cambio, transformación, vida al fin y al cabo: no somos más que procesos.<br><br>
Es imposible definir nuestro cuerpo en una posición específica, que coincida con todos los anhelos, a los que nuestros afectos y emociones nos llevan. No dejaría de ser otra forma sesgada, dentro de un marco de posibilidades ya establecidas, de encasillarnos en una “grilla cultural conocida”[^1].<br> 
Sin embargo, recorriendo sensiblemente nuestra trayectoria, sí podemos vislumbrar cierta causa. Es a partir del conjunto de esos momentos, en que las emociones no alcanzan para describir nuestra conmoción, que podemos construir nuestro destino. Son esas experiencias, que marcan tanto nuestra vida por resultar parcialmente inefables, las que nos dan una pista para perseguir los deseos de ese niño que vive adentro nuestro.


**Desarrollo técnico, estético y conceptual**

Nuestro devenir está marcado por _“afectos”_[^2], concebidos como “aquellas intensidades corporales pre- o no-concientes que surgen de la percepción de imágenes, palabras, sonidos, etc”[^3]. Son un fenómeno que desborda nuestra conciencia. No hay manera de explicarlos cabalmente. Las emociones, como los símbolos culturales que son, tratan de abordarlos comunicativamente, pero es ese abordaje lo que las aleja de definirlos. 


_“Causa y Afecto en Gmaj”_ refleja esta idea de los afectos y la búsqueda por propósito, mostrando una obra que nunca permanece estática.<br>
Simulando el esbozo sin fin de algún niño, representa esos afectos que, mediante movimiento, dan lugar al cambio, a la vida, con el dibujo imparable de líneas irregulares en trazado y grosor. Estas, con su apariencia caótica similar a la de un garabato, remiten a esa incapacidad de traducir nuestras sensaciones; acompañada de una despreocupación en explicarlas, que lleva esa fachada color pastel de algún set de lápices encontrado por ahí. “Para crear al mundo no se necesitan aparatos de gran sofisticación; lo fundamental es no perder la inocencia y la imaginación inherentes al pensamiento y comportamiento infantil”, mensaje de Fillou (referente del movimiento fluxus)[^4].<br><br>
La propuesta estética de la obra trae a cuentas al fenómeno fluxus, desde su indefinición, espontaneidad y fusión de medios; centrandose en lo desconcertante. Así, se termina gestando una sucesión acústico-visual de arpegios en escala de sol mayor, que asedian a las formas mostradas en el lienzo. El ambiente sonoro refuerza lo inarticulado e indómito de los afectos, reproduciendo los acordes de manera aleatoria cada cinco segundos. Además, cuenta con la posibilidad de detenerlos provisoriamente presionando “p”, o seguir generandolos en superposición con “a“, incluso regular su volumen con la rueda del mouse —interacciones posibles gracias al uso de funciones de usuario de `p5.js` .<br><br>
Volviendo a los trazos desprolijos, se utilizó un algoritmo iterativo para producirlos. Este genera conjuntos de puntos sin demasiada cohesión, utilizando ["ruido de perlin"](https://es.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-noise/a/perlin-noise). Una vez calculado, cada grupo es conectado formando una línea, que recorre las distancias entre sus partes.<br> 
Mostrando así, que los actos promovidos por los afectos de nuestra alma, van dejando un residuo (los puntos) que, a pesar de no distinguirse (por el trazado de la línea), está ahí y da una forma única e irrepetible a nuestra experiencia; que luego va a afectar en nuestra percepción del mundo, mutando a nuestro niño, nuestra causa, de una manera particular. Podríamos hasta relacionarlo con Cesar Aira desde el concepto de lo _"irreproducible"_: “La realidad concreta de la obra estaría conformada por la obra misma y el tiempo que envolvió su concepción y ejecución, entendiendo por este tiempo el transcurrir histórico, en el que cada uno de sus puntos es único e irrepetible, y por ello irreproducible.”[^5]<br>

La propuesta es concisa: dejarse llevar. Solo así, divagando entre la trayectoria, los afectos van a asaltar nuestro cuerpo. Su margen excedente a la percepción, abrirá los senderos para proyectar nuestros deseos: queda en nosotros recorrerlos y descubrir dónde está nuestra causa.


[^1]: Solana, M. (2020). Afectos y emociones. ¿una distinción útil? Revista Diferencia(s), N. 10, pp. 29-40.


[^2]: Según la interpretación que hace Mariela Solana de “Parables for the Virtual, 2002 (Brian Massumi)”. Solana, M. (2020). Afectos y emociones. ¿una distinción útil? Revista Diferencia(s), N. 10, pp. 29-40.

[^3]:Solana, M. (2020). Afectos y emociones. ¿una distinción útil? Revista Diferencia(s), N. 10, pp. 29-40

[^4]:FRICKE, Christiane. (1999). _"Nuevos Medios"_ en AAVV. Arte de siglo XX. Vol. II. München: Taschen.

[^5]:AIRA, César. ([2013], 2016). “Sobre el arte contemporáneo” en Sobre el arte contemporáneo. Buenos Aires: Literatura Random House, pp. 11-56. (DAA: 1:02m).

**Bibliografía**

[Solana, M. (2020). Afectos y emociones. ¿una distinción útil? Revista Diferencia(s), N. 10, pp. 29-40.](https://ri.conicet.gov.ar/handle/11336/156877)

AIRA, César. ([2013], 2016). “Sobre el arte contemporáneo” en Sobre el arte contemporáneo. Buenos Aires: Literatura Random House, pp. 11-56. (DAA: 1:02m)

FRICKE, Christiane. (1999). _"Nuevos Medios"_ en AAVV. Arte de siglo XX. Vol. II. München: Taschen.

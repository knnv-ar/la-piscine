let giros = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch')
}

function draw() {
  background(175);
  //stroke(150);
  noFill();
  let mod = width / 5;
  rectMode(CENTER);

  for (let a = 0; a < 5; a++) {
    for (let b = 0; b < 5; b++) {
      let x = mod / 2 + mod * a;
      let y = mod / 2 + mod * b;

      push();
      translate(x, y);
      rotate(giros);

      for (let c = 0; c < 10; c++) {
        let tam = map(c, 0, 10, mod, 1);

        rect(0, 0, tam, tam);
      }

      pop();
    }
  }

  giros += 0.001;
}

/*Título de la Obra: Incompleta
Año: 2023
Autora: Natalia Argañaraz
Enlace a la obra: https://editor.p5js.org/planetanati/sketches/pDA6qREsD 
Enlace a GitHub: https://github.com/nati-arga/ 

// La apreciación y la interpretación de una obra de arte pueden variar según quien la observe, cada persona aporta su perspectiva individual y sus propias experiencias al encuentro con la misma. Lo que permite que ésta cobre diferentes significados y resonancias para cada espectador. 
Un espectador sin una obra que apreciar estará vacío. Una obra de arte sin una mirada contemplativa estará incompleta, carente de alma. // 
Desde diferentes perspectivas en "La obra más allá del objeto" de Nathalie Heinich y "El medio es el mensaje" de Marshall McLuhan, se aborda la relación entre la obra de arte y su medio de expresión.
Heinich, nos habla de la noción de que el arte contemporáneo trasciende la idea tradicional de la obra de arte como un objeto físico y tangible. Según Heinich, el arte contemporáneo se centra cada vez más en la experiencia, el proceso y las ideas que subyacen en la obra, en lugar de enfocarse únicamente en el resultado final. Esta perspectiva cuestiona los límites y las convenciones del arte, desafiando la idea de que una obra de arte debe ser un objeto concreto y tangible.
Por otro lado, McLuhan en su artículo "El medio es el mensaje" enfatiza cómo los medios de comunicación y las tecnologías que utilizamos para transmitir información influyen en la forma en que percibimos el mundo. Según McLuhan, el medio en sí mismo tiene un impacto profundo en nuestra experiencia y comprensión de la realidad, más allá del contenido específico que se transmite a través de él. McLuhan argumenta que debemos prestar atención a cómo los medios afectan nuestra percepción y participación en la sociedad.
Ahora bien, el arte digital, al ser creado y experimentado a través de medios digitales, desafía la noción tradicional de la obra de arte como objeto físico y material. El énfasis recae en la experiencia interactiva, en el uso de tecnologías y en la participación activa del espectador. Esto está en línea con la idea de Heinich de que el arte contemporáneo se centra en la experiencia y el proceso.
Además, el arte digital también encarna la idea de McLuhan de que el medio en sí mismo es un mensaje. ¿Acaso las características únicas de los medios digitales, como la interactividad, la inmersión y la posibilidad de manipular la información en tiempo real, no influyen en cómo percibimos y experimentamos el arte? El medio digital proporciona nuevas formas de expresión y comunicación artística, y esto tiene un impacto en la forma en que entendemos y nos relacionamos con las obras de arte.
La obra que seleccioné para representar es la de Vera Molnar, la obra se llama, "1% de desorden" es una obra de arte generativo. Vera Molnar es una reconocida artista pionera en el arte computacional, y esta obra se caracteriza por su enfoque algorítmico y su generación automática, donde el azar y la programación se combinan para crear una composición visual en constante evolución.
Una vez más se destaca el papel del medio y la tecnología en la creación y apreciación del arte. Vera Molnar utiliza algoritmos y programación para generar su obra, lo que resalta la importancia del medio digital en su expresión artística. Al igual que el arte digital en general, "1% de desorden" desafía la noción tradicional de la obra de arte como un objeto físico y tangible, ya que su naturaleza generativa y en constante cambio enfatiza la experiencia y el proceso más que el resultado final. 
“Incompleta”, es una nueva versión de la obra, que cautiva a través de su estructura repetitiva e iterativa del código, que asegura una repetición continua de las figuras, creando una experiencia visualmente estimulante y en constante cambio. Este efecto puede generar una sensación hipnótica o meditativa, atrayendo a los espectadores a contemplar el movimiento de los cuadros. Cada individuo tiene la oportunidad de descubrir su propio significado y apreciar los patrones y movimientos únicos que emergen.
Al sumergirnos en la contemplación, me gustaría invitarnos a reflexionar sobre la relación entre la humanidad y la tecnología, así como sobre el papel de la programación como una forma de expresión creativa. 
La invitación a reflexionar enriquece aún más nuestra experiencia al contemplar esta obra, ya que nos llama a explorar la intersección entre la creatividad humana y las posibilidades que la tecnología nos ofrece. Es un recordatorio de que la programación puede ser un medio artístico y una herramienta para expresar ideas y emociones, fomentando una mayor apreciación de la belleza que se puede encontrar en la unión entre el arte y la tecnología.

Bibliografía:
- HEINICH, Nathalie. ([2014], 2017). “La obra más allá del objeto” en El
paradigma del arte contemporáneo: estructuras de una revolución artística.
Madrid: Casimiro, pp. 95-119. (DAA: 39m)
- MCLUHAN, Marshall. ([1964], 1997). “El medio es el mensaje” en Comprender
los medios de comunicación: las extensiones del ser humano. Barcelona: Paidós,
pp. 29-42. (DAA: 46m)*/
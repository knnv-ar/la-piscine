import re

with open('statement.mdx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Spanish structure
es_original = """<Language code="es">
Éter es una imagen generativa dinámica"""

es_replacement = """<Language code="es">
- **Título de la obra:** Éter
- **Año:** 2026
- **Autor/a:** Andre Palacios
- **Enlace a la obra:** [Reemplazar con enlace a la obra]

**Breve descripción de la obra:**
Éter es una imagen generativa dinámica"""

content = content.replace(es_original, es_replacement)

# Fix English structure
en_original = """<Language code="en">
Éter (Ether) is a dynamic generative image"""

en_replacement = """<Language code="en">
- **Title of the work:** Éter
- **Year:** 2026
- **Author:** Andre Palacios
- **Link to the work:** [Replace with link to the work]

**Brief description of the work:**
Éter (Ether) is a dynamic generative image"""

content = content.replace(en_original, en_replacement)

# Fix Spanish bibliography
bib_es_old = """- BREA, José Luis. (2002). _"La era postmedia. Acción comunicativa, prácticas (post)artísticas y dispositivos neomediales"_. Salamanca: CASA Editorial.
- BREA, José Luis. (2008). _"Redefinición de las prácticas artísticas (s. 21)"_ en El tercer umbral. Estatuto de las prácticas artísticas en la era del capitalismo cultural. Murcia: CENDEAC, pp. 106-113."""

bib_es_new = """- BREA, José Luis. (2008). “Redefinición de las prácticas artísticas (s. 21)” en *El tercer umbral. Estatuto de las prácticas artísticas en la era del capitalismo cultural*. Murcia: CENDEAC, pp. 106-113.
- BREA, José Luis. (2002). “Breve (y desordenado) antiglosario –o diccionario de tópicos– sobre el arte electrónico” en *La era postmedia. Acción comunicativa, prácticas (post)artísticas y dispositivos neomediales*. Salamanca: CASA Editorial, pp. 4-8."""

content = content.replace(bib_es_old, bib_es_new)

# Fix heading Breve biografía
content = content.replace("**Breve biografía**", "**Breve biografía del autor/a**")
content = content.replace("**Brief resume**", "**Brief biography of the author**")

with open('statement.mdx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Modification complete.")

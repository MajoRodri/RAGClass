/* ============================================================
   TABLETA SHEIKAH · RAG MASTERCLASS — i18n.js
   Spanish ↔ English language toggle (no external libraries)
   ============================================================ */

const TRANSLATIONS = {
  es: {
    /* ── Navigation ── */
    "nav.home":        "Inicio",
    "nav.hybrid":      "Híbrida",
    "nav.reranking":   "Reranking",
    "nav.crag":        "CRAG",
    "nav.tradeoffs":   "Trade-offs",
    "nav.simulation":  "Simulación",
    "nav.notebook":    "Notebook",

    /* ── index.html hero ── */
    "hero.tag":        "Masterclass · Técnicas de Optimización",
    "hero.title":      "Técnicas <em>Avanzadas</em><br />de <em>RAG</em>",
    "hero.desc":       "Un sistema RAG básico falla. Aprende las tres técnicas que lo hacen infalible: <strong>Búsqueda Híbrida</strong>, <strong>Reranking</strong> y <strong>Corrective RAG</strong>.",

    /* ── index pipeline section ── */
    "pipeline.tag":         "Pipeline Completo",
    "pipeline.h2":          "El flujo de tres fases",
    "pipeline.desc":        "Cada técnica refina la anterior, convirtiendo una pregunta en una respuesta precisa y confiable.",
    "pipeline.input.num":   "INPUT",
    "pipeline.input.title": "Pregunta",
    "pipeline.input.metric":"Query del usuario",
    "pipeline.output.num":  "OUTPUT",
    "pipeline.output.title":"Respuesta",
    "pipeline.output.metric":"Precisa · Fiel",
    "pipeline.p01.metric":  "KPI: Hit Rate",
    "pipeline.p02.metric":  "KPI: MRR",
    "pipeline.p03.metric":  "KPI: Faithfulness",

    /* ── index three techniques section ── */
    "techniques.tag":   "Las Tres Técnicas",
    "techniques.h2":    "Del RAG básico al RAG infalible",
    "techniques.desc":  "Cada técnica ataca un problema específico del pipeline. Juntas, forman un sistema robusto de recuperación y generación.",
    "tc1.num":   "Fase 01 · KPI: Hit Rate",
    "tc1.title": "Búsqueda Híbrida",
    "tc1.sub":   "Dense Retrieval + BM25 + RRF",
    "tc1.body":  "Fusiona la búsqueda semántica vectorial con la búsqueda léxica exacta de BM25. Ningún documento relevante queda fuera, sin importar si la consulta usa términos técnicos, acrónimos o lenguaje natural.",
    "tc1.arrow": "Explorar →",
    "tc2.num":   "Fase 02 · KPI: MRR",
    "tc2.title": "Reranking",
    "tc2.sub":   "Cross-Encoder · Anti Lost-in-Middle",
    "tc2.body":  "Un modelo Cross-Encoder actúa como juez minucioso: toma los Top-20 documentos recuperados y los reordena con precisión quirúrgica, poniendo los más relevantes en las primeras posiciones antes de pasarlos al LLM.",
    "tc2.arrow": "Explorar →",
    "tc3.num":   "Fase 03 · KPI: Faithfulness",
    "tc3.title": "Corrective RAG",
    "tc3.sub":   "Evaluador automático · Anti-alucinaciones",
    "tc3.body":  "Añade un evaluador inteligente que clasifica el contexto recuperado como Correcto, Ambiguo o Incorrecto, y activa búsqueda web externa cuando los documentos internos no son suficientes.",
    "tc3.arrow": "Explorar →",

    /* ── index tradeoffs section ── */
    "to.tag":     "Consideraciones Avanzadas",
    "to.h2":      "Trade-offs y Retos de Implementación",
    "to.desc":    "La magia tiene un precio. Conoce los costes reales antes de desplegar en producción.",
    "to1.title":  "Chunking y Calidad de Datos",
    "to1.body":   "Garbage In, Garbage Out. Si los documentos están mal troceados o desactualizados, el mejor algoritmo solo encontrará basura más rápido.",
    "to2.title":  "Latencia",
    "to2.body":   "Cada fase añade milisegundos. CRAG puede detener el pipeline para consultar APIs externas. La precisión cero-errores tiene un coste en velocidad.",
    "to3.title":  "Coste Computacional",
    "to3.body":   "CRAG requiere un LLM-juez antes de cada respuesta, duplicando el consumo de tokens. No todas las preguntas necesitan el pipeline completo.",

    /* ── footer ── */
    "footer.text": "Tableta Sheikah · Masterclass RAG · Técnicas de Optimización",

    /* ── Breadcrumbs ── */
    "bc.home":       "Inicio",
    "bc.hybrid":     "Búsqueda Híbrida",
    "bc.reranking":  "Reranking",
    "bc.crag":       "CRAG",
    "bc.tradeoffs":  "Trade-offs",
    "bc.notebook":   "Notebook",

    /* ── hibrida.html ── */
    "hib.tag":    "Fase 01 · KPI: Hit Rate",
    "hib.h1":     "Búsqueda Híbrida",
    "hib.sub":    "Dense Retrieval + BM25 fusionados con RRF",
    "hib.intro":  "En un sistema RAG tradicional, solemos usar búsqueda vectorial (Dense Retrieval). Esto transforma textos en coordenadas matemáticas (embeddings) para encontrar similitud semántica. Es excelente para entender el contexto (si buscas \"perro\", encuentra \"canino\"), pero es terrible para buscar códigos exactos, nombres propios o acrónimos.",
    "hib.s1.title":  "El Problema del RAG Naïve",
    "hib.p1.h3":     "El punto ciego de la búsqueda vectorial",
    "hib.p1.body":   "Solo la búsqueda vectorial falla cuando la consulta contiene términos técnicos exactos: nombres propios, códigos de producto, acrónimos. El vector semántico no sabe que <strong>\"JWT\"</strong> es diferente de <strong>\"token de autenticación\"</strong>. Ambos conceptos pueden estar cerca en el espacio semántico, pero en muchos contextos técnicos la diferencia es crítica y la búsqueda vectorial no puede distinguirlos con exactitud léxica.",
    "hib.s2.title":  "Los Dos Motores",
    "hib.dense.h3":  "Búsqueda Densa (Vectorial)",
    "hib.dense.p":   "Encuentra documentos por <strong>significado y contexto</strong>. Transforma tanto la consulta como los documentos en vectores de alta dimensión usando un modelo de embeddings, y calcula la similitud mediante distancia de coseno.",
    "hib.dense.mec": "Modelo de embeddings + similitud coseno",
    "hib.dense.str": "Lenguaje natural, paráfrasis, sinónimos, contexto semántico",
    "hib.dense.wk":  "Términos técnicos exactos, códigos, acrónimos, nombres propios",
    "hib.sparse.h3": "Búsqueda Dispersa (Lexical / BM25)",
    "hib.sparse.p":  "Busca <strong>coincidencias exactas de palabras clave</strong>, como el Google clásico. Utiliza el algoritmo TF-IDF mejorado (BM25) que pondera la frecuencia de términos y la longitud del documento para calcular relevancia.",
    "hib.sparse.mec":"TF-IDF mejorado (Best Match 25)",
    "hib.sparse.str":"Nombres propios, códigos, jerga técnica, coincidencias exactas",
    "hib.sparse.wk": "No entiende sinónimos ni contexto semántico",
    "ir.mechanism":  "Mecanismo",
    "ir.strength":   "Fortaleza",
    "ir.weakness":   "Debilidad",
    "hib.s3.title":  "Fusión con RRF",
    "hib.rrf.h3":    "Reciprocal Rank Fusion (RRF)",
    "hib.rrf.body":  "La clave está en cómo se <strong>combinan los rankings</strong> de ambos motores de búsqueda. No basta con mezclar los resultados; hay que fusionarlos de forma inteligente. RRF es el algoritmo estándar de la industria para este propósito.",
    "hib.rrf.how":   "<strong>Cómo funciona:</strong> Combina los rankings de ambos motores. Cada documento recibe puntos según su posición en cada lista. Un documento que aparece bien posicionado en <em>ambas</em> listas obtiene la puntuación más alta. La constante <strong>k = 60</strong> suaviza el impacto de los documentos en las primeras posiciones, evitando que un solo motor domine el resultado final. El ganador es el documento que resulta relevante desde las dos perspectivas.",
    "hib.k60.h3":    "¿Por qué k = 60?",
    "hib.k60.body":  "La constante de suavizado <strong>k = 60</strong> es el valor empírico estándar establecido en la literatura de Information Retrieval. Evita que los documentos en posición 1 reciban una ventaja desproporcionada (1/1 = 1.0) frente a los que están en posición 2 (1/2 = 0.5). Con k = 60, la diferencia se suaviza: posición 1 → 1/61 ≈ 0.016, posición 2 → 1/62 ≈ 0.016. Esto hace que el ranking sea más robusto y que los documentos consistentemente buenos en ambas listas sean los ganadores claros.",
    "hib.zelda.lbl": "⊙ Analogía Sheikah",
    "hib.zelda.p":   "Link está buscando un santuario oculto. Si usa solo el Sensor Sheikah clásico (Búsqueda Dispersa), el sensor pitará solo si está parado exactamente frente a la puerta del santuario, pero no le dirá cómo llegar. Si usa el mapa de rumores (Búsqueda Densa), sabrá que \"hay un santuario en la montaña nevada\", pero sin ubicación exacta. La Búsqueda Híbrida es usar ambos a la vez: Link sabe el área general por el significado (la montaña) y el sensor pita al detectar la señal exacta (la puerta). No hay forma de perderse.",
    "hib.kpi.h3":    "Hit Rate (Tasa de Acierto)",
    "hib.kpi.lbl1":  "Definición Técnica",
    "hib.kpi.p1":    "Mide el porcentaje de veces que el documento correcto aparece en <strong>cualquier lugar</strong> dentro de los resultados recuperados (Top K). La Búsqueda Híbrida debe acercarlo al 100%, asegurando que no se pierdan documentos por usar palabras clave equivocadas. Un Hit Rate del 95% significa que en 95 de cada 100 consultas, el documento correcto está en algún lugar del Top K devuelto, independientemente de en qué posición esté.",
    "hib.kpi.lbl2":  "Versión Sheikah",
    "hib.kpi.p2":    "¿Tiene Link flechas en su alforja, sí o no? No importa si están escondidas en el fondo de la mochila, lo importante es que el juego las encontró y las trajo a la memoria. Si la respuesta es \"sí, las tiene\", el Hit Rate marcó un punto. Este es el indicador que mide la Búsqueda Híbrida: no importa dónde estén los documentos, lo importante es que estén disponibles.",
    "hib.nav.next":  "Siguiente: Reranking →",

    /* ── reranking.html ── */
    "rer.tag":    "Fase 02 · KPI: MRR",
    "rer.h1":     "Reranking",
    "rer.sub":    "Cross-Encoder · Eliminando el efecto \"Lost in the Middle\"",
    "rer.intro":  "Cuando la base de datos devuelve los 20 mejores documentos (el Top K), estos vienen ordenados por la puntuación del buscador, hecha con modelos rápidos y poco precisos (Bi-encoders) por cuestiones de rendimiento. Tener el documento correcto en la posición 18 de 20 es casi tan malo como no tenerlo: el LLM lo ignorará.",
    "rer.s1.title":  "El Problema: Lost in the Middle",
    "rer.litm.body": "<strong>El efecto \"Lost in the Middle\":</strong> Si le pasamos 20 documentos desordenados al LLM, sufrirá de este fenómeno: la IA tiende a olvidar lo que está en medio del texto y solo presta atención al principio y al final. Esto significa que si el documento más relevante cae en las posiciones centrales del contexto, el LLM lo procesará con menor atención y generará una respuesta de menor calidad o directamente incorrecta. Tener el documento correcto en la posición 18 de 20 es casi tan malo como no tenerlo en absoluto.",
    "rer.why.h3":    "¿Por qué ocurre esto?",
    "rer.why.body":  "Los modelos de lenguaje grandes tienen un sesgo posicional conocido como \"recency bias\" y \"primacy bias\": prestan más atención al inicio y al final del contexto proporcionado. Los documentos en las posiciones intermedias de un contexto largo reciben, estadísticamente, menos peso en el mecanismo de atención del transformer. El Reranking resuelve esto asegurando que los documentos más relevantes siempre estén en las primeras posiciones, donde el LLM los procesa con mayor fidelidad.",
    "rer.s2.title":  "Bi-Encoder vs Cross-Encoder",
    "rer.bi.h3":     "Bi-Encoder (Búsqueda Inicial)",
    "rer.bi.p":      "Codifica la consulta y el documento de forma <strong>separada e independiente</strong>. Genera un vector para la consulta y vectores pre-calculados para los documentos, luego calcula la similitud con una simple operación de producto escalar o coseno.",
    "rer.bi.li1":    "<strong>Velocidad:</strong> Muy rápido, permite indexar millones de documentos porque los vectores se calculan una sola vez.",
    "rer.bi.li2":    "<strong>Interacción:</strong> Superficial, la consulta y el documento no se \"ven\" mutuamente durante la codificación.",
    "rer.bi.li3":    "<strong>Uso:</strong> Recuperación inicial del Top K (primeras decenas de documentos candidatos).",
    "rer.bi.li4":    "<strong>Limitación:</strong> La precisión del ranking es moderada; el orden no es perfectamente fiable.",
    "rer.ce.h3":     "Cross-Encoder (Reranker)",
    "rer.ce.p":      "Recibe la consulta y el documento <strong>juntos como una sola entrada concatenada</strong>. El modelo procesa ambos textos simultáneamente, permitiendo una interacción profunda entre cada token de la consulta y cada token del documento.",
    "rer.ce.li1":    "<strong>Velocidad:</strong> Lento, no es escalable para indexar millones de documentos, solo para candidatos reducidos.",
    "rer.ce.li2":    "<strong>Interacción:</strong> Profunda, el modelo entiende la relación exacta entre pregunta y documento.",
    "rer.ce.li3":    "<strong>Uso:</strong> Reordenar el Top K de candidatos (típicamente Top 20 → Top 3-5).",
    "rer.ce.li4":    "<strong>Precisión:</strong> Score de relevancia mucho más preciso que el Bi-Encoder.",
    "rer.s3.title":  "La Estrategia de Dos Etapas",
    "rer.judge.h3":  "El juez minucioso",
    "rer.judge.body":"El Reranking introduce un modelo especializado (Cross-encoder) que actúa como un <strong>juez minucioso</strong>. No busca en la base de datos; simplemente toma esos 20 documentos y la pregunta del usuario, y los evalúa cruzadamente, recalculando su relevancia exacta. El resultado: reordena la lista, poniendo los 3 o 4 documentos más perfectos hasta arriba. El LLM entonces solo necesita leer esos pocos documentos de alta calidad, evitando el ruido y el efecto \"Lost in the Middle\".",
    "rer.key.body":  "<strong>La clave del pipeline en dos etapas:</strong> El Bi-Encoder se usa primero porque es rápido y puede filtrar de millones a decenas de candidatos en milisegundos. El Cross-Encoder se usa después porque es preciso pero lento, y ya solo tiene que evaluar 20 documentos, no millones. Esta combinación logra el mejor equilibrio entre velocidad y precisión del sistema.",
    "rer.zelda.lbl": "⊙ Analogía Sheikah",
    "rer.zelda.p":   "Tras derrotar a un campamento de Bokoblins, Link recoge un montón de armas del suelo a toda prisa. Su alforja está llena y desordenada. En el fondo de la bolsa quedó la Espada Maestra, y arriba tiene un garrote de madera a punto de romperse. El Reranking es presionar el botón de \"Auto-ordenar Inventario\". El sistema pausa un segundo, evalúa el poder y durabilidad de todo lo que recogió, y pone las mejores armas en las primeras casillas de acceso rápido, enviando la basura al fondo para que Link no la use por error en la batalla.",
    "rer.kpi.h3":    "MRR (Mean Reciprocal Rank)",
    "rer.kpi.lbl1":  "Definición Técnica",
    "rer.kpi.p1":    "Evalúa en qué posición quedó el <strong>primer documento relevante</strong>. Se calcula con el inverso de la posición:",
    "rer.kpi.p2":    "Un MRR bajo significa que el LLM se perderá leyendo basura antes de llegar a la respuesta correcta. El Reranking transforma un Hit Rate alto (el documento correcto existe en el Top 20) en un MRR alto (el documento correcto está en posición 1 o 2). Sin Reranking, puedes tener un Hit Rate del 95% pero un MRR de 0.15, tienes los documentos pero en el orden equivocado.",
    "rer.kpi.lbl2":  "Versión Sheikah",
    "rer.kpi.p3":    "Link tiene medio corazón de vida y un Centaleón le ataca. Abre el menú para curarse. El MRR mide qué tan rápido encuentra la poción. Si la poción roja está en la ranura 1 (MRR = 1.0), se cura al instante. Si está en la ranura 20 (MRR = 0.05), pierde 10 segundos scrolleando y el monstruo lo elimina. El Reranking pone la poción en la ranura 1: asegura que lo más importante esté siempre a mano, en el momento crítico.",
    "rer.nav.prev":  "← Búsqueda Híbrida",
    "rer.nav.next":  "Siguiente: CRAG →",

    /* ── crag.html ── */
    "crag.tag":   "Fase 03 · KPI: Faithfulness",
    "crag.h1":    "Corrective RAG (CRAG)",
    "crag.sub":   "El escudo anti-alucinaciones",
    "crag.intro": "Incluso con Búsqueda Híbrida y Reranking, a veces la base de datos interna simplemente no tiene la respuesta correcta, o los documentos recuperados están obsoletos. En el RAG tradicional, el LLM intentaría responder de todos modos usando esos documentos inútiles, provocando una alucinación, una respuesta coherente pero completamente falsa.",
    "crag.s1.title":    "Cómo Funciona CRAG",
    "crag.eval.h3":     "El evaluador automático",
    "crag.eval.body":   "CRAG añade un <strong>evaluador automático</strong> antes de generar la respuesta final. Este evaluador, generalmente un LLM especializado actuando como juez, analiza la relación entre la pregunta del usuario y los documentos recuperados, clasificando el contexto recuperado en tres estados posibles antes de decidir qué hacer a continuación.",
    "crag.correct.title":  "✓ CORRECTO",
    "crag.correct.body":   "Los documentos recuperados responden correctamente la pregunta del usuario. El contexto es relevante, actualizado y fiable.",
    "crag.correct.action": "→ Refinar y pasar directamente al LLM",
    "crag.incorrect.title":"✗ INCORRECTO",
    "crag.incorrect.body": "Los documentos no sirven, están desactualizados o son completamente irrelevantes para la pregunta formulada.",
    "crag.incorrect.action":"→ Bloquear contexto + activar búsqueda web externa",
    "crag.ambiguous.title":"~ AMBIGUO",
    "crag.ambiguous.body": "El contexto tiene algo de información útil, pero no toda la necesaria. La respuesta sería incompleta con solo los documentos internos.",
    "crag.ambiguous.action":"→ Combinar documentos internos + búsqueda web",
    "crag.s2.title":    "Pipeline CRAG Completo",
    "crag.flow.h3":     "El flujo de decisión",
    "crag.flow.body":   "El evaluador de CRAG actúa como un guardián inteligente antes del LLM generador. Su trabajo no es producir la respuesta final, sino garantizar que quien la produzca (el LLM) tenga el mejor contexto posible. Puede conectarse a herramientas de búsqueda web como <strong>Tavily</strong> o <strong>SerpAPI</strong> cuando los documentos internos fallan.",
    "crag.refine.h3":   "Refinar (refine)",
    "crag.refine.body": "Cuando los documentos son útiles (CORRECTO o AMBIGUO), CRAG también aplica un paso de <strong>refinamiento</strong>: elimina fragmentos irrelevantes dentro de los documentos, comprime el contexto y extrae solo las partes más pertinentes a la pregunta. Esto reduce el ruido antes de pasarlo al LLM generador.",
    "crag.web.h3":      "Búsqueda Web Externa",
    "crag.web.body":    "Cuando CRAG determina que los documentos son INCORRECTOS o AMBIGUOS, activa una búsqueda web en tiempo real. Herramientas como <strong>Tavily AI Search</strong> o <strong>SerpAPI</strong> devuelven resultados actualizados de la web, que se usan como contexto alternativo o complementario para generar la respuesta final sin alucinaciones.",
    "crag.zelda.lbl":   "⊙ Analogía Sheikah",
    "crag.zelda.p":     "Link va a enfrentarse a un centaleón de fuego. Según sus \"apuntes\" (el contexto recuperado), saca una espada de madera y un escudo de madera para luchar. Justo antes de saltar a la batalla, el hada Navi (CRAG) analiza la situación y grita: \"¡Hey, Listen! Tu equipo de madera se va a quemar al instante\". Navi califica la estrategia de Link como \"Incorrecta\", le bloquea el uso de la madera y abre automáticamente la guía de monstruos para indicarle que debe usar equipo de hielo. Navi corrigió el error fatal antes de que ocurriera.",
    "crag.kpi.h3":   "Faithfulness (Fidelidad) / Ausencia de Alucinaciones",
    "crag.kpi.lbl1": "Definición Técnica",
    "crag.kpi.p1":   "Mide si la respuesta final del LLM está <strong>estrictamente basada en el contexto proporcionado</strong>, sin inventar datos. Un Faithfulness de 1.0 significa que cada afirmación en la respuesta puede ser rastreada y verificada en los documentos de contexto. CRAG impacta directamente aquí al desechar documentos incorrectos antes de que el LLM los lea: si el LLM nunca ve contexto incorrecto, no puede alucinar a partir de él. Si el Faithfulness sube, significa que CRAG está actuando correctamente como filtro y el modelo ya no inventa respuestas.",
    "crag.kpi.lbl2": "Versión Sheikah",
    "crag.kpi.p2":   "El Rey de Hyrule le pregunta a la Tableta Sheikah cómo derrotar a Ganon. La tableta dice: \"Lanzándole gallinas\" (una alucinación). El Faithfulness mide qué tan apegada a la historia real es la respuesta. CRAG detecta que la táctica de las gallinas es mentira, borra ese dato, busca en la enciclopedia hyliana y responde correctamente: \"Con las Flechas de Luz\". Un Faithfulness de 1.0 = la Tableta Sheikah nunca miente.",
    "crag.nav.prev": "← Reranking",
    "crag.nav.next": "Siguiente: Trade-offs →",

    /* ── tradeoffs.html ── */
    "tro.tag":   "Consideraciones Avanzadas",
    "tro.h1":    "Trade-offs y Retos de Implementación",
    "tro.sub":   "La magia tiene un precio",
    "tro.intro": "Búsqueda Híbrida, Reranking y CRAG mejoran drásticamente la calidad de un sistema RAG, pero ninguna mejora es gratuita. Cada técnica añade latencia, coste de infraestructura o complejidad de mantenimiento. Antes de implementar cualquiera de ellas, hay que entender exactamente qué se gana y qué se sacrifica.",
    "tro.s1.title":    "Chunking y Calidad de Datos",
    "tro.s1.tag":      "Garbage In, Garbage Out",
    "tro.chunk.h3":    "El problema del troceado",
    "tro.chunk.body":  "Antes de que la Búsqueda Híbrida pueda actuar, los documentos originales (PDFs, manuales, bases de datos) deben ser cortados en pedazos más pequeños llamados <strong>chunks</strong> (fragmentos). Este proceso parece trivial pero es crítico: si cortas los párrafos por la mitad rompiendo las frases, o si la base de datos está llena de documentos desactualizados, de nada servirá tener el mejor algoritmo.",
    "tro.bad.h3":   "Chunking Deficiente",
    "tro.bad.body": "Cortar a tamaño fijo sin respetar la estructura del texto rompe el significado. Una frase a mitad de párrafo pierde su contexto y se vuelve inútil o engañosa para el sistema de recuperación.",
    "tro.old.h3":   "Datos Desactualizados",
    "tro.old.body": "Una base de datos con documentos del año pasado puede responder con información obsoleta con total confianza. El sistema no sabe que los datos están vencidos; los recupera y los usa como si fueran correctos.",
    "tro.good.h3":  "Buenas Prácticas",
    "tro.good.body":"Chunking semántico respetando párrafos, con overlap controlado entre chunks, y mantenimiento regular de la base de datos con versiones y fechas de vigencia de cada documento.",
    "tro.cascade.body": "<strong>El efecto cascada:</strong> La Búsqueda Híbrida simplemente encontrará información basura más rápido. El Reranking pondrá la basura más brillante hasta arriba. Y el LLM te dará una respuesta perfectamente estructurada... pero inútil. Ninguna técnica avanzada puede compensar datos de entrada de mala calidad.",
    "tro.z1.lbl":  "⊙ Analogía Sheikah",
    "tro.z1.p":    "Link usa la Cámara Sheikah para registrar monstruos en su Enciclopedia. Si Link le toma una foto borrosa a una piedra pensando que es un monstruo (mal chunking / malos datos), el sensor de la tableta no servirá de nada. Por más avanzado que sea el radar, te guiará hacia una piedra inútil porque la información base estaba mal desde el principio. Garbage In, Garbage Out es la primera ley del desarrollo de sistemas de IA.",
    "tro.s2.title":  "Latencia",
    "tro.s2.tag":    "El Tiempo de Respuesta",
    "tro.lat.h3":    "Velocidad vs. Precisión",
    "tro.lat.body":  "En el desarrollo de software, la velocidad importa. La experiencia del usuario se degrada notablemente cuando las respuestas tardan más de 3-5 segundos. Un RAG tradicional responde casi instantáneamente. Sin embargo, en un pipeline avanzado cada capa de optimización añade latencia:",
    "tro.lat1.h3":   "Búsqueda Híbrida",
    "tro.lat1.body": "Suma <strong>milisegundos</strong> al hacer dos búsquedas en paralelo (vectorial + BM25) y luego combinar los resultados con RRF. El impacto es mínimo pero medible en sistemas de alta escala.",
    "tro.lat2.h3":   "Reranking",
    "tro.lat2.body": "Requiere pasar los textos por un modelo neuronal pesado (Cross-encoder), lo que puede tardar <strong>un par de segundos</strong>. Es el principal cuello de botella del pipeline antes de CRAG.",
    "tro.lat3.h3":   "CRAG (peor caso)",
    "tro.lat3.body": "Si decide que la información es incorrecta, tiene que detenerse, conectarse a una API externa (Google Search / Tavily), descargar los resultados y volver a leer. Es el <strong>más lento</strong> del pipeline.",
    "tro.latNote.body": "<strong>El sacrificio por tener cero alucinaciones</strong> es que el usuario tendrá que esperar más tiempo viendo un icono de \"Cargando...\". En aplicaciones de tiempo real o alto volumen, este trade-off debe ser evaluado cuidadosamente y puede requerir implementar streaming de respuestas o indicadores de progreso para mejorar la percepción de velocidad del usuario.",
    "tro.z2.lbl":  "⊙ Analogía Sheikah",
    "tro.z2.p":    "Link puede viajar ligero con una espada corta y atacar rapidísimo (RAG tradicional). Pero si decide equiparse con la armadura de hierro más pesada, un escudo gigante y un mandoble a dos manos (Pipeline Híbrido + Rerank + CRAG), estará protegido contra casi cualquier daño (cero errores), pero sus movimientos serán lentísimos y consumirán toda su barra de resistencia. La armadura completa es correcta para el boss final, no para explorar el mapa abierto.",
    "tro.s3.title":  "Coste Computacional y Económico",
    "tro.s3.tag":    "El Precio del Poder",
    "tro.cost.h3":   "El doble coste de CRAG",
    "tro.cost.body": "Evaluar si un documento es correcto (CRAG) a menudo implica hacer que un LLM (como GPT-4 o Claude) actúe como juez <strong>antes</strong> de generar la respuesta final. Esto significa que estás pagando el doble de tokens (dinero) por cada pregunta del usuario: una llamada para el juicio y otra para la respuesta. Además, mantener bases de datos vectoriales y modelos de Reranking encendidos requiere servidores con GPUs costosas.",
    "tro.infra.h3":  "Costes de Infraestructura",
    "tro.infra.li1": "<strong>Base de datos vectorial:</strong> Pinecone, Weaviate o Qdrant en producción requieren instancias dedicadas con costes mensuales fijos.",
    "tro.infra.li2": "<strong>Modelo de Reranking:</strong> Un Cross-encoder de calidad (Cohere Rerank, BGE-Reranker) requiere GPU o llamadas API por petición.",
    "tro.infra.li3": "<strong>Búsqueda web (CRAG):</strong> APIs como Tavily o SerpAPI cobran por consulta; un alto volumen puede generar facturas inesperadas.",
    "tro.tok.h3":    "Costes de Tokens (LLM)",
    "tro.tok.li1":   "<strong>CRAG judge:</strong> Cada pregunta requiere al menos una llamada LLM extra para evaluar la relevancia del contexto antes de responder.",
    "tro.tok.li2":   "<strong>Contexto ampliado:</strong> Pasar Top-20 documentos al reranker o al evaluador consume más tokens de entrada que un RAG tradicional.",
    "tro.tok.li3":   "<strong>Double billing:</strong> En el peor caso (INCORRECTO), el sistema hace: llamada de evaluación + búsqueda web + llamada de generación.",
    "tro.noAll.body":"<strong>No todas las preguntas necesitan este nivel de complejidad.</strong> Usar este pipeline para preguntar \"¿Cuál es el horario de la oficina?\" es un desperdicio de recursos. Un sistema bien diseñado implementa <em>enrutamiento inteligente</em>: preguntas simples van a un RAG ligero, preguntas complejas o de alto riesgo activan el pipeline completo.",
    "tro.opt.h3":    "Buenas Prácticas de Optimización de Costes",
    "tro.opt.p":     "Para controlar el gasto sin sacrificar calidad donde importa:",
    "tro.opt.li1":   "Usar modelos pequeños (GPT-3.5-turbo, Claude Haiku) como jueces de CRAG y reservar modelos grandes (GPT-4, Claude Sonnet/Opus) para la generación final.",
    "tro.opt.li2":   "Implementar caché de respuestas para preguntas frecuentes: si la misma pregunta ya fue respondida con alta faithfulness, reutilizar el resultado.",
    "tro.opt.li3":   "Definir umbrales de confianza: si el score del evaluador es muy alto (CORRECTO con 95%+ de confianza), saltar la búsqueda web directamente.",
    "tro.opt.li4":   "Monitorizar los costes por consulta y ajustar el Top K del retriever (pasar Top 5 en vez de Top 20 reduce el coste del Reranker significativamente).",
    "tro.z3.lbl":  "⊙ Analogía Sheikah",
    "tro.z3.p":    "Las Flechas Ancestrales son el arma más poderosa del juego; desintegran al enemigo al instante. Pero cuestan materiales rarísimos y muchísimas rupias. Usar el pipeline completo de RAG para una pregunta trivial es como gastar una Flecha Ancestral de 500 rupias para matar a un Bokoblin rojo de nivel 1. Funciona, sí, pero acabará con el presupuesto del reino rápidamente. Hay que saber cuándo usar las herramientas caras y cuándo basta con una flecha normal.",
    "tro.sum.tag":   "Resumen",
    "tro.sum.h2":    "La decisión de implementación",
    "tro.bal.h3":    "El balance correcto",
    "tro.bal.p":     "Las tres técnicas forman un pipeline que maximiza la calidad de las respuestas, pero cada organización debe evaluar qué nivel de complejidad justifica su caso de uso específico. No hay una respuesta única correcta.",
    "tro.bal.li1":   "<strong>Solo Búsqueda Híbrida:</strong> Ideal para sistemas con consultas técnicas frecuentes y base de datos estable. Alto impacto, bajo coste adicional.",
    "tro.bal.li2":   "<strong>Híbrida + Reranking:</strong> El punto óptimo para la mayoría de aplicaciones empresariales. Mejora significativa del MRR con latencia controlada.",
    "tro.bal.li3":   "<strong>Pipeline Completo (+ CRAG):</strong> Para aplicaciones críticas donde una alucinación tiene consecuencias graves: legal, médico, financiero, regulatorio.",
    "tro.nav.prev":  "← CRAG",

    /* ── simulacion.html ── */
    "sim.tag":    "Demo Interactiva · Paso a Paso",
    "sim.h1":     "Simulación del <em>Pipeline RAG</em>",
    "sim.desc":   "Compara RAG tradicional vs pipeline avanzado en cada fase. Avanza a tu propio ritmo.",
    "sim.scenario.lbl": "Escenario ›",
    "sim.col.naive":    "✗ RAG Tradicional",
    "sim.col.advanced": "✓ RAG Avanzado",
    "sim.badge.naive":  "Sin pipeline",
    "sim.badge.adv":    "Pipeline completo",
    "sim.label.initial":"Presiona <span>\"Iniciar Simulación\"</span> para comenzar",
    "sim.btn.start":    "▶ Iniciar Simulación",
    "sim.btn.reset":    "↺ Reiniciar",
    "sim.btn.next":     "▶ Siguiente Paso",
    "sim.btn.final":    "▶ Ver resultado final",
    "sim.btn.done":     "✓ Simulación completada",

    /* ── notebook.html ── */
    "nb.tag":    "Google Colab · Ejercicio Práctico",
    "nb.h1":     "Notebook de la Masterclass",
    "nb.sub":    "RAG Avanzado · Enciclopedia Hyliana",
    "nb.intro":  "Implementa desde cero las tres técnicas del pipeline: Búsqueda Híbrida, Reranking y CRAG. Cada fase incluye código ejecutable, comentarios explicativos y zonas de experimento donde puedes cambiar parámetros y observar el impacto.",
    "nb.meta.min":   "minutos",
    "nb.meta.phases":"fases",
    "nb.meta.cells": "celdas",
    "nb.dl.btn":     "⊙ Abrir en Colab",
    "nb.dl.es":      "Abrir en Colab · Español",
    "nb.dl.en":      "Open in Colab · English",
    "nb.steps.title":"Cómo usarlo en Google Colab",
    "nb.step1":  "Haz clic en el botón para abrir el notebook en <strong>Google Colab</strong>.",
    "nb.step2":  "Ve a <em>Archivo → Guardar una copia en Drive</em> para tener tu propia versión editable.",
    "nb.step3":  "Ejecuta las celdas en orden con <strong>Shift + Enter</strong>. La primera celda instala todas las dependencias automáticamente.",
    "nb.step4":  "En las <strong>Zonas de Experimento</strong> cambia los parámetros marcados y vuelve a ejecutar para ver cómo cambian los resultados.",
    "nb.nav.prev":   "← Simulación",

    /* ── index KPI strip (added via JS, not static text – kept for reference) ── */
    "kpi.techniques": "Técnicas cubiertas",
    "kpi.kpis":       "KPIs medidos",
    "kpi.phases":     "Fases del pipeline",
  },

  en: {
    /* ── Navigation ── */
    "nav.home":        "Home",
    "nav.hybrid":      "Hybrid",
    "nav.reranking":   "Reranking",
    "nav.crag":        "CRAG",
    "nav.tradeoffs":   "Trade-offs",
    "nav.simulation":  "Simulation",
    "nav.notebook":    "Notebook",

    /* ── index.html hero ── */
    "hero.tag":        "Masterclass · Optimization Techniques",
    "hero.title":      "Advanced <em>RAG</em><br />Techniques",
    "hero.desc":       "A basic RAG system fails. Learn the three techniques that make it bulletproof: <strong>Hybrid Search</strong>, <strong>Reranking</strong>, and <strong>Corrective RAG</strong>.",

    /* ── index pipeline section ── */
    "pipeline.tag":         "Full Pipeline",
    "pipeline.h2":          "The three-phase flow",
    "pipeline.desc":        "Each technique refines the previous one, turning a question into a precise and reliable answer.",
    "pipeline.input.num":   "INPUT",
    "pipeline.input.title": "Query",
    "pipeline.input.metric":"User query",
    "pipeline.output.num":  "OUTPUT",
    "pipeline.output.title":"Answer",
    "pipeline.output.metric":"Precise · Faithful",
    "pipeline.p01.metric":  "KPI: Hit Rate",
    "pipeline.p02.metric":  "KPI: MRR",
    "pipeline.p03.metric":  "KPI: Faithfulness",

    /* ── index three techniques section ── */
    "techniques.tag":   "The Three Techniques",
    "techniques.h2":    "From Basic RAG to Bulletproof RAG",
    "techniques.desc":  "Each technique targets a specific problem in the pipeline. Together, they form a robust retrieval and generation system.",
    "tc1.num":   "Phase 01 · KPI: Hit Rate",
    "tc1.title": "Hybrid Search",
    "tc1.sub":   "Dense Retrieval + BM25 + RRF",
    "tc1.body":  "Fuses vector semantic search with BM25 exact lexical search. No relevant document is left out, regardless of whether the query uses technical terms, acronyms, or natural language.",
    "tc1.arrow": "Explore →",
    "tc2.num":   "Phase 02 · KPI: MRR",
    "tc2.title": "Reranking",
    "tc2.sub":   "Cross-Encoder · Anti Lost-in-Middle",
    "tc2.body":  "A Cross-Encoder model acts as a meticulous judge: takes the Top-20 retrieved documents and reorders them with surgical precision, placing the most relevant ones in the top positions before passing them to the LLM.",
    "tc2.arrow": "Explore →",
    "tc3.num":   "Phase 03 · KPI: Faithfulness",
    "tc3.title": "Corrective RAG",
    "tc3.sub":   "Automatic evaluator · Anti-hallucination",
    "tc3.body":  "Adds an intelligent evaluator that classifies retrieved context as Correct, Ambiguous, or Incorrect, and activates external web search when internal documents are insufficient.",
    "tc3.arrow": "Explore →",

    /* ── index tradeoffs section ── */
    "to.tag":     "Advanced Considerations",
    "to.h2":      "Trade-offs and Implementation Challenges",
    "to.desc":    "Magic has a price. Know the real costs before deploying to production.",
    "to1.title":  "Chunking and Data Quality",
    "to1.body":   "Garbage In, Garbage Out. If documents are poorly chunked or outdated, the best algorithm will only find garbage faster.",
    "to2.title":  "Latency",
    "to2.body":   "Each phase adds milliseconds. CRAG can halt the pipeline to query external APIs. Zero-error precision has a speed cost.",
    "to3.title":  "Computational Cost",
    "to3.body":   "CRAG requires an LLM judge before each response, doubling token consumption. Not all questions need the full pipeline.",

    /* ── footer ── */
    "footer.text": "Sheikah Tablet · RAG Masterclass · Optimization Techniques",

    /* ── Breadcrumbs ── */
    "bc.home":       "Home",
    "bc.hybrid":     "Hybrid Search",
    "bc.reranking":  "Reranking",
    "bc.crag":       "CRAG",
    "bc.tradeoffs":  "Trade-offs",
    "bc.notebook":   "Notebook",

    /* ── hibrida.html ── */
    "hib.tag":    "Phase 01 · KPI: Hit Rate",
    "hib.h1":     "Hybrid Search",
    "hib.sub":    "Dense Retrieval + BM25 fused with RRF",
    "hib.intro":  "In a traditional RAG system, we typically use vector search (Dense Retrieval). This transforms texts into mathematical coordinates (embeddings) to find semantic similarity. It is excellent at understanding context (search for \"dog\", find \"canine\"), but terrible at searching for exact codes, proper nouns, or acronyms.",
    "hib.s1.title":  "The Naïve RAG Problem",
    "hib.p1.h3":     "The blind spot of vector search",
    "hib.p1.body":   "Vector search alone fails when the query contains exact technical terms: proper nouns, product codes, acronyms. The semantic vector does not know that <strong>\"JWT\"</strong> is different from <strong>\"authentication token\"</strong>. Both concepts may be close in semantic space, but in many technical contexts the difference is critical and vector search cannot distinguish them with lexical precision.",
    "hib.s2.title":  "The Two Engines",
    "hib.dense.h3":  "Dense Search (Vector)",
    "hib.dense.p":   "Finds documents by <strong>meaning and context</strong>. Transforms both the query and the documents into high-dimensional vectors using an embeddings model, and calculates similarity using cosine distance.",
    "hib.dense.mec": "Embeddings model + cosine similarity",
    "hib.dense.str": "Natural language, paraphrases, synonyms, semantic context",
    "hib.dense.wk":  "Exact technical terms, codes, acronyms, proper nouns",
    "hib.sparse.h3": "Sparse Search (Lexical / BM25)",
    "hib.sparse.p":  "Searches for <strong>exact keyword matches</strong>, like classic Google. Uses the improved TF-IDF algorithm (BM25) which weights term frequency and document length to calculate relevance.",
    "hib.sparse.mec":"Improved TF-IDF (Best Match 25)",
    "hib.sparse.str":"Proper nouns, codes, technical jargon, exact matches",
    "hib.sparse.wk": "Does not understand synonyms or semantic context",
    "ir.mechanism":  "Mechanism",
    "ir.strength":   "Strength",
    "ir.weakness":   "Weakness",
    "hib.s3.title":  "Fusion with RRF",
    "hib.rrf.h3":    "Reciprocal Rank Fusion (RRF)",
    "hib.rrf.body":  "The key is how the <strong>rankings are combined</strong> from both search engines. Simply mixing the results is not enough; they need to be fused intelligently. RRF is the industry-standard algorithm for this purpose.",
    "hib.rrf.how":   "<strong>How it works:</strong> Combines the rankings from both engines. Each document receives points based on its position in each list. A document that ranks well in <em>both</em> lists gets the highest score. The constant <strong>k = 60</strong> smooths the impact of documents in top positions, preventing a single engine from dominating the final result. The winner is the document that is relevant from both perspectives.",
    "hib.k60.h3":    "Why k = 60?",
    "hib.k60.body":  "The smoothing constant <strong>k = 60</strong> is the empirical standard value established in Information Retrieval literature. It prevents documents at position 1 from receiving a disproportionate advantage (1/1 = 1.0) over those at position 2 (1/2 = 0.5). With k = 60, the difference is smoothed: position 1 → 1/61 ≈ 0.016, position 2 → 1/62 ≈ 0.016. This makes the ranking more robust and consistently good documents in both lists become clear winners.",
    "hib.zelda.lbl": "⊙ Sheikah Analogy",
    "hib.zelda.p":   "Link is searching for a hidden shrine. If he uses only the classic Sheikah Sensor (Sparse Search), the sensor will beep only when he is standing exactly in front of the shrine door, but won't tell him how to get there. If he uses the rumor map (Dense Search), he'll know \"there's a shrine on the snowy mountain\", but without the exact location. Hybrid Search is using both at once: Link knows the general area by meaning (the mountain) and the sensor beeps when it detects the exact signal (the door). There is no way to get lost.",
    "hib.kpi.h3":    "Hit Rate",
    "hib.kpi.lbl1":  "Technical Definition",
    "hib.kpi.p1":    "Measures the percentage of times the correct document appears <strong>anywhere</strong> within the retrieved results (Top K). Hybrid Search should push this toward 100%, ensuring no documents are lost due to using the wrong keywords. A Hit Rate of 95% means that in 95 out of 100 queries, the correct document is somewhere in the returned Top K, regardless of its position.",
    "hib.kpi.lbl2":  "Sheikah Version",
    "hib.kpi.p2":    "Does Link have arrows in his quiver, yes or no? It doesn't matter if they're buried at the bottom of the bag, what matters is that the game found them and brought them to memory. If the answer is \"yes, he has them\", the Hit Rate scored a point. This is the indicator that Hybrid Search measures: it doesn't matter where the documents are, what matters is that they are available.",
    "hib.nav.next":  "Next: Reranking →",

    /* ── reranking.html ── */
    "rer.tag":    "Phase 02 · KPI: MRR",
    "rer.h1":     "Reranking",
    "rer.sub":    "Cross-Encoder · Eliminating the \"Lost in the Middle\" effect",
    "rer.intro":  "When the database returns the 20 best documents (Top K), they come ordered by the searcher's score, made with fast and imprecise models (Bi-encoders) for performance reasons. Having the correct document at position 18 of 20 is almost as bad as not having it: the LLM will ignore it.",
    "rer.s1.title":  "The Problem: Lost in the Middle",
    "rer.litm.body": "<strong>The \"Lost in the Middle\" effect:</strong> If we pass 20 unordered documents to the LLM, it will suffer from this phenomenon: the AI tends to forget what is in the middle of the text and only pays attention to the beginning and the end. This means that if the most relevant document falls in the central positions of the context, the LLM will process it with less attention and generate a lower quality or directly incorrect response. Having the correct document at position 18 of 20 is almost as bad as not having it at all.",
    "rer.why.h3":    "Why does this happen?",
    "rer.why.body":  "Large language models have a positional bias known as \"recency bias\" and \"primacy bias\": they pay more attention to the beginning and the end of the provided context. Documents in the middle positions of a long context receive, statistically, less weight in the transformer's attention mechanism. Reranking solves this by ensuring the most relevant documents are always in the top positions, where the LLM processes them with greater fidelity.",
    "rer.s2.title":  "Bi-Encoder vs Cross-Encoder",
    "rer.bi.h3":     "Bi-Encoder (Initial Search)",
    "rer.bi.p":      "Encodes the query and the document <strong>separately and independently</strong>. Generates a vector for the query and pre-calculated vectors for documents, then calculates similarity with a simple dot product or cosine operation.",
    "rer.bi.li1":    "<strong>Speed:</strong> Very fast, allows indexing millions of documents because vectors are calculated only once.",
    "rer.bi.li2":    "<strong>Interaction:</strong> Shallow, the query and the document do not \"see\" each other during encoding.",
    "rer.bi.li3":    "<strong>Use:</strong> Initial retrieval of Top K (first tens of candidate documents).",
    "rer.bi.li4":    "<strong>Limitation:</strong> Ranking precision is moderate; the order is not perfectly reliable.",
    "rer.ce.h3":     "Cross-Encoder (Reranker)",
    "rer.ce.p":      "Receives the query and the document <strong>together as a single concatenated input</strong>. The model processes both texts simultaneously, allowing deep interaction between each token of the query and each token of the document.",
    "rer.ce.li1":    "<strong>Speed:</strong> Slow, not scalable for indexing millions of documents, only for reduced candidates.",
    "rer.ce.li2":    "<strong>Interaction:</strong> Deep, the model understands the exact relationship between question and document.",
    "rer.ce.li3":    "<strong>Use:</strong> Reorder the Top K candidates (typically Top 20 → Top 3-5).",
    "rer.ce.li4":    "<strong>Precision:</strong> Relevance score much more precise than the Bi-Encoder.",
    "rer.s3.title":  "The Two-Stage Strategy",
    "rer.judge.h3":  "The meticulous judge",
    "rer.judge.body":"Reranking introduces a specialized model (Cross-encoder) that acts as a <strong>meticulous judge</strong>. It does not search the database; it simply takes those 20 documents and the user's question, and evaluates them cross-wise, recalculating their exact relevance. The result: it reorders the list, putting the 3 or 4 most perfect documents at the top. The LLM then only needs to read those few high-quality documents, avoiding noise and the \"Lost in the Middle\" effect.",
    "rer.key.body":  "<strong>The key to the two-stage pipeline:</strong> The Bi-Encoder is used first because it is fast and can filter from millions to dozens of candidates in milliseconds. The Cross-Encoder is used afterwards because it is precise but slow, and only needs to evaluate 20 documents, not millions. This combination achieves the best balance between speed and precision of the system.",
    "rer.zelda.lbl": "⊙ Sheikah Analogy",
    "rer.zelda.p":   "After defeating a Bokoblin camp, Link picks up a pile of weapons from the ground in a hurry. His bag is full and disorganized. At the bottom of the bag is the Master Sword, and at the top is a wooden club about to break. Reranking is pressing the \"Auto-sort Inventory\" button. The system pauses for a second, evaluates the power and durability of everything collected, and puts the best weapons in the first quick-access slots, sending the trash to the back so Link doesn't use it by mistake in battle.",
    "rer.kpi.h3":    "MRR (Mean Reciprocal Rank)",
    "rer.kpi.lbl1":  "Technical Definition",
    "rer.kpi.p1":    "Evaluates at what position the <strong>first relevant document</strong> ended up. It is calculated with the inverse of the position:",
    "rer.kpi.p2":    "A low MRR means the LLM will waste time reading garbage before reaching the correct answer. Reranking transforms a high Hit Rate (the correct document exists in Top 20) into a high MRR (the correct document is at position 1 or 2). Without Reranking, you can have a Hit Rate of 95% but an MRR of 0.15 — you have the documents but in the wrong order.",
    "rer.kpi.lbl2":  "Sheikah Version",
    "rer.kpi.p3":    "Link has half a heart of health and a Lynel attacks him. He opens the menu to heal. MRR measures how quickly he finds the potion. If the red potion is in slot 1 (MRR = 1.0), he heals instantly. If it is in slot 20 (MRR = 0.05), he loses 10 seconds scrolling and the monster eliminates him. Reranking puts the potion in slot 1: ensures the most important thing is always at hand, at the critical moment.",
    "rer.nav.prev":  "← Hybrid Search",
    "rer.nav.next":  "Next: CRAG →",

    /* ── crag.html ── */
    "crag.tag":   "Phase 03 · KPI: Faithfulness",
    "crag.h1":    "Corrective RAG (CRAG)",
    "crag.sub":   "The anti-hallucination shield",
    "crag.intro": "Even with Hybrid Search and Reranking, sometimes the internal database simply does not have the correct answer, or the retrieved documents are outdated. In traditional RAG, the LLM would try to respond anyway using those useless documents, causing a hallucination — a coherent but completely false response.",
    "crag.s1.title":    "How CRAG Works",
    "crag.eval.h3":     "The automatic evaluator",
    "crag.eval.body":   "CRAG adds an <strong>automatic evaluator</strong> before generating the final response. This evaluator, generally a specialized LLM acting as a judge, analyzes the relationship between the user's question and the retrieved documents, classifying the retrieved context into three possible states before deciding what to do next.",
    "crag.correct.title":  "✓ CORRECT",
    "crag.correct.body":   "The retrieved documents correctly answer the user's question. The context is relevant, up-to-date, and reliable.",
    "crag.correct.action": "→ Refine and pass directly to the LLM",
    "crag.incorrect.title":"✗ INCORRECT",
    "crag.incorrect.body": "The documents are useless, outdated, or completely irrelevant to the question asked.",
    "crag.incorrect.action":"→ Block context + activate external web search",
    "crag.ambiguous.title":"~ AMBIGUOUS",
    "crag.ambiguous.body": "The context has some useful information, but not all that is needed. The response would be incomplete with only the internal documents.",
    "crag.ambiguous.action":"→ Combine internal documents + web search",
    "crag.s2.title":    "Complete CRAG Pipeline",
    "crag.flow.h3":     "The decision flow",
    "crag.flow.body":   "The CRAG evaluator acts as an intelligent guardian before the generator LLM. Its job is not to produce the final response, but to ensure that the one who does (the LLM) has the best possible context. It can connect to web search tools like <strong>Tavily</strong> or <strong>SerpAPI</strong> when internal documents fail.",
    "crag.refine.h3":   "Refine (refine)",
    "crag.refine.body": "When documents are useful (CORRECT or AMBIGUOUS), CRAG also applies a <strong>refinement</strong> step: removes irrelevant fragments within documents, compresses the context and extracts only the most pertinent parts to the question. This reduces noise before passing it to the generator LLM.",
    "crag.web.h3":      "External Web Search",
    "crag.web.body":    "When CRAG determines that the documents are INCORRECT or AMBIGUOUS, it activates a real-time web search. Tools like <strong>Tavily AI Search</strong> or <strong>SerpAPI</strong> return updated results from the web, which are used as alternative or complementary context to generate the final response without hallucinations.",
    "crag.zelda.lbl":   "⊙ Sheikah Analogy",
    "crag.zelda.p":     "Link is about to face a fire Lynel. According to his \"notes\" (the retrieved context), he pulls out a wooden sword and a wooden shield to fight. Just before jumping into battle, the fairy Navi (CRAG) analyzes the situation and shouts: \"Hey, Listen! Your wooden equipment will burn instantly\". Navi classifies Link's strategy as \"Incorrect\", blocks him from using wood and automatically opens the monster guide to tell him he must use ice equipment. Navi corrected the fatal error before it happened.",
    "crag.kpi.h3":   "Faithfulness / Absence of Hallucinations",
    "crag.kpi.lbl1": "Technical Definition",
    "crag.kpi.p1":   "Measures whether the final LLM response is <strong>strictly based on the provided context</strong>, without inventing data. A Faithfulness of 1.0 means every claim in the response can be traced and verified in the context documents. CRAG directly impacts this by discarding incorrect documents before the LLM reads them: if the LLM never sees incorrect context, it cannot hallucinate from it. If Faithfulness rises, it means CRAG is acting correctly as a filter and the model no longer invents responses.",
    "crag.kpi.lbl2": "Sheikah Version",
    "crag.kpi.p2":   "The King of Hyrule asks the Sheikah Tablet how to defeat Ganon. The tablet says: \"Throw chickens at him\" (a hallucination). Faithfulness measures how true to the actual lore the response is. CRAG detects that the chicken tactic is false, erases that data, searches the Hylian encyclopedia and correctly responds: \"With the Light Arrows\". A Faithfulness of 1.0 = the Sheikah Tablet never lies.",
    "crag.nav.prev": "← Reranking",
    "crag.nav.next": "Next: Trade-offs →",

    /* ── tradeoffs.html ── */
    "tro.tag":   "Advanced Considerations",
    "tro.h1":    "Trade-offs and Implementation Challenges",
    "tro.sub":   "Magic has a price",
    "tro.intro": "Hybrid Search, Reranking, and CRAG dramatically improve the quality of a RAG system, but no improvement is free. Each technique adds latency, infrastructure cost, or maintenance complexity. Before implementing any of them, you need to understand exactly what is gained and what is sacrificed.",
    "tro.s1.title":    "Chunking and Data Quality",
    "tro.s1.tag":      "Garbage In, Garbage Out",
    "tro.chunk.h3":    "The chunking problem",
    "tro.chunk.body":  "Before Hybrid Search can act, the original documents (PDFs, manuals, databases) must be cut into smaller pieces called <strong>chunks</strong> (fragments). This process seems trivial but is critical: if you cut paragraphs in half breaking sentences, or if the database is full of outdated documents, having the best algorithm will be useless.",
    "tro.bad.h3":   "Poor Chunking",
    "tro.bad.body": "Cutting to fixed size without respecting the text structure breaks meaning. A sentence in the middle of a paragraph loses its context and becomes useless or misleading for the retrieval system.",
    "tro.old.h3":   "Outdated Data",
    "tro.old.body": "A database with documents from last year can respond with outdated information with full confidence. The system does not know the data is expired; it retrieves and uses it as if it were correct.",
    "tro.good.h3":  "Best Practices",
    "tro.good.body":"Semantic chunking respecting paragraphs, with controlled overlap between chunks, and regular database maintenance with versions and validity dates for each document.",
    "tro.cascade.body": "<strong>The cascade effect:</strong> Hybrid Search will simply find garbage information faster. Reranking will put the shiniest garbage at the top. And the LLM will give you a perfectly structured response... but useless. No advanced technique can compensate for poor input data quality.",
    "tro.z1.lbl":  "⊙ Sheikah Analogy",
    "tro.z1.p":    "Link uses the Sheikah Camera to register monsters in his Encyclopedia. If Link takes a blurry photo of a rock thinking it's a monster (bad chunking / bad data), the tablet sensor will be useless. No matter how advanced the radar is, it will guide you toward a useless rock because the base information was wrong from the start. Garbage In, Garbage Out is the first law of AI systems development.",
    "tro.s2.title":  "Latency",
    "tro.s2.tag":    "Response Time",
    "tro.lat.h3":    "Speed vs. Precision",
    "tro.lat.body":  "In software development, speed matters. User experience degrades noticeably when responses take more than 3-5 seconds. A traditional RAG responds almost instantly. However, in an advanced pipeline each optimization layer adds latency:",
    "tro.lat1.h3":   "Hybrid Search",
    "tro.lat1.body": "Adds <strong>milliseconds</strong> by doing two parallel searches (vector + BM25) and then combining results with RRF. The impact is minimal but measurable in high-scale systems.",
    "tro.lat2.h3":   "Reranking",
    "tro.lat2.body": "Requires passing texts through a heavy neural model (Cross-encoder), which can take <strong>a couple of seconds</strong>. It is the main bottleneck in the pipeline before CRAG.",
    "tro.lat3.h3":   "CRAG (worst case)",
    "tro.lat3.body": "If it decides the information is incorrect, it must stop, connect to an external API (Google Search / Tavily), download the results, and re-read. It is the <strong>slowest</strong> in the pipeline.",
    "tro.latNote.body": "<strong>The sacrifice for zero hallucinations</strong> is that the user will have to wait longer watching a \"Loading...\" icon. In real-time or high-volume applications, this trade-off must be carefully evaluated and may require implementing response streaming or progress indicators to improve the user's perception of speed.",
    "tro.z2.lbl":  "⊙ Sheikah Analogy",
    "tro.z2.p":    "Link can travel light with a short sword and attack very quickly (traditional RAG). But if he decides to equip himself with the heaviest iron armor, a giant shield, and a two-handed greatsword (Hybrid + Rerank + CRAG Pipeline), he will be protected against almost any damage (zero errors), but his movements will be very slow and consume his entire stamina bar. Full armor is correct for the final boss, not for exploring the open map.",
    "tro.s3.title":  "Computational and Economic Cost",
    "tro.s3.tag":    "The Price of Power",
    "tro.cost.h3":   "The double cost of CRAG",
    "tro.cost.body": "Evaluating whether a document is correct (CRAG) often involves having an LLM (like GPT-4 or Claude) act as a judge <strong>before</strong> generating the final response. This means you are paying double tokens (money) for each user question: one call for the judgment and another for the response. In addition, keeping vector databases and Reranking models running requires servers with expensive GPUs.",
    "tro.infra.h3":  "Infrastructure Costs",
    "tro.infra.li1": "<strong>Vector database:</strong> Pinecone, Weaviate, or Qdrant in production require dedicated instances with fixed monthly costs.",
    "tro.infra.li2": "<strong>Reranking model:</strong> A quality Cross-encoder (Cohere Rerank, BGE-Reranker) requires GPU or API calls per request.",
    "tro.infra.li3": "<strong>Web search (CRAG):</strong> APIs like Tavily or SerpAPI charge per query; high volume can generate unexpected bills.",
    "tro.tok.h3":    "Token Costs (LLM)",
    "tro.tok.li1":   "<strong>CRAG judge:</strong> Each question requires at least one extra LLM call to evaluate context relevance before responding.",
    "tro.tok.li2":   "<strong>Extended context:</strong> Passing Top-20 documents to the reranker or evaluator consumes more input tokens than a traditional RAG.",
    "tro.tok.li3":   "<strong>Double billing:</strong> In the worst case (INCORRECT), the system does: evaluation call + web search + generation call.",
    "tro.noAll.body":"<strong>Not all questions need this level of complexity.</strong> Using this pipeline to ask \"What are the office hours?\" is a waste of resources. A well-designed system implements <em>intelligent routing</em>: simple questions go to a lightweight RAG, complex or high-risk questions activate the full pipeline.",
    "tro.opt.h3":    "Cost Optimization Best Practices",
    "tro.opt.p":     "To control spending without sacrificing quality where it matters:",
    "tro.opt.li1":   "Use small models (GPT-3.5-turbo, Claude Haiku) as CRAG judges and reserve large models (GPT-4, Claude Sonnet/Opus) for final generation.",
    "tro.opt.li2":   "Implement response cache for frequent questions: if the same question has already been answered with high faithfulness, reuse the result.",
    "tro.opt.li3":   "Define confidence thresholds: if the evaluator's score is very high (CORRECT with 95%+ confidence), skip web search directly.",
    "tro.opt.li4":   "Monitor costs per query and adjust the retriever's Top K (passing Top 5 instead of Top 20 significantly reduces Reranker cost).",
    "tro.z3.lbl":  "⊙ Sheikah Analogy",
    "tro.z3.p":    "Ancient Arrows are the most powerful weapon in the game; they disintegrate the enemy instantly. But they cost extremely rare materials and many rupees. Using the full RAG pipeline for a trivial question is like spending a 500-rupee Ancient Arrow to kill a level-1 Red Bokoblin. It works, yes, but it will quickly drain the kingdom's budget. You need to know when to use the expensive tools and when a regular arrow is enough.",
    "tro.sum.tag":   "Summary",
    "tro.sum.h2":    "The implementation decision",
    "tro.bal.h3":    "The right balance",
    "tro.bal.p":     "The three techniques form a pipeline that maximizes response quality, but each organization must evaluate what level of complexity justifies its specific use case. There is no single correct answer.",
    "tro.bal.li1":   "<strong>Hybrid Search only:</strong> Ideal for systems with frequent technical queries and a stable database. High impact, low additional cost.",
    "tro.bal.li2":   "<strong>Hybrid + Reranking:</strong> The optimal point for most enterprise applications. Significant MRR improvement with controlled latency.",
    "tro.bal.li3":   "<strong>Full Pipeline (+ CRAG):</strong> For critical applications where a hallucination has serious consequences: legal, medical, financial, regulatory.",
    "tro.nav.prev":  "← CRAG",

    /* ── simulacion.html ── */
    "sim.tag":    "Interactive Demo · Step by Step",
    "sim.h1":     "RAG <em>Pipeline</em> Simulation",
    "sim.desc":   "Compare traditional RAG vs advanced pipeline at each phase. Advance at your own pace.",
    "sim.scenario.lbl": "Scenario ›",
    "sim.col.naive":    "✗ Traditional RAG",
    "sim.col.advanced": "✓ Advanced RAG",
    "sim.badge.naive":  "No pipeline",
    "sim.badge.adv":    "Full pipeline",
    "sim.label.initial":"Press <span>\"Start Simulation\"</span> to begin",
    "sim.btn.start":    "▶ Start Simulation",
    "sim.btn.reset":    "↺ Restart",
    "sim.btn.next":     "▶ Next Step",
    "sim.btn.final":    "▶ See final result",
    "sim.btn.done":     "✓ Simulation complete",

    /* ── notebook.html ── */
    "nb.tag":    "Google Colab · Hands-on Exercise",
    "nb.h1":     "Masterclass Notebook",
    "nb.sub":    "Advanced RAG · Hylian Encyclopedia",
    "nb.intro":  "Implement the three pipeline techniques from scratch: Hybrid Search, Reranking, and CRAG. Each phase includes executable code, explanatory comments, and experiment zones where you can change parameters and observe the impact.",
    "nb.meta.min":   "minutes",
    "nb.meta.phases":"phases",
    "nb.meta.cells": "cells",
    "nb.dl.btn":     "⊙ Open in Colab",
    "nb.dl.es":      "Open in Colab · Spanish",
    "nb.dl.en":      "Open in Colab · English",
    "nb.steps.title":"How to use it in Google Colab",
    "nb.step1":  "Click the button to open the notebook in <strong>Google Colab</strong>.",
    "nb.step2":  "Go to <em>File → Save a copy in Drive</em> to get your own editable version.",
    "nb.step3":  "Run cells in order with <strong>Shift + Enter</strong>. The first cell installs all dependencies automatically.",
    "nb.step4":  "In the <strong>Experiment Zones</strong> change the marked parameters and re-run to see how the results change.",
    "nb.nav.prev":   "← Simulation",

    /* ── index KPI strip ── */
    "kpi.techniques": "Techniques covered",
    "kpi.kpis":       "KPIs measured",
    "kpi.phases":     "Pipeline phases",
  }
};

/* ============================================================
   Core i18n engine
   ============================================================ */

function setLang(lang) {
  if (lang !== 'es' && lang !== 'en') lang = 'es';

  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];

  /* — textContent elements — */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* — innerHTML elements — */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* — toggle button label — */
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';

  /* — simulation page: update dynamic UI strings — */
  _updateSimUI(lang, t);
}

function _updateSimUI(lang, t) {
  /* column header labels */
  const naiveLabel = document.querySelector('.sim-col-label.naive');
  if (naiveLabel) naiveLabel.textContent = t['sim.col.naive'];
  const advLabel = document.querySelector('.sim-col-label.advanced');
  if (advLabel) advLabel.textContent = t['sim.col.advanced'];

  /* badges (only if still showing default / reset state) */
  const naiveBadge = document.getElementById('naive-badge');
  const advBadge   = document.getElementById('adv-badge');
  if (naiveBadge && (naiveBadge.textContent === 'Sin pipeline' || naiveBadge.textContent === 'No pipeline')) {
    naiveBadge.textContent = t['sim.badge.naive'];
  }
  if (advBadge && (advBadge.textContent === 'Pipeline completo' || advBadge.textContent === 'Full pipeline')) {
    advBadge.textContent = t['sim.badge.adv'];
  }

  /* step label bar — only when in reset state */
  const labelBar = document.getElementById('step-label-bar');
  if (labelBar) {
    const raw = labelBar.textContent.trim();
    if (raw.includes('Iniciar Simulación') || raw.includes('Start Simulation')) {
      labelBar.innerHTML = t['sim.label.initial'];
    }
  }

  /* control buttons */
  const btnNext  = document.getElementById('btn-next');
  const btnReset = document.getElementById('btn-reset');
  if (btnReset) btnReset.textContent = t['sim.btn.reset'];
  if (btnNext) {
    const txt = btnNext.textContent.trim();
    if (txt === '▶ Iniciar Simulación' || txt === '▶ Start Simulation') {
      btnNext.textContent = t['sim.btn.start'];
    } else if (txt === '▶ Siguiente Paso' || txt === '▶ Next Step') {
      btnNext.textContent = t['sim.btn.next'];
    } else if (txt === '▶ Ver resultado final' || txt === '▶ See final result') {
      btnNext.textContent = t['sim.btn.final'];
    } else if (txt === '✓ Simulación completada' || txt === '✓ Simulation complete') {
      btnNext.textContent = t['sim.btn.done'];
    }
  }
}

/* ============================================================
   Boot: read localStorage and apply on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('lang') || 'es';
  setLang(saved);
});

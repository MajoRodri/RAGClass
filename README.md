<p align="center">
  <img src="assets/img/ikon.png" alt="Tableta Sheikah" width="120" />
</p>

<h1 align="center">Tableta Sheikah · RAG Masterclass</h1>

<p align="center">
  Sitio web interactivo para una masterclass de <strong>RAG Avanzado</strong> (Retrieval-Augmented Generation).<br/>
  Aprende cómo hacer que los LLMs respondan con información real, actualizada y sin alucinaciones.<br/>
  Temática Zelda/Sheikah · Español & English · Google Colab incluido.
</p>

<p align="center">
  <strong>Temas:</strong> Búsqueda Híbrida &nbsp;·&nbsp; Reranking &nbsp;·&nbsp; CRAG &nbsp;·&nbsp; Faithfulness &nbsp;·&nbsp; Hit Rate &nbsp;·&nbsp; MRR
</p>

<p align="center">
  <a href="https://majorodri.github.io/RAGClass/">
    <img src="https://img.shields.io/badge/Live%20Site-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github" alt="Live Site" />
  </a>
</p>

---

## ¿Qué es RAG y qué aprenderás?

**RAG (Retrieval-Augmented Generation)** es una técnica que conecta un LLM (como GPT o Claude) a una base de conocimiento propia. En lugar de depender solo de lo que el modelo memorizó durante su entrenamiento, el sistema *primero busca* documentos relevantes y *luego* los usa para generar la respuesta. El resultado: respuestas más precisas, actualizadas y verificables.

Esta masterclass enseña el pipeline completo en tres fases:

### Fase 01 · Búsqueda Híbrida
Combina dos estrategias de búsqueda para encontrar los documentos más relevantes:
- **Dense retrieval**: Convierte texto en vectores numéricos (embeddings) y busca por similitud semántica. Entiende el *significado*, no solo las palabras exactas.
- **BM25**: Búsqueda léxica clásica que puntúa documentos según la frecuencia de las palabras de la query. Muy bueno para términos técnicos y nombres propios.
- **RRF (Reciprocal Rank Fusion)**: Fusiona los rankings de ambas búsquedas en una sola lista ordenada.

**KPI:** Hit Rate @K → ¿cuántas veces aparece el documento correcto en el top-K de resultados?

### Fase 02 · Reranking
Después de la búsqueda híbrida, un **Cross-Encoder** re-evalúa cada par (pregunta, documento) juntos para ordenarlos con mayor precisión. Es más lento pero mucho más exacto que los embeddings solos.

**KPI:** MRR (Mean Reciprocal Rank): Mide qué tan arriba aparece el documento correcto en el ranking.

### Fase 03 · CRAG (Corrective RAG)
Antes de generar la respuesta final, un **evaluador automático** (LLM como juez) analiza si los documentos recuperados son realmente útiles:
- **CORRECTO** → pasa los documentos al LLM directamente
- **AMBIGUO** → combina documentos internos con búsqueda web
- **INCORRECTO** → descarta los documentos y activa búsqueda web externa

Esto elimina las **alucinaciones**: respuestas coherentes pero falsas que ocurren cuando el LLM intenta responder con contexto irrelevante.

**KPI:** Faithfulness →  ¿cada afirmación en la respuesta puede verificarse en el contexto?

<details>
<summary>English</summary>

**RAG (Retrieval-Augmented Generation)** connects an LLM to a custom knowledge base. Instead of relying solely on what the model memorized during training, the system *first retrieves* relevant documents and *then* uses them to generate the answer, resulting in more accurate, up-to-date, and verifiable responses.

### Phase 01 · Hybrid Search
Combines two retrieval strategies:
- **Dense retrieval**: Converts text into numerical vectors (embeddings) and searches by semantic similarity. Understands *meaning*, not just exact words.
- **BM25**: Classic lexical search that scores documents by keyword frequency. Great for technical terms and proper nouns.
- **RRF (Reciprocal Rank Fusion)**: Merges both rankings into a single ordered list.

**KPI:** Hit Rate @K: How often does the correct document appear in the top-K results?

### Phase 02 · Reranking
A **Cross-Encoder** re-evaluates each (query, document) pair together for higher precision ordering. Slower but far more accurate than embeddings alone.

**KPI:** MRR (Mean Reciprocal Rank) → measures how high the correct document ranks.

### Phase 03 · CRAG (Corrective RAG)
An **automatic evaluator** (LLM as judge) checks whether the retrieved documents are actually useful before generating the final answer:
- **CORRECT** → passes documents to the LLM directly
- **AMBIGUOUS** → combines internal docs with web search
- **INCORRECT** → discards documents and triggers external web search

This eliminates **hallucinations**: coherent but false answers that happen when the LLM tries to respond using irrelevant context.

**KPI:** Faithfulness → can every claim in the answer be verified in the context?

</details>

---

## Páginas

| Página | Descripción |
|---|---|
| `index.html` | Landing page con el pipeline completo |
| `pages/hibrida.html` | Fase 01 → Búsqueda Híbrida (Dense + BM25 + RRF) |
| `pages/reranking.html` | Fase 02 → Reranking con Cross-Encoder |
| `pages/crag.html` | Fase 03 → CRAG (evaluador anti-alucinaciones) |
| `pages/tradeoffs.html` | Comparativa de trade-offs entre técnicas |
| `pages/simulacion.html` | Simulación interactiva paso a paso |
| `pages/notebook.html` | Links a los notebooks en Google Colab |

<details>
<summary>English</summary>

| Page | Description |
|---|---|
| `index.html` | Landing page with the full pipeline |
| `pages/hibrida.html` | Phase 01 → Hybrid Search (Dense + BM25 + RRF) |
| `pages/reranking.html` | Phase 02 → Reranking with Cross-Encoder |
| `pages/crag.html` | Phase 03 → CRAG (anti-hallucination evaluator) |
| `pages/tradeoffs.html` | Trade-offs comparison between techniques |
| `pages/simulacion.html` | Interactive step-by-step simulation |
| `pages/notebook.html` | Links to Google Colab notebooks |

</details>

---

## Notebooks

Dos versiones del mismo notebook, listas para ejecutar en Colab:

- **Español** → [Abrir en Colab](https://colab.research.google.com/drive/13wLva_bdauFDJeI2JqzUZET_hTNzzx86?usp=sharing)
- **English** → [Open in Colab](https://colab.research.google.com/drive/1yf129T9BtVPSf_OO3pRcIu9FyCoylEjN?usp=sharing)

> Antes de ejecutar: **Archivo → Guardar una copia en Drive** para tener tu propia versión editable.

El notebook cubre las 3 fases del pipeline (34 celdas, ~30 min):
1. Búsqueda Híbrida: Dense retrieval + BM25 + Reciprocal Rank Fusion
2. Reranking: Cross-Encoder sobre los resultados fusionados
3. CRAG: Evaluador LLM con 3 veredictos (CORRECTO / AMBIGUO / INCORRECTO)

<details>
<summary>English</summary>

Two versions of the same notebook, ready to run in Colab:

- **Español**: [Open in Colab](https://colab.research.google.com/drive/13wLva_bdauFDJeI2JqzUZET_hTNzzx86?usp=sharing)
- **English**: [Open in Colab](https://colab.research.google.com/drive/1yf129T9BtVPSf_OO3pRcIu9FyCoylEjN?usp=sharing)

> Before running: **File → Save a copy in Drive** to get your own editable version.

The notebook covers the 3 pipeline phases (34 cells, ~30 min):
1. Hybrid Search: Dense retrieval + BM25 + Reciprocal Rank Fusion
2. Reranking: Cross-Encoder over the merged results
3. CRAG: LLM evaluator with 3 verdicts (CORRECT / AMBIGUOUS / INCORRECT)

</details>

---

## Estructura del proyecto

```
RAGClass/
├── index.html                        # Landing
├── pages/                            # Páginas internas
│   ├── hibrida.html
│   ├── reranking.html
│   ├── crag.html
│   ├── tradeoffs.html
│   ├── simulacion.html
│   └── notebook.html
├── assets/
│   ├── css/main.css                  # Estilos Sheikah
│   ├── js/i18n.js                    # Sistema ES ↔ EN
│   └── img/                          # Imágenes y analogías Zelda
├── RAG_Avanzado.ipynb                # Notebook en español
└── RAG_Advanced.ipynb               # Notebook en inglés
```

<details>
<summary>English</summary>

```
RAGClass/
├── index.html                        # Landing
├── pages/                            # Inner pages
│   ├── hibrida.html
│   ├── reranking.html
│   ├── crag.html
│   ├── tradeoffs.html
│   ├── simulacion.html
│   └── notebook.html
├── assets/
│   ├── css/main.css                  # Sheikah styles
│   ├── js/i18n.js                    # ES ↔ EN system
│   └── img/                          # Zelda images & analogies
├── RAG_Avanzado.ipynb                # Spanish notebook
└── RAG_Advanced.ipynb               # English notebook
```

</details>

---

<details>
<summary><strong>Tecnologías usadas en los notebooks</strong></summary>

| Librería | Para qué |
|---|---|
| `sentence-transformers` | Modelos de embeddings (Dense retrieval) |
| `rank_bm25` | Búsqueda léxica BM25 |
| `numpy` | Similitud coseno |
| `transformers` | Cross-Encoder para reranking |

Modelo de embeddings: `all-MiniLM-L6-v2`  
Modelo de reranking: `cross-encoder/ms-marco-MiniLM-L-6-v2`

</details>

<details>
<summary><strong>Sistema de idiomas (i18n)</strong></summary>

El sitio tiene un botón **ES / EN** en la navegación de todas las páginas.

- Funciona con atributos `data-i18n` en el HTML y un objeto de traducciones en `assets/js/i18n.js`
- El idioma se guarda en `localStorage`, así persiste entre páginas
- No requiere ninguna dependencia externa

</details>

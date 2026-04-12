export const ner = {
  id: 'ner',
  title: 'Named Entity Recognition',
  icon: '🏷️',
  thinking: {
    intuition: `When you read "Elon Musk founded SpaceX in 2002 in California", your brain instantly knows: Elon Musk is a person, SpaceX is an organization, 2002 is a date, California is a location. NER teaches machines to do the same — identify and classify named entities in text.`,
    analogy: `Think of NER like a highlighter 🖊️ with different colors. Yellow for people, blue for places, green for organizations, pink for dates. You read a document and highlight every entity with the right color. NER automates this highlighting.`,
  },
  description: {
    text: `Named Entity Recognition (NER) is an NLP task that identifies and classifies named entities in text into predefined categories such as person names, organizations, locations, dates, monetary values, and more.`,
    bullets: [
      'Common entity types: PERSON, ORG, GPE (location), DATE, MONEY, PRODUCT',
      'spaCy provides state-of-the-art pre-trained NER models',
      'NLTK has a basic NER chunker using POS tags',
      'Modern NER uses BiLSTM-CRF or transformer-based models',
      'IOB tagging scheme: I-inside, O-outside, B-beginning of entity',
      'Custom NER can be trained for domain-specific entities',
    ],
    insight: `spaCy's NER uses a transition-based parser with a neural network. For production use, fine-tuning a pre-trained transformer (like BERT) on your domain data gives significantly better results than generic models.`,
  },
  code: [
    {
      label: 'spaCy NER',
      language: 'python',
      code: `import spacy

nlp = spacy.load("en_core_web_sm")

text = """Apple Inc. was founded by Steve Jobs in 1976 in Cupertino, California.
The company is now worth over $3 trillion."""

doc = nlp(text)

print(f"{'Entity':<25} {'Label':<12} {'Description'}")
print("-" * 60)
for ent in doc.ents:
    print(f"{ent.text:<25} {ent.label_:<12} {spacy.explain(ent.label_)}")

# Apple Inc.               ORG          Companies, agencies
# Steve Jobs               PERSON       People, including fictional
# 1976                     DATE         Absolute or relative dates
# Cupertino, California    GPE          Countries, cities, states
# $3 trillion              MONEY        Monetary values`,
    },
    {
      label: 'Visualize NER with displacy',
      language: 'python',
      code: `import spacy
from spacy import displacy

nlp = spacy.load("en_core_web_sm")

text = "Barack Obama was born in Hawaii and served as the 44th President of the United States."
doc = nlp(text)

# Render in Jupyter notebook
displacy.render(doc, style="ent", jupyter=True)

# Or save to HTML
html = displacy.render(doc, style="ent", page=True)
with open("ner_output.html", "w") as f:
    f.write(html)

# Get entity spans
for ent in doc.ents:
    print(f"{ent.text} [{ent.start_char}:{ent.end_char}] → {ent.label_}")`,
    },
    {
      label: 'HuggingFace NER Pipeline',
      language: 'python',
      code: `from transformers import pipeline

# Pre-trained BERT-based NER
ner = pipeline("ner", model="dbmdz/bert-large-cased-finetuned-conll03-english",
               aggregation_strategy="simple")

text = "Elon Musk founded Tesla in 2003 and SpaceX in 2002."
results = ner(text)

for entity in results:
    print(f"{entity['word']:<20} {entity['entity_group']:<10} score: {entity['score']:.3f}")

# Elon Musk            PER        score: 0.999
# Tesla                ORG        score: 0.998
# SpaceX               ORG        score: 0.997`,
    },
  ],
  applications: [
    { title: 'Information Extraction', desc: 'Extract structured data (names, dates, amounts) from unstructured text.', icon: 'clipboard' },
    { title: 'News Analysis', desc: 'Automatically tag articles with mentioned people, places, orgs.', icon: 'newspaper' },
    { title: 'Medical Records', desc: 'Extract drug names, diseases, and dosages from clinical notes.', icon: 'hospital' },
    { title: 'Financial Analysis', desc: 'Identify companies, stock tickers, and monetary values in reports.', icon: 'dollar' },
    { title: 'Customer Support', desc: 'Extract product names and issue types from support tickets.', icon: 'comments' },
    { title: 'Knowledge Graphs', desc: 'Build entity relationship graphs from large text corpora.', icon: 'network' },
  ],
  interview: [
    {
      q: 'What is Named Entity Recognition?',
      a: 'NER is an NLP task that identifies and classifies named entities in text into categories like PERSON, ORG, GPE (location), DATE, MONEY. It extracts structured information from unstructured text.',
    },
    {
      q: 'What is the IOB tagging scheme?',
      a: 'IOB (Inside-Outside-Beginning) is a tagging format for NER. B-PERSON marks the beginning of a person entity, I-PERSON marks continuation, O marks non-entity tokens. Example: "Barack(B-PER) Obama(I-PER) visited(O) Paris(B-LOC)".',
    },
    {
      q: 'How does spaCy perform NER?',
      a: 'spaCy uses a transition-based named entity recognizer with a neural network. It processes tokens and predicts entity boundaries and types using a combination of word vectors and contextual features.',
    },
    {
      q: 'What is the difference between NER and POS tagging?',
      a: 'POS tagging labels each word with its grammatical role (noun, verb, adjective). NER identifies multi-word spans that refer to real-world entities (people, places, organizations). NER often uses POS tags as features.',
    },
    {
      q: 'How would you train a custom NER model?',
      a: 'Annotate training data with entity spans and labels, then fine-tune a pre-trained model (spaCy or HuggingFace BERT) on your annotated data. For spaCy, use nlp.update() with Example objects. For HuggingFace, use the Trainer API.',
    },
  ],
  mcqs: [
    {
      q: 'What does GPE stand for in spaCy NER?',
      options: ['General Purpose Entity', 'Geo-Political Entity', 'Global Place Entity', 'Geographic Proper Entity'],
      answer: 1,
    },
    {
      q: 'What does "B-" prefix mean in IOB tagging?',
      options: ['Before entity', 'Beginning of entity', 'Binary entity', 'Base entity'],
      answer: 1,
    },
    {
      q: 'Which spaCy attribute gives all named entities in a doc?',
      options: ['doc.entities', 'doc.ents', 'doc.named_entities', 'doc.tags'],
      answer: 1,
    },
    {
      q: 'Which model type gives best NER performance today?',
      options: ['Rule-based', 'CRF', 'BiLSTM', 'Fine-tuned Transformer (BERT)'],
      answer: 3,
    },
  ],
  resources: {
    videos: [
      { title: 'Named Entity Recognition — spaCy Tutorial', url: 'https://www.youtube.com/watch?v=pgJwrH_av1I' },
      { title: 'NER with HuggingFace Transformers', url: 'https://www.youtube.com/watch?v=dzyDHMycx_c' },
    ],
    docs: [
      { title: 'spaCy NER Docs', url: 'https://spacy.io/usage/linguistic-features#named-entities' },
      { title: 'HuggingFace Token Classification', url: 'https://huggingface.co/docs/transformers/tasks/token_classification' },
    ],
    books: [
      { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
      { title: 'Natural Language Processing with Python', url: 'https://www.nltk.org/book/' },
    ],
  },
};

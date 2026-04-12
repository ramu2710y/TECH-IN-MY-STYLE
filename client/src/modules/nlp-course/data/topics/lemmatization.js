export const lemmatization = {
  id: 'lemmatization',
  title: 'Lemmatization',
  icon: '📖',
  thinking: {
    intuition: `When you look up "better" in a dictionary, you find it under "good". When you look up "was", you find it under "be". Lemmatization does exactly this — it maps every word to its canonical dictionary form, called a lemma.`,
    analogy: `Think of lemmatization like a librarian 📚. No matter how you ask — "running", "ran", "runs" — the librarian always files it under "run". It understands grammar and context, not just spelling patterns.`,
  },
  description: {
    text: `Lemmatization is the process of reducing a word to its base dictionary form (lemma) using vocabulary and morphological analysis. Unlike stemming, it always returns a real, valid word.`,
    bullets: [
      'Uses a vocabulary (lexicon) and morphological rules to find the lemma',
      'Considers the part-of-speech (POS) of the word for accuracy',
      '"better" → "good", "was" → "be", "running" → "run"',
      'More accurate than stemming but computationally heavier',
      'WordNet is the most common lexical database used for lemmatization',
    ],
    insight: `POS tagging dramatically improves lemmatization accuracy. "Meeting" as a noun → "meeting"; as a verb → "meet". Always pass the POS tag when using WordNetLemmatizer for best results.`,
  },
  code: [
    {
      label: 'WordNet Lemmatizer — NLTK',
      language: 'python',
      code: `import nltk
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer

lem = WordNetLemmatizer()

# Without POS tag (defaults to noun)
print(lem.lemmatize("running"))   # running (wrong!)
print(lem.lemmatize("better"))    # better  (wrong!)

# With correct POS tag
print(lem.lemmatize("running", pos='v'))  # run ✓
print(lem.lemmatize("better", pos='a'))   # good ✓
print(lem.lemmatize("was", pos='v'))      # be ✓
print(lem.lemmatize("studies", pos='v'))  # study ✓`,
    },
    {
      label: 'spaCy Lemmatization',
      language: 'python',
      code: `import spacy
nlp = spacy.load("en_core_web_sm")

text = "The geese were flying better than the runners expected."
doc = nlp(text)

for token in doc:
    print(f"{token.text:<15} {token.lemma_:<15} {token.pos_}")

# geese           goose           NOUN
# were            be              AUX
# flying          fly             VERB
# better          well            ADV
# runners         runner          NOUN`,
    },
    {
      label: 'Stemming vs Lemmatization Comparison',
      language: 'python',
      code: `from nltk.stem import PorterStemmer, WordNetLemmatizer
import nltk
nltk.download('wordnet')

ps = PorterStemmer()
lem = WordNetLemmatizer()

words = ["studies", "studying", "better", "geese", "corpora", "was"]

print(f"{'Word':<12} {'Stemmed':<12} {'Lemmatized'}")
print("-" * 36)
for w in words:
    print(f"{w:<12} {ps.stem(w):<12} {lem.lemmatize(w, pos='v')}")`,
    },
  ],
  applications: [
    { title: 'Question Answering', desc: 'Normalize question words to match knowledge base entries.', icon: 'question-circle' },
    { title: 'Chatbots', desc: 'Understand "I want to book" and "I booked" as the same intent.', icon: 'comments' },
    { title: 'Text Search', desc: 'Match "running shoes" query to "run shoe" indexed documents.', icon: 'search' },
    { title: 'Machine Translation', desc: 'Reduce source language vocabulary before translation.', icon: 'globe' },
    { title: 'Sentiment Analysis', desc: 'Normalize words for more accurate sentiment features.', icon: 'chart-bar' },
    { title: 'Text Summarization', desc: 'Group semantically similar words for better summaries.', icon: 'file' },
  ],
  interview: [
    {
      q: 'What is lemmatization and how does it differ from stemming?',
      a: 'Lemmatization returns the actual dictionary base form (lemma) using vocabulary and morphological analysis. Stemming just chops suffixes with rules. Lemmatization is more accurate but slower; stemming is faster but may produce non-words.',
    },
    {
      q: 'Why is POS tagging important for lemmatization?',
      a: 'The same word can have different lemmas depending on its grammatical role. "Meeting" as a noun lemmatizes to "meeting"; as a verb it lemmatizes to "meet". Without POS context, lemmatizers default to noun and may give wrong results.',
    },
    {
      q: 'What is WordNet?',
      a: 'WordNet is a large lexical database of English where words are grouped into sets of synonyms (synsets) with semantic relationships. NLTK\'s WordNetLemmatizer uses it to find correct lemmas.',
    },
    {
      q: 'What does lemmatize("better", pos="a") return?',
      a: '"good" — because "better" is the comparative form of "good". This is a classic example showing why lemmatization is more linguistically accurate than stemming.',
    },
    {
      q: 'Which spaCy attribute gives the lemma of a token?',
      a: 'token.lemma_ gives the string lemma. token.lemma gives the integer hash. spaCy automatically handles POS-aware lemmatization as part of its pipeline.',
    },
  ],
  mcqs: [
    {
      q: 'What does WordNetLemmatizer return for "better" with pos="a"?',
      options: ['better', 'best', 'good', 'well'],
      answer: 2,
    },
    {
      q: 'Which attribute in spaCy gives the lemma of a token?',
      options: ['token.stem_', 'token.lemma_', 'token.base_', 'token.root_'],
      answer: 1,
    },
    {
      q: 'Lemmatization always returns a valid dictionary word.',
      options: ['True', 'False', 'Only in English', 'Only with spaCy'],
      answer: 0,
    },
    {
      q: 'What is the default POS assumed by NLTK WordNetLemmatizer?',
      options: ['Verb', 'Adjective', 'Noun', 'Adverb'],
      answer: 2,
    },
  ],
  resources: {
    videos: [
      { title: 'Lemmatization in NLP — Krish Naik', url: 'https://www.youtube.com/watch?v=HHAilAC3cXw' },
      { title: 'spaCy Lemmatization Tutorial', url: 'https://www.youtube.com/watch?v=dIUTsFT2MeQ' },
    ],
    docs: [
      { title: 'NLTK WordNetLemmatizer', url: 'https://www.nltk.org/api/nltk.stem.wordnet.html' },
      { title: 'spaCy Linguistic Features', url: 'https://spacy.io/usage/linguistic-features' },
      { title: 'WordNet — Princeton', url: 'https://wordnet.princeton.edu/' },
    ],
    books: [
      { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
      { title: 'Natural Language Processing with Python', url: 'https://www.nltk.org/book/' },
    ],
  },
};

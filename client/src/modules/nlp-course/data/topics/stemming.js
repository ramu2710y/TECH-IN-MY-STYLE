export const stemming = {
  id: 'stemming',
  title: 'Stemming',
  icon: '🌱',
  thinking: {
    intuition: `When you search for "running", you also want results for "runs" and "ran". Stemming is the process of chopping off word endings to reduce a word to its base or root form — even if that root isn't a real dictionary word.`,
    analogy: `Think of stemming like pruning a plant 🌿. You cut off the branches (suffixes) to get to the core stem. "Playing", "played", "plays" all get trimmed down to "play". It's fast and aggressive — sometimes too aggressive.`,
  },
  description: {
    text: `Stemming reduces inflected or derived words to their word stem by removing suffixes using heuristic rules. It's a crude but fast normalization technique used in information retrieval and text mining.`,
    bullets: [
      'Porter Stemmer is the most widely used — applies a series of suffix-stripping rules',
      'Snowball Stemmer (Porter2) is an improved, multilingual version',
      'Lancaster Stemmer is the most aggressive — can over-stem words',
      'Stemming does NOT guarantee a real dictionary word as output',
      'Faster than lemmatization but less accurate',
    ],
    insight: `Stemming can cause "over-stemming" (universe → univers) or "under-stemming" (data → data, datum → datum treated differently). For production NLP, lemmatization is usually preferred.`,
  },
  code: [
    {
      label: 'Porter Stemmer — NLTK',
      language: 'python',
      code: `from nltk.stem import PorterStemmer

ps = PorterStemmer()

words = ["running", "runs", "runner", "easily", "fairly", "studies"]

for word in words:
    print(f"{word:15} → {ps.stem(word)}")

# running         → run
# runs            → run
# runner          → runner
# easily          → easili
# fairly          → fairli
# studies         → studi`,
    },
    {
      label: 'Snowball vs Lancaster',
      language: 'python',
      code: `from nltk.stem import SnowballStemmer, LancasterStemmer

snow = SnowballStemmer("english")
lanc = LancasterStemmer()

words = ["generously", "running", "happiness", "presumably"]

print(f"{'Word':<15} {'Snowball':<15} {'Lancaster'}")
print("-" * 45)
for w in words:
    print(f"{w:<15} {snow.stem(w):<15} {lanc.stem(w)}")`,
    },
    {
      label: 'Stemming in a Pipeline',
      language: 'python',
      code: `from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
import nltk

nltk.download('punkt')
nltk.download('stopwords')

ps = PorterStemmer()
stop_words = set(stopwords.words('english'))

text = "The students are studying natural language processing techniques."

tokens = word_tokenize(text.lower())
stemmed = [ps.stem(w) for w in tokens if w.isalpha() and w not in stop_words]

print("Original tokens:", tokens)
print("Stemmed tokens:", stemmed)
# ['student', 'studi', 'natur', 'languag', 'process', 'techniqu']`,
    },
  ],
  applications: [
    { title: 'Search Engines', desc: 'Stem queries and documents so "run", "running", "ran" all match.', icon: 'search' },
    { title: 'Text Classification', desc: 'Reduce vocabulary size before feeding into classifiers.', icon: 'tag' },
    { title: 'Information Retrieval', desc: 'Improve recall by matching morphological variants.', icon: 'file' },
    { title: 'Spam Filters', desc: 'Normalize words to detect spam patterns more reliably.', icon: 'shield' },
    { title: 'Document Clustering', desc: 'Group similar documents by normalizing word forms.', icon: 'layer-group' },
    { title: 'Sentiment Analysis', desc: 'Reduce feature space before sentiment classification.', icon: 'chart-bar' },
  ],
  interview: [
    {
      q: 'What is stemming and how does it differ from lemmatization?',
      a: 'Stemming chops word suffixes using heuristic rules to get a root form (which may not be a real word). Lemmatization uses vocabulary and morphological analysis to return the actual dictionary base form. Stemming is faster; lemmatization is more accurate.',
    },
    {
      q: 'What is the Porter Stemmer?',
      a: 'The Porter Stemmer (1980) is a rule-based algorithm that applies a series of suffix-stripping rules in phases. It is the most widely used stemmer in English NLP.',
    },
    {
      q: 'What is over-stemming and under-stemming?',
      a: 'Over-stemming occurs when two different words are reduced to the same stem incorrectly (e.g., "universe" and "university" both → "univers"). Under-stemming occurs when related words are not reduced to the same stem.',
    },
    {
      q: 'When would you choose stemming over lemmatization?',
      a: 'When speed is critical and linguistic precision is less important — such as in large-scale information retrieval systems or when building a quick baseline NLP pipeline.',
    },
    {
      q: 'Name three stemming algorithms available in NLTK.',
      a: 'Porter Stemmer, Snowball Stemmer (Porter2), and Lancaster Stemmer. Lancaster is the most aggressive, Snowball supports multiple languages, and Porter is the classic baseline.',
    },
  ],
  mcqs: [
    {
      q: 'What does the Porter Stemmer return for the word "studies"?',
      options: ['study', 'studi', 'studied', 'studies'],
      answer: 1,
    },
    {
      q: 'Which stemmer is the most aggressive?',
      options: ['Porter Stemmer', 'Snowball Stemmer', 'Lancaster Stemmer', 'WordNet Stemmer'],
      answer: 2,
    },
    {
      q: 'Stemming always produces a valid dictionary word.',
      options: ['True', 'False', 'Only with Porter', 'Only with Snowball'],
      answer: 1,
    },
    {
      q: 'Which is faster — stemming or lemmatization?',
      options: ['Lemmatization', 'Stemming', 'They are equal', 'Depends on language'],
      answer: 1,
    },
  ],
  resources: {
    videos: [
      { title: 'Stemming vs Lemmatization — NLP Tutorial', url: 'https://www.youtube.com/watch?v=HHAilAC3cXw' },
      { title: 'NLTK Stemming Tutorial', url: 'https://www.youtube.com/watch?v=p3pLPsMDkVs' },
    ],
    docs: [
      { title: 'NLTK Stem Module', url: 'https://www.nltk.org/api/nltk.stem.html' },
      { title: 'Porter Stemmer Paper', url: 'https://tartarus.org/martin/PorterStemmer/' },
    ],
    books: [
      { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
      { title: 'Introduction to Information Retrieval', url: 'https://nlp.stanford.edu/IR-book/' },
    ],
  },
};

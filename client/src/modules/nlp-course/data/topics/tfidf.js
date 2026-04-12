export const tfidf = {
  id: 'tfidf',
  title: 'TF-IDF',
  icon: '📊',
  thinking: {
    intuition: `"The" appears in every document — it tells you nothing. "Quantum" appears in only 2 out of 10,000 documents — it's very informative. TF-IDF captures this intuition: a word is important if it appears often in a document but rarely across all documents.`,
    analogy: `Imagine a newspaper 📰. The word "the" appears on every page — useless for finding what an article is about. But "cryptocurrency" appearing 10 times in one article and nowhere else? That article is definitely about crypto. TF-IDF measures exactly this signal.`,
  },
  description: {
    text: `TF-IDF (Term Frequency–Inverse Document Frequency) is a numerical statistic that reflects how important a word is to a document in a corpus. It combines two metrics: how often a word appears in a document (TF) and how rare it is across all documents (IDF).`,
    bullets: [
      'TF(t,d) = count of term t in document d / total terms in d',
      'IDF(t) = log(N / df(t)) where N = total docs, df = docs containing t',
      'TF-IDF(t,d) = TF(t,d) × IDF(t)',
      'Common words like "the" get low IDF scores (appear everywhere)',
      'Rare, specific words get high IDF scores (appear in few docs)',
      'sklearn\'s TfidfVectorizer handles all this automatically',
    ],
    insight: `TF-IDF is still one of the most effective baselines for text classification and information retrieval. Even with modern embeddings available, TF-IDF + Logistic Regression often beats complex models on small datasets.`,
  },
  code: [
    {
      label: 'TF-IDF from Scratch',
      language: 'python',
      code: `import math
from collections import Counter

corpus = [
    "the cat sat on the mat",
    "the dog sat on the log",
    "the cat and the dog are friends",
]

def tf(word, doc):
    words = doc.split()
    return words.count(word) / len(words)

def idf(word, corpus):
    n_docs = len(corpus)
    n_containing = sum(1 for doc in corpus if word in doc.split())
    return math.log(n_docs / (1 + n_containing))

def tfidf(word, doc, corpus):
    return tf(word, doc) * idf(word, corpus)

# Score "cat" in document 0
print(f"TF-IDF('cat', doc0) = {tfidf('cat', corpus[0], corpus):.4f}")
print(f"TF-IDF('the', doc0) = {tfidf('the', corpus[0], corpus):.4f}")
# 'cat' scores higher than 'the'`,
    },
    {
      label: 'TfidfVectorizer — sklearn',
      language: 'python',
      code: `from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd

corpus = [
    "I love natural language processing",
    "Natural language processing is amazing",
    "Deep learning powers modern NLP",
]

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)

df = pd.DataFrame(
    X.toarray().round(3),
    columns=vectorizer.get_feature_names_out()
)
print(df)

# Top terms per document
for i, row in df.iterrows():
    top = row.nlargest(3)
    print(f"Doc {i}: {list(top.index)}")`,
    },
    {
      label: 'TF-IDF for Text Classification',
      language: 'python',
      code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split

texts = [
    "I love this product", "Great quality, highly recommend",
    "Terrible experience", "Worst purchase ever",
    "Amazing service", "Will buy again",
    "Complete waste of money", "Do not buy this",
]
labels = [1, 1, 0, 0, 1, 1, 0, 0]

X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.25)

model = Pipeline([
    ('tfidf', TfidfVectorizer(ngram_range=(1, 2))),
    ('clf', LogisticRegression()),
])
model.fit(X_train, y_train)
print("Accuracy:", model.score(X_test, y_test))`,
    },
  ],
  applications: [
    { title: 'Search Engines', desc: 'Rank documents by TF-IDF relevance to a query.', icon: 'search' },
    { title: 'Keyword Extraction', desc: 'Find the most important terms in a document automatically.', icon: 'key' },
    { title: 'Text Classification', desc: 'Powerful baseline for spam, sentiment, and topic classification.', icon: 'tag' },
    { title: 'Recommendation Systems', desc: 'Find similar articles or products using TF-IDF cosine similarity.', icon: 'star' },
    { title: 'Document Summarization', desc: 'Extract sentences with the highest TF-IDF scoring words.', icon: 'file' },
    { title: 'Plagiarism Detection', desc: 'Compare TF-IDF vectors to detect copied content.', icon: 'shield' },
  ],
  interview: [
    {
      q: 'What does TF-IDF stand for and what does it measure?',
      a: 'Term Frequency–Inverse Document Frequency. It measures how important a word is to a specific document relative to a corpus. High TF-IDF means the word is frequent in that document but rare across all documents.',
    },
    {
      q: 'Why is IDF useful?',
      a: 'IDF penalizes words that appear in many documents (like "the", "is") because they carry little discriminative information. It rewards rare words that are specific to certain documents.',
    },
    {
      q: 'What is the formula for TF-IDF?',
      a: 'TF(t,d) = (count of t in d) / (total words in d). IDF(t) = log(N / df(t)). TF-IDF = TF × IDF. sklearn uses a smoothed version: IDF = log((1+N)/(1+df)) + 1.',
    },
    {
      q: 'How does TF-IDF differ from Bag of Words?',
      a: 'BoW uses raw word counts, treating all words equally. TF-IDF weights words by their importance — common words get lower weights, rare informative words get higher weights.',
    },
    {
      q: 'What are the limitations of TF-IDF?',
      a: 'TF-IDF still ignores word order and semantics. "Good" and "excellent" are treated as completely different features. Word embeddings address this by capturing semantic similarity.',
    },
  ],
  mcqs: [
    {
      q: 'A word that appears in every document will have:',
      options: ['High TF-IDF', 'Low IDF', 'High IDF', 'Low TF'],
      answer: 1,
    },
    {
      q: 'What does IDF stand for?',
      options: ['Inverse Document Frequency', 'Index Document Factor', 'Inverse Data Feature', 'Internal Document Filter'],
      answer: 0,
    },
    {
      q: 'Which sklearn class computes TF-IDF vectors?',
      options: ['CountVectorizer', 'TfidfVectorizer', 'TFIDFTransformer', 'TextVectorizer'],
      answer: 1,
    },
    {
      q: 'TF-IDF captures semantic similarity between words.',
      options: ['True', 'False', 'Only with bigrams', 'Only with large corpora'],
      answer: 1,
    },
  ],
  resources: {
    videos: [
      { title: 'TF-IDF Explained — StatQuest', url: 'https://www.youtube.com/watch?v=OymqCnh-ADA' },
      { title: 'TF-IDF in Python — sklearn', url: 'https://www.youtube.com/watch?v=D2V1okCEsiE' },
    ],
    docs: [
      { title: 'sklearn TfidfVectorizer', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html' },
      { title: 'sklearn TF-IDF Guide', url: 'https://scikit-learn.org/stable/modules/feature_extraction.html#tfidf-term-weighting' },
    ],
    books: [
      { title: 'Introduction to Information Retrieval', url: 'https://nlp.stanford.edu/IR-book/' },
      { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
    ],
  },
};

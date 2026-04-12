export const bagOfWords = {
  id: 'bag-of-words',
  title: 'Bag of Words',
  icon: '🎒',
  thinking: {
    intuition: `How do you represent text as numbers so a machine can understand it? The simplest idea: count how many times each word appears. Ignore the order, ignore the grammar — just count. That's the Bag of Words model.`,
    analogy: `Imagine emptying your bag 🎒 onto a table. You count: 3 pens, 2 notebooks, 1 phone. You don't care about the order they were packed — just the counts. BoW does the same with words in a document.`,
  },
  description: {
    text: `Bag of Words (BoW) is a text representation technique that converts documents into fixed-length vectors of word counts. Each dimension in the vector corresponds to a word in the vocabulary, and the value is the word's frequency in the document.`,
    bullets: [
      'Creates a vocabulary from all unique words in the corpus',
      'Represents each document as a vector of word counts',
      'Completely ignores word order and grammar',
      'Results in sparse, high-dimensional vectors',
      'Simple baseline for text classification and clustering',
      'CountVectorizer in sklearn implements BoW efficiently',
    ],
    insight: `BoW suffers from the "curse of dimensionality" — a corpus of 50,000 unique words creates 50,000-dimensional vectors, most of which are zero. TF-IDF and word embeddings address this limitation.`,
  },
  code: [
    {
      label: 'CountVectorizer — sklearn',
      language: 'python',
      code: `from sklearn.feature_extraction.text import CountVectorizer
import pandas as pd

corpus = [
    "I love natural language processing",
    "Natural language processing is amazing",
    "I love machine learning and NLP",
]

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(corpus)

# View vocabulary
print("Vocabulary:", vectorizer.vocabulary_)

# View the BoW matrix
df = pd.DataFrame(X.toarray(), columns=vectorizer.get_feature_names_out())
print(df)`,
    },
    {
      label: 'Binary BoW & N-grams',
      language: 'python',
      code: `from sklearn.feature_extraction.text import CountVectorizer

corpus = ["I love NLP", "NLP is great", "I love machine learning"]

# Binary BoW (presence/absence, not count)
binary_vec = CountVectorizer(binary=True)
X_binary = binary_vec.fit_transform(corpus)

# Bigram BoW
bigram_vec = CountVectorizer(ngram_range=(1, 2))
X_bigram = bigram_vec.fit_transform(corpus)

print("Binary features:", binary_vec.get_feature_names_out())
print("Bigram features:", bigram_vec.get_feature_names_out())`,
    },
    {
      label: 'Text Classification with BoW',
      language: 'python',
      code: `from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Training data
texts = [
    "I love this movie", "Great film, amazing acting",
    "Terrible movie, waste of time", "Awful, I hated it"
]
labels = [1, 1, 0, 0]  # 1=positive, 0=negative

# Pipeline: BoW + Naive Bayes
model = Pipeline([
    ('bow', CountVectorizer()),
    ('clf', MultinomialNB()),
])

model.fit(texts, labels)

# Predict
test = ["This film was wonderful", "I did not enjoy this at all"]
print(model.predict(test))  # [1, 0]`,
    },
  ],
  applications: [
    { title: 'Spam Detection', desc: 'Classify emails as spam/ham using word frequency features.', icon: 'shield' },
    { title: 'Sentiment Analysis', desc: 'Determine positive/negative sentiment from word counts.', icon: 'chart-bar' },
    { title: 'Document Classification', desc: 'Categorize news articles, legal docs, or support tickets.', icon: 'file' },
    { title: 'Topic Modeling', desc: 'BoW is the input representation for LDA topic models.', icon: 'layer-group' },
    { title: 'Plagiarism Detection', desc: 'Compare document vectors to find similar content.', icon: 'search' },
    { title: 'FAQ Matching', desc: 'Match user questions to FAQ entries by word overlap.', icon: 'question-circle' },
  ],
  interview: [
    {
      q: 'What is the Bag of Words model?',
      a: 'BoW represents text as a vector of word counts, ignoring order and grammar. Each document becomes a fixed-length vector where each dimension is a vocabulary word and the value is its frequency.',
    },
    {
      q: 'What are the main limitations of BoW?',
      a: 'BoW ignores word order (losing context), creates sparse high-dimensional vectors, treats all words as equally important, and cannot capture semantic similarity between words.',
    },
    {
      q: 'What is the difference between CountVectorizer and TfidfVectorizer?',
      a: 'CountVectorizer produces raw word counts. TfidfVectorizer weights counts by inverse document frequency, down-weighting common words and up-weighting rare, informative ones.',
    },
    {
      q: 'What are n-grams and how do they improve BoW?',
      a: 'N-grams are contiguous sequences of n words. Bigrams like "not good" capture negation that unigrams miss. Using ngram_range=(1,2) in CountVectorizer adds both unigrams and bigrams.',
    },
    {
      q: 'Why does BoW produce sparse vectors?',
      a: 'Because the vocabulary can be tens of thousands of words, but any single document only contains a small fraction of them. Most vector dimensions are zero.',
    },
  ],
  mcqs: [
    {
      q: 'What does Bag of Words ignore?',
      options: ['Word frequency', 'Word order', 'Vocabulary size', 'Document length'],
      answer: 1,
    },
    {
      q: 'Which sklearn class implements Bag of Words?',
      options: ['TfidfVectorizer', 'HashingVectorizer', 'CountVectorizer', 'BagVectorizer'],
      answer: 2,
    },
    {
      q: 'What is a bigram?',
      options: ['A word with two syllables', 'A sequence of two consecutive words', 'Two documents', 'A binary word vector'],
      answer: 1,
    },
    {
      q: 'BoW vectors are typically:',
      options: ['Dense and low-dimensional', 'Dense and high-dimensional', 'Sparse and high-dimensional', 'Sparse and low-dimensional'],
      answer: 2,
    },
  ],
  resources: {
    videos: [
      { title: 'Bag of Words Explained — StatQuest', url: 'https://www.youtube.com/watch?v=UFtXy0KRxVI' },
      { title: 'Text Feature Extraction — sklearn', url: 'https://www.youtube.com/watch?v=IKgBLTeQQL8' },
    ],
    docs: [
      { title: 'sklearn CountVectorizer', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html' },
      { title: 'sklearn Text Feature Extraction', url: 'https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction' },
    ],
    books: [
      { title: 'Applied Text Analysis with Python', url: 'https://www.oreilly.com/library/view/applied-text-analysis/9781491963036/' },
      { title: 'Introduction to Information Retrieval', url: 'https://nlp.stanford.edu/IR-book/' },
    ],
  },
};

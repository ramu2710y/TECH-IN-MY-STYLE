export const wordEmbeddings = {
  id: 'word-embeddings',
  title: 'Word Embeddings',
  icon: '🧭',
  thinking: {
    intuition: `TF-IDF treats "king" and "queen" as completely unrelated. But we know they're similar. Word embeddings solve this by mapping every word to a point in a high-dimensional space — where similar words are close together. "King" and "queen" end up near each other. "King" - "man" + "woman" ≈ "queen".`,
    analogy: `Think of a city map 🗺️. Words are like locations. "Paris" and "London" are close (both capitals). "Paris" and "pizza" are far apart. Word embeddings create this map for language — where distance means semantic difference.`,
  },
  description: {
    text: `Word embeddings are dense vector representations of words where semantic relationships are encoded as geometric relationships. Words with similar meanings have similar vectors. They are learned from large text corpora using neural networks.`,
    bullets: [
      'Word2Vec (Google, 2013): CBOW and Skip-gram architectures',
      'GloVe (Stanford, 2014): Global co-occurrence statistics',
      'FastText (Facebook): Handles subwords, works for rare/unknown words',
      'Typical dimensions: 50, 100, 200, 300',
      'Captures analogies: king - man + woman ≈ queen',
      'Pre-trained embeddings available for immediate use',
    ],
    insight: `Word2Vec's famous "king - man + woman = queen" analogy shows that arithmetic on word vectors captures real-world relationships. This is because the model learns to place words in contexts where they appear together.`,
  },
  code: [
    {
      label: 'Word2Vec — Gensim',
      language: 'python',
      code: `from gensim.models import Word2Vec
from nltk.tokenize import word_tokenize
import nltk
nltk.download('punkt')

sentences = [
    "the king rules the kingdom",
    "the queen rules the kingdom",
    "the man is strong",
    "the woman is strong",
    "paris is the capital of france",
    "london is the capital of england",
]

tokenized = [word_tokenize(s.lower()) for s in sentences]

model = Word2Vec(tokenized, vector_size=50, window=3, min_count=1, epochs=100)

# Word vector
print("king vector shape:", model.wv['king'].shape)

# Most similar words
print(model.wv.most_similar('king', topn=3))

# Word analogy: king - man + woman
result = model.wv.most_similar(positive=['king', 'woman'], negative=['man'])
print("king - man + woman =", result[0][0])`,
    },
    {
      label: 'Pre-trained GloVe Embeddings',
      language: 'python',
      code: `# Download: https://nlp.stanford.edu/projects/glove/
# glove.6B.100d.txt

import numpy as np

def load_glove(path):
    embeddings = {}
    with open(path, encoding='utf-8') as f:
        for line in f:
            values = line.split()
            word = values[0]
            vector = np.array(values[1:], dtype='float32')
            embeddings[word] = vector
    return embeddings

glove = load_glove('glove.6B.100d.txt')

# Cosine similarity
def cosine_sim(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

print(cosine_sim(glove['king'], glove['queen']))   # ~0.75
print(cosine_sim(glove['king'], glove['pizza']))   # ~0.15`,
    },
    {
      label: 'FastText — Handles Unknown Words',
      language: 'python',
      code: `from gensim.models import FastText

sentences = [
    ["natural", "language", "processing", "is", "fascinating"],
    ["deep", "learning", "powers", "nlp", "models"],
    ["transformers", "revolutionized", "natural", "language"],
]

model = FastText(sentences, vector_size=50, window=3, min_count=1, epochs=50)

# FastText can handle words NOT in training data
# by using subword (character n-gram) information
print(model.wv['nlp'])           # known word
print(model.wv['nlping'])        # unknown word — still works!
print(model.wv.most_similar('language', topn=3))`,
    },
  ],
  applications: [
    { title: 'Semantic Search', desc: 'Find documents similar in meaning, not just keyword matches.', icon: 'search' },
    { title: 'Machine Translation', desc: 'Align word meanings across languages using shared embedding space.', icon: 'globe' },
    { title: 'Recommendation Systems', desc: 'Recommend similar products/articles using embedding similarity.', icon: 'star' },
    { title: 'Named Entity Recognition', desc: 'Use embeddings as features for NER models.', icon: 'tag' },
    { title: 'Sentiment Analysis', desc: 'Capture semantic nuance beyond simple word counts.', icon: 'chart-bar' },
    { title: 'Question Answering', desc: 'Match questions to answers using semantic vector similarity.', icon: 'question-circle' },
  ],
  interview: [
    {
      q: 'What are word embeddings and why are they better than BoW?',
      a: 'Word embeddings are dense vector representations where similar words have similar vectors. Unlike BoW, they capture semantic relationships — "good" and "great" are close in embedding space. They are also lower-dimensional and less sparse.',
    },
    {
      q: 'What is the difference between Word2Vec CBOW and Skip-gram?',
      a: 'CBOW (Continuous Bag of Words) predicts a target word from its context words. Skip-gram predicts context words from a target word. Skip-gram works better for rare words; CBOW is faster to train.',
    },
    {
      q: 'How does GloVe differ from Word2Vec?',
      a: 'Word2Vec uses a local context window (predicts neighboring words). GloVe uses global co-occurrence statistics across the entire corpus. GloVe often performs better on word analogy tasks.',
    },
    {
      q: 'What is the famous word analogy example for Word2Vec?',
      a: '"king" - "man" + "woman" ≈ "queen". This shows that the embedding space encodes semantic relationships as vector arithmetic. Similar analogies: "Paris" - "France" + "Italy" ≈ "Rome".',
    },
    {
      q: 'What advantage does FastText have over Word2Vec?',
      a: 'FastText represents words as bags of character n-grams, so it can generate vectors for out-of-vocabulary (OOV) words. Word2Vec cannot handle words not seen during training.',
    },
  ],
  mcqs: [
    {
      q: 'What does Word2Vec\'s Skip-gram model predict?',
      options: ['Target word from context', 'Context words from target word', 'Sentence embeddings', 'Document vectors'],
      answer: 1,
    },
    {
      q: 'Which embedding model handles out-of-vocabulary words?',
      options: ['Word2Vec', 'GloVe', 'FastText', 'TF-IDF'],
      answer: 2,
    },
    {
      q: '"king - man + woman ≈ ?" — what is the answer?',
      options: ['prince', 'queen', 'princess', 'lady'],
      answer: 1,
    },
    {
      q: 'Word embeddings are typically:',
      options: ['Sparse and high-dimensional', 'Dense and low-dimensional', 'Binary vectors', 'One-hot encoded'],
      answer: 1,
    },
  ],
  resources: {
    videos: [
      { title: 'Word2Vec Explained — StatQuest', url: 'https://www.youtube.com/watch?v=viZrOnJclY0' },
      { title: 'Word Embeddings — 3Blue1Brown style', url: 'https://www.youtube.com/watch?v=gQddtTdmG_8' },
    ],
    docs: [
      { title: 'Gensim Word2Vec', url: 'https://radimrehurek.com/gensim/models/word2vec.html' },
      { title: 'GloVe — Stanford NLP', url: 'https://nlp.stanford.edu/projects/glove/' },
      { title: 'FastText — Facebook AI', url: 'https://fasttext.cc/' },
    ],
    books: [
      { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
      { title: 'Deep Learning for NLP — Goldberg', url: 'https://www.morganclaypool.com/doi/abs/10.2200/S00762ED1V01Y201703HLT037' },
    ],
  },
};

export const stopwords = {
  id: 'stopwords',
  title: 'Stopwords Removal',
  icon: '🚫',
  thinking: {
    intuition: `In any sentence, words like "the", "is", "at", "which", "on" appear constantly but carry almost no meaning on their own. Removing them lets the model focus on the words that actually matter — the signal, not the noise.`,
    analogy: `Imagine reading a recipe 🍳. "Put the eggs in the bowl and then mix it well." The important words are "eggs", "bowl", "mix". The rest — "put", "the", "in", "and", "then", "it", "well" — are filler. Stopword removal strips that filler away.`,
  },
  description: {
    text: `Stopwords are high-frequency words that carry little semantic meaning and are typically removed during text preprocessing to reduce noise and dimensionality. The exact list varies by language and use case.`,
    bullets: [
      'Common English stopwords: "the", "is", "at", "which", "on", "a", "an"',
      'NLTK provides 179 English stopwords; spaCy has its own curated list',
      'Stopword lists are language-specific and domain-specific',
      'Removing stopwords reduces vocabulary size and speeds up processing',
      'Not always beneficial — sentiment analysis may need "not", "never"',
    ],
    insight: `Be careful with stopword removal in sentiment analysis. "This is NOT good" → removing "not" gives "good" — completely reversing the meaning. Always evaluate whether stopword removal helps or hurts your specific task.`,
  },
  code: [
    {
      label: 'NLTK Stopwords',
      language: 'python',
      code: `import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download('stopwords')
nltk.download('punkt')

text = "This is a simple example showing how stopwords are removed from text."

stop_words = set(stopwords.words('english'))
tokens = word_tokenize(text.lower())

filtered = [w for w in tokens if w.isalpha() and w not in stop_words]

print("Original:", tokens)
print("Filtered:", filtered)
# ['simple', 'example', 'showing', 'stopwords', 'removed', 'text']

# See all stopwords
print("Total stopwords:", len(stop_words))
print(sorted(list(stop_words))[:10])`,
    },
    {
      label: 'spaCy Stopwords',
      language: 'python',
      code: `import spacy
nlp = spacy.load("en_core_web_sm")

text = "The quick brown fox jumps over the lazy dog."
doc = nlp(text)

# Filter out stopwords and punctuation
filtered = [token.text for token in doc if not token.is_stop and not token.is_punct]
print("Filtered:", filtered)
# ['quick', 'brown', 'fox', 'jumps', 'lazy', 'dog']

# Check if a word is a stopword
print(nlp.vocab["the"].is_stop)   # True
print(nlp.vocab["fox"].is_stop)   # False

# Add custom stopword
nlp.vocab["example"].is_stop = True`,
    },
    {
      label: 'Custom Stopword List',
      language: 'python',
      code: `from nltk.corpus import stopwords

# Start with NLTK's list
stop_words = set(stopwords.words('english'))

# Add domain-specific stopwords
custom_stops = {"said", "also", "would", "could", "one", "two"}
stop_words.update(custom_stops)

# Remove words you want to KEEP (e.g., for sentiment)
stop_words.discard("not")
stop_words.discard("never")
stop_words.discard("no")

text = "I would never say this is not a good product"
tokens = text.lower().split()
filtered = [w for w in tokens if w not in stop_words]
print(filtered)
# ['never', 'say', 'good', 'product']  — 'not' preserved!`,
    },
  ],
  applications: [
    { title: 'Search Engines', desc: 'Index only meaningful words to reduce storage and improve speed.', icon: 'search' },
    { title: 'Text Classification', desc: 'Reduce feature space for faster, cleaner classifiers.', icon: 'tag' },
    { title: 'Topic Modeling', desc: 'Remove noise before LDA/NMF to get cleaner topics.', icon: 'layer-group' },
    { title: 'Document Similarity', desc: 'Compare documents based on meaningful content words only.', icon: 'file' },
    { title: 'Keyword Extraction', desc: 'Extract important terms by filtering out common words.', icon: 'key' },
    { title: 'Chatbot Intent', desc: 'Focus on action words to detect user intent accurately.', icon: 'comments' },
  ],
  interview: [
    {
      q: 'What are stopwords and why are they removed?',
      a: 'Stopwords are high-frequency words (like "the", "is", "at") that carry little semantic meaning. They are removed to reduce noise, decrease vocabulary size, and speed up NLP processing.',
    },
    {
      q: 'When should you NOT remove stopwords?',
      a: 'In sentiment analysis ("not good" vs "good"), question answering (where "who", "what", "where" are critical), and language modeling tasks where word order and function words matter.',
    },
    {
      q: 'How do you add or remove words from NLTK\'s stopword list?',
      a: 'Get the set with stopwords.words("english"), then use .add() or .update() to add words, and .discard() or .remove() to remove words you want to keep.',
    },
    {
      q: 'Does spaCy use the same stopword list as NLTK?',
      a: 'No. spaCy has its own curated stopword list per language, accessible via token.is_stop. You can customize it by setting nlp.vocab["word"].is_stop = True/False.',
    },
    {
      q: 'How does stopword removal affect TF-IDF?',
      a: 'TF-IDF naturally down-weights common words (high DF = low IDF), so stopword removal has less impact on TF-IDF than on raw count-based methods. But it still reduces dimensionality.',
    },
  ],
  mcqs: [
    {
      q: 'Which of these is typically a stopword?',
      options: ['Python', 'the', 'neural', 'embedding'],
      answer: 1,
    },
    {
      q: 'In which task should you be careful about removing "not"?',
      options: ['Topic Modeling', 'Document Clustering', 'Sentiment Analysis', 'Keyword Extraction'],
      answer: 2,
    },
    {
      q: 'How many English stopwords does NLTK provide by default?',
      options: ['50', '100', '179', '500'],
      answer: 2,
    },
    {
      q: 'Which spaCy token attribute checks if a word is a stopword?',
      options: ['token.is_common', 'token.is_stop', 'token.stop_', 'token.is_filler'],
      answer: 1,
    },
  ],
  resources: {
    videos: [
      { title: 'Stopwords Removal — NLP Tutorial', url: 'https://www.youtube.com/watch?v=p3pLPsMDkVs' },
      { title: 'Text Preprocessing in Python', url: 'https://www.youtube.com/watch?v=8vbd3E6tK2U' },
    ],
    docs: [
      { title: 'NLTK Stopwords Corpus', url: 'https://www.nltk.org/book/ch02.html' },
      { title: 'spaCy Stop Words', url: 'https://spacy.io/api/language#attributes' },
    ],
    books: [
      { title: 'Natural Language Processing with Python', url: 'https://www.nltk.org/book/' },
      { title: 'Text Analytics with Python — Sarkar', url: 'https://www.apress.com/gp/book/9781484243534' },
    ],
  },
};

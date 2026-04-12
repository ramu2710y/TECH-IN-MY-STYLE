import { stemming } from './topics/stemming.js';
import { lemmatization } from './topics/lemmatization.js';
import { stopwords } from './topics/stopwords.js';
import { bagOfWords } from './topics/bagofwords.js';
import { tfidf } from './topics/tfidf.js';
import { wordEmbeddings } from './topics/wordembeddings.js';
import { ner } from './topics/ner.js';
import { posTagging } from './topics/postagging.js';
import { transformers } from './topics/transformers.js';
import { bertGpt } from './topics/bertgpt.js';

export const nlpTopicDetails = {
  tokenization: {
    id: 'tokenization',
    title: 'Tokenization',
    icon: '✂️',
    thinking: {
      intuition: `Imagine you're reading a book. Before you understand a sentence, your brain automatically breaks it into individual words. That's exactly what tokenization does — it splits raw text into manageable pieces called "tokens".`,
      analogy: `Think of tokenization like cutting a pizza 🍕. The whole pizza is your text. Each slice is a token. You can't eat the whole pizza at once — you need slices. Similarly, a machine can't process raw text — it needs tokens.`,
    },
    description: {
      text: `Tokenization is the first and most fundamental step in any NLP pipeline. It converts a string of text into a list of tokens — which can be words, subwords, characters, or sentences depending on the tokenizer used.`,
      bullets: [
        'Word tokenization splits text by spaces and punctuation',
        'Sentence tokenization splits a paragraph into individual sentences',
        'Subword tokenization (BPE, WordPiece) handles unknown words gracefully',
        'Character tokenization treats each character as a token',
      ],
      insight: `Modern LLMs like GPT and BERT use subword tokenization (BPE / WordPiece) — not simple word splitting. This allows them to handle rare words and multiple languages efficiently.`,
    },
    code: [
      {
        label: 'NLTK — Word & Sentence Tokenization',
        language: 'python',
        code: `import nltk\nnltk.download('punkt')\nfrom nltk.tokenize import word_tokenize, sent_tokenize\n\ntext = "Hello! NLP is amazing. Let's learn tokenization."\n\n# Word tokens\nwords = word_tokenize(text)\nprint("Words:", words)\n# ['Hello', '!', 'NLP', 'is', 'amazing', '.', "Let's", 'learn', 'tokenization', '.']\n\n# Sentence tokens\nsentences = sent_tokenize(text)\nprint("Sentences:", sentences)\n# ['Hello!', 'NLP is amazing.', "Let's learn tokenization."]`,
      },
      {
        label: 'spaCy Tokenization',
        language: 'python',
        code: `import spacy\nnlp = spacy.load("en_core_web_sm")\n\ndoc = nlp("Apple is looking at buying U.K. startup for $1 billion.")\n\nfor token in doc:\n    print(token.text, token.pos_, token.is_stop)`,
      },
      {
        label: 'HuggingFace BPE Tokenizer (GPT-2)',
        language: 'python',
        code: `from transformers import GPT2Tokenizer\n\ntokenizer = GPT2Tokenizer.from_pretrained("gpt2")\ntext = "Tokenization is the first step in NLP."\n\ntokens = tokenizer.tokenize(text)\nids = tokenizer.encode(text)\n\nprint("Tokens:", tokens)\nprint("IDs:", ids)`,
      },
    ],
    applications: [
      { title: 'Search Engines', desc: 'Google tokenizes queries to match relevant documents.', icon: 'search' },
      { title: 'Chatbots', desc: 'Virtual assistants tokenize user input before processing.', icon: 'comments' },
      { title: 'Machine Translation', desc: 'Translators tokenize source text before encoding.', icon: 'globe' },
      { title: 'Sentiment Analysis', desc: 'Reviews are tokenized before sentiment scoring.', icon: 'chart-bar' },
      { title: 'Text Summarization', desc: 'Documents are tokenized to extract key sentences.', icon: 'file' },
      { title: 'Spam Detection', desc: 'Emails are tokenized to identify spam patterns.', icon: 'shield' },
    ],
    interview: [
      { q: 'What is tokenization in NLP?', a: 'Tokenization is the process of splitting raw text into smaller units called tokens (words, subwords, or characters). It is the first step in most NLP pipelines.' },
      { q: 'What is the difference between word and subword tokenization?', a: 'Word tokenization splits text by whitespace/punctuation. Subword tokenization (BPE, WordPiece) breaks rare words into smaller known pieces, handling out-of-vocabulary words better.' },
      { q: 'Why do transformers use subword tokenization?', a: 'Subword tokenization balances vocabulary size and coverage. It handles rare/unknown words by splitting them into known subwords, enabling multilingual support with a fixed vocabulary.' },
      { q: 'What is BPE (Byte Pair Encoding)?', a: 'BPE is a subword tokenization algorithm that iteratively merges the most frequent pair of bytes/characters. Used by GPT-2, RoBERTa, and many modern LLMs.' },
      { q: 'How does NLTK tokenization differ from spaCy?', a: 'NLTK uses rule-based tokenizers (punkt). spaCy uses a more sophisticated pipeline with language-specific rules, handling contractions and special cases more accurately.' },
    ],
    mcqs: [
      { q: 'Which of the following is NOT a type of tokenization?', options: ['Word tokenization', 'Sentence tokenization', 'Semantic tokenization', 'Subword tokenization'], answer: 2 },
      { q: 'What tokenization method does GPT-2 use?', options: ['Word tokenization', 'Character tokenization', 'Byte Pair Encoding (BPE)', 'Sentence tokenization'], answer: 2 },
      { q: 'Which library provides the word_tokenize() function?', options: ['spaCy', 'NLTK', 'sklearn', 'transformers'], answer: 1 },
      { q: 'What is the main advantage of subword tokenization?', options: ['Faster processing', 'Handles out-of-vocabulary words', 'Smaller model size', 'Better accuracy on short texts'], answer: 1 },
    ],
    resources: {
      videos: [
        { title: 'Tokenization Explained — Andrej Karpathy', url: 'https://www.youtube.com/watch?v=zduSFxRajkE' },
        { title: 'NLP with NLTK — Tokenization', url: 'https://www.youtube.com/watch?v=FLZvOKSCkxY' },
      ],
      docs: [
        { title: 'NLTK Tokenize Docs', url: 'https://www.nltk.org/api/nltk.tokenize.html' },
        { title: 'HuggingFace Tokenizers', url: 'https://huggingface.co/docs/tokenizers' },
        { title: 'spaCy Tokenization', url: 'https://spacy.io/usage/linguistic-features#tokenization' },
      ],
      books: [
        { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
        { title: 'Natural Language Processing with Python (NLTK Book)', url: 'https://www.nltk.org/book/' },
      ],
    },
  },
  stemming,
  lemmatization,
  stopwords,
  'bag-of-words': bagOfWords,
  tfidf,
  'word-embeddings': wordEmbeddings,
  ner,
  'pos-tagging': posTagging,
  transformers,
  'bert-gpt': bertGpt,
};

export const posTagging = {
  id: 'pos-tagging',
  title: 'POS Tagging',
  icon: '🔖',
  thinking: {
    intuition: `Every word in a sentence plays a role — some are actions (verbs), some are things (nouns), some describe (adjectives). Part-of-Speech tagging is the process of labeling each word with its grammatical role. It's how machines understand sentence structure.`,
    analogy: `Think of a sentence like a sports team 🏀. Each player has a position — point guard, center, forward. POS tagging assigns each word its "position" in the sentence — noun, verb, adjective, adverb. Knowing positions helps you understand how the team (sentence) works together.`,
  },
  description: {
    text: `Part-of-Speech (POS) tagging assigns a grammatical category to each word in a sentence — noun, verb, adjective, adverb, pronoun, preposition, etc. It's a foundational step for many downstream NLP tasks.`,
    bullets: [
      'Penn Treebank tagset: 36 tags (NN=noun, VB=verb, JJ=adjective, RB=adverb...)',
      'Universal POS tags: 17 coarse-grained tags (NOUN, VERB, ADJ, ADV...)',
      'Context matters: "book a flight" (verb) vs "read a book" (noun)',
      'Modern POS taggers use neural networks with near-human accuracy (>97%)',
      'spaCy uses token.pos_ (universal) and token.tag_ (fine-grained)',
      'POS tags are used as features for NER, parsing, and lemmatization',
    ],
    insight: `The same word can have different POS tags depending on context. "Can" can be a modal verb ("I can do it") or a noun ("a tin can"). Modern neural taggers handle this ambiguity by looking at surrounding context.`,
  },
  code: [
    {
      label: 'POS Tagging — spaCy',
      language: 'python',
      code: `import spacy

nlp = spacy.load("en_core_web_sm")

text = "The quick brown fox jumps over the lazy dog."
doc = nlp(text)

print(f"{'Token':<12} {'POS':<8} {'Tag':<8} {'Explanation'}")
print("-" * 50)
for token in doc:
    print(f"{token.text:<12} {token.pos_:<8} {token.tag_:<8} {spacy.explain(token.tag_)}")

# Token        POS      Tag      Explanation
# The          DET      DT       determiner
# quick        ADJ      JJ       adjective
# brown        ADJ      JJ       adjective
# fox          NOUN     NN       noun, singular
# jumps        VERB     VBZ      verb, 3rd person singular`,
    },
    {
      label: 'NLTK POS Tagging',
      language: 'python',
      code: `import nltk
from nltk.tokenize import word_tokenize
nltk.download('averaged_perceptron_tagger')
nltk.download('punkt')

text = "Google was founded by Larry Page and Sergey Brin in 1998."
tokens = word_tokenize(text)
tags = nltk.pos_tag(tokens)

print(tags)
# [('Google', 'NNP'), ('was', 'VBD'), ('founded', 'VBN'),
#  ('by', 'IN'), ('Larry', 'NNP'), ('Page', 'NNP'), ...]

# Filter only nouns
nouns = [word for word, tag in tags if tag.startswith('NN')]
print("Nouns:", nouns)

# Filter only verbs
verbs = [word for word, tag in tags if tag.startswith('VB')]
print("Verbs:", verbs)`,
    },
    {
      label: 'POS for Keyword Extraction',
      language: 'python',
      code: `import spacy

nlp = spacy.load("en_core_web_sm")

text = """
Machine learning is a subset of artificial intelligence that enables
computers to learn from data without being explicitly programmed.
"""

doc = nlp(text)

# Extract noun phrases (important keywords)
noun_phrases = [chunk.text for chunk in doc.noun_chunks]
print("Noun phrases:", noun_phrases)

# Extract only content words (nouns + verbs + adjectives)
content_words = [
    token.lemma_ for token in doc
    if token.pos_ in ('NOUN', 'VERB', 'ADJ') and not token.is_stop
]
print("Content words:", content_words)`,
    },
  ],
  applications: [
    { title: 'Grammar Checking', desc: 'Detect grammatical errors by analyzing POS patterns.', icon: 'edit' },
    { title: 'Named Entity Recognition', desc: 'POS tags are key features for NER models.', icon: 'tag' },
    { title: 'Keyword Extraction', desc: 'Extract nouns and noun phrases as document keywords.', icon: 'key' },
    { title: 'Machine Translation', desc: 'Understand source language structure for accurate translation.', icon: 'globe' },
    { title: 'Text-to-Speech', desc: 'Determine correct pronunciation based on word role.', icon: 'volume' },
    { title: 'Question Answering', desc: 'Parse question structure to identify what is being asked.', icon: 'question-circle' },
  ],
  interview: [
    {
      q: 'What is Part-of-Speech tagging?',
      a: 'POS tagging assigns a grammatical category (noun, verb, adjective, etc.) to each word in a sentence. It helps machines understand the syntactic structure of text.',
    },
    {
      q: 'What is the difference between token.pos_ and token.tag_ in spaCy?',
      a: 'token.pos_ gives the universal coarse-grained POS tag (NOUN, VERB, ADJ — 17 categories). token.tag_ gives the fine-grained Penn Treebank tag (NN, VBZ, JJ — 36+ categories) with more detail.',
    },
    {
      q: 'How does context affect POS tagging?',
      a: 'The same word can have different POS tags in different contexts. "Book" is a NOUN in "read a book" but a VERB in "book a flight". Modern taggers use surrounding words (context window) to resolve this ambiguity.',
    },
    {
      q: 'What NLP tasks use POS tags as features?',
      a: 'Named Entity Recognition, dependency parsing, lemmatization (POS-aware), coreference resolution, text-to-speech, grammar checking, and information extraction all use POS tags.',
    },
    {
      q: 'What accuracy do modern POS taggers achieve?',
      a: 'Modern neural POS taggers achieve over 97% accuracy on standard benchmarks like Penn Treebank. spaCy\'s tagger achieves ~97% on English. The remaining errors are mostly on ambiguous or rare words.',
    },
  ],
  mcqs: [
    {
      q: 'What does "NNP" mean in Penn Treebank POS tags?',
      options: ['Normal noun phrase', 'Proper noun singular', 'Noun number plural', 'Named noun phrase'],
      answer: 1,
    },
    {
      q: 'Which spaCy attribute gives the universal POS tag?',
      options: ['token.tag_', 'token.pos_', 'token.dep_', 'token.ent_type_'],
      answer: 1,
    },
    {
      q: 'In "I can swim", what POS is "can"?',
      options: ['Noun', 'Adjective', 'Modal Verb', 'Adverb'],
      answer: 2,
    },
    {
      q: 'How many universal POS tags are there?',
      options: ['8', '12', '17', '36'],
      answer: 2,
    },
  ],
  resources: {
    videos: [
      { title: 'POS Tagging Explained — NLP Tutorial', url: 'https://www.youtube.com/watch?v=AqDakbl_6vs' },
      { title: 'spaCy POS Tagging Tutorial', url: 'https://www.youtube.com/watch?v=dIUTsFT2MeQ' },
    ],
    docs: [
      { title: 'spaCy POS Tagging', url: 'https://spacy.io/usage/linguistic-features#pos-tagging' },
      { title: 'NLTK POS Tagger', url: 'https://www.nltk.org/book/ch05.html' },
      { title: 'Penn Treebank POS Tags', url: 'https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html' },
    ],
    books: [
      { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
      { title: 'Natural Language Processing with Python', url: 'https://www.nltk.org/book/' },
    ],
  },
};

export const bertGpt = {
  id: 'bert-gpt',
  title: 'BERT & GPT',
  icon: '🤖',
  thinking: {
    intuition: `Before BERT and GPT, you had to train a separate model for every NLP task. These models changed everything: train once on massive text, then fine-tune for any task. BERT reads text bidirectionally (understands context from both sides). GPT generates text by predicting the next word. Together, they power most modern AI applications.`,
    analogy: `BERT is like a student who reads the entire exam paper before answering — it sees context from both left and right. GPT is like a writer who composes one word at a time, each word informed by everything written before. Two different superpowers, both built on Transformers.`,
  },
  description: {
    text: `BERT (Bidirectional Encoder Representations from Transformers) and GPT (Generative Pre-trained Transformer) are pre-trained language models that revolutionized NLP. They learn rich language representations from massive text corpora and can be fine-tuned for virtually any NLP task.`,
    bullets: [
      'BERT: encoder-only, bidirectional, trained with Masked Language Modeling (MLM)',
      'GPT: decoder-only, left-to-right, trained with Causal Language Modeling (CLM)',
      'Pre-training on massive corpora (Wikipedia, BooksCorpus, web text)',
      'Fine-tuning: add a task-specific head and train on labeled data',
      'BERT excels at: classification, NER, QA, sentence similarity',
      'GPT excels at: text generation, summarization, code generation',
    ],
    insight: `BERT's MLM pre-training randomly masks 15% of tokens and trains the model to predict them. This forces the model to learn deep bidirectional context. GPT's CLM trains the model to predict the next token — simple but scales incredibly well (GPT-4 has ~1.8 trillion parameters).`,
  },
  code: [
    {
      label: 'BERT for Text Classification',
      language: 'python',
      code: `from transformers import BertTokenizer, BertForSequenceClassification
from transformers import Trainer, TrainingArguments
import torch

# Load pre-trained BERT
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)

# Tokenize input
texts = ["I love this product!", "This is terrible."]
inputs = tokenizer(texts, padding=True, truncation=True, return_tensors="pt")

# Forward pass
with torch.no_grad():
    outputs = model(**inputs)
    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-1)

print("Predictions:", predictions.tolist())  # [1, 0] (positive, negative)`,
    },
    {
      label: 'GPT-2 Text Generation',
      language: 'python',
      code: `from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2LMHeadModel.from_pretrained('gpt2')

prompt = "Natural language processing is"
inputs = tokenizer.encode(prompt, return_tensors='pt')

# Generate text
with torch.no_grad():
    output = model.generate(
        inputs,
        max_length=100,
        num_return_sequences=1,
        temperature=0.7,
        do_sample=True,
        pad_token_id=tokenizer.eos_token_id,
    )

generated = tokenizer.decode(output[0], skip_special_tokens=True)
print(generated)`,
    },
    {
      label: 'BERT Embeddings & Sentence Similarity',
      language: 'python',
      code: `from transformers import AutoTokenizer, AutoModel
import torch
import torch.nn.functional as F

def mean_pooling(model_output, attention_mask):
    token_embeddings = model_output[0]
    input_mask_expanded = attention_mask.unsqueeze(-1).expand(token_embeddings.size()).float()
    return torch.sum(token_embeddings * input_mask_expanded, 1) / torch.clamp(input_mask_expanded.sum(1), min=1e-9)

model_name = "sentence-transformers/all-MiniLM-L6-v2"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name)

sentences = ["I love machine learning", "I enjoy deep learning", "The weather is nice today"]
encoded = tokenizer(sentences, padding=True, truncation=True, return_tensors='pt')

with torch.no_grad():
    output = model(**encoded)

embeddings = mean_pooling(output, encoded['attention_mask'])
embeddings = F.normalize(embeddings, p=2, dim=1)

# Cosine similarity
sim = torch.mm(embeddings, embeddings.T)
print("Similarity matrix:\\n", sim.round(decimals=3))`,
    },
  ],
  applications: [
    { title: 'Search Engines', desc: 'Google uses BERT to understand search query intent.', icon: 'search' },
    { title: 'Chatbots & Assistants', desc: 'ChatGPT, Copilot, and Gemini are all GPT-based systems.', icon: 'robot' },
    { title: 'Code Generation', desc: 'GitHub Copilot uses Codex (GPT fine-tuned on code).', icon: 'code' },
    { title: 'Document QA', desc: 'BERT reads documents and answers questions about them.', icon: 'question-circle' },
    { title: 'Content Moderation', desc: 'Classify harmful content using fine-tuned BERT models.', icon: 'shield' },
    { title: 'Medical AI', desc: 'BioBERT and ClinicalBERT power medical NLP applications.', icon: 'hospital' },
  ],
  interview: [
    {
      q: 'What is the key difference between BERT and GPT?',
      a: 'BERT is encoder-only and bidirectional — it reads the full context from both directions. GPT is decoder-only and autoregressive — it generates text left-to-right. BERT is better for understanding tasks; GPT is better for generation.',
    },
    {
      q: 'What is Masked Language Modeling (MLM)?',
      a: 'BERT\'s pre-training objective. 15% of input tokens are randomly masked, and the model learns to predict them using bidirectional context. This forces the model to learn deep contextual representations.',
    },
    {
      q: 'What is fine-tuning in the context of BERT/GPT?',
      a: 'Fine-tuning takes a pre-trained model and continues training on a smaller, task-specific labeled dataset. You add a task-specific head (e.g., classification layer) and train with a small learning rate to adapt the model.',
    },
    {
      q: 'What is the difference between BERT and RoBERTa?',
      a: 'RoBERTa (Robustly Optimized BERT) removes Next Sentence Prediction, trains on more data with larger batches, uses dynamic masking, and trains longer. It consistently outperforms BERT on benchmarks.',
    },
    {
      q: 'What is a token in BERT and what is the [CLS] token?',
      a: 'BERT uses WordPiece tokenization. [CLS] is a special token prepended to every input — its final hidden state is used as the aggregate sequence representation for classification tasks. [SEP] separates sentence pairs.',
    },
  ],
  mcqs: [
    {
      q: 'What does BERT stand for?',
      options: [
        'Bidirectional Encoder Representations from Transformers',
        'Binary Encoded Recurrent Transformer',
        'Bidirectional Embedding Representation Technique',
        'Base Encoder for Recurrent Tasks',
      ],
      answer: 0,
    },
    {
      q: 'What pre-training objective does BERT use?',
      options: ['Causal Language Modeling', 'Masked Language Modeling', 'Next Word Prediction', 'Contrastive Learning'],
      answer: 1,
    },
    {
      q: 'GPT generates text in which direction?',
      options: ['Right to left', 'Bidirectional', 'Left to right', 'Random order'],
      answer: 2,
    },
    {
      q: 'Which special token does BERT use for classification?',
      options: ['[MASK]', '[SEP]', '[CLS]', '[PAD]'],
      answer: 2,
    },
  ],
  resources: {
    videos: [
      { title: 'BERT Explained — Illustrated Guide', url: 'https://www.youtube.com/watch?v=xI0HHN5XKDo' },
      { title: 'GPT Explained — Andrej Karpathy', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' },
    ],
    docs: [
      { title: 'BERT Paper (arXiv)', url: 'https://arxiv.org/abs/1810.04805' },
      { title: 'HuggingFace BERT Docs', url: 'https://huggingface.co/docs/transformers/model_doc/bert' },
      { title: 'The Illustrated BERT — Jay Alammar', url: 'https://jalammar.github.io/illustrated-bert/' },
    ],
    books: [
      { title: 'Natural Language Processing with Transformers', url: 'https://www.oreilly.com/library/view/natural-language-processing/9781098136789/' },
      { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
    ],
  },
};

export const transformers = {
  id: 'transformers',
  title: 'Transformers & Attention',
  icon: '⚡',
  thinking: {
    intuition: `Before Transformers, RNNs read text word by word — like reading a book one letter at a time and trying to remember everything. Transformers changed this: they look at ALL words simultaneously and figure out which words are most relevant to each other. This "attention" mechanism is the key breakthrough.`,
    analogy: `Imagine translating "The animal didn't cross the street because it was too tired." What does "it" refer to — the animal or the street? You instantly look back at the whole sentence and focus on "animal". That's attention — selectively focusing on relevant parts of the input. Transformers do this mathematically for every word, simultaneously.`,
  },
  description: {
    text: `The Transformer architecture (Vaswani et al., 2017 — "Attention Is All You Need") replaced recurrent networks with self-attention mechanisms. It processes entire sequences in parallel, making it dramatically faster to train and better at capturing long-range dependencies.`,
    bullets: [
      'Self-attention: each word attends to all other words in the sequence',
      'Multi-head attention: multiple attention heads capture different relationships',
      'Positional encoding: adds position information since there is no recurrence',
      'Encoder-Decoder architecture: encoder reads input, decoder generates output',
      'Parallelizable: unlike RNNs, all positions processed simultaneously',
      '"Attention Is All You Need" (2017) is one of the most cited AI papers ever',
    ],
    insight: `The attention score between two words is computed as: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V. Q=Query, K=Key, V=Value. The √d_k scaling prevents vanishing gradients in high dimensions.`,
  },
  code: [
    {
      label: 'Self-Attention from Scratch',
      language: 'python',
      code: `import numpy as np

def softmax(x):
    e_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return e_x / e_x.sum(axis=-1, keepdims=True)

def self_attention(Q, K, V):
    d_k = Q.shape[-1]
    # Attention scores
    scores = Q @ K.T / np.sqrt(d_k)
    # Softmax to get attention weights
    weights = softmax(scores)
    # Weighted sum of values
    output = weights @ V
    return output, weights

# Example: 3 tokens, 4-dimensional embeddings
np.random.seed(42)
seq_len, d_model = 3, 4
Q = np.random.randn(seq_len, d_model)
K = np.random.randn(seq_len, d_model)
V = np.random.randn(seq_len, d_model)

output, attn_weights = self_attention(Q, K, V)
print("Attention weights:\\n", attn_weights.round(3))
print("Output shape:", output.shape)`,
    },
    {
      label: 'HuggingFace Transformer Pipeline',
      language: 'python',
      code: `from transformers import pipeline

# Text generation
generator = pipeline("text-generation", model="gpt2")
result = generator("Natural language processing is", max_length=50, num_return_sequences=1)
print(result[0]['generated_text'])

# Text classification (sentiment)
classifier = pipeline("sentiment-analysis")
texts = ["I love transformers!", "This is terrible."]
for text, result in zip(texts, classifier(texts)):
    print(f"{text} → {result['label']} ({result['score']:.3f})")

# Translation
translator = pipeline("translation_en_to_fr")
print(translator("Transformers revolutionized NLP."))`,
    },
    {
      label: 'Visualize Attention Weights',
      language: 'python',
      code: `from transformers import AutoTokenizer, AutoModel
import torch

model_name = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name, output_attentions=True)

text = "The cat sat on the mat."
inputs = tokenizer(text, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

# outputs.attentions: tuple of (batch, heads, seq, seq) per layer
attentions = outputs.attentions  # 12 layers
tokens = tokenizer.convert_ids_to_tokens(inputs['input_ids'][0])

# Layer 0, Head 0 attention matrix
layer0_head0 = attentions[0][0, 0].numpy()
print("Tokens:", tokens)
print("Attention shape:", layer0_head0.shape)`,
    },
  ],
  applications: [
    { title: 'Machine Translation', desc: 'Google Translate uses Transformer-based models for all languages.', icon: 'globe' },
    { title: 'Text Generation', desc: 'GPT models generate coherent long-form text using Transformers.', icon: 'edit' },
    { title: 'Question Answering', desc: 'BERT-based models read passages and answer questions accurately.', icon: 'question-circle' },
    { title: 'Code Generation', desc: 'GitHub Copilot uses Transformer models to generate code.', icon: 'code' },
    { title: 'Image Recognition', desc: 'Vision Transformers (ViT) apply attention to image patches.', icon: 'star' },
    { title: 'Drug Discovery', desc: 'AlphaFold uses Transformers to predict protein structures.', icon: 'dna' },
  ],
  interview: [
    {
      q: 'What is the key innovation of the Transformer architecture?',
      a: 'Self-attention — the ability for every position in the sequence to attend to every other position simultaneously. This replaces recurrence, enabling parallelization and better long-range dependency modeling.',
    },
    {
      q: 'What is the attention formula?',
      a: 'Attention(Q,K,V) = softmax(QKᵀ / √d_k) × V. Q=Query, K=Key, V=Value matrices. The √d_k scaling prevents dot products from growing too large in high dimensions, which would cause vanishing gradients after softmax.',
    },
    {
      q: 'What is multi-head attention?',
      a: 'Instead of one attention function, multi-head attention runs h parallel attention heads with different learned projections. Each head can focus on different types of relationships. Outputs are concatenated and projected.',
    },
    {
      q: 'Why do Transformers need positional encoding?',
      a: 'Self-attention is permutation-invariant — it has no notion of word order. Positional encodings (sinusoidal or learned) are added to embeddings to inject position information into the model.',
    },
    {
      q: 'What is the difference between encoder-only, decoder-only, and encoder-decoder Transformers?',
      a: 'Encoder-only (BERT): bidirectional, good for understanding tasks. Decoder-only (GPT): autoregressive, good for generation. Encoder-decoder (T5, BART): good for seq2seq tasks like translation and summarization.',
    },
  ],
  mcqs: [
    {
      q: 'What paper introduced the Transformer architecture?',
      options: ['BERT: Pre-training of Deep Bidirectional Transformers', 'Attention Is All You Need', 'GPT-3: Language Models are Few-Shot Learners', 'Deep Residual Learning'],
      answer: 1,
    },
    {
      q: 'Why is √d_k used in the attention formula?',
      options: ['To normalize the output', 'To prevent large dot products causing vanishing gradients', 'To speed up computation', 'To add positional information'],
      answer: 1,
    },
    {
      q: 'What does "multi-head" mean in multi-head attention?',
      options: ['Multiple layers', 'Multiple parallel attention functions', 'Multiple input sequences', 'Multiple output tokens'],
      answer: 1,
    },
    {
      q: 'GPT is an example of which Transformer type?',
      options: ['Encoder-only', 'Decoder-only', 'Encoder-Decoder', 'Bidirectional'],
      answer: 1,
    },
  ],
  resources: {
    videos: [
      { title: 'Attention Is All You Need — Illustrated Guide', url: 'https://www.youtube.com/watch?v=4Bdc55j80l8' },
      { title: 'The Illustrated Transformer — Jay Alammar', url: 'https://www.youtube.com/watch?v=dichIcUZfOw' },
    ],
    docs: [
      { title: 'Attention Is All You Need (Paper)', url: 'https://arxiv.org/abs/1706.03762' },
      { title: 'HuggingFace Transformers Docs', url: 'https://huggingface.co/docs/transformers' },
      { title: 'The Illustrated Transformer — Jay Alammar', url: 'https://jalammar.github.io/illustrated-transformer/' },
    ],
    books: [
      { title: 'Natural Language Processing with Transformers — Tunstall et al.', url: 'https://www.oreilly.com/library/view/natural-language-processing/9781098136789/' },
      { title: 'Speech and Language Processing — Jurafsky & Martin', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
    ],
  },
};

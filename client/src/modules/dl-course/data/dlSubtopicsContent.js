// All subtopic content data for DL course
export const dlSubtopicsContent = {

  'intro/what-is-dl': {
    title: 'What is Deep Learning?',
    description: `
      <p>Deep Learning is a subset of machine learning that uses <strong>neural networks with multiple layers</strong> (deep neural networks) to progressively extract higher-level features from raw input.</p>
      <p>Unlike traditional machine learning algorithms that require feature engineering by human experts, deep learning algorithms can automatically discover the representations needed for feature detection or classification from raw data. This ability to learn without human intervention is known as <strong>representation learning</strong>.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div>
      <p>Deep learning is "deep" because it uses neural networks with many layers—sometimes hundreds. Each layer transforms the data, refining the representation to better perform the task.</p></div>
      <p>The success of deep learning comes from its ability to:</p>
      <ul><li>Learn complex patterns from large amounts of data</li><li>Scale well with data and computational resources</li><li>Transfer learning from one domain to another</li><li>Continually improve with more data</li></ul>
      <div class="image-container"><img src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Deep Learning Neural Network"/><p class="caption">A visual representation of a deep neural network with multiple layers</p></div>`,
    examples: `
      <p>Here's a simple example of a deep neural network using TensorFlow/Keras:</p>
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout

def create_deep_model(input_dim, output_dim):
    model = Sequential([
        Dense(128, activation='relu', input_shape=(input_dim,)),
        Dropout(0.2),
        Dense(256, activation='relu'),
        Dropout(0.3),
        Dense(128, activation='relu'),
        Dense(64, activation='relu'),
        Dense(output_dim, activation='softmax')
    ])
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model

model = create_deep_model(784, 10)
model.summary()</code></pre></div>`,
    applications: [
      { icon: 'fa-language', title: 'Natural Language Processing', desc: 'Powers machine translation, sentiment analysis, chatbots, and virtual assistants like Siri and Alexa.' },
      { icon: 'fa-eye', title: 'Computer Vision', desc: 'Face recognition, object detection, image classification, autonomous vehicles, and medical image analysis.' },
      { icon: 'fa-heartbeat', title: 'Healthcare', desc: 'Disease diagnosis from medical images, drug discovery, personalized treatment plans.' },
      { icon: 'fa-robot', title: 'Robotics', desc: 'Robots use deep learning for perception, navigation, manipulation, and reinforcement learning.' },
      { icon: 'fa-music', title: 'Audio Processing', desc: 'Speech recognition, music generation, audio classification, and noise cancellation.' },
      { icon: 'fa-chart-line', title: 'Finance', desc: 'Fraud detection, algorithmic trading, risk assessment, and customer service automation.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4?si=pqb4hk68i9jikfmI',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view?usp=drive_link',
      books: [
        { title: 'Deep Learning', url: 'https://www.deeplearningbook.org/', author: 'Ian Goodfellow et al.' },
        { title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/', author: 'Aurélien Géron' },
        { title: 'Deep Learning with Python', url: 'https://www.manning.com/books/deep-learning-with-python', author: 'François Chollet' },
      ],
    },
    interviewQuestions: [
      { question: 'What is the difference between deep learning and machine learning?', answer: '<p>Machine learning uses algorithms to parse data and make decisions. Deep learning is a subset using neural networks with multiple layers. Key differences: feature extraction (manual vs automatic), data requirements (less vs more), hardware needs, and problem-solving approach.</p>' },
      { question: 'Why is deep learning becoming popular now?', answer: '<ol><li>Increased data availability</li><li>Computational power (GPUs/TPUs)</li><li>Algorithmic improvements (ReLU, better initialization)</li><li>Open source frameworks (TensorFlow, PyTorch)</li><li>Industry adoption and proven success</li></ol>' },
      { question: 'What are the limitations of deep learning?', answer: '<ul><li>Data hunger: requires large labeled datasets</li><li>Computational cost: intensive training</li><li>Black box nature: lacks interpretability</li><li>Brittleness: vulnerable to adversarial examples</li><li>Difficulty with causality</li></ul>' },
      { question: 'Explain the concept of "deep" in deep learning.', answer: '<p>"Deep" refers to neural networks with multiple hidden layers. These layers allow hierarchical representation learning, extracting increasingly abstract features, and modeling complex non-linear relationships.</p>' },
      { question: 'What is the role of activation functions in deep learning?', answer: '<p>Activation functions introduce non-linearity, enabling networks to learn complex patterns. They determine neuron activation, transform weighted sums, and allow backpropagation to work. Common ones: ReLU, Sigmoid, Tanh, Softmax.</p>' },
    ],
  },

  'intro/dl-vs-ml-vs-ai': {
    title: 'DL vs ML vs AI – Key differences',
    description: `
      <p>Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) are related but distinct fields often confused or used interchangeably.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Relationship Analogy</div><p>Think of these fields as concentric circles: AI is the largest, ML is a subset of AI, and DL is a specialized subset of ML.</p></div>
      <h3>Artificial Intelligence (AI)</h3>
      <p>AI refers to machines designed to mimic human intelligence — visual perception, speech recognition, decision-making, and language translation.</p>
      <ul><li><strong>Goal:</strong> Create systems that function intelligently and independently</li><li><strong>Examples:</strong> Voice assistants, game-playing AI (AlphaGo), autonomous vehicles</li></ul>
      <h3>Machine Learning (ML)</h3>
      <p>ML is a subset of AI focusing on algorithms that learn from data and make predictions without being explicitly programmed.</p>
      <ul><li><strong>Types:</strong> Supervised, unsupervised, reinforcement learning</li><li><strong>Examples:</strong> Recommendation systems, spam filters, credit scoring</li></ul>
      <h3>Deep Learning (DL)</h3>
      <p>DL is a specialized subset of ML using neural networks with many layers to analyze data at multiple levels of abstraction.</p>
      <ul><li><strong>Distinctive features:</strong> Automatic feature extraction, works with unstructured data</li><li><strong>Examples:</strong> Image recognition, NLP, self-driving cars</li></ul>`,
    examples: `
      <h3>Machine Learning Example: Decision Tree</h3>
      <div class="code-container"><pre><code class="language-python">from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

iris = load_iris()
X, y = iris.data, iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

model = DecisionTreeClassifier()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions):.2f}")</code></pre></div>`,
    applications: [
      { icon: 'fa-robot', title: 'Traditional AI', desc: 'Chess engines, expert systems in healthcare, rule-based chatbots for customer service.' },
      { icon: 'fa-chart-line', title: 'Machine Learning', desc: 'Credit scoring, fraud detection, email spam filters, product recommendation engines.' },
      { icon: 'fa-brain', title: 'Deep Learning', desc: 'Facial recognition, advanced speech recognition, medical image analysis, autonomous vehicles.' },
    ],
    resources: {
      video: 'https://youtu.be/gHXENP57beg?si=bpMeBpiW-R0f-iGy',
      pdf: 'https://drive.google.com/file/d/1FU6vT-CjamUTTSQd6H3ejSFgX1TxrjXN/view?usp=drive_link',
      links: [
        { title: 'IBM: AI vs Machine Learning vs Deep Learning', url: 'https://www.ibm.com/cloud/learn/ai-vs-machine-learning-vs-deep-learning' },
        { title: "NVIDIA: What's the Difference Between AI, ML, and DL?", url: 'https://www.nvidia.com/en-us/deep-learning-ai/ai-vs-machine-learning-vs-deep-learning/' },
      ],
    },
    interviewQuestions: [
      { question: 'What is the fundamental difference between AI, ML, and DL?', answer: '<p>AI is the broadest concept for intelligent machines. ML is a subset of AI that learns from data. DL is a subset of ML using multi-layer neural networks. All DL is ML, and all ML is AI, but not vice versa.</p>' },
      { question: 'When would you choose traditional ML over DL?', answer: '<ol><li>Limited data availability</li><li>Computational constraints</li><li>Need for interpretability</li><li>Structured, tabular data</li><li>Time constraints for training</li></ol>' },
      { question: 'How has the relationship between AI, ML, and DL evolved over time?', answer: '<p>1950s-60s: Rule-based AI. 1980s-90s: ML emerged, early neural networks. 2000s: ML flourished with SVMs, Random Forests. 2010s: DL exploded due to big data, GPUs, and algorithmic breakthroughs. Present: DL dominates unstructured data tasks.</p>' },
    ],
  },

  'intro/use-cases': {
    title: 'Use-cases of DL',
    description: `
      <p>Deep Learning has transformed numerous industries by enabling machines to perform tasks that previously required human intelligence. Its ability to learn from vast amounts of data makes it ideal for complex, real-world problems.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Deep learning excels when data is abundant, unstructured (images, text, audio), and when the patterns are too complex for manual feature engineering.</p></div>
      <p>Major application domains include computer vision, natural language processing, healthcare, autonomous systems, and generative AI.</p>`,
    applications: [
      { icon: 'fa-car', title: 'Autonomous Vehicles', desc: 'Self-driving cars use CNNs for object detection, lane recognition, and pedestrian detection in real-time.' },
      { icon: 'fa-stethoscope', title: 'Medical Diagnosis', desc: 'Deep learning models detect cancer, diabetic retinopathy, and other diseases from medical images with high accuracy.' },
      { icon: 'fa-language', title: 'Language Translation', desc: 'Transformer-based models like GPT and BERT power real-time translation and text generation.' },
      { icon: 'fa-gamepad', title: 'Game Playing', desc: 'AlphaGo and AlphaZero mastered Go and Chess using deep reinforcement learning, surpassing human champions.' },
      { icon: 'fa-film', title: 'Content Recommendation', desc: 'Netflix, YouTube, and Spotify use deep learning to personalize content recommendations for billions of users.' },
      { icon: 'fa-shield-alt', title: 'Cybersecurity', desc: 'Anomaly detection models identify network intrusions, malware, and fraudulent transactions in real-time.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What industries benefit most from deep learning?', answer: '<p>Healthcare (medical imaging), automotive (self-driving), finance (fraud detection), entertainment (recommendations), NLP (translation, chatbots), and manufacturing (quality control) benefit most from deep learning.</p>' },
      { question: 'How is deep learning used in computer vision?', answer: '<p>CNNs extract hierarchical features from images for tasks like object detection (YOLO, Faster R-CNN), image classification (ResNet, VGG), semantic segmentation, and facial recognition.</p>' },
      { question: 'What is the role of deep learning in NLP?', answer: '<p>Transformer models (BERT, GPT) use attention mechanisms to understand context in text. Applications include machine translation, sentiment analysis, question answering, and text generation.</p>' },
    ],
  },

  'intro/biological-vs-artificial': {
    title: 'Biological Neuron vs Artificial Neuron',
    description: `
      <p>The artificial neural network is inspired by the biological neural network in the human brain. Understanding the similarities and differences helps grasp how deep learning models work.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>While artificial neurons are inspired by biological ones, they are a simplified mathematical abstraction — not a true simulation of the brain.</p></div>
      <h3>Biological Neuron</h3>
      <ul><li><strong>Dendrites:</strong> Receive signals from other neurons</li><li><strong>Cell body (Soma):</strong> Processes the received signals</li><li><strong>Axon:</strong> Transmits the output signal</li><li><strong>Synapse:</strong> Connection point between neurons</li></ul>
      <h3>Artificial Neuron (Perceptron)</h3>
      <ul><li><strong>Inputs:</strong> Correspond to dendrites</li><li><strong>Weights:</strong> Correspond to synaptic strength</li><li><strong>Summation function:</strong> Corresponds to the cell body</li><li><strong>Activation function:</strong> Determines output (like the axon hillock)</li><li><strong>Output:</strong> Corresponds to the axon</li></ul>`,
    examples: `
      <p>A simple artificial neuron in Python:</p>
      <div class="code-container"><pre><code class="language-python">import numpy as np

def artificial_neuron(inputs, weights, bias, activation='relu'):
    z = np.dot(inputs, weights) + bias
    if activation == 'relu':
        return max(0, z)
    elif activation == 'sigmoid':
        return 1 / (1 + np.exp(-z))
    return z

inputs = np.array([0.5, 0.3, 0.8])
weights = np.array([0.4, 0.7, 0.2])
bias = 0.1

output = artificial_neuron(inputs, weights, bias)
print(f"Neuron output: {output:.4f}")</code></pre></div>`,
    applications: [
      { icon: 'fa-brain', title: 'Neural Network Design', desc: 'Understanding biological neurons guides the design of artificial neural network architectures.' },
      { icon: 'fa-microscope', title: 'Neuroscience Research', desc: 'AI models help simulate and study brain activity patterns and neural connectivity.' },
      { icon: 'fa-robot', title: 'Brain-Computer Interfaces', desc: 'Artificial neurons model brain signals for prosthetics and communication devices.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How does a biological neuron differ from an artificial neuron?', answer: '<p>Biological neurons use electrochemical signals, have complex dendritic trees, and operate in parallel with billions of other neurons. Artificial neurons use mathematical operations (weighted sum + activation), are simplified abstractions, and process data sequentially in layers.</p>' },
      { question: 'What is the role of weights in an artificial neuron?', answer: '<p>Weights represent the strength of connections between neurons, analogous to synaptic strength in biological neurons. During training, weights are adjusted via backpropagation to minimize the loss function.</p>' },
    ],
  },

  'perceptron/perceptron-model': {
    title: 'Perceptron Model',
    description: `
      <p>The perceptron is the simplest form of a neural network, introduced by Frank Rosenblatt in 1958. It is a binary classifier that maps input features to an output decision.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>A single perceptron can only solve linearly separable problems. For complex problems, multiple perceptrons are stacked into Multi-Layer Perceptrons (MLPs).</p></div>
      <p>The perceptron works by:</p>
      <ul><li>Taking multiple binary inputs</li><li>Multiplying each input by a weight</li><li>Summing the weighted inputs plus a bias</li><li>Applying a step activation function to produce output</li></ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import numpy as np

class Perceptron:
    def __init__(self, learning_rate=0.01, n_iters=1000):
        self.lr = learning_rate
        self.n_iters = n_iters
        self.weights = None
        self.bias = None

    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        for _ in range(self.n_iters):
            for idx, x_i in enumerate(X):
                linear_output = np.dot(x_i, self.weights) + self.bias
                y_predicted = 1 if linear_output >= 0 else 0
                update = self.lr * (y[idx] - y_predicted)
                self.weights += update * x_i
                self.bias += update

    def predict(self, X):
        linear_output = np.dot(X, self.weights) + self.bias
        return np.where(linear_output >= 0, 1, 0)

X = np.array([[0,0],[0,1],[1,0],[1,1]])
y = np.array([0, 0, 0, 1])  # AND gate
p = Perceptron()
p.fit(X, y)
print(p.predict(X))</code></pre></div>`,
    applications: [
      { icon: 'fa-filter', title: 'Binary Classification', desc: 'Spam detection, sentiment analysis (positive/negative), and medical diagnosis (disease/no disease).' },
      { icon: 'fa-project-diagram', title: 'Logic Gates', desc: 'Perceptrons can implement AND, OR, and NAND logic gates — the building blocks of digital circuits.' },
      { icon: 'fa-brain', title: 'Foundation of Deep Learning', desc: 'Stacking perceptrons creates MLPs, which are the foundation of all modern deep learning architectures.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is a perceptron and how does it work?', answer: '<p>A perceptron is a single-layer neural network that computes a weighted sum of inputs, adds a bias, and applies a step function to produce a binary output. It learns by adjusting weights based on prediction errors.</p>' },
      { question: 'What are the limitations of a single perceptron?', answer: '<p>A single perceptron can only classify linearly separable data. It cannot solve the XOR problem or any non-linearly separable classification task. This limitation led to the development of multi-layer perceptrons.</p>' },
    ],
  },

  'perceptron/activation-functions': {
    title: 'Activation Functions',
    description: `
      <p>Activation functions are crucial components in deep learning models. They introduce non-linearity into the output of a neuron, enabling neural networks to learn complex patterns.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Without non-linear activation functions, a deep network would collapse into a simple linear model regardless of depth.</p></div>
      <ul>
        <li><strong>ReLU (Rectified Linear Unit):</strong> Most commonly used — computationally efficient, avoids vanishing gradient for positive values.</li>
        <li><strong>Sigmoid:</strong> Outputs between 0 and 1, suitable for binary classification but prone to vanishing gradient.</li>
        <li><strong>Tanh:</strong> Zero-centered output between -1 and 1, but can also suffer from vanishing gradients.</li>
        <li><strong>Softmax:</strong> Used in output layers for multi-class classification, outputs a probability distribution.</li>
      </ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Activation

model = Sequential()
model.add(Dense(64, input_dim=100))
model.add(Activation('relu'))
model.add(Dense(64))
model.add(Activation('sigmoid'))
model.add(Dense(64))
model.add(Activation('tanh'))
model.add(Dense(10))
model.add(Activation('softmax'))
model.summary()</code></pre></div>`,
    applications: [
      { icon: 'fa-brain', title: 'Deep Neural Networks', desc: 'Activation functions help networks learn non-linear decision boundaries in complex datasets.' },
      { icon: 'fa-robot', title: 'Reinforcement Learning', desc: 'ReLU and Leaky ReLU are used in policy networks for action prediction.' },
      { icon: 'fa-chart-line', title: 'Financial Forecasting', desc: 'Activation functions in RNNs and LSTMs model complex time-dependent behaviors.' },
      { icon: 'fa-camera', title: 'Computer Vision', desc: 'ReLU variants extract hierarchical features from images in CNNs.' },
      { icon: 'fa-microphone', title: 'Speech Recognition', desc: 'Activation functions support audio signal transformations in acoustic modeling.' },
    ],
    resources: {
      video: 'https://youtu.be/SXrXUqDjICA?si=SmgW18oaQnDsHDFB',
      pdf: 'https://drive.google.com/file/d/1aATLAdBZw5q6nizXFeIOJzIGQUXi_Yt0/view?usp=drive_link',
      books: [
        { title: 'Deep Learning', url: 'https://www.deeplearningbook.org/', author: 'Ian Goodfellow et al.' },
        { title: 'Deep Learning with Python', url: 'https://www.manning.com/books/deep-learning-with-python', author: 'François Chollet' },
      ],
    },
    interviewQuestions: [
      { question: 'What is the role of activation functions in neural networks?', answer: '<p>Activation functions introduce non-linearity, enabling neural networks to learn complex functions. Without them, networks would only represent linear functions regardless of depth.</p>' },
      { question: 'Why is ReLU preferred over sigmoid and tanh?', answer: '<p>ReLU is computationally efficient and does not saturate for positive values. It avoids the vanishing gradient problem common in sigmoid and tanh, especially in deep networks.</p>' },
      { question: 'What is the vanishing gradient problem?', answer: '<p>In deep networks, gradients shrink as they propagate backward through layers, causing early layers to train very slowly. Sigmoid and tanh are prone to this issue. ReLU largely solves it for positive inputs.</p>' },
      { question: 'What are the most commonly used activation functions?', answer: '<ul><li>ReLU — hidden layers</li><li>Sigmoid — binary output</li><li>Tanh — zero-centered hidden layers</li><li>Softmax — multi-class output</li><li>Leaky ReLU — avoids dying ReLU</li></ul>' },
    ],
  },

  'perceptron/mlp': {
    title: 'Multi-Layer Perceptron (MLP)',
    description: `
      <p>A Multi-Layer Perceptron (MLP) is a class of feedforward neural network consisting of at least three layers: an input layer, one or more hidden layers, and an output layer.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>MLPs can approximate any continuous function (Universal Approximation Theorem), making them powerful for a wide range of tasks.</p></div>
      <p>Key characteristics:</p>
      <ul><li>Fully connected layers — every neuron connects to every neuron in the next layer</li><li>Non-linear activation functions in hidden layers</li><li>Trained using backpropagation and gradient descent</li><li>Can solve non-linearly separable problems (unlike single perceptrons)</li></ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(64, activation='relu', input_shape=(20,)),
    Dense(128, activation='relu'),
    Dense(64, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.summary()</code></pre></div>`,
    applications: [
      { icon: 'fa-table', title: 'Tabular Data', desc: 'MLPs excel at structured/tabular data tasks like customer churn prediction and price forecasting.' },
      { icon: 'fa-fingerprint', title: 'Pattern Recognition', desc: 'Handwriting recognition, digit classification (MNIST), and signature verification.' },
      { icon: 'fa-heartbeat', title: 'Medical Diagnosis', desc: 'Predicting disease outcomes from patient data like blood tests and vital signs.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is the difference between a perceptron and an MLP?', answer: '<p>A perceptron is a single-layer network that can only solve linearly separable problems. An MLP has multiple hidden layers with non-linear activations, enabling it to solve complex non-linear problems.</p>' },
      { question: 'What is the Universal Approximation Theorem?', answer: '<p>It states that an MLP with at least one hidden layer and a non-linear activation function can approximate any continuous function to arbitrary precision, given enough neurons.</p>' },
    ],
  },

  'perceptron/backpropagation': {
    title: 'Forward and Backward Propagation',
    description: `
      <p>Forward and backward propagation are the two fundamental processes in training a neural network.</p>
      <h3>Forward Propagation</h3>
      <p>Data flows from input to output through the network. Each layer computes a weighted sum of its inputs, adds a bias, and applies an activation function. The final output is compared to the true label using a loss function.</p>
      <h3>Backward Propagation (Backpropagation)</h3>
      <p>The error is propagated backward through the network using the chain rule of calculus. Gradients of the loss with respect to each weight are computed, and weights are updated using gradient descent.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Backpropagation is essentially the chain rule applied repeatedly — it efficiently computes how much each weight contributed to the error.</p></div>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import numpy as np

def sigmoid(x): return 1 / (1 + np.exp(-x))
def sigmoid_deriv(x): return sigmoid(x) * (1 - sigmoid(x))

X = np.array([[0,0],[0,1],[1,0],[1,1]])
y = np.array([[0],[1],[1],[0]])  # XOR

np.random.seed(42)
W1 = np.random.randn(2, 4)
W2 = np.random.randn(4, 1)
lr = 0.1

for epoch in range(10000):
    z1 = X @ W1
    a1 = sigmoid(z1)
    z2 = a1 @ W2
    output = sigmoid(z2)

    loss = y - output
    d_output = loss * sigmoid_deriv(z2)
    d_hidden = (d_output @ W2.T) * sigmoid_deriv(z1)

    W2 += a1.T @ d_output * lr
    W1 += X.T @ d_hidden * lr

print("Predictions:", output.round())</code></pre></div>`,
    applications: [
      { icon: 'fa-brain', title: 'All Neural Networks', desc: 'Backpropagation is the core training algorithm for virtually all deep learning models.' },
      { icon: 'fa-chart-line', title: 'Optimization', desc: 'Combined with optimizers like Adam and SGD, backprop enables efficient weight updates.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'Explain the backpropagation algorithm.', answer: '<p>Backpropagation computes gradients of the loss function with respect to each weight using the chain rule. It propagates the error backward from output to input, layer by layer, enabling gradient descent to update weights.</p>' },
      { question: 'What is the chain rule and why is it important in backpropagation?', answer: '<p>The chain rule allows computing the derivative of a composite function. In backpropagation, it enables computing how the loss changes with respect to weights in earlier layers by chaining gradients through each layer.</p>' },
    ],
  },

  'perceptron/loss-functions': {
    title: 'Loss Functions',
    description: `
      <p>A loss function (also called cost function or objective function) measures how well a neural network's predictions match the true labels. The goal of training is to minimize this loss.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Choosing the right loss function is critical — it directly shapes what the model learns to optimize.</p></div>
      <h3>Common Loss Functions</h3>
      <ul>
        <li><strong>Mean Squared Error (MSE):</strong> Used for regression. Penalizes large errors heavily.</li>
        <li><strong>Binary Cross-Entropy:</strong> Used for binary classification. Measures divergence between predicted probabilities and true labels.</li>
        <li><strong>Categorical Cross-Entropy:</strong> Used for multi-class classification with one-hot encoded labels.</li>
        <li><strong>Sparse Categorical Cross-Entropy:</strong> Same as categorical but with integer labels.</li>
        <li><strong>Huber Loss:</strong> Combination of MSE and MAE, robust to outliers.</li>
      </ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf

# Regression
model.compile(optimizer='adam', loss='mse')

# Binary Classification
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Multi-class Classification
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Custom loss function
def custom_loss(y_true, y_pred):
    return tf.reduce_mean(tf.square(y_true - y_pred))

model.compile(optimizer='adam', loss=custom_loss)</code></pre></div>`,
    applications: [
      { icon: 'fa-chart-line', title: 'Regression Tasks', desc: 'MSE and MAE are used for predicting continuous values like house prices and stock returns.' },
      { icon: 'fa-filter', title: 'Classification Tasks', desc: 'Cross-entropy losses are standard for image classification, NLP, and medical diagnosis.' },
      { icon: 'fa-robot', title: 'Reinforcement Learning', desc: 'Custom reward-based loss functions guide agents to maximize cumulative rewards.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is the difference between MSE and cross-entropy loss?', answer: '<p>MSE is used for regression and measures the average squared difference between predictions and targets. Cross-entropy is used for classification and measures the divergence between predicted probability distributions and true labels.</p>' },
      { question: 'Why is cross-entropy preferred over MSE for classification?', answer: '<p>Cross-entropy provides stronger gradients when predictions are far from the true label, leading to faster learning. MSE gradients become very small when using sigmoid/softmax outputs, slowing training.</p>' },
    ],
  },

  'frameworks/tensors': {
    title: 'Tensors and Computation Graphs',
    description: `
      <p>Tensors are the fundamental data structures in deep learning frameworks like TensorFlow and PyTorch. A tensor is a multi-dimensional array that generalizes scalars, vectors, and matrices.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Computation graphs allow frameworks to automatically compute gradients (autograd), making backpropagation efficient and automatic.</p></div>
      <ul><li><strong>Scalar (0D tensor):</strong> A single number</li><li><strong>Vector (1D tensor):</strong> An array of numbers</li><li><strong>Matrix (2D tensor):</strong> A 2D array</li><li><strong>3D+ tensors:</strong> Images (H×W×C), batches (N×H×W×C)</li></ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf
import torch

tf_tensor = tf.constant([[1, 2], [3, 4]], dtype=tf.float32)
print("TF Tensor:", tf_tensor)
print("Shape:", tf_tensor.shape)

pt_tensor = torch.tensor([[1.0, 2.0], [3.0, 4.0]])
print("PT Tensor:", pt_tensor)

x = torch.tensor(3.0, requires_grad=True)
y = x ** 2 + 2 * x + 1
y.backward()
print("Gradient dy/dx at x=3:", x.grad)  # 2x + 2 = 8</code></pre></div>`,
    applications: [
      { icon: 'fa-cube', title: 'Image Processing', desc: 'Images are represented as 3D tensors (height × width × channels) for CNN processing.' },
      { icon: 'fa-language', title: 'NLP', desc: 'Text is encoded as tensors (batch × sequence_length × embedding_dim) for transformer models.' },
      { icon: 'fa-cogs', title: 'GPU Acceleration', desc: 'Tensors can be moved to GPU for massively parallel computation, speeding up training.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is a tensor in deep learning?', answer: '<p>A tensor is a multi-dimensional array — the generalization of scalars (0D), vectors (1D), and matrices (2D) to arbitrary dimensions. Deep learning frameworks use tensors as the primary data structure for all computations.</p>' },
      { question: 'What is a computation graph and why is it useful?', answer: '<p>A computation graph represents mathematical operations as nodes and data flow as edges. It enables automatic differentiation (autograd), allowing frameworks to automatically compute gradients for backpropagation without manual derivation.</p>' },
    ],
  },

  'frameworks/model-workflow': {
    title: 'Model Definition, Compiling, Fitting, Evaluating',
    description: `
      <p>Building a deep learning model in TensorFlow/Keras follows a standard workflow: define the architecture, compile with optimizer and loss, fit on training data, and evaluate on test data.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>The Keras API abstracts away the complexity of backpropagation and gradient computation, letting you focus on architecture design.</p></div>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=1000, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = Sequential([
    Dense(64, activation='relu', input_shape=(20,)),
    Dropout(0.3),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
history = model.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.2, verbose=1)
loss, accuracy = model.evaluate(X_test, y_test)
print(f"Test Accuracy: {accuracy:.4f}")</code></pre></div>`,
    applications: [
      { icon: 'fa-cogs', title: 'Rapid Prototyping', desc: 'Keras workflow enables quick experimentation with different architectures and hyperparameters.' },
      { icon: 'fa-chart-bar', title: 'Model Monitoring', desc: 'Training history tracks loss and accuracy curves to diagnose overfitting and underfitting.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What does model.compile() do in Keras?', answer: '<p>model.compile() configures the model for training by specifying the optimizer (how weights are updated), loss function (what to minimize), and metrics (what to monitor during training).</p>' },
      { question: 'What is the difference between model.fit() and model.evaluate()?', answer: '<p>model.fit() trains the model on training data, updating weights via backpropagation. model.evaluate() runs a forward pass on test data without updating weights, returning the loss and metrics.</p>' },
    ],
  },

  'training/hyperparameters': {
    title: 'Epochs, Batches, Learning Rate',
    description: `
      <p>Hyperparameters are configuration settings that control the training process. Unlike model weights, they are set before training begins.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Hyperparameter tuning is often the difference between a mediocre and a state-of-the-art model. Start with defaults, then tune systematically.</p></div>
      <ul>
        <li><strong>Epochs:</strong> One complete pass through the entire training dataset. More epochs = more learning, but risk of overfitting.</li>
        <li><strong>Batch Size:</strong> Number of samples processed before updating weights. Smaller batches = noisier but faster updates. Larger batches = smoother but slower convergence.</li>
        <li><strong>Learning Rate:</strong> Controls how much weights are updated per step. Too high = divergence. Too low = slow convergence.</li>
      </ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.callbacks import LearningRateScheduler, EarlyStopping
import numpy as np

def lr_schedule(epoch):
    initial_lr = 0.001
    drop = 0.5
    epochs_drop = 10
    return initial_lr * (drop ** (epoch // epochs_drop))

callbacks = [
    LearningRateScheduler(lr_schedule),
    EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)
]

model.fit(X_train, y_train, epochs=100, batch_size=32, validation_split=0.2, callbacks=callbacks)</code></pre></div>`,
    applications: [
      { icon: 'fa-sliders-h', title: 'Hyperparameter Tuning', desc: 'Grid search, random search, and Bayesian optimization find optimal hyperparameter combinations.' },
      { icon: 'fa-tachometer-alt', title: 'Training Efficiency', desc: 'Proper batch size and learning rate scheduling dramatically reduce training time.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is the effect of learning rate on training?', answer: '<p>A high learning rate causes the model to overshoot minima and diverge. A low learning rate leads to slow convergence and may get stuck in local minima. Learning rate scheduling (warmup, decay) helps balance speed and stability.</p>' },
      { question: 'How does batch size affect training?', answer: '<p>Small batches (8-32) introduce noise that can help escape local minima but are slower per epoch. Large batches (256+) are computationally efficient but may converge to sharp minima with poor generalization.</p>' },
    ],
  },

  'training/optimizers': {
    title: 'Optimizers – SGD, Adam, RMSprop',
    description: `
      <p>Optimizers are algorithms that adjust neural network weights to minimize the loss function during training.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Tip</div><p>Adam is often the default choice for many deep learning models due to its fast convergence and minimal tuning requirements.</p></div>
      <ul>
        <li><strong>SGD (Stochastic Gradient Descent):</strong> Updates weights using mini-batches. Simple and efficient but may struggle with noisy gradients.</li>
        <li><strong>Adam (Adaptive Moment Estimation):</strong> Combines momentum and adaptive learning rates. Widely used for its robustness and speed.</li>
        <li><strong>RMSprop:</strong> Adapts learning rate per parameter using a moving average of gradient magnitudes. Good for RNNs and non-stationary objectives.</li>
      </ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.optimizers import SGD, Adam, RMSprop

model.compile(optimizer=SGD(learning_rate=0.01, momentum=0.9), loss='mse')
model.compile(optimizer=Adam(learning_rate=0.001), loss='mse')
model.compile(optimizer=RMSprop(learning_rate=0.001), loss='mse')</code></pre></div>`,
    applications: [
      { icon: 'fa-car', title: 'Autonomous Vehicles', desc: 'Adam is frequently used to train vision-based driving models for better convergence.' },
      { icon: 'fa-brain', title: 'Brain-Computer Interfaces', desc: 'RMSprop helps train recurrent networks processing EEG signals over time.' },
      { icon: 'fa-microphone', title: 'Speech Recognition', desc: 'Adam is popular in deep speech models for fast learning and low memory usage.' },
    ],
    resources: {
      video: 'https://youtu.be/mdKjMPmcWjY?si=_zQ8-xvlEKLVi-xB',
      pdf: 'https://drive.google.com/file/d/1hCYje9DTdkUBh-YYw4qWqRvTtt7hc-Qw/view?usp=drive_link',
      books: [
        { title: 'Deep Learning', url: 'https://www.deeplearningbook.org/', author: 'Ian Goodfellow' },
        { title: 'CS231n Lecture Notes on Optimization', url: 'https://cs231n.github.io/neural-networks-3/' },
      ],
    },
    interviewQuestions: [
      { question: 'What is the difference between SGD and Adam?', answer: '<p>SGD uses a fixed learning rate and updates based on the current mini-batch, which may result in noisy updates. Adam adapts the learning rate for each parameter and incorporates momentum, resulting in faster and more stable convergence.</p>' },
      { question: 'When should RMSprop be preferred?', answer: '<p>RMSprop is well-suited for non-stationary problems and works particularly well with RNNs, where gradient magnitudes may vary significantly over time.</p>' },
      { question: 'What are the main hyperparameters of Adam?', answer: '<p>Adam has: learning_rate, beta1 (first moment decay, default 0.9), beta2 (second moment decay, default 0.999), and epsilon (numerical stability, default 1e-8). Default values typically work well.</p>' },
    ],
  },

  'training/overfitting': {
    title: 'Overfitting & Underfitting',
    description: `
      <p>Overfitting and underfitting are the two most common problems in training deep learning models, representing opposite ends of the bias-variance tradeoff.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>The goal is to find the "Goldilocks zone" — a model complex enough to learn the data patterns but not so complex that it memorizes noise.</p></div>
      <h3>Overfitting</h3>
      <p>The model performs well on training data but poorly on unseen data. Signs: low training loss, high validation loss.</p>
      <h3>Underfitting</h3>
      <p>The model is too simple to capture the underlying patterns. Signs: high training loss and high validation loss.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import matplotlib.pyplot as plt

history = model.fit(X_train, y_train, epochs=100, validation_split=0.2)

plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.title('Overfitting Detection')
plt.show()</code></pre></div>`,
    applications: [
      { icon: 'fa-balance-scale', title: 'Model Selection', desc: 'Detecting overfitting/underfitting guides architecture choices — more/fewer layers, neurons.' },
      { icon: 'fa-chart-line', title: 'Production Models', desc: 'Preventing overfitting ensures models generalize to real-world data, not just training sets.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How do you detect overfitting?', answer: '<p>Overfitting is detected when training loss continues to decrease while validation loss starts increasing (divergence). The gap between training and validation performance is the key indicator.</p>' },
      { question: 'What techniques prevent overfitting?', answer: '<ul><li>Dropout — randomly deactivates neurons during training</li><li>L1/L2 regularization — penalizes large weights</li><li>Early stopping — stops training when val_loss stops improving</li><li>Data augmentation — increases effective training set size</li><li>Batch normalization — stabilizes training</li></ul>' },
    ],
  },

  'training/regularization': {
    title: 'Regularization – Dropout, L2',
    description: `
      <p>Regularization techniques prevent overfitting by adding constraints or noise to the training process, forcing the model to learn more generalizable patterns.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Dropout is one of the most effective regularization techniques for deep networks — it acts as an ensemble of many different network architectures.</p></div>
      <h3>Dropout</h3>
      <p>Randomly sets a fraction of neurons to zero during each training step. This prevents neurons from co-adapting and forces the network to learn redundant representations.</p>
      <h3>L2 Regularization (Weight Decay)</h3>
      <p>Adds a penalty term to the loss function proportional to the sum of squared weights. This discourages large weights and promotes simpler models.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.regularizers import l2

model = Sequential([
    Dense(128, activation='relu', kernel_regularizer=l2(0.001), input_shape=(20,)),
    Dropout(0.4),
    Dense(64, activation='relu', kernel_regularizer=l2(0.001)),
    Dropout(0.3),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])</code></pre></div>`,
    applications: [
      { icon: 'fa-shield-alt', title: 'Preventing Overfitting', desc: 'Dropout and L2 are standard in almost all production deep learning models.' },
      { icon: 'fa-brain', title: 'Large Models', desc: 'Dropout is especially important in large models like VGG and ResNet to prevent memorization.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How does dropout work?', answer: '<p>During training, dropout randomly sets a fraction p of neuron outputs to zero at each forward pass. This prevents neurons from co-adapting and forces the network to learn multiple independent representations. At inference, all neurons are active but outputs are scaled by (1-p).</p>' },
      { question: 'What is the difference between L1 and L2 regularization?', answer: '<p>L1 adds the sum of absolute weight values to the loss, promoting sparsity (many weights → 0). L2 adds the sum of squared weights, discouraging large weights but rarely making them exactly zero. L2 is more commonly used in deep learning.</p>' },
    ],
  },

  'training/batch-normalization': {
    title: 'Batch Normalization',
    description: `
      <p>Batch Normalization (BatchNorm) normalizes the inputs of each layer to have zero mean and unit variance, computed over the current mini-batch. It was introduced by Ioffe and Szegedy in 2015.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Batch normalization allows much higher learning rates and reduces sensitivity to weight initialization, dramatically speeding up training.</p></div>
      <p>Benefits:</p>
      <ul><li>Reduces internal covariate shift</li><li>Acts as a regularizer (reduces need for dropout)</li><li>Allows higher learning rates</li><li>Makes training more stable</li><li>Reduces sensitivity to initialization</li></ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.layers import Dense, BatchNormalization, Activation

model = Sequential([
    Dense(128, input_shape=(20,)),
    BatchNormalization(),
    Activation('relu'),
    Dense(64),
    BatchNormalization(),
    Activation('relu'),
    Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])</code></pre></div>`,
    applications: [
      { icon: 'fa-layer-group', title: 'Deep CNNs', desc: 'BatchNorm is used in ResNet, Inception, and most modern CNN architectures.' },
      { icon: 'fa-tachometer-alt', title: 'Faster Training', desc: 'Models with BatchNorm typically converge 2-10x faster than without it.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What problem does batch normalization solve?', answer: '<p>Batch normalization addresses internal covariate shift — the change in the distribution of layer inputs during training as weights update. By normalizing activations, it stabilizes training and allows higher learning rates.</p>' },
      { question: 'Where should batch normalization be placed in a network?', answer: '<p>Typically before the activation function (Dense → BatchNorm → Activation). Some architectures place it after the activation. In practice, before activation is more common and generally works better.</p>' },
    ],
  },

  'cnn/cnn-layers': {
    title: 'CNN Layers: Conv, Pooling, Flatten',
    description: `
      <p>Convolutional Neural Networks (CNNs) are specialized for processing grid-like data such as images. They use three main types of layers: Convolutional, Pooling, and Fully Connected (after Flatten).</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>CNNs exploit spatial locality and translation invariance — the same feature detector (filter) is applied across the entire image, drastically reducing parameters compared to fully connected networks.</p></div>
      <ul>
        <li><strong>Convolutional Layer:</strong> Applies learnable filters to detect features like edges, textures, and patterns.</li>
        <li><strong>Pooling Layer:</strong> Reduces spatial dimensions (downsampling) while retaining important features. Max pooling takes the maximum value in each window.</li>
        <li><strong>Flatten Layer:</strong> Converts the 2D feature maps into a 1D vector for the fully connected layers.</li>
      </ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.summary()</code></pre></div>`,
    applications: [
      { icon: 'fa-image', title: 'Image Classification', desc: 'CNNs classify images into categories — from handwritten digits (MNIST) to 1000-class ImageNet.' },
      { icon: 'fa-search', title: 'Object Detection', desc: 'YOLO and Faster R-CNN use CNN backbones to detect and localize objects in images.' },
      { icon: 'fa-heartbeat', title: 'Medical Imaging', desc: 'CNNs detect tumors, fractures, and diseases in X-rays, MRIs, and CT scans.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is the purpose of a convolutional layer?', answer: '<p>A convolutional layer applies learnable filters (kernels) across the input to detect local features like edges, corners, and textures. Each filter produces a feature map showing where that feature appears in the input.</p>' },
      { question: 'Why is max pooling used in CNNs?', answer: "<p>Max pooling reduces spatial dimensions, decreasing computation and parameters. It provides translation invariance (small shifts in input don't change the output) and helps prevent overfitting by reducing feature map size.</p>" },
    ],
  },

  'cnn/image-classification': {
    title: 'Use-case: Image Classification',
    description: `
      <p>Image classification is the task of assigning a label to an entire image from a predefined set of categories. It is one of the most fundamental and well-studied problems in computer vision.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Deep CNNs trained on ImageNet (1.2M images, 1000 classes) have achieved superhuman performance on image classification benchmarks.</p></div>
      <p>The standard pipeline: preprocess images → extract features with CNN → classify with fully connected layers → output class probabilities via softmax.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf
from tensorflow.keras.datasets import cifar10
from tensorflow.keras.utils import to_categorical

(X_train, y_train), (X_test, y_test) = cifar10.load_data()
X_train, X_test = X_train / 255.0, X_test / 255.0
y_train, y_test = to_categorical(y_train), to_categorical(y_test)

model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(32,32,3)),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Conv2D(64, (3,3), activation='relu'),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10, validation_split=0.1)</code></pre></div>`,
    applications: [
      { icon: 'fa-camera', title: 'Photo Organization', desc: 'Google Photos and Apple Photos use image classification to automatically organize and tag photos.' },
      { icon: 'fa-industry', title: 'Quality Control', desc: 'Manufacturing uses CNNs to detect defects in products on assembly lines.' },
      { icon: 'fa-leaf', title: 'Agriculture', desc: 'Plant disease detection from leaf images helps farmers identify and treat crop diseases early.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How does a CNN perform image classification?', answer: '<p>A CNN extracts hierarchical features through convolutional and pooling layers (edges → shapes → objects), then flattens the feature maps and passes them through fully connected layers. The final softmax layer outputs class probabilities.</p>' },
      { question: 'What is data augmentation and why is it used?', answer: '<p>Data augmentation artificially increases training set size by applying random transformations (flips, rotations, crops, brightness changes) to existing images. It improves generalization and reduces overfitting.</p>' },
    ],
  },

  'advanced-cnn/architectures': {
    title: 'VGG, ResNet, Inception, MobileNet',
    description: `
      <p>Several landmark CNN architectures have shaped modern deep learning. Each introduced innovations that addressed limitations of previous models.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>These architectures are available as pretrained models in Keras/PyTorch, enabling transfer learning without training from scratch.</p></div>
      <ul>
        <li><strong>VGG (2014):</strong> Very deep networks (16-19 layers) using only 3×3 convolutions. Simple but effective.</li>
        <li><strong>ResNet (2015):</strong> Introduced skip connections (residual connections) enabling training of 100+ layer networks.</li>
        <li><strong>Inception (GoogLeNet, 2014):</strong> Uses inception modules with parallel convolutions of different sizes, reducing parameters.</li>
        <li><strong>MobileNet (2017):</strong> Designed for mobile/edge devices using depthwise separable convolutions for efficiency.</li>
      </ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.applications import VGG16, ResNet50, InceptionV3, MobileNetV2

vgg = VGG16(weights='imagenet', include_top=True)
resnet = ResNet50(weights='imagenet', include_top=False, input_shape=(224,224,3))
inception = InceptionV3(weights='imagenet', include_top=False)
mobilenet = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224,224,3))

print("ResNet50 parameters:", resnet.count_params())
print("MobileNetV2 parameters:", mobilenet.count_params())</code></pre></div>`,
    applications: [
      { icon: 'fa-sitemap', title: 'Transfer Learning', desc: 'Pretrained ResNet and VGG are fine-tuned for custom classification tasks with limited data.' },
      { icon: 'fa-mobile-alt', title: 'Mobile Apps', desc: 'MobileNet powers real-time image classification on smartphones and IoT devices.' },
      { icon: 'fa-stethoscope', title: 'Medical Imaging', desc: 'Inception and ResNet are fine-tuned for detecting diseases in medical scans.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What problem did ResNet solve?', answer: '<p>ResNet solved the vanishing gradient problem in very deep networks by introducing skip connections (residual connections). These allow gradients to flow directly through the network, enabling training of networks with 100+ layers.</p>' },
      { question: 'Why is MobileNet preferred for mobile applications?', answer: '<p>MobileNet uses depthwise separable convolutions, which factorize standard convolutions into a depthwise convolution and a pointwise convolution. This reduces computation by 8-9x with minimal accuracy loss, making it suitable for resource-constrained devices.</p>' },
    ],
  },

  'advanced-cnn/efficient-classification': {
    title: 'Use-case: Efficient Image Classification',
    description: `
      <p>Efficient image classification focuses on achieving high accuracy with minimal computational resources — critical for deployment on mobile devices, edge hardware, and real-time applications.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>EfficientNet (2019) uses compound scaling — simultaneously scaling depth, width, and resolution — to achieve state-of-the-art accuracy with fewer parameters than ResNet.</p></div>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.models import Model

base_model = EfficientNetB0(weights='imagenet', include_top=False, input_shape=(224,224,3))
base_model.trainable = False

x = GlobalAveragePooling2D()(base_model.output)
x = Dense(256, activation='relu')(x)
output = Dense(10, activation='softmax')(x)

model = Model(inputs=base_model.input, outputs=output)
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])</code></pre></div>`,
    applications: [
      { icon: 'fa-bolt', title: 'Real-time Classification', desc: 'EfficientNet and MobileNet enable real-time classification at 30+ FPS on mobile devices.' },
      { icon: 'fa-microchip', title: 'Edge AI', desc: 'Quantized and pruned models run on microcontrollers and edge devices with limited memory.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is model quantization?', answer: '<p>Quantization reduces model size and inference time by representing weights and activations with lower precision (e.g., 8-bit integers instead of 32-bit floats). This can reduce model size by 4x with minimal accuracy loss.</p>' },
    ],
  },

  'advanced-cnn/concepts': {
    title: 'Skip Connections, Depth, Bottlenecks',
    description: `
      <p>Advanced CNN concepts like skip connections, network depth, and bottleneck layers are key architectural innovations that enable training of very deep and efficient networks.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Skip connections are the single most impactful architectural innovation in deep learning — they enabled networks to go from ~20 layers to 1000+ layers.</p></div>
      <h3>Skip Connections (Residual Connections)</h3>
      <p>Add the input of a block directly to its output: output = F(x) + x. This creates a "shortcut" for gradients to flow backward, solving the vanishing gradient problem.</p>
      <h3>Bottleneck Layers</h3>
      <p>Use 1×1 convolutions to reduce channel dimensions before expensive 3×3 convolutions, then expand back. This reduces computation while maintaining representational power.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf

def residual_block(x, filters):
    shortcut = x
    x = tf.keras.layers.Conv2D(filters, (3,3), padding='same', activation='relu')(x)
    x = tf.keras.layers.BatchNormalization()(x)
    x = tf.keras.layers.Conv2D(filters, (3,3), padding='same')(x)
    x = tf.keras.layers.BatchNormalization()(x)
    x = tf.keras.layers.Add()([x, shortcut])
    x = tf.keras.layers.Activation('relu')(x)
    return x</code></pre></div>`,
    applications: [
      { icon: 'fa-puzzle-piece', title: 'Very Deep Networks', desc: 'Skip connections enable ResNet-152, DenseNet, and other very deep architectures.' },
      { icon: 'fa-compress-arrows-alt', title: 'Efficient Architectures', desc: 'Bottleneck layers reduce computation in ResNet-50 and Inception modules.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How do skip connections help training?', answer: '<p>Skip connections provide a direct path for gradients to flow backward, bypassing potentially problematic layers. This prevents vanishing gradients and allows the network to learn identity mappings when needed, making optimization easier.</p>' },
    ],
  },

  'transfer-learning/pretrained': {
    title: 'Pre-trained Models: VGG, ResNet, etc.',
    description: `
      <p>Transfer learning uses a model trained on a large dataset (like ImageNet) as a starting point for a new task. Instead of training from scratch, you leverage learned features.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Transfer learning is especially powerful when you have limited labeled data. A model pretrained on millions of images already knows how to detect edges, textures, and shapes.</p></div>
      <p>Two main strategies:</p>
      <ul><li><strong>Feature extraction:</strong> Freeze all pretrained layers, only train the new classification head.</li><li><strong>Fine-tuning:</strong> Unfreeze some or all pretrained layers and train with a very low learning rate.</li></ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense, Dropout
from tensorflow.keras.models import Model

base_model = ResNet50(weights='imagenet', include_top=False, input_shape=(224,224,3))
base_model.trainable = False

x = GlobalAveragePooling2D()(base_model.output)
x = Dense(256, activation='relu')(x)
x = Dropout(0.5)(x)
predictions = Dense(5, activation='softmax')(x)

model = Model(inputs=base_model.input, outputs=predictions)
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])</code></pre></div>`,
    applications: [
      { icon: 'fa-recycle', title: 'Medical Imaging', desc: 'ResNet pretrained on ImageNet is fine-tuned for X-ray and MRI classification with small medical datasets.' },
      { icon: 'fa-leaf', title: 'Agriculture', desc: 'Plant disease detection using VGG fine-tuned on small crop disease datasets.' },
      { icon: 'fa-industry', title: 'Manufacturing', desc: 'Defect detection models fine-tuned from pretrained CNNs with limited defect samples.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is transfer learning and when should you use it?', answer: '<p>Transfer learning reuses a model trained on a large dataset for a new related task. Use it when: you have limited labeled data, the new task is similar to the original, or you need faster training. It typically outperforms training from scratch with small datasets.</p>' },
      { question: 'What is the difference between feature extraction and fine-tuning?', answer: '<p>Feature extraction freezes all pretrained layers and only trains the new head — fast but less flexible. Fine-tuning unfreezes some pretrained layers and trains them with a low learning rate — slower but achieves higher accuracy for domain-specific tasks.</p>' },
    ],
  },

  'transfer-learning/custom-layers': {
    title: 'Freezing Layers, Adding Custom Layers',
    description: `
      <p>When applying transfer learning, you control which layers are trainable (unfrozen) and add custom layers on top of the pretrained base to adapt it to your specific task.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>A common strategy: first train only the custom head (frozen base), then unfreeze the top layers of the base and fine-tune with a very low learning rate (1e-5 or lower).</p></div>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2

base = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224,224,3))

# Phase 1: Freeze all base layers
base.trainable = False

# Phase 2: Unfreeze top layers for fine-tuning
base.trainable = True
for layer in base.layers[:-20]:
    layer.trainable = False

model.compile(optimizer=tf.keras.optimizers.Adam(1e-5),
              loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10)</code></pre></div>`,
    applications: [
      { icon: 'fa-edit', title: 'Domain Adaptation', desc: 'Fine-tuning adapts general-purpose models to specialized domains like satellite imagery or medical scans.' },
      { icon: 'fa-bolt', title: 'Few-shot Learning', desc: 'Custom layers on frozen pretrained models enable learning from very few examples per class.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'Why use a very low learning rate when fine-tuning?', answer: '<p>Pretrained weights encode valuable features learned from millions of images. A high learning rate would destroy these features. A very low learning rate (1e-5 to 1e-6) makes small adjustments to adapt to the new domain without catastrophic forgetting.</p>' },
    ],
  },

  'autoencoders/architecture': {
    title: 'Architecture of Autoencoders',
    description: `
      <p>An autoencoder is an unsupervised neural network that learns to compress data into a lower-dimensional representation (encoding) and then reconstruct it (decoding).</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>The bottleneck layer forces the network to learn the most important features of the data — it cannot memorize the input, so it must learn efficient representations.</p></div>
      <p>Components:</p>
      <ul><li><strong>Encoder:</strong> Compresses input into a latent space representation (bottleneck)</li><li><strong>Latent Space (Code):</strong> Compressed representation of the input</li><li><strong>Decoder:</strong> Reconstructs the original input from the latent representation</li></ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Dense

input_layer = Input(shape=(784,))
encoded = Dense(256, activation='relu')(input_layer)
encoded = Dense(128, activation='relu')(encoded)
latent = Dense(32, activation='relu')(encoded)

decoded = Dense(128, activation='relu')(latent)
decoded = Dense(256, activation='relu')(decoded)
output_layer = Dense(784, activation='sigmoid')(decoded)

autoencoder = Model(input_layer, output_layer)
encoder = Model(input_layer, latent)

autoencoder.compile(optimizer='adam', loss='binary_crossentropy')
autoencoder.fit(X_train, X_train, epochs=50, batch_size=256)</code></pre></div>`,
    applications: [
      { icon: 'fa-compress-arrows-alt', title: 'Dimensionality Reduction', desc: 'Autoencoders learn compact representations for visualization and downstream tasks.' },
      { icon: 'fa-eraser', title: 'Denoising', desc: 'Denoising autoencoders learn to remove noise from corrupted images or signals.' },
      { icon: 'fa-search-minus', title: 'Anomaly Detection', desc: 'High reconstruction error indicates anomalous inputs not seen during training.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is an autoencoder and how does it work?', answer: '<p>An autoencoder is trained to reconstruct its input through a bottleneck. The encoder compresses input to a latent representation, and the decoder reconstructs the original. The bottleneck forces the network to learn efficient data representations.</p>' },
      { question: 'What is a Variational Autoencoder (VAE)?', answer: '<p>A VAE is a generative version of the autoencoder. Instead of encoding to a fixed point, it encodes to a probability distribution (mean and variance). Sampling from this distribution enables generating new data similar to the training set.</p>' },
    ],
  },

  'autoencoders/use-cases': {
    title: 'Use-case: Noise Removal, Compression, Outlier Detection',
    description: `
      <p>Autoencoders have three major practical applications: denoising, data compression, and anomaly/outlier detection.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>For anomaly detection, the key insight is that an autoencoder trained on normal data will have high reconstruction error for anomalous inputs it has never seen.</p></div>
      <h3>Denoising Autoencoders</h3>
      <p>Trained by corrupting inputs with noise and learning to reconstruct the clean version. Forces the model to learn robust features.</p>
      <h3>Anomaly Detection</h3>
      <p>Train on normal data only. At inference, compute reconstruction error — high error = anomaly.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import numpy as np

noise_factor = 0.3
X_noisy = X_train + noise_factor * np.random.randn(*X_train.shape)
X_noisy = np.clip(X_noisy, 0., 1.)

autoencoder.fit(X_noisy, X_train, epochs=50, batch_size=256)

reconstructions = autoencoder.predict(X_test)
mse = np.mean(np.power(X_test - reconstructions, 2), axis=1)
threshold = np.percentile(mse, 95)
anomalies = mse > threshold
print(f"Detected {anomalies.sum()} anomalies")</code></pre></div>`,
    applications: [
      { icon: 'fa-eraser', title: 'Image Denoising', desc: 'Remove noise from medical images, satellite imagery, and old photographs.' },
      { icon: 'fa-shield-alt', title: 'Fraud Detection', desc: 'Detect fraudulent transactions by identifying patterns with high reconstruction error.' },
      { icon: 'fa-industry', title: 'Predictive Maintenance', desc: 'Detect equipment anomalies from sensor data before failures occur.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How do autoencoders detect anomalies?', answer: '<p>An autoencoder trained on normal data learns to reconstruct normal patterns well. When presented with anomalous data, it fails to reconstruct it accurately, resulting in high reconstruction error. A threshold on this error separates normal from anomalous samples.</p>' },
    ],
  },

  'gans/generator-discriminator': {
    title: 'Generator vs Discriminator',
    description: `
      <p>Generative Adversarial Networks (GANs), introduced by Ian Goodfellow in 2014, consist of two neural networks competing against each other in a minimax game.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>The adversarial training process is like a counterfeiter (generator) vs. a detective (discriminator). As the detective gets better at spotting fakes, the counterfeiter improves too — until the fakes are indistinguishable from real.</p></div>
      <h3>Generator</h3>
      <p>Takes random noise as input and generates synthetic data. Goal: fool the discriminator into thinking generated data is real.</p>
      <h3>Discriminator</h3>
      <p>Takes real or generated data and classifies it as real or fake. Goal: correctly distinguish real data from generated data.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LeakyReLU, BatchNormalization

def build_generator(latent_dim=100):
    model = Sequential([
        Dense(256, input_dim=latent_dim),
        LeakyReLU(0.2),
        BatchNormalization(),
        Dense(512),
        LeakyReLU(0.2),
        BatchNormalization(),
        Dense(784, activation='tanh')
    ])
    return model

def build_discriminator():
    model = Sequential([
        Dense(512, input_dim=784),
        LeakyReLU(0.2),
        Dense(256),
        LeakyReLU(0.2),
        Dense(1, activation='sigmoid')
    ])
    return model</code></pre></div>`,
    applications: [
      { icon: 'fa-images', title: 'Image Generation', desc: 'GANs generate photorealistic faces (StyleGAN), artwork, and synthetic training data.' },
      { icon: 'fa-film', title: 'Video Synthesis', desc: 'DeepFake technology and video-to-video translation use GAN-based architectures.' },
      { icon: 'fa-pills', title: 'Drug Discovery', desc: 'GANs generate novel molecular structures for pharmaceutical research.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How does GAN training work?', answer: "<p>GAN training alternates between: (1) training the discriminator on real + fake data to distinguish them, and (2) training the generator to fool the discriminator. The generator never sees real data directly — it only receives feedback through the discriminator's gradients.</p>" },
      { question: 'What is mode collapse in GANs?', answer: '<p>Mode collapse occurs when the generator learns to produce only a few types of outputs (modes) that fool the discriminator, ignoring the full diversity of the training data. Solutions include Wasserstein GAN, minibatch discrimination, and spectral normalization.</p>' },
    ],
  },

  'gans/dcgan-basics': {
    title: 'DCGAN Basics',
    description: `
      <p>Deep Convolutional GAN (DCGAN), introduced in 2015, replaced fully connected layers with convolutional layers, dramatically improving image generation quality and training stability.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>DCGAN's key innovations: use of strided convolutions instead of pooling, batch normalization in both networks, and LeakyReLU activations in the discriminator.</p></div>
      <p>DCGAN guidelines:</p>
      <ul><li>Replace pooling with strided convolutions (discriminator) and fractional-strided convolutions (generator)</li><li>Use BatchNorm in both generator and discriminator</li><li>Remove fully connected hidden layers</li><li>Use ReLU in generator, LeakyReLU in discriminator</li></ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from tensorflow.keras.layers import Conv2DTranspose, Reshape, BatchNormalization

def build_dcgan_generator(latent_dim=100):
    model = Sequential([
        Dense(7*7*256, input_dim=latent_dim),
        Reshape((7, 7, 256)),
        Conv2DTranspose(128, (5,5), strides=(1,1), padding='same', activation='relu'),
        BatchNormalization(),
        Conv2DTranspose(64, (5,5), strides=(2,2), padding='same', activation='relu'),
        BatchNormalization(),
        Conv2DTranspose(1, (5,5), strides=(2,2), padding='same', activation='tanh')
    ])
    return model</code></pre></div>`,
    applications: [
      { icon: 'fa-code-branch', title: 'Image Synthesis', desc: 'DCGAN generates realistic images of faces, bedrooms, and other scenes.' },
      { icon: 'fa-database', title: 'Data Augmentation', desc: 'Generate synthetic training data to augment small datasets.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What improvements did DCGAN introduce over vanilla GAN?', answer: '<p>DCGAN replaced fully connected layers with convolutional layers, added batch normalization for training stability, used strided convolutions instead of pooling, and established architectural guidelines that made GAN training much more reliable.</p>' },
    ],
  },

  'gans/use-cases': {
    title: 'Use-case: Image Generation, Super-resolution',
    description: `
      <p>GANs have enabled remarkable applications in image generation and enhancement, producing results that were previously impossible with traditional methods.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Super-resolution GANs (SRGAN) can upscale images by 4x while adding realistic high-frequency details that simple interpolation methods cannot produce.</p></div>
      <h3>Image Generation</h3>
      <p>StyleGAN2 generates photorealistic human faces that don't exist. Progressive GAN grows both generator and discriminator progressively for high-resolution synthesis.</p>
      <h3>Super-Resolution</h3>
      <p>SRGAN takes low-resolution images and generates high-resolution versions with realistic textures and details.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf
from tensorflow.keras.layers import Conv2D, UpSampling2D, PReLU

def sr_generator(input_shape=(64, 64, 3)):
    inputs = tf.keras.Input(shape=input_shape)
    x = Conv2D(64, (9,9), padding='same')(inputs)
    x = PReLU()(x)
    for _ in range(16):
        res = Conv2D(64, (3,3), padding='same')(x)
        res = tf.keras.layers.BatchNormalization()(res)
        res = PReLU()(res)
        res = Conv2D(64, (3,3), padding='same')(res)
        res = tf.keras.layers.BatchNormalization()(res)
        x = tf.keras.layers.Add()([x, res])
    x = UpSampling2D(size=2)(x)
    x = Conv2D(3, (9,9), padding='same', activation='tanh')(x)
    return tf.keras.Model(inputs, x)</code></pre></div>`,
    applications: [
      { icon: 'fa-images', title: 'Synthetic Data', desc: 'Generate training data for rare scenarios like accidents, medical conditions, or edge cases.' },
      { icon: 'fa-expand-arrows-alt', title: 'Image Enhancement', desc: 'Upscale old photos, enhance satellite imagery, and restore degraded video footage.' },
      { icon: 'fa-palette', title: 'Creative AI', desc: 'AI art generation, style transfer, and image-to-image translation (pix2pix, CycleGAN).' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How does SRGAN differ from traditional super-resolution?', answer: '<p>Traditional methods (bicubic interpolation) produce blurry upscaled images. SRGAN uses a perceptual loss (feature matching in VGG space) plus adversarial loss to generate sharp, realistic high-frequency details that match the statistics of real high-resolution images.</p>' },
    ],
  },

  'evaluation/metrics': {
    title: 'Metrics: Accuracy, Precision, Recall, F1, AUC',
    description: `
      <p>Evaluation metrics measure how well a model performs. Choosing the right metric depends on the problem type and class distribution.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Accuracy is misleading for imbalanced datasets. If 95% of samples are class A, a model predicting A always gets 95% accuracy but is useless. Use F1, AUC-ROC, or precision-recall curves instead.</p></div>
      <ul>
        <li><strong>Accuracy:</strong> (TP+TN)/(Total) — overall correctness</li>
        <li><strong>Precision:</strong> TP/(TP+FP) — of predicted positives, how many are correct</li>
        <li><strong>Recall (Sensitivity):</strong> TP/(TP+FN) — of actual positives, how many were found</li>
        <li><strong>F1 Score:</strong> Harmonic mean of precision and recall — balances both</li>
        <li><strong>AUC-ROC:</strong> Area under the ROC curve — measures discrimination ability across thresholds</li>
      </ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, classification_report

y_pred = model.predict(X_test)
y_pred_classes = (y_pred > 0.5).astype(int)

print(f"Accuracy:  {accuracy_score(y_test, y_pred_classes):.4f}")
print(f"Precision: {precision_score(y_test, y_pred_classes):.4f}")
print(f"Recall:    {recall_score(y_test, y_pred_classes):.4f}")
print(f"F1 Score:  {f1_score(y_test, y_pred_classes):.4f}")
print(f"AUC-ROC:   {roc_auc_score(y_test, y_pred):.4f}")
print(classification_report(y_test, y_pred_classes))</code></pre></div>`,
    applications: [
      { icon: 'fa-heartbeat', title: 'Medical Diagnosis', desc: 'Recall is critical — missing a disease (false negative) is more costly than a false alarm.' },
      { icon: 'fa-shield-alt', title: 'Fraud Detection', desc: 'Precision matters — too many false positives (blocking legitimate transactions) hurts user experience.' },
      { icon: 'fa-search', title: 'Information Retrieval', desc: 'Precision-recall tradeoff is fundamental in search engines and recommendation systems.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'When would you prioritize recall over precision?', answer: '<p>Prioritize recall when false negatives are more costly — e.g., cancer detection (missing a cancer is worse than a false alarm), fraud detection (missing fraud is worse than blocking a legitimate transaction).</p>' },
      { question: "What does AUC-ROC measure?", answer: "<p>AUC-ROC measures the model's ability to discriminate between classes across all classification thresholds. AUC=1.0 is perfect, AUC=0.5 is random. It's threshold-independent and works well for imbalanced datasets.</p>" },
    ],
  },

  'evaluation/confusion-matrix': {
    title: 'Confusion Matrix',
    description: `
      <p>A confusion matrix is a table that summarizes the performance of a classification model by showing the counts of true positives, true negatives, false positives, and false negatives.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>The confusion matrix reveals not just overall accuracy but which specific classes the model confuses — essential for diagnosing model weaknesses.</p></div>
      <ul>
        <li><strong>True Positive (TP):</strong> Correctly predicted positive</li>
        <li><strong>True Negative (TN):</strong> Correctly predicted negative</li>
        <li><strong>False Positive (FP):</strong> Incorrectly predicted positive (Type I error)</li>
        <li><strong>False Negative (FN):</strong> Incorrectly predicted negative (Type II error)</li>
      </ul>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt

y_pred = model.predict(X_test).argmax(axis=1)
cm = confusion_matrix(y_test, y_pred)

disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=class_names)
disp.plot(cmap='Blues')
plt.title('Confusion Matrix')
plt.show()

TP = cm[1,1]; TN = cm[0,0]; FP = cm[0,1]; FN = cm[1,0]
precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(f"Precision: {precision:.4f}, Recall: {recall:.4f}")</code></pre></div>`,
    applications: [
      { icon: 'fa-table', title: 'Multi-class Evaluation', desc: 'Confusion matrices reveal which classes are confused — e.g., a model confusing cats and dogs.' },
      { icon: 'fa-stethoscope', title: 'Clinical Trials', desc: 'Medical AI systems use confusion matrices to report sensitivity and specificity to regulators.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is a confusion matrix and what does it tell you?', answer: '<p>A confusion matrix shows the counts of correct and incorrect predictions for each class. It reveals not just overall accuracy but which specific classes are being confused, enabling targeted model improvements.</p>' },
      { question: 'What is the difference between Type I and Type II errors?', answer: '<p>Type I error (False Positive): predicting positive when actually negative. Type II error (False Negative): predicting negative when actually positive. The relative cost of these errors determines which metric to optimize.</p>' },
    ],
  },

  'evaluation/explainability': {
    title: 'Model Explainability: Grad-CAM, Feature Maps',
    description: `
      <p>Model explainability techniques help understand why a deep learning model makes specific predictions — critical for trust, debugging, and regulatory compliance.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Grad-CAM produces visual explanations by highlighting which regions of an image most influenced the model's prediction — without modifying the model architecture.</p></div>
      <h3>Grad-CAM (Gradient-weighted Class Activation Mapping)</h3>
      <p>Uses gradients of the target class flowing into the last convolutional layer to produce a coarse localization map highlighting important regions.</p>
      <h3>Feature Maps</h3>
      <p>Visualizing intermediate layer activations shows what features each layer has learned — from edges in early layers to complex patterns in deeper layers.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf
import numpy as np

def grad_cam(model, img_array, layer_name, class_idx):
    grad_model = tf.keras.Model(
        inputs=model.inputs,
        outputs=[model.get_layer(layer_name).output, model.output]
    )
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, class_idx]
    grads = tape.gradient(loss, conv_outputs)
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))
    heatmap = conv_outputs[0] @ pooled_grads[..., tf.newaxis]
    heatmap = tf.squeeze(heatmap)
    heatmap = tf.maximum(heatmap, 0) / tf.math.reduce_max(heatmap)
    return heatmap.numpy()</code></pre></div>`,
    applications: [
      { icon: 'fa-microscope', title: 'Medical AI Auditing', desc: 'Grad-CAM shows which regions of an X-ray the model focused on for diagnosis.' },
      { icon: 'fa-gavel', title: 'Regulatory Compliance', desc: 'GDPR and financial regulations require explainable AI decisions.' },
      { icon: 'fa-bug', title: 'Model Debugging', desc: 'Feature maps reveal if a model is focusing on spurious correlations instead of relevant features.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is Grad-CAM and how does it work?', answer: "<p>Grad-CAM computes the gradient of the class score with respect to the last convolutional layer's feature maps. These gradients are globally average-pooled to get importance weights, which are then used to create a weighted combination of feature maps — producing a heatmap of important regions.</p>" },
      { question: 'Why is model explainability important?', answer: '<p>Explainability builds trust, enables debugging (finding spurious correlations), satisfies regulatory requirements (GDPR, financial regulations), and helps domain experts validate model reasoning in high-stakes applications like healthcare and autonomous driving.</p>' },
    ],
  },

  'deployment/save-load': {
    title: 'Save/Load Models',
    description: `
      <p>Saving and loading models is essential for deploying trained models to production, sharing models, and resuming interrupted training.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Always save the entire model (architecture + weights + optimizer state) for deployment, not just the weights. This ensures reproducibility.</p></div>
      <p>TensorFlow/Keras supports multiple save formats: SavedModel (recommended), HDF5 (.h5), and TensorFlow Lite for mobile deployment.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf

# Save entire model (recommended)
model.save('my_model')  # SavedModel format
model.save('my_model.h5')  # HDF5 format

# Load model
loaded_model = tf.keras.models.load_model('my_model')

# Save only weights
model.save_weights('my_weights.h5')
model.load_weights('my_weights.h5')

# Save during training with checkpoints
checkpoint_cb = tf.keras.callbacks.ModelCheckpoint(
    'best_model.h5', save_best_only=True, monitor='val_loss'
)
model.fit(X_train, y_train, callbacks=[checkpoint_cb])</code></pre></div>`,
    applications: [
      { icon: 'fa-save', title: 'Model Versioning', desc: 'Save model checkpoints during training to track progress and restore best versions.' },
      { icon: 'fa-cloud-upload-alt', title: 'Production Deployment', desc: 'Saved models are loaded by serving infrastructure (TF Serving, FastAPI) for inference.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is the difference between saving the full model vs. just weights?', answer: '<p>Saving the full model preserves the architecture, weights, and optimizer state — you can resume training or deploy without redefining the model. Saving only weights requires you to recreate the model architecture before loading, but is more portable across frameworks.</p>' },
    ],
  },

  'deployment/web-deployment': {
    title: 'Flask / Streamlit for Web Deployment',
    description: `
      <p>Flask and Streamlit are popular Python frameworks for deploying deep learning models as web applications, enabling users to interact with models through a browser.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>Streamlit is ideal for rapid prototyping and data science demos. Flask is better for production APIs and integration with existing web applications.</p></div>
      <h3>Flask</h3>
      <p>A lightweight web framework for building REST APIs. Ideal for serving model predictions as JSON endpoints consumed by frontend applications.</p>
      <h3>Streamlit</h3>
      <p>A framework that turns Python scripts into interactive web apps with minimal code. Perfect for ML demos and dashboards.</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np

app = Flask(__name__)
model = tf.keras.models.load_model('my_model')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['data']
    input_array = np.array(data).reshape(1, -1)
    prediction = model.predict(input_array)
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)</code></pre></div>`,
    applications: [
      { icon: 'fa-globe', title: 'REST APIs', desc: 'Flask APIs serve model predictions to web and mobile applications in real-time.' },
      { icon: 'fa-chart-bar', title: 'ML Dashboards', desc: 'Streamlit dashboards visualize model performance and enable interactive predictions.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'How do you deploy a deep learning model as a REST API?', answer: '<p>Load the saved model in a Flask/FastAPI application, define a prediction endpoint that accepts input data (JSON), preprocesses it, runs model inference, and returns predictions as JSON. Deploy the application on a cloud server or container (Docker).</p>' },
    ],
  },

  'deployment/edge-deployment': {
    title: 'ONNX / TensorFlow Lite for Edge Deployment',
    description: `
      <p>Edge deployment runs deep learning models directly on devices (smartphones, IoT sensors, embedded systems) without requiring cloud connectivity, enabling real-time inference with low latency.</p>
      <div class="info-box"><div class="info-title"><i class="fas fa-lightbulb"></i> Key Insight</div><p>TensorFlow Lite and ONNX Runtime can reduce model size by 4x and inference time by 2-3x through quantization, making models viable for resource-constrained devices.</p></div>
      <h3>TensorFlow Lite</h3>
      <p>Optimized for mobile and embedded devices. Supports quantization (INT8) and hardware acceleration (GPU, DSP, NPU).</p>
      <h3>ONNX (Open Neural Network Exchange)</h3>
      <p>An open format for representing ML models, enabling interoperability between frameworks (PyTorch → ONNX → TensorFlow Lite).</p>`,
    examples: `
      <div class="code-container"><pre><code class="language-python">import tensorflow as tf

# Convert to TFLite
converter = tf.lite.TFLiteConverter.from_saved_model('my_model')
converter.optimizations = [tf.lite.Optimize.DEFAULT]  # Quantization
tflite_model = converter.convert()

with open('model.tflite', 'wb') as f:
    f.write(tflite_model)

# Run inference with TFLite
interpreter = tf.lite.Interpreter(model_path='model.tflite')
interpreter.allocate_tensors()
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()
interpreter.set_tensor(input_details[0]['index'], input_data)
interpreter.invoke()
output = interpreter.get_tensor(output_details[0]['index'])</code></pre></div>`,
    applications: [
      { icon: 'fa-mobile-alt', title: 'Mobile Apps', desc: 'TFLite models run on-device for real-time image classification, object detection, and NLP.' },
      { icon: 'fa-microchip', title: 'IoT Devices', desc: 'Quantized models run on microcontrollers for predictive maintenance and anomaly detection.' },
      { icon: 'fa-car', title: 'Autonomous Systems', desc: 'Edge inference enables real-time decision making in autonomous vehicles without cloud latency.' },
    ],
    resources: {
      video: 'https://youtu.be/6M5VXKLf4D4',
      pdf: 'https://drive.google.com/file/d/1ByQp3x6L6hy3O3zkPpGpyCs4ghM2cDwJ/view',
    },
    interviewQuestions: [
      { question: 'What is the difference between TFLite and ONNX?', answer: '<p>TFLite is TensorFlow-specific and optimized for mobile/embedded deployment with hardware acceleration support. ONNX is framework-agnostic, enabling model portability between PyTorch, TensorFlow, and other frameworks. Both support quantization for reduced model size.</p>' },
      { question: 'What is model quantization and why is it important for edge deployment?', answer: '<p>Quantization converts model weights from 32-bit floats to 8-bit integers, reducing model size by ~4x and inference time by 2-3x with minimal accuracy loss. This is critical for edge devices with limited memory, compute, and battery life.</p>' },
    ],
  },

};

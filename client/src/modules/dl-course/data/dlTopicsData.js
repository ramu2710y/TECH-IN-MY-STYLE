export const dlTopicsData = [
  {
    number: "01",
    title: "Introduction to Deep Learning",
    subtopics: [
      { icon: "fa-question-circle", title: "What is Deep Learning?", path: "intro/what-is-dl" },
      { icon: "fa-not-equal", title: "DL vs ML vs AI – Key differences", path: "intro/dl-vs-ml-vs-ai" },
      { icon: "fa-laptop-code", title: "Use-cases of DL", path: "intro/use-cases" },
      { icon: "fa-brain", title: "Biological Neuron vs Artificial Neuron", path: "intro/biological-vs-artificial" },
    ],
  },
  {
    number: "02",
    title: "Perceptron and Neural Network Basics",
    subtopics: [
      { icon: "fa-project-diagram", title: "Perceptron Model", path: "perceptron/perceptron-model" },
      { icon: "fa-wave-square", title: "Activation Functions", path: "perceptron/activation-functions" },
      { icon: "fa-network-wired", title: "Multi-Layer Perceptron (MLP)", path: "perceptron/mlp" },
      { icon: "fa-exchange-alt", title: "Forward and Backward Propagation", path: "perceptron/backpropagation" },
      { icon: "fa-chart-line", title: "Loss Functions", path: "perceptron/loss-functions" },
    ],
  },
  {
    number: "03",
    title: "Using TensorFlow / PyTorch / Keras",
    subtopics: [
      { icon: "fa-cube", title: "Tensors and computation graphs", path: "frameworks/tensors" },
      { icon: "fa-cogs", title: "Model definition, compiling, fitting, evaluating", path: "frameworks/model-workflow" },
    ],
  },
  {
    number: "04",
    title: "Training Deep Models",
    subtopics: [
      { icon: "fa-sliders-h", title: "Epochs, Batches, Learning Rate", path: "training/hyperparameters" },
      { icon: "fa-tachometer-alt", title: "Optimizers – SGD, Adam, RMSprop", path: "training/optimizers" },
      { icon: "fa-balance-scale", title: "Overfitting & Underfitting", path: "training/overfitting" },
      { icon: "fa-shield-alt", title: "Regularization – Dropout, L2", path: "training/regularization" },
      { icon: "fa-sort-numeric-up", title: "Batch Normalization", path: "training/batch-normalization" },
    ],
  },
  {
    number: "05",
    title: "Convolutional Neural Networks (CNNs)",
    subtopics: [
      { icon: "fa-layer-group", title: "CNN Layers: Conv, Pooling, Flatten", path: "cnn/cnn-layers" },
      { icon: "fa-image", title: "Use-case: Image Classification", path: "cnn/image-classification" },
    ],
  },
  {
    number: "06",
    title: "Advanced CNN Architectures",
    subtopics: [
      { icon: "fa-sitemap", title: "VGG, ResNet, Inception, MobileNet", path: "advanced-cnn/architectures" },
      { icon: "fa-bolt", title: "Use-case: Efficient image classification", path: "advanced-cnn/efficient-classification" },
      { icon: "fa-puzzle-piece", title: "Concept: Skip connections, depth, bottlenecks", path: "advanced-cnn/concepts" },
    ],
  },
  {
    number: "07",
    title: "Transfer Learning & Fine-tuning",
    subtopics: [
      { icon: "fa-recycle", title: "Pre-trained models: VGG, ResNet, etc.", path: "transfer-learning/pretrained" },
      { icon: "fa-edit", title: "Freezing layers, adding custom layers", path: "transfer-learning/custom-layers" },
    ],
  },
  {
    number: "08",
    title: "Autoencoders & Anomaly Detection",
    subtopics: [
      { icon: "fa-compress-arrows-alt", title: "Architecture of autoencoders", path: "autoencoders/architecture" },
      { icon: "fa-search-minus", title: "Use-case: Noise removal, compression, outlier detection", path: "autoencoders/use-cases" },
    ],
  },
  {
    number: "09",
    title: "Generative Adversarial Networks (GANs)",
    subtopics: [
      { icon: "fa-chess", title: "Generator vs Discriminator", path: "gans/generator-discriminator" },
      { icon: "fa-code-branch", title: "DCGAN basics", path: "gans/dcgan-basics" },
      { icon: "fa-images", title: "Use-case: Image generation, super-resolution", path: "gans/use-cases" },
    ],
  },
  {
    number: "10",
    title: "Model Evaluation & Explainability",
    subtopics: [
      { icon: "fa-chart-bar", title: "Metrics: Accuracy, Precision, Recall, F1, AUC", path: "evaluation/metrics" },
      { icon: "fa-table", title: "Confusion Matrix", path: "evaluation/confusion-matrix" },
      { icon: "fa-microscope", title: "Model Explainability: Grad-CAM, Feature Maps", path: "evaluation/explainability" },
    ],
  },
  {
    number: "11",
    title: "Model Deployment",
    subtopics: [
      { icon: "fa-save", title: "Save/load models", path: "deployment/save-load" },
      { icon: "fa-globe", title: "Flask / Streamlit for web deployment", path: "deployment/web-deployment" },
      { icon: "fa-mobile-alt", title: "ONNX / TensorFlow Lite for edge deployment", path: "deployment/edge-deployment" },
    ],
  },
];

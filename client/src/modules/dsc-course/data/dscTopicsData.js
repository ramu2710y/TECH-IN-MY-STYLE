export const topicsData = [
  {
    id: 'introduction',
    number: 1,
    title: 'Introduction to Data Science',
    subtopics: [
      { slug: 'what-is-data-science', title: 'What is Data Science?', description: '' },
      { slug: 'data-science-life-cycle', title: 'Data Science Life Cycle', description: '' },
      { slug: 'real-world-applications', title: 'Applications in real-world domains', description: '' },
    ],
  },
  {
    id: 'python-libraries',
    number: 2,
    title: 'Python Libraries for Data Science',
    subtopics: [
      { slug: 'numpy', title: 'NumPy', description: 'Arrays, operations, broadcasting, indexing' },
      { slug: 'pandas', title: 'Pandas', description: 'Series, DataFrames, indexing, filtering, grouping' },
      { slug: 'matplotlib', title: 'Matplotlib', description: 'Basic plotting, line/bar charts' },
      { slug: 'seaborn', title: 'Seaborn', description: 'Statistical plots, styling, correlation heatmaps' },
    ],
  },
  {
    id: 'data-cleaning',
    number: 3,
    title: 'Data Cleaning',
    subtopics: [
      { slug: 'missing-data', title: 'Handling missing data', description: 'NaN, imputation methods' },
      { slug: 'dropping-filtering', title: 'Dropping/Filtering rows and columns', description: '' },
      { slug: 'handling-duplicates', title: 'Handling duplicates', description: '' },
      { slug: 'data-type-conversions', title: 'Data type conversions', description: '' },
    ],
  },
  {
    id: 'data-transformation',
    number: 4,
    title: 'Data Transformation',
    subtopics: [
      { slug: 'feature-scaling', title: 'Feature scaling', description: 'MinMax, StandardScaler' },
      { slug: 'encoding-categorical', title: 'Encoding categorical variables', description: 'Label, One-hot' },
      { slug: 'data-transforms', title: 'Binning, log transforms, datetime handling', description: '' },
      { slug: 'combining-datasets', title: 'Combining and merging datasets', description: '' },
    ],
  },
  {
    id: 'descriptive-statistics',
    number: 5,
    title: 'Descriptive Statistics',
    subtopics: [
      { slug: 'central-tendency', title: 'Statistical Measures', description: 'Mean, Median, Mode, Variance, Std Dev, Skewness, Kurtosis' },
      { slug: 'groupby-summaries', title: 'Value counts, groupby summaries', description: '' },
    ],
  },
  {
    id: 'data-visualization',
    number: 6,
    title: 'Data Visualization',
    subtopics: [
      { slug: 'basic-plots', title: 'Basic plots', description: 'Histograms, box plots, violin plots' },
      { slug: 'relationship-plots', title: 'Advanced plots', description: 'Pair plots, scatter plots, bar charts' },
      { slug: 'correlation-heatmaps', title: 'Correlation matrices and heatmaps', description: '' },
    ],
  },
  {
    id: 'mini-projects',
    number: 7,
    title: 'Mini Projects',
    subtopics: [
      { slug: 'titanic-survival', title: 'Titanic Dataset Survival Analysis', description: '' },
      { slug: 'iris-classification', title: 'Iris Dataset Classification Overview', description: '' },
      { slug: 'data-trends', title: 'COVID/Crime/Sales Data Trend Visualization', description: '' },
    ],
  },
  {
    id: 'external-data',
    number: 8,
    title: 'Working with External Data',
    subtopics: [
      { slug: 'reading-files', title: 'Reading from CSV, Excel, JSON', description: '' },
      { slug: 'web-scraping', title: 'Scraping data', description: 'BeautifulSoup basics & advanced' },
      { slug: 'api-calls', title: 'API calls using requests', description: '' },
    ],
  },
  {
    id: 'statistics',
    number: 9,
    title: 'Basic Statistics & Probability',
    subtopics: [
      { slug: 'distributions', title: 'Probability distributions', description: '' },
      { slug: 'bayes-theorem', title: 'Bayes Theorem basics', description: '' },
      { slug: 'outlier-detection', title: 'Outlier detection methods', description: 'IQR, Z-score' },
    ],
  },
  {
    id: 'ml-ready',
    number: 10,
    title: 'Intro to ML-Ready Data',
    subtopics: [
      { slug: 'train-test-split', title: 'Train-test split', description: 'Using sklearn' },
      { slug: 'feature-selection', title: 'Feature selection', description: '' },
      { slug: 'bias-variance', title: 'Understanding bias-variance', description: '' },
    ],
  },
];

// Map slug -> full subtopic content
export const subtopicContent = {
  'what-is-data-science': {
    title: 'What is Data Science?',
    category: 'Introduction',
    readingTime: '12 min',
    topicId: 'introduction',
    topicTitle: 'Introduction to Data Science',
    description: `Data Science is an interdisciplinary field that combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data. It involves various processes and systems to extract knowledge from structured and unstructured data.

At its core, data science involves:
- Collecting and gathering data from various sources
- Cleaning and processing raw data
- Exploring and analyzing data to find patterns
- Building models using statistical methods and machine learning algorithms
- Communicating insights through data visualization and storytelling
- Making data-driven decisions to solve complex problems

Data scientists use tools like Python, R, SQL, and various frameworks to analyze large datasets and extract valuable information that can help organizations make better decisions.`,
    prerequisites: [
      'Basic understanding of mathematics (algebra, calculus)',
      'Fundamental statistics knowledge (mean, median, variance)',
      'Comfort with logical thinking and problem-solving',
      'Familiarity with at least one programming language (preferably Python)',
      'Curiosity and passion for working with data',
    ],
    codeExample: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Load a sample dataset
data = pd.read_csv('data.csv')

# Basic exploration
print(data.head())
print(data.describe())

# Visualize data distribution
plt.hist(data['column'], bins=20)
plt.title('Data Distribution')
plt.show()`,
    realWorldApps: [
      { title: 'Healthcare', description: 'Predicting disease outbreaks, personalizing treatment plans, and analyzing medical imaging data.' },
      { title: 'Finance', description: 'Fraud detection, algorithmic trading, credit scoring, and risk assessment.' },
      { title: 'E-commerce', description: 'Recommendation systems, customer segmentation, and demand forecasting.' },
    ],
    industries: [
      { name: 'Healthcare', items: ['Disease prediction', 'Medical image analysis', 'Drug discovery', 'Patient care optimization'] },
      { name: 'Finance', items: ['Risk assessment', 'Algorithmic trading', 'Fraud detection', 'Customer segmentation'] },
      { name: 'E-commerce', items: ['Recommendation systems', 'Customer behavior analysis', 'Supply chain optimization', 'Dynamic pricing'] },
      { name: 'Manufacturing', items: ['Predictive maintenance', 'Quality control', 'Process optimization', 'Demand forecasting'] },
    ],
    resources: [
      { title: 'Data Science Topic PDF', description: '', link: 'https://drive.google.com/file/d/1d77pxaPF71N3s-PKuJa3yuN5gveWzptS/view?usp=drive_link', type: 'download' },
      { title: 'Harvard Data Science Course', description: 'Free online course from Harvard covering data science foundations', link: 'https://online-learning.harvard.edu/course/data-science-r-basics', type: 'visit' },
    ],
    interviewQA: [
      { q: 'What is Data Science?', a: 'Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.' },
      { q: 'What are the key skills required for a Data Scientist?', a: 'Programming (Python/R), statistics, machine learning, data visualization, domain knowledge, and communication skills.' },
      { q: 'What is the difference between Data Science and Machine Learning?', a: 'Data Science is a broader field encompassing data collection, cleaning, analysis, and visualization. Machine Learning is a subset focused on building predictive models.' },
      { q: 'What tools do Data Scientists commonly use?', a: 'Python, R, SQL, Jupyter Notebooks, Pandas, NumPy, Scikit-learn, TensorFlow, Tableau, and Power BI.' },
      { q: 'What is exploratory data analysis (EDA)?', a: 'EDA is the process of analyzing datasets to summarize their main characteristics, often using visual methods, before applying formal modeling.' },
    ],
  },
  'data-science-life-cycle': {
    title: 'Data Science Life Cycle',
    category: 'Introduction',
    readingTime: '12 min',
    topicId: 'introduction',
    topicTitle: 'Introduction to Data Science',
    description: `The Data Science Life Cycle is a structured sequence of steps guiding data scientists to solve problems using data systematically — from data collection to model deployment and generating insights.`,
    prerequisites: [
      'Basic data science concepts',
      'Data collection and preprocessing',
      'Machine learning basics',
    ],
    codeExample: `# Load data
import pandas as pd
data = pd.read_csv('data.csv')

# Clean data
data.dropna(inplace=True)

# Summary statistics
print(data.describe())

# Model training
from sklearn.linear_model import LinearRegression
X = data[['feature1', 'feature2']]
y = data['target']
model = LinearRegression()
model.fit(X, y)

# Prediction
predictions = model.predict(X)
print(predictions[:5])`,
    realWorldApps: [
      { title: 'Predictive maintenance in manufacturing', description: '' },
      { title: 'Customer churn prediction in telecom', description: '' },
      { title: 'Credit scoring in banking', description: '' },
    ],
    industries: [
      { name: 'Finance', items: ['Risk assessment and management', 'Algorithmic trading'] },
      { name: 'E-commerce', items: ['Recommendation systems', 'Customer behavior analysis'] },
      { name: 'Manufacturing', items: ['Predictive maintenance', 'Quality control'] },
    ],
    resources: [
      { title: 'Data Science Topic PDF', description: '', link: 'https://drive.google.com/file/d/1U_uwery8ybCucN61TkKJfLlnA5dMtSzt/view?usp=drive_link', type: 'download' },
      { title: 'Harvard Data Science Course', description: 'Free online course from Harvard covering data science foundations', link: 'https://online-learning.harvard.edu/course/data-science-r-basics', type: 'visit' },
    ],
    interviewQA: [
      { q: 'What are the main phases of the Data Science Life Cycle?', a: 'Data collection, data cleaning, exploratory data analysis (EDA), feature engineering, model building, model evaluation, deployment, and monitoring.' },
      { q: 'How do you approach data cleaning and why is it important?', a: 'I handle missing values, remove duplicates, fix inconsistencies, and normalize data because clean data ensures model accuracy and reliability.' },
      { q: 'What techniques do you use for feature engineering?', a: 'Creating new features, encoding categorical variables, scaling, normalization, and dimensionality reduction.' },
      { q: 'Can you explain the difference between training and testing datasets?', a: 'Training data is used to teach the model, while testing data evaluates its performance on unseen data.' },
      { q: 'How do you validate your machine learning model?', a: 'Using techniques like cross-validation, confusion matrix, precision, recall, F1-score, and ROC-AUC.' },
    ],
  },
  'real-world-applications': {
    title: 'Applications in real-world domains',
    category: 'Introduction',
    readingTime: '12 min',
    topicId: 'introduction',
    topicTitle: 'Introduction to Data Science',
    description: `Data Science is transforming industries by extracting valuable insights from vast amounts of data. These insights drive smarter decisions, optimize operations, and create innovative products and services.`,
    prerequisites: [
      'Understanding of basic data science concepts',
      'Familiarity with data collection and preprocessing',
      'Basic knowledge of machine learning concepts',
      'Programming skills in Python or R',
      'Analytical thinking',
    ],
    codeExample: `# Step: Data Collection
import pandas as pd
data = pd.read_csv('data.csv')

# Step: Data Cleaning
data.dropna(inplace=True)

# Step: Exploratory Data Analysis (EDA)
print(data.describe())

# Step: Model Building
from sklearn.linear_model import LinearRegression
X = data[['feature1', 'feature2']]
y = data['target']
model = LinearRegression()
model.fit(X, y)

# Step: Prediction
predictions = model.predict(X)
print(predictions[:5])`,
    realWorldApps: [
      { title: 'Finance', description: 'Risk assessment, algorithmic trading, customer segmentation, fraud detection.' },
      { title: 'Healthcare', description: 'Disease prediction, medical image analysis, drug discovery, patient care optimization.' },
      { title: 'E-commerce', description: 'Recommendation systems, customer behavior analysis, supply chain optimization, dynamic pricing.' },
    ],
    industries: [
      { name: 'Finance', items: ['Risk assessment and management', 'Algorithmic trading', 'Customer segmentation', 'Fraud detection'] },
      { name: 'Healthcare', items: ['Disease prediction and diagnosis', 'Medical image analysis', 'Drug discovery', 'Patient care optimization'] },
      { name: 'E-commerce', items: ['Recommendation systems', 'Customer behavior analysis', 'Supply chain optimization', 'Dynamic pricing'] },
      { name: 'Transportation', items: ['Route optimization', 'Traffic prediction', 'Autonomous vehicles', 'Maintenance prediction'] },
      { name: 'Marketing', items: ['Customer targeting', 'Campaign optimization', 'Market basket analysis', 'Sentiment analysis'] },
      { name: 'Manufacturing', items: ['Predictive maintenance', 'Quality control', 'Process optimization', 'Demand forecasting'] },
    ],
    resources: [
      { title: 'Data Science Topic PDF', description: '', link: 'https://drive.google.com/file/d/1MVE5oVvJAgufuG7OthDBIwaLGxvBTe35/view?usp=drive_link', type: 'download' },
      { title: 'Harvard Data Science Course', description: 'Free online course from Harvard covering data science foundations', link: 'https://online-learning.harvard.edu/course/data-science-r-basics', type: 'visit' },
    ],
    interviewQA: [
      { q: 'What are the main phases of the Data Science Life Cycle?', a: 'Data collection, data cleaning, exploratory data analysis (EDA), feature engineering, model building, model evaluation, deployment, and monitoring.' },
      { q: 'How do you approach data cleaning and why is it important?', a: 'I handle missing values, remove duplicates, fix inconsistencies, and normalize data because clean data ensures model accuracy and reliability.' },
      { q: 'What techniques do you use for feature engineering?', a: 'Creating new features, encoding categorical variables, scaling, normalization, and dimensionality reduction.' },
      { q: 'Can you explain the difference between training and testing datasets?', a: 'Training data is used to teach the model, while testing data evaluates its performance on unseen data.' },
      { q: 'How do you validate your machine learning model?', a: 'Using techniques like cross-validation, confusion matrix, precision, recall, F1-score, and ROC-AUC.' },
    ],
  },
  'pandas': {
    title: 'Pandas',
    category: 'Python Libraries',
    readingTime: '12 min',
    topicId: 'python-libraries',
    topicTitle: 'Python Libraries for Data Science',
    description: `Pandas is a fast, powerful, and flexible open-source data analysis and manipulation library for Python. It provides two primary data structures:

Series: 1D labeled array.
DataFrame: 2D labeled, tabular structure.

Pandas makes it easy to perform indexing, filtering, grouping, merging, and cleaning on structured data.`,
    prerequisites: [
      'Understanding of basic Python',
      'Familiarity with NumPy',
      'Concept of rows and columns in tables',
    ],
    codeExample: `import pandas as pd

# Creating a Series
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print("Series:\\n", s)

# Creating a DataFrame
data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
df = pd.DataFrame(data)
print("DataFrame:\\n", df)

# Indexing
print("First row:\\n", df.loc[0])
print("Name column:\\n", df['Name'])

# Filtering
print("Age > 25:\\n", df[df['Age'] > 25])

# Grouping
grouped = df.groupby('Age')
for age, group in grouped:
    print(f"\\nGroup: Age = {age}\\n", group)`,
    realWorldApps: [
      { title: 'Data Analysis', description: 'Load, clean, and analyze structured data from CSV, Excel, databases. Perform descriptive stats, trends, and summarizations.' },
      { title: 'Image & Signal Processing', description: 'Representing pixel data as arrays. Applying filters via convolution.' },
      { title: 'Finance', description: 'Time-series stock data analysis. Portfolio performance calculations.' },
    ],
    industries: [
      { name: 'Healthcare', items: ['Analyzing patient records and lab test results', 'Grouping patients by age, disease, or treatment plans'] },
      { name: 'E-commerce', items: ['User purchase behavior', 'Grouping orders by product/category'] },
      { name: 'Machine Learning', items: ['Underlying numerical operations in models', 'Data preprocessing and augmentation'] },
      { name: 'Robotics', items: ['Coordinate transformations and movement control', 'Sensor data processing with broadcasting'] },
    ],
    resources: [
      { title: 'Data Science Topic PDF', description: '', link: 'https://drive.google.com/file/d/1d77pxaPF71N3s-PKuJa3yuN5gveWzptS/view?usp=drive_link', type: 'download' },
      { title: 'Harvard Data Science Course', description: 'Free online course from Harvard covering data science foundations', link: 'https://online-learning.harvard.edu/course/data-science-r-basics', type: 'visit' },
    ],
    interviewQA: [
      { q: 'What is Pandas?', a: 'Pandas is a Python library that provides data structures like Series and DataFrame for efficient manipulation and analysis of structured data.' },
      { q: 'Differentiate between Series and DataFrame.', a: 'A Series is a 1-dimensional labeled array, whereas a DataFrame is a 2-dimensional table of data with rows and columns.' },
      { q: 'How do you filter rows in a DataFrame?', a: 'You can use boolean indexing: df[df[\'Age\'] > 30] returns rows where Age > 30.' },
      { q: 'What is the use of groupby() in Pandas?', a: 'groupby() is used to split data into groups based on a column and then apply functions like sum, mean, or count to each group.' },
      { q: 'How is .loc[] different from .iloc[]?', a: '.loc[] uses labels (names), while .iloc[] uses integer-based indexing.' },
    ],
  },
};

// Generate generic content for slugs not explicitly defined
export function getSubtopicContent(slug) {
  if (subtopicContent[slug]) return subtopicContent[slug];

  // Find from topicsData
  for (const topic of topicsData) {
    const sub = topic.subtopics.find(s => s.slug === slug);
    if (sub) {
      return {
        title: sub.title,
        category: topic.title,
        readingTime: '10 min',
        topicId: topic.id,
        topicTitle: topic.title,
        description: `${sub.title} is an important concept in ${topic.title}. This topic covers the fundamental principles and practical applications used in data science workflows.`,
        prerequisites: [
          'Basic Python programming',
          'Understanding of data structures',
          'Familiarity with NumPy and Pandas',
        ],
        codeExample: `import pandas as pd
import numpy as np

# Example for ${sub.title}
data = pd.read_csv('dataset.csv')
print(data.head())
print(data.describe())`,
        realWorldApps: [
          { title: 'Data Analysis', description: `Applied in real-world ${sub.title.toLowerCase()} scenarios across industries.` },
          { title: 'Machine Learning', description: 'Used as a preprocessing step in ML pipelines.' },
          { title: 'Business Intelligence', description: 'Helps organizations make data-driven decisions.' },
        ],
        industries: [
          { name: 'Finance', items: ['Risk modeling', 'Portfolio analysis'] },
          { name: 'Healthcare', items: ['Patient data analysis', 'Clinical research'] },
          { name: 'E-commerce', items: ['Customer analytics', 'Sales forecasting'] },
          { name: 'Manufacturing', items: ['Quality control', 'Process optimization'] },
        ],
        resources: [
          { title: 'Data Science Topic PDF', description: '', link: 'https://drive.google.com/file/d/1d77pxaPF71N3s-PKuJa3yuN5gveWzptS/view?usp=drive_link', type: 'download' },
          { title: 'Harvard Data Science Course', description: 'Free online course from Harvard covering data science foundations', link: 'https://online-learning.harvard.edu/course/data-science-r-basics', type: 'visit' },
        ],
        interviewQA: [
          { q: `What is ${sub.title}?`, a: `${sub.title} is a fundamental concept in data science used to process and analyze data effectively.` },
          { q: 'Why is this important in data science?', a: 'It helps ensure data quality and model performance by properly preparing data for analysis.' },
          { q: 'What Python libraries are commonly used?', a: 'Pandas, NumPy, Scikit-learn, and Matplotlib are the most commonly used libraries.' },
          { q: 'How do you handle edge cases?', a: 'By validating data, handling missing values, and testing with diverse datasets.' },
          { q: 'What are best practices?', a: 'Document your process, use version control, validate results, and follow reproducible research principles.' },
        ],
      };
    }
  }
  return null;
}

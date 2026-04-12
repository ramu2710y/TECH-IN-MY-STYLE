export const TEMPLATES = [
  {
    id: 'hello',
    name: 'Hello World',
    category: 'Basics',
    icon: 'fa-code',
    color: '#06b6d4',
    description: 'Simple Python starter',
    code: `# Tech in My Style - AI Python Studio
# Hello World Example

print("Hello, World!")
print("Welcome to AI Python Studio!")

# Variables and types
name = "AI Developer"
version = 3.10
is_awesome = True

print(f"\\nName: {name}")
print(f"Python Version: {version}")
print(f"Is Awesome: {is_awesome}")
`
  },
  {
    id: 'numpy_demo',
    name: 'NumPy Arrays',
    category: 'AI/ML',
    icon: 'fa-chart-line',
    color: '#7c3aed',
    description: 'NumPy array operations',
    code: `import numpy as np

# Create arrays
a = np.array([1, 2, 3, 4, 5])
b = np.array([10, 20, 30, 40, 50])

print("Array a:", a)
print("Array b:", b)
print("Sum:", a + b)
print("Dot product:", np.dot(a, b))
print("Mean of a:", np.mean(a))
print("Std of b:", np.std(b))

# Matrix operations
matrix = np.random.rand(3, 3)
print("\\nRandom 3x3 Matrix:")
print(matrix)
print("\\nTranspose:")
print(matrix.T)
print("\\nDeterminant:", round(np.linalg.det(matrix), 4))
`
  },
  {
    id: 'pandas_demo',
    name: 'Pandas DataFrame',
    category: 'Data Science',
    icon: 'fa-table',
    color: '#f59e0b',
    description: 'Data analysis with Pandas',
    code: `import pandas as pd
import numpy as np

# Create a sample dataset
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'Score': [88.5, 92.0, 78.3, 95.1, 85.7],
    'Department': ['AI', 'ML', 'AI', 'NLP', 'ML']
}

df = pd.DataFrame(data)
print("Dataset:")
print(df)
print("\\nBasic Statistics:")
print(df.describe())
print("\\nAverage Score by Department:")
print(df.groupby('Department')['Score'].mean())
print("\\nTop Performers (Score > 90):")
print(df[df['Score'] > 90])
`
  },
  {
    id: 'chatbot',
    name: 'Simple Chatbot',
    category: 'AI Playground',
    icon: 'fa-robot',
    color: '#10b981',
    description: 'Rule-based chatbot demo',
    code: `# Simple Rule-Based Chatbot
# Demonstrates NLP concepts

import random

responses = {
    'hello': ['Hi there!', 'Hello! How can I help?', 'Hey! Welcome!'],
    'how are you': ['I am doing great!', 'Feeling awesome, thanks!'],
    'python': ['Python is amazing for AI/ML!', 'I love Python too!'],
    'ai': ['AI is the future!', 'Artificial Intelligence is fascinating!'],
    'bye': ['Goodbye!', 'See you later!', 'Bye! Happy coding!'],
}

def chatbot_response(user_input):
    user_input = user_input.lower().strip()
    for key in responses:
        if key in user_input:
            return random.choice(responses[key])
    return "Interesting! Tell me more about that."

# Demo conversation
test_inputs = [
    "Hello there!",
    "How are you?",
    "Tell me about Python",
    "What do you think about AI?",
    "Bye!"
]

print("=== Chatbot Demo ===\\n")
for msg in test_inputs:
    print(f"You: {msg}")
    print(f"Bot: {chatbot_response(msg)}\\n")
`
  },
  {
    id: 'spam_classifier',
    name: 'Spam Classifier',
    category: 'ML',
    icon: 'fa-filter',
    color: '#ef4444',
    description: 'Text classification with ML',
    code: `# Spam Classifier using scikit-learn
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Training data
emails = [
    "Win a free iPhone now click here",
    "Congratulations you won a million dollars",
    "Buy cheap meds online no prescription",
    "Meeting tomorrow at 10am in conference room",
    "Please review the attached project report",
    "Your invoice is ready for download",
    "FREE MONEY limited time offer act now",
    "Can we reschedule our call to Friday?",
    "Quarterly results are attached for review",
    "URGENT claim your prize before it expires",
]
labels = [1, 1, 1, 0, 0, 0, 1, 0, 0, 1]  # 1=spam, 0=ham

# Train model
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)
X_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.3, random_state=42)

model = MultinomialNB()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred) * 100:.1f}%")

# Test new emails
test_emails = [
    "Click here to claim your free gift",
    "Team standup at 9am tomorrow",
]
test_vec = vectorizer.transform(test_emails)
predictions = model.predict(test_vec)
for email, pred in zip(test_emails, predictions):
    print(f"\\n'{email}'")
    print(f"  -> {'SPAM' if pred == 1 else 'HAM'}")
`
  },
  {
    id: 'file_processor',
    name: 'File Processor',
    category: 'System',
    icon: 'fa-file-code',
    color: '#8b5cf6',
    description: 'File handling & os module',
    code: `import os
import sys
import tempfile

print("=== File Processing Demo ===\\n")

# System info
print(f"Python version: {sys.version.split()[0]}")
print(f"Platform: {sys.platform}")
print(f"Current directory: {os.getcwd()}")

# Create and write a temp file
with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f:
    f.write("Line 1: Hello from AI Python Studio\\n")
    f.write("Line 2: File processing demo\\n")
    f.write("Line 3: Docker-isolated execution\\n")
    tmpfile = f.name

print(f"\\nCreated temp file: {tmpfile}")

# Read it back
print("\\nFile contents:")
with open(tmpfile, 'r') as f:
    for i, line in enumerate(f, 1):
        print(f"  {i}: {line.rstrip()}")

# File stats
stats = os.stat(tmpfile)
print(f"\\nFile size: {stats.st_size} bytes")

# Cleanup
os.unlink(tmpfile)
print("\\nTemp file cleaned up.")
print("\\nFile processing complete!")
`
  },
  {
    id: 'system_automation',
    name: 'System Automation',
    category: 'System',
    icon: 'fa-gears',
    color: '#64748b',
    description: 'subprocess & system tools',
    code: `import subprocess
import sys
import os

print("=== System Automation Demo ===\\n")

# Run a subprocess
result = subprocess.run(
    [sys.executable, '-c', 'print("Hello from subprocess!")'],
    capture_output=True, text=True, timeout=10
)
print("Subprocess output:", result.stdout.strip())

# Environment info
print("\\nEnvironment Variables (sample):")
for key in ['PATH', 'HOME', 'USER']:
    val = os.environ.get(key, 'N/A')
    print(f"  {key}: {val[:50]}{'...' if len(val) > 50 else ''}")

# List installed packages
result2 = subprocess.run(
    [sys.executable, '-m', 'pip', 'list', '--format=columns'],
    capture_output=True, text=True, timeout=30
)
lines = result2.stdout.strip().split('\\n')
print(f"\\nInstalled packages ({len(lines)-2} total):")
for line in lines[:8]:
    print(f"  {line}")
print("  ...")
`
  },
]

export const CONTINUE_CODING = [
  { id: 'last1', name: 'main.py', lastEdited: '2 min ago', preview: 'print("Hello World")', icon: 'fa-code' },
  { id: 'last2', name: 'ml_model.py', lastEdited: '1 hour ago', preview: 'from sklearn...', icon: 'fa-brain' },
  { id: 'last3', name: 'data_analysis.py', lastEdited: 'Yesterday', preview: 'import pandas as pd', icon: 'fa-chart-bar' },
]

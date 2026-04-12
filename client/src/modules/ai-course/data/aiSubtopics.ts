export interface AccordionItem { q: string; a: string }
export interface AppCard { icon: string; title: string; desc: string }
export interface TableRow { col1: string; col2: string; col3: string }
export interface SubtopicData {
  title: string
  breadcrumb: { label: string; path?: string }[]
  sidebarTitle: string
  sidebarLinks: { label: string; path: string }[]
  relatedLinks: { label: string; path: string }[]
  description: string[]
  infoBox?: string[]
  code: string
  codeNote?: string
  appCards: AppCard[]
  tableHeaders: [string, string, string]
  tableRows: TableRow[]
  youtubeLink: string
  driveLink: string
  accordion: AccordionItem[]
}

const defaultAccordion: AccordionItem[] = [
  { q: 'What is this topic about?', a: 'This topic covers key concepts in Artificial Intelligence relevant to this subject area.' },
  { q: 'How is this used in practice?', a: 'This concept is applied in various real-world AI systems and applications.' },
  { q: 'What are the key benefits?', a: 'Understanding this topic helps build a strong foundation in AI and machine learning.' },
  { q: 'What are the challenges?', a: 'Like all AI topics, there are computational, ethical, and practical challenges to consider.' },
  { q: 'Where can I learn more?', a: 'Check the resources section for YouTube tutorials and PDF materials.' },
]

function makeTopic(
  title: string,
  category: string,
  sidebarTitle: string,
  sidebarLinks: { label: string; path: string }[],
  relatedLinks: { label: string; path: string }[],
  description: string[],
  code: string,
  appCards: AppCard[],
  tableHeaders: [string, string, string],
  tableRows: TableRow[],
  youtubeLink: string,
  driveLink: string,
  accordion: AccordionItem[],
  infoBox?: string[]
): SubtopicData {
  return {
    title,
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Topics', path: '/topics' },
      { label: category, path: '/topics' },
      { label: title },
    ],
    sidebarTitle,
    sidebarLinks,
    relatedLinks,
    description,
    infoBox,
    code,
    appCards,
    tableHeaders,
    tableRows,
    youtubeLink,
    driveLink,
    accordion,
  }
}

const whatIsAiLinks = [
  { label: 'Definition of AI', path: '/topics/what-is-ai/definition' },
  { label: 'History and Evolution', path: '/topics/what-is-ai/history' },
  { label: 'Goals and Importance', path: '/topics/what-is-ai/goals' },
]
const whatIsAiRelated = [
  { label: 'Types of AI', path: '/topics/types/narrow-ai' },
  { label: 'AI vs ML vs DL', path: '/topics/ai-ml-dl/differences' },
]
const typesLinks = [
  { label: 'Super-AI', path: '/topics/types/super-ai' },
  { label: 'Narrow AI', path: '/topics/types/narrow-ai' },
  { label: 'General AI', path: '/topics/types/general-ai' },
]
const typesRelated = [
  { label: 'Algorithms', path: '/topics/search/algorithms' },
  { label: 'Game-Playing', path: '/topics/game-playing/examples' },
]
const agentsLinks = [
  { label: 'agent-environment', path: '/topics/agents/agent-environment' },
  { label: 'agent-types', path: '/topics/agents/agent-types' },
]
const agentsRelated = [
  { label: 'What is turing-test', path: '/topics/turing-test/what-is' },
  { label: 'History AI', path: '/topics/what-is-ai/history' },
]
const appsLinks = [
  { label: 'AI in Healthcare', path: '/topics/applications/healthcare' },
  { label: 'AI in Finance', path: '/topics/applications/finance' },
  { label: 'AI in Retail', path: '/topics/applications/retail' },
  { label: 'AI in Education', path: '/topics/applications/education' },
  { label: 'AI in Transportation', path: '/topics/applications/transportation' },
  { label: 'AI in Gaming', path: '/topics/applications/gaming' },
]
const appsRelated = [
  { label: 'Types of AI', path: '/topics/types/narrow-ai' },
  { label: 'AI agents', path: '/topics/agents/agent-types' },
]
const aimlLinks = [
  { label: 'Core differences with examples', path: '/topics/ai-ml-dl/differences' },
  { label: 'Use cases to show practical distinctions', path: '/topics/ai-ml-dl/use-cases' },
]
const turingLinks = [
  { label: 'What it is and how it tests machine intelligence', path: '/topics/turing-test/what-is' },
  { label: 'Real-world relevance today', path: '/topics/turing-test/relevance' },
]
const searchLinks = [
  { label: 'Problem-solving via search', path: '/topics/search/problem-solving' },
  { label: 'Algorithms: BFS, DFS, A*, Uniform Cost', path: '/topics/search/algorithms' },
]
const _knowledgeLinks = [
  { label: 'Propositional logic', path: '/topics/knowledge/propositional-logic' },
  { label: 'Semantic networks', path: '/topics/knowledge/semantic-networks' },
  { label: 'Frames and ontologies', path: '/topics/knowledge/frames-ontologies' },
]
const _expertLinks = [
  { label: 'Rule-based systems', path: '/topics/expert-systems/rule-based' },
  { label: 'Architecture', path: '/topics/expert-systems/architecture' },
  { label: 'Real-world domains', path: '/topics/expert-systems/real-world' },
]
const _gameLinks = [
  { label: 'Minimax algorithm', path: '/topics/game-playing/minimax' },
  { label: 'Alpha-beta pruning', path: '/topics/game-playing/alpha-beta' },
  { label: 'Example: Tic-Tac-Toe, Chess bots', path: '/topics/game-playing/examples' },
]
const _miniLinks = [
  { label: 'Regression Model for Web-Friendly Data', path: '/topics/mini/project1' },
  { label: 'Classification Model for Tabular Data', path: '/topics/mini/project2' },
]
void _knowledgeLinks; void _expertLinks; void _gameLinks; void _miniLinks;

export const subtopicsMap: Record<string, SubtopicData> = {
  'what-is-ai/definition': makeTopic(
    'Definition of Artificial Intelligence', 'What is AI?', 'What is AI?',
    whatIsAiLinks, whatIsAiRelated,
    [
      'Artificial Intelligence (AI) refers to the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction.',
      'Several definitions of AI exist, reflecting different perspectives:',
    ],
    `# Simple chatbot using if-else
def chatbot():
    print("🤖 Chatbot: Hello! Type 'bye' to exit.")
    while True:
        user_input = input("👤 You: ").lower()
        if user_input in ['hello', 'hi']:
            print("🤖 Chatbot: Hi there! How can I help you?")
        elif 'your name' in user_input:
            print("🤖 Chatbot: I am PyBot, your Python assistant!")
        elif 'bye' in user_input:
            print("🤖 Chatbot: Goodbye!")
            break
        else:
            print("🤖 Chatbot: Sorry, I didn't understand that.")
chatbot()`,
    [
      { icon: 'fa-comments', title: 'Virtual Assistants', desc: 'Siri, Alexa, and Google Assistant use AI to understand and respond to user queries.' },
      { icon: 'fa-language', title: 'Translation Services', desc: 'Google Translate uses AI to provide real-time translation between languages.' },
      { icon: 'fa-shopping-cart', title: 'Recommendation Systems', desc: 'Amazon, Netflix, and Spotify use AI to recommend products, movies, and music.' },
      { icon: 'fa-car', title: 'Autonomous Vehicles', desc: 'Tesla, Waymo, and other companies use AI for self-driving capabilities.' },
    ],
    ['Domain', 'Applications', 'Impact'],
    [
      { col1: 'Healthcare', col2: 'Disease diagnosis, drug discovery', col3: 'Improving accuracy of diagnoses' },
      { col1: 'Finance', col2: 'Fraud detection, algorithmic trading', col3: 'Reducing fraud, optimizing investments' },
      { col1: 'Education', col2: 'Personalized learning, automated grading', col3: 'Customizing learning experiences' },
      { col1: 'Manufacturing', col2: 'Quality control, predictive maintenance', col3: 'Reducing defects, preventing failures' },
      { col1: 'Entertainment', col2: 'Content creation, game AI', col3: 'Enhancing user experience' },
    ],
    'https://www.youtube.com/watch?v=HcZ6bq-RVM0',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    [
      { q: 'What is Artificial Intelligence?', a: 'AI refers to the simulation of human intelligence in machines programmed to think and learn like humans, encompassing machine learning, NLP, computer vision, and robotics.' },
      { q: 'What are the main types of AI?', a: 'Narrow AI (task-specific), General AI (human-level cognitive abilities), and Super AI (theoretical, surpasses human intelligence). All current AI is Narrow AI.' },
      { q: 'How does AI differ from traditional programming?', a: 'Traditional programming uses explicit rules. AI, especially ML, learns patterns from data and improves over time without being explicitly programmed for each scenario.' },
      { q: 'What are the ethical concerns surrounding AI?', a: 'Job displacement, privacy concerns, algorithmic bias, accountability, security risks, and transparency issues (black box AI).' },
      { q: 'What is the Turing Test and why is it significant?', a: 'Proposed by Alan Turing in 1950, it tests if a machine can exhibit intelligent behavior indistinguishable from a human. It provides an operational definition of machine intelligence.' },
    ],
    [
      '<strong>The Engineering Approach:</strong> AI creates machines capable of performing tasks that typically require human intelligence.',
      '<strong>The Cognitive Approach:</strong> AI aims to understand and build intelligent entities that mimic human cognitive functions.',
      '<strong>The Turing Test Perspective:</strong> AI is achieved when a machine can exhibit intelligent behavior indistinguishable from a human.',
    ]
  ),

  'what-is-ai/history': makeTopic(
    'History and Evolution of AI', 'What is AI?', 'What is AI?',
    whatIsAiLinks, whatIsAiRelated,
    ["AI's journey spans from symbolic logic in the 1950s to today's generative AI models. Key phases: symbolic AI, expert systems, machine learning, and deep learning."],
    `# Rule-based expert system (symbolic AI era)
def diagnose(symptom):
    if symptom == "fever": return "You may have the flu"
    elif symptom == "rash": return "You may have measles"
    else: return "Symptom unknown"
print(diagnose("fever"))`,
    [
      { icon: 'fa-comments', title: 'Virtual Assistants', desc: 'Modern voice assistants (Alexa, Siri, Google Assistant)' },
      { icon: 'fa-car', title: 'Transportation', desc: 'Self-driving cars (Tesla Autopilot)' },
      { icon: 'fa-shopping-cart', title: 'Recommendation Systems', desc: 'Chatbots and conversational AI (ChatGPT, Bard)' },
      { icon: 'fa-shield-alt', title: 'Healthcare', desc: 'AI in medicine for diagnostics and drug discovery' },
    ],
    ['Domain', 'Applications', 'Impact'],
    [
      { col1: 'Healthcare', col2: 'Disease diagnosis, drug discovery', col3: 'Improving accuracy of diagnoses' },
      { col1: 'Finance', col2: 'Fraud detection, algorithmic trading', col3: 'Reducing fraud, optimizing investments' },
      { col1: 'Education', col2: 'Personalized learning, automated grading', col3: 'Customizing learning experiences' },
      { col1: 'Manufacturing', col2: 'Quality control, predictive maintenance', col3: 'Reducing defects, preventing failures' },
      { col1: 'Entertainment', col2: 'Content creation, game AI', col3: 'Enhancing user experience' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1QZcz7LZYHMAfMGrmtezzYMfPBscnAqWq/view?usp=drive_link',
    [
      { q: 'Who is known as the father of Artificial Intelligence?', a: 'John McCarthy is widely regarded as the father of AI. He coined the term "Artificial Intelligence" in 1956.' },
      { q: 'What are the major eras in the history of AI?', a: '1950s–1960s: Birth of AI. 1970s–1980s: Expert systems. 1990s–2000s: Machine learning. 2010s–Present: Deep learning, generative AI.' },
      { q: 'What was the significance of the Dartmouth Conference (1956)?', a: 'It was the first AI conference where the term "Artificial Intelligence" was officially coined, marking the birth of AI as a field.' },
      { q: 'What caused the AI Winters?', a: 'AI winters were periods of reduced funding and interest in AI, caused by unfulfilled promises and lack of computational power.' },
      { q: 'How did deep learning transform AI?', a: 'Deep learning allowed machines to automatically learn hierarchical features from large datasets, improving accuracy in tasks like image and speech recognition.' },
    ]
  ),

  'what-is-ai/goals': makeTopic(
    'Goals of Artificial Intelligence', 'What is AI?', 'Goals of AI?',
    whatIsAiLinks, whatIsAiRelated,
    [
      'The primary goals of AI are to develop systems that can perform tasks normally requiring human intelligence: learning, reasoning, problem-solving, perception, and decision-making.',
      'AI strives to create machines that can mimic, and potentially surpass, human cognitive abilities to improve efficiency, accuracy, and automation across various domains.',
    ],
    `# Goal-oriented AI assistant
def ai_assistant(time_of_day):
    if time_of_day == "morning":
        return "Good morning! Let me schedule your meetings."
    elif time_of_day == "afternoon":
        return "Good afternoon! Time for a productivity check."
    elif time_of_day == "evening":
        return "Good evening! Would you like to review your day?"
    else:
        return "Hello! I'm here to assist you anytime."
print(ai_assistant("morning"))`,
    [
      { icon: 'fa-comments', title: 'Virtual Assistants', desc: 'Siri, Alexa, and Google Assistant use AI to understand and respond to user queries.' },
      { icon: 'fa-car', title: 'Autonomous Vehicles', desc: 'AI enables cars to perceive surroundings, make decisions, and navigate safely.' },
      { icon: 'fa-hospital', title: 'Healthcare Diagnostics', desc: 'AI models identify diseases using patient data, X-rays, or pathology reports.' },
      { icon: 'fa-robot', title: 'Robotics', desc: 'AI-powered robots perform complex tasks in manufacturing and logistics.' },
    ],
    ['Domain', 'Applications', 'Impact'],
    [
      { col1: 'Healthcare', col2: 'Disease diagnosis, drug discovery', col3: 'Improving accuracy of diagnoses' },
      { col1: 'Finance', col2: 'Fraud detection, algorithmic trading', col3: 'Reducing fraud, optimizing investments' },
      { col1: 'Education', col2: 'Personalized learning, automated grading', col3: 'Customizing learning experiences' },
      { col1: 'Manufacturing', col2: 'Quality control, predictive maintenance', col3: 'Reducing defects, preventing failures' },
      { col1: 'Entertainment', col2: 'Content creation, game AI', col3: 'Enhancing user experience' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1GAm13jB2pn-mTZOuUCn_2uhDfScfijTy/view?usp=drive_link',
    [
      { q: 'What are the main goals of Artificial Intelligence?', a: 'Replicating human cognition, automating routine tasks, learning from data, solving complex problems, and achieving decision-making without human intervention.' },
      { q: 'How does AI achieve its goal of learning?', a: 'Through Machine Learning algorithms that allow systems to improve with data and experience without being explicitly programmed.' },
      { q: 'What is the difference between Narrow AI and General AI in terms of goals?', a: 'Narrow AI focuses on specific tasks (e.g., speech recognition), while General AI aims to mimic full human intelligence and flexibility.' },
      { q: 'How do AI systems help in achieving business goals?', a: 'By automating operations, providing insights, improving customer experience, and enabling better decision-making.' },
      { q: 'Can AI systems plan for the future?', a: 'Yes, many AI systems use planning algorithms to make decisions based on predicted future states (e.g., autonomous vehicles planning routes).' },
    ]
  ),

  'types/narrow-ai': makeTopic(
    'Narrow Artificial Intelligence', 'Types of AI', 'Types of AI',
    typesLinks, typesRelated,
    [
      'Narrow AI, or Weak AI, refers to AI systems designed and trained for a specific task. They cannot operate beyond their programmed capabilities, but can perform their designated jobs with remarkable efficiency.',
      'Unlike General AI, Narrow AI does not possess consciousness, understanding, or general reasoning ability. It\'s the most common type of AI we interact with today.',
    ],
    `from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

iris = load_iris()
X, y = iris.data, iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))`,
    [
      { icon: 'fa-robot', title: 'Voice Assistants (Alexa, Siri)', desc: 'Understand and respond to voice queries.' },
      { icon: 'fa-camera', title: 'Face Recognition Systems', desc: 'Unlock phones or track individuals in surveillance.' },
      { icon: 'fa-car', title: 'Autonomous Vehicles', desc: 'Navigate roads using sensor input and vision AI.' },
      { icon: 'fa-chart-line', title: 'Stock Market Prediction Tools', desc: 'Analyze patterns in stock data.' },
    ],
    ['Domain', 'Task-Specific AI Application', 'Status'],
    [
      { col1: 'Healthcare', col2: 'Disease detection, medical imaging classification', col3: 'Widely used' },
      { col1: 'Finance', col2: 'Fraud detection, credit scoring', col3: 'In production' },
      { col1: 'Retail', col2: 'Product recommendation systems', col3: 'Commercial use' },
      { col1: 'Education', col2: 'Personalized learning recommendations', col3: 'Adopted' },
      { col1: 'Security', col2: 'Facial recognition in surveillance', col3: 'Active deployment' },
    ],
    'https://www.youtube.com/watch?v=9CMYhIk1WAE',
    'https://drive.google.com/file/d/18wl_c6AKdJuZwN50hY75-W5lQT4iuZiG/view?usp=drive_link',
    [
      { q: 'What is Narrow AI?', a: 'Narrow AI refers to AI systems designed for a specific task such as image classification, speech recognition, or playing chess. It does not possess general reasoning capabilities.' },
      { q: 'Is Narrow AI the same as Weak AI?', a: 'Yes. Narrow AI is often referred to as Weak AI because it doesn\'t have self-awareness or general intelligence.' },
      { q: 'Give some examples of Narrow AI.', a: 'Examples include spam filters, chatbots, recommendation systems, and facial recognition software.' },
      { q: 'How does Narrow AI differ from General AI?', a: 'Narrow AI is task-specific and cannot perform beyond its scope, whereas General AI can theoretically perform any cognitive task a human can.' },
      { q: 'Is ChatGPT an example of Narrow AI?', a: 'Yes, ChatGPT is a Narrow AI model designed for understanding and generating human-like text based on its training data.' },
    ]
  ),

  'types/general-ai': makeTopic(
    'General Artificial Intelligence', 'Types of AI', 'Types of AI',
    typesLinks, typesRelated,
    [
      'General AI refers to a type of AI that possesses the ability to understand, learn, and apply knowledge across a wide range of tasks—just like a human. It aims for cognitive flexibility.',
      'It\'s still a theoretical concept and not yet achieved in practice, but it represents the ultimate goal of many AI researchers.',
    ],
    `# General AI is still theoretical
# No working code exists for true AGI
# Conceptual representation:
class GeneralAI:
    def __init__(self):
        self.knowledge = {}
        self.skills = []
    
    def learn(self, domain, knowledge):
        self.knowledge[domain] = knowledge
    
    def apply(self, task):
        # AGI would apply knowledge across any domain
        return f"Applying knowledge to: {task}"`,
    [
      { icon: 'fa-hospital-symbol', title: 'Personalized Healthcare Bots', desc: 'Diagnosing, treating, and emotionally supporting patients like a real doctor.' },
      { icon: 'fa-graduation-cap', title: 'AI Tutors', desc: 'Teaching any subject to any student, adapting in real-time to the student\'s needs.' },
      { icon: 'fa-cogs', title: 'Autonomous Research Agents', desc: 'Conducting experiments, forming hypotheses, and analyzing results without human input.' },
      { icon: 'fa-brain', title: 'Human-AI Collaboration', desc: 'General AI working alongside humans in any field, from art to surgery.' },
    ],
    ['Domain', 'AGI Potential Use', 'Status'],
    [
      { col1: 'Healthcare', col2: 'General diagnosis, emotional support, adaptive treatments', col3: 'Theoretical / Research' },
      { col1: 'Education', col2: 'AI teachers capable of lifelong learning and student mentorship', col3: 'Early-stage research' },
      { col1: 'Scientific Discovery', col2: 'Forming hypotheses, running simulations, publishing papers', col3: 'Conceptual' },
      { col1: 'Defense & Aerospace', col2: 'Fully autonomous mission control and adaptive planning', col3: 'Hypothetical' },
      { col1: 'Companion Robots', col2: 'Social, emotional, and contextual understanding', col3: 'Futuristic' },
    ],
    'https://www.youtube.com/watch?v=LhLyOWoUnDI',
    'https://drive.google.com/file/d/10DLZ7rfaJEYDAgewS4OvWGTeRZFPi6uN/view?usp=drive_link',
    [
      { q: 'What is General AI (AGI)?', a: 'General AI refers to an intelligent system that can perform any intellectual task a human can. It possesses generalized cognitive abilities rather than narrow, task-specific intelligence.' },
      { q: 'Has General AI been achieved?', a: 'No. General AI is still theoretical. Most AI today is Narrow AI—built for specific tasks.' },
      { q: 'How is General AI different from Narrow AI?', a: 'Narrow AI performs one task efficiently (e.g., face recognition), while General AI can perform a wide variety of tasks without being retrained.' },
      { q: 'What challenges exist in building AGI?', a: 'Challenges include understanding consciousness, generalization across domains, emotional intelligence, and ethical decision-making.' },
      { q: 'Is ChatGPT a General AI?', a: 'No. ChatGPT is a form of narrow AI designed to process and generate human-like language. It cannot perform tasks beyond its training in a truly general way.' },
    ]
  ),

  'types/super-ai': makeTopic(
    'Super Artificial Intelligence', 'Types of AI', 'Types of AI',
    typesLinks, typesRelated,
    [
      'Super AI (ASI) refers to a hypothetical AI system that surpasses human intelligence in every aspect—logic, creativity, emotional understanding, problem-solving, and social intelligence.',
      'Currently, Super AI does not exist—it is a futuristic and theoretical concept.',
    ],
    `# Super AI is not yet realized
# This is a theoretical concept
# No working code exists for ASI`,
    [
      { icon: 'fa-robot', title: 'Fully Autonomous Humanoids', desc: 'Robots that think, feel, and decide independently.' },
      { icon: 'fa-globe', title: 'Global Governance Assistants', desc: 'AI systems advising on complex geopolitical strategies.' },
      { icon: 'fa-dna', title: 'Cure for All Diseases', desc: 'ASI may potentially discover universal cures.' },
      { icon: 'fa-brain', title: 'Neural-Augmentation', desc: 'Enhancing human brains through AI integration.' },
    ],
    ['Domain', 'Theoretical Super AI Use Case', 'Status'],
    [
      { col1: 'Healthcare', col2: 'Real-time genetic disease resolution and personalized body optimization', col3: 'Not achieved' },
      { col1: 'Defense', col2: 'Autonomous ethical war prevention and global peace negotiation', col3: 'Theoretical' },
      { col1: 'Space', col2: 'Running complex space stations and faster-than-light computation', col3: 'Future goal' },
      { col1: 'Education', col2: 'Hyper-personalized lifelong learning mentors', col3: 'Futuristic' },
      { col1: 'Environment', col2: 'Automated global climate correction systems', col3: 'Conceptual' },
    ],
    'https://www.youtube.com/watch?v=PjqGbEE7EYc',
    'https://drive.google.com/file/d/1zdUt9caGJeOx6ZKuWe9Bnpc-lpzeYPCX/view?usp=drive_link',
    [
      { q: 'What is Super AI?', a: 'Super AI refers to a form of AI that surpasses human capabilities in every possible aspect, including reasoning, creativity, and emotional intelligence.' },
      { q: 'Is Super AI real today?', a: 'No. Super AI is a theoretical concept and has not been achieved. Research is focused on General AI and controlling safety aspects before advancing.' },
      { q: 'How is Super AI different from General AI?', a: 'While General AI can perform tasks at human-level intelligence, Super AI exceeds that level and performs far beyond human capability.' },
      { q: 'What are some concerns regarding Super AI?', a: 'Ethical dilemmas, loss of human control, existential risks, and alignment of AI values with human values.' },
      { q: 'Who are the major thinkers discussing Super AI?', a: 'Elon Musk, Nick Bostrom, Stephen Hawking, and many AI ethicists have publicly discussed the potential and dangers of Super AI.' },
    ]
  ),

  'agents/agent-environment': makeTopic(
    'Agents and Environment', 'Intelligent Agents', 'Intelligent Agents',
    agentsLinks, agentsRelated,
    [
      'In AI, the agent and environment are two core concepts. An agent is an autonomous entity that perceives its environment through sensors and acts upon it using actuators to achieve specific goals.',
      '👉 Think of the relationship as: Agent + Environment → Intelligent Behavior',
    ],
    `class Environment:
    def __init__(self):
        self.state = "dirty"
    def get_percept(self):
        return self.state
    def update_state(self, action):
        if action == "clean":
            self.state = "clean"

class VacuumAgent:
    def act(self, percept):
        if percept == "dirty": return "clean"
        return "do_nothing"

env = Environment()
agent = VacuumAgent()
percept = env.get_percept()
action = agent.act(percept)
env.update_state(action)
print("Environment state after action:", env.state)`,
    [
      { icon: 'fa-car', title: 'Self-driving Cars', desc: 'Agent: Car\'s AI system; Environment: Roads, traffic, pedestrians.' },
      { icon: 'fa-robot', title: 'Robotics', desc: 'Agent: Robot; Environment: Factory floor, home, hospital.' },
      { icon: 'fa-gamepad', title: 'Game AI', desc: 'Agent: Game bot; Environment: Game world.' },
      { icon: 'fa-microchip', title: 'Intelligent Assistants', desc: 'Agent: Siri or Alexa; Environment: User queries and device state.' },
    ],
    ['Domain', 'Agent', 'Environment'],
    [
      { col1: 'Healthcare', col2: 'AI diagnostic tool', col3: 'Patient health records and inputs' },
      { col1: 'Finance', col2: 'Fraud detection system', col3: 'Transaction data stream' },
      { col1: 'Retail', col2: 'Recommendation engine', col3: 'Customer behavior and preferences' },
      { col1: 'Education', col2: 'Intelligent tutor system', col3: 'Student learning activity' },
      { col1: 'Gaming', col2: 'NPC (Non-player character)', col3: 'Virtual game world' },
    ],
    'https://www.youtube.com/watch?v=nwQZSP6hyf0',
    'https://drive.google.com/file/d/1ktTy9tVrgGg-qXAInqHMuk6BBIQf91Ng/view?usp=drive_link',
    [
      { q: 'What is an agent in AI?', a: 'An agent is an autonomous entity that perceives the environment and takes actions to achieve goals.' },
      { q: 'What constitutes the environment in AI?', a: 'The environment includes everything external to the agent that it can sense and act upon.' },
      { q: 'Can the agent modify its environment?', a: 'Yes, agents act on the environment, which may result in state changes (e.g., a robot picking up an object).' },
      { q: 'Give an example of agent-environment interaction in real life.', a: 'In a self-driving car: the AI (agent) perceives traffic (environment), decides actions (like braking or accelerating), which alters the car\'s position and the traffic scenario.' },
      { q: 'How do agents and environments relate in reinforcement learning?', a: 'In reinforcement learning, the agent learns by taking actions in the environment and receiving feedback (rewards or penalties).' },
    ],
    [
      '<strong>Agent:</strong> An agent is an autonomous entity that perceives its environment through sensors and acts upon that environment using actuators to achieve specific goals.',
      '<strong>Environment:</strong> The environment is everything that the agent interacts with or operates in. It provides inputs (percepts) to the agent and is affected by the agent\'s actions.',
    ]
  ),

  'agents/agent-types': makeTopic(
    'Types of Agents', 'Intelligent Agents', 'Intelligent Agents',
    agentsLinks, agentsRelated,
    [
      'In AI, agents are categorized into different types based on complexity and intelligence. These types represent increasing levels of autonomy and decision-making capability.',
    ],
    `# Simple Reflex Agent (Example: Vacuum Cleaner)
def simple_reflex_agent(percept):
    if percept == "dirty":
        return "clean"
    else:
        return "move"

print(simple_reflex_agent("dirty"))  # Output: clean`,
    [
      { icon: 'fa-broom', title: 'Simple Reflex Agent', desc: 'Used in basic robotic vacuums like early Roombas.' },
      { icon: 'fa-car', title: 'Model-Based Agent', desc: 'Used in adaptive cruise control in cars.' },
      { icon: 'fa-rocket', title: 'Goal-Based Agent', desc: 'Used in automated spacecraft navigation systems.' },
      { icon: 'fa-chart-line', title: 'Utility-Based Agent', desc: 'Stock trading bots optimizing risk-reward.' },
    ],
    ['Agent Type', 'Application Domain', 'Example'],
    [
      { col1: 'Simple Reflex Agent', col2: 'Home Automation', col3: 'Thermostat, Light Controller' },
      { col1: 'Model-Based Agent', col2: 'Autonomous Driving', col3: 'Adaptive Cruise Control' },
      { col1: 'Goal-Based Agent', col2: 'Robotics', col3: 'Warehouse Robot Path Planning' },
      { col1: 'Utility-Based Agent', col2: 'Finance', col3: 'Trading Bots' },
      { col1: 'Learning Agent', col2: 'Education', col3: 'Intelligent Tutoring Systems' },
    ],
    'https://www.youtube.com/watch?v=rWh9cK0ycuw',
    'https://drive.google.com/file/d/1nt-rLUmHNxoHWOSESzkKMcYxH12aShS6/view?usp=drive_link',
    [
      { q: 'What is a Simple Reflex Agent?', a: 'An agent that chooses actions based only on the current percept, without using history or memory.' },
      { q: 'What makes a Model-Based Agent different?', a: 'It stores past percepts in an internal state to make more informed decisions.' },
      { q: 'What\'s the advantage of a Goal-Based Agent?', a: 'It allows the agent to plan and decide based on desired outcomes.' },
      { q: 'What does a Utility-Based Agent do?', a: 'It selects actions that maximize a utility function, providing more flexibility than goal-based agents.' },
      { q: 'How does a Learning Agent improve over time?', a: 'It updates its knowledge and decision-making policies based on experiences and feedback.' },
    ],
    [
      '<strong>Simple Reflex Agent</strong> Acts only on the current percept, ignoring history. Uses condition-action rules.',
      '<strong>Model-Based Reflex Agent</strong> Maintains an internal state (memory) to track unobservable parts of the environment.',
      '<strong>Goal-Based Agent</strong> Takes decisions based on a goal. It considers future consequences of actions (planning involved).',
      '<strong>Utility-Based Agent</strong> Chooses actions based on utility (happiness or success score), to maximize satisfaction.',
      '<strong>Learning Agent</strong> Improves performance over time by learning from experience and modifying its behavior.',
    ]
  ),

  'applications/healthcare': makeTopic(
    'Artificial Intelligence in Healthcare', 'Applications', 'Applications',
    appsLinks, appsRelated,
    ['AI is transforming healthcare by enabling machines to perform tasks that traditionally require human intelligence. AI systems assist in diagnosing diseases, personalizing treatment plans, predicting patient outcomes, and managing administrative workflows.'],
    `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=500, n_features=5, random_state=0)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = LogisticRegression()
model.fit(X_train, y_train)
prediction = model.predict([X_test[0]])
print("Disease Prediction:", "Positive" if prediction[0] else "Negative")`,
    [
      { icon: 'fa-x-ray', title: 'Medical Imaging', desc: 'AI detects tumors, fractures, or anomalies in X-rays, CT scans, and MRIs.' },
      { icon: 'fa-stethoscope', title: 'Disease Prediction', desc: 'Predicts chronic diseases like diabetes, heart attacks from historical data.' },
      { icon: 'fa-pills', title: 'Drug Discovery', desc: 'Accelerates drug design using biological simulations.' },
      { icon: 'fa-user-md', title: 'Virtual Health Assistants', desc: 'Offer 24/7 patient support, symptom checking, and appointment scheduling.' },
    ],
    ['Use Case', 'AI Technique', 'Impact'],
    [
      { col1: 'Disease Diagnosis', col2: 'Machine Learning, Deep Learning', col3: 'Faster and more accurate diagnosis' },
      { col1: 'Medical Imaging', col2: 'Convolutional Neural Networks (CNNs)', col3: 'Improved image analysis and interpretation' },
      { col1: 'Drug Development', col2: 'Predictive Modeling, Simulation', col3: 'Reduced time and cost of discovery' },
      { col1: 'Patient Monitoring', col2: 'IoT + AI', col3: 'Real-time vitals tracking and alerts' },
      { col1: 'Administrative Tasks', col2: 'NLP, Automation', col3: 'Streamlined hospital operations' },
    ],
    'https://www.youtube.com/watch?v=IY64S88pVAs',
    'https://drive.google.com/file/d/1vsUIroHK4oy61vKMc95SKPO-jqy_qCYx/view?usp=drive_link',
    [
      { q: 'How is AI used in diagnosing diseases?', a: 'AI models analyze medical data like X-rays or symptoms and compare them with historical cases to detect diseases.' },
      { q: 'Which AI algorithms are popular in healthcare?', a: 'Logistic Regression, Random Forest, CNNs for images, and NLP for records processing.' },
      { q: 'What is the benefit of AI in drug discovery?', a: 'It significantly reduces the time and cost by simulating drug responses using models.' },
      { q: 'How does AI assist doctors?', a: 'AI provides decision support by highlighting possible diagnoses, flagging abnormalities, and suggesting treatments.' },
      { q: 'What challenges does AI face in healthcare?', a: 'Data privacy, ethical use, explainability of models, and the need for large high-quality datasets.' },
    ]
  ),

  'applications/finance': makeTopic(
    'Artificial Intelligence in Finance', 'Applications', 'Applications',
    appsLinks, appsRelated,
    ['AI is revolutionizing the finance industry by enabling faster, more accurate decision-making, fraud detection, risk assessment, and personalized financial services.'],
    `import numpy as np
from sklearn.ensemble import RandomForestClassifier

X = np.random.rand(1000, 5)
y = (X[:, 0] + X[:, 1] > 1.2).astype(int)
clf = RandomForestClassifier()
clf.fit(X[:800], y[:800])
pred = clf.predict(X[800:])
print("Fraud detected:", sum(pred))`,
    [
      { icon: 'fa-shield-alt', title: 'Fraud Detection', desc: 'AI identifies suspicious transactions in real-time.' },
      { icon: 'fa-chart-line', title: 'Algorithmic Trading', desc: 'AI executes trades at optimal times based on market patterns.' },
      { icon: 'fa-credit-card', title: 'Credit Scoring', desc: 'AI evaluates creditworthiness more accurately than traditional methods.' },
      { icon: 'fa-robot', title: 'Robo-Advisors', desc: 'Automated investment advice tailored to individual goals.' },
    ],
    ['Use Case', 'AI Technique', 'Impact'],
    [
      { col1: 'Fraud Detection', col2: 'Anomaly Detection, ML', col3: 'Reduced financial losses' },
      { col1: 'Algorithmic Trading', col2: 'Reinforcement Learning', col3: 'Optimized returns' },
      { col1: 'Credit Scoring', col2: 'Logistic Regression, Neural Networks', col3: 'Fairer credit decisions' },
      { col1: 'Risk Assessment', col2: 'Predictive Analytics', col3: 'Better risk management' },
      { col1: 'Customer Service', col2: 'NLP, Chatbots', col3: 'Improved customer experience' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    defaultAccordion
  ),

  'applications/retail': makeTopic(
    'Artificial Intelligence in Retail', 'Applications', 'Applications',
    appsLinks, appsRelated,
    ['AI is transforming retail by personalizing shopping experiences, optimizing supply chains, and enabling smarter inventory management.'],
    `# Simple collaborative filtering recommendation
users = {'Alice': ['milk', 'bread'], 'Bob': ['milk', 'eggs'], 'Carol': ['bread', 'eggs']}
def recommend(user, users):
    user_items = set(users[user])
    scores = {}
    for other, items in users.items():
        if other != user:
            for item in items:
                if item not in user_items:
                    scores[item] = scores.get(item, 0) + 1
    return sorted(scores, key=scores.get, reverse=True)
print(recommend('Alice', users))`,
    [
      { icon: 'fa-shopping-cart', title: 'Recommendation Systems', desc: 'Personalized product recommendations based on browsing and purchase history.' },
      { icon: 'fa-boxes', title: 'Inventory Management', desc: 'AI predicts demand and optimizes stock levels.' },
      { icon: 'fa-robot', title: 'Chatbots', desc: '24/7 customer support and shopping assistance.' },
      { icon: 'fa-tag', title: 'Dynamic Pricing', desc: 'AI adjusts prices in real-time based on demand and competition.' },
    ],
    ['Use Case', 'AI Technique', 'Impact'],
    [
      { col1: 'Product Recommendations', col2: 'Collaborative Filtering, Deep Learning', col3: 'Increased sales and customer satisfaction' },
      { col1: 'Inventory Optimization', col2: 'Predictive Analytics', col3: 'Reduced waste and stockouts' },
      { col1: 'Customer Service', col2: 'NLP, Chatbots', col3: 'Improved response time' },
      { col1: 'Dynamic Pricing', col2: 'Reinforcement Learning', col3: 'Maximized revenue' },
      { col1: 'Visual Search', col2: 'Computer Vision', col3: 'Enhanced shopping experience' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    defaultAccordion
  ),

  'applications/education': makeTopic(
    'Artificial Intelligence in Education', 'Applications', 'Applications',
    appsLinks, appsRelated,
    ['AI is revolutionizing education by enabling personalized learning experiences, automating administrative tasks, and providing intelligent tutoring systems that adapt to individual student needs.'],
    `def adaptive_quiz(student_score):
    if student_score < 40:
        return "Beginner level questions"
    elif student_score < 70:
        return "Intermediate level questions"
    else:
        return "Advanced level questions"
print(adaptive_quiz(55))`,
    [
      { icon: 'fa-graduation-cap', title: 'Personalized Learning', desc: 'AI adapts content and pace to individual student needs.' },
      { icon: 'fa-robot', title: 'Intelligent Tutoring', desc: 'AI tutors provide personalized guidance and feedback.' },
      { icon: 'fa-check-circle', title: 'Automated Grading', desc: 'AI grades assignments and provides instant feedback.' },
      { icon: 'fa-chart-bar', title: 'Learning Analytics', desc: 'AI tracks student progress and identifies areas for improvement.' },
    ],
    ['Use Case', 'AI Technique', 'Impact'],
    [
      { col1: 'Personalized Learning', col2: 'Adaptive Algorithms', col3: 'Improved student outcomes' },
      { col1: 'Intelligent Tutoring', col2: 'NLP, Knowledge Graphs', col3: 'Better student engagement' },
      { col1: 'Automated Grading', col2: 'NLP, Computer Vision', col3: 'Reduced teacher workload' },
      { col1: 'Learning Analytics', col2: 'Predictive Analytics', col3: 'Early intervention for struggling students' },
      { col1: 'Content Creation', col2: 'Generative AI', col3: 'Scalable educational content' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    defaultAccordion
  ),

  'applications/transportation': makeTopic(
    'Artificial Intelligence in Transportation', 'Applications', 'Applications',
    appsLinks, appsRelated,
    ['AI is transforming transportation through autonomous vehicles, traffic management, route optimization, and predictive maintenance, making travel safer and more efficient.'],
    `from collections import deque
def find_shortest_route(graph, start, end):
    queue = deque([[start]])
    visited = {start}
    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == end: return path
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])
    return None
graph = {'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': ['E'], 'E': []}
print(find_shortest_route(graph, 'A', 'E'))`,
    [
      { icon: 'fa-car', title: 'Autonomous Vehicles', desc: 'Self-driving cars using AI for navigation and safety.' },
      { icon: 'fa-traffic-light', title: 'Traffic Management', desc: 'AI optimizes traffic flow and reduces congestion.' },
      { icon: 'fa-route', title: 'Route Optimization', desc: 'AI finds the most efficient routes for logistics.' },
      { icon: 'fa-tools', title: 'Predictive Maintenance', desc: 'AI predicts vehicle failures before they occur.' },
    ],
    ['Use Case', 'AI Technique', 'Impact'],
    [
      { col1: 'Autonomous Vehicles', col2: 'Computer Vision, Deep Learning', col3: 'Reduced accidents, improved safety' },
      { col1: 'Traffic Management', col2: 'Reinforcement Learning', col3: 'Reduced congestion and emissions' },
      { col1: 'Route Optimization', col2: 'Graph Algorithms, ML', col3: 'Faster deliveries, lower costs' },
      { col1: 'Predictive Maintenance', col2: 'Anomaly Detection', col3: 'Reduced downtime and repair costs' },
      { col1: 'Ride Sharing', col2: 'Matching Algorithms', col3: 'Improved efficiency and user experience' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    defaultAccordion
  ),

  'applications/gaming': makeTopic(
    'Artificial Intelligence in Gaming', 'Applications', 'Applications',
    appsLinks, [{ label: 'Types of AI', path: '/topics/types/narrow-ai' }, { label: 'Game Playing', path: '/topics/game-playing/minimax' }],
    ['AI has been a core part of gaming since its early days, from simple rule-based NPCs to sophisticated agents that can beat world champions at complex games like Chess and Go.'],
    `def minimax(board, is_maximizing):
    winner = check_winner(board)
    if winner == 'X': return 1
    if winner == 'O': return -1
    if all(cell != ' ' for row in board for cell in row): return 0
    if is_maximizing:
        best = -float('inf')
        for i in range(3):
            for j in range(3):
                if board[i][j] == ' ':
                    board[i][j] = 'X'
                    best = max(best, minimax(board, False))
                    board[i][j] = ' '
        return best
    else:
        best = float('inf')
        for i in range(3):
            for j in range(3):
                if board[i][j] == ' ':
                    board[i][j] = 'O'
                    best = min(best, minimax(board, True))
                    board[i][j] = ' '
        return best`,
    [
      { icon: 'fa-chess', title: 'Game Bots', desc: 'AI opponents in chess, Go, and strategy games.' },
      { icon: 'fa-user-friends', title: 'NPC Behavior', desc: 'Realistic non-player character behavior and decision-making.' },
      { icon: 'fa-gamepad', title: 'Procedural Generation', desc: 'AI generates game worlds, levels, and content dynamically.' },
      { icon: 'fa-chart-line', title: 'Player Analytics', desc: 'AI analyzes player behavior to improve game design.' },
    ],
    ['Use Case', 'AI Technique', 'Example'],
    [
      { col1: 'Game Opponents', col2: 'Minimax, MCTS', col3: 'Chess engines, AlphaGo' },
      { col1: 'NPC Behavior', col2: 'Behavior Trees, FSM', col3: 'Enemy AI in FPS games' },
      { col1: 'Procedural Generation', col2: 'Generative AI', col3: 'Minecraft terrain generation' },
      { col1: 'Player Matching', col2: 'ML Ranking Systems', col3: 'Matchmaking in online games' },
      { col1: 'Cheat Detection', col2: 'Anomaly Detection', col3: 'Anti-cheat systems' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    defaultAccordion
  ),

  'ai-ml-dl/differences': makeTopic(
    'AI vs ML vs DL - Core Differences', 'AI vs ML vs DL', 'AI vs ML vs DL',
    aimlLinks, [{ label: 'Types of AI', path: '/topics/types/narrow-ai' }, { label: 'Definition of AI', path: '/topics/what-is-ai/definition' }],
    ['AI is the broadest concept — any technique that enables machines to mimic human intelligence. ML is a subset of AI that uses statistical methods. DL is a subset of ML that uses neural networks with many layers.'],
    `from sklearn.linear_model import LinearRegression
import numpy as np
X = np.array([[1],[2],[3],[4],[5]])
y = np.array([2,4,6,8,10])
model = LinearRegression()
model.fit(X, y)
print("Prediction for 6:", model.predict([[6]])[0])`,
    [
      { icon: 'fa-brain', title: 'AI', desc: 'Rule-based systems, expert systems, any intelligent behavior.' },
      { icon: 'fa-chart-line', title: 'Machine Learning', desc: 'Spam filters, recommendation systems, fraud detection.' },
      { icon: 'fa-network-wired', title: 'Deep Learning', desc: 'Image recognition, speech recognition, language models.' },
      { icon: 'fa-robot', title: 'All Combined', desc: 'Modern AI systems like ChatGPT use all three layers.' },
    ],
    ['Aspect', 'AI', 'ML / DL'],
    [
      { col1: 'Scope', col2: 'Broadest field', col3: 'ML is subset of AI; DL is subset of ML' },
      { col1: 'Data Needed', col2: 'Varies', col3: 'ML: Moderate; DL: Large amounts' },
      { col1: 'Example', col2: 'Expert Systems', col3: 'ML: Decision Trees; DL: Neural Networks' },
      { col1: 'Interpretability', col2: 'High (rule-based)', col3: 'ML: Medium; DL: Low (black box)' },
      { col1: 'Performance', col2: 'Task-dependent', col3: 'ML: Good; DL: State-of-the-art' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    [
      { q: 'What is the difference between AI, ML, and DL?', a: 'AI is the broadest field encompassing any technique for machine intelligence. ML is a subset using statistical learning. DL is a subset of ML using deep neural networks.' },
      { q: 'Is Deep Learning always better than Machine Learning?', a: 'Not always. DL requires large datasets and computational resources. For small datasets, traditional ML often performs better.' },
      { q: 'Can you have AI without ML?', a: 'Yes. Rule-based systems and expert systems are AI but don\'t use ML. They rely on explicitly programmed rules.' },
      { q: 'What makes Deep Learning "deep"?', a: 'The "deep" refers to the many layers in neural networks. More layers allow the network to learn more complex representations.' },
      { q: 'Which should I learn first: AI, ML, or DL?', a: 'Start with AI fundamentals, then ML concepts and algorithms, then DL. Each builds on the previous.' },
    ]
  ),

  'ai-ml-dl/use-cases': makeTopic(
    'AI vs ML vs DL - Use Cases', 'AI vs ML vs DL', 'AI vs ML vs DL',
    aimlLinks, [{ label: 'Types of AI', path: '/topics/types/narrow-ai' }, { label: 'Definition of AI', path: '/topics/what-is-ai/definition' }],
    ['Understanding when to use AI, ML, or DL is crucial. Each has its strengths and is suited for different types of problems and data availability.'],
    `from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
emails = ["win free money now", "meeting at 3pm", "claim your prize", "project update"]
labels = [1, 0, 1, 0]
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)
clf = MultinomialNB()
clf.fit(X, labels)
test = vectorizer.transform(["free prize money"])
print("Spam?", "Yes" if clf.predict(test)[0] else "No")`,
    [
      { icon: 'fa-envelope', title: 'Spam Detection (ML)', desc: 'Naive Bayes classifies emails as spam or not spam.' },
      { icon: 'fa-image', title: 'Image Recognition (DL)', desc: 'CNNs identify objects in images with high accuracy.' },
      { icon: 'fa-chess', title: 'Game Playing (AI)', desc: 'Rule-based and search algorithms for game strategies.' },
      { icon: 'fa-comments', title: 'Chatbots (DL+NLP)', desc: 'Large language models power conversational AI.' },
    ],
    ['Use Case', 'Best Approach', 'Why'],
    [
      { col1: 'Spam Detection', col2: 'ML (Naive Bayes)', col3: 'Works well with text features, small data' },
      { col1: 'Image Classification', col2: 'DL (CNN)', col3: 'Automatically learns visual features' },
      { col1: 'Medical Diagnosis Rules', col2: 'AI (Expert System)', col3: 'Explicit rules from domain experts' },
      { col1: 'Stock Prediction', col2: 'ML (LSTM)', col3: 'Time series patterns in financial data' },
      { col1: 'Language Translation', col2: 'DL (Transformer)', col3: 'Complex language patterns require deep networks' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    defaultAccordion
  ),

  'turing-test/what-is': makeTopic(
    'What is the Turing Test?', 'Turing Test', 'Turing Test',
    turingLinks, [{ label: 'Definition of AI', path: '/topics/what-is-ai/definition' }, { label: 'History of AI', path: '/topics/what-is-ai/history' }],
    ['The Turing Test, proposed by Alan Turing in 1950, is a test of a machine\'s ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.', 'In the test, a human evaluator judges natural language conversations between a human and a machine. If the evaluator cannot reliably tell the machine from the human, the machine is said to have passed the test.'],
    `def turing_test_bot(question):
    responses = {
        "what is your name": "I'm Alex, nice to meet you!",
        "how are you": "I'm doing great, thanks for asking!",
        "what do you like": "I enjoy reading books and solving puzzles.",
        "are you human": "Of course! What makes you ask?",
    }
    return responses.get(question.lower(), "That's an interesting question. Tell me more.")
print(turing_test_bot("are you human"))`,
    [
      { icon: 'fa-comments', title: 'Chatbots', desc: 'Modern chatbots attempt to pass the Turing Test in limited domains.' },
      { icon: 'fa-robot', title: 'Conversational AI', desc: 'Systems like ChatGPT can fool humans in text conversations.' },
      { icon: 'fa-brain', title: 'AI Research', desc: 'The Turing Test drives research in natural language understanding.' },
      { icon: 'fa-shield-alt', title: 'CAPTCHA', desc: 'CAPTCHAs are reverse Turing Tests to distinguish humans from bots.' },
    ],
    ['Aspect', 'Description', 'Significance'],
    [
      { col1: 'Proposed by', col2: 'Alan Turing, 1950', col3: 'Foundation of AI evaluation' },
      { col1: 'Test format', col2: 'Text-based conversation', col3: 'Avoids physical appearance bias' },
      { col1: 'Pass criteria', col2: 'Evaluator cannot distinguish AI from human', col3: 'Operational definition of intelligence' },
      { col1: 'Limitations', col2: 'Only tests language ability', col3: 'Not a complete measure of intelligence' },
      { col1: 'Modern relevance', col2: 'Inspires NLP and conversational AI', col3: 'Still influential in AI research' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    [
      { q: 'What is the Turing Test?', a: 'The Turing Test is a test proposed by Alan Turing to determine if a machine can exhibit intelligent behavior indistinguishable from a human in a text-based conversation.' },
      { q: 'Has any AI passed the Turing Test?', a: 'Some chatbots have claimed to pass limited versions of the test, but no AI has convincingly passed a rigorous, unrestricted Turing Test.' },
      { q: 'What are the limitations of the Turing Test?', a: 'It only tests language ability, not true understanding or consciousness. A machine could pass by mimicking without actually understanding.' },
      { q: 'What is the Chinese Room argument?', a: 'John Searle\'s Chinese Room argument suggests that passing the Turing Test doesn\'t prove understanding — a system can manipulate symbols without understanding their meaning.' },
      { q: 'Why is the Turing Test still relevant?', a: 'It provides a practical benchmark for conversational AI and continues to inspire research in natural language processing and human-computer interaction.' },
    ]
  ),

  'turing-test/relevance': makeTopic(
    'Real-World Relevance of the Turing Test', 'Turing Test', 'Turing Test',
    turingLinks, [{ label: 'Definition of AI', path: '/topics/what-is-ai/definition' }, { label: 'History of AI', path: '/topics/what-is-ai/history' }],
    ['While the Turing Test was proposed over 70 years ago, it remains highly relevant in today\'s AI landscape. Modern AI systems like large language models have brought us closer to passing the test than ever before.'],
    `def sounds_human(text):
    human_markers = ['I think', 'I feel', 'in my opinion', 'personally']
    return any(marker.lower() in text.lower() for marker in human_markers)
print(sounds_human("I think AI is fascinating"))  # True`,
    [
      { icon: 'fa-robot', title: 'Large Language Models', desc: 'GPT-4, Claude, and Gemini can hold convincing human-like conversations.' },
      { icon: 'fa-shield-alt', title: 'CAPTCHA Systems', desc: 'Websites use reverse Turing Tests to block automated bots.' },
      { icon: 'fa-user-secret', title: 'Deepfakes', desc: 'AI-generated content that is indistinguishable from real human content.' },
      { icon: 'fa-headset', title: 'Customer Service AI', desc: 'AI agents handle customer queries without revealing they\'re not human.' },
    ],
    ['Application', 'Turing Test Relevance', 'Current Status'],
    [
      { col1: 'Chatbots', col2: 'Direct application of Turing Test principles', col3: 'Near-human in limited domains' },
      { col1: 'CAPTCHA', col2: 'Reverse Turing Test', col3: 'Widely deployed' },
      { col1: 'Voice Assistants', col2: 'Audio version of Turing Test', col3: 'Improving rapidly' },
      { col1: 'Content Generation', col2: 'Text indistinguishable from human', col3: 'Advanced LLMs achieve this' },
      { col1: 'Social Media Bots', col2: 'Passing Turing Test to deceive', col3: 'Major concern today' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    defaultAccordion
  ),

  'search/problem-solving': makeTopic(
    'Problem-Solving via Search', 'State Space Search', 'State Space Search',
    searchLinks, [{ label: 'Game Playing', path: '/topics/game-playing/minimax' }, { label: 'Expert Systems', path: '/topics/expert-systems/rule-based' }],
    ['In AI, problem-solving via search involves finding a sequence of actions that leads from an initial state to a goal state. The problem is represented as a state space — a graph where nodes are states and edges are actions.', 'Key components: Initial State, Actions, Transition Model, Goal Test, Path Cost.'],
    `from collections import deque
def bfs_solve(start, goal, get_neighbors):
    queue = deque([(start, [start])])
    visited = {start}
    while queue:
        state, path = queue.popleft()
        if state == goal: return path
        for neighbor in get_neighbors(state):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    return None`,
    [
      { icon: 'fa-map', title: 'Navigation', desc: 'GPS systems use search algorithms to find optimal routes.' },
      { icon: 'fa-chess', title: 'Game Playing', desc: 'Chess and Go engines search through possible moves.' },
      { icon: 'fa-robot', title: 'Robotics', desc: 'Robots use search to plan paths in physical environments.' },
      { icon: 'fa-puzzle-piece', title: 'Puzzle Solving', desc: 'AI solves puzzles like Rubik\'s cube using search.' },
    ],
    ['Search Type', 'Strategy', 'Use Case'],
    [
      { col1: 'BFS', col2: 'Explores level by level', col3: 'Shortest path in unweighted graphs' },
      { col1: 'DFS', col2: 'Explores depth first', col3: 'Maze solving, tree traversal' },
      { col1: 'A*', col2: 'Heuristic-guided', col3: 'GPS navigation, game pathfinding' },
      { col1: 'Uniform Cost', col2: 'Lowest cost first', col3: 'Weighted shortest path' },
      { col1: 'Greedy', col2: 'Best heuristic first', col3: 'Fast but not always optimal' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    defaultAccordion
  ),

  'search/algorithms': makeTopic(
    'Search Algorithms: BFS, DFS, A*, Uniform Cost', 'State Space Search', 'State Space Search',
    searchLinks, [{ label: 'Game Playing', path: '/topics/game-playing/minimax' }, { label: 'Expert Systems', path: '/topics/expert-systems/rule-based' }],
    ['Search algorithms are the backbone of AI problem-solving. Each algorithm has different properties regarding completeness, optimality, time complexity, and space complexity.'],
    `from collections import deque
import heapq

def bfs(graph, start, goal):
    queue = deque([[start]])
    visited = {start}
    while queue:
        path = queue.popleft()
        if path[-1] == goal: return path
        for neighbor in graph.get(path[-1], []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])

def astar(graph, start, goal, heuristic):
    heap = [(0 + heuristic(start, goal), 0, start, [start])]
    visited = set()
    while heap:
        f, g, node, path = heapq.heappop(heap)
        if node == goal: return path
        if node in visited: continue
        visited.add(node)
        for neighbor, cost in graph.get(node, []):
            if neighbor not in visited:
                new_g = g + cost
                heapq.heappush(heap, (new_g + heuristic(neighbor, goal), new_g, neighbor, path + [neighbor]))`,
    [
      { icon: 'fa-sitemap', title: 'BFS', desc: 'Finds shortest path in unweighted graphs, used in social networks.' },
      { icon: 'fa-code-branch', title: 'DFS', desc: 'Memory efficient, used in maze solving and topological sorting.' },
      { icon: 'fa-star', title: 'A* Algorithm', desc: 'Optimal and efficient, used in GPS and game pathfinding.' },
      { icon: 'fa-balance-scale', title: 'Uniform Cost Search', desc: 'Finds lowest cost path, used in weighted graph problems.' },
    ],
    ['Algorithm', 'Complete?', 'Optimal?'],
    [
      { col1: 'BFS', col2: 'Yes', col3: 'Yes (unweighted)' },
      { col1: 'DFS', col2: 'No (infinite spaces)', col3: 'No' },
      { col1: 'Uniform Cost', col2: 'Yes', col3: 'Yes' },
      { col1: 'Greedy Best-First', col2: 'No', col3: 'No' },
      { col1: 'A*', col2: 'Yes', col3: 'Yes (admissible h)' },
    ],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE',
    'https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    [
      { q: 'What is BFS and when is it used?', a: 'BFS (Breadth-First Search) explores all nodes at the current depth before moving deeper. It\'s used when you need the shortest path in an unweighted graph.' },
      { q: 'What is DFS and its advantages?', a: 'DFS (Depth-First Search) explores as far as possible before backtracking. It uses less memory than BFS and is good for deep solution spaces.' },
      { q: 'How does A* work?', a: 'A* uses f(n) = g(n) + h(n), where g(n) is the cost from start to n, and h(n) is the heuristic estimate from n to goal. It always expands the node with the lowest f value.' },
      { q: 'What is Uniform Cost Search?', a: 'UCS expands the node with the lowest path cost. It\'s like BFS but for weighted graphs and is guaranteed to find the optimal solution.' },
      { q: 'What makes a heuristic admissible?', a: 'A heuristic is admissible if it never overestimates the actual cost to reach the goal. This guarantees A* finds the optimal solution.' },
    ]
  ),

  'knowledge/propositional-logic': makeTopic('Propositional Logic in AI','Knowledge Representation','Knowledge Representation',
    [{label:'Propositional logic',path:'/topics/knowledge/propositional-logic'},{label:'Semantic networks',path:'/topics/knowledge/semantic-networks'},{label:'Frames and ontologies',path:'/topics/knowledge/frames-ontologies'}],
    [{label:'Expert Systems',path:'/topics/expert-systems/rule-based'},{label:'Definition of AI',path:'/topics/what-is-ai/definition'}],
    ['Propositional logic deals with propositions that are either true or false, connected by AND, OR, NOT, IMPLIES, BICONDITIONAL.'],
    `def and_op(p,q): return p and q\ndef or_op(p,q): return p or q\ndef implies(p,q): return not p or q\nraining=True\nprint("Ground wet:", implies(raining,True))`,
    [{icon:'fa-brain',title:'Expert Systems',desc:'Rule-based systems use propositional logic for decision making.'},{icon:'fa-microchip',title:'Circuit Design',desc:'Digital circuits are designed using Boolean logic gates.'},{icon:'fa-search',title:'Theorem Proving',desc:'AI theorem provers use propositional logic to verify proofs.'},{icon:'fa-robot',title:'Planning Systems',desc:'AI planning uses logic to represent states and actions.'}],
    ['Connective','Symbol','Meaning'],
    [{col1:'AND',col2:'?',col3:'Both propositions must be true'},{col1:'OR',col2:'?',col3:'At least one must be true'},{col1:'NOT',col2:'�',col3:'Negation of the proposition'},{col1:'IMPLIES',col2:'?',col3:'If P then Q'},{col1:'BICONDITIONAL',col2:'?',col3:'P if and only if Q'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',defaultAccordion),

  'knowledge/semantic-networks': makeTopic('Semantic Networks','Knowledge Representation','Knowledge Representation',
    [{label:'Propositional logic',path:'/topics/knowledge/propositional-logic'},{label:'Semantic networks',path:'/topics/knowledge/semantic-networks'},{label:'Frames and ontologies',path:'/topics/knowledge/frames-ontologies'}],
    [{label:'Expert Systems',path:'/topics/expert-systems/rule-based'},{label:'Definition of AI',path:'/topics/what-is-ai/definition'}],
    ['A semantic network uses a graph structure to represent knowledge. Nodes represent concepts, edges represent relationships between them.'],
    `class SemanticNetwork:\n    def __init__(self): self.nodes={}\n    def add_relation(self,f,r,t):\n        if f not in self.nodes: self.nodes[f]={}\n        self.nodes[f][r]=t\n    def query(self,n,r): return self.nodes.get(n,{}).get(r)\nnet=SemanticNetwork()\nnet.add_relation("Dog","is-a","Animal")\nnet.add_relation("Dog","can","Bark")\nprint(net.query("Dog","is-a"))`,
    [{icon:'fa-project-diagram',title:'Knowledge Graphs',desc:'Google Knowledge Graph uses semantic networks to connect information.'},{icon:'fa-language',title:'NLP',desc:'WordNet is a semantic network of English words and their relationships.'},{icon:'fa-search',title:'Information Retrieval',desc:'Semantic search uses networks to understand query meaning.'},{icon:'fa-robot',title:'Reasoning Systems',desc:'AI systems use semantic networks to infer new knowledge.'}],
    ['Relation Type','Example','Meaning'],
    [{col1:'is-a',col2:'Dog is-a Animal',col3:'Inheritance relationship'},{col1:'has-a',col2:'Car has-a Engine',col3:'Part-whole relationship'},{col1:'can',col2:'Bird can Fly',col3:'Capability relationship'},{col1:'instance-of',col2:'Fido instance-of Dog',col3:'Instance relationship'},{col1:'related-to',col2:'Doctor related-to Hospital',col3:'General association'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',defaultAccordion),

  'knowledge/frames-ontologies': makeTopic('Frames and Ontologies','Knowledge Representation','Knowledge Representation',
    [{label:'Propositional logic',path:'/topics/knowledge/propositional-logic'},{label:'Semantic networks',path:'/topics/knowledge/semantic-networks'},{label:'Frames and ontologies',path:'/topics/knowledge/frames-ontologies'}],
    [{label:'Expert Systems',path:'/topics/expert-systems/rule-based'},{label:'Semantic Networks',path:'/topics/knowledge/semantic-networks'}],
    ['Frames are data structures for representing stereotyped situations. An ontology is a formal representation of knowledge as a set of concepts within a domain and the relationships between those concepts.'],
    `class Frame:\n    def __init__(self,name): self.name=name; self.slots={}\n    def add_slot(self,name,value,default=None): self.slots[name]={'value':value,'default':default}\n    def get_slot(self,name):\n        s=self.slots.get(name,{})\n        return s.get('value') or s.get('default')\ncar=Frame("Car")\ncar.add_slot("color","red")\ncar.add_slot("wheels",4)\nprint(car.get_slot("color"))`,
    [{icon:'fa-database',title:'Knowledge Bases',desc:'Frames organize complex knowledge in structured databases.'},{icon:'fa-hospital',title:'Medical Ontologies',desc:'SNOMED CT is a medical ontology used in healthcare systems.'},{icon:'fa-globe',title:'Web Ontology',desc:'OWL (Web Ontology Language) enables semantic web applications.'},{icon:'fa-robot',title:'AI Reasoning',desc:'Ontologies enable AI systems to reason about domain knowledge.'}],
    ['Concept','Description','Example'],
    [{col1:'Frame',col2:'Structured representation of a concept',col3:'Car frame with color, speed slots'},{col1:'Slot',col2:'Attribute of a frame',col3:'Color slot in Car frame'},{col1:'Ontology',col2:'Formal knowledge representation',col3:'Medical ontology (SNOMED CT)'},{col1:'Class',col2:'Category of objects',col3:'Vehicle class'},{col1:'Instance',col2:'Specific object of a class',col3:'My Toyota is an instance of Car'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',defaultAccordion),

  'expert-systems/rule-based': makeTopic('Rule-Based Expert Systems','Expert Systems','Expert Systems',
    [{label:'Rule-based systems',path:'/topics/expert-systems/rule-based'},{label:'Architecture',path:'/topics/expert-systems/architecture'},{label:'Real-world domains',path:'/topics/expert-systems/real-world'}],
    [{label:'Knowledge Representation',path:'/topics/knowledge/propositional-logic'},{label:'Search Algorithms',path:'/topics/search/algorithms'}],
    ['A rule-based expert system uses IF-THEN rules to make decisions or solve problems in a specific domain. It mimics the decision-making ability of a human expert.'],
    `def medical_expert(symptoms):\n    rules={('fever','cough'):'Possible flu',('fever','rash'):'Possible measles',('chest_pain','shortness_of_breath'):'Possible heart issue'}\n    for rule_symptoms,diagnosis in rules.items():\n        if all(s in symptoms for s in rule_symptoms): return diagnosis\n    return 'Unknown condition'\nprint(medical_expert(['fever','cough']))`,
    [{icon:'fa-stethoscope',title:'Medical Diagnosis',desc:'Expert systems diagnose diseases based on symptoms.'},{icon:'fa-gavel',title:'Legal Systems',desc:'AI assists in legal decision-making using rule bases.'},{icon:'fa-cogs',title:'Manufacturing',desc:'Quality control systems use rules to detect defects.'},{icon:'fa-graduation-cap',title:'Education',desc:'Intelligent tutoring systems use rules to guide students.'}],
    ['Component','Description','Example'],
    [{col1:'Knowledge Base',col2:'Collection of IF-THEN rules',col3:'IF fever AND cough THEN flu'},{col1:'Inference Engine',col2:'Applies rules to facts',col3:'Forward/backward chaining'},{col1:'Working Memory',col2:'Current facts and data',col3:'Patient symptoms'},{col1:'User Interface',col2:'Interaction with users',col3:'Question-answer dialog'},{col1:'Explanation Module',col2:'Explains reasoning',col3:'Why diagnosis was made'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    [{q:'What is a rule-based expert system?',a:'A rule-based expert system uses IF-THEN rules to encode domain knowledge and make decisions like a human expert.'},{q:'What is forward chaining?',a:'Forward chaining starts with known facts and applies rules to derive new facts until the goal is reached.'},{q:'What is backward chaining?',a:'Backward chaining starts with the goal and works backward to find supporting facts.'},{q:'What are the advantages of expert systems?',a:'They capture expert knowledge, provide consistent decisions, work 24/7, and can explain their reasoning.'},{q:'What are the limitations of expert systems?',a:'They are limited to their domain, cannot learn from experience, and require significant effort to build and maintain.'}]),

  'expert-systems/architecture': makeTopic('Expert System Architecture','Expert Systems','Expert Systems',
    [{label:'Rule-based systems',path:'/topics/expert-systems/rule-based'},{label:'Architecture',path:'/topics/expert-systems/architecture'},{label:'Real-world domains',path:'/topics/expert-systems/real-world'}],
    [{label:'Knowledge Representation',path:'/topics/knowledge/propositional-logic'},{label:'Search Algorithms',path:'/topics/search/algorithms'}],
    ['Expert systems consist of: Knowledge Base (rules and facts), Inference Engine (reasoning mechanism), Working Memory (current state), User Interface, and Explanation Facility.'],
    `class ExpertSystem:\n    def __init__(self): self.knowledge_base=[]; self.working_memory={}\n    def add_rule(self,condition,conclusion): self.knowledge_base.append((condition,conclusion))\n    def add_fact(self,fact,value): self.working_memory[fact]=value\n    def infer(self):\n        for condition,conclusion in self.knowledge_base:\n            if condition(self.working_memory): return conclusion\n        return "No conclusion"\nes=ExpertSystem()\nes.add_rule(lambda wm: wm.get('fever') and wm.get('cough'),"Flu")\nes.add_fact('fever',True); es.add_fact('cough',True)\nprint(es.infer())`,
    [{icon:'fa-database',title:'Knowledge Base',desc:'Stores domain expertise as rules and facts.'},{icon:'fa-cogs',title:'Inference Engine',desc:'Applies logical reasoning to derive conclusions.'},{icon:'fa-memory',title:'Working Memory',desc:'Holds current facts and intermediate results.'},{icon:'fa-desktop',title:'User Interface',desc:'Enables interaction with domain experts and users.'}],
    ['Component','Role','Example'],
    [{col1:'Knowledge Base',col2:'Stores rules and facts',col3:'Medical diagnosis rules'},{col1:'Inference Engine',col2:'Reasoning mechanism',col3:'Forward/backward chaining'},{col1:'Working Memory',col2:'Current session data',col3:'Patient symptoms'},{col1:'User Interface',col2:'Input/output handling',col3:'Question-answer dialog'},{col1:'Explanation Facility',col2:'Justifies conclusions',col3:'Why this diagnosis'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',defaultAccordion),

  'expert-systems/real-world': makeTopic('Expert Systems in Real-World Domains','Expert Systems','Expert Systems',
    [{label:'Rule-based systems',path:'/topics/expert-systems/rule-based'},{label:'Architecture',path:'/topics/expert-systems/architecture'},{label:'Real-world domains',path:'/topics/expert-systems/real-world'}],
    [{label:'Knowledge Representation',path:'/topics/knowledge/propositional-logic'},{label:'Search Algorithms',path:'/topics/search/algorithms'}],
    ['Expert systems have been successfully deployed in many real-world domains including medical diagnosis, financial planning, engineering design, and legal reasoning.'],
    `# MYCIN-style medical expert system\nrules=[(lambda s: 'fever' in s and 'cough' in s,'Influenza'),(lambda s: 'chest_pain' in s,'Cardiac evaluation needed'),(lambda s: 'rash' in s and 'fever' in s,'Possible viral infection')]\ndef diagnose(symptoms):\n    for condition,diagnosis in rules:\n        if condition(symptoms): return diagnosis\n    return 'Consult a doctor'\nprint(diagnose(['fever','cough']))`,
    [{icon:'fa-hospital',title:'MYCIN',desc:'Early expert system for diagnosing bacterial infections.'},{icon:'fa-plane',title:'XCON',desc:'Expert system for configuring DEC computer systems.'},{icon:'fa-oil-can',title:'PROSPECTOR',desc:'Expert system for mineral exploration.'},{icon:'fa-balance-scale',title:'Legal AI',desc:'Expert systems assist in legal research and case analysis.'}],
    ['Domain','Expert System','Application'],
    [{col1:'Medicine',col2:'MYCIN',col3:'Bacterial infection diagnosis'},{col1:'Engineering',col2:'XCON',col3:'Computer configuration'},{col1:'Geology',col2:'PROSPECTOR',col3:'Mineral exploration'},{col1:'Finance',col2:'TAXMAN',col3:'Tax planning'},{col1:'Education',col2:'GUIDON',col3:'Medical education tutoring'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',defaultAccordion),

  'game-playing/minimax': makeTopic('Minimax Algorithm','AI in Game Playing','AI in Game Playing',
    [{label:'Minimax algorithm',path:'/topics/game-playing/minimax'},{label:'Alpha-beta pruning',path:'/topics/game-playing/alpha-beta'},{label:'Example: Tic-Tac-Toe, Chess bots',path:'/topics/game-playing/examples'}],
    [{label:'Search Algorithms',path:'/topics/search/algorithms'},{label:'Types of AI',path:'/topics/types/narrow-ai'}],
    ['Minimax is a decision-making algorithm used in two-player zero-sum games. The maximizing player tries to get the highest score, while the minimizing player tries to get the lowest score.'],
    `def minimax(board,depth,is_max):\n    score=evaluate(board)\n    if score==10 or score==-10 or not moves_left(board): return score\n    if is_max:\n        best=-1000\n        for i in range(3):\n            for j in range(3):\n                if board[i][j]==0:\n                    board[i][j]=1\n                    best=max(best,minimax(board,depth+1,False))\n                    board[i][j]=0\n        return best\n    else:\n        best=1000\n        for i in range(3):\n            for j in range(3):\n                if board[i][j]==0:\n                    board[i][j]=-1\n                    best=min(best,minimax(board,depth+1,True))\n                    board[i][j]=0\n        return best`,
    [{icon:'fa-chess',title:'Chess Engines',desc:'Stockfish uses minimax with alpha-beta pruning.'},{icon:'fa-gamepad',title:'Tic-Tac-Toe AI',desc:'Classic example of minimax in a simple game.'},{icon:'fa-robot',title:'Checkers AI',desc:'Chinook used minimax to become world champion.'},{icon:'fa-brain',title:'Game Theory',desc:'Minimax is foundational in game theory and decision making.'}],
    ['Aspect','Maximizer','Minimizer'],
    [{col1:'Goal',col2:'Maximize score',col3:'Minimize score'},{col1:'Player',col2:'AI (X)',col3:'Opponent (O)'},{col1:'Strategy',col2:'Choose highest value move',col3:'Choose lowest value move'},{col1:'Depth',col2:'Explores all possible moves',col3:'Explores all possible moves'},{col1:'Complexity',col2:'O(b^d)',col3:'O(b^d)'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    [{q:'What is the minimax algorithm?',a:'Minimax is a recursive algorithm for choosing the optimal move in a two-player zero-sum game by minimizing the possible loss for a worst-case scenario.'},{q:'What is a zero-sum game?',a:'A zero-sum game is one where one player gains exactly what the other loses. Chess and Tic-Tac-Toe are examples.'},{q:'What is the time complexity of minimax?',a:'O(b^d) where b is the branching factor and d is the depth of the game tree.'},{q:'What are the limitations of minimax?',a:'It explores the entire game tree which is computationally expensive for complex games like chess.'},{q:'How is minimax improved in practice?',a:'Alpha-beta pruning is used to eliminate branches that cannot affect the final decision, significantly reducing computation.'}]),

  'game-playing/alpha-beta': makeTopic('Alpha-Beta Pruning','AI in Game Playing','AI in Game Playing',
    [{label:'Minimax algorithm',path:'/topics/game-playing/minimax'},{label:'Alpha-beta pruning',path:'/topics/game-playing/alpha-beta'},{label:'Example: Tic-Tac-Toe, Chess bots',path:'/topics/game-playing/examples'}],
    [{label:'Search Algorithms',path:'/topics/search/algorithms'},{label:'Types of AI',path:'/topics/types/narrow-ai'}],
    ['Alpha-beta pruning is an optimization of the minimax algorithm that reduces the number of nodes evaluated. It prunes branches that cannot possibly affect the final decision.'],
    `def alphabeta(node,depth,alpha,beta,is_max):\n    if depth==0 or is_terminal(node): return evaluate(node)\n    if is_max:\n        value=-float('inf')\n        for child in get_children(node):\n            value=max(value,alphabeta(child,depth-1,alpha,beta,False))\n            alpha=max(alpha,value)\n            if alpha>=beta: break  # Beta cutoff\n        return value\n    else:\n        value=float('inf')\n        for child in get_children(node):\n            value=min(value,alphabeta(child,depth-1,alpha,beta,True))\n            beta=min(beta,value)\n            if beta<=alpha: break  # Alpha cutoff\n        return value`,
    [{icon:'fa-cut',title:'Pruning',desc:'Eliminates branches that cannot affect the final decision.'},{icon:'fa-chess',title:'Chess Engines',desc:'All modern chess engines use alpha-beta pruning.'},{icon:'fa-tachometer-alt',title:'Performance',desc:'Reduces time complexity from O(b^d) to O(b^(d/2)).'},{icon:'fa-brain',title:'Game AI',desc:'Enables deeper search in the same amount of time.'}],
    ['Concept','Alpha','Beta'],
    [{col1:'Represents',col2:'Best value for maximizer',col3:'Best value for minimizer'},{col1:'Initial value',col2:'-infinity',col3:'+infinity'},{col1:'Updated by',col2:'Maximizer nodes',col3:'Minimizer nodes'},{col1:'Cutoff condition',col2:'alpha >= beta',col3:'beta <= alpha'},{col1:'Effect',col2:'Prunes minimizer subtrees',col3:'Prunes maximizer subtrees'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    [{q:'What is alpha-beta pruning?',a:'Alpha-beta pruning is an optimization technique for minimax that eliminates branches that cannot influence the final decision.'},{q:'How much does alpha-beta pruning improve performance?',a:'In the best case, it reduces the time complexity from O(b^d) to O(b^(d/2)), effectively doubling the search depth.'},{q:'What are alpha and beta values?',a:'Alpha is the best value the maximizer can guarantee, beta is the best value the minimizer can guarantee. When alpha >= beta, pruning occurs.'},{q:'Does alpha-beta pruning change the result?',a:'No. Alpha-beta pruning always produces the same result as minimax, just more efficiently.'},{q:'What is move ordering in alpha-beta?',a:'Evaluating better moves first increases the number of pruned branches, improving efficiency significantly.'}]),

  'game-playing/examples': makeTopic('AI Game Playing Examples','AI in Game Playing','AI in Game Playing',
    [{label:'Minimax algorithm',path:'/topics/game-playing/minimax'},{label:'Alpha-beta pruning',path:'/topics/game-playing/alpha-beta'},{label:'Example: Tic-Tac-Toe, Chess bots',path:'/topics/game-playing/examples'}],
    [{label:'Search Algorithms',path:'/topics/search/algorithms'},{label:'Types of AI',path:'/topics/types/narrow-ai'}],
    ['AI has achieved superhuman performance in many games. From Tic-Tac-Toe to Chess to Go, AI game-playing systems demonstrate the power of search algorithms and machine learning.'],
    `# Tic-Tac-Toe with minimax\ndef best_move(board):\n    best_val=-1000; best_move=(-1,-1)\n    for i in range(3):\n        for j in range(3):\n            if board[i][j]==0:\n                board[i][j]=1\n                move_val=minimax(board,0,False)\n                board[i][j]=0\n                if move_val>best_val:\n                    best_val=move_val; best_move=(i,j)\n    return best_move`,
    [{icon:'fa-hashtag',title:'Tic-Tac-Toe',desc:'Classic example - minimax makes it unbeatable.'},{icon:'fa-chess-king',title:'Chess - Deep Blue',desc:'IBM Deep Blue defeated Kasparov in 1997.'},{icon:'fa-circle',title:'Go - AlphaGo',desc:'DeepMind AlphaGo defeated world champion Lee Sedol in 2016.'},{icon:'fa-gamepad',title:'Video Games',desc:'AI opponents in modern video games use advanced techniques.'}],
    ['Game','AI System','Achievement'],
    [{col1:'Chess',col2:'Deep Blue / Stockfish',col3:'Superhuman performance since 1997'},{col1:'Go',col2:'AlphaGo / AlphaZero',col3:'Defeated world champions in 2016'},{col1:'Poker',col2:'Libratus / Pluribus',col3:'Beat professional poker players'},{col1:'StarCraft II',col2:'AlphaStar',col3:'Grandmaster level performance'},{col1:'Dota 2',col2:'OpenAI Five',col3:'Defeated world champion team'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',
    [{q:'How did Deep Blue beat Kasparov?',a:'Deep Blue used minimax with alpha-beta pruning, evaluated 200 million positions per second, and had hand-crafted chess knowledge.'},{q:'What made AlphaGo revolutionary?',a:'AlphaGo used deep reinforcement learning and Monte Carlo Tree Search, learning from millions of games rather than hand-crafted rules.'},{q:'What is MCTS?',a:'Monte Carlo Tree Search is a heuristic search algorithm that uses random sampling to evaluate game positions, used in AlphaGo.'},{q:'How do modern chess engines work?',a:'Modern engines like Stockfish combine alpha-beta search with neural network evaluation (NNUE) for position assessment.'},{q:'What is AlphaZero?',a:'AlphaZero is a general game-playing AI that learned chess, Go, and shogi from scratch using only self-play reinforcement learning.'}]),

  'mini/project1': makeTopic('Regression Model for Web-Friendly Data','Mini Projects','Mini Projects',
    [{label:'Regression Model for Web-Friendly Data',path:'/topics/mini/project1'},{label:'Classification Model for Tabular Data',path:'/topics/mini/project2'}],
    [{label:'AI vs ML vs DL',path:'/topics/ai-ml-dl/differences'},{label:'Applications',path:'/topics/applications/healthcare'}],
    ['Build a simple linear regression model to predict continuous values from web-friendly datasets. This project demonstrates the complete ML pipeline from data loading to prediction.'],
    `import numpy as np\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import mean_squared_error, r2_score\n\n# Generate sample data\nnp.random.seed(42)\nX = np.random.rand(100, 1) * 10\ny = 2.5 * X.flatten() + np.random.randn(100) * 2\n\n# Split data\nX_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Evaluate\ny_pred = model.predict(X_test)\nprint(f"R2 Score: {r2_score(y_test,y_pred):.3f}")\nprint(f"MSE: {mean_squared_error(y_test,y_pred):.3f}")`,
    [{icon:'fa-chart-line',title:'House Price Prediction',desc:'Predict house prices based on features like size and location.'},{icon:'fa-temperature-high',title:'Weather Forecasting',desc:'Predict temperature based on historical weather data.'},{icon:'fa-shopping-cart',title:'Sales Forecasting',desc:'Predict future sales based on historical trends.'},{icon:'fa-heartbeat',title:'Medical Prediction',desc:'Predict patient health metrics from clinical data.'}],
    ['Step','Description','Tool/Library'],
    [{col1:'Data Loading',col2:'Load and explore the dataset',col3:'pandas, numpy'},{col1:'Preprocessing',col2:'Handle missing values, normalize',col3:'sklearn.preprocessing'},{col1:'Model Training',col2:'Fit linear regression model',col3:'sklearn.linear_model'},{col1:'Evaluation',col2:'Calculate R2, MSE metrics',col3:'sklearn.metrics'},{col1:'Visualization',col2:'Plot predictions vs actual',col3:'matplotlib'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',defaultAccordion),

  'mini/project2': makeTopic('Classification Model for Tabular Data','Mini Projects','Mini Projects',
    [{label:'Regression Model for Web-Friendly Data',path:'/topics/mini/project1'},{label:'Classification Model for Tabular Data',path:'/topics/mini/project2'}],
    [{label:'AI vs ML vs DL',path:'/topics/ai-ml-dl/differences'},{label:'Applications',path:'/topics/applications/healthcare'}],
    ['Build a classification model to categorize tabular data into discrete classes. This project covers the complete workflow for a supervised classification task.'],
    `from sklearn.datasets import load_iris\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import classification_report\n\n# Load dataset\niris = load_iris()\nX, y = iris.data, iris.target\n\n# Split data\nX_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)\n\n# Train model\nclf = RandomForestClassifier(n_estimators=100,random_state=42)\nclf.fit(X_train, y_train)\n\n# Evaluate\ny_pred = clf.predict(X_test)\nprint(classification_report(y_test,y_pred,target_names=iris.target_names))`,
    [{icon:'fa-envelope',title:'Email Classification',desc:'Classify emails as spam or not spam.'},{icon:'fa-heartbeat',title:'Disease Classification',desc:'Classify patients as healthy or diseased.'},{icon:'fa-star',title:'Sentiment Analysis',desc:'Classify reviews as positive, negative, or neutral.'},{icon:'fa-credit-card',title:'Fraud Detection',desc:'Classify transactions as fraudulent or legitimate.'}],
    ['Step','Description','Tool/Library'],
    [{col1:'Data Loading',col2:'Load Iris or custom dataset',col3:'sklearn.datasets, pandas'},{col1:'Preprocessing',col2:'Encode labels, scale features',col3:'sklearn.preprocessing'},{col1:'Model Training',col2:'Fit Random Forest classifier',col3:'sklearn.ensemble'},{col1:'Evaluation',col2:'Accuracy, precision, recall, F1',col3:'sklearn.metrics'},{col1:'Feature Importance',col2:'Identify key features',col3:'clf.feature_importances_'}],
    'https://www.youtube.com/watch?v=eSj80Zr6TEE','https://drive.google.com/file/d/1Q2hkt3W3qbPdHtb5avgpTLmyB6Tgb3pq/view?usp=drive_link',defaultAccordion),
}

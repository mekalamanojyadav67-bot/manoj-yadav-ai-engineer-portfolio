import { SkillItem, ProjectItem, RoadmapStep, CourseworkTopic } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Manoj Yadav',
  role: 'Aspiring AI Engineer',
  education: 'First-Year B.Tech Student',
  department: 'Computer Science and Engineering (CSE)',
  careerGoal: 'Become a professional AI Engineer building impactful intelligent systems and software solutions.',
  email: 'mekalamanojyadav67@gmail.com',
  github: 'https://github.com/mekalamanoyadav67',
  heroHeading: "Hello, I'm Manoj Yadav",
  heroSubtitle: 'An Aspiring AI Engineer | B.Tech CSE Student',
  heroDescription:
    'Passionate about programming, artificial intelligence and building innovative technology solutions. Currently exploring Python, web development and Generative AI.',
};

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Python',
    level: 'Beginner',
    percentage: 38,
    category: 'Languages',
    description: 'Core logic, functions, control flow, lists, dictionaries, and problem solving.',
    topics: ['Syntax & Variables', 'Control Structures', 'Functions & Modules', 'Basic OOP Concepts'],
  },
  {
    name: 'HTML',
    level: 'Basic',
    percentage: 45,
    category: 'Web',
    description: 'Semantic document structuring, forms, accessible elements, and modern standards.',
    topics: ['Semantic Elements', 'Form Controls', 'Accessibility Basics', 'Document Layout'],
  },
  {
    name: 'CSS',
    level: 'Basic',
    percentage: 42,
    category: 'Web',
    description: 'Responsive styling, Flexbox, Grid, clean typography, and modern utility frameworks.',
    topics: ['Box Model & Sizing', 'Flexbox & CSS Grid', 'Tailwind CSS Classes', 'Responsive Media'],
  },
  {
    name: 'JavaScript',
    level: 'Learning',
    percentage: 32,
    category: 'Languages',
    description: 'Modern ES6+ syntax, asynchronous basics, DOM manipulation, and dynamic events.',
    topics: ['ES6+ Syntax & Arrow Functions', 'DOM Manipulation', 'Event Listeners', 'Array Methods'],
  },
  {
    name: 'Web Development',
    level: 'Beginner',
    percentage: 35,
    category: 'Web',
    description: 'Building cohesive client-side websites, UI composition, and component design.',
    topics: ['Component Structuring', 'Cross-Device Responsiveness', 'Git & GitHub Collaboration', 'Frontend Workflows'],
  },
  {
    name: 'Generative AI',
    level: 'Exploring',
    percentage: 26,
    category: 'AI & Emerging',
    description: 'Foundations of large language models, prompt engineering, and intelligent tooling.',
    topics: ['Prompt Engineering Basics', 'LLM Architectures Overview', 'AI Developer APIs', 'Practical Workflows'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'student-grade-calculator',
    title: 'Student Grade Calculator',
    tagline: 'Interactive academic performance and grade evaluation utility',
    category: 'Completed',
    status: 'Completed',
    description:
      'A practical beginner-level software project built to calculate student grades and GPA based on subject marks. Features automated percentage aggregation, letter grade assignment (A+ to F), and performance feedback.',
    highlights: [
      'Automated aggregate marks, percentage, and GPA calculation',
      'Configurable subject list with dynamic grade boundary evaluation',
      'Instant validation for out-of-range inputs (0-100 scale)',
      'Clean interactive UI with visual performance summary',
    ],
    technologies: ['Python', 'JavaScript', 'HTML5', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mekalamanoyadav67/student-grade-calculator',
    hasInteractiveDemo: true,
    image: '/src/assets/images/grade_calculator_preview_1794240387970.jpg',
  },
  {
    id: 'ai-academic-summarizer',
    title: 'AI Academic Document Summarizer',
    tagline: 'Intelligent paper and lecture note condensation tool',
    category: 'Upcoming / In Development',
    status: 'In Research',
    description:
      'An upcoming project aimed at helping engineering students condense dense technical chapters and research papers into clear, bite-sized revision notes and self-test flashcards using Generative AI APIs.',
    highlights: [
      'Document parsing for PDF and text lecture slides',
      'Hierarchical key concept extraction with source citations',
      'Automated revision question generation for exam preparation',
    ],
    technologies: ['Python', 'GenAI API', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/mekalamanoyadav67',
  },
  {
    id: 'computer-vision-attendance',
    title: 'Vision-Based Attendance System',
    tagline: 'Automated facial recognition & verification prototype',
    category: 'Upcoming / In Development',
    status: 'Upcoming',
    description:
      'Planned computer vision system designed to automate classroom presence tracking through facial detection and feature vector similarity, replacing manual roll calls.',
    highlights: [
      'Face detection and alignment via OpenCV pipelines',
      'Feature extraction with deep neural network embeddings',
      'Real-time verification log with timestamped attendance records',
    ],
    technologies: ['Python', 'OpenCV', 'PyTorch / TensorFlow', 'NumPy'],
    githubUrl: 'https://github.com/mekalamanoyadav67',
  },
  {
    id: 'sentiment-analysis-feedback',
    title: 'Student Feedback Sentiment Analyzer',
    tagline: 'NLP model for analyzing student satisfaction metrics',
    category: 'Upcoming / In Development',
    status: 'Upcoming',
    description:
      'A text classification project using natural language processing techniques to categorize and score anonymous student course feedback into positive, neutral, and critical insights.',
    highlights: [
      'Text tokenization, stopword filtering, and lemmatization',
      'Classification into positive, neutral, and negative sentiment polarities',
      'Dashboard visualization for actionable faculty and student insights',
    ],
    technologies: ['Python', 'NLTK / Hugging Face', 'Pandas', 'Data Visualization'],
    githubUrl: 'https://github.com/mekalamanoyadav67',
  },
];

export const ROADMAP_DATA: RoadmapStep[] = [
  {
    step: 1,
    phase: 'Phase 01',
    title: 'Programming Foundations & Logic',
    status: 'In Progress',
    description:
      'Mastering core Python syntax, algorithms, loops, object-oriented concepts, and Git version control while building foundational logic projects.',
    skills: ['Python Fundamentals', 'Basic Data Structures', 'Git & GitHub', 'Clean Code Discipline'],
  },
  {
    step: 2,
    phase: 'Phase 02',
    title: 'Computer Science Core & Web Interfaces',
    status: 'In Progress',
    description:
      'Strengthening data structures, discrete algorithms, HTML/CSS/JavaScript, and building clean web interfaces to showcase computational projects.',
    skills: ['Data Structures & Algorithms', 'JavaScript ES6+', 'Modern Web UIs', 'Object-Oriented Design'],
  },
  {
    step: 3,
    phase: 'Phase 03',
    title: 'Applied Mathematics for AI & Data Science',
    status: 'Upcoming',
    description:
      'Diving into Linear Algebra, Calculus, Probability, Statistics, and foundational data manipulation libraries in Python.',
    skills: ['Linear Algebra', 'Multivariate Calculus', 'NumPy & Pandas', 'Statistical Inference'],
  },
  {
    step: 4,
    phase: 'Phase 04',
    title: 'Machine Learning & Deep Neural Networks',
    status: 'Upcoming',
    description:
      'Training supervised/unsupervised models with Scikit-learn, building neural networks with PyTorch, and understanding gradient descent mechanics.',
    skills: ['Supervised & Unsupervised ML', 'PyTorch / TensorFlow', 'Backpropagation', 'Model Evaluation'],
  },
  {
    step: 5,
    phase: 'Phase 05',
    title: 'Generative AI & Production AI Engineering',
    status: 'Goal',
    description:
      'Mastering transformer architectures, fine-tuning LLMs, retrieval-augmented generation (RAG), and deploying scalable AI systems into production.',
    skills: ['LLM Systems & RAG', 'Vector Databases', 'Model Deployment & APIs', 'AI Ethics & Alignment'],
  },
];

export const COURSEWORK_DATA: CourseworkTopic[] = [
  {
    code: 'CSE-101',
    title: 'Programming for Problem Solving',
    focus: 'Computational thinking, problem formulation, Python & C syntax, algorithm design',
    status: 'Current',
  },
  {
    code: 'MATH-101',
    title: 'Engineering Mathematics I',
    focus: 'Differential calculus, linear algebra, matrices, vector spaces, and eigenvalues',
    status: 'Current',
  },
  {
    code: 'CSE-102',
    title: 'Digital Logic & Computer Organization',
    focus: 'Boolean algebra, logic gates, combinational circuits, register transfer',
    status: 'Current',
  },
  {
    code: 'CSE-103',
    title: 'Data Structures Fundamentals',
    focus: 'Arrays, linked lists, stacks, queues, recursion, and time complexity analysis',
    status: 'Current',
  },
];

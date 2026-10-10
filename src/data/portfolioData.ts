import type { Project, SkillCategory, Certification, EducationMilestone, PrincipleItem } from '../types';

export const PERSONAL_INFO = {
  name: 'NIRVAN REDDY',
  fullName: 'Koppela Nirvan Reddy',
  sublabel: 'COMPUTER SCIENCE ENGINEERING',
  sublabelLine2: 'FULL STACK • AI / ML',
  headline: "Hi, I'm Nirvan.",
  subheadline: 'I build full-stack applications and AI-powered systems.',
  supportingCopy:
    'Computer Science Engineering student at Gokaraju Rangaraju Institute of Engineering and Technology, interested in full-stack development, AI/ML and computer vision.',
  location: 'Hyderabad, India',
  statusTitle: 'CURRENTLY BUILDING',
  statusValue: 'Full Stack + AI/ML Systems',
  email: 'nirvanreddy22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nirvanreddy/',
  education: {
    degree: 'B.Tech CSE',
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    period: '2024–2028',
    cgpa: '8.01',
    location: 'Hyderabad, India',
  },
  focus: ['Full Stack Development', 'AI / ML', 'Computer Vision'],
  interests: ['Coding', 'Personal Projects', 'AI / ML', 'Full Stack Development', 'Basketball'],
};

export const PROJECTS: Project[] = [
  {
    id: 'smart-campus-automation',
    number: '01',
    title: 'SMART CAMPUS AUTOMATION SYSTEM',
    category: 'FULL STACK WEB APPLICATION',
    description:
      'Built a campus management platform with role-based modules for Student Management, Leave Management and Campus Voting.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    visualType: 'campus',
    overview:
      'An institutional campus management platform centralizing governance and administrative workflows across distinct student, faculty, and administrator roles.',
    whatIBuilt: [
      'Role-based access control engine governing Student Management, Leave Workflow, and secure Campus Voting modules.',
      'RESTful backend architecture engineered with Express.js and Node.js connected to MongoDB clusters for secure document persistence.',
      'JSON Web Token (JWT) stateless authentication layer securing institutional credentials and operational routes.',
      'Responsive, modular React dashboard interfaces facilitating administrative oversight and student interaction.',
    ],
    howItWorks:
      'Stateless JWT tokens are issued on authentication and validated on protected endpoints by Express middleware. Role hierarchies strictly restrict data visibility and authorization across module tiers.',
    challenge:
      'Managing diverse role permissions across voting confidentiality, private leave records, and student profiles without incurring communication latency or schema fragmentation.',
    implementation: [
      'Engineered React.js front-end views with modular component architecture and responsive layout.',
      'Constructed Express.js REST API controllers with centralized JWT authorization middleware.',
      'Designed MongoDB document collections for users, leave petitions, and verifiable voting records.',
      'Implemented SQL query workflows and Power BI dashboards to analyze institutional datasets.',
    ],
    analyticsNote:
      'Built an end-to-end data analytics pipeline using SQL, Advanced Excel, and Power BI for administrative campus reporting.',
    status: 'Completed Prototype',
  },
  {
    id: 'physiosis-gait-analysis',
    number: '02',
    title: 'PHYSIOSIS',
    category: 'AI-BASED PHYSIOTHERAPY GAIT ANALYSIS',
    description:
      'Developed a real-time gait analysis system using computer vision and pose analysis, with posture detection, joint angle analysis, movement assessment and corrective recommendations.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'FastAPI'],
    visualType: 'physiosis',
    overview:
      'A computer vision kinematic assessment system evaluating locomotion and gait posture cycles through standard video input streams.',
    whatIBuilt: [
      'Real-time video kinematic pipeline analyzing human locomotion and gait posture cycles.',
      '33-point skeletal landmark detection and joint angle geometry calculations using MediaPipe and OpenCV.',
      'Algorithmic movement assessment logic to detect deviations from biomechanical baselines.',
      'Instant visual telemetry, real-time posture insights, and corrective recommendations.',
      'High-performance API endpoints in Python utilizing Flask and FastAPI for frame stream ingestion.',
    ],
    howItWorks:
      'Frames from standard video feeds are filtered with OpenCV and processed with MediaPipe Pose to extract 33 spatial landmarks. Vector dot products compute articulation angles between hip, knee, and ankle vectors.',
    challenge:
      'Calculating joint angles in real time with high frame stability despite subject distance variations and camera perspective distortion.',
    implementation: [
      'Processed camera input feeds frame-by-frame using OpenCV spatial filtering.',
      'Extracted skeletal landmark coordinates via MediaPipe Pose model.',
      'Calculated 2D/3D geometric angles between hip, knee, ankle, and shoulder vectors.',
      'Integrated real-time threshold scoring to detect anomalies and serve corrective recommendations via FastAPI.',
    ],
    status: 'AI Research Prototype',
  },
  {
    id: 'smart-study-planner',
    number: '03',
    title: 'SMART STUDY PLANNER & PRODUCTIVITY TRACKER',
    category: 'TECHSPRINT HACKATHON 2025',
    description:
      'Built an AI-powered study planner with adaptive scheduling, reminders and productivity tracking. Presented the prototype at the GDG on Campus TechSprint Hackathon.',
    techStack: ['Firebase', 'Firestore', 'JavaScript', 'HTML', 'CSS'],
    visualType: 'planner',
    overview:
      'An adaptive study planning engine and focus tracking system built and demonstrated live at the GDG on Campus TechSprint Hackathon.',
    whatIBuilt: [
      'Dynamic scheduling logic that adapts academic study intervals based on student task priority and deadlines.',
      'Google Cloud Firestore real-time listeners for instant cross-device data synchronization.',
      'Notification and reminder dispatch systems to reinforce consistent study sessions and avoid burn-out.',
      'Visual productivity tracking metrics tracking focus duration, task throughput, and milestone completion.',
      'Demonstrated and pitched the functional prototype live at the GDG on Campus TechSprint Hackathon.',
    ],
    howItWorks:
      'Client-side scheduling algorithms evaluate upcoming task deadlines and estimated effort, recalculating the study calendar dynamically when sessions shift, synced via Cloud Firestore.',
    challenge:
      'Handling timetable slippage dynamically without forcing manual schedule re-entry under tight hackathon time constraints.',
    implementation: [
      'Architected client-side scheduling algorithms in JavaScript that compute time allocations.',
      'Configured Firebase Authentication and Cloud Firestore security rules for persistent user session storage.',
      'Created interactive UI views with custom CSS grid layouts and lightweight progress visualizations.',
      'Delivered presentation and live prototype walkthrough to evaluators at GDG TechSprint Hackathon.',
    ],
    status: 'GDG Hackathon 2025 Prototype',
  },
  {
    id: 'pneumonia-detection-deep-learning',
    number: '04',
    title: 'PNEUMONIA DETECTION USING DEEP LEARNING',
    category: 'ACADEMIC PROJECT',
    description:
      'Developed a pneumonia detection model using deep learning. Applied transfer learning and image preprocessing for chest X-ray classification.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'EfficientNet'],
    visualType: 'pneumonia',
    overview:
      'An academic deep learning classification project applying transfer learning on deep convolutional representations for radiographic chest X-ray evaluation.',
    whatIBuilt: [
      'Deep learning architectures for binary classification of chest radiographic imagery (Pneumonia vs. Normal).',
      'Advanced image preprocessing pipelines using OpenCV, including contrast normalization and spatial scaling.',
      'Transfer learning paradigms using pre-trained convolutional neural networks including EfficientNet.',
      'Comparative neural network experimentation in both TensorFlow and PyTorch frameworks.',
      'Evaluated model diagnostic capabilities using deep learning validation techniques and loss curves.',
    ],
    howItWorks:
      'Raw chest radiographs undergo contrast normalization and spatial scaling before passing through pre-trained EfficientNet convolutional layers fine-tuned with custom classification heads.',
    challenge:
      'Mitigating class sample imbalance in medical imaging datasets while preserving subtle pulmonary consolidation indicators.',
    implementation: [
      'Normalized raw chest radiograph datasets and augmented sample distributions using OpenCV & PyTorch transforms.',
      'Fine-tuned pre-trained deep neural networks (EfficientNet) with custom classification heads.',
      'Evaluated training and validation trajectories across cross-entropy loss and metric checkpoints.',
      'Exported model inference pipelines for repeatable test radiograph evaluation.',
    ],
    status: 'Academic Project',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'LANGUAGES',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C'],
  },
  {
    category: 'FRONTEND',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'DATABASES',
    skills: ['MongoDB', 'MySQL', 'Firebase Firestore'],
  },
  {
    category: 'AI / ML',
    skills: ['Machine Learning', 'OpenCV', 'MediaPipe', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    category: 'TOOLS',
    skills: ['Git', 'GitHub', 'Firebase', 'Power BI', 'Excel', 'Postman', 'VS Code', 'Google Colab'],
  },
  {
    category: 'CORE',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Agile Development'],
  },
];

export const EDUCATION_TIMELINE: EducationMilestone[] = [
  {
    year: '2024',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)',
    description:
      'Commenced undergraduate degree program in Hyderabad, establishing core theoretical foundations across Data Structures & Algorithms, Object-Oriented Analysis, and Systems Engineering. Current cumulative CGPA: 8.01.',
    tag: 'Academic Commencement',
  },
  {
    year: '2026',
    title: 'Current Systems Development & Applied AI',
    organization: 'Independent Project Builds & Research',
    description:
      'Actively developing full-stack architectures (Smart Campus Automation) and real-time computer vision kinematics platforms (Physiosis), alongside academic coursework.',
    tag: 'Active Engineering',
  },
  {
    year: '2028',
    title: 'Expected Undergraduate Graduation',
    organization: 'B.Tech in Computer Science and Engineering',
    description:
      'Anticipated completion of B.Tech CSE degree at GRIET, transitioning to advanced full-time software engineering and AI systems roles.',
    tag: 'Future Horizon',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-ml-ds',
    name: 'Machine Learning & Data Science Certification',
    category: 'AI & Data Science',
  },
  {
    id: 'cert-openshift',
    name: 'Red Hat Academy – OpenShift Administration',
    issuer: 'Red Hat Academy',
    category: 'Cloud & Container Systems',
  },
  {
    id: 'cert-python',
    name: 'Python Programming Certification',
    category: 'Core Languages & Algorithms',
  },
  {
    id: 'cert-sql-dbms',
    name: 'SQL & Database Management',
    category: 'Databases & Query Systems',
  },
  {
    id: 'cert-powerbi',
    name: 'Power BI for Data Visualization',
    category: 'Data Analytics & Business Intelligence',
  },
];

export const HOW_I_BUILD_PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'BUILD',
    summary: 'Start with a real problem.',
    detail:
      'Identify concrete friction or operational challenges before writing code, ensuring the software serves a practical, verifiable purpose.',
  },
  {
    number: '02',
    title: 'LEARN',
    summary: 'Explore the underlying technology.',
    detail:
      'Dive deep into first principles—whether neural network backpropagation, low-latency API design, or relational database indexing.',
  },
  {
    number: '03',
    title: 'ITERATE',
    summary: 'Improve through experimentation.',
    detail:
      'Refactor continuously, benchmark execution boundaries, and validate architectures through rigorous testing and real data.',
  },
];

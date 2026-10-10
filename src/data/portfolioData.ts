import type { Project, SkillCategory, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Koppela Nirvan Reddy',
  displayName: 'Nirvan Reddy',
  title: 'Computer Science Engineering Student • Full Stack Developer • AI/ML Enthusiast',
  heroHeadline: "Hi, I'm Nirvan Reddy.",
  heroSubheadline: 'I build full-stack applications and AI-powered systems.',
  heroBio:
    'Computer Science Engineering student at Gokaraju Rangaraju Institute of Engineering and Technology, interested in full-stack development, artificial intelligence, machine learning and computer vision.',
  location: 'Hyderabad, Telangana, India',
  email: 'nirvanreddy22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nirvanreddy/',
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    period: '2024–2028',
    cgpa: '8.01',
    location: 'Hyderabad, Telangana, India',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Discrete Mathematics',
    ],
  },
  interests: [
    'AI / ML',
    'Computer Vision',
    'Full Stack Development',
    'Software Engineering',
    'Coding',
    'Basketball',
  ],
};

export const CURRENTLY_EXPLORING = [
  {
    title: 'AI / Machine Learning',
    description: 'Deep neural networks, transfer learning architectures, and statistical machine learning models.',
  },
  {
    title: 'Computer Vision',
    description: 'Real-time video kinematics, anatomical joint angle calculation, and pose landmark tracking.',
  },
  {
    title: 'Full Stack Development',
    description: 'Decoupled web applications, REST API controllers, JWT authentication, and modern database persistence.',
  },
  {
    title: 'Interactive Web Development',
    description: 'Modern component systems, accessible UI patterns, and lightweight graphics integration.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    iconName: 'Code',
    color: '#2563eb',
    description: 'Core programming languages for algorithmic problem solving, scripting, and system builds.',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C'],
  },
  {
    category: 'Frontend',
    iconName: 'Layout',
    color: '#0284c7',
    description: 'Component-driven web applications, modern responsive styling, and web standards.',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend',
    iconName: 'Server',
    color: '#4f46e5',
    description: 'Server runtimes, RESTful API design, authentication middleware, and routing.',
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Databases',
    iconName: 'Database',
    color: '#0891b2',
    description: 'Document storage, relational schema design, querying, and real-time cloud data stores.',
    skills: ['MongoDB', 'MySQL', 'Firebase Firestore'],
  },
  {
    category: 'AI / ML',
    iconName: 'BrainCircuit',
    color: '#7c3aed',
    description: 'Computer vision pipelines, neural networks, transfer learning, and scientific computing.',
    skills: [
      'Machine Learning',
      'OpenCV',
      'MediaPipe',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'NumPy',
      'Pandas',
    ],
  },
  {
    category: 'Tools',
    iconName: 'Wrench',
    color: '#059669',
    description: 'Version control, cloud platforms, developer tooling, and business analytics pipelines.',
    skills: [
      'Git',
      'GitHub',
      'Firebase',
      'Power BI',
      'Excel',
      'Postman',
      'VS Code',
      'Google Colab',
    ],
  },
  {
    category: 'Core',
    iconName: 'Cpu',
    color: '#d97706',
    description: 'Foundational computer science principles, system design, and software engineering practices.',
    skills: [
      'DSA',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Agile Development',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-campus-automation',
    number: '01',
    title: 'Smart Campus Automation System',
    subtitle: 'Full Stack Web Application',
    category: 'Full Stack Web Application',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description:
      'Built a campus management platform with role-based modules for Student Management, Leave Management and Campus Voting. Integrated REST APIs and MongoDB for secure data management and responsive dashboards.',
    bulletPoints: [
      'Role-based access control engine governing Student Management, Leave Workflow, and secure Campus Voting modules.',
      'RESTful backend architecture engineered with Express.js and Node.js connected to MongoDB clusters for secure document persistence.',
      'JSON Web Token (JWT) stateless authentication layer securing institutional credentials and operational routes.',
      'Responsive, modular React dashboard interfaces facilitating administrative oversight and student interaction.',
    ],
    analyticsNote: 'Built an end-to-end data analytics pipeline using SQL, Advanced Excel, and Power BI for administrative campus reporting.',
    visualMetaphor: 'Campus system dashboard, role permissions & database telemetry',
    visualType: 'campus',
    problem:
      'Fragmented campus administration routines require separate portals for leave authorization, student credential management, and electoral voting, introducing communication silos and data inconsistencies.',
    solution:
      'An integrated, unified full-stack ecosystem with role-enforced micro-modules, reliable REST interfaces, MongoDB document storage, and responsive dashboards.',
    implementation: [
      'Engineered React.js modular front-end views with strict state boundaries and responsive dashboards.',
      'Constructed Express.js REST API controllers with centralized JWT authorization middleware.',
      'Designed MongoDB schemas for users, leave petitions, and verifiable voting records.',
      'Implemented SQL query workflows and Power BI dashboards to analyze institutional datasets.',
    ],
    status: 'Completed Prototype',
  },
  {
    id: 'physiosis-gait-analysis',
    number: '02',
    title: 'Physiosis',
    subtitle: 'AI-Based Physiotherapy Gait Analysis',
    category: 'AI-Based Physiotherapy Gait Analysis',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'FastAPI'],
    description:
      'Developed a real-time gait analysis system using computer vision and pose analysis. Implemented posture detection, joint angle analysis, movement assessment and corrective recommendations.',
    bulletPoints: [
      'Engineered a real-time video kinematic pipeline analyzing human locomotion and gait posture cycles.',
      'Implemented 33-point skeletal landmark detection and joint angle geometry calculations using MediaPipe and OpenCV.',
      'Constructed algorithmic movement assessment logic to detect deviations from biomechanical baselines.',
      'Generated instant visual telemetry, real-time posture insights, and corrective rehabilitation guidance.',
      'Architected high-performance API endpoints in Python utilizing Flask and FastAPI for frame stream ingestion.',
    ],
    visualMetaphor: 'Computer vision interface with 33-point skeletal landmarks & joint angle telemetry',
    visualType: 'physiosis',
    problem:
      'Traditional physical therapy gait assessments rely on expensive clinical motion-capture laboratory equipment or subjective visual observation, limiting access to frequent objective kinematic feedback.',
    solution:
      'A computer vision system that runs on standard video feeds, tracking anatomical keypoints in real time to calculate joint articulation angles and surface therapeutic corrective feedback.',
    implementation: [
      'Processed camera input feeds frame-by-frame using OpenCV spatial filtering.',
      'Extracted skeletal landmark coordinates via MediaPipe Pose machine learning model.',
      'Calculated 2D and 3D geometric angles between hip, knee, ankle, and shoulder vectors using vector dot products.',
      'Integrated real-time threshold scoring to detect anomalies and serve corrective recommendations via FastAPI.',
    ],
    status: 'AI Research Prototype',
  },
  {
    id: 'smart-study-planner',
    number: '03',
    title: 'Smart Study Planner & Productivity Tracker',
    subtitle: 'TechSprint Hackathon 2025',
    category: 'TechSprint Hackathon 2025',
    techStack: ['Firebase', 'Firestore', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Built an AI-powered study planner with adaptive scheduling, reminders and productivity tracking. Presented the prototype at the GDG on Campus TechSprint Hackathon.',
    bulletPoints: [
      'Developed dynamic scheduling logic that adapts academic study intervals based on student task priority and deadlines.',
      'Integrated Google Cloud Firestore real-time listeners for instant cross-device data synchronization.',
      'Engineered notification and reminder dispatch systems to reinforce consistent study sessions and avoid burn-out.',
      'Constructed visual productivity tracking metrics tracking focus duration, task throughput, and milestone completion.',
      'Demonstrated and pitched the functional prototype live at the GDG on Campus TechSprint Hackathon.',
    ],
    visualMetaphor: 'Scheduling calendar UI, task timeline & productivity metrics',
    visualType: 'planner',
    problem:
      'Students frequently struggle with rigid calendars that collapse when schedules slip, resulting in procrastination and missed academic deadlines.',
    solution:
      'An adaptive planning engine that dynamically recalculates workload distribution when sessions shift, backed by instant Firestore cloud persistence and automated reminders.',
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
    title: 'Pneumonia Detection Using Deep Learning',
    subtitle: 'Academic Project',
    category: 'Academic Project',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'EfficientNet'],
    description:
      'Developed a pneumonia detection model using deep learning. Applied transfer learning and image preprocessing for chest X-ray classification. Evaluated model performance using deep learning techniques.',
    bulletPoints: [
      'Engineered deep learning architectures for binary classification of chest radiographic imagery (Pneumonia vs. Normal).',
      'Applied advanced image preprocessing pipelines using OpenCV, including contrast normalization and spatial scaling.',
      'Leveraged transfer learning paradigms using pre-trained convolutional neural networks including EfficientNet.',
      'Implemented comparative neural network experimentation in both TensorFlow and PyTorch frameworks.',
      'Rigorously evaluated model diagnostic capabilities using deep learning validation techniques and loss curves.',
    ],
    visualMetaphor: 'Chest X-ray deep learning classification pipeline & feature maps',
    visualType: 'pneumonia',
    problem:
      'Rapid chest X-ray interpretation requires expert radiological evaluation, which can be constrained by specialist availability in high-volume healthcare settings.',
    solution:
      'An automated classification model applying transfer learning on deep convolutional representations to highlight pulmonary consolidation indicators.',
    implementation: [
      'Normalized raw chest radiograph datasets and augmented sample distributions using OpenCV & PyTorch transforms.',
      'Fine-tuned pre-trained deep neural networks (EfficientNet) with custom classification heads.',
      'Evaluated training and validation trajectories across cross-entropy loss and metric checkpoints.',
      'Exported model inference pipelines for repeatable test radiograph evaluation.',
    ],
    status: 'Academic Project',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-ml-ds',
    name: 'Machine Learning & Data Science Certification',
    category: 'AI & Data Science',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'cert-openshift',
    name: 'Red Hat Academy – OpenShift Administration',
    issuer: 'Red Hat Academy',
    category: 'Cloud & Container Systems',
    verificationBadge: 'Red Hat Academy Verified',
  },
  {
    id: 'cert-python',
    name: 'Python Programming Certification',
    category: 'Programming & Algorithms',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'cert-sql-dbms',
    name: 'SQL & Database Management',
    category: 'Databases & Query Optimization',
    verificationBadge: 'Verified Credential',
  },
  {
    id: 'cert-powerbi',
    name: 'Power BI for Data Visualization',
    category: 'Business Intelligence & Telemetry',
    verificationBadge: 'Verified Credential',
  },
];

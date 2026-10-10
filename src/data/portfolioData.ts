import type { Project, SkillCategory, Certification, TimelineItem, CurrentFocusItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Koppela Nirvan Reddy',
  callsign: 'NIRVAN',
  title: 'Computer Science Engineering Student • Full Stack Developer • AI/ML Enthusiast',
  headline: 'Building intelligent systems at the intersection of software, AI and interaction.',
  location: 'Hyderabad, Telangana, India',
  email: 'nirvanreddy22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nirvanreddy/',
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    period: '2024–2028',
    cgpa: '8.01',
    status: 'Undergraduate Program',
  },
  systemProfile: {
    os: 'Windows 64-bit Architecture',
    terminal: 'PowerShell / Node.js Runtime',
    coordinates: '17.3850° N, 78.4867° E [HYD-IN]',
    mindset: 'First-principles systems engineering, robust architectural separation, low-latency API design, and mathematical intuition in ML models.',
    currentExploration: 'High-throughput full-stack architectures, real-time computer vision kinematics, and WebGL graphics computation.',
    interests: ['Artificial Intelligence & Neural Nets', 'Full Stack Architecture', 'Computer Vision & Kinematics', 'Interactive 3D Web Graphics', 'Algorithmic Problem Solving'],
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'smart-campus-automation',
    number: '01',
    title: 'Smart Campus Automation System',
    subtitle: 'Institutional Role-Based Governance & Analytics Architecture',
    category: 'Full Stack Web Application',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'SQL', 'Advanced Excel', 'Power BI'],
    description:
      'Built a campus management platform with role-based modules for Student Management, Leave Management, and Campus Voting. Integrated REST APIs and MongoDB for secure data management and responsive dashboards.',
    bulletPoints: [
      'Role-based access control engine governing Student Management, Leave Workflow, and secure Campus Voting modules.',
      'RESTful backend architecture engineered with Express.js and Node.js connected to MongoDB clusters for secure document persistence.',
      'JSON Web Token (JWT) stateless authentication layer securing institutional credentials and operational routes.',
      'Responsive, modular React dashboard interfaces facilitating administrative oversight and student interaction.',
    ],
    analyticsNote: 'Built an end-to-end data analytics pipeline using SQL, Advanced Excel, and Power BI for administrative campus reporting.',
    visualMetaphor: 'Hierarchical campus topology nodes & encrypted distributed telemetry streams',
    visualType: 'campus',
    problem:
      'Fragmented campus administration routines require separate portals for leave authorization, student credential management, and electoral voting, introducing communication silos and data inconsistencies.',
    solution:
      'An integrated, unified full-stack ecosystem with role-enforced micro-modules, reliable REST interfaces, MongoDB document storage, and an accompanying Power BI analytics pipeline.',
    implementation: [
      'Engineered React.js modular front-end views with strict state boundaries and responsive dashboards.',
      'Constructed Express.js REST API controllers with centralized JWT authorization middleware.',
      'Designed MongoDB schemas for users, leave petitions, and verifiable voting records.',
      'Implemented SQL query workflows and Power BI dashboards to analyze institutional datasets.',
    ],
    status: 'PRODUCTION PROTOTYPE // COMPLETE',
  },
  {
    id: 'physiosis-gait-analysis',
    number: '02',
    title: 'Physiosis',
    subtitle: 'AI-Based Physiotherapy Gait Analysis & Kinematics Assessment',
    category: 'AI-Based Physiotherapy Gait Analysis',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'FastAPI'],
    description:
      'Developed a real-time gait analysis system. Implemented posture detection, joint angle analysis, and AI-based movement assessment. Generated real-time posture insights and corrective recommendations.',
    bulletPoints: [
      'Engineered a real-time video kinematic pipeline analyzing human locomotion and gait posture cycles.',
      'Implemented 33-point skeletal landmark detection and joint angle geometry calculations using MediaPipe and OpenCV.',
      'Constructed algorithmic movement assessment logic to detect deviations from biomechanical baselines.',
      'Generated instant visual telemetry, real-time posture insights, and corrective rehabilitation guidance.',
      'Architected high-performance API endpoints in Python utilizing Flask and FastAPI for frame stream ingestion.',
    ],
    visualMetaphor: 'Biomechanical vector skeleton with real-time angular kinematic vectors and joint tracking nodes',
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
    status: 'ACTIVE AI RESEARCH PROTOTYPE',
  },
  {
    id: 'smart-study-planner',
    number: '03',
    title: 'Smart Study Planner & Productivity Tracker',
    subtitle: 'Adaptive Academic Scheduler & Session Intelligence Engine',
    category: 'TechSprint Hackathon 2025',
    techStack: ['Firebase', 'Firestore', 'JavaScript', 'HTML5', 'CSS3'],
    description:
      'Built an AI-powered study planner with adaptive scheduling, reminders, and productivity tracking. Presented the prototype at the GDG on Campus TechSprint Hackathon.',
    bulletPoints: [
      'Developed dynamic scheduling logic that adapts academic study intervals based on student task priority and deadlines.',
      'Integrated Google Cloud Firestore real-time listeners for instant cross-device data synchronization.',
      'Engineered notification and reminder dispatch systems to reinforce consistent study sessions and avoid burn-out.',
      'Constructed visual productivity tracking metrics tracking focus duration, task throughput, and milestone completion.',
      'Demonstrated and pitched the functional prototype live at the GDG on Campus TechSprint Hackathon.',
    ],
    visualMetaphor: 'Chrono-orbital time grid, adaptive milestone rings, and synchronized real-time data pulses',
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
    status: 'PRESENTED @ GDG TECHSPRINT HACKATHON 2025',
  },
  {
    id: 'pneumonia-detection-deep-learning',
    number: '04',
    title: 'Pneumonia Detection Using Deep Learning',
    subtitle: 'Convolutional Feature Extraction & Chest Radiograph Classification',
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
    visualMetaphor: 'Convolutional feature heatmap, medical radiograph scan sweep, and neural layer activation matrix',
    visualType: 'pneumonia',
    problem:
      'Rapid chest X-ray interpretation requires expert radiological evaluation, which can be constrained by specialist availability in high-volume healthcare settings.',
    solution:
      'An automated diagnostic classification model applying transfer learning on deep convolutional representations to highlight pulmonary consolidation indicators.',
    implementation: [
      'Normalized raw chest radiograph datasets and augmented sample distributions using OpenCV & PyTorch transforms.',
      'Fine-tuned pre-trained deep neural networks (EfficientNet) with custom classification heads.',
      'Evaluated training and validation trajectories across cross-entropy loss and metric checkpoints.',
      'Exported model inference pipelines for repeatable test radiograph evaluation.',
    ],
    status: 'ACADEMIC DEEP LEARNING BENCHMARK',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI / ML',
    iconName: 'BrainCircuit',
    color: '#00f0ff',
    description: 'Neural architectures, computer vision pipelines, kinematic extraction, and predictive modeling.',
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
    category: 'Backend',
    iconName: 'Server',
    color: '#3b82f6',
    description: 'Scalable REST APIs, asynchronous server runtimes, secure authorization layers, and microservices.',
    skills: [
      'Node.js',
      'Express.js',
      'Flask',
      'FastAPI',
      'REST APIs',
    ],
  },
  {
    category: 'Frontend',
    iconName: 'Layout',
    color: '#8b5cf6',
    description: 'Reactive user interfaces, modern component architectures, state machines, and performant web graphics.',
    skills: [
      'React.js',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
  },
  {
    category: 'Databases',
    iconName: 'Database',
    color: '#06b6d4',
    description: 'Document databases, relational SQL querying, indexing, and real-time cloud data stores.',
    skills: [
      'MongoDB',
      'MySQL',
      'Firebase Firestore',
    ],
  },
  {
    category: 'Languages',
    iconName: 'Code',
    color: '#d946ef',
    description: 'Strong foundation in object-oriented, scripting, query, and systems-level programming languages.',
    skills: [
      'Java',
      'Python',
      'JavaScript',
      'SQL',
      'C',
    ],
  },
  {
    category: 'Tools & DevOps',
    iconName: 'Wrench',
    color: '#10b981',
    description: 'Version control, cloud platforms, business intelligence pipelines, and developer environments.',
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
    category: 'Core Computer Science',
    iconName: 'Cpu',
    color: '#f59e0b',
    description: 'Foundational algorithmic concepts, memory models, relational theory, and engineering paradigms.',
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

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-ml-ds',
    name: 'Machine Learning & Data Science Certification',
    category: 'Artificial Intelligence & Analytics',
    verificationBadge: 'VERIFIED CREDENTIAL',
  },
  {
    id: 'cert-openshift',
    name: 'OpenShift Administration',
    issuer: 'Red Hat Academy',
    category: 'Enterprise Cloud & Container Systems',
    verificationBadge: 'RED HAT ACADEMY VERIFIED',
  },
  {
    id: 'cert-python',
    name: 'Python Programming Certification',
    category: 'Core Languages & Algorithms',
    verificationBadge: 'VERIFIED CREDENTIAL',
  },
  {
    id: 'cert-sql-dbms',
    name: 'SQL & Database Management',
    category: 'Relational Systems & Query Optimization',
    verificationBadge: 'VERIFIED CREDENTIAL',
  },
  {
    id: 'cert-powerbi',
    name: 'Power BI for Data Visualization',
    category: 'Business Intelligence & Telemetry',
    verificationBadge: 'VERIFIED CREDENTIAL',
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'tl-1',
    period: '2024 – 2028',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)',
    location: 'Hyderabad, Telangana, India',
    category: 'education',
    tag: 'ACADEMIC MILESTONE',
    description:
      'Pursuing comprehensive Computer Science curriculum focusing on Data Structures & Algorithms, Object Oriented Programming, DBMS, Operating Systems, and Computer Networks. Maintaining a cumulative grade point average of 8.01.',
    highlights: [
      'Cumulative Grade Point Average (CGPA): 8.01',
      'Core coursework: Data Structures, Object-Oriented Analysis, Database Systems, Computer Networks',
      'Active research into applied machine learning, computer vision, and distributed software systems',
    ],
  },
  {
    id: 'tl-2',
    period: '2025',
    title: 'GDG on Campus TechSprint Hackathon',
    organization: 'Google Developer Groups (GDG) on Campus',
    category: 'hackathon',
    tag: 'INNOVATION SPRINT',
    description:
      'Architected and built the Smart Study Planner & Productivity Tracker prototype under intensive hackathon time constraints. Presented live system demonstration to technical jury.',
    highlights: [
      'Built adaptive schedule calculation logic in JavaScript with Firebase Firestore cloud persistence',
      'Presented functional prototype demonstrating real-time data sync and reminder automation',
      'Validated end-to-end user workflows for student productivity and focus tracking',
    ],
  },
  {
    id: 'tl-3',
    period: '2024 – PRESENT',
    title: 'Full Stack Engineering: Smart Campus Automation System',
    organization: 'Software Engineering Project Build',
    category: 'project',
    tag: 'FULL STACK ARCHITECTURE',
    description:
      'Engineered an institutional campus management system implementing role-based authentication, student administration, and secure voting workflows with MongoDB and Express.js REST APIs.',
    highlights: [
      'Architected JWT authorization mechanism across student and administrator personas',
      'Constructed data analytics pipeline connecting operational SQL stores with Power BI reporting',
      'Implemented modular React.js UI state management for responsive campus administrative dashboards',
    ],
  },
  {
    id: 'tl-4',
    period: '2024 – PRESENT',
    title: 'Kinematic Computer Vision Research: Physiosis',
    organization: 'AI / Computer Vision Project Build',
    category: 'project',
    tag: 'AI / COMPUTER VISION',
    description:
      'Developed real-time physiotherapy gait analysis platform harnessing MediaPipe pose landmarks and OpenCV spatial geometry to calculate joint angles and deliver instant posture feedback.',
    highlights: [
      'Engineered real-time 33-point skeletal landmark tracking for joint motion assessment',
      'Created vector mathematics algorithms for dynamic knee, hip, and gait angular evaluation',
      'Implemented high-throughput Python backend using FastAPI and Flask services',
    ],
  },
  {
    id: 'tl-5',
    period: '2024 – PRESENT',
    title: 'Deep Learning Diagnostics: Pneumonia Detection',
    organization: 'Deep Learning & Medical Imaging Build',
    category: 'project',
    tag: 'DEEP LEARNING',
    description:
      'Implemented transfer learning models utilizing EfficientNet, TensorFlow, and PyTorch for automated radiographic chest X-ray classification with OpenCV preprocessing.',
    highlights: [
      'Applied convolutional neural network architectures for binary pathological classification',
      'Evaluated model convergence curves and image contrast enhancement preprocessing pipelines',
      'Benchmarked implementation parameters across TensorFlow and PyTorch environments',
    ],
  },
  {
    id: 'tl-6',
    period: 'CONTINUOUS',
    title: 'Industry Certifications & Systems Validation',
    organization: 'Red Hat Academy, ML/DS, Python, SQL & Power BI',
    category: 'certification',
    tag: 'TECHNICAL CREDENTIALS',
    description:
      'Completed certifications across cloud orchestration (Red Hat OpenShift Administration), Machine Learning & Data Science, Python, SQL Databases, and Power BI Analytics.',
    highlights: [
      'Red Hat Academy – OpenShift Administration validated',
      'Machine Learning & Data Science certified competency',
      'SQL & Database Management and Power BI data pipeline certifications',
    ],
  },
];

export const CURRENT_FOCUS_ITEMS: CurrentFocusItem[] = [
  {
    id: 'cf-1',
    title: 'AI / Machine Learning Systems',
    code: 'CORE.SYS_01 // ML_NEURAL',
    status: 'ACTIVE_DEVELOPMENT',
    description:
      'Designing robust machine learning pipelines, exploring transformer and convolutional architectures, transfer learning strategies, and mathematical optimization for inference.',
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'EfficientNet'],
    matrixScore: '94% COMPUTE DEDICATION',
  },
  {
    id: 'cf-2',
    title: 'Computer Vision & Kinematics',
    code: 'CORE.SYS_02 // CV_KINEMATICS',
    status: 'ACTIVE_RESEARCH',
    description:
      'Developing real-time spatial analysis pipelines, human pose estimation algorithms, anatomical joint vector tracking, and optical feature extraction.',
    technologies: ['OpenCV', 'MediaPipe', 'Real-time Frame Stream Analysis', 'Vector Math'],
    matrixScore: '89% COMPUTE DEDICATION',
  },
  {
    id: 'cf-3',
    title: 'Full-Stack Systems & Distributed APIs',
    code: 'CORE.SYS_03 // ARCH_DISTRIBUTED',
    status: 'PRODUCTION_BENCHMARK',
    description:
      'Building performant, decoupled microservice backends, role-based JWT security architectures, resilient database schemas, and modern frontend user experiences.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'SQL'],
    matrixScore: '96% COMPUTE DEDICATION',
  },
  {
    id: 'cf-4',
    title: 'Developer Tooling & Data Analytics',
    code: 'CORE.SYS_04 // TOOLING_ANALYTICS',
    status: 'OPERATIONAL',
    description:
      'Constructing end-to-end data pipelines, business intelligence visualizations, automated build setups, and developer workflow optimization.',
    technologies: ['Power BI', 'SQL', 'Git/GitHub', 'Postman', 'OpenShift'],
    matrixScore: '85% COMPUTE DEDICATION',
  },
  {
    id: 'cf-5',
    title: 'Interactive 3D Web & Real-Time Graphics',
    code: 'CORE.SYS_05 // WEBGL_GPU',
    status: 'EXPERIMENTATION',
    description:
      'Pioneering cinematic Three.js WebGL experiences, GPU particle computation, procedural shaders, and fluid physical motion choreography on the web.',
    technologies: ['Three.js', 'WebGL', 'GSAP', 'Lenis Smooth Scroll', 'GLSL Concepts'],
    matrixScore: '91% COMPUTE DEDICATION',
  },
];

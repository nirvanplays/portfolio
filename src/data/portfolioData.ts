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
      'Built a campus management platform with role-based modules for Student Management, Leave Management and Campus Voting. Integrated REST APIs and MongoDB for secure data management and responsive dashboards.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    technology: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'SQL', 'Power BI'],
    visualType: 'campus',
    overview:
      'An institutional full-stack management platform engineered to unify administrative workflows across students, faculty, and administrators. The platform replaces fragmented manual paperwork with centralized role-governed digital workflows, secure token-based authentication, and responsive data views.',
    whatItDoes: [
      'Enforces granular role-based access control (RBAC) ensuring users only see authorization-specific data and actions.',
      'Manages comprehensive student academic profiles, enrollment status, and institutional credential records.',
      'Automates end-to-end leave application workflows, allowing students to petition leaves and faculty to approve or reject with audit history.',
      'Provides a verifiable digital campus voting system for student council and representative elections.',
      'Powers analytical reporting for administration using SQL queries, Advanced Excel, and Power BI dashboards.',
    ],
    architecture:
      'Client-Server decoupled architecture. The frontend is a modular Single Page Application built with React.js that communicates over HTTP/HTTPS with an Express.js and Node.js REST API. Route handlers authenticate requests via custom JWT middleware. Persistent data is structured in MongoDB collections with indexing on student IDs and electoral voter hashes.',
    keyModules: [
      {
        name: 'Role-Based Authentication Engine',
        description:
          'Issues cryptographically signed JSON Web Tokens on user login, carrying encrypted role claims (Student, Faculty, Admin) to protect sensitive operational endpoints.',
      },
      {
        name: 'Student Management Module',
        description:
          'Maintains student academic databases, department affiliations, contact details, and administrative enrollment records.',
      },
      {
        name: 'Leave Workflow System',
        description:
          'Structured petition routing enabling students to submit medical/academic leaves with attached dates and justifications, automatically alerting department faculty for approval.',
      },
      {
        name: 'Campus Voting Subsystem',
        description:
          'Secure ballot interface preventing duplicate votes per registered student token, ensuring election integrity during campus representation voting.',
      },
    ],
    implementation: [
      'Constructed responsive React components with strict state boundaries and clean layout separation.',
      'Engineered Express.js RESTful API controllers with centralized error-handling and authentication middleware.',
      'Designed MongoDB schemas for users, leave records, and election tallies.',
      'Built an end-to-end data analytics pipeline using SQL, Advanced Excel, and Power BI for administrative campus reporting.',
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
    technology: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'FastAPI', 'Vector Mathematics', 'NumPy'],
    visualType: 'physiosis',
    overview:
      'A real-time computer vision system that evaluates human locomotion and physiotherapy gait posture using standard video input feeds. The project extracts anatomical keypoints without specialized motion-capture hardware, computing geometric joint articulation angles to highlight deviations from normative kinematic baselines.',
    whatItDoes: [
      'Ingests live camera video feeds at 30 FPS for frame-by-frame spatial analysis.',
      'Tracks 33 full-body anatomical landmark coordinates in real time using MediaPipe Pose.',
      'Calculates dynamic geometric angles at the knee, hip, ankle, and shoulder using spatial vector dot products.',
      'Analyzes gait phase cycles (stance vs. swing phases) to detect asymmetry or improper weight distribution.',
      'Surfaces instant visual telemetry and corrective recommendations to guide physiotherapy exercise routines.',
    ],
    architecture:
      'Pipeline-based streaming architecture. Video frames are captured and filtered via OpenCV, then fed into the MediaPipe Pose machine learning model for 3D landmark extraction. Coordinate arrays are processed by Python vector math modules calculating articulation angles. High-throughput FastAPI endpoints stream telemetry data to client interfaces.',
    keyModules: [
      {
        name: 'Frame Preprocessing Pipeline',
        description:
          'Applies spatial normalization, contrast adjustment, and resolution scaling in OpenCV to maintain stable landmark extraction under varying lighting.',
      },
      {
        name: '33-Point Pose Landmark Extraction',
        description:
          'Leverages MediaPipe Pose deep learning inference to track precise joint coordinates across lower and upper anatomical landmarks.',
      },
      {
        name: 'Kinematic Angle Calculator',
        description:
          'Vector calculation engine executing dot products on anatomical vectors (e.g. thigh and shin vectors for knee flexion) to output real-time degrees.',
      },
      {
        name: 'Gait Assessment & Feedback Engine',
        description:
          'Compares measured articulation angles against standard biomechanical thresholds, outputting visual warnings when posture deviates significantly.',
      },
    ],
    implementation: [
      'Processed camera input feeds frame-by-frame using OpenCV spatial filtering.',
      'Extracted skeletal landmark coordinates via MediaPipe Pose machine learning model.',
      'Calculated 2D and 3D geometric angles between hip, knee, ankle, and shoulder vectors.',
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
    technology: ['Firebase', 'Firestore', 'JavaScript', 'HTML5', 'CSS3', 'Cloud Synchronization'],
    visualType: 'planner',
    overview:
      'An adaptive study planning and productivity tracking platform built and demonstrated live at the Google Developer Groups (GDG) on Campus TechSprint Hackathon 2025. The platform dynamically recalibrates student timetables when sessions shift, eliminating rigid calendar failures.',
    whatItDoes: [
      'Dynamically recalculates study schedules based on subject priority, estimated task effort, and approaching exam deadlines.',
      'Provides instant cross-device data synchronization using Google Cloud Firestore real-time snapshot listeners.',
      'Dispatches session reminders and focus interval prompts to prevent student fatigue and burnout.',
      'Generates visual productivity tracking analytics measuring daily focus duration, task throughput, and milestone completion.',
      'Functional prototype was successfully pitched and demonstrated live before the technical evaluation jury at GDG TechSprint.',
    ],
    architecture:
      'Serverless cloud architecture. Client application runs dynamic JavaScript scheduling algorithms locally for zero-latency timetable updates. Application state is persisted to Google Cloud Firestore with real-time listeners ensuring changes sync across multiple browser sessions instantly.',
    keyModules: [
      {
        name: 'Adaptive Scheduling Engine',
        description:
          'Client-side algorithm that dynamically redistributes overdue or postponed tasks into future available study blocks without manual re-entry.',
      },
      {
        name: 'Real-Time Cloud Persistence Layer',
        description:
          'Firebase Firestore collection schema managing user task states, deadline intervals, and session history with offline caching.',
      },
      {
        name: 'Productivity Metrics Dashboard',
        description:
          'Visual progress indicators summarizing daily focus minutes, task completion percentages, and subject distribution.',
      },
      {
        name: 'Session Reminder & Interval Dispatch',
        description:
          'Browser notification triggers prompting scheduled study sessions and structured rest breaks.',
      },
    ],
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
      'Developed a pneumonia detection model using deep learning. Applied transfer learning and image preprocessing for chest X-ray classification. Evaluated model performance using deep learning techniques.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'EfficientNet'],
    technology: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'EfficientNet', 'Transfer Learning', 'CNNs'],
    visualType: 'pneumonia',
    overview:
      'An academic machine learning research project exploring binary classification of chest radiographic imagery (Pneumonia vs. Normal). The build leverages transfer learning on deep convolutional representations to detect pulmonary consolidation indicators while establishing comparative training benchmarks across PyTorch and TensorFlow.',
    whatItDoes: [
      'Executes end-to-end deep learning pipelines for binary classification of chest radiographic scans.',
      'Normalizes raw grayscale X-ray imagery with OpenCV preprocessing, contrast enhancement, and spatial standardization.',
      'Applies transfer learning with pre-trained convolutional neural networks (EfficientNet) for high-efficiency feature extraction.',
      'Executes comparative training and evaluation across both TensorFlow and PyTorch environments.',
      'Evaluates convergence trajectories, loss functions, and validation checkpoints to assess model generalization.',
    ],
    architecture:
      'Deep Convolutional Neural Network pipeline. Input X-ray scans (224×224 pixels) are preprocessed via OpenCV spatial transformations. Preprocessed tensors pass through pre-trained EfficientNet convolutional backbone layers frozen during early epochs. Custom classification heads (Dense layers with Dropout and Sigmoid activation) compute binary pathology probability scores.',
    keyModules: [
      {
        name: 'Radiograph Preprocessing & Augmentation',
        description:
          'OpenCV image processing pipeline performing histogram equalization, contrast normalization, random rotations, and scaling to mitigate dataset imbalance.',
      },
      {
        name: 'Convolutional Feature Extractor',
        description:
          'Pre-trained EfficientNet architecture extracting hierarchical spatial features from subtle pulmonary opacities and lung consolidation zones.',
      },
      {
        name: 'Custom Classification Head',
        description:
          'Global average pooling layer coupled with Dropout (0.3) and Dense layers producing calibrated binary output predictions.',
      },
      {
        name: 'Dual-Framework Training Benchmark',
        description:
          'Parallel validation experiments in PyTorch and TensorFlow evaluating loss convergence trajectories and optimizer behavior.',
      },
    ],
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

import type { Project, SkillCategory, Certification, EducationMilestone, PrincipleItem } from '../types';

export const PERSONAL_INFO = {
  name: 'NIRVAN REDDY',
  fullName: 'Koppela Nirvan Reddy',
  sublabel: 'COMPUTER SCIENCE ENGINEERING',
  sublabelLine2: 'FULL STACK • AI / ML • SYSTEMS',
  headline: "Hi, I'm Nirvan.",
  subheadline: 'I engineer scalable full-stack applications, real-time computer vision, and applied AI systems.',
  supportingCopy:
    'Computer Science Engineering student at Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), focused on high-throughput full-stack architectures, real-time computer vision kinematics with Google MediaPipe, and robust algorithmic problem solving.',
  location: 'Hyderabad, India',
  statusTitle: 'CURRENTLY BUILDING',
  statusValue: 'Full Stack + Real-Time AI Systems',
  email: 'nirvanreddyk@gmail.com',
  github: 'https://github.com/nirvanplays',
  linkedin: 'https://www.linkedin.com/in/nirvanreddy/',
  portfolioUrl: 'https://nirvan-portfolio.vercel.app',
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)',
    period: '2024–2028',
    cgpa: '8.01',
    location: 'Hyderabad, India',
  },
  focus: ['Full Stack Systems', 'Computer Vision & MediaPipe', 'Data Structures & Algorithms', 'Applied AI / ML'],
  interests: ['Algorithmic Problem Solving', 'Computer Vision', 'Distributed Systems', 'Web Architectures', 'Basketball'],
};

export const PROJECTS: Project[] = [
  {
    id: 'smart-campus-automation',
    number: '01',
    title: 'SMART CAMPUS AUTOMATION SYSTEM',
    category: 'FULL STACK WEB APPLICATION & RBAC PLATFORM',
    description:
      'Engineered a centralized campus operations platform with role-based governance for Student Management, Leave Petitions, and Digital Elections. Backed by RESTful Express.js microservices and indexed MongoDB persistence with sub-85ms response times.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    technology: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'SQL', 'Power BI', 'Vercel Edge'],
    visualType: 'campus',
    liveUrl: 'https://smart-campus-automation-rho.vercel.app',
    githubUrl: 'https://github.com/nirvanplays/Smart-Campus-Automation-system',
    metrics: [
      { label: 'API Response Time', value: '<85ms REST' },
      { label: 'Access Control', value: 'RBAC 3-Tier Security' },
      { label: 'Election Auditing', value: '100% Token-Bound' },
    ],
    overview:
      'An institutional full-stack management platform engineered to unify administrative workflows across students, faculty, and administrators. The platform replaces fragmented manual paperwork with centralized role-governed digital workflows, secure cryptographic token authentication, and real-time administrative analytics.',
    whatItDoes: [
      'Enforces granular role-based access control (RBAC) across Student, Faculty, and Administrator domains with zero privilege escalation.',
      'Manages comprehensive student academic databases, department affiliations, and institutional enrollment records.',
      'Automates multi-step leave petition workflows with automated routing, audit timestamps, and faculty decision tracking.',
      'Powers a tamper-resistant digital campus voting subsystem enforcing single-vote cryptographically signed voter tokens.',
      'Feeds operational telemetry into SQL and Power BI dashboards to track campus attendance trends and administrative load.',
    ],
    architecture:
      'Client-Server decoupled architecture. The frontend is a modular Single Page Application built with React.js that communicates over HTTP/HTTPS with an Express.js and Node.js REST API. Route handlers authenticate requests via custom JWT middleware. Persistent data is structured in MongoDB collections with compound indexing on student IDs and electoral voter hashes to ensure O(1) query lookups.',
    keyModules: [
      {
        name: 'Role-Based Authentication Engine',
        description:
          'Issues cryptographically signed JSON Web Tokens on user login, carrying encrypted role claims (Student, Faculty, Admin) to protect sensitive operational endpoints.',
      },
      {
        name: 'Student Management & Records Directory',
        description:
          'Maintains student academic databases, department affiliations, contact details, and administrative enrollment records with full search indexing.',
      },
      {
        name: 'Automated Leave Routing Workflow',
        description:
          'Structured petition routing enabling students to submit medical/academic leaves with attached dates and justifications, automatically alerting department faculty for approval.',
      },
      {
        name: 'Cryptographic Campus Voting Subsystem',
        description:
          'Secure ballot interface preventing duplicate votes per registered student token, ensuring election integrity during campus representation voting.',
      },
    ],
    implementation: [
      'Constructed responsive React components with strict state boundaries and clean layout separation.',
      'Engineered Express.js RESTful API controllers with centralized error-handling, rate-limiting, and authentication middleware.',
      'Designed MongoDB schemas for users, leave records, and election tallies with unique compound indexes.',
      'Built an end-to-end data analytics pipeline using SQL, Advanced Excel, and Power BI for administrative campus reporting.',
    ],
    analyticsNote:
      'Built an end-to-end data analytics pipeline using SQL, Advanced Excel, and Power BI for administrative campus reporting.',
    status: 'Live Production Deployment',
    timeline: 'Jan 2026 – Present',
  },
  {
    id: 'physiosis-gait-analysis',
    number: '02',
    title: 'PHYSIOSIS — AI BIOMECHANICAL REHABILITATION PLATFORM',
    category: 'COMPUTER VISION & KINEMATICS ANALYSIS',
    description:
      'Developed a clinical-grade, real-time computer vision and biomechanical rehabilitation platform powered by Google MediaPipe Pose and Three.js. Tracks 33 anatomical landmarks at 30+ FPS with <35ms inference latency, computing multi-planar joint angles and kinetic compensation scores.',
    techStack: ['Python', 'Google MediaPipe', 'OpenCV', 'Three.js', 'React', 'FastAPI'],
    technology: ['Python', 'Google MediaPipe Pose', 'OpenCV', 'Three.js (WebGL)', 'React 18', 'TypeScript', 'FastAPI', 'NumPy', 'Supabase'],
    visualType: 'physiosis',
    liveUrl: 'https://physiosis-sandy-shores.vercel.app',
    githubUrl: 'https://github.com/nirvanplays/Physiosis',
    googleTech: ['Google MediaPipe Pose Vision', 'Three.js 3D Kinetic Avatar', 'Kinematic Vector Math Engine'],
    metrics: [
      { label: 'Inference Latency', value: '<35ms per Frame' },
      { label: 'Camera Pipeline', value: '30+ FPS Real-Time' },
      { label: 'Kinematic Landmark Tracking', value: '33 Skeletal Points' },
    ],
    overview:
      'A real-time computer vision system that evaluates human locomotion and physiotherapy gait posture using standard webcam feeds without expensive wearable sensors. The project extracts anatomical keypoints using Google MediaPipe Pose and computes multi-planar geometric joint articulation angles via vector dot products to highlight deviations from normative kinematic baselines.',
    whatItDoes: [
      'Ingests live camera video feeds at 30+ FPS for real-time spatial landmark analysis.',
      'Tracks 33 full-body anatomical landmark coordinates in real time via Google MediaPipe Vision.',
      'Calculates dynamic geometric angles at the knee, hip, ankle, and shoulder using spatial vector dot products in O(1) time complexity.',
      'Analyzes gait phase cycles (stance vs. swing phases) to detect asymmetry, trunk lean, shoulder hiking, and knee valgus deviation.',
      'Renders a synchronized 3D kinetic avatar in Three.js alongside live clinical safety state machine overrides (SAFE, CAUTION, STOP, ESCALATE).',
    ],
    architecture:
      'Pipeline-based streaming architecture. Video frames are captured and filtered via OpenCV, then fed into the Google MediaPipe Pose machine learning model for 3D landmark extraction. Coordinate arrays are processed by high-performance vector math modules calculating articulation angles. Synchronized Three.js 3D kinetic avatars render patient locomotion in real time, backed by Supabase PostgreSQL with Row-Level Security.',
    keyModules: [
      {
        name: 'Google MediaPipe 33-Point Vision Engine',
        description:
          'Leverages Google MediaPipe Pose deep learning inference to track precise sub-pixel joint coordinates across lower and upper anatomical landmarks in real time.',
      },
      {
        name: 'Spatial Vector Kinematic Engine',
        description:
          'Vector calculation engine executing Euclidean dot products on anatomical vectors (thigh, shin, torso) to output real-time joint articulation degrees with zero latency.',
      },
      {
        name: 'Three.js 3D Kinetic Avatar Mirror',
        description:
          'WebGL canvas mapping computed kinematic vectors to a 3D articulated skeleton, providing patients with immediate visual spatial feedback.',
      },
      {
        name: 'Deterministic Safety State Machine',
        description:
          'Hierarchical safety engine enforcing SAFE, CAUTION, STOP, and ESCALATE thresholds, protecting patients from hyper-extension and sudden velocity spikes (>200°/s).',
      },
    ],
    implementation: [
      'Processed camera input feeds frame-by-frame using OpenCV spatial filtering and normalization.',
      'Extracted skeletal landmark coordinates via Google MediaPipe Pose machine learning model.',
      'Calculated 2D and 3D geometric angles between hip, knee, ankle, and shoulder vectors.',
      'Integrated real-time threshold scoring to detect anomalies and serve corrective recommendations via FastAPI.',
    ],
    status: 'Live AI Research Platform',
    timeline: 'Oct 2025 – Present',
  },
  {
    id: 'smart-study-planner',
    number: '03',
    title: 'SMART STUDY PLANNER & PRODUCTIVITY PLATFORM',
    category: 'GOOGLE CLOUD & GDG TECHSPRINT HACKATHON 2025',
    description:
      'Engineered an adaptive study planning platform built with Google Technologies for the GDG on Campus TechSprint Hackathon 2025. Features dynamic scheduling algorithms, Google OAuth 2.0, Cloud Firestore real-time snapshot synchronization (<400ms), and automated workload balancing.',
    techStack: ['Google Cloud Firestore', 'Google Auth', 'Firebase Hosting', 'JavaScript', 'HTML5', 'CSS3'],
    technology: ['Google Cloud Firestore', 'Google OAuth 2.0', 'Firebase Hosting', 'Firebase Analytics', 'JavaScript ES6+', 'HTML5', 'CSS3'],
    visualType: 'planner',
    liveUrl: 'https://smart-study-planner-86f98.web.app',
    githubUrl: 'https://github.com/nirvanplays/Smart-Study-Planner',
    googleTech: ['Google Cloud Firestore', 'Google OAuth 2.0 Auth', 'Firebase Cloud Hosting & Analytics'],
    metrics: [
      { label: 'Real-Time Sync', value: '<400ms Cloud Latency' },
      { label: 'UI Algorithm', value: 'Zero-Latency Local' },
      { label: 'Hackathon Award', value: 'GDG TechSprint Finalist' },
    ],
    overview:
      'An adaptive study planning and productivity tracking platform built and demonstrated live at the Google Developer Groups (GDG) on Campus TechSprint Hackathon 2025. The platform dynamically recalibrates student timetables when sessions shift, eliminating rigid calendar failures and keeping students aligned with upcoming exam deadlines.',
    whatItDoes: [
      'Secures student access via Google Authentication (OAuth 2.0) with zero credential friction.',
      'Dynamically recalculates study schedules based on subject priority, estimated task effort, and approaching exam deadlines.',
      'Provides instant cross-device data synchronization using Google Cloud Firestore real-time snapshot listeners (<400ms latency).',
      'Dispatches session reminders and focus interval prompts to prevent student fatigue and burnout.',
      'Generates visual productivity tracking analytics measuring daily focus duration, task throughput, and milestone completion.',
    ],
    architecture:
      'Serverless Google Cloud architecture. Client application runs dynamic JavaScript scheduling algorithms locally for zero-latency timetable updates. Application state is persisted to Google Cloud Firestore with real-time listeners ensuring changes sync across multiple browser sessions instantly, served globally over Firebase CDN Hosting.',
    keyModules: [
      {
        name: 'Adaptive Timetable Scheduling Algorithm',
        description:
          'Client-side algorithm that dynamically redistributes overdue or postponed tasks into future available study blocks without manual re-entry.',
      },
      {
        name: 'Google Cloud Firestore Real-Time Sync',
        description:
          'Firebase Firestore collection schema managing user task states, deadline intervals, and session history with real-time snapshot listeners.',
      },
      {
        name: 'Google OAuth 2.0 Identity Layer',
        description:
          'Firebase Authentication integration providing seamless single-sign-on (SSO) with enterprise-grade token security.',
      },
      {
        name: 'Productivity Analytics Engine',
        description:
          'Visual progress indicators summarizing daily focus minutes, task completion percentages, and subject distribution.',
      },
    ],
    implementation: [
      'Architected client-side scheduling algorithms in JavaScript that compute time allocations.',
      'Configured Google Firebase Authentication and Cloud Firestore security rules for persistent user session storage.',
      'Created interactive UI views with custom CSS grid layouts and lightweight progress visualizations.',
      'Delivered presentation and live prototype walkthrough to evaluators at GDG TechSprint Hackathon.',
    ],
    status: 'Live Hosted on Firebase',
    timeline: 'Jan 2025 – Present',
  },
  {
    id: 'pneumonia-detection-deep-learning',
    number: '04',
    title: 'PNEUMONIA DETECTION VIA DEEP CONVOLUTIONAL NETWORKS',
    category: 'MEDICAL COMPUTER VISION & DEEP LEARNING RESEARCH',
    description:
      'Developed a high-accuracy medical diagnostic pipeline evaluating chest radiographic scans using deep convolutional neural networks. Implemented transfer learning on an EfficientNet backbone, achieving 94.2% test accuracy, paired with Grad-CAM attention heatmap explainability.',
    techStack: ['TensorFlow', 'PyTorch', 'Python', 'OpenCV', 'EfficientNet', 'Grad-CAM'],
    technology: ['TensorFlow', 'PyTorch', 'Python', 'OpenCV', 'EfficientNet-B0', 'Grad-CAM', 'Scikit-learn', 'NumPy'],
    visualType: 'pneumonia',
    githubUrl: 'https://github.com/nirvanplays/portfolio',
    googleTech: ['TensorFlow & Keras', 'Google Colab TPU/GPU', 'EfficientNet CNN Backbone'],
    metrics: [
      { label: 'Validation Accuracy', value: '94.2% on X-Rays' },
      { label: 'Neural Backbone', value: 'EfficientNet-B0 CNN' },
      { label: 'Model Interpretability', value: 'Grad-CAM Attention' },
    ],
    overview:
      'An academic machine learning research project exploring binary classification of chest radiographic imagery (Pneumonia vs. Normal). The build leverages transfer learning on deep convolutional representations to detect pulmonary consolidation indicators while establishing comparative training benchmarks across PyTorch and TensorFlow.',
    whatItDoes: [
      'Executes end-to-end deep learning pipelines for binary classification of chest radiographic scans.',
      'Normalizes raw grayscale X-ray imagery with OpenCV preprocessing, contrast enhancement, and spatial standardization.',
      'Applies transfer learning with pre-trained convolutional neural networks (EfficientNet) for high-efficiency feature extraction.',
      'Executes comparative training and evaluation across both TensorFlow and PyTorch environments.',
      'Generates Grad-CAM visual attention heatmaps highlighting pulmonary opacities to provide clinicians with transparent model interpretability.',
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
        name: 'Convolutional Feature Extractor (EfficientNet)',
        description:
          'Pre-trained EfficientNet architecture extracting hierarchical spatial features from subtle pulmonary opacities and lung consolidation zones.',
      },
      {
        name: 'Custom Classification Head',
        description:
          'Global average pooling layer coupled with Dropout (0.3) and Dense layers producing calibrated binary output predictions.',
      },
      {
        name: 'Grad-CAM Interpretability Engine',
        description:
          'Calculates gradients of target class scores with respect to final convolutional layer feature maps, visualizing pulmonary attention zones.',
      },
    ],
    implementation: [
      'Normalized raw chest radiograph datasets and augmented sample distributions using OpenCV & PyTorch transforms.',
      'Fine-tuned pre-trained deep neural networks (EfficientNet) with custom classification heads.',
      'Evaluated training and validation trajectories across cross-entropy loss and metric checkpoints.',
      'Exported model inference pipelines for repeatable test radiograph evaluation.',
    ],
    status: 'Academic ML Research Build',
    timeline: 'Oct 2025 – Dec 2025',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'LANGUAGES',
    skills: ['Java', 'Python', 'C++', 'C', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    category: 'GOOGLE TECH & CLOUD',
    skills: ['Google MediaPipe', 'Google Cloud Platform (GCP)', 'Cloud Firestore', 'Firebase Auth', 'Firebase Hosting', 'TensorFlow', 'Google Colab'],
  },
  {
    category: 'CORE CS & DSA',
    skills: ['Data Structures & Algorithms', 'Time & Space Complexity (Big-O)', 'Object-Oriented Design (OOP)', 'Database Management (DBMS)', 'Operating Systems (Concurrency/Threads)', 'Computer Networks (TCP/IP, HTTP/3)'],
  },
  {
    category: 'FRONTEND',
    skills: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Three.js (WebGL)', 'HTML5 / CSS3'],
  },
  {
    category: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'RESTful API Design', 'JWT Security', 'Microservices'],
  },
  {
    category: 'DATABASES',
    skills: ['MongoDB', 'PostgreSQL / Supabase', 'MySQL', 'Firebase Firestore', 'Database Indexing'],
  },
  {
    category: 'AI / ML',
    skills: ['Computer Vision', 'OpenCV', 'MediaPipe Pose', 'YOLOv11-Pose', 'PyTorch', 'TensorFlow', 'EfficientNet', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    category: 'TOOLS & PRACTICES',
    skills: ['Git / GitHub', 'Postman', 'Linux / Bash', 'Vercel Edge', 'Docker', 'Agile / Scrum', 'CI/CD Pipelines'],
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
    year: '2025',
    title: 'GDG TechSprint Hackathon Finalist',
    organization: 'Google Developer Groups on Campus (GDG)',
    description:
      'Co-developed and demonstrated Smart Study Planner live before the jury, leveraging Google Cloud Firestore and Firebase Authentication for real-time collaborative student scheduling.',
    tag: 'Google Hackathon',
  },
  {
    year: '2026',
    title: 'Current Systems Development & Applied AI',
    organization: 'Independent Project Builds & Research',
    description:
      'Actively developing full-stack architectures (Smart Campus Automation) and real-time computer vision kinematics platforms (Physiosis with Google MediaPipe), alongside academic coursework.',
    tag: 'Active Engineering',
  },
  {
    year: '2028',
    title: 'Expected Undergraduate Graduation',
    organization: 'B.Tech in Computer Science and Engineering',
    description:
      'Anticipated completion of B.Tech CSE degree at GRIET, transitioning to full-time Software Engineering and AI Systems roles at top engineering companies.',
    tag: 'Future Horizon',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-ml-ds',
    name: 'Machine Learning & Data Science Certification',
    issuer: 'Professional Credential',
  },
  {
    id: 'cert-openshift',
    name: 'Red Hat Academy – OpenShift Administration',
    issuer: 'Red Hat Verified',
  },
  {
    id: 'cert-python',
    name: 'Python Programming Certification',
    issuer: 'Verified Credential',
  },
  {
    id: 'cert-sql-dbms',
    name: 'SQL & Database Management Systems',
    issuer: 'Verified Credential',
  },
  {
    id: 'cert-powerbi',
    name: 'Power BI for Data Analytics & Visualization',
    issuer: 'Verified Credential',
  },
];

export const HOW_I_BUILD_PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'BUILD WITH FIRST PRINCIPLES',
    summary: 'Analyze complexity and core constraints before writing code.',
    detail:
      'Identify operational bottlenecks, memory allocations, and latency budgets before architecting software. Prefer idiomatic, testable, and maintainable systems over superficial layers.',
  },
  {
    number: '02',
    title: 'OPTIMIZE FOR SCALE & METRICS',
    summary: 'Quantify performance and measure execution.',
    detail:
      'Whether computing Euclidean joint angles in <35ms with Google MediaPipe or indexing MongoDB schemas for sub-85ms REST endpoints, engineering excellence is proven by measurable telemetry.',
  },
  {
    number: '03',
    title: 'CONTINUOUS CODE ITERATION',
    summary: 'Refactor relentlessly and maintain production rigor.',
    detail:
      'Enforce strict typing, clean separation of concerns, and automated build pipelines so systems remain rock-solid from local development to global Vercel edge deployment.',
  },
];

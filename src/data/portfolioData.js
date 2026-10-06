// Portfolio data for Satyam Pandey
// All information is organized into simple arrays and objects so you can easily modify it.

export const personalInfo = {
  name: "Satyam Pandey",
  role: "Aspiring Java Backend Developer",
  shortIntro: "B.Tech Computer Science student focused on Java, Spring Boot, backend development and Data Structures & Algorithms.",
  about: [
    "I am a B.Tech Computer Science & Engineering student at Sandip University, Nashik, with a focused interest in Java Backend Development.",
    "My technical journey centers around building reliable, high-performance backends. I work with Core Java, Spring Boot, Spring Security, Spring Data JPA, RESTful APIs, and MySQL, practicing industry-standard layered architecture (Controller-Service-Repository-DTO) and transactional database integrity.",
    "I actively strengthen my problem-solving skills with over 210+ Data Structures & Algorithms problems solved on LeetCode. I am eager to apply my skills to real-world backend engineering and collaborative software development."
  ],
  educationSummary: "Sandip University, Nashik (2024 – 2028) | CGPA: 8.64 / 10",
  highlights: ["Java", "Spring Boot", "REST APIs", "MySQL", "DSA"]
};

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "C++", "SQL", "Python"]
  },
  {
    title: "Backend Frameworks",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Spring MVC",
      "Hibernate",
      "JDBC",
      "Servlets"
    ]
  },
  {
    title: "Architecture & APIs",
    skills: [
      "RESTful APIs",
      "Layered Architecture",
      "Controller-Service-Repository",
      "DTO Pattern",
      "JSON"
    ]
  },
  {
    title: "Database & Data Management",
    skills: [
      "MySQL",
      "Relational Database",
      "ACID Transactions",
      "Entity Relationships",
      "JPQL"
    ]
  },
  {
    title: "Developer Tools & Testing",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "JUnit Basics"
    ]
  },
  {
    title: "Core Concepts",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Multithreading",
      "Concurrency"
    ]
  }
];

export const experienceData = [
  {
    company: "ThinkBuild",
    location: "Nashik, Maharashtra",
    role: "Web Developer Intern",
    status: "Currently working",
    description: "Currently gaining practical development experience as a Web Developer Intern at ThinkBuild, Nashik, building responsive web applications using React, Tailwind CSS, and modern web technologies."
  }
];

// STRICT RULE: Exactly 2 projects. No fake third project, no Face Punch Detection.
export const projectsData = [
  {
    id: "thinkbuild-homepage",
    name: "ThinkBuild Homepage",
    category: "Web Development",
    isDeployed: true,
    description: "Responsive homepage project developed during my internship at ThinkBuild.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    highlights: [
      "Developed responsive layout optimized for mobile and desktop screens",
      "Implemented clean, modular React component architecture",
      "Live deployment accessible on Vercel"
    ],
    liveUrl: "https://think-build-home-page.vercel.app/",
    githubUrl: "https://github.com/satyampandeycodes",
    liveBtnText: "Live Demo",
    codeBtnText: "GitHub Profile"
  },
  {
    id: "bookmyshow-backend",
    name: "BookMyShow Backend API",
    category: "Java Backend Development",
    isDeployed: false, // NOT deployed - no live demo
    description: "Movie ticket booking backend developed using Spring Boot and layered architecture.",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Maven"],
    highlights: [
      "Engineered Controller → Service → Repository → DTO layered architecture",
      "Enforced atomic booking workflows with @Transactional execution and ACID guarantees",
      "Designed database relationships across 6+ entities with JPQL seat availability queries",
      "Built centralized error handling via @RestControllerAdvice with custom ApiError responses",
      "Verified 10+ REST endpoints end-to-end using Postman"
    ],
    githubUrl: "https://github.com/satyampandeycodes",
    codeBtnText: "View Code"
  }
];

export const educationData = [
  {
    institution: "Sandip University, Nashik",
    degree: "B.Tech – Computer Science & Engineering",
    period: "2024 – 2028",
    score: "CGPA: 8.64 / 10",
    description: "Undergraduate study focusing on Core Computer Science subjects, Software Engineering, Object-Oriented Programming, and Data Structures."
  },
  {
    institution: "Saraswati Vidya Mandir Senior Secondary School",
    degree: "Senior Secondary (Class XII)",
    period: "Completed",
    score: "76.33%",
    description: "Science stream with strong emphasis on Mathematics and Computer fundamentals."
  },
  {
    institution: "Saraswati Vidya Mandir Senior Secondary School",
    degree: "Secondary (Class X)",
    period: "Completed",
    score: "93.66%",
    description: "Graduated with distinction and academic excellence."
  }
];

export const achievementsData = [
  {
    title: "210+ DSA Problems Solved",
    subtitle: "LeetCode Problem Solving",
    description: "Completed 210+ Data Structures and Algorithms problems on LeetCode."
  },
  {
    title: "Academic Performance",
    subtitle: "Sandip University",
    description: "Maintained an 8.64 CGPA in B.Tech Computer Science & Engineering."
  }
];

export const leadershipData = [
  {
    title: "NASA Space Apps Challenge",
    role: "Participant",
    description: "Participated in the international NASA Space Apps Challenge and collaborated with a team during the hackathon."
  },
  {
    title: "Tech Charades",
    role: "Volunteer",
    description: "Volunteered at the Tech Charades event and supported event activities."
  },
  {
    title: "Pandit Deendayal Upadhyay Rojgar Mahakumbh",
    role: "Organizer",
    description: "Contributed as an organizer for Pandit Deendayal Upadhyay Rojgar Mahakumbh."
  }
];

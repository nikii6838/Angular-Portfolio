export const CONTACT = {
  name: 'Nikita Mane',
  email: 'maneni1109@gmail.com',
  phone: '+91 8975716366',
  phoneTel: '+918975716366',
  /** WhatsApp click-to-chat (digits only, no +) */
  waWhatsApp: '918975716366',
  linkedinSlug: 'nikiita-mane',
  linkedinUrl: 'https://www.linkedin.com/in/nikiita-mane',
} as const;

export const HERO_TAGLINE =
  'Frontend Developer with 3 years of experience building responsive Angular apps. Strong in TypeScript, REST APIs, performance optimization, Git, and turning requirements into user-centric solutions.';

export const PROFESSIONAL_SUMMARY =
  'Frontend Developer with 3 years of experience in building responsive and dynamic web applications using Angular. Skilled in HTML, CSS, Bootstrap, JavaScript, and TypeScript with strong understanding of API integration and RESTful services. Experienced in improving website performance, optimizing load time, and creating reusable components. Possess basic knowledge of MySQL and good working knowledge of Git and GitHub for version control and team collaboration. Strong ability to understand business requirements and translate them into efficient, user-centric frontend solutions.';

export const SERVICES_OFFERED = [
  'Responsive Angular applications and reusable component libraries',
  'RESTful API integration, RxJS data flows, and performance optimization',
  'SEO-oriented delivery and cloud (GCP) deployment support',
  'RBAC, workflows, and role-based admin experiences',
  'Agile delivery with Git, Jira, and cross-team collaboration',
] as const;

export const TECHNICAL_SKILLS: ReadonlyArray<{ category: string; detail: string }> =
  [
    {
      category: 'Frontend',
      detail:
        'Angular (10+), TypeScript, JavaScript, HTML, CSS, Angular Material, Bootstrap',
    },
    {
      category: 'Angular core',
      detail:
        'Components, Directives, Services, Routing, Lazy Loading, Pipes',
    },
    {
      category: 'State & data',
      detail: 'RxJS, HTTP Client, API integration, basic NgRx',
    },
    {
      category: 'Backend (basic)',
      detail: 'REST APIs, Node.js, Express (basic)',
    },
    {
      category: 'Database',
      detail: 'Basic MongoDB / MySQL, query understanding',
    },
    {
      category: 'Tools',
      detail:
        'Git, GitHub, VS Code, Postman, Jira, ChatGPT, Cursor, Antigravity',
    },
  ];

export const PROJECTS: ReadonlyArray<{
  company: string;
  projectName: string;
  period: string;
  client: string;
  role: string;
  description: string;
  url: string;
  responsibilities: readonly string[];
  environment: string;
}> = [
  {
    company: 'CodingEra Software Pvt Ltd',
    projectName: 'Performance Accessories',
    period: "Oct 2024 – Present",
    client: 'Performance Accessories',
    role: 'Angular Developer',
    description:
      'Performance Accessories designs and delivers precision-engineered flooring trims, transitions, stair solutions, and installation tools that help professionals achieve high-quality, seamless floor finishes. Developed scalable Angular solutions with GCP integration for high-performance web applications.',
    url: 'https://www.performanceaccessories.com/',
    responsibilities: [
      'Understood and analyzed client requirements to develop and deliver Angular solutions; implemented SEO tasks and GCP deployment steps to improve online visibility and performance.',
      'Built scalable front-end modules using Angular (RxJS, NgRx, reusable components) and integrated RESTful APIs developed using Node.js, ensuring end-to-end functionality.',
      'Communicated with the client on daily priorities and ensured smooth GCP-hosted project execution.',
      'Worked on data handling and API integration with efficient data flow between frontend and backend.',
      'Provided ongoing support, updates, and GCP maintenance for stable and secure application performance.',
      'Used Git for version control and Jira for sprint and issue tracking in Agile/Scrum.',
    ],
    environment:
      'Angular v18–v20, Ionic, Node.js, Express.js, MongoDB, GCP, HTML5, CSS3, JavaScript, TypeScript, Bootstrap, JSON, Git, Jira, VS Code, UI/UX design',
  },
  {
    company: 'CodingEra Software Pvt Ltd',
    projectName: 'Lotto Social',
    period: 'Jan 2024 – Oct 2024',
    client: 'Hatchster',
    role: 'Angular Developer',
    description:
      'Lotto Social is a lottery management system for lotteries, games, and user syndicates. Developed scalable Angular applications with GCP integration for real-time user engagement.',
    url: 'https://lottosocial.com/',
    responsibilities: [
      'Participated in sprint planning, story pointing, and design discussions for Angular-based applications.',
      'Collaborated with offshore teams to troubleshoot GCP-based production issues.',
      'Designed modules for campaign planning, hoarding inventory, and site allocation.',
      'Implemented role-based access control (RBAC) for admins, vendors, and internal users.',
      'Automated booking, approval workflows, and rate card management.',
      'Built responsive UI with Angular, HTML, CSS, Bootstrap, and JavaScript.',
      'Implemented backend services with Node.js and SQL integration; integrated RESTful APIs.',
      'Enabled vendor coordination, billing automation, and real-time campaign monitoring.',
      'Used Git and Jira; continuous improvements and GCP optimizations.',
    ],
    environment:
      'Angular 11–12, React.js, Node.js, Express.js, MongoDB, Ionic, GCP, Firebase, Cloud Functions, Firestore, HTML5, CSS3, JavaScript, TypeScript, Git, Jira, VS Code, ClickUp',
  },
  {
    company: 'Zest India IT Pvt Ltd',
    projectName: 'Lumiere32',
    period: "Mar 2023 – Nov 2023",
    client: 'Lumiere32, Singapore',
    role: 'Intern Angular Developer',
    description:
      'Lumiere32 is a medical supplies marketplace streamlining the healthcare ecosystem for manufacturers, dealers, and clinicians.',
    url: 'https://lumiere32.my/',
    responsibilities: [
      'Gathered and analyzed client requirements.',
      'Daily communication with clients on progress and requirement changes.',
      'Worked with designers on wireframes and new features.',
      'Improved platform performance and utilization.',
      'Collaborated on design, development, and testing of features.',
      'Implemented API for Challenge Module.',
      'Troubleshooting and defect resolution.',
      'Production deployment and performance monitoring.',
    ],
    environment:
      'Angular, MySQL, MongoDB, HTML5, CSS, JavaScript, JSON, TypeScript, Bootstrap, Visual Studio .NET',
  },
];

export const EDUCATION = {
  institution: 'Maharshi Karve Stree Shikshan, Pune',
  degree: 'Master of Business Administration',
  period: '2021 – 2023',
  grade: 'CGPA: 8.05',
} as const;

export const OTHER_DETAILS = {
  languages: ['English', 'Hindi', 'Marathi'],
  address: 'Hinjewadi, Pune – 411057',
} as const;

export const DECLARATION =
  'I hereby declare that all the information mentioned above is true and correct to the best of my knowledge and belief.';

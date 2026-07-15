export const featuredProjects = [
  {
    id: 'aimops',
    name: 'AIMOPS',
    subtitle: 'AI-Driven Marketing & Operations Predicting System',
    tag: 'Graduation Project',
    year: '2026',
    description:
      'An AI-powered SaaS platform that gives small retail businesses forecasting and operations intelligence usually reserved for enterprise tooling — demand prediction, campaign performance, and event impact, in one multilingual dashboard.',
    problem:
      "Small retail businesses make inventory and marketing decisions on gut feeling because forecasting tools are built for enterprises with data teams. AIMOPS packages sales forecasting, demand prediction, and campaign analysis into a self-serve dashboard a small business owner can actually read.",
    myContribution:
      "I own the frontend architecture end-to-end: a scalable, feature-based React structure (features/auth, features/events, features/analytics, features/campaigns) built for a growing codebase and a multilingual, multi-contributor team.",
    architecture: [
      'Feature-based folder structure — each domain (auth, events, analytics, campaigns) is self-contained with its own components, hooks, and API layer',
      'Context API for global state — auth session, language/direction, and theme',
      'React Router with protected routes; authentication redirects into /app/overview',
      'Large forecasting modules split into focused components, hooks, and utils with zero logic changes — kept the codebase reviewable as it grew',
    ],
    features: [
      { label: 'Dashboard', detail: 'Unified overview of forecasts, events, and campaign health' },
      { label: 'Forecasting', detail: 'Sales & demand prediction views with drill-down detail pages' },
      { label: 'Campaigns', detail: 'Campaign and event impact analysis' },
      { label: 'Reports', detail: 'Exportable summaries for business decision-making' },
      { label: 'Business Profile', detail: 'Company and product configuration' },
      { label: 'Authentication', detail: 'Secure login flow with route protection' },
      { label: 'Internationalization', detail: 'Full English + Arabic support via react-i18next, including RTL layout using CSS logical properties' },
      { label: 'Charts', detail: 'Interactive analytics dashboards built with Apache ECharts' },
      { label: 'Responsive UI', detail: 'Consistent experience from desktop to mobile' },
    ],
    lessonsLearned:
      "Refactoring large, already-shipping forecasting pages into smaller components taught me how to change structure without touching behavior — and how much a consistent feature-based layout pays off once a team of contributors starts working in the same codebase.",
    tech: ['React', 'React Router', 'Context API', 'react-i18next', 'Apache ECharts', 'RTL/i18n'],
    links: { github: '#', demo: '#', caseStudy: '#' },
  },
  {
    id: 'space-haven',
    name: 'Space Haven',
    subtitle: 'NASA Space Apps Challenge 2025 — National Finalist, Palestine',
    tag: 'Hackathon',
    year: '2025',
    description:
      'A web platform that makes space-habitat architecture design interactive and accessible, combining real-time 3D scenes with AI-assisted asset generation.',
    problem:
      'Space architecture concepts are usually locked inside technical papers and static renders. Space Haven turns habitat design into something people can explore and manipulate directly in the browser.',
    myContribution:
      'Contributed to building the interactive web platform, integrating Three.js 3D scenes with AI-assisted asset generation to visualize habitat concepts in real time.',
    features: [
      { label: '3D Scenes', detail: 'Interactive Three.js environments for exploring habitat layouts' },
      { label: 'AI-Assisted Assets', detail: 'AI-generated visual assets integrated into the design flow' },
    ],
    tech: ['Three.js', 'JavaScript', 'AI-assisted generation'],
    result: 'Selected as one of a small number of national finalist teams in Palestine out of the full 2025 challenge cohort.',
    links: { github: '#', demo: '#', caseStudy: '#' },
  },
  {
    id: 'kidzy',
    name: 'Kidzy',
    subtitle: 'Gamified Learning Management System',
    tag: 'Team Project',
    year: '2026',
    description:
      'A gamified LMS for children aged 6–12, with course management, quizzes, an XP reward system, and unlockable games — built and presented as a team.',
    problem:
      'Young learners disengage from flat, form-based LMS tools. Kidzy wraps course progress in game mechanics — XP, rewards, and unlockable content — to keep children motivated.',
    myContribution:
      'Built frontend features using React and Material UI, including canvas-based interactive elements, as part of a team that presented the finished platform at Bethlehem University\'s Graduation Project showcase.',
    features: [
      { label: 'Course Management', detail: 'Structured lessons and progress tracking for young learners' },
      { label: 'Quizzes', detail: 'Interactive knowledge checks tied to XP rewards' },
      { label: 'XP & Rewards', detail: 'Gamified progression system to sustain engagement' },
      { label: 'Unlockable Games', detail: 'Canvas-based mini-games unlocked through progress' },
    ],
    tech: ['Java Spring Boot', 'React.js', 'Material UI', 'React Canvas'],
    links: { github: '#', demo: '#', caseStudy: '#' },
  },
];

export const additionalProjects = [
  {
    id: 'perfume-store',
    name: 'E-Commerce Perfume Store',
    description: 'A responsive e-commerce storefront with a modern UI, built with HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: { github: '#', demo: '#' },
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Site',
    description: 'An earlier personal portfolio designed and built to showcase projects and technical skills.',
    tech: ['React', 'CSS'],
    links: { github: '#', demo: '#' },
  },
  {
    id: 'ieeextreme',
    name: 'IEEEXtreme 18.0 & 17.0',
    description: "Competed in IEEE's global 24-hour programming competitions, solving algorithmic challenges in Python and Java.",
    tech: ['Python', 'Java', 'Algorithms'],
    links: { github: '#' },
  },
];

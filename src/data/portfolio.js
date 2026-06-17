export const personal = {
  name: 'Ravikiran',
  role: 'Frontend Engineer',
  company: 'Bodsphere',
  tagline: 'Crafting premium digital experiences that move people.',
  bio: "Frontend Engineer at Bodsphere with a passion for cinematic UI, performant architecture, and interfaces that feel alive. I bridge design and engineering to ship products users genuinely love.",
  email: 'ravikiranrta@gmail.com',
  github: 'https://github.com/Ravikirannnnn',
  linkedin: 'https://www.linkedin.com/in/ravi-kiran-186690243/',
  instagram: 'https://www.instagram.com/____mr_____nayaka______/',
  resumeUrl: '/Resume.pdf',
  location: 'India',
  available: true,
}

export const roles = [
  'Frontend Engineer',
  'UI Craftsman',
  'React Specialist',
  'Motion Designer',
  'Product Engineer',
]

export const stats = [
  { value: '1.6', label: 'Years Experience', suffix: '+' },
  { value: '10', label: 'Features Released', suffix: '+' },
  { value: '30', label: 'Load Optimization', suffix: '%' },
  { value: '50K', label: 'Lines of Code', suffix: '+' },
]

export const skills = [
  {
    category: 'Core Stack',
    color: '#8b5cf6',
    items: [
      { name: 'React.js', level: 96, icon: '⚛️' },
      { name: 'Redux', level: 88, icon: '🔄' },
      { name: 'JavaScript (ES2024)', level: 96, icon: '🟨' },
      { name: 'API Integration ', level: 92, icon: '🔌' },
    ],
  },
  {
    category: 'Styling & Motion',
    color: '#3b82f6',
    items: [
      { name: 'CSS / SCSS', level: 96, icon: '💅' },
      { name: 'Tailwind CSS', level: 90, icon: '🎨' },
      { name: 'Framer Motion', level: 88, icon: '✦' },
      { name: 'Responsive Design', level: 92, icon: '📱' },
    ],
  },
{
  category: 'Professional Skills',
  color: '#22d3ee',
  items: [
    { name: 'Debugging', level: 90, icon: '🐞' },
    { name: 'Code Review', level: 85, icon: '📝' },
    { name: 'Git & GitHub', level: 85, icon: '🌿' },
    { name: 'Problem Solving', level: 90, icon: '🧩' },
  ],
},
  {
    category: 'Engineering',
    color: '#34d399',
    items: [
      { name: 'Performance Opt.', level: 88, icon: '🚀' },
      { name: 'Realtime Systems', level: 82, icon: '📡' },
      { name: 'Accessibility', level: 85, icon: '♿' },
      { name: 'CI/CD & Git', level: 80, icon: '🔧' },
    ],
  },
]

export const experience = [
{
  id: 1,
  company: 'Bodsphere',
  role: 'Frontend Engineer',
  period: '2025 – Present',
  location: 'Remote',
  current: true,
  description:
    'Developed and scaled key features for Bodsphere’s wellness platform using React.js, including institutional subscription management, music streaming, challenge systems, analytics dashboards, support tools, and video streaming experiences. Built responsive user interfaces, integrated real-time communication, authentication, and data-driven workflows across multiple products.',
  achievements: [
    'Built Institutional Dashboard enabling organizations to manage bulk wellness subscriptions and user onboarding',
    'Developed Spotify-style music streaming experience with playlists, playback controls, and seamless user interaction',
    'Created Challenge, Leaderboard, Achievement, and Progress Tracking modules to drive user engagement',
    'Built Support Dashboard and Admin Panel for content, user, and operational management',
    'Developed high-converting landing pages for Meta Ads campaigns and marketing initiatives',
    'Integrated Google and Apple authentication along with secure user onboarding flows',
    'Implemented real-time chat functionality using WebSockets',
    'Integrated analytics and reporting dashboards for business insights and user activity tracking',
    'Enhanced video streaming experience using Shaka Player for adaptive media playback',
  ],
  tags: [
    'React.js',
    'Redux',
    'REST APIs',
    'WebSockets',
    'Shaka Player',
    'Google Auth',
    'Apple Auth',
    'Analytics',
  ],
  color: '#8b5cf6',
},
{
  id: 2,
  company: 'Hiyaak Systems',
  role: 'Frontend Developer Intern',
  period: '2024 – 2025',
  location: 'On-site',
  current: false,
  description:
    'Worked as a Frontend Developer Intern, contributing to multiple web applications while building a strong foundation in React.js and the MERN stack. Collaborated with senior developers to develop user interfaces, integrate APIs, and deliver production-ready features across client projects.',
  achievements: [
    'Contributed to projects including Razmatazz, Solipie, Scratch & Win, and other client applications',
    'Developed responsive user interfaces using React.js, JavaScript, HTML, and CSS',
    'Integrated REST APIs and implemented dynamic data-driven features',
    'Gained hands-on experience with MERN stack development and modern frontend workflows',
    'Collaborated with team members on feature development, debugging, and testing',
    'Learned industry best practices for version control, code reviews, and application deployment',
  ],
  tags: ['React.js', 'JavaScript', 'MERN Stack', 'REST APIs', 'Git', 'CSS'],
  color: '#3b82f6',
}
]

export const projects = [
  {
    id: 1,
    title: 'Bodsphere',
    subtitle: 'Wellness Streaming Platform',
    description:
      'A full-featured wellness platform with live/on-demand content streaming, interactive dashboards, real-time sync, and a premium media player experience.',
    longDescription:
      'Built with React.js and Firebase, handling real-time content delivery, user authentication, subscription management, and adaptive streaming. Features include live session rooms, progress tracking, guided content playlists, and a cinematic fullscreen player.',
    tags: ['React.js', 'Firebase', 'Framer Motion', 'WebSockets', 'Tailwind CSS'],
    github: '#',
    live: 'https://bodsphere.com/',
    featured: true,
    color: '#8b5cf6',
    gradient: 'from-purple-900/30 to-blue-900/20',
    size: 'large',
  },
{
  id: 2,
  title: 'Institutional Dashboard',
  subtitle: 'Enterprise Subscription Management',
  description:
    'Dashboard enabling institutions to purchase and manage wellness subscriptions in bulk, onboard users, and monitor engagement.',
  longDescription:
    'Built a comprehensive dashboard for organizations to manage bulk subscriptions, user allocations, wellness programs, and reporting. Developed responsive data tables, analytics views, user management workflows, and subscription tracking features.',
  tags: ['React.js', 'Redux', 'REST APIs', 'Analytics'],
  featured: true,
    github: '#',
  live:'https://partner.bodsphere.com/',
  color: '#8b5cf6',
  size: 'large',
},
// {
//   id: 3,
//   title: 'Admin Panel',
//   subtitle: 'Platform Management System',
//   description:
//     'Centralized administration platform for managing users, content, subscriptions, and operational workflows.',
//   longDescription:
//     'Developed a scalable admin panel with advanced filtering, content management, user administration, analytics dashboards, and platform configuration tools used by internal teams.',
//   tags: ['React.js', 'Redux', 'REST APIs'],
//   featured: false,

//   color: '#22d3ee',
//   size: 'large',
// },
{
  id: 4,
  title: 'Support Dashboard',
  subtitle: 'Customer Support Operations',
  description:
    'Internal dashboard enabling support teams to monitor users, resolve issues, and track support activities.',
  longDescription:
    'Built support workflows, user lookup tools, ticket-related interfaces, account management features, and operational dashboards that streamlined customer support processes.',
  tags: ['React.js', 'REST APIs', 'Analytics'],
  featured: false,
        github: '#',
  live:'https://www.bodsphere.com/BodsphereSupport',
  color: '#34d399',
  size: 'medium',
},
// {
//   id: 5,
//   title: 'Marketing Landing Pages',
//   subtitle: 'Meta Ads Campaign Sites',
//   description:
//     'High-conversion landing pages created for digital marketing and acquisition campaigns.',
//   longDescription:
//     'Developed responsive single-page websites optimized for performance, lead generation, and user acquisition campaigns running across Meta advertising platforms.',
//   tags: ['React.js', 'SEO', 'Responsive Design'],
//   featured: false,
//   github: 'https://github.com/Ravikirannnnn/advertise_bodsphere.git',
//   live:'https://landing-ad-bodsphere.vercel.app/',
//   color: '#6366f1',
//   size: 'small',
// },
  {
    id: 6,
    title: 'Scratch & Win',
    subtitle: 'Reward Gamification Platform',
    description:
      'Interactive scratch card reward platform with animated reveals, real-time prize distribution, gamified dashboards, and anti-cheat validation.',
    longDescription:
      'Canvas-based scratch card mechanic with physics-driven particle reveals, real-time prize pool management via Firebase, animated leaderboards, and a reward redemption flow with confetti animations.',
    tags: ['React.js', 'Canvas API', 'Firebase', 'Framer Motion', 'Node.js'],
    github: '#',
    live: '#',
    featured: false,
    color: '#f59e0b',
    gradient: 'from-amber-900/30 to-orange-900/20',
    size: 'medium',
  },
  {
    id: 7,
    title: 'Razzmatazz',
    subtitle: 'Food Ordering Platform',
    description:
      'Premium food ordering experience with animated menu browsing, real-time order tracking, live kitchen dashboard, and smooth checkout flow.',
    longDescription:
      'Built with Next.js and real-time Firebase listeners for live order status updates. Features include a restaurant discovery map, dynamic menu with dietary filters, an animated cart drawer, and a driver tracking interface.',
    tags: ['Next.js', 'Firebase', 'Google Maps API', 'Stripe', 'Tailwind CSS'],
    github: '#',
    live: '#',
    featured: false,
    color: '#f43f5e',
    gradient: 'from-rose-900/30 to-pink-900/20',
    size: 'medium',
  },

]

export const personalProjects = [
 {
  title: 'Digital Wedding Invitation Suite',
  description:
    'Built 3 custom wedding invitation websites featuring RSVP flows, event timelines, photo galleries, Google Maps integration, and mobile-first designs.',

  tech: ['React.js', 'Tailwind CSS', 'Responsive Design'],

  icon: '💍',

  websites: [
    {
      name: 'Wedding Site 1',
      url: 'https://wedding-invitation-maruthe-weds-manjula.vercel.app/',
    },
    {
      name: 'Wedding Site 2',
      url: 'https://vinay-weds-rakshitha-wedding-invita.vercel.app/',
    },
    {
      name: 'Wedding Site 3',
      url: 'https://manoj-weds-anjushree.vercel.app/',
    },
  ],

  github: 'https://github.com/Ravikirannnnn/digital-wedding-card.git',
  color: '#ec4899',
},

  {
    title: 'Eves Beauty Parlor',
    description:
      'Complete salon booking platform built without a backend. Customers can book appointments, submit forms directly to Google Sheets, receive WhatsApp booking notifications, browse services, and contact the salon seamlessly.',

    tech: [
      'React.js',
      'Google Forms',
      'Google Sheets',
      'WhatsApp Integration',
    ],

    icon: '💄',

    live: 'https://eves-beauty-parlor.vercel.app/',
    github: 'https://github.com/Ravikirannnnn/eves-beauty-parlor.git',

    color: '#8b5cf6',
  },

  {
    title: 'Marketing Landing Pages',
    description:
      'High-converting landing pages built for Meta Ads campaigns. Focused on lead generation, responsive UI, fast load times, CTA optimization, and conversion-focused user journeys.',

    tech: [
      'React.js',
      'Landing Pages',
      'Meta Ads',
      'Lead Generation',
    ],

    icon: '📈',

    live: 'https://landing-ad-bodsphere.vercel.app/',
    github: 'https://github.com/Ravikirannnnn/advertise_bodsphere.git',

    color: '#06b6d4',
  },
]

export const musicTracks = [
  { id: 1, title: 'Ambient Flow', artist: 'Bodsphere Sessions', duration: '4:32', album: 'Wellness Vol. 1', color: '#8b5cf6' },
  { id: 2, title: 'Deep Focus', artist: 'Mindwave', duration: '6:15', album: 'Focus Beats', color: '#3b82f6' },
  { id: 3, title: 'Morning Rise', artist: 'Solar Collective', duration: '3:47', album: 'Dawn Series', color: '#22d3ee' },
  { id: 4, title: 'Neon Dreams', artist: 'Synthwave Studio', duration: '5:02', album: 'Night Drive', color: '#a78bfa' },
  { id: 5, title: 'Equilibrium', artist: 'Balance Audio', duration: '7:22', album: 'Centered', color: '#34d399' },
]

export const dashboardStats = [
  { label: 'Components Built', value: 500, suffix: '+', icon: '⚛️', color: '#8b5cf6' },
  { label: 'API Integrations', value: 500, suffix: '+', icon: '🔌', color: '#3b82f6' },
  { label: 'Load Optimization', value: 30, suffix: '%', icon: '🚀', color: '#22d3ee' },
  { label: 'PRs Merged', value: 300, suffix: '+', icon: '🔀', color: '#34d399' },
]

export const achievements = [
  {
    icon: '🚀',
    title: '30% Load Optimization',
    description: 'Slashed initial load time by 30% via dynamic imports, route-based code splitting, image optimization pipelines, and critical CSS inlining.',
    metric: '30% faster',
    color: '#8b5cf6',
  },
  {
    icon: '⚡',
    title: 'Realtime Architecture',
    description: 'Designed and shipped real-time data sync systems using Firebase Realtime Database and WebSockets, handling concurrent users with sub-100ms latency.',
    metric: '<100ms latency',
    color: '#3b82f6',
  },
  {
    icon: '🔌',
    title: 'API Integration Expert',
    description: 'Integrated 10+ complex third-party APIs including payment gateways, mapping services, streaming providers, auth systems, and analytics platforms.',
    metric: '10+ APIs',
    color: '#22d3ee',
  },
  {
    icon: '🌐',
    title: 'Cross-Browser Mastery',
    description: 'Zero cross-browser regression policy: comprehensive compatibility across Chrome, Firefox, Safari, and Edge including iOS and Android mobile browsers.',
    metric: '0 regressions',
    color: '#34d399',
  },
  {
    icon: '✦',
    title: 'Motion Design System',
    description: 'Built a reusable animation system with Framer Motion — spring physics, scroll-linked transitions, micro-interactions, and GPU-optimized keyframes.',
    metric: '50+ interactions',
    color: '#a78bfa',
  },
  {
    icon: '📐',
    title: 'Scalable UI Engineering',
    description: 'Architected component libraries consumed across 3 products. Enforced atomic design, accessibility standards, token-based theming, and Storybook docs.',
    metric: '3 products',
    color: '#f59e0b',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// ─── PORTFOLIO DATA ─────────────────────────────────────────────
// Single source of truth for all content. Update here to reflect everywhere.

export const personal = {
  name: 'Piyush Rana',
  tagline: 'RANA.DEV',
  email: 'prajput1236@gmail.com',
  mobile: '+91 8168170060',
  linkedin: 'https://www.linkedin.com/in/piyush-rana31/',
  github: 'https://www.github.com/piyushrana31',
  cgpa: '8.6',
  leetcode: '300+',
  university: 'LPU, Punjab',
  roles: [
    'Full Stack Developer',
    'MERN Stack Engineer',
    'Problem Solver',
    'CS Engineer @ LPU',
    'Open Source Enthusiast',
  ],
  bio: [
    "It all started with a simple curiosity — how ideas turn into real, usable digital experiences. That curiosity led me to Computer Science Engineering at Lovely Professional University, where I’ve been building both a strong academic base and a problem-solving mindset.",
    "Over time, coding became more than just coursework. With the MERN stack, I enjoy turning ideas into full-fledged applications — from pet care systems to platforms with real-world impact — focusing on clean design, performance, and purpose.",
    "Beyond projects, I’m constantly sharpening my thinking through problem-solving on LeetCode, where I’ve solved 300+ problems. And when I’m not doing that, you’ll likely find me in a hackathon, thriving in fast-paced environments that push me to build, adapt, and grow."
  ],
  stats: [
    { value: '8.6', label: 'CGPA' },
    { value: '300+', label: 'DSA Qs' },
    { value: '6+', label: 'Projects' },
    { value: '8', label: 'Badges' },
  ],
}

export const skills = [
  {
    name: 'Languages',
    icon: '💻',
    color: '#00f5ff',
    items: ['C++', 'JavaScript', 'Python', 'C'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: '#ff6b9d',
    items: ['React', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    color: '#ffd700',
    items: ['NodeJS', 'ExpressJS', 'REST APIs'],
  },
  {
    name: 'Database',
    icon: '🗄️',
    color: '#7c3aed',
    items: ['MongoDB', 'MySQL'],
  },
  {
    name: 'Tools & Platforms',
    icon: '🛠️',
    color: '#10b981',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    name: 'Soft Skills',
    icon: '🧠',
    color: '#ff6b35',
    items: ['Problem-Solving', 'Team Player', 'Adaptability', 'Active Listening'],
  },
]

export const education = [
  {
    year: 'Aug 2023 – Present',
    inst: 'Lovely Professional University',
    loc: 'Phagwara, Punjab',
    degree: 'B.Tech – Computer Science & Engineering',
    score: 'CGPA: 8.6',
    icon: '🎓',
    color: '#00f5ff',
  },
  {
    year: 'Mar 2020 – May 2022',
    inst: 'Delhi Public School',
    loc: 'Ballabgarh, Haryana',
    degree: 'Intermediate (PCM)',
    score: '94%',
    icon: '📚',
    color: '#ffd700',
  },
  {
    year: 'Mar 2019 – May 2020',
    inst: 'Rattan Convent School',
    loc: 'Ballabgarh, Haryana',
    degree: 'Matriculation',
    score: '95.8%',
    icon: '🏫',
    color: '#ff6b9d',
  },
]

export const projects = [
  {
    name: 'PetCare System',
    icon: '🐾',
    color: '#00f5ff',
    period: 'Mar 2025 – May 2025',
    desc: 'A complete platform to track pet health with modern interactive UI and full backend integration.',
    fullDesc: 'Designed a complete PetCare System with modern interactive UI, fully integrated backend, and dynamic end-to-end architecture demonstrating high-performance platform development.',
    tech: ['React', 'NodeJS', 'ExpressJS', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/piyushrana31/PetCare',
    live: '#',
  },
  {
    name: 'Agristat',
    icon: '🌾',
    color: '#ffd700',
    period: 'May 2025 – Present',
    desc: 'Agristat delivers smart agricultural insights using data analytics and visualizations, enabling farmers and users to track trends.',
    fullDesc: 'Agristat is a data-driven platform that provides agricultural insights and statistics, helping users analyze trends, make informed decisions, and improve productivity through clear visualizations.',
    tech: ['TailwindCSS', 'ReactJS', 'NodeJs', 'ExpressJS', 'MongoDB'],
    github: 'https://github.com/piyushrana31/Agristat',
    live: '#',
  },
  {
    name: 'AlertLearn',
    icon: '🚨',
    color: '#ff6b9d',
    period: 'Oct 2025 – Present',
    desc: 'Disaster preparedness platform with multi-role dashboards — students, teachers, government, parents.',
    fullDesc: 'A multi-stakeholder disaster-preparedness platform with 5 tailored dashboards. Nominated for SIH at LPU among 2000+ participants. Showcases complex role-based access and system design.',
    tech: ['React', 'NodeJS', 'ExpressJS', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/piyushrana31/alertLearn',
    live: '#',
  },
]

export const trainings = [
  {
    name: 'MERN Stack Development',
    org: 'Cipher Schools',
    period: 'May 2025 – Jun 2025',
    icon: '🏫',
    color: '#00f5ff',
    points: [
      'Built fully functional web apps using MongoDB, ExpressJS, React, NodeJS.',
      'Understood backend architecture, API logic, and frontend-backend integration.',
      'Developed a Daily Habit Tracker with user-friendly interactive UI.',
    ],
  },
]

export const certificates = [
  {
    name: 'Full Stack Web Development',
    by: 'Dr. Angela Yu',
    date: 'Oct 2024',
    icon: '🌐',
    color: '#00f5ff',
    show: 'https://drive.google.com/file/d/1T04idEEizN2hxCnHnVmFP-Ml0slvtrJd/view?usp=drive_link',
    image: '/Angel Yu.png'
  },
  {
    name: 'Computer Networks: Bits and Bytes',
    by: 'Google',
    date: 'Sep 2024',
    icon: '🔗',
    color: '#ffd700',
    show: 'https://drive.google.com/file/d/1wTanHG9fHUlxHK0juf_rb_LtWOIuUzxy/view?usp=drive_link',
    image: '/Google.png'
  },
  {
    name: 'Computational Theory: Finite Automata',
    by: 'Infosys',
    date: 'Aug 2025',
    icon: '🤖',
    color: '#7c3aed',
    show: 'https://drive.google.com/file/d/11tdI0qVu0oG1i0O5lJkgyCgqWIQAgg92/view?usp=drive_link',
    image: '/Infosys.png'
  },
  {
    name: 'AI: Basics to Advanced',
    by: 'Udemy',
    date: 'Sep 2025',
    icon: '🧠',
    color: '#ff6b9d',
    show: 'https://drive.google.com/file/d/1u-6piN_Z6wqMKIauCp3pfpuZLVcR1P9P/view?usp=drive_link',
    image: '/Udemy.png'
  },
]

export const achievements = [
  {
    title: 'SIH Nominee',
    desc: 'Nominated among 2000+ participants for Smart India Hackathon 2025 at LPU.',
    icon: '🏆',
    color: '#ffd700',
  },
  {
    title: '300+ LeetCode Problems',
    desc: 'Solved over 300 coding challenges across Easy, Medium, and Hard difficulty levels.',
    icon: '⚔️',
    color: '#00f5ff',
  },
  {
    title: '50-Day Coding Badge',
    desc: 'Maintained a consistent 50+ day consecutive coding streak on LeetCode.',
    icon: '🔥',
    color: '#ff6b35',
  },
  {
    title: '100-Day Coding Badge',
    desc: 'Achieved 100+ consecutive days of coding dedication on LeetCode platform.',
    icon: '💎',
    color: '#7c3aed',
  },
]

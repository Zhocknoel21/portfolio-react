// All the site's content lives here. Edit this file to change text,
// skills, projects or links — no need to touch the components.

export const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

export const navItems = [
  { id: 'home', label: 'home.tsx' },
  { id: 'about', label: 'about.md' },
  { id: 'skills', label: 'skills.json' },
  {
    id: 'projects',
    label: 'projects/',
    children: [
      { href: '#proj-web', label: 'Web Development' },
      { href: '#proj-mobile', label: 'Mobile Development' },
      { href: '#projects', label: 'All Projects' },
    ],
  },
  { id: 'education', label: 'education.md' },
];

export const focusAreas = [
  { icon: '🧩', title: 'End-to-end web apps', text: 'Building from the database up to the interface.' },
  { icon: '📱', title: 'Mobile development', text: 'Learning Flutter & Dart to build cross-platform apps.' },
  { icon: '🎨', title: 'UI/UX design', text: 'Practicing clean, usable interface design.' },
];

export const skillGroups = [
  { name: 'languages', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Dart'] },
  { name: 'platforms & data', tags: ['MySQL', 'Firebase', 'Flutter'] },
  { name: 'tools & practice', tags: ['Git', 'GitHub', 'UI/UX Design'] },
];

export const projects = [
  {
    id: 'proj-web',
    title: 'Sport Tournament Management System',
    description:
      'A web-based system designed to manage sports tournaments — teams, matches, scores, and tournament information — in one place.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
    status: 'web app',
  },
  {
    id: 'proj-mobile',
    title: 'Coffee Shop Mobile App',
    description:
      'A Flutter-based coffee shop application that lets users browse products, manage their cart, place orders, and view order history.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    status: 'mobile app',
  },
  {
    id: null,
    title: 'Other web projects',
    description:
      'A growing collection of websites and applications built while learning and practicing web development.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'ongoing',
  },
];

export const education = {
  badge: 'in progress',
  degree: 'Bachelor of Science in Computer Science',
  school: 'Tangub City Global College',
  text: 'Currently developing my skills in programming, software development, databases, and system design.',
};

export const contactLinks = [
  {
    label: 'email',
    icon: 'assets/gmail.jpg',
    alt: 'Gmail',
    href: 'https://mail.google.com/mail/u/0/#inbox',
    text: 'zhocknoel2@gmail.com',
  },
  {
    label: 'github',
    icon: 'assets/github.webp',
    alt: 'GitHub',
    href: 'https://github.com/zhock19',
    text: 'github.com/zhock19',
  },
  {
    label: 'facebook',
    icon: 'assets/facebook.png',
    alt: 'Facebook',
    href: 'https://www.facebook.com/',
    text: 'Zhock Noel',
  },
];

export const FORM_ENDPOINT = 'https://formsubmit.co/ajax/zhocknoel2@gmail.com';

// gitprofile.config.js

const config = {
  github: {
    username: 'sumanthtatipamula', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sumanthtatipamula',
    twitter: 'tatipamula_s',
    facebook: '',
    instagram: 'sumanthtatipamula',
    dribbble: '',
    behance: '',
    medium: 'sumanthtatipamula999',
    dev: 'sumanthtatipamula',
    stackoverflow: '', // format: userid/username
    website: 'https://sumanthtatipamula.github.io',
    phone: '',
    email: 'sumanthtatipamula999@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1wyNo7k5ipHOe-HyHbiyyxV3tvJgAfcig/view?usp=sharing',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Oracle',
      position: 'Platform Software Engineer',
      from: 'September 2020',
      to: 'Present',
      companyLink: 'https://www.oracle.com',
    },
    {
      company: 'Amazon',
      position: 'SDE - Intern',
      from: 'Jan 2020',
      to: 'July 2020',
      companyLink: 'https://www.amazon.in',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Vasavi College of Engineering',
      degree: 'BE',
      from: '2016',
      to: '2020',
      GPA: '9.15',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate',
      from: '2014',
      to: '2016',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'sumanthtatipamula', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'autumn',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;

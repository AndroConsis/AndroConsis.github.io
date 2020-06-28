module.exports = {
  siteTitle: 'Prateek Rathore | Pragmatic | Home',
  siteDescription:
    'Prateek Rathore is a software engineer based in Pune, India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Prateek Rathore, Prateek, Rathore, Pratik, Rathod, Pratik Rathod, software engineer, pune, front-end engineer, web developer, javascript, androconsis, react-native',
  siteUrl: 'https://prateekrathore.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-170128283-1',
  googleVerification: 'KwxO93OR2KBMIIR0lGsHTD2jIAvKfiE5xTGuWlqHhhA',
  name: 'Prateek Rathore',
  location: 'Pune, India',
  email: 'p.rathore.2903@gmail.com',
  github: 'https://github.com/androconsis',
  twitterHandle: '@socialprateek',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/androconsis',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/prateek-rathore/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/socialprateek',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/socialprateek',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
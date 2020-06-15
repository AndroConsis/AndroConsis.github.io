const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/AndroConsis/AndroConsis.github.io',
  },
  () => {
    // eslint-disable-next-line no-console
    console.log('Deploy Complete!');
  },
);

const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  /* regular next.js config options here */
  images: {
    domains: ['i1.wp.com'],
  },
});

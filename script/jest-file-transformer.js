/**
 * @see: http://facebook.github.io/jest/docs/webpack.html#mocking-css-modules
 */
const path = require('path');

module.exports = {
  process: (src, filename) =>
    `module.exports = ${JSON.stringify(path.basename(filename))};`,
};

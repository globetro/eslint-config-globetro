const baseRules = require('./base-rules');

module.exports = {
  'parser': 'babel-eslint',

  'plugins': [
    'private-props'
  ],

  'parserOptions': {
    'sourceType': 'module'
  },

  'env': {
    'node': true,
    'builtin': true,
    'es6': true,
    'mocha': true
  },

  'rules': Object.assign({}, baseRules),

  'globals': {}
};
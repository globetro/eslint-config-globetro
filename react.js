const baseRules = require('./base-rules');

module.exports = {
  'parser': 'babel-eslint',

  'plugins': [
    'react',
    'private-props'
  ],

  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },

  'env': {
    'jasmine': true,
    'node': true,
    'browser': true,
    'builtin': true,
    'es6': true
  },

  'rules': Object.assign({}, baseRules, {
    'jsx-quotes': [2, 'prefer-single'],
    'react/display-name': 2,
    'react/jsx-closing-bracket-location': [2, {selfClosing: 'tag-aligned', nonEmpty: 'after-props'}],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, {'maximum': 3}],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-deprecated': 2,
    'react/no-unknown-property': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [2, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^handle[A-Z].+$/',
        '/^render[A-Z].+$/',
        'render'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }],
    'react/jsx-wrap-multilines': 2,
    'react/default-props-match-prop-types': [2, {allowRequiredDefaults: false}],
    'react/no-unused-prop-types': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2
  }),

  'globals': {
    '$Keys': true // Flow
  }
};
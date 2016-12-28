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

  'rules': {
    'private-props/no-unused-or-undeclared': 2,

    'indent': [2, 2, {'SwitchCase': 1}],
    'block-scoped-var': 0,
    'camelcase': 0,
    'curly': [
      2,
      'all'
    ],
    'eqeqeq': [
      2
    ],
    'global-strict': [
      0,
      'never'
    ],
    'comma-dangle': [2, 'never'],
    'no-extra-semi': 2,
    'guard-for-in': 2,
    'new-cap': 2,
    'no-alert': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-extend-native': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 0,
    'no-new': 0,
    'no-redeclare': 0,
    'no-sequences': 2,
    'no-undef': 2,
    'no-unused-vars': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-with': 2,
    'jsx-quotes': [2, 'prefer-single'],
    'quotes': [
      2,
      'single',
      'avoid-escape'
    ],
    'yoda': 2,
    'semi': [2, 'always'],
    'valid-typeof': 0,
    'wrap-iife': [
      0,
      'inside'
    ],
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    'keyword-spacing': 2,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'object-curly-spacing': [2, 'never'],

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
    'react/sort-comp': 2,
    'react/jsx-wrap-multilines': 2
  },
  'globals': {}
}

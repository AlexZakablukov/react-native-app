module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'react-native/react-native': true
  },
  rules: {
    'no-use-before-define': ['error', { variables: false }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js']
      }
    }
  }
}

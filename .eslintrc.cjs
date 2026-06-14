module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'react/jsx-no-target-blank': 'off',
  },
};

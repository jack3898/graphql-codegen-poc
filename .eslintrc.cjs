// eslint-disable-next-line no-undef
module.exports = {
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        bracketSpacing: true,
        printWidth: 100,
        trailingComma: 'none',
        arrowParens: 'always',
        endOfLine: 'lf'
      }
    ],
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-constant-condition': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off'
  },
  ignorePatterns: ['dist']
};

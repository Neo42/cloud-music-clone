module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};

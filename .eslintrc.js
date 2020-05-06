module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'import/no-unresolved': [2, { commonjs: true }],
    'no-console': 'error',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
}

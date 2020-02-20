module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'warning',
    'vue/no-confusing-v-for-v-if': 'warning',
    'vue/no-v-html': 'warning',
    'vue/order-in-components': 'warning',
    'vue/this-in-template': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/max-len': 180,
    'max-line-length': 180,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
      rules: {
        'max-len': ["error", { "code": 180 }]
      },
    },
  ],

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
};

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  ignorePatterns: ['node_modules/', 'dist/', 'amplify/'],
  env: {
    browser: true,
    node: true,
    es6: true
  },

  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      }
    }
  },

  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended'
    // 'plugin:react-hooks/recommended'
  ],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'no-nested-ternary': 'off',
    // 'import/prefer-default-export': 'off',

    // NextJS
    '@next/next/no-img-element': 'error',
    '@next/next/no-css-tags': 'error',

    // New rules
    'no-console': 'error',
    'template-curly-spacing': 'error',
    // 'arrow-parens': 'off',
    // '@typescript-eslint/interface-name-prefix': 'error',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    complexity: ['error', 65],
    'array-callback-return': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    camelcase: [2, { properties: 'always' }],

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Best Practices
    eqeqeq: 'error',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'guard-for-in': 'error',
    'no-case-declarations': 'error',
    'no-empty-function': 'error',
    'no-implicit-coercion': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-useless-catch': 'error',
    'prefer-promise-reject-errors': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
    'no-shadow': 'error',
    'arrow-body-style': ['warn', 'as-needed'],
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-underscore-dangle': ['error', { allow: ['foo_', '_bar'] }],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'sort-imports': 'error',
    'detect-object-injection': 'off',

    // Variable
    'init-declarations': ['error', 'always'],
    'no-use-before-define': 'error',

    // Stylistic Issues
    'array-bracket-newline': ['error', { multiline: true, minItems: null }],
    'array-bracket-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'block-spacing': 'error',
    // 'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'keyword-spacing': 'error',
    'multiline-ternary': 'off',
    // 'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    // 'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ],
    'quote-props': ['error', 'as-needed'],
    // quotes: ['error', 'prefer-single'],
    semi: ['error', 'never'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',

    // ES6
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'import/order': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error'
  }
}

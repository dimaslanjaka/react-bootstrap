const prettier = require('./.prettierrc.json');
// or using prettier config javascript
// const prettier = require('./.prettierrc');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
  root: true, // Specifies your current project has own eslint rules without extends parent folder eslint rules
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true, // add support for browser js (window,document,location,etc)
    amd: true, // add amd support
    node: true // add node support (module.export,etc)
  },
  globals: {
    dataLayer: true,
    hexo: true,
    jQuery: true,
    $: true,
    _: true
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // enable JSX support
    }
  },
  extends: [
    'eslint:recommended', // uses eslint default recommended
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:react/recommended'
  ],
  // override rules for js files
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_'
          }
        ], // warn unused vars on js files
        'no-var-requires': 'off', // disable require vars on js files
        '@typescript-eslint/no-var-requires': 'off', // disable require vars warning on js files
        'react/no-unknown-property': 'off'
      }
    },
    // current project
    {
      files: ['test/**/*'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off'
      }
    },
    {
      files: ['www/**/*'],
      rules: {
        'no-console': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'no-alert': 'off',
        'no-restricted-syntax': 'off',
        'no-undef': 'off',
        'jsx-a11y/label-has-associated-control': 'off'
      }
    },
    {
      files: ['www/docs/examples/**/*'],
      rules: {
        'import/no-unresolved': 'off'
      }
    }
  ],
  // specify your desired rules for eslint
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // disable function without return type
    'no-unused-vars': 'off', // disable original eslint unused-vars
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ], // enable typescript-eslint unused-vars and allow unused vars start with underscore (_)
    '@typescript-eslint/no-explicit-any': 'off', // allow any types
    '@typescript-eslint/no-this-alias': [
      // rules for this binding
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['self', 'hexo'] // Allow `const self = this`; `[]` by default
      }
    ],
    // "arrow-body-style" and "prefer-arrow-callback" are two ESLint core rules that can cause issues with prettier/prettier plugin, so turn them off.
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // current project
    'import/extensions': 'off',
    'prettier/prettier': ['warn', prettier],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['x-placement'] }],
    'react/function-component-definition': 'off'
  },
  // settings
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: '0.53' // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
      // for rules that check exact prop wrappers
      { property: 'forbidExtraProps', exact: true }
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      'observer', // `property`
      { property: 'styled' }, // `object` is optional
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' } // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      'CustomForm',
      { name: 'Form', formAttribute: 'endpoint' }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  }
};

module.exports = config;

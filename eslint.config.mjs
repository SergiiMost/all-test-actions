import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

// function makeReadonlyGlobals(source) {
//   return Object.fromEntries(Object.keys(source).map((k) => [k, 'readonly']));
// }

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: makeReadonlyGlobals(globals.browser) },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    // Enable Jest-related globals for test files using flat config style
    files: ['**/*.test.js', '**/*.spec.js', '**/__tests__/**'],
    languageOptions: {
      globals: Object.assign({}, makeReadonlyGlobals(globals.node), {
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
      }),
    },
  },
]);

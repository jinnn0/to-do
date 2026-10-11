import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['build']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended, reactHooks.configs.flat['recommended-latest'], reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    // Warnings rather than errors, as under Create React App, while the existing code is tidied
    // up separately (unused imports, setState inside effects).
    rules: {
      'no-unused-vars': 'warn',
      'react-hooks/set-state-in-effect': 'warn'
    }
  }
]);

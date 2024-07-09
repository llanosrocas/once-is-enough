import babelParser from '@babel/eslint-parser';
import babelImport from '@babel/plugin-syntax-import-assertions';
import eslint from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: [babelImport],
        },
      },
      globals: globals.browser,
    },
  },
];

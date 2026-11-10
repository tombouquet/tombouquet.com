import config from '@tombouquet/oxfmt-config';
import { defineConfig } from 'oxfmt';

const tailwind = typeof config.sortTailwindcss === 'object' ? config.sortTailwindcss : {};

export default defineConfig({
  ...config,
  ignorePatterns: [...config.ignorePatterns, 'src/fonts/**'],
  sortTailwindcss: { ...tailwind, stylesheet: './src/index.css' },
});

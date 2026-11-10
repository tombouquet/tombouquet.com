import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: { environment: 'happy-dom', isolate: false, setupFiles: ['./vitest.setup.ts'] },
});

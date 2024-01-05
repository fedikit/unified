/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
  // build: {
  //   lib: {
  //     entry: 'src/index.ts',
  //     formats: ['es'],
  //   },
  // },
  // plugins: [dts()],
  test: {
    testTimeout: 60_000,
  },
})

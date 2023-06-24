import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // @ts-expect-error type test is detected by defineConfig
  test: {
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      testMatch: ['./tests/**/*.test.tsx'],
      globals: true
  }
})

import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}', 'src/styles/index.css', '!src/**/*.stories.tsx'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  sourcemap: false,
  clean: true,
  tsconfig: 'tsconfig.build.json'
})

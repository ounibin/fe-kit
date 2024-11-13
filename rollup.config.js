import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    format: 'es',
    file: 'dist/index.mjs',
  },
  plugins: [commonjs(), typescript()],
  external: [/node_modules/],
}

import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/main.ts',
    output: {
      dir: 'lib',
      file: 'main.esm.js',
      format: 'es',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: ['@babel/preset-stage-3', '@babel/preset-typescript'],
      }),
    ],
  },
  {
    input: 'src/main.ts',
    output: {
      dir: 'lib',
      file: 'main.cjs.js',
      format: 'cjs',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
];

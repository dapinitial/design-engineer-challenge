/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    'postcss-preset-env',
    require('lightningcss')({
      minify: true,
      sourceMap: true,
    }),
  ],
}

export default config

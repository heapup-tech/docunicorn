/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  semi: false,
  endOfLine: 'auto',
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  singleAttributePerLine: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}

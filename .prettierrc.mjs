/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  semi: false,
  endOfLine: 'auto',
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  singleAttributePerLine: true
}

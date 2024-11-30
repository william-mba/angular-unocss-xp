import { defineConfig, presetAttributify, presetWebFonts, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetWebFonts({
        provider: 'google',
        fonts: {
            sans: 'Montserrat',
            mono: ['Fira Code', 'Fira Mono:400,700'],
        },
    }),
    presetUno(),
  ],
  cli: {
    entry: {
      /**
       * Glob patterns to match files
       * Include HTML and inline templates in components.
       */
      patterns: ['src/**/*.html', 'src/**/*.ts'],
      /**
       * The output filename for the generated UnoCSS file
       */
      outFile: './src/uno.css',
    },
  },
})
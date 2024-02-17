import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          textBase: {
            value: {
              base: '{colors.slate.800}',
              _dark: '{colors.slate.200}',
            },
          },
          textBaseLight: {
            value: {
              base: '{colors.slate.600}',
              _dark: '{colors.slate.800}',
            },
          },
          backgroundBase: {
            value: {
              base: '{colors.slate.200}',
              _dark: '{colors.slate.800}',
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  conditions: {
    extend: {
      dark: '.dark &, [data-theme="dark"] &',
      light: '.light &',
    },
  },
})

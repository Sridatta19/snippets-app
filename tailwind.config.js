const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

// const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
const flattenColorPalette = (colors) =>
  Object.assign(
    {},
    ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
      typeof values == 'object'
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
          [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
        }))
        : [{ [`${color}`]: values }]
    )
  )

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
      '4xl': ['2rem', { lineHeight: '2.75rem' }],
      '5xl': ['3rem', { lineHeight: '3.75rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        gray: colors.slate,
      },
      boxShadow: {
        control: '0 0 0 0 hsl(0 0% 50% / 10%)'
      },
      backgroundImage: {
        caption: "linear-gradient(to top, rgba(0, 0, 0, 0.93333), 60%, rgba(0, 0, 0, 0))",
        radial:
          'radial-gradient( farthest-side at top left, var(--tw-radiant-gradient-from), transparent), radial-gradient( farthest-corner at top right, var(--tw-radiant-gradient-to), transparent 50%)',
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        display: ["'Plein', sans-serif", ...defaultTheme.fontFamily.sans],
        sans: ["'IBM Plex Sans', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(
      (() => {
        return function ({ matchUtilities, theme }) {
          let options = {
            values: flattenColorPalette(theme('backgroundColor')),
            type: ['color', 'any'],
          }

          matchUtilities(
            {
              'radiant-from': (value) => {
                return {
                  '--tw-radiant-gradient-from': value,
                }
              },
            },
            options
          )
          matchUtilities(
            {
              'radiant-to': (value) => {
                return {
                  '--tw-radiant-gradient-to': value,
                }
              },
            },
            options
          )
        }
      })()
    ),
  ],
};

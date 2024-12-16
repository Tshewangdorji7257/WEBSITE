/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      spacing: {
        '104/6': 'calc(4% - 6rem)',
        '104/5': 'calc(4% - 4rem)',
        '104/2.5': 'calc(4% - 4.5rem)',
        '104/1.75': 'calc(4% - 2.75rem)'
      }
    },
    colors: {
      'ndi-gray': '#141B29',
      'ndi-light-gray': '#62676D',
      'ndi-emrald': '#5AC994',
      'ndi-green': '#C0F7B7',
      'ndi-light-green': '#DFF5EB',
      'ndi-teal': '#124143',
      'ndi-black': '#000000',
      'ndi-gray-500': '#5F6368',
      'ndi-gray-100': '#F3F3F3',
      'ndi-gray-1': '#A1A0A0',
      'ndi-error': '#BC403A',
      'custom-green': '#5AC994',
      'custom-green-dark': '#059669',
      'placeholder-gray': '#D1D5DB',
      'ndi-red-1': '#C53F3D'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '70%': '70%'
    }
  },
  variants: {
    extend: {
      borderColor: ['focus', 'hover'],
      ringColor: ['focus', 'hover'],
      placeholderColor: ['focus']
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')]
}

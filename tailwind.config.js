/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px',
      wider: '1728px',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      grey: '#6D6D6D',
      rd: '#F47068',
      lgBlack: '#252525',
      lgWhite: '#DEDEDE',
      blue: '#0593FA',
      lgPink: '#F9F9F9',
      Yellow: '#FFE1CB',
      Green: '#1AC17A',
      lgYellow: '#FFE4E4',
      lgGreen: '#D5F6ED',
      lgBlue: '#E0F3FF',
      lgPurple: '#E0F3FF',
      lgIceblue: '#D8FAFF',
      dkBlack: '#0B0B0B',
      SecBlue: '#15A5FF',
      secGreen: '#30C199',
      secPink: '#FBE2F3',
      secGrey: '#707070',
    },
    fontFamily: {
      Montserrat: 'Montserrat , sans-serif',
      Poppins: 'Poppins, sans-serif',
      Roboto: 'Roboto, sans-serif',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0c0f14',
          raised: '#131820',
          overlay: '#1a2230',
        },
        light: {
          bg: '#f0f4f9',
          surface: '#ffffff',
          elevated: '#f8fafc',
          border: '#e2e8f0',
        },
        accent: {
          DEFAULT: '#22d3ee',
          muted: '#0891b2',
          light: '#0e7490',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34, 211, 238, 0.35)',
        soft: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};

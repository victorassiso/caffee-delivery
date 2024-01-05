/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)',
          light: 'var(--secondary-light)',
        },
        base: {
          title: 'var(--base-title)',
          subtitle: 'var(--base-subtitle)',
          text: 'var(--base-text)',
          label: 'var(--base-label)',
          hover: 'var(--base-hover)',
          button: 'var(--base-button)',
          input: 'var(--base-input)',
          card: 'var(--base-card)',
        },
        background: 'var(--background)',
        white: 'var(--white)',
      },
      backgroundImage: {
        banner: '@/src/assets/background.sbg',
      },
    },
  },
  plugins: [],
}

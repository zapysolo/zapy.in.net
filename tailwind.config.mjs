/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'vs-bg': '#011627',
        'vs-bg-secondary': '#1a1a1a',
        'vs-bg-card': '#272727',
        'vs-bg-card-hover': '#333333',
        'vs-bg-hover': '#1E2D3D',
        'vs-border': '#1E2D3D',
        'vs-text': '#607B96',
        'vs-accent': '#4fd1c5',
        'vs-purple': '#C792EA',
        'vs-blue': '#82AAFF',
        'vs-green': '#C3E88D',
        'vs-orange': '#e99287',
        'vs-teal': '#76c7c0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};

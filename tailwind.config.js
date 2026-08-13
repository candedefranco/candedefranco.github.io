/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        bg: '#0F172A',
        surface: '#1E293B',
        'surface-elevated': '#334155',
      },
      letterSpacing: {
        label: '3px',
      },
    },
  },
  plugins: [],
}

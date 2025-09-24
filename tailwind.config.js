// tailwind.config.js
module.exports = {
  darkMode: 'class', // so adding `class="dark"` toggles dark mode variables
  theme: {
    extend: {
      colors: {
        xanthous: 'var(--color-xanthous)',
        plum:     'var(--color-plum)',
        accent:   'var(--color-accent)',
        bg:       'var(--color-bg)',
        text:     'var(--color-text)',
      }
    }
  },
  plugins: [],
}

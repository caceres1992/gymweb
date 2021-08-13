module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    rotate: {
      '0': '0',
      '45': '45deg',
      '5': '5deg',
      '20': '20deg',
      '90': '90deg',

     '135': '135deg',
      '180': '180deg',

     '270': '270deg',
    },
    
  },
  variants: {
    extend: {
      rotate: ['active', 'group-hover'],
    },
  },
  plugins: [],
}

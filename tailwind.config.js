module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#F2994A',
      'secondary': '#99EFD0',
      'base': '#8476AA',
      'blue': '#0F1145',
      'white': '#ffffff',
    },
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
       },
    },
  },
  plugins: [],
}
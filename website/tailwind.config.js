// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if needed
  ],
  theme: {
    extend: {
      colors: {
        'typescript': '#4F8FC3',
        'nativewind': '#00C3B2',
        'react-navigation': '#A846A0',
        'tamagui': '#3F475E',
        'expo-router': '#404040',
        'supabase': '#3DBF5C',
        'firebase': '#FFA000',
        'restyle': '#5B8644',
        'unistyles': '#404040',
      },
      boxShadow: {
        'inset-custom': 'inset 0 0 3rem #3178C644',
      },
      backdropBlur: {
        'sm': '4px',
      },
    },
  },
  plugins: [],
}

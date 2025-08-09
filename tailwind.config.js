module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)"
        },
        button: {
          background1: "var(--button-bg-1)"
        }
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'figtree': ['Figtree', 'sans-serif']
      }
    }
  },
  plugins: []
};
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "./public/index.html", // Include the HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5a1f6f",
        secondary: "#8e2f8b", //#da4c80
        tertiary: "#f4c542",
        backdrop: "#f2eee5",
        dark: "#2f2f2f",
        highlight: "#f2789f",
        light: "#f9f6fb",
      },
      fontFamily: {
        bubblegum: ['"Quicksand"', "Pacifico", "cursive"],
        poppins: ['"Poppins"', "sans-serif"],
        shadow: ['"Shadows Into Light"', "cursive"],
        chewy: ['"Pacifico"', "Poppins", "cursive"],
        Caveat: ['"Caveat"', "cursive"],
      },
      keyframes: {
        blink: {
          "0%": { color: "#5a1f6f" },
          "33%": { color: "#f4c542" },
          "76%": { color: "#da4c80" },
          "100%": { color: "#8e2f8b" }, // Reset to original color
        },
      },
      animation: {
        blink: "blink 1.5s infinite", // Custom animation
      },
    },
  },
  plugins: [],
};
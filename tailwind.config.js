/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B7C6B",
        primaryLight: "#E4FFFB",
        secondary: "#FF6320",
        secondaryLight: "#FFECE3",
        statusBlue: "#219FFF",
        statusBlueLight: "#E4F4FF",
        statusGreen: "#17BD8D",
        statusGreenLight: "#DFFEF5",
        statusYellow: "#FFA114",
        statusYellowLight: "#FFF1DC",
        statusRed: "#FF4E3E",
        statusRedLight: "#FFECEB",
        black: "#101313",
      },
    },
  },
  plugins: [],
};

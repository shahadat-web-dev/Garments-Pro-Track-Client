/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // <-- dark mode toggle জন্য
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {         // light theme কাস্টমাইজ করা
          "primary": "#86C1FF",
          "secondary": "teal",
          "accent": "#FDE68A",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#2094F3",
          "success": "#009485",
          "warning": "#FF9900",
          "error": "#FF5724",
        }
      }
    ],
    darkTheme: "dark", // dark mode এর জন্য
  },
};

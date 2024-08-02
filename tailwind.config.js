/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "0 0 3px rgba(0, 0, 0, 0.7)",
        lg: "0 0 5px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        "gray-bg": "#323231",
        "black-bg": "#121212",
        "gray-text": "#7e8ea2",
        "gray-hovered": "#454545",
        "orange-btn": "#ff8906",
        "white-text": "#fffffe",
      },
      height: {
        93: "93%",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray-text"),
            a: {
              color: theme("colors.orange-btn"),
              "&:hover": {
                color: theme("colors.orange-btn"),
                textDecoration: "underline",
              },
            },
            h1: {
              color: theme("colors.gray-text"),
            },
            h2: {
              color: theme("colors.gray-text"),
            },
            p: {
              color: theme("colors.white-text"),
            },
            strong: {
              color: theme("colors.orange-btn"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0 0 3px rgba(0, 0, 0, 0.7)",
        },
        ".text-shadow-lg": {
          textShadow: "0 0 5px rgba(0, 0, 0, 0.7)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

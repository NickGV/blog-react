/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#323231",
        "gray-hovered": "#454545",
        "orange-btn": "#ff8906",
        "white-text": "#fffffe",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                color: theme("colors.blue.800"),
              },
            },
            h1: {
              color: theme("colors.gray.900"),
            },
            // Agrega más estilos según sea necesario
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

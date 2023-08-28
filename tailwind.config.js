/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        customO: "392px",
      },
      fontFamily: {
        Nunito: ["Nunito"],
        DancingS: ["Dancing Script"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black"],
  },
};

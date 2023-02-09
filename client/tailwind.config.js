/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
      },
      colors: {
        poster: "#EDF6F9",
      },
      backgroundImage: {
        // https://codepen.io/billyysea/pen/nLroLY
        "night-sky":
          "linear-gradient(to bottom, rgb(11, 16, 22) 0%, rgb(63, 70, 94) 70%,rgb(104, 86, 102) 100%);",
      },
      minHeight: {
        "full-body": "calc(100vh - 84px)",
      },
      height: {
        "full-body": "calc(100vh - 84px)",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

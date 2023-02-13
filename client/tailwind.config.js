/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "group-hover:before:bg-teal-400",
    "group-hover:before:bg-teal-600",
    "group-hover:before:bg-teal-700",
    "group-hover:after:bg-teal-400",
    "group-hover:after:bg-teal-600",
    "group-hover:after:bg-teal-700",

    "group-hover:before:bg-purple-400",
    "group-hover:before:bg-purple-600",
    "group-hover:before:bg-purple-700",
    "group-hover:after:bg-purple-400",
    "group-hover:after:bg-purple-600",
    "group-hover:after:bg-purple-700",

    "group-hover:before:bg-cyan-400",
    "group-hover:before:bg-cyan-600",
    "group-hover:before:bg-cyan-700",
    "group-hover:after:bg-cyan-400",
    "group-hover:after:bg-cyan-600",
    "group-hover:after:bg-cyan-700",

    "group-hover:before:bg-sky-400",
    "group-hover:before:bg-sky-600",
    "group-hover:before:bg-sky-700",
    "group-hover:after:bg-sky-400",
    "group-hover:after:bg-sky-600",
    "group-hover:after:bg-sky-700",

    "group-hover:before:bg-fuchsia-400",
    "group-hover:before:bg-fuchsia-600",
    "group-hover:before:bg-fuchsia-700",
    "group-hover:after:bg-fuchsia-400",
    "group-hover:after:bg-fuchsia-600",
    "group-hover:after:bg-fuchsia-700",

    "group-hover:before:bg-indigo-400",
    "group-hover:before:bg-indigo-600",
    "group-hover:before:bg-indigo-700",
    "group-hover:after:bg-indigo-400",
    "group-hover:after:bg-indigo-600",
    "group-hover:after:bg-indigo-700",

    "group-hover:before:bg-violet-400",
    "group-hover:before:bg-violet-600",
    "group-hover:before:bg-violet-700",
    "group-hover:after:bg-violet-400",
    "group-hover:after:bg-violet-600",
    "group-hover:after:bg-violet-700",

    "group-hover:before:bg-green-400",
    "group-hover:before:bg-green-600",
    "group-hover:before:bg-green-700",
    "group-hover:after:bg-green-400",
    "group-hover:after:bg-green-600",
    "group-hover:after:bg-green-700",

    "group-hover:before:bg-lime-400",
    "group-hover:before:bg-lime-600",
    "group-hover:before:bg-lime-700",
    "group-hover:after:bg-lime-400",
    "group-hover:after:bg-lime-600",
    "group-hover:after:bg-lime-700",

    "group-hover:before:bg-blue-400",
    "group-hover:before:bg-blue-600",
    "group-hover:before:bg-blue-700",
    "group-hover:after:bg-blue-400",
    "group-hover:after:bg-blue-600",
    "group-hover:after:bg-blue-700",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
      },
      colors: {
        poster: "#EDF6F9",
        button: "#83C5BE",
        "empty-cell-color": "rgb(186, 186, 186)",
        "empty-cell-border": "rgb(156, 156, 156)",
        "number-cell-one": "rgb(0, 0, 255)",
        "number-cell-two": "rgb(16, 112, 0)",
        "number-cell-three": "rgb(252, 0, 6)",
        "number-cell-four": "rgb(0, 0, 108)",
        "number-cell-five": "rgb(108, 0, 4)",
        "number-cell-six": "rgb(14, 108, 109)",
        "number-cell-seven": "rgb(108, 0, 109)",
        "number-cell-eight": "rgb(95, 95, 95)",
        "red-bomb": "rgb(253, 0, 6)",
        "red-flag": "rgb(254, 139, 143)",
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

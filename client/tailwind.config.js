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

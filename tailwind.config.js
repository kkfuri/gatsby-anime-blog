module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      display: "Alfa Slab One, Verdana",
      body: "Open Sans, Arial",
    },
    extend: {
      colors: {
        primary: {
          default: "#038cfc",
          dark: "#034d8a",
          light: "",
        },
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
}

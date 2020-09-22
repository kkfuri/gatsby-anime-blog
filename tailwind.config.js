module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    typography: {
      default: {
        css: {
          color: "var(--color-text-primary)",
          h1: {
            color: "var(--color-text-primary)",
          },
          h2: {
            color: "var(--color-text-primary)",
          },
          h3: {
            color: "var(--color-text-primary)",
          },
          h4: {
            color: "var(--color-text-primary)",
          },
          h5: {
            color: "var(--color-text-primary)",
          },
          h6: {
            color: "var(--color-text-primary)",
          },
        },
      },
    },
    fontFamily: {
      display: "Alfa Slab One, Verdana",
      body: "Open Sans, Arial",
    },
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
}

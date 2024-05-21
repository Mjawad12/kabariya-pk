/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      Lar: { max: "1500px" },
      extLar: { max: "1397px" },
      larger: { max: "1262px" },
      large: { max: "1193px" },
      med: { max: "1062px" },
      small: { max: "968px" },
      smo: { max: "600px" },
      smaller: { max: "500px" },
      mob: { max: "417px" },
      Smob: { max: "361px" },
      smallest: { max: "320px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pm: "var(--Font-Primary)",
        se: "var(--Font-Secondary)",
        midan: "var(--Font-Urdu)",
        open: "var(--Font-openSans)",
        nast: "var(--Font-Nast)",
      },
      fontWeight: {
        dark: "900",
        exbol: "800",
        bol: "700",
        med: "600",
        reg: "500",
        light: "300",
        Exlight: "200",
      },
      colors: {
        primaryGreen: "#2DB473",
        secondaryGreen: "#0CBC8B",
        borderColorP: "#00000012",
        lightGreen: "#f3fcf9",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // Stolen from rauno for now
      gray: {
        0: "hsl(0 0% 4%)",
        1: "hsl(0 0% 8.5%)",
        2: "hsl(0 0% 11.0%)",
        3: "hsl(0 0% 13.6%)",
        4: "hsl(0 0% 15.8%)",
        5: "hsl(0 0% 17.9%)",
        6: "hsl(0 0% 20.5%)",
        7: "hsl(0 0% 24.3%)",
        8: "hsl(0 0% 31.2%)",
        9: "hsl(0 0% 43.9%)",
        10: "hsl(0 0% 49.4%)",
        11: "hsl(0 0% 62.8%)",
        12: "hsl(0 0% 93.0%)",
        A1: "hsl(0 0% 100% / 0)",
        A2: "hsl(0 0% 100% / 0.026)",
        A3: "hsl(0 0% 100% / 0.056)",
        A4: "hsl(0 0% 100% / 0.077)",
        A5: "hsl(0 0% 100% / 0.103)",
        A6: "hsl(0 0% 100% / 0.129)",
        A7: "hsl(0 0% 100% / 0.172)",
        A8: "hsl(0 0% 100% / 0.249)",
        A9: "hsl(0 0% 100% / 0.386)",
        A10: "hsl(0 0% 100% / 0.446)",
        A11: "hsl(0 0% 100% / 0.592)",
        A12: "hsl(0 0% 100% / 0.923)",
      },
      white: "hsl(0 0% 100%)",
      black: "hsl(0 0% 0%)",
    },
    extend: {
      boxShadow: {
        "lg-up":
          "0 -10px 15px -3px var(--tw-shadow-color), 0 -4px 6px -4px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable =
            colorKey === "DEFAULT"
              ? `--color${colorGroup}`
              : `--color${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === "string"
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};

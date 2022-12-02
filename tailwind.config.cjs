/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ['"Mona-Sans"', "system-ui", "-apple-system", "sans-serif"],
      body: ['"Mona-Sans"', "system-ui", "-apple-system", "sans-serif"],
      sans: ['"Mona-Sans"', "system-ui", "-apple-system", "sans-serif"],
    },
    fontSize: {
      xs: ["0.875rem", "1.5rem"],
      sm: ["1rem", "1.5rem"],
      base: ["1.125rem", "2rem"],
      lg: ["1.25rem", "2rem"],
      xl: ["1.5rem", "1.6"],
      "2xl": ["2rem", "2.5rem"],
      "3xl": ["2.5rem", "3.5rem"],
      "4xl": ["3rem", "4rem"],
      "5xl": ["4rem", "5rem"],
      "6xl": ["5rem", "6.5rem"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["5.5rem", "1"],
      "9xl": ["7.5rem", "1"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
          primary: "#0d6efd",
          "base-100": "#f8f9fa",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#0d6efd",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};

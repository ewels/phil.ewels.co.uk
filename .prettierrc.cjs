module.exports = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,

  // pnpm support, for VSCode?
  plugins: [require.resolve("prettier-plugin-astro"), require.resolve("prettier-plugin-tailwindcss")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

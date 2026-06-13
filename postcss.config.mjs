import removeModernColors from "./lib/postcss-remove-modern-colors.mjs";

const config = {
  plugins: [
    "@tailwindcss/postcss",
    removeModernColors,
  ],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: { fontFamily: { display: ["var(--font-display)", "Arial", "sans-serif"], sans: ["var(--font-sans)", "Arial", "sans-serif"] } } },
  plugins: []
};

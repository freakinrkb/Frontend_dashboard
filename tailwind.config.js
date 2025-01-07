/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};

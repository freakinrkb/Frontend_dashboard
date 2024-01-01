/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumslateblue: "#4750eb",
        gray: {
          "100": "#f9fbfd",
          "200": "#0f2137",
        },
        plum: "#bfa1f8",
        lightgreen: "#81dc9a",
        yellowgreen: "rgba(131, 205, 41, 0.8)",
        lightsteelblue: "#90a7bb",
        sandybrown: "#fac874",
        lightskyblue: "#91afe3",
        darkslategray: "rgba(44, 71, 99, 0.8)",
        skyblue: "#56bbd0",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        arvo: "Arvo",
        nunito: "Nunito",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      "2xl": "21px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

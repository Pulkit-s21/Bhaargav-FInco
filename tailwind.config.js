/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Vietnam: "Be Vietnam Pro",
        Sora: "Sora",
        Poppins: "Poppins",
        Beau: "Beau Rivage",
      },
      colors: {
        primary: {
          purple: "#9647FF",
          blueish: "#6A4BFF",
          featureBox: "#F1E7FF",
          featureShadow: "#FBD3FF",
          downloadBtn: "#162A35",
          bookingbgClr: "#F9F9F9",
        },
      },
    },
  },
  plugins: [],
}

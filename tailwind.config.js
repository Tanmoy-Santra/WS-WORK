/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
  keyframes: {
    marqueeMobile: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-100%)" },
    },
    marqueeDesktop: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
  },
  animation: {
    "marquee-mobile": "marqueeMobile 18s linear infinite",
    "marquee-desktop": "marqueeDesktop 10s linear infinite",
  },
}
  },
  plugins: [],
}


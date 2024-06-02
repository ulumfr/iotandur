/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ijoTua: "#1A4D2E",
        ijoMuda: "#4F6F52",
        
        coklatTua: "#543310",
        coklatMuda: "#74512D",
        coklatMuda2: "#AF8F6F",
        
        cream: "#E8DFCA",
        cream2: "#F8F4E1",
        
        textCerah: "#F5EFE6",
        textHitam: "#101828",
        textLabel: "#334054",
        textTertiary: "#465467",
        textAbu: "#667085",
        
        borderPrimary: "#D0D5DD",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        aws: {
          "primary": "#fba618",
          "secondary": "#00a1c9", 
          "accent": "#00a1c9",
          "neutral": "#6b7280",
          "base-100": "#0b1e33",
          "base-200": "#1f2937",
          "base-300": "#374151",
          "base-content": "#e3e8ef",
          "info": "#00a1c9",
          "success": "#037f0c",
          "warning": "#fba618",
          "error": "#dc2626",
        },
      },
    ],
  },
}

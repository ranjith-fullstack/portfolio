/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#0ea5e9", // Light blue
        tertiary: "#f0f9ff", // Very light blue
        accent: "#0284c7", // Darker blue for emphasis
        textPrimary: "#1e293b", // Dark blue-gray
        textSecondary: "#334155", // Medium blue-gray
      },
      boxShadow: {
        'astra': '0 0 20px rgba(14, 165, 233, 0.15)',
      }
    },
  },
  plugins: [],
}
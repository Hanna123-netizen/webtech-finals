// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Blue-500
        'primary-hover': '#2563eb', // Blue-600
        secondary: '#f3f4f6', // Gray-100
        accent: '#10b981', // Emerald-500
        muted: '#e5e7eb', // Gray-200
        background: '#ffffff',
        foreground: '#171717',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
};

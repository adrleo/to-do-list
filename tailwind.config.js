/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "todolist-height": "calc(100vh - 48px - 86px - 24px - 73px - 42px)",
      },
    },
  },
  plugins: [],
};

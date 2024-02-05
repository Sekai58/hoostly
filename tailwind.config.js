/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        "2/3": "66.666667%",
        "3/4": "75%",
        "4/5": "80%",
        "5/6": "83.333333%",
        container: "8rem",
        top: "4.5rem",
      },

      colors: {
        // primary: "#008e44",
        // primary: "#3086e0",
        primary: "#00bf8f",
        startfrom: "#001510",
        endto: "#00bf8f",
        gray: "#3E4652",
        success: "#009C2C",
        errorColor: "#d63031",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};

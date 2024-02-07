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
        // primary: "#2092F1",
        // primary: "#00bf8f",
        primary: "#008E44",
        backgroundSecondary: "#D2FBD0",
        // backgroundTransSecondary: "#d2fbd04f",#EFF6FF
        bgSecondary: "#eff6ff78",
        backgroundTransSecondary: "#f1fef0",

        startfrom: "#001510",
        endto: "#00bf8f",
        gradientStart: "#001510",
        gradientMiddle: "",
        gradientEnd: "#008e44",

        textLight: "#4a4a4a",

        grayLine: "#a1a1a1",
        gray: "#3E4652",
        success: "#009C2C",
        errorColor: "#d63031",
        white: "#ffffff",
      },
      animation: {
        "slow-bounce": "bounce 1.5s infinite",
      },
    },
  },
  plugins: [],
};

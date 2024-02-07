const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  // other webpack configuration...
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Tilt Neon" },
        { family: "Sometype Mono" },
        // Add more fonts as needed
      ],
      path: "public/fonts/",
    }),
  ],
};

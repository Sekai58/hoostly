const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // other webpack configuration...
  plugins: [
    new GoogleFontsPlugin({
      fonts: [{ family: "Poppins" }],
      path: "public/fonts/",
    }),
  ],
  resolve: {
    fallback: {
      fs: false,
      path: false,
      crypto: false,
      stream: false,
      url: false,
      http: false,
      https: false,
      zlib: false,
      util: false,
    },
  },
};

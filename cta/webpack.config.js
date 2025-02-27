const path = require("path");

module.exports = {
  entry: [
    "./src/cta-map.js",
    "./src/cta-core.js",
    "./src/functions.js",
    "./src/cta-form.js",
    "./src/cta-cookie.js",     
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production", // ✅ Cambiato a "production" per minificare il codice
  devtool: false, // ❌ Rimuove i source maps per ottimizzare il peso finale
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};


const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Importa il plugin

module.exports = {
  mode: 'production',
  entry: './src/index.js',  // Punto di ingresso
  output: {
    filename: 'gsap-bundle.js',  // Nome del file di output
    path: path.resolve(__dirname, 'dist'),  // Directory di output
    library: 'GSAPBundle', // Nome del bundle esportato
    libraryTarget: 'umd', // Target UMD per compatibilità con Webflow
    globalObject: 'this' // Assicura compatibilità con ambienti browser
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Applica questa regola ai file JavaScript
        exclude: /node_modules/,  // Escludi i file nella cartella node_modules
        use: {
          loader: 'babel-loader',  // Usa babel-loader per trascrivere il JavaScript
          options: {
            presets: ['@babel/preset-env'],  // Preset per compatibilità con i browser
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Pulisce la directory `dist` prima della build
  ],
  optimization: {
    minimize: true,  // Abilita la minificazione per la produzione
    splitChunks: false, // Disabilita il code splitting
  },
};


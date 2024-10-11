const path = require('path');

module.exports = {
  mode: 'production',  // Usa 'development' se sei in fase di sviluppo
  entry: './src/index.js',  // Punto di ingresso
  output: {
    filename: 'bundle.js',  // Nome del file di output
    path: path.resolve(__dirname, 'dist'),  // Directory di output
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
  optimization: {
    minimize: true,  // Abilita la minificazione per la produzione
  },
};


module.exports = {
  mode: "development",
  entry: ["babel-polyfill", __dirname + "/src/index.js"],
  output: {
    filename: "index.js",
    path: __dirname + "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
      ,
      {
        test: /\.(sass|less|css)$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};

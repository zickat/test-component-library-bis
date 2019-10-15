const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  css: {
    loaderOptions: {
      stylus: {
        import: `~@/components/theme.styl`,
      },
      css: {
        ssrId: true,
      },
    },
    extract: false,
  },
};

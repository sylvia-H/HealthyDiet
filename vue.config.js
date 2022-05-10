module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/HealthyDiet/'
    : '/',
  chainWebpack: (config) => {
    config.performance.set('hints', false);
    config
      .plugin('html')
      .tap((args) => {
        const ARGS = args;
        ARGS[0].title = '好食遞 HEALTHY DIET - 您的優質餐飲管家';
        return ARGS;
      });
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
  },
};

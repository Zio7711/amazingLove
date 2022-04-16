module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            components: './src/components',
            screens: './src/screens',
            config: './config',
            utils: './src/utils',
            assets: './assets/',
            hooks: './src/hooks',
          },
        },
      ],
    ],
  };
};

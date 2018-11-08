const path = require('path');
const config = {
  resolve: {
    alias: {
      '_variables.sass': path.resolve(__dirname, 'src/styles/variables.scss'),
    },
  },
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions}) => {
  if (stage === 'build-html') {
    const productionConfig = Object.assign({}, config,
      {
        module: {
          rules: [
            {
              test: /webfontloader/,
              use: loaders.null()
            }
          ]
        }
      }
    );
    actions.setWebpackConfig(productionConfig);   
    return;
  }
  actions.setWebpackConfig(config);
}
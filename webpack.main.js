const NodeTargetPlugin = require('webpack/lib/node/NodeTargetPlugin');
const ThreadsPlugin = require('threads-plugin');
module.exports = function(config) {
  config.plugins.unshift(
    new ThreadsPlugin({
      plugins: [new NodeTargetPlugin()]
    })
  );
  return config;
};

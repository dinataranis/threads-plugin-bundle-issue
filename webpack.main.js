const ThreadsPlugin = require('threads-plugin')
module.exports = function(config) {
  config.plugins.unshift(
    new ThreadsPlugin()
  )
  return config
}

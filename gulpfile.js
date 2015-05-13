var gulp = require('gulp');
var webpack = require('webpack');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', function (done) {

  var transpiler = webpack({ 
      module: {
        loaders: [
          { test: /\.jsx$/, loader: 'jsx-loader' }
        ],
      },
      entry: {
        home: __dirname + '/src/client/index.jsx'
      },
      output: {
        path: __dirname + '/dist/js/',
        filename: 'bundle.js'
      },
      resolveLoader: {
        root: __dirname + '/node_modules'
      },
      plugins: [
        new webpack.ProvidePlugin({
          React: 'react'
        })
      ]
    });

    new WebpackDevServer(transpiler, {
      publicPath: __dirname + '/dist/js/',
    }).listen(8080, "localhost", function (err) {
        if(err) { throw new gutil.PluginError("webpack-dev-server", err) };

        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

gulp.task('start', function () {
  nodemon({
    script: 'scripts/server.js',
    ext: 'js ejs jsx',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('default', ['start', 'webpack']);

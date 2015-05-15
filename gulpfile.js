var gulp = require('gulp');
var webpack = require('webpack');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var WebpackDevServer = require('webpack-dev-server');
var sass = require('gulp-sass');
// var shell = require('gulp-shell');
var settings = require('./settings');

// gulp.task('cleanJS', shell.task([
//       'rm ' + __dirname + settings.dist.js + '*.js'
// ], { ignoreErrors: true }));

// gulp.task('cleanCSS', shell.task([
//       'rm ' + __dirname + settings.dist.css + '*.css'
// ], { ignoreErrors: true }));

gulp.task('webpack', function (done) {

  var transpiler = webpack({ 
    module: {
      loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
      ],
    },
    entry: {
      home: __dirname + settings.src.js
    },
    output: {
      path: __dirname + settings.dist.js,
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
    publicPath: __dirname + settings.dist.js,
  }).listen(8080, "localhost", function (err) {
    if(err) { throw new gutil.PluginError("webpack-dev-server", err) };

    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

// gulp.task('sass', ['cleanCSS'], function () {
gulp.task('sass', function () {
  gulp.src(__dirname + settings.src.css)
    .pipe(sass({ 
      errLogToConsole: true,
      style: 'compressed',
      includePaths: [
        __dirname + '/node_modules/bootstrap-sass/assets/stylesheets/'
      ]
    }))
  .pipe(gulp.dest(__dirname + settings.dist.css));
});

gulp.task('start', function () {
  nodemon({
    script: 'scripts/server.js',
    ext: 'js ejs jsx',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('default', ['start', 'webpack', 'sass']);

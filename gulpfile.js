var gulp = require('gulp');
var webpack = require('webpack');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var shell = require('gulp-shell');
var settings = require('./settings');

gulp.task('cleanJS', shell.task([
      'rm ' + __dirname + settings.dist.js + '*.js'
], { ignoreErrors: true }));

gulp.task('cleanCSS', shell.task([
      'rm ' + __dirname + settings.dist.css + '*.css'
], { ignoreErrors: true }));

gulp.task('webpack', ['cleanJS'], function (done) {

  var transpiler = webpack({ 
    watch: true,
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
  }, function (err, stats) { 
    if(err) { throw new gutil.PluginError("webpack", err) };

    gutil.log("[webpack]");
  });
});

gulp.task('sass', ['cleanCSS'], function () {
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

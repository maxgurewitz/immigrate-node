var gulp = require('gulp');
var webpack = require('webpack');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var less = require('gulp-less');
var shell = require('gulp-shell');
var settings = require('./settings');

gulp.task('cleanJS', shell.task([
  'rm ' + __dirname + settings.dist.js + '*.js'
], { ignoreErrors: true }));

gulp.task('cleanCSS', shell.task([
  'rm ' + __dirname + settings.dist.css + '*.css'
], { ignoreErrors: true }));

gulp.task('build', shell.task([
  'npm i',
  'cp ' + __dirname + '/node_modules/bootstrap/fonts/* ' +
    __dirname + settings.dist.fonts
], { ignoreErrors: true }));

gulp.task('webpack', ['cleanJS'], function (done) {

  var transpiler = webpack({ 
    watch: true,
    module: {
      loaders: [
        { test: /\.jsx\.js$/, loader: 'jsx-loader' }
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
    resolve: {
      extensions: ['', '.jsx.js', '.js']
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

gulp.task('less', ['cleanCSS'], function () {
  gulp.src(__dirname + settings.src.css)
    .pipe(less({ 
      compress: true,
      paths: [
        __dirname + '/node_modules/bootstrap/less/',          
      ]
    }))
  .pipe(gulp.dest(__dirname + settings.dist.css));
});

gulp.task('watch', function () {
  gulp.watch(__dirname + settings.src.css, ['less']);
});

gulp.task('start', function () {
  nodemon({
    script: 'scripts/server.js',
    ext: 'js ejs jsx',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('default', ['start', 'webpack', 'less', 'watch']);

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var nodemon = require('gulp-nodemon');

gulp.task('webpack', function (done) {
  return gulp.src('src/entry.js')
    .pipe(webpack({ 
      module: {
        loaders: [
          { test: /\.jsx$/, loader: 'jsx-loader' }
        ],
      },
      context: __dirname + '/src/client/',
      entry: './index.jsx',
      output: {
        filename: './bundle.js'
      },
      resolveLoader: {
        root: __dirname + '/node_modules'
      }
    }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('start', function () {
  nodemon({
    script: 'scripts/server.js',
    ext: 'js ejs jsx',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('default', ['webpack']);

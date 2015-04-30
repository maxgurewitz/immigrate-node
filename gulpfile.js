var gulp = require('gulp');
var webpack = require('gulp-webpack');
var nodemon = require('gulp-nodemon');

gulp.task('webpack', function (done) {
  return gulp.src('src/entry.js')
    .pipe(webpack({ 
      context: __dirname + '/src/client/',
      entry: './index.js',
      output: {
        filename: './bundle.js'
      }
    }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('start', function () {
  nodemon({
    script: 'scripts/server.js',
    ext: 'js ejs',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('default', ['webpack']);

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var less = require('gulp-less');
var shell = require('gulp-shell');
var elm = require('gulp-elm');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var settings = require('./settings');

function logError (err) {
  gutil.log(err.message);
}

gulp.task('cleanJS', shell.task([
  'rm ' + __dirname + settings.dist.js + '*.js'
], { ignoreErrors: true }));

gulp.task('cleanCSS', shell.task([
  'rm ' + __dirname + settings.dist.css + '*.css'
], { ignoreErrors: true }));

gulp.task('build', ['install', 'elmInit', 'fonts']);

gulp.task('install', shell.task(['npm i']));

gulp.task('fonts', shell.task([
  'cp ' + __dirname + '/node_modules/bootstrap/fonts/* ' +
    __dirname + settings.dist.fonts,
], { ignoreErrors: true }));

gulp.task('elmInit', elm.init);

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

gulp.task('clientJS', ['cleanJS'], function () {
  var bundle = browserify(__dirname + settings.src.js).bundle();
  bundle
    .pipe(source(__dirname + settings.src.js))
    .pipe(rename(settings.bundleName))
    .pipe(gulp.dest(__dirname + settings.dist.elmJs));
});

gulp.task('elm', ['cleanJS'], function () {
  gulp.src(__dirname + settings.src.elm)
    .pipe(elm().on('error', logError))
    .pipe(gulp.dest(__dirname + settings.dist.js))
});

gulp.task('watch', function () {
  gulp.watch(__dirname + settings.src.clientJS, ['clientJS']);
  gulp.watch(__dirname + settings.src.css, ['less']);
  gulp.watch(__dirname + settings.src.elm, ['elm']);
});

gulp.task('start', function () {
  nodemon({
    script: 'scripts/server.js',
    ext: 'js ejs jsx',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('default', ['start', 'less', 'elm', 'clientJS', 'watch']);

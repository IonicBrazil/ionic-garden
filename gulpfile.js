var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: ['./src/scss/{,*/}*.scss'],
  destCSS: 'www/css/',
  html: ['./src/{,*/}*.html'],
  outBase: 'www',
  sourceBase: 'src'
};

gulp.task('default', ['sass']);

// Build CSS to `www`
gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.destCSS))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.destCSS))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.html, ['html']);
});

// Build HTML to `www`
gulp.task('html', function (done) {
  gulp.src(paths.html, { base: paths.sourceBase})
    .pipe(gulp.dest(paths.outBase));
})

// Install bower dependencies
gulp.task('install', function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

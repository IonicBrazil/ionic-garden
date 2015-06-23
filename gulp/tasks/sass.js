var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var config = require('../config').common;

gulp.task('sass', function(done) {
  gulp.src(config.allSCSSFiles)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(config.destCSS))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.destCSS))
    .on('end', done);
});

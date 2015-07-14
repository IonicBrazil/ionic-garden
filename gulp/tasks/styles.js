var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var config = require('../config').common;

gulp.task('styles', function(done) {
  gulp.src(config.allSCSSFiles)
    .pipe(plumber())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe(gulp.dest(config.destCSS))

    // Minifield version
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.destCSS))
    .pipe(connect.reload())
    .on('end', done);
});

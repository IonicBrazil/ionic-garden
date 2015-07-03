var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var config = require('../config').common;

gulp.task('style-guide', function () {
  return gulp.src(config.allJSFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe(jscs());
});

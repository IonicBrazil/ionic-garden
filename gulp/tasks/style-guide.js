var gulp = require('gulp');
var jscs = require('gulp-jscs');
var config = require('../config').common;

gulp.task('style-guide', function () {
  return gulp.src('www/{,*/}*.js')
    .pipe(jscs());
});

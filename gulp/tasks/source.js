var gulp = require('gulp');
var copy = require('gulp-copy');
var config = require('../config').common;
var connect = require('gulp-connect');

gulp.task('build-dev:copy-lib', function(done) {
  gulp.src(['src/lib/**', 'src/img/**'])
    .pipe(copy(config.destBase, { prefix: 1}))
    .pipe(connect.reload())
    .on('end', done);
});

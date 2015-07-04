var gulp = require('gulp');
var copy = require('gulp-copy');
var newer = require('gulp-newer');
var config = require('../config').common;
var connect = require('gulp-connect');

gulp.task('source', ['build-dev:copy-lib'], function(done) {
  gulp.src(['src/{,*/,*/*/}*.{js,html}', '!src/lib/**', '!src/*.html', '!src/index.html'])
    .pipe(copy(config.destBase, { prefix: 1}))
    .on('end', done);
});

gulp.task('build-dev:copy-lib', function(done) {
  gulp.src(['src/lib/**', 'src/img/**'])
    .pipe(copy(config.destBase, { prefix: 1}))
    .pipe(connect.reload())
    .on('end', done);
});


gulp.task('build-dev:copy-templates', function(done) {
  gulp.src(['src/{,*/,*/*/}*.html', '!src/index.html'])
    .pipe(copy(config.destBase, { prefix: 1}))
    .pipe(connect.reload())
    .on('end', done);
});

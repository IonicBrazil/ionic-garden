var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var config = require('../config').common;

gulp.task('clean-www', function(done) {
  del([config.destBase + '/**'], { force: true }, done);
});

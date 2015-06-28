var gulp = require('gulp');
var config = require('../config').common;

gulp.task('source', function(done) {
  console.log('App source changed and is being copied!');

  gulp.src(config.allFiles)
    .pipe(gulp.dest(config.destBase))
    .on('end', done);
});

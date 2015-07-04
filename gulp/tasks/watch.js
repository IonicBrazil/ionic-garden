var gulp = require('gulp');
var exec = require('child_process').execFile;
var connect = require('gulp-connect');
var config = require('../config').common;

gulp.task('serve-build', ['build'], function() {
  connect.server({
    root: 'www/',
    livereload: true
  });
});

gulp.task('serve', ['build-dev'], function() {
  connect.server({
    root: 'www/',
    livereload: true
  });
});

gulp.task('watch-dev', function(done) {
  // gulp.watch(config.allSCSSFiles, ['styles']);
  // gulp.watch(config.allStaticFiles, ['source']);
  gulp.watch(config.allJSFiles, ['build-dev:prepare-javascript']);
  gulp.watch(config.allTemplates, ['build-dev:copy-templates']);
  // gulp.watch(config.allTemplates, ['source']);

  // var child = exec('node ./scripts/watch/watch.js')
  // child.stdout.on('data', console.log)
});

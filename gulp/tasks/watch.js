var gulp = require('gulp');
var exec = require('child_process').execFile

var config = require('../config').common;

gulp.task('watch', function() {
  gulp.watch(config.allSCSSFiles, ['styles']);
  gulp.watch(config.allStaticFiles, ['source']);

  var child = exec('node ./scripts/watch/watch.js')

  child.stdout.on('data', console.log)
});

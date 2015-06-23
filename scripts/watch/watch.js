#!/usr/bin/env node

var ted = require('../ted')
var exec = require('child_process').execFile
var gulp = require('gulp')
var batch = require('gulp-batch');

// What is going on log
console.log(
  ted.say.happy('Drops the bass'),
  ted.say.warn('->'),
  ted.say.happy('gulp watch')
)

gulp.watch(
  [
    './modules/ionic/dist/{,*/}*.{js,css,scss,json,eot,svg,ttf,woff}',
    './modules/ionic/scss/{,*/}*.scss'
  ],
  batch(function (event, cb) {
    process.stdout.write('source changed')
    gulp.src('./modules/ionic/scss/**')
      .pipe(gulp.dest('www/lib/ionic/scss'));
    return gulp.src('./modules/ionic/dist/**')
      .pipe(gulp.dest('www/lib/ionic'));
  })
);

process.stdout.write(ted.say.happy('Watching Ionic source'))

exec('gulp', ['watch'], {
  cwd: './modules/ionic/'
})

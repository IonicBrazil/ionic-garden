var gulp = require('gulp');
var appRoot = require('app-root-path')
var path = require('canonical-path')
var git = require('gulp-git');
var fs = require('fs');

var ionicProject = JSON.parse(fs.readFileSync(path.join(appRoot.path, 'ionic.project'), 'utf8'));

gulp.task('install-source-modules', function() {
  var array = Object.keys(ionicProject.sourceModules)

  array.forEach(function (propertyName) {
    console.log(
      'git clone',
      ionicProject.sourceModules[propertyName],
      path.join(appRoot.path, './modules', propertyName)
    )

    console.log(path.join('../../modules/', propertyName, '/'))

    git.clone(ionicProject.sourceModules[propertyName], {
      cwd: path.join('../../modules/', propertyName, '/')
    }, function (err) {
      console.log(err)
      if (err) throw err;

      console.log('Cloned ', propertyName)
    })
  })
});

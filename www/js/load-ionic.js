(function () {

  var options = (function () {
    // Holy shit
    var optionsArray = location.href.split('?')[1].split('#')[0].split('=')
    var result = {}

    optionsArray.forEach(function (value, index) {
      // 0 is a property name and 1 the value of 0
      if (index % 2 === 1) {
        return
      }

      result[value] = optionsArray[index + 1]
    });

    return result
  }())

  var toLoadSrc;

  if (options.ionic === 'build') {
    toLoadSrc = 'lib/ionic/local/ionic.bundle.js'
  } else if (options.ionic === 'local' || !options.ionic) {
    toLoadSrc = 'lib/ionic/js/ionic.bundle.js'
  } else {
    // Use options.ionic as ionic version
    toLoadSrc = '//code.ionicframework.com/' + options.ionic + '/js/ionic.bundle.min.js'
  }

  console.log('Ionic From')
  console.log(toLoadSrc)
  document.write('<script src="'+ toLoadSrc +'"></script>')
}())

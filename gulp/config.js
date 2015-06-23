var src = './www';

var tasks = {};

tasks.common = {}

// All files path
tasks.common.allHTMLFiles = src + '/*.html'
tasks.common.allJSFiles = src + '/{,*/}*.js'
tasks.common.scriptBase = src + 'js/{,*/}*.js'
tasks.common.allSCSSFiles = src + '/scss/{,*/}*.scss'
tasks.common.src = src + '/'

// Dest paths
tasks.common.destBase = src
tasks.common.destCSS = tasks.common.destBase + '/css/'

module.exports = tasks;

var dest = './build';
var src = './src';

var tasks = {};

tasks.common = {}

// All files path
tasks.common.allHTMLFiles = src + '/*.html'
tasks.common.allScriptFiles = src + '/scripts/**/*.js'
tasks.common.scriptBase = src + '/scripts/**/*.js'
tasks.common.allSCSSFiles = src + '/scss/{,*/}*.scss'
tasks.common.src = src + '/'

// Dest paths
tasks.common.dest = {}

tasks.common.dest.base = dest
tasks.common.dest.html = dest + ''
tasks.common.dest.javascript = dest + '/js'
tasks.common.dest.css = dest + '/css'

module.exports = tasks;

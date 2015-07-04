var src = 'src';
var dest = 'www';

var tasks = {};

tasks.common = {};

// All files path
tasks.common.allHTMLFiles = 'src/index.html';
tasks.common.allTemplates = ['src/{,*/,*/*/}*.html', '!src/index.html'];
tasks.common.allJSFiles = [src + '/{,*/,*/*/}*.js', '!'+src+'/lib{,/**}'];
tasks.common.scriptBase = src + '/{,*/}{,*/}*.js';
tasks.common.allSCSSFiles = src + '/scss/{,*/}*.scss';
tasks.common.allStaticFiles = ['src/img/**', 'src/lib/**'];
tasks.common.src = src + '/';
tasks.common.allFiles = src + '/**';

tasks.common.jsFilesHeader = ';(function () {\n\'use strict\';\n';
tasks.common.jsFilesFooter = '\n}())';

// Dest paths
tasks.common.destBase = dest;
tasks.common.destCSS = tasks.common.destBase + '/css/';

module.exports = tasks;

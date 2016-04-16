var fs = require('fs'),
    path = require('path'),
    config = require('./config');
    require('shelljs/global');

var sh = require('shelljs');
sh.config.silent = true; // Do not print the output of the commands 

var GitUtils = function(mainDirectory) {
	this.mainDirectory = mainDirectory;
}

GitUtils.prototype = {
	getAllDirectories: function() {
		var self = this;
		return fs.readdirSync(self.mainDirectory).filter(function(file) {
    		return fs.statSync(path.join(self.mainDirectory, file)).isDirectory();
  		});
  	}	
}

var gu = new GitUtils(config.path);
console.log(gu.getAllDirectories());



var yeoman = require('yeoman-generator');
var Base = yeoman.generators.Base;
var Path = require('path');

function camelCase(name) {
	return name.replace(/-\w/g, function (m) {
		return m.charAt(1).toUpperCase();
	})
}

module.exports = Base.extend({

		constructor: function () {
			Base.apply(this, arguments);
			this.option('port', {type: Number, defaults: '8000'});
			this.option('author', {type: String, defaults: ''});
			this.option('pkgName', {type: String, defaults: ''});
			this.option('pkgPrefix', {type: String, defaults: 'ov-'});
			this.option('pkgVersion', {type: String, defaults: '0.0.1'});
			this.option('repo', {type: String, defaults: ''});
		},

		welcome: function () {
			this.appname = this.appname.replace(/\s/g, '-');
			this.AppName = this.appname.charAt(0).toUpperCase() + camelCase(this.appname.slice(1));
			this.port = this.options.port;
			this.repo = this.options.repo.replace(/\.git$/i, '') || ('https://github.com/OnVelocity/react-' + this.appname);
			this.version = this.options.pkgVersion;
			this.author = this.options.author;
			this.packageName = this.options.pkgName || (this.options.pkgPrefix + 'react-' + this.appname);
			this.log('initializing react component project: ' + this.packageName);
		},

		setup: function () {
			// process templates
			var self = this;
			this.src.recurse('.', function (path, root, subdir, filename) {
				if (filename === 'gitignore') {
					filename = '.gitignore';
				} else if (filename === 'component.jsx') {
					filename = self.AppName + '.jsx';
				}
				console.log('path', path, 'newfile', subdir ? Path.resolve(subdir, filename) : filename);
				self.template(path, subdir ? Path.resolve(subdir, filename) : filename);
			});
		},

		done: function () {
			this.log('done');
		}
	}

);

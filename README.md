# generator-ov-react

yeoman generator for initializing a react component project

This generator is based on https://github.com/react-component/generator-rc.
For details, see https://github.com/react-component/rc-server and https://github.com/react-component/rc-tools


## Feature

* support precommit-hook
* support jshint/jscs
* support gh-changelog
* support mocha-phantomjs
* support coveralls.io
* support travis-ci


## Usage

```
npm install yo generator-ov-react -g
mkdir test
cd test
yo ov-react --port=8081 --version=1.0.0 --author=yiminghe@gmail.com
```

generator parameters:

```
port defaults to 8000

author defaults to empty

repo defaults to http://github.com/OnVelocity

pkg_name defaults to parent directory's name

pkg_prefix defaults to 'ov-'

pkg_version defaults to 0.0.0

```

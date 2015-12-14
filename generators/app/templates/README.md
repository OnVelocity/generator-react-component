# <%= packageName%>
---

React <%= AppName%> Component

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/<%= packageName%>.svg?style=flat-square
[npm-url]: http://npmjs.org/package/<%= packageName%>
[travis-image]: https://img.shields.io/travis/OnVelocity/react-<%= appname%>.svg?style=flat-square
[travis-url]: https://travis-ci.org/OnVelocity/react-<%= appname%>
[coveralls-image]: https://img.shields.io/coveralls/OnVelocity/react-<%= appname%>.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/OnVelocity/react-<%= appname%>?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/OnVelocity/react-<%= appname%>.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/OnVelocity/react-<%= appname%>
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/<%= packageName%>.svg?style=flat-square
[download-url]: https://npmjs.org/package/<%= packageName%>


## install

[![<%= packageName%>](https://nodei.co/npm/<%= packageName%>.png)](https://npmjs.org/package/<%= packageName%>)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 8+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


## Example

http://localhost:<%= port%>/examples/

online example: http://OnVelocity.github.io/react-<%= appname%>/


## Features

* support ie8,ie8+,chrome,firefox,safari


## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import <%= AppName%> from '<%= packageName%>'
ReactDOM.render(<<%= AppName%> />, container);
```


## API


### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>additional css class of root dom node</td>
        </tr>
    </tbody>
</table>


## Development

```
npm install
npm start
```


## Test Case

http://localhost:<%= port%>/tests/runner.html?coverage


## Coverage

http://localhost:<%= port%>/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:<%= port%>/tests/runner.html?coverage


## License

<%= packageName%> is released under the MIT license.


/*eslint-disable no-alert, no-console */
// use jsx to render html, do not modify simple.html

import React from 'react'
import ReactDOM from 'react-dom'
import <%= AppName%> from '<%= packageName%>'

ReactDOM.render(<<%= AppName%> />, document.getElementById('__react-content'))

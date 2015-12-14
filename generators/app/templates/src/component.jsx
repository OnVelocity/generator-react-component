'use strict'

import React from 'react';
import ClassNames from 'classnames'

const <%= AppName%> = props => {
	const {className, otherProps} = props;
	return (
		<div className={ClassNames("<%= packageName%>", className)} {...otherProps}><%= AppName%> component</div>
	);
}

<%= AppName%>.componentWillMount = () => console.log('mounted', this);

export default <%= AppName%>;

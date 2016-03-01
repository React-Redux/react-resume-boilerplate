import React, { Component } from 'react'

import { render } from 'react-dom'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import App from './App'
import Resume from './App/Resume'
import CoverLetter from './App/CoverLetter'

render(
	<Router history={browserHistory}> 
		<Route path="/" component={App}>
			<IndexRoute component={Resume} />
			<Route path="coverletter" component={CoverLetter} />
		</Route>
	</Router>
	, document.body.appendChild(document.createElement('div'))
)

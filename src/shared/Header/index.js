import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume'

const getLocationString = ({address, city, region, postalCode}) =>
	`${address}, ${city}, ${region} ${postalCode}`

const separator = String.fromCharCode(8226)
const Header = ({name, label, email, phone, website, summary, location}) =>
	<div>
		<h1>{name}</h1>
		<p className={styles.contact}>
			{[
				phone,
				getLocationString(location),
				email
			].join(` ${separator} `)}
		</p>
	</div>

export default () => <Header {...resume.basics} />
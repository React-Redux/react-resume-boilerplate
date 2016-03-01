import React, { Component } from 'react'

import * as styles from './styles.css'
import coverLetter from 'shared/content/coverLetter'
import { basics } from 'shared/content/resume'
import Header from 'shared/Header'
import signature from './signature.png'

import months from 'shared/months'

const Location = ({address, postalCode, city, region}) =>
	<div className={styles.location} >
		<p>{address}</p>
		<p>{`${city + (city && region ? ',' : '')} ${region} ${postalCode}`}</p>
	</div>

const getDate = () => {
	var d = new Date()
	return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
} 

const CoverLetter = ({location, recipient, paragraphs}) =>
	<div>
		<Header />
		<div className={styles.space} />

		<p>{getDate()}</p>
		
		<Location {...location} />

		<p className={styles.line} >Dear {recipient},</p>

		{paragraphs.map((m, i) => <p key={i} className={styles.paragraph}>{m}</p>)}
		<p className={styles.line}>Best regards,</p>
		<img className={styles.signature} src={signature} />

		<p>{basics.name}</p>
	</div>

export default class Container extends Component {
  render() {
    return <CoverLetter {...coverLetter} />
  }
}
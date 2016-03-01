import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume'
import Header from 'shared/Header'
import { abbreviations as monthAbbrs } from 'shared/months'

const formatDateRange = ({startDate, endDate}) => {
	var start = new Date(startDate)
	var end = new Date(endDate)

	var formatDate = date => `${monthAbbrs[date.getUTCMonth()]} ${date.getUTCFullYear()}`
	return `${formatDate(start)} - ${formatDate(end)}`
}

const makeList = (m, i) => <li key={i}>{m}</li>

const School = ({institution, area, studyType, startDate, endDate, gpa, courses}) =>
	<div className={styles.sectionItem}>
		<p className={styles.date}>{formatDateRange({startDate, endDate})}</p>
		<div className={styles.sectionContent}>
			<h3>{institution}</h3>
			<div>{area}, {studyType}, GPA: {gpa}</div>
		</div>
	</div>

const Job = ({
	company, 
	position, 
	website, 
	startDate, 
	endDate, 
	summary, 
	highlights
}) =>
	<div className={styles.sectionItem}>
		<p className={styles.date}>{formatDateRange({startDate, endDate})}</p>
		<div className={styles.sectionContent}>
			<h3>{position} <span className={styles.headerDetail}>{company}</span></h3>
			<ul className={styles.jobList}>
				{highlights.map(makeList)}
			</ul>
		</div>
	</div>

const mapTo = SomeComponent => (props, i) => 
	<SomeComponent key={i} {...props} />

const Skill = ({name, keywords}) =>
	<div>
		<h3>{name}</h3>
		<ul className={styles.gridList}>
			{keywords.reduce((list, next, i, original) => {
				var halfway = Math.round(original.length / 2)

				if (i < halfway)
					list.push([next])
				else
					list[i - halfway].push(next)

				return list
			}, []).map((arr, i) =>
				<div key={i} className={styles.gridListColumn}>
					{arr.map(makeList)}
				</div>
			)}
		</ul>
	</div>

const Resume = ({education, work, volunteer, skills}) =>
	<div className={styles.container} >
		<Header />

		<div className={styles.section} >
			<h2 className={styles.break}>Education</h2>
			{education.map(mapTo(School))}
		</div>

		<div className={styles.section} >
			<h2 className={styles.break}>Volunteer Experience</h2>
			{volunteer.map(({organization: company, ...props}, i) => 
				<Job 
					key={i} 
					{...props} 
					company={company}
				/>
			)}
		</div>

		<div >
			<h2 className={styles.break}>Corporate Experience</h2>
			{work.map(mapTo(Job))}
		</div>

		<div>
			<h2 className={styles.break}>Skills and Coursework</h2>
			{skills.map(mapTo(Skill))}
		</div>

	</div>

export default class Container extends Component {
  render() {
    return <Resume {...resume} />
  }
}
const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
]

export default days

export const abbreviations = days.map(m => m.substr(0, 3))
import path from 'path'
import { execFile } from 'child_process'
import { path as phantomjs } from 'phantomjs-prebuilt'
import { companyName } from './src/shared/content/coverLetter'
import { basics } from './src/shared/content/resume'

var toRender = [
	{ input: '', output: 'resume'},
	{ input: 'coverletter', output: 'cover letter'}
]

toRender.map(({input, output}) => {
	var url = `http://localhost:3000/${input}`
	var filePath = `./dist/${companyName}/${basics.name} ${output}.pdf`
	execFile(phantomjs, ['./rasterize.js', url, filePath], (err, stdout, stderr) => {
		if (err)
			console.log({err})
		else if (stderr)
			console.log({stderr})
		else
			console.log(`Rendered ${filePath}`)
	})
})
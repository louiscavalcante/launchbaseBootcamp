const fs = require('fs')
const data = require('./data.json')
const { age, graduation, date } = require('./utils.js')

exports.show = function (req, res) {
	const { id } = req.params

	const foundTeacher = data.teachers.find(function (teacher) {
		return teacher.id == id
	})

	if (!foundTeacher) return res.send('Teacher not found!')

	const teacher = {
		...foundTeacher,
		age: age(foundTeacher.birth),
		degree_level: graduation(foundTeacher.degree_level),
		teaches: foundTeacher.teaches.split(','),
		created_at: new Intl.DateTimeFormat('en-US').format(foundTeacher.created_at),
	}

	return res.render('teachers/show', { teacher: teacher })
}

exports.post = function (req, res) {
	const keys = Object.keys(req.body)

	for (key of keys) {
		if (req.body[key] == '' || req.body[key] == 'empty') {
			return res.send('Please fill all the fields!')
		}
	}

	let { avatar_url, full_name, birth, degree_level, attendance_type, teaches } = req.body

	birth = Date.parse(birth)
	const created_at = Date.now()
	const id = Number(data.teachers.length + 1)

	data.teachers.push({
		id,
		avatar_url,
		full_name,
		birth,
		degree_level,
		attendance_type,
		teaches,
		created_at,
	})

	fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
		if (err) return res.send('Write file error!')

		return res.redirect('/teachers')
	})

	// return res.send(req.body)
}

exports.edit = function (req, res) {
	const { id } = req.params

	const foundTeacher = data.teachers.find(function (teacher) {
		return teacher.id == id
	})

	if (!foundTeacher) return res.send('Teacher not found!')

	const teacher = {
		...foundTeacher,
		birth: date(foundTeacher.birth),
	}

	return res.render('teachers/edit', { teacher: teacher })
}

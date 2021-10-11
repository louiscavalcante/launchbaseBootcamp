module.exports = {
	age: function (timestamp) {
		const today = new Date()
		const birthDate = new Date(timestamp)

		let age = today.getFullYear() - birthDate.getFullYear()
		const month = today.getMonth() - birthDate.getMonth()

		if (month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
			age = age - 1
		}

		return age
	},
	date: function (timestamp) {
		const date = new Date(timestamp)

		const year = date.getUTCFullYear()
		const month = `${date.getUTCMonth() + 1}`.padStart(2, '0')  // Months goes from 0 to 11, so you need to add 1
		const day = `0${date.getUTCDate()}`.slice(-2)

        // Needs to return YYYY-MM-DD
		return `${year}-${month}-${day}`
	},
	graduation: function (degree) {
		switch (degree) {
			case 'associate':
				return 'Associate degree'
			case 'bachelor':
				return "Bachelor's degree"
			case 'master':
				return "Master's degree"
			case 'doctor':
				return 'Doctoral degree'
		}
	},
}

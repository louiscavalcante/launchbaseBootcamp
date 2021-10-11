console.log('-'.repeat(50))
// Users and Technologies
const users = [
	{ name: 'Carlos', technologies: ['HTML', 'CSS'] },
	{ name: 'Jasmine', technologies: ['JavaScript', 'CSS'] },
	{ name: 'Tuane', technologies: ['HTML', 'Node.js'] },
]

for (let i = 0; i < users.length; i++) {
	console.log(`${users[i].name} works with ${users[i].technologies.join(', ')}`)
}

console.log('-'.repeat(50))
// Search for Technologies
function checkIfUserWorksWithCSS(user) {
	if (user.technologies.find(x => x === 'CSS')) {
		return true
	}
	return false
}

for (let i = 0; i < users.length; i++) {
	const userWorksWithCSS = checkIfUserWorksWithCSS(users[i])

	if (userWorksWithCSS) {
		console.log(`The user ${users[i].name} works with CSS`)
	}
}

console.log('-'.repeat(50))
// Sum of Outgoing and Income
const usersNew = [
	{
		name: 'Salvio',
		income: [115.3, 48.7, 98.3, 14.5],
		outgoing: [85.3, 13.5, 19.9],
	},
	{
		name: 'Marcio',
		income: [24.6, 214.3, 45.3],
		outgoing: [185.3, 12.1, 120.0],
	},
	{
		name: 'Lucia',
		income: [9.8, 120.3, 340.2, 45.3],
		outgoing: [450.2, 29.9],
	},
]

function sumNumbers(numbers) {
	sum = numbers.reduce((a, b) => a + b, 0)
	return sum
}

function profitCalculator(income, outgoing) {
	let profit = sumNumbers(income) - sumNumbers(outgoing)
	return parseFloat(profit.toFixed(2))
}

for (let i = 0; i < usersNew.length; i++) {
	let balance = profitCalculator(usersNew[i].income, usersNew[i].outgoing)

	if (balance >= 0) {
		console.log(`${usersNew[i].name} has a POSITIVE balance of ${balance}`)
	} else {
		console.log(`${usersNew[i].name} has a NEGATIVE balance of ${balance}`)
	}
}

console.log('-'.repeat(50))

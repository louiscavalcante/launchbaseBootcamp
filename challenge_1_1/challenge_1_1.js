console.log('-'.repeat(50))
// BMI Calculator
let nameVar = 'Carl'
let weight = 84
let height = 1.88

let BMI = weight / (height * height)

if (BMI >= 30) {
	console.log(`${nameVar} you are overweight.`)
} else {
	console.log(`${nameVar} you are not overweight.`)
}

console.log('-'.repeat(50))
// Retirement Calculator
nameVar = 'Jess'
let sex = 'F'
let age = 48
let contribution = 23

let retirement = age + contribution

if (retirement >= 85) {
	if (sex === 'F') {
		console.log(`${nameVar}, you can retire!`)
	} else if (sex === 'M' && retirement >= 95) {
		console.log(`${nameVar}, you can retire!`)
	} else {
		console.log(`${nameVar}, you cannot retire!`)
	}
} else {
	console.log(`${nameVar}, you cannot retire!`)
}

console.log('-'.repeat(50))

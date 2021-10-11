console.log('-'.repeat(50))
// Construction and Impression of Objects
var company = {
	name: 'Rocketseat',
	color: 'Purple',
	focus: 'Programming',
	address: {
		street: 'Street Guilherme Gembala',
		number: 260,
	},
}

console.log(`The company ${company.name} is located at ${company['address']['street']}, ${company.address.number}`)

console.log('-'.repeat(50))
// Arrays and Objects
var programmers = {
	name: 'Carl',
	age: 32,
	technologies: [
		{ name: 'C++', expertise: 'Desktop' },
		{ name: 'Python', expertise: 'Data Science' },
		{ name: 'JavaScript', expertise: 'Web/Mobile' },
	],
}

console.log(
	`The user ${programmers.name} is ${programmers.age} years old and utilizes ${programmers.technologies[0].name} with expertise in ${programmers.technologies[0]['expertise']}`
)

console.log('-'.repeat(50))

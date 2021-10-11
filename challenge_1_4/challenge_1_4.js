console.log('-'.repeat(50))
// Banking Operations
const user = {
	name: 'Mariana',
	transactions: [],
	balance: 0,
}

function createTransaction(transaction) {
	user.transactions.push(transaction)
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

for (let transaction of user.transactions) {
	if (transaction.type === 'credit') {
		user.balance += transaction.value
	} else {
		user.balance -= transaction.value
	}
}

function getHigherTransactionByType(type) {
	let foundTypeArray = []
	let result

	for (let transaction of user.transactions) {
		if (transaction.type === type) {
			foundTypeArray.push(transaction)
			let maxValue = Math.max.apply(
				Math,
				foundTypeArray.map(x => x.value)
			)

			if (transaction.value === maxValue) {
				result = transaction
			}
		}
	}
	console.log(result)
}

function getAverageTransactionValue() {
	let transactionsValues = []

	for (let transaction of user.transactions) {
		if (transaction.value !== 0) {
			transactionsValues.push(transaction.value)
		}
	}
	let avg = transactionsValues.reduce((a, b) => a + b) / transactionsValues.length
	console.log(parseFloat(avg.toFixed(2)))
}

function getTransactionsCount() {
	let numOfTypes = {
		credit: 0,
		debit: 0,
	}

	for (let transaction of user.transactions) {
		if (transaction.type === 'credit') {
			numOfTypes.credit++
		} else {
			numOfTypes.debit++
		}
	}
	console.log(numOfTypes)
}

console.log(user.balance) // 60
console.log('-'.repeat(50))

getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
getHigherTransactionByType('debit') // { type: 'debit', value: 80 }
console.log('-'.repeat(50))

getAverageTransactionValue() // 70
console.log('-'.repeat(50))

getTransactionsCount() // { credit: 2, debit: 2 }
console.log('-'.repeat(50))

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
	card.addEventListener('click', function () {
		const videoId = card.getAttribute('id')
		modalOverlay.classList.add('active')
		modalOverlay.querySelector('iframe').src = `https://youtube.com/embed/${videoId}`
	})
}

document.querySelector('.close-modal').addEventListener('click', function () {
	modalOverlay.classList.remove('active')
	modalOverlay.querySelector('iframe').src = ''
})

const contentsModalOverlay = document.querySelector('.contents.modal-overlay')
const contentsCards = document.querySelectorAll('.contents.card')
const contentsModalMaximize = document.querySelector('.contents.modal')

for (let contentsCard of contentsCards) {
	contentsCard.addEventListener('click', function () {
		const cardId = contentsCard.getAttribute('id')
		contentsModalOverlay.classList.add('contentsActive')
		contentsModalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${cardId}`
	})
}

document.querySelector('.contents.close-modal').addEventListener('click', function () {
	contentsModalOverlay.classList.remove('contentsActive')
	contentsModalOverlay.querySelector('iframe').src = ''
	contentsModalMaximize.classList.remove('maximized')
})

document.querySelector('.contents.maximize-modal').addEventListener('click', function () {
	const maximized = contentsModalMaximize.classList.contains('maximized')
	if (maximized == false) {
		contentsModalMaximize.classList.add('maximized')
	} else {
		contentsModalMaximize.classList.remove('maximized')
	}
})

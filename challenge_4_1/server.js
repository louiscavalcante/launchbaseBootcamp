const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes.js')

const server = express()
const PORT = process.env.PORT || 5000

server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'html')

nunjucks.configure('views', {
	express: server,
	autoescape: false, // Renders HTML inside variables
	noCache: true,
})

server.listen(PORT, function () {
	console.log(`Server is running at http://localhost:${PORT}`)
})

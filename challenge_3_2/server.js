const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data.js')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
	express: server,
    autoescape: false // Renders HTML inside variables
})

server.get('/', function (req, res) {
	return res.render('courses', { items: videos })
})

server.get('/about', function (req, res) {
    const data = {
        avatar_url: 'https://avatars.githubusercontent.com/u/32718388?v=4',
        name: 'Luiz Cavalcante',
        role: 'Developer',
        description: 'Feel free to contact and follow me on my social networks',
        link: [
            { name: 'Github', url: 'https://github.com/louiscavalcante' },
            { name: 'Twitter', url: 'https://twitter.com/louiscavalcante' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/louiscavalcante' }
        ]
    }
	return res.render('about', { items: data })
})

server.use(function (req, res) {
	res.status(404).render('not-found')
})

server.listen(5000, function () {
	console.log('server is running at http://localhost:5000')
})

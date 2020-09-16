const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) =>{
	res.send('Servidor funcionando')
})

app.listen(port, () => {
	console.log(`Application listening at http://localhost:${port}`)
})

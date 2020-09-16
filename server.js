const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.use('/tribute_page', express.static('tribute_page'))
app.use('/survey_form', express.static('survey_form'))
app.use('/landing', express.static('product_landing_page'))
app.use('/doc', express.static('technical_documentation_page'))
app.use('/portifolio', express.static('personal_portifolio'))

app.listen(port, () => {
	console.log(`Application listening at http://localhost:${port}`)
})

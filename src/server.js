const express = require('express') // commonjs
const app = express()
const port = 3000
const path = require('path')

// config template engine
app.set('views', path.join(__dirname , 'views'))
app.set('view engine', 'ejs')

// define route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ejs', (req, res) => {
  res.render('sample.ejs')
})
app.get('/news', (req, res) => {
  res.send('News Page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
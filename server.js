/* eslint-disable no-console */

const bodyParser = require('body-parser')
const express = require('express')
// const {getAllTrails, getTrailsById} = require('')  will need to finish this set up
const app = express()
const port = 8080

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  return response.render('index')
})

app.get()

app.all('*', (request, response) => {
  return response.status(404).send('It seems you have gone off trail. Please reroute')
})

app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
})

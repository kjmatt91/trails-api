/* eslint-disable no-console */
// get trails by area (State/Zip)
// get trails by type (Hiking, Bike, Etc.)
// create express project with pug files only to describe each GET/POST/PUT/DELETE with example of request and response for each

const bodyParser = require('body-parser')
const express = require('express')
// const {getAllTrails, getTrailsByState, getTrailsByZip, getTrailsByType} = require('')  will need to finish this set up
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

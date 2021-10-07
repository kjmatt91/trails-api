/* eslint-disable no-console */
// get trails by area (State/Zip)
// get trails by type (Hiking, Bike, Etc.)
// create express project with pug files only to describe each GET/POST/PUT/DELETE with example of request and response for each

const express = require('express')
const app = express()
const port = 6000

app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
})

import express from 'express'
const app = express()

import restaurants from '../data'

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send("Hello, World!")
})

app.get('/restaurant_list', function (req, res) {
  res.send(JSON.stringify(restaurants))
})

app.get('/images/:imageName', function (req, res) {
  const path = __dirname + "/shapes/" + req.params.imageName
  console.log(`Going to return the image named ${path}`)
  res.sendFile(path)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

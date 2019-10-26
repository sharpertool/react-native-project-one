import express from 'express'

const app = express()

app.use(express.json())

import restaurants from '../data'

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Hello, World!')
})

app.get('/restaurant_list', function(req, res) {
  res.send(JSON.stringify(restaurants))
})

app.get('/images/:imageName', function(req, res) {
  const path = __dirname + '/shapes/' + req.params.imageName
  console.log(`Going to return the image named ${path}`)
  res.sendFile(path)
})

app.post('/review', function(req, res) {
  const data = req.body
  console.log(`Review posted by ${data.name} Rating:${data.rating}`)
  console.log(`Review Comment: ${data.comment}`)
  setTimeout(() => {
    res.status(200).send({status: 'Ok'})
  }, 2000)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

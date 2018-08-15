// grab the packages we need
var express = require('express')
var app = express()
var port = process.env.PORT || 8080

// routes will go here
app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.json())

app.post('/payload', function (req, res) {
  console.log(req.body)
  res.send('I got some JSON ...' + req.body)
})

/*
 *
 *
 * push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
 *
 * */

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port)

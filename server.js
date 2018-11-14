const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const app = express();
require('dotenv').config();


const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  encrypted: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  res.setHeader('Acess-Control-Allow-Origin', "*")
  res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.set('port', (5000))

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.post('/prices/new', (req, res) => {
  pusher.trigger('coin-prices', 'prices', {
    prices: req.body.prices
  })
  res.sendStatus(200);
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})

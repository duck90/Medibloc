require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4500;

// Static File Service
app.use(express.static('public'));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS setting
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
}).then(() => {
  console.log('Successfully connected to mongodb');
  })
  .catch(e => console.error(e));

// ROUTERS
app.use('/user', require('./routes/route'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
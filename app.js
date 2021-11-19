var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var RouteProducts = require('./routes/product');

mongoose.connect('mongodb+srv://Antoine:Antoine@testapi.2srsy.mongodb.net/DatabaseDashboard?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, useUnifiedTopology: true
  }).then(() => {
    console.log("Connexion success ! ")
  }).catch((error) => {
    console.log(error);
  }); // CONNECTION AVEC MONGOOSE DE MONGODB

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/products', RouteProducts);


module.exports = app;

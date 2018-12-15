//Package Imports

const express = require('express');
const bodyParser = require('body-parser');

// Local imports

const  { mongoose } = require('./db.js');
var app = express();
app.use(bodyParser.json());   

//app.use(bodyparser.json());

// Call the Express Server using the following code.

app.listen(3000,() => console.log('Server started at port: 3000'));

//import employeecontroller

var userCtrl = require('./controllers/userCtrl.js');

//Add router from employeeController to the application

app.use('/users', userCtrl); 
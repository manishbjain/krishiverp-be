//Package Imports

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Local imports

const { mongoose } = require('./db.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Call the Express Server using the following code.

app.listen(3000, () => console.log('Server started at port: 3000'));

//import Usercontroller

var userCtrl = require('./controllers/userCtrl.js');

//Add router from employeeController to the application

app.use('/users', userCtrl); 
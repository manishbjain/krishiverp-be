const mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {type: String, required: true, unique:true},
    primcontactno: {type: Number, required: true, unique:true},
    seccontactno: {type: Number, unique:true},
    contactemail: {type: String, required: true, unique:true},
    role: {type: String, required: true},
    primarydept: {type: String, required: true},
    secondarydept: {type: String},
    reportsto: {type: String},
    permissionlevel: {type: Number, required: true},
    username: {type: Number, required: true, unique:true},
    password: {type: String}     
});

module.exports = {User};
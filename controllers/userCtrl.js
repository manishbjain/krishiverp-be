const express = require ('express');
var router = express.Router();

var { User } = require('../models/users');

router.get('/', (req,res) => {
User.find((err,docs) =>{
if(!err)  {res.send(docs);} 
else { console.log('Error in Retrieving Employees :' + JSON.stringify(err, undefined, 2)); } 
});
});

router.post('/', (req,res) => {
    var usr = new User({
    name: req.body.name,
    primcontactno: req.body.primcontactno,
    seccontactno: req.body.seccontactno,
    contactemail: req.body.contactemail,
    role: req.body.role,
    primarydept: req.body.primarydept,
    secondarydept: req.body.secondarydept,
    reportsto: req.body.reportsto,
    permissionlevel: req.body.permissionlevel,
    username: req.body.username,
    password: req.body.password  
    })
    usr.save((err,docs)=>{
        if(!err) {res.send(docs);}
        else { console.log('Error in Saving User:' + JSON.stringify(err, undefined, 2)); } 
    })
})

module.exports = router;



const express = require ('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/users'); // CHECK - Flower Brackets Required for user ?

//Get (Retrieve) all Users

router.get('/', (req,res) => {
User.find((err,docs) =>{
if(!err)  {res.send(docs);} 
else { console.log('Error in Retrieving Users :' + JSON.stringify(err, undefined, 2)); } 
});
});

//Get Specific Users by id

router.get('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    User.findById(req.params.id, (err, docs) => {
    if(!err)  {res.send(docs);} 
    else { console.log('Error in User save :' + JSON.stringify(err, undefined, 2)); } 
    });
    });

//Post New User

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

//Update User by id

router.put('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    var usr = {
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
    };
    
    User.findByIdandUpdate(req.params.id, {$set: usr}, { new : true }, (err, docs) => {
    if(!err)  {res.send(docs);} 
    else { console.log('Error in User save :' + JSON.stringify(err, undefined, 2)); } 
    });
    });


    //Delete User by id

    router.delete('/:id', (req,res) => {
        if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
        
        User.findByIdandRemove(req.params.id, (err, doc) => {
        if(!err)  {res.send(docs);} 
        else { console.log('Error in Deleting User :' + JSON.stringify(err, undefined, 2)); } 
        });
        });

module.exports = router;



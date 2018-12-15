// connect mongoose to database

const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/krishivDB',(err) => {
    if(!err) 
     console.log('MongoDB Connection Suceeded.');
else
   console.log('Error in DB Connection : ' + JSON.stringify(err, undefined, 2));
});

// export mongoose

module.exports = mongoose;


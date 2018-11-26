const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const Food = require('../models/food');

/**
 * MongoDb connection String
 */
const db = "mongodb://127.0.0.1:27017/food";
mongoose.Promise = global.Promise;

/**
 * MongoDB Connection Establishment
 */
mongoose.connect(db ,{ useNewUrlParser: true },function(err){
    if(err){
        console.error("Error ! "+err);
    }
    else{
        console.log("Connection Establish");
    }
});

/**
 * get method used to get the data
 * Used for get the request all data and response from dB
 */
router.get('/food',function(req,res){
    console.log("Request for all foods");
    Food.find({})
    .exec(function(err,foods){
        if(err){
            console.log("Error while data reteriving" + err);
        }
        else{ 
            console.log(foods);
            res.json(foods);
        }
    });
});

/**
 * get method is used to get the data 
 * Use a particular data from database
 */
router.get('/food/:id',function(req,res){
    console.log("Request for a single food");
    Food.findById(req.params.id)
    .exec(function(err,foods){
        if(err){
            console.log("Error while data reteriving" + err);
        }
        else{
            console.log(foods);
            res.json(foods);
        }
    });
});

/**
 * post method is used to insert the data
 * Insert a data into the database
 */
router.post('/food',function(req,res){
    console.log('Post a food into DB');
    var newFood = new Food();
    newFood.name = req.body.name;
    newFood.dates = req.body.dates;
    newFood.exp_date = req.body.exp_date;
    newFood.save(function(err,insertedFood){
        if(err){
            console.log("Data Insertion error : "+ err);
        }
        else{
            res.json(insertedFood);
        }
    }); 
});

/**
 * put request used to update a data
 * findbyidandupdate take 4 args
 * first arg id 
 */
router.put('/food/:id', function(req,res){
    console.log('Update a Food');
    Food.findByIdAndUpdate(req.params.id,
    {
        $set : {name : req.body.name, dates : req.body.dates, exp_date : req.body.exp_date}
    },
    {
        new : true
    },
    function(err,updatedFood){
        if(err){
            res.send("Error updating Food : "+ err);
        }
        else{
            res.json(updatedFood);
        }
    }
    );
});

/**
 * delete used to delete a data 
 */
router.delete('/food/:id',function(req,res){
    console.log('Deleting a food from DB');
    Food.findByIdAndRemove(req.params.id,function(err,deletedFood){
        if(err){
            res.send("Error deleting food : "+ err);
        }
        else{
            res.json(deletedFood);
        }
    });
});

module.exports = router;
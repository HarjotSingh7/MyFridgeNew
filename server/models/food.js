const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * This is the blueprint or Schema
 * that crearte monogoDb
 */

const foodSchema = new Schema({
    name: String,
    dates: String,
    exp_date : String
});

/**
 * create the model of foodSchema
 * food 'name of the model'
 * foods 'name of the collection in mongoDB'
 */

module.exports = mongoose.model('food',foodSchema,'foods');
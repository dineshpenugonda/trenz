
const config = require('../../dbconfig/config');
var mongoose = require('mongoose');
const Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

mongoose.createConnection(config.url);

var personSchema = Schema({
    name: String,
    age: Number,
    nationality: String
});

var Person = mongoose.model("Person", personSchema);
const messageSchema = new Schema({
  message: { type: String },
  id : ObjectId
});

var Message = mongoose.model("Message", messageSchema);
module.exports = {
    "Person" : Person,
    "Message" : Message,
    "getAllLists" : (callback) => {
            Person.find(callback);
    }
} 

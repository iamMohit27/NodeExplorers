const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    intial user Schema,
    @SelfExplanatory
 */
const collegeSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    location: {type: String, required: true},
    imgPath: {type: String, required: true}
});

// export our Schema
module.exports = mongoose.model('User', collegeSchema);
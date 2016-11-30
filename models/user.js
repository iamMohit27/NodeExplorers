const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    intial user Schema,
    @SelfExplanatory
 */
const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    phoneNumber: {type: String, required: true}
});

// export our Schema
module.exports = mongoose.model('User', userSchema);
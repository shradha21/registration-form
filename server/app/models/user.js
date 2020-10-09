const mongoose = require('mongoose')
const isEmail  = require('validator/lib/isEmail')
const Schema = mongoose.Schema

//create a schema
const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        validate: {
            validator: function(value) {
                return isEmail(value)
            },
        message: function() {
            return 'invalid email format'
        }
        }
    },
    mobile: {
        type: Number,
        maxlength: 10
    },
    photo: {
        type: String
    }
})


//create a model
const User = mongoose.model('User',userSchema)

module.exports = User
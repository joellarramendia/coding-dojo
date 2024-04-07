const mongoose = require("mongoose");
const {Schema} = mongoose;


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "The user needs a first name"]
    },
    lastName: {
        type: String,
        required: [true, "The user needs a last name"]
    },
    email: {
        type: String,
        required: [true, "The user needs a email"]
    },
    password: {
        type: String,
        required: [true, "The user needs a password"]
    }
})

const User =  mongoose.model("Users", UserSchema);

module.exports = {
    User
}
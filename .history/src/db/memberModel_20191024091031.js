const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    user
})
//#endregion
const userModel = mongoose.model('users', userSchema)
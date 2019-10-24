const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {}
})
//#endregion
const userModel = mongoose.model('users', userSchema)
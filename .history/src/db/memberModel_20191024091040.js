const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type}
})
//#endregion
const userModel = mongoose.model('users', userSchema)
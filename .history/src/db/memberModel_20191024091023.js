const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema()
//#endregion
const userModel = mongoose.model('users', userSchema)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const memberSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true }
})
//#endregion
const memberSchema = mongoose.model('users', memberSchema)
module.exports = userModel
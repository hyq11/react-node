const mongoose = require('mongoose')

const Schema = mongoose.Schema

const memberSchema = new Schema({
    username: { type: String, require: true },
    l: { type: String, require: true }
})
//#endregion
const memberModel = mongoose.model('users', memberSchema)
module.exports = memberModel
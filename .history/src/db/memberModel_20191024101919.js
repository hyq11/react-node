const mongoose = require('mongoose')

const Schema = mongoose.Schema

const memberSchema = new Schema({
    username: { type: String, require: true },
    lines: { type: String, require: true },
    tye
})
//#endregion
const memberModel = mongoose.model('users', memberSchema)
module.exports = memberModel
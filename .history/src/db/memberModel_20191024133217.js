const mongoose = require('mongoose')

const Schema = mongoose.Schema

const memberSchema = new Schema({
    username: { type: String, require: true },
    lines: { type: Array, require: true },
    
})
//#endregion
const memberModel = mongoose.model('members', memberSchema)
module.exports = memberModel
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const memberSchema = new Schema({
    username: { type: String, required: true },
    lines: { type: Array, required: true },
    skin: { type: Array },
    phone: { type: String}
})
//#endregion
const memberModel = mongoose.model('members', memberSchema)
module.exports = memberModel
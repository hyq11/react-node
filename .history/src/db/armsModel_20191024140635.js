const mongoose = require('mongoose')
const Schema = mongoose.Schema

const armsSchema = new Schema({
    armsname: { type: String }
})

const armsModel = mongoose.model('arms', armsSchema)
module.exports = armsModel

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const armsSchema = new Schema({
    armsname: { type: String , required: true},
    ty
})

const armsModel = mongoose.model('arms', armsSchema)
module.exports = armsModel

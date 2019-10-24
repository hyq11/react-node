const mongoose = require('mongoose')
const Schema = mongoose.Schema

const armsSchema = new Schema({
    armsname: { type: String , required: true},
    use
})

const armsModel = mongoose.model('arms', armsSchema)
module.exports = armsModel

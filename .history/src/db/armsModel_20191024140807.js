const mongoose = require('mongoose')
const Schema = mongoose.Schema

const armsSchema = new Schema({
    armsname: { type: String , required: true},
    usescenario: { type: String , require: true} // 使用场景 
})

const armsModel = mongoose.model('arms', armsSchema)
module.exports = armsModel

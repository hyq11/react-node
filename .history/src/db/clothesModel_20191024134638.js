const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clothSchema = new Schema({
    clothname: { type: String, required: true },
    cloth
})

const clothModel = mongoose.model('clothes', clothSchema)

module.exports = clothModel
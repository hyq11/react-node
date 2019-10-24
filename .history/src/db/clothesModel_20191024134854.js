const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clothSchema = new Schema({
    clothname: { type: String, required: true },
    clothsize: { type: String, required: true},
    industrialart: { type: String, required: true},
    pattern: { type: String, required: true},
    clothsize: { type: String, required: true},
    clothsize: { type: String, required: true},
    clothsize: { type: String, required: true}
})

const clothModel = mongoose.model('clothes', clothSchema)

module.exports = clothModel
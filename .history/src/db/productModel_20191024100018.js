const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: { type: String, require: true },
    price: { type: String, require: true },
    type: {type: Date}
})
//#endregion
const prodctModel = mongoose.model('users', productSchema)

module.exports = prodctModel
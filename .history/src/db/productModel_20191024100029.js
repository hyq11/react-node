const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productname: { type: String, require: true },
    price: { type: String, require: true },
    typename: { type: }
})
//#endregion
const prodctModel = mongoose.model('users', productSchema)

module.exports = prodctModel
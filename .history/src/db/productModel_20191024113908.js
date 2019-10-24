const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productname: { type: String, require: true },
    price: { type: String, require: true },
    typename: { type: string, require: true},
    typeid: { type: String, require: true },
    img: { type: String , require: true },
    origin: { type: String, require: true },
    brand: { type: String, require: true},
    size: { type: Number, require: true},     //规格
    weight: { type: Number, require: true}    // 净重
})
//#endregion
const prodctModel = mongoose.model('products', productSchema)

module.exports = prodctModel
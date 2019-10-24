const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productname: { type: String, required: true },
    price: { type: String, required: true },
    typename: { type: string, required: true},
    typeid: { type: String, required: true },
    img: { type: String , required: true },
    origin: { type: String, required: true },
    brand: { type: String, required: true},
    size: { type: Number, required: true},     //规格
    weight: { type: Number, required: true}    // 净重
})
//#endregion
const prodctModel = mongoose.model('products', productSchema)

module.exports = prodctModel
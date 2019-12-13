const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productname: { type: String, require: true },
    price: { type: Number,},
    typename: { type: String, require: true}, // 分类的名称
    typeid: { type: String, require: true },   // 商品类型的id
    img: { type: Array},
    origin: { type: String},
    brand: { type: String},
    size: { type: String},     //规格
    weight: { type: Number},    // 净重
    description: { type: String}
})
//#endregion
const prodctModel = mongoose.model('products', productSchema)

module.exports = prodctModel
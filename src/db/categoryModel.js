const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    categoryName: { type: String, require: true }, // 英雄分类
    speciality: { type: String, require: true },  // 特点
    description: { type: String }, // 描述
    parentId: { type: String , default: '0'}
})
const categoryModel = mongoose.model('category', categorySchema)
module.exports = categoryModel
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({
    roletype: { type: String, require: true }, // 英雄分类
    speciality: { type: String, require: true },  // 特长
    description: { type: String }
})
const roleModel = mongoose.model('roles', roleSchema)
module.exports = roleModel
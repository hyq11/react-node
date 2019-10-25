const mongoose = require('mongoose')

const Schema = mongoose.Schema

const memberSchema = new Schema({
    username: { type: String, require: true },
    lines: { type: Array, require: true },
    skin: { type: Array },
    phone: { type: String , require: true },
    workno: { type: String, require: true },  // 工号
    roletype: { type: [String], require: true }, // 角色类型
    img: {type: String, require: true }      // 图片
})
//#endregion
const memberModel = mongoose.model('members', memberSchema)
module.exports = memberModel
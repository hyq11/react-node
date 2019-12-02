const mongoose = require('mongoose')
const Schema = mongoose.Schema
const roleSchema = new Schema({
    menus:{ type: Array, default: []}, // ['/home', '/manage']
    name: { type: String, require: true }, // 角色名称
    auth_time: { type: Date, default: Date.now()}, // 授权时间
    auth_name: { type: String, default: 'admin'}, // 授权人
    createTime: { type: Date,  default: Date.now() } // 创建时间
},{
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'auth_time' }
})
const roleModel = mongoose.model('roles', roleSchema)
module.exports = roleModel
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String, require: true,
        timestamps: { createdAt: 'created', updatedAt: 'updated' }
    },
    password: { type: String, require: true },
    phone: { type: String, default: 3 },
    email: { type: String, require: true },
    roleId: { type: String, default: ''},
    roleName: { type: String, default: ''},
    createDate: { type: Date, default: Date.now()}
})
//#endregion
const userModel = mongoose.model('users', userSchema)
module.exports = userModel
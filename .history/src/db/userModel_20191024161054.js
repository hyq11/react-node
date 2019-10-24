const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    sex: { type: Number, default: 3}, // 1女， 2男
    birth: { type: Date, default: null },
    email: { type: String, required: true  },
    realname: { type: String, required: true }
})
//#endregion
const userModel = mongoose.model('users', userSchema)
module.exports = userModel
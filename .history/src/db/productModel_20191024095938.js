const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    birthday: {type: Date}
})
//#endregion
const prodctModel = mongoose.model('users', productSchema)
e
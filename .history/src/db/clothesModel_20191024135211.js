const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clothSchema = new Schema({
    clothname: { type: String, required: true },
    clothsize: { type: String, required: true}, // 款号
    industrialart: { type: String, required: true}, // 工艺
    pattern: { type: String, required: true}, // 版型
    thickness: { type: String, required: true}, // 厚薄
    sli: { type: String, required: true},
    clothsize: { type: String, required: true}
})

const clothModel = mongoose.model('clothes', clothSchema)

module.exports = clothModel
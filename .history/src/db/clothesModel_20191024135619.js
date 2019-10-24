const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clothSchema = new Schema({
    clothname: { type: String, required: true },
    clothsize: { type: String, required: true}, // 款号
    industrialart: { type: String, required: true}, // 工艺
    pattern: { type: String, required: true}, // 版型
    thickness: { type: String, required: true}, // 厚薄
    sleeveLength: { type: String, required: true}, // long medium short 
    fabric: { type: String, required: true} //面料
})

const clothModel = mongoose.model('clothes', clothSchema)

module.exports = clothModel
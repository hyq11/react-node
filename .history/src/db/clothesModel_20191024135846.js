const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clothSchema = new Schema({
    clothname: { type: String, required: true },
    clothno: { type: String, required: true}, // 款号
    industrialart: { type: String, required: true}, // 工艺
    pattern: { type: String, required: true}, // 版型
    thickness: { type: String, required: true}, // 厚薄
    sleeveLength: { type: String, required: true}, // long medium short 
    fabric: { type: String, required: true}, // 面料
    style: { type: String, required: true}, // 风格
    collartype: { type: String, required: true}, // 领型
    color: { type: String, required: true}, // 颜色
    size: { type: String, required: true}, // 尺码
    fabricComposition: { type: String, required: true}, // 面料成分
    
})

const clothModel = mongoose.model('clothes', clothSchema)

module.exports = clothModel
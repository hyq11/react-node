const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clothSchema = new Schema({
    clothname: { type: String, require: true },
    clothno: { type: String, require: true}, // 款号
    industrialart: { type: String, require: true}, // 工艺
    pattern: { type: String, require: true}, // 版型
    thickness: { type: String, require: true}, // 厚薄
    sleeveLength: { type: String, require: true}, // long medium short 
    fabric: { type: String, require: true}, // 面料
    style: { type: String, require: true}, // 风格
    collartype: { type: String, require: true}, // 领型
    color: { type: String, require: true}, // 颜色
    size: { type: String, require: true}, // 尺码
    fabricComposition: { type: String, require: true}, // 面料成分    
})

const clothModel = mongoose.model('clothes', clothSchema)

module.exports = clothModel
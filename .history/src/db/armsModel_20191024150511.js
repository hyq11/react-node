const mongoose = require('mongoose')
const Schema = mongoose.Schema

const armsSchema = new Schema({
    armsname: { type: String , required: true},
    useScenario: { type: String , require: true}, // 使用场景 陆海空
    weaponsType: { type: String, require: true },
    img: String,
    desc: String,
    hitDamage

})

const armsModel = mongoose.model('arms', armsSchema)
module.exports = armsModel

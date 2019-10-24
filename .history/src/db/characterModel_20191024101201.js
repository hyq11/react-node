const mongoose = require('mongoose')
var Schema = mongoose.Schema;

// 定义一个schema
var CharacterSchema = new Schema({
    'name': String,
    'ATK': Number,  // 攻击力
    'DEF': Number,  // 防御力
    'STR' : Number, //力量
    'AGI' : Number, // 敏捷
    'INT' : Number,
    'EXP' : Number,
    'LV' : Number,
    'HP/LP': Number,
    'MP' : Number,
});
// 创建一个model
var characterModel = mongoose.model('character', CharacterSchema)

module.exports = characterModel
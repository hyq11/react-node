const mongoose = require('mongoose')
var Schema = mongoose.Schema;

// 定义一个schema
var CharacterSchema = new Schema({
    'name': String,
    'ATK': Number,  // 攻击力
    'DEF': Number,  // 防御力
    'STR' : Number, //力量
    'AGI' : Number, // 敏捷
    'INT' : Number,     //智力
    'EXP' : Number,     // 经验
    'LV' : Number,      //等级
    'HP': Number,    // 
    'MP' : Number,
});
// 创建一个model
var characterModel = mongoose.model('character', CharacterSchema)

module.exports = characterModel
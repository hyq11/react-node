const mongoose = require('mongoose')
var Schema = mongoose.Schema;

// 定义一个schema
var SkillSchema = new Schema({
    'name': { type: String, require: true},
    'ATK': { type: Number, require: true },  // 攻击力
    'DEF': { type: Number, require: true },  // 防御力
    'STR' : { type: Number, require: true }, //力量
    'AGI' : { type: Number, require: true }, // 敏捷
    'INT' : { type: Number, require: true }, //智力
    'EXP' : { type: Number, require: true }, // 经验
    'LV' : { type: Number, require: true },  //等级
    'HP/LP': { type: Number, require: true },// 生命值
    'MP' : { type: Number, require: true }   // 魔法力
});
// 创建一个model
var skillModel = mongoose.model('skills', SkillSchema)

module.exports = skillModel
const mongoose = require('mongoose')
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/manage');
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    console.log('数据库连接成功')
})
var Schema = mongoose.Schema;

var kittySchema = new Schema({
    name: String
    ATK
    DEF （defence）防御力
    STR （strong）力量
    AGI （agility）敏捷
    INT （intelligence）智力
    EXP （experience）经验
    LV （level）等级
    HP/LP （health point/ life point）生命值
    MP （mana point）魔法值
});
var Kitten = mongoose.model('Kitten', kittySchema)
console.log()
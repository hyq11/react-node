const mongoose = require('mongoose')
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/manage');
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    console.log('数据库连接成功')
})
var Schema = mongoose.Schema;
var Model = mongoose.Model;

// 定义一个schema
var CharacterSchema = new Schema({
    'name': String,
    'ATK': Number,
    'DEF': Number,
    'STR' : Number,
    'AGI' : Number,
    'INT' : Number,
    'EXP' : Number,
    'LV' : Number,
    'HP/LP': Number,
    'MP' : Number,
});
// 创建一个model
var character = Model('Kitten', CharacterSchema)
var data = [
    {
        'name': '礼包',
        'ATK': 100,
        'DEF': 98,
        'STR' : 23,
        'AGI' : Number,
        'INT' : Number,
        'EXP' : Number,
        'LV' : Number,
        'HP/LP': Number,
        'MP' : Number,
    }
]
character.create()
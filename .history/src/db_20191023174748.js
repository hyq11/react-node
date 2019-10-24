const mongoose = require('mongoose')
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/game');
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    console.log('数据库连接成功')
})
var Schema = mongoose.Schema;

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
var character = mongoose.model('character', CharacterSchema)
var data = [
    {
        'name': '李白',
        'ATK': 100,
        'DEF': 98,
        'STR' : 23,
        'AGI' : 234,
        'INT' : 24,
        'LV' : 234,
        'HP/LP': 3445,
        'MP' : 345,
    },
    {
        'name': '孙尚香',
        'ATK': 245,
        'DEF': 2523,
        'STR' : 463,
        'AGI' : 37,
        'INT' : 33,
        'LV' : 353,
        'HP/LP': 255,
        'MP' : 41,
    },
    {
        'name': '公孙离',
        'ATK': 245,
        'DEF': 13,
        'STR' : 435463,
        'AGI' : 3437,
        'INT' : 33543,
        'LV' : 353543,
        'HP/LP': 253455,
        'MP' : 41,
    }
]
character.create(data, (err, data)=> {
    if(err) {
        console.log('错误')
    } else {
        console.log('成功')
    }
})
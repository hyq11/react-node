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

character.create(data, (err, data)=> {
    if(err) {
        console.log('错误')
    } else {
        console.log('成功')
    }
})
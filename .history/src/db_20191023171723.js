const mongoose = require('mongoose')
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/manage');
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    console.log('数据库连接成功')
})
var Schema = mongoose.Schema;

var kittySchema = new Schema({
    'name': String,
    ATK: Number,
    DEF: Number,
    STR : Number,
    AGI : Number,
    INT : Number,
    EXP : Number,
    LV : Number,
    HP/LP: Number,
    MP : Number,
});
var Kitten = mongoose.model('Kitten', kittySchema)
console.log()
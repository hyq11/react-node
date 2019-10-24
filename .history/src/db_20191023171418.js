const mongoose = require('mongoose')
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/manage');
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    console.log('数据库连接成功')
})
var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema)
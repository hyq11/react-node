const mongoose = require('mongoose')
var db = mongoose.connection;

//mongoose.connect("mongodb://localhost:端口号/数据库名称");

mongoose.connect('mongodb://localhost:27017/game');
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    console.log('数据库连接成功')
})
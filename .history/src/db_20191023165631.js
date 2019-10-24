const mongoose = require('mongoose')
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27101/manage');
db.on('open', function() {
    console.log('数据库连接成功')
})
var Shema = mongoose.Schema
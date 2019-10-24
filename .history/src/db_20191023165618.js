const mongoose = require('mongoose')
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27101/manage');
db.on('open', function() {
    conse
})
var Shema = mongoose.Schema
const mongoose = require('mongoose')
var db = mongoose.connection;
var Shema = mongoose.Schema
mongoose.connect('mongodb://localhost:27101/manage');

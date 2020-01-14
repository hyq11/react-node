const express = require('express')
const router= express.Router()
var multer  = require('multer')
const path = require('path')

const des = path.join(__dirname, '../../public/images/upload')

const uid = (Math.random()*(1, 1000000)).toString(36).slice(0,4) //产生随机数据

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, des)
    },
    filename: function (req, file, cb) {
      let arr = file.mimetype.split('/')
      cb(null, Date.now() + uid + '-'+ file.fieldname+'.'+ arr[arr.length-1])
    }
})
   
var upload = multer({ storage  })

//  upload.array(字段名)，这个要合前端的name值一致，不然会报错的
router.post('/file', upload.array('img'), function (req, res, next) {
    let list = req.files
    res.send({
      code: 200,
      message: '上传成功',
      src: list
    })
})
module.exports = router
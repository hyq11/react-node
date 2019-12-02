const express = require('express')
const router= express.Router()
var multer  = require('multer')
const path = require('path')
const desc = '/public/images/arms/'
var upload = multer({dest: path.join(__dirname, 'desc')})
const fs = require('fs')

router.post('/photos/upload', upload.any(), (req, res, next)=> {
    var target_file = path.join(__dirname, desc + req.files[0].originalname ) // 存储在本地的地址
    const source_path = req.files[0].path
    fs.readFile(source_path, (err, data)=> {
        fs.writeFile(target_file, data, (err) => {
            if(err) {
                res.send({
                    code: -2,
                    message: 'error'
                })
            } else {
                res.send({
                    code: 200,
                    message: '上传成功',
                    src: '/public/arms/' + req.files[0].originalname  // 返回存要储在数据库的地址
                })
            }
        })
    })
})
module.exports = router
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

// form 表单解析
app.use(bodyParser.urlencoded({ extended: false }))
// json解析
app.use(bodyParser.json())

app.post('/login', (req, res)=> {
    console.log(req.body)
    res.send({
        code: 200,
        message: '登陆成功'
    })
})

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
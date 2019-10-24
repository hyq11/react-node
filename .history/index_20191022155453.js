const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
// 允许跨域
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}))
// form 表单解析
app.use(bodyParser.urlencoded({ extended: false }))
// json解析
app.use(bodyParser.json())

app.post('/login', (req, res)=> {
    console.log(req.body)
    const { username, password} = req.body
    if(username === 'admin' && password === '123456') {
        res.send({
            code: 200,
            message: '登录成功',
            data: {
                id: 9527,
                username: 'admin',
                password: '123456'
                token: 'XCATU7A89SDBIVAAFFWF_CAASD'
            }
        })
    } else {
        res.status(404).send({
            code: -1,
            error: '户名或密码不正确',
            message: '户名或密码不正确'
        })
    }
})

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
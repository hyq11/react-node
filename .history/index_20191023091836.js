const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

let userRouter = require('./src/routers/home.js')
// 允许跨域
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}))
// form 解析表单的数据
app.use(bodyParser.urlencoded({ extended: false }))
// json 解析JSON的数据
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
                password: '123456',
                token: 'XCATU7A89SDBIVAAFFWF_CAASD'
            }
        })
    } else {
        res.status(404).send({
            code: -1,
            error: '',
            message: '户名或密码不正确'
        })
    }
})
app.use('/user', userRouter)

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
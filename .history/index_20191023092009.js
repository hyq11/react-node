const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

let userRouter = require('./src/routers/home')
let userRouter = require('./src/routers/login')
// 允许跨域
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}))
// form 解析表单的数据
app.use(bodyParser.urlencoded({ extended: false }))
// json 解析JSON的数据
app.use(bodyParser.json())

app.use('/home', homeRouter)
app.use('/user', userRouter)

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
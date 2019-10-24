const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
// 引入数据库
const 

let homeRouter = require('./src/routers/home')
let userRouter = require('./src/routers/login')

// 中间件使用
// app.use('/', (req, res, next) => {
// app.use((req, res, next) => {
//     console.log('中间件')
//     let { token } = req.query
//     if(token) {
//         next() // 允许往下走就要加next()
//     } else {
//         res.send({
//             code: 201,
//             message: '缺少token'
//         })
//     }
// })
// 允许跨域
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}))
// form 解析表单的数据
app.use(bodyParser.urlencoded({ extended: false }))
// json 解析JSON的数据
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, './public/images')))

app.use('/home', homeRouter)
app.use('/user', userRouter)

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
// 引入数据库
const db = require('./src/serve')

let characterRouter = require('./src/routers/character')
let userRouter = require('./src/routers/login')
let roleRouter = require('./src/routers/role')
let memberRouter = require('./src/routers/member')
let armRouter = require('./src/routers/arms')
let skillRouter = require('./src/routers/skill')
let productRouter = require('./src/routers/product')
let category = require('./src/routers/category')
let upload = require('./upload')

// 中间件使用
// app.use('/', (req, res, next) => {
// app.use((req, res, next) => {
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

app.use('/user', userRouter)
app.use('/character', characterRouter)
app.use('/role', roleRouter)
app.use('/member', memberRouter)
app.use('/arm', armRouter)
app.use('/skill', skillRouter)
app.use('/product', productRouter)
app.use('/category', category)
app.use('/upload', upload)

app.use((err, req, res, next) => {
      if(err) {
          res.send({
              error: -1,
              message: err.message
          })
        throw Error(next(err))
      } 
})
app.listen(9527, () => {
    console.log('9527 serve is running...')
})
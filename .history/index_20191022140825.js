const express = require('express')
const app = express()
var bodyParser = require('body-parser')

// form 表单解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/login', (req, res)=> {
    console.log(req.params.name)
    
})

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
const express = require('express')
const app = express()

app.get('/login', (req, res)=> {
    console.log(req.param)
})

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
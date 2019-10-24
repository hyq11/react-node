const express = require('express')
const app = express()

app.get('/login/:name', (req, res)=> {
    console.log(req.paramer.name)
    res.send(`${req.param.name}`)
})

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
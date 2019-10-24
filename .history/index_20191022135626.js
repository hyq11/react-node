const express = require('express')
const app = express()

app.get('/login/:name', (req, res)=> {
    console.log(req.params.name)
    res.send(`${req.params.name}`)
})

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
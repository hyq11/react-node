const express = require('express')
const app = express()

app.post('/login', (req, res)=> {
    console.log(req.params.name)
     
})

app.listen(9527, ()=>{
    console.log('9527 serve is running...')
})
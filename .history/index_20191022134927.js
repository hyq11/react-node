const express = require('express')
const app = express()

app.get('/login', (req, res)=> {
    console.log(req)
})
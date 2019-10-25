const express = require('express')
const route = express.Router()
const roleModel = require('../db/roleModel')

route.get('/list', async (req, res) => {
    const reqData = req.query || {}
    try {
        const result = await roleModel.find(reqData)
        res.send({
            code: 200,
            result
        })
    }
    catch(err) {
        res.send({
            code: -1,
            message: err
        })
    }
})

route.post('/add', async (req, res) => {
    const reqData = req.body
    try {
        await roleModel.insertMany(reqData)
        res.send({
            code: 200,
            message: "ok"
        })
    }
    catch(err) {
        res.send({
            code: -1,
            message: err
        })
    }
})

route.post('/del', async (req, res) => {
    const {id} = req.body
    try {
        const result = await roleModel.remove({_id: id})
        if(result.deletedCount>0) {
            res.send({
                code: 200,
                message: "ok"
            })
        } else {
            res.send({
                code: 201,
                message: "此数据不存在"
            })
        }
    }
    catch(err) {
        res.send({
            code: -1,
            message: err
        })
    }
})
route.post('/update', async (req, res) => {
    const {id} = req.body
    try {
        const result = await roleModel.findByIdAndUpdate({_id: id}, req.body)
        res.send({
            code: 200,
            message: 'ok'
        })
    }
    catch(err) {
        res.send({
            code: -1,
            message: err
        })
    }
})
module.exports = route
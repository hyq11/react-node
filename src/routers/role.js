const express = require('express')
const route = express.Router()
const roleModel = require('../db/roleModel')

/**
 * @api {get} /role/list 角色列表
 * @apiName list
 * @apiGroup Role
 * 
 * @apiParam { string } herotype 角色名称
 * @apiParam { string } speciality 特长
 * @apiParam { string } description 描述
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "result": []
 *     }
 */
route.get('/list', async (req, res, next) => {
    const reqData = req.query || {}
    try {
        const result = await roleModel.find(reqData)
        res.send({
            code: 200,
            result
        })
    }
    catch(err) {
        next(err)
    }
})
/**
 * @api {get} /role/add 添加
 * @apiName add
 * @apiGroup Role
 * 
 * @apiParam { string } herotype 角色名称
 * @apiParam { string } speciality 特长
 * @apiParam { string } description 描述
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": 'ok'
 *     }
 */
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
/**
 * @api {get} /role/del 删除
 * @apiName del
 * @apiGroup Role
 * 
 * @apiParam { string } id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": 'ok'
 *     }
 */
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
/**
 * @api {get} /role/update 编辑
 * @apiName update
 * @apiGroup Role
 * 
 * @apiParam { string } id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": 'ok'
 *     }
 */
route.post('/update', async (req, res) => {
    const {id, herotype} = req.body
    try {
        const result = await roleModel.findByIdAndUpdate({_id: id}, {herotype})
        res.send({
            code: 200,
            message: 'ok',
            data: result
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
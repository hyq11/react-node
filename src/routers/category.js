const express = require('express')
const route = express.Router()
const categoryModel = require('../db/categoryModel')

/**
 * @api {get} /category/list 角色列表
 * @apiName list
 * @apiGroup category
 * 
 * @apiParam { string } categoryName 角色名称
 * @apiParam { string } speciality 特点
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
        const result = await categoryModel.find(reqData)
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
 * @api {get} /category/add 添加
 * @apiName add
 * @apiGroup category
 * 
 * @apiParam { string } categoryName 角色名称
 * @apiParam { string } speciality 特点
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
        await categoryModel.insertMany(reqData)
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
 * @api {get} /category/del 删除
 * @apiName del
 * @apiGroup category
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
        const result = await categoryModel.remove({_id: id})
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
 * @api {get} /category/update 编辑
 * @apiName update
 * @apiGroup category
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
    const {id, categoryName} = req.body
    try {
        const result = await categoryModel.findByIdAndUpdate({_id: id}, {categoryName})
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
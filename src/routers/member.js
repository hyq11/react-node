const express = require('express')
const route = express.Router()
const memberModel = require('../db/memberModel')

/**
 * @api {get} /member/list 会员列表
 * @apiName list
 * @apiGroup Member
 *
 * @apiParam {String} username 会员名称
 * @apiParam {Array} roletype 角色类型
 * @apiParam {String} workNo 工号
 *
 * @apiSuccessExample {json} Sucess-Response: { code: 200 , result: []}
 * 
 */
route.get('/list',async (req, res)=>{
    const reqData = req.query || {}
    try {
        const result = await memberModel.find(reqData)
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
/**
 * @api {post} /member/list 会员列表
 * @apiName list
 * @apiGroup Member
 *
 * @apiParam {String} username 会员名称
 * @apiParam {Array} lines 皮肤
 * @apiParam {Array} roletype 角色类型
 * @apiParam {String} phone 联系方式
 * @apiParam {String} workNo 工号
 * @apiParam {String} img 工号
 *
 * @apiSuccessExample {json} Sucess-Response: { code: 200 , result: []}
 * 
 */
route.post('/add',async (req, res)=>{
    const reqData = req.body
    try {
        const result = await memberModel.insertMany(reqData)
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
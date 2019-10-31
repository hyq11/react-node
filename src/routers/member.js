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
 * @apiParam {String} workno 工号
 * @apiParam {String} img 图片
 * @apiParam {String} phone 联系方式
 * @apiParam {String} lines 箴言
 * @apiParam {Array} skin 皮肤
 * @apiParam {Number} page 哪一页
 * @apiParam {Number} pageSize 每页条数
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "result": []
 *     }
 * 
 */

route.get('/list', async (req, res) => {
    const {username,id, page=1, pageSize=10 } = req.query || {}
    const searchData = {}
    if(id && username) {
        searchData.username = username
        searchData._id = id
    } else if(id) {
        searchData._id = id
    } else if(username)  {
        searchData.username = username
    }
    try {
        const result = await memberModel.find(searchData).limit(Number(pageSize)).skip((Number(page)-1)*(Number(pageSize)))
        res.send({
            code: 200,
            result
        })
    }
    catch (err) {
        res.send({
            code: -1,
            message: err
        })
    }
})
/**
 * @api {post} /member/add 添加会员
 * @apiName add
 * @apiGroup Member
 *
 * @apiParam {String} username 会员名称
 * @apiParam {Array} lines 皮肤
 * @apiParam {Array} roletype 角色类型
 * @apiParam {String} phone 联系方式
 * @apiParam {String} workNo 工号
 * @apiParam {String} img  图片
 * @apiParam {Array} skin 皮肤
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": "ok"
 *     }
 * 
 */
route.post('/add', async (req, res) => {
    const reqData = req.body
    try {
        const result = await memberModel.insertMany(reqData)
        res.send({
            code: 200,
            message: 'ok'
        })
    }
    catch (err) {
        res.send({
            code: -1,
            message: err
        })
    }
})

/**
 * @api {post} /member/update/username 编辑会员
 * @apiName updateusername
 * @apiGroup Member
 *
 * @apiParam {String} username 会员名称
 * @apiParam {String} workNo 工号
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": "ok"
 *     }
 * 
 */
route.post('/update/username', async (req, res) => {
    const {id, username, workno} = req.body
    try {
        const result = await memberModel.findByIdAndUpdate({_id: id}, {username, workno})
        res.send({
            code: 200,
            message: 'ok'
        })
    }
    catch (err) {
        res.send({
            code: -1,
            message: err.message
        })
    }
})

/**
 * @api {post} /member/del  删除
 * @apiName del
 * @apiGroup Member
 *
 * @apiParam {String} id 会员id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": "ok"
 *     }
 * 
 */
route.post('/del', async (req, res) => {
    const {id} = req.body
    try {
        const result = await memberModel.remove({_id: id})
        if(result.ok === 1 && result.deletedCount === 1) {
            res.send({
                code: 200,
                message: 'ok'
            })
        }
    }
    catch (err) {
        res.send({
            code: -1,
            message: err.message
        })
    }
})
module.exports = route
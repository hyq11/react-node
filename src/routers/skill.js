const express = require('express')
const route = express.Router()
const skillModel = require('../db/skillModel')

/**
 * @api {get} /skill/list 角色列表
 * @apiName list
 * @apiGroup skill
 * 
 * @apiParam { string } name 英雄名称
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
        const result = await skillModel.find(reqData)
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
 * @api {get} /skill/add 添加
 * @apiName add
 * @apiGroup skill
 * 
 * @apiParam { string } name 英雄名称
 * @apiParam { Number } ATK 攻击力
 * @apiParam { Number } DEF 防御力
 * @apiParam { Number } STR 力量
 * @apiParam { Number } AGI 敏捷
 * @apiParam { Number } INT 智力
 * @apiParam { Number } EXP 经验
 * @apiParam { Number } LV 等级
 * @apiParam { Number } HP/LP 生命值
 * @apiParam { Number } MP 魔法力
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": "ok"
 *     }
 */
route.post('/add', async (req, res) => {
    const reqData = req.body
    console.log(reqData)
    try {
        await skillModel.insertMany(reqData)
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
 * @api {get} /skill/del 删除
 * @apiName del
 * @apiGroup skill
 * 
 * @apiParam { string } id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": "ok"
 *     }
 */
route.post('/del', async (req, res) => {
    const {id} = req.body
    try {
        const result = await skillModel.remove({_id: id})
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
 * @api {get} /skill/update 编辑
 * @apiName update
 * @apiGroup skill
 * 
 * @apiParam { string } id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": "ok"
 *     }
 */
route.post('/update', async (req, res) => {
    const {id, 
        name, 
        ATK, 
        DEF, 
        STR, 
        AGI, 
        INT, 
        EXP,
        LV,
        MP
    } = req.body
    try {
        await skillModel.findByIdAndUpdate({_id: id}, {
            name, 
            ATK, 
            DEF, 
            STR, 
            AGI, 
            INT, 
            EXP,
            LV,
            MP })
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
/**
 * @api {get} /skill/info 获取角色详情
 * @apiName info
 * @apiGroup skill
 * 
 * @apiParam { string } _id 英雄iD
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "result": []
 *     }
 */
route.get('/info', async (req, res, next) => {
    const { id } = req.query
    console.log(id)
    try {
        const result = await skillModel.findById({_id:id})
        res.send({
            code: 200,
            result
        })
    }
    catch(err) {
        next(err)
    }
})
module.exports = route
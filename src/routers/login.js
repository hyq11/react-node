var express = require('express')
var router = express.Router()
const userModel = require('../db/userModel')

/**
 * @api {post} /user/reg 注册用户信息
 * @apiName regUserInfo
 * @apiGroup User
 *
 * @apiParam {String} username 用户名称
 * @apiParam {String} password 密码
 * @apiParam {Number} sex 性别
 * @apiParam {Date} birth 生日
 * @apiParam {String} email 邮箱
 * @apiParam {String} realname 真是姓名
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *      "messgae": "ok"
 *     }
 */

router.post('/reg', async (req, res) => {
    const reqData = req.body
    const username = reqData.username
    // 首先判断数据库中是否已经存在这个用户
    try {
        const result = await userModel.find({username})
        if(result.length) {
            res.send({
                code: -1,
                message: '用户名已存在'
            })
        } else {
            await userModel.insertMany(reqData)
            res.send({
                code: 200,
                message: '注册成功'
            })
        }
    }catch(err) { 
        res.send({
            code:202,
            message: err
        })
    }
})

/**
 * @api {post} /user/login 登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} username 用户名称
 * @apiParam {String} password 密码
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *      "messgae": "ok"
 *     }
 */

router.post('/login', async (req, res) => {
    const reqData = req.body
    try {
        const  result = await userModel.find(reqData)
        if(result.length) {
            res.send({
                code: 200,
                message: 'ok',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaHlxIiwiYWdlIjo5NX0.niu2diPJQNoB1hnt-RvEcalnN7eth2J_2p9aXOdHq0U',
                result
            })
        }else {
            res.send({
                code: -1,
                message: '用户不存在'
            })
        }
    } catch(err) {
        res.send({
            code:202,
            message: err
        })
    }
})
/**
 * @api {post} /user/update 用户信息编辑
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} username 用户名称
 * @apiParam {String} password 密码
 * @apiParam {Number} sex 性别
 * @apiParam { Date } birth 生日
 * @apiParam { String } email 邮箱
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *      "messgae": "ok"
 *     }
 */

 router.post('/update', async (req, res) => {
     const reqData = req.body
     const { id } = reqData

     try {
         if(!id) {
             res.send({
                code: -1,
                message: 'id必传'
             })
         }
        const result = await userModel.findOneAndUpdate({_id:id}, reqData)
        if(result) {
            res.send({
                code: 200,
                message: 'ok'
            })
        } else {
            res.send({
                code: 201,
                message: '修改失败'
            })
        }
     }
     catch(err) {
         res.send({
             code: 201,
             message: err
         })
     }
 })

 /**
 * @api {post} /user/info 获取单个用户信息
 * @apiName getUserInfo
 * @apiGroup User
 *
 * @apiParam {String} id 用户id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *      "messgae": "ok"
 *     }
 */

 router.get('/info', async (req, res) => {
     const {id} = req.query
     console.log(id)
     try {
        const result = await userModel.findById({_id: id})
        res.send({
            code: 200,
            result
        })
     }
     catch(err) {
         res.send({
             code: 201,
             message: err
         })
     }
 })

 /**
 * @api {get} /memeber/list 获取会员列表
 * @apiName getUserInfo
 * @apiGroup User
 *
 * @apiParam {String} id 用户id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *      "messgae": "ok"
 *     }
 */

router.get('/list', async (req, res) => {
    try {
       const result = await userModel.find({})
       res.send({
           code: 201,
           result
       })
    }
    catch(err) {
        res.send({
            code: 201,
            message: err
        })
    }
})

module.exports = router
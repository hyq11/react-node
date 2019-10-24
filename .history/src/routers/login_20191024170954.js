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
 * @apiSuccessExample {json} Sucess-Response: { code: 200 , message: 'ok'}
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
 * @apiSuccessExample {json} Sucess-Response: { code: 200 , message: 'ok'}
 */

router.post('/login', async (req, res) => {
    const reqData = req.body
    try {
        const  result = await userModel.find(reqData)
        if(result.length) {
            res.send({
                code: 200,
                message: 'ok'
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
 * @apiSuccessExample {json} Sucess-Response: { code: 200 , message: 'ok'}
 */

 route.post('/update', async (req, res) => {
     const reqData = req.body
     const { id } = reqData

     try {
        const result = await userModel.findOneAndUpdate({id}, {
            username,
            password,
            sex,
            birth,
            email,
            realname
        })
        console.log(result)
        res.send({
            code: 201,
            message: 'ok'
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
 * @api {post} /user/info 获取用户信息
 * @apiName getUserInfo
 * @apiGroup User
 *
 * @apiParam {String} id 用户id
 *
 * @apiSuccessExample {json} Sucess-Response: { code: 200 , message: 'ok'}
 */

 route.post('/update', async (req, res) => {
     const {id} = req.body

     try {
        const result = await userModel.findById({id})
        console.log(result)
        res.send({
            code: 201,
            message: 'ok'
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
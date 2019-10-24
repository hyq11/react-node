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

router.post('/reg', (req, res) => {
    res.send({
        code: 200,
        data: req.body
    })
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
        }
    }
})

module.exports = router
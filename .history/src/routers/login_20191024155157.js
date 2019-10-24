var express = require('express')
var router = express.Router()

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

module.exports = router
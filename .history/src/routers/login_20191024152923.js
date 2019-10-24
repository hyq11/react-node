var express = require('express')
var router = express.Router()

router.post('/login', (req, res)=> {
    const { username, password} = req.body
    if(username === 'admin' && password === '123456') {
        res.send({
            code: 200,
            message: '登录成功',
            data: {
                id: 9527,
                username: 'admin',
                password: '123456',
                token: 'XCATU7A89SDBIVAAFFWF_CAASD'
            }
        })
    } else {
        res.status(404).send({
            code: -1,
            error: '',
            message: '户名或密码不正确'
        })
    }
})

/**
 * @api {post} /user/reg 注册用户信息
 * @apiName regUserInfo
 * @apiGroup User
 *
 * @apiParam {String} username 用户名称
 * @apiParam {String} password 密码
 * @apiParam {Number} sex 性别
 * @apiParam {Date} birth 生日
 * @apiParam {String} email 
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/reg', (req, res) => {
    res.send({
        code: 200,
        data: req.body
    })
})

module.exports = router
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

router.post('')

module.exports = router
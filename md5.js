const jwt = require('jsonwebtoken')

const secret = 'asdhfiaiewbv890-=-=`12ASddfbn'

// 生成一个token
function creatToken(payload) {
    payload.ctime = Date.now()
    return jwt.sign(payload, secret)
}
// 验证key
function checkToken(token) {
    return new Promise((resolve, reject)=> {
        jwt.verify(token, secret, (err, data)=>{
            if(err) { reject('token 验证失败')}
            resolve(data)
        })
    })
}
module.exports = {
    creatToken, 
    checkToken  
}
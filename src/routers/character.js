var express = require('express')
var router = express.Router()

router.get('/show', (req, res) => {
    res.send({
        code: 200,
        data: {
            id: 12
        }
    })
})

module.exports = router
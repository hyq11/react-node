const express = require('express')
const route = express.Router()
const armModel = require('../db/armsModel')
/**
 * @api {get} /arm/list 武器列表
 * @apiName list
 * @apiGroup arm
 * 
 * @apiParam {Number} page 页码
 * @apiParam {Number} pageSize 每页条数
 * @apiParam {String} armname 武器名
 */
route.get('/list', async (req, res)=>{
    const { armsname , page=1, pageSize=10 } = req.query
    const searchData = armsname ? { armsname } : {}
    try {
        const result = await armModel.find(searchData).limit(Number(pageSize)).skip((Number(page)-1)*Number(pageSize))
        res.send({
            code: 200,
            result
        })
    }
    catch(err) {
        res.send({
            code: -1,
            message: err.message
        })
    }
})
/**
 * @api {post} /arm/add 添加武器
 * @apiName add
 * @apiGroup arm
 * 
 * @apiParam {String} armsname 武器名称
 * @apiParam {String} useScenario 使用场景
 * @apiParam {String} weaponsType 武器类型
 * @apiParam {String} img 图片
 * @apiParam {String} desc 描述
 * @apiParam {String} hitDamage 杀伤力
 * 
 */
route.post('/add', async (req, res) => {
    const addData = req.body
    try {
        const result = await armModel.insertMany(addData)
        console.log(result)
        res.send({
            code: 200,
            message: 'ok'
        })
    }
    catch(err){
        res.send({
            code: 500,
            message: err.message
        })
    }
})
/**
 * @api {post} /arm/edit 编辑武器
 * @apiName edit
 * @apiGroup arm
 * 
 * @apiParam {String} armsname 武器名称
 * @apiParam {String} useScenario 使用场景
 * @apiParam {String} weaponsType 武器类型
 * @apiParam {String} img 图片
 * @apiParam {String} desc 描述
 * @apiParam {String} hitDamage 杀伤力
 * 
 */

route.post('/update', async (req, res, next) => {
    const {id, armsname, useScenario, weaponsType, img, desc, hitDamage} = req.body
    try {
        const result = await armModel.findByIdAndUpdate({_id:id}, {
            armsname, useScenario, weaponsType, img, desc, hitDamage
        })
        res.send({
            code: 200,
            message: 'ok'
        })
    }
    catch(err){
        next(err)
    }
})
module.exports = route
const express = require('express')
const route = express.Router()
const roleModel = require('../db/roleModel')
/**
 * @api {get} /role/list 角色列表
 * @apiGroup role
 * @apiName list
 * 
 * @apiParam {page} 当前页码
 * @apiParam {pageSize} 每页条数 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": 'ok'
 *     }
 */
route.get('/list', async (req, res)=> {
    const query = req.query
    const page = Number(query.page)
    const pageSize = Number(query.page)
    try{
        const result = await roleModel.find({}).skip((page - 1) * pageSize).limit(pageSize)
        res.send({
            code: 200,
            result
        })
    }catch(err) {
        res.send({
            code: 201,
            message: err.message
        })
    }
    
})

/**
 * @api {post} /role/add 添加角色
 * @apiGroup role
 * @apiName add
 * 
 * @apiParam {Strig} name 角色名称
 * 
 * @apiSuccessExample Success-Response: 
 *      {
 *          "code": 200,
 *          "message": 'ok'
 *      }
 */
route.post('/add', async (req, res) => {
    const { name } = req.body
    try {
        await roleModel.insertMany({ name })
        res.send({
            code: 200,
            message: 'ok'
        })
    } catch(err) {
        res.send({
            code: 201,
            message: err.message
        })
    }
})
/**
 * @api {post} /role/setProperty 设置权限
 * @apiGroup role
 * @apiName setProperty
 * 
 * @apiParam {Strig} _id 用户的ID
 * @apiParam {Array} menus 菜单数据
 * @apiParam {String} auth_name 授权人
 * 
 * @apiSuccessExample Success-Response: 
 *      {
 *          "code": 200,
 *          "message": 'ok'
 *      }
 */
// 根据这个id, 进行添加
route.post('/setProperty', async (req, res) => {
    const { id, menus, auth_name } = req.body
    let sendData = {}
    if(auth_name) {
        sendData = {
            menus, auth_name
        }
    } else {
        sendData = {
            menus
        }
    }
    try {
        await roleModel.findByIdAndUpdate({_id: id}, sendData)
        res.send({
            code: 200,
            message: 'ok'
        })
    } catch(err) {
        res.send({
            code: 201,
            message: err.message
        })
    }
})
/**
 * @api {post} /role/remove 删除
 * @apiGroup role
 * @apiName remove
 * 
 * @apiParam {Strig} _id 用户的ID
 * @apiParam {Array} menus 菜单数据
 * @apiParam {String} auth_name 授权人
 * 
 * @apiSuccessExample Success-Response: 
 *      {
 *          "code": 200,
 *          "message": 'ok'
 *      }
 */
// 根据这个id, 进行添加
route.post('/del', async (req, res) => {
    const { id } = req.body
    try {
        await roleModel.findByIdAndRemove({_id: id})
        res.send({
            code: 200,
            message: 'ok'
        })
    } catch(err) {
        res.send({
            code: 201,
            message: err.message
        })
    }
})
/**
 * @api {post} /role/del 删除
 * @apiGroup role
 * @apiName remove
 * 
 * @apiParam {Strig} _id 用户的ID
 * @apiParam {Array} menus 菜单数据
 * @apiParam {String} auth_name 授权人
 * 
 * @apiSuccessExample Success-Response: 
 *      {
 *          "code": 200,
 *          "message": 'ok'
 *      }
 */
// 根据这个id, 进行添加
route.post('/del', async (req, res) => {
    const { id } = req.body
    try {
        await roleModel.findByIdAndRemove({_id: id})
        res.send({
            code: 200,
            message: 'ok'
        })
    } catch(err) {
        res.send({
            code: 201,
            message: err.message
        })
    }
})
/**
 * @api {post} /role/getProperty 删除
 * @apiGroup role
 * @apiName getProperty
 * 
 * @apiParam {Strig} _id 用户的ID
 * 
 * @apiSuccessExample Success-Response: 
 *      {
 *          "code": 200,
 *          "message": 'ok'
 *      }
 */
// 根据这个id, 进行添加
route.get('/getProperty', async (req, res) => {
    const { id } = req.query
    try {
        const result = await roleModel.findById({_id: id})
        res.send({
            code: 200,
            message: 'ok',
            result
        })
    } catch(err) {
        res.send({
            code: 201,
            message: err.message
        })
    }
})
module.exports = route
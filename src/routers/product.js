const express = require('express')
const route = express.Router()
const productModel = require('../db/productModel')
/**
 * @api {get} /product/list  获取商品列表
 * @apiName list
 * @apiGroup Product
 * 
 * @apiParam { String } productname 商品名称
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "result": []
 *     }
 */
route.get('/list', async (req, res)=>{
    const productname = req.query.productname
    const typeid = req.query.typeid
    const reqData = {}
    if(productname) {
        // 支持模糊查询，根据商品名称
        reqData.productname = { $regex: productname }
    }else if(typeid) {
        // 分类查询
        reqData.typeid = typeid
    } else if(productname && typeid){
        // 分类商品名称同时支持插叙
        reqData.productname = { $regex: productname }
        reqData.typeid = typeid
    }
    try{
        const result = await productModel.find(reqData)
        res.send({
            code: 200,
            result
        })
    } catch(err) {
        res.send({
            code: -1,
            message: err.message
        })
    }
})
/**
 * @api {post} /product/add 添加商品
 * @apiName add
 * @apiGroup product
 * 
 * @apiParam {String} productname 商品名称
 * @apiParam {Number} price 价格
 * @apiParam {String} typename 分类名称
 * @apiParam {String} typeid 分类的ID
 * @apiParam {String} img 商品图片
 * @apiParam {String} weight 净重
 * @apiParam {String} size 规格
 * @apiParam {String} brand 品牌
 * @apiParam {String} origin 产地
 * @apiParam {String} description 描述
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": 'ok'
 *     }
 */
route.post('/addOrUpdate', async(req, res) => {
    const reqData = req.body
    const _id = reqData.id
    try{
        if(_id) {
            // 存在id是编辑
           await productModel.findByIdAndUpdate({_id},reqData)
           res.send({
            code: 200,
            message: 'ok'
        })
        } else {
            // 不存在id是添加
          await productModel.create(reqData)
          res.send({
              code: 200,
              message: 'ok'
          })
        }
    } catch (err) {
        res.send({
            code: -1,
            message: err.message
        })
    }
})
/**
 * @api {get} /product/detail  获取商品详情
 * @apiName detail
 * @apiGroup Product
 * 
 * @apiParam { String } _id 商品_id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": 'ok'
 *     }
 */
route.get('/detail', async (req, res)=>{
    const {id} = req.query
    try{

        const result = await productModel.find({_id: id})
        console.log(result)
        res.send({
            code: 200,
            message: 'ok',
            result
        })
    } catch(err) {
        res.send({
            code: -1,
            message: err.message
        })
    }
})
/**
 * @api {get} /product/setPrice  设置价格
 * @apiName list
 * @apiGroup Product
 * 
 * @apiParam { String } _id 商品_id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "message": 'ok'
 *     }
 */
route.get('/setPrice', async (req, res)=>{
    const {id, price} = req.query
    if(id) {
        res.send({
            code: 201,
            message: 'id必传'
        })
    }
    try{
        const result = await productModel.findByIdAndUpdate({id}, {price})
        res.send({
            code: 200,
            message: 'ok'
        })
    } catch(err) {
        res.send({
            code: -1,
            message: err.message
        })
    }
})
module.exports = route
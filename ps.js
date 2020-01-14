// 爬虫的一个简单示例
// node中的https模块 ---->这是根据抓取的地址来进行有选择性的使用
const https = require('https')
//主要用的是这个插件
var cheerio = require("cheerio") 
const fs = require('fs')
// 网站的地址
let url = 'https://juejin.im/post/5df8d7346fb9a015ff64eaf9'

// cheerio插件中的语法和jquery中的语法很像
https.get(url, (res)=>{
    let str = ''
    res.on('data', (d)=> {
        str += d
    })
    res.on('end', ()=> {
        const $ = cheerio.load(str);
        let ll = $('.article-content .output_wrapper p').text()
        fs.writeFile('a.html',ll, 'utf-8', (err)=>{
            if(err) {
                console.log(err)
            }else {
            }
        })
    })
}).on('error', (e) => {
    console.log(e)
})
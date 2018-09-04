const express = require('express')
const url = require('url')
const superagent = require('superagent')
const cheerio = require('cheerio')
const request = require('request')

let app = express()


app.get('/', function (req, res) {
  let targetUrl = 'http://www.12306.cn/mormhweb/logFiles/error.html'
  let urlString = url.parse(targetUrl)
  let iconUrl = `${urlString.protocol}//${urlString.host}/favicon.ico`
  isHasRootIcon(iconUrl).then(response => {
    // 如果存在
    if (response) {
      res.end(iconUrl)
    } else {
      // 解析html
      resolveHtml(targetUrl).then(response=>{
        res.end(response)
      })
    }
  })
})

// 判断网站根目录下是否有 favicon.ico 文件
function isHasRootIcon(url) {
  let pattern = ['ico', 'png', 'svg', 'jpg']

  return new Promise((resolve) => {
    let returnValue = false
    request.get(url, function (err, res) {
      if (res.statusCode === 200) {
        let redirectPath = res.request.uri.path
        pattern.forEach(item => {
          if (redirectPath.split('.')[1] === item) {
            returnValue = true
            resolve(returnValue)
          }
        })
      }
      resolve(returnValue)
    })
  })
}

// 解析 html
function resolveHtml(targetUrl) {
  return new Promise(resolve=>{
    let defaultUrl = './src/assets/icon_default.png'
    superagent.get(targetUrl).end(function (err, content) {
      let $ = cheerio.load(content.text)
      let iconUrl = $("link[rel*='icon']").eq(0).attr('href') // 获得 icon 的链接
      // 如果 iconUrl 存在 还需要判断其是否是相对位置
      if(iconUrl) {
        // 如果不存在 'http'
        if(iconUrl.indexOf('http') === -1 ) {
          // 判断是否为相对路径或根路径
          if(iconUrl.charAt(0) === '/') {
            let urlString = url.parse(targetUrl)
            iconUrl = `${urlString.protocol}//${urlString.host}${iconUrl}`
          }else {
            iconUrl = targetUrl + "/" + iconUrl
          }
        }
        resolve(iconUrl)
      }else {
        resolve(defaultUrl)
      }
    })
  })
}

// 判断链接是否为相对链接
app.listen(9000, function (err) {
  if (err) {
    console.log(err)
    return
  }
})

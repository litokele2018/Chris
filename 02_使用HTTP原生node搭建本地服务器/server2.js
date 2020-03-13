const http = require('http')
const fs = require('fs')

let post = 8080

http.createServer((request, response) => {
  let url = request.url
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
  response.writeHead(200, {
    "Content-Type": "text/html"
  })

  if (url === '/' || url === "/index.html") {
    //读取文件
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      if (err) {
        throw err
      }
      response.write(data)
       // 结束
      response.end()
    })
  }
  console.log(request)
 
}).listen(post) //监听8080端口
console.log("Server running at http://127.0.0.1:"+post+"/")
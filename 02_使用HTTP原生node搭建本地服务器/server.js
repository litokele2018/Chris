const http = require('http')


let post = 8080

http.createServer((request, response) => {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
  response.writeHead(200, {
    "Content-Type": "text/plain"
  })
  // 发送响应数据
  response.write("Hello world")

  // 结束
  response.end()
}).listen(post) //监听8080端口
console.log("Server running at http://127.0.0.1:"+post+"/")
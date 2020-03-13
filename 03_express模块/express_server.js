const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()
const port = 8080

//使用中间件 这个中间件可以 解决单页面 应用刷新失效的问题
app.use(history({ //这个需要 放在静态资源前面？？？
  index: '/index.html', // 默认重定向地址
  rewrites: [
    {
      from: /\/hello/, //当输入hello时 会自动重定向到hello.html
      to: '/hello.html' 
    }
  ] 
}))

// 加载静态资源
app.use(express.static(__dirname + '/dist'))

console.log(__dirname + '/dist')
//注册get方法
app.get('/getUserName', (req, res) => {
  res.send({name: 'litokele'})
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Server listening on: http://localhost:%s', port)
})
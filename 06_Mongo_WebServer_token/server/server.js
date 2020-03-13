const express = require('express')
const path = require('path')
const jsonWebToken = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const key = 'litokelehelloworld'

const port = 8080
let HtmlPath = path.resolve(__dirname, '..') + '/public'
const app = express()
app.use(express.static(HtmlPath))
app.use(express.json())
app.use(cookieParser()) //解析cookie 直接得到数据

//接受用户的注册
app.post('/register', (req, res) => {
  // console.log(req.body) 
  let token = jsonWebToken.sign(req.body, key, {expiresIn: 60}) //设置到期时间
  // console.log(token)
  // console.log(jsonWebToken.verify(token, key))
  res.send({
    status: 200,
    token
  })
})
//访问success
app.get('/success', (req, res) => {
  try {
    jsonWebToken.verify(req.cookies.token, key)
  } catch (error) {
    res.send('defeat')
    return //响应完成后立马return 
  }
  res.send('success')
  return
})


app.listen(port, (err) => {
  if (err) throw err
  console.log(`server start on http://localhost:${port}`)
})

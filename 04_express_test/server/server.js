const express = require('express')
const path = require('path')

const app = express()
const port = 8081
let HtmlPath = path.resolve(__dirname, '..') + '/public'
app.use(express.static(HtmlPath))

app.get('/home', (req, res) => {
  res.send('111')
})
app.get('/something', (req, res) => {
  const obj = {
    name: 'litokele',
    age: 18
  }
  res.send(obj)
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`正在监听: http://localhost:${port}`)
})
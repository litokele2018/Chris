const http = require('http')
const fs = require('fs')
const cheerio = require('cheerio')

let img = []

http.get('http://www.nicotv.me/', (res) => {
  res.on('data', (data) => {
    fs.writeFileSync('./Nicotv.html', data)
  })

  res.on('end', () => {
    fs.readFile('./Nicotv.html', (err, data) => {
      const $ = cheerio.load(data)
      img = $('a')
      // console.log(img)
      for (let i = 0; i < img.length; i ++) {
        console.log(img[i].attribs.href)
      }
    })
  })

})
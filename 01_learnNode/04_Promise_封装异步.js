const fs = require('fs')


function readFileAsync() {
  return new Promise((reslove, reject) => {
    fs.readFile('./Nicotv.html', 'utf-8', (err, data) => {
      if (err) {
        reject(err)
        return
      }
      reslove(data)
    })
  }) 
}

async function read() {
  try {
    let data = await readFileAsync()
    console.log('成功') 
  } catch (err) {
    console.log('错误')
  }
}
read()

// console.log(typeof readFileAsync()) //Object

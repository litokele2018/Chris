const fs = require('fs')

const stream = fs.createReadStream('./writeTest.json') //read

const writeStream = fs.createWriteStream('./writeTest_back.json') // write

stream.on('ready', () => {
  console.log('ready')
})

// stream.on('data', (data) => {
//   console.log(data.toString('utf-8'))
//   writeStream.write(data)
// })

// read流的pipe方法
stream.pipe(writeStream)

stream.on('end', () => {
  console.log('end')
})
stream.on('close', () => {
  console.log('close')
})
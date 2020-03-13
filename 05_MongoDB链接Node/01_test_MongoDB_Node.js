// 使用node连接Mongodb

const MongoDB = require('mongodb')
const MongoClient = MongoDB.MongoClient

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err)
    return
  }
  let db = client.db('litokele') //绑定数据库
  let collection = db.collection('Person') //绑定collection
  
  // 1.获取collection中的数据
  collection.find({}).toArray((err, docs) => { //这里toArray是官方遍历的推荐 forEach也行
    if (err) {
      console.log(err)
      return
    }
    console.log(docs)
  })
 /*  collection.find({}).forEach(item => {
    console.log(item)
  })
 */
  client.close()
})

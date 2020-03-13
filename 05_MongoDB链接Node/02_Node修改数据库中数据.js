const Mongo = require('mongodb')
const assert = require('assert').strict

const MongoClient = Mongo.MongoClient

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, client) => {
  assert.strictEqual(err, null)

  let db = client.db('litokele')
  let collection = db.collection('Person')
  collection.updateOne(
    {age: 18}, 
    {$set: {gender: '女'}}, 
    (err, result) => {
      assert.strictEqual(err, null)
      // console.log(result)
    }
  )
  client.close()
})
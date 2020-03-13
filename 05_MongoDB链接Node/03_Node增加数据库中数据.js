const Mongo = require('mongodb')
const assert = require('assert').strict

const MongoClient = Mongo.MongoClient

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  let db = client.db('litokele')
  let collection = db.collection('Person')
  collection.insertOne(
    {
      name: 'litokele',
      age: 17,
      gender: '男'
    }, (err, result) => {
      if (err) throw err
      console.log(result)
  })
  client.close()
})
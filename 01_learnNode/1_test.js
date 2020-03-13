const url = require('url')
const fs = require('fs')

let urlObj = url.parse('https://www.baidu.com')

// 1.读写
fs.writeFile('./writeTest.json', JSON.stringify(urlObj), (err) => {
  if (err) throw err
  console.log('文件已经被保存！！')
})

// 2.事件
const EventEmitter = require('events')
const e = new EventEmitter()
  // 监听 
e.on('on', function (data) {
  console.log(data)
})
  // 触发事件
e.emit('on', 'litokele')
const myEmitter = new EventEmitter();

// 第一个监听器。
myEmitter.on('event', function firstListener() {
  console.log('第一个监听器');
});
// 第二个监听器。
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`第二个监听器中的事件有参数 ${arg1}、${arg2}`);
});
// 第三个监听器
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`第三个监听器中的事件有参数 ${parameters}`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);
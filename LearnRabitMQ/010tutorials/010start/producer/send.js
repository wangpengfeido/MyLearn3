/**
 * 发送与接收消息
 */

const process = require('process')
const amqp = require('amqplib/callback_api')

// 连接到rabbitMQ服务
amqp.connect('amqp://localhost:5672', function (err, conn) {
    // 创建channel
    conn.createChannel(function (err, ch) {
        const q = 'hello'
        // 声明队列。如果队列不存在的话。
        // TODO:durable
        ch.assertQueue(q, {durable: false})
        // 发送消息到队列。发送的消息是位数组，所以你能发送任何东西。
        ch.sendToQueue(q, Buffer.from('Hello　World'))
        console.log("[x] sent 'Hello World'")
    })
    setTimeout(() => {
        // 关闭连接
        conn.close()
        process.exit(0)
    }, 500)
})


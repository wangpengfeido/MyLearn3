const process = require('process');
const amqp = require('amqplib/callback_api')

//连接到rabbitMQ服务
amqp.connect('amqp://localhost', function (err, conn) {
    //创建channel
    conn.createChannel(function (err, ch) {
        const q = 'hello'
        //声明队列
        ch.assertQueue(q, {durable: false})
        //发送消息到队列
        ch.sendToQueue(q, Buffer.from('Hello　World'))
        console.log("[x] sent 'Hello World'")
    })
    setTimeout(() => {
        //关闭连接
        conn.close()
        process.exit(0)
    }, 500)
})


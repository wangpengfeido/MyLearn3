const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        //与生产者一样，连接rabbitMQ服务，创建channel，声明队列
        const q = 'hello'
        //声明队列的原因是消费者有可能先于生产者运行，保证队列存在
        ch.assertQueue(q, {durable: false})
        console.log(`[*] Wating for messages in ${q}.To exit press CTRL+C`)
        ch.consume(q, function (msg) {
            //接收消息并异步处理。此处接收的消息队列与使用sendToQueue发送的对应。
            console.log(`[x] Received ${msg.content.toString()}`)
        }, {noAck: true})
    })
})
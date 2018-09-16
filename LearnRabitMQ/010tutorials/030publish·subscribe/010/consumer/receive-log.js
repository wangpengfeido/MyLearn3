const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const ex = 'logs'

        ch.assertExchange(ex, 'fanout', {durable: false})

        // 声明了一个由系统决定名称的队列
        // exclusive的意思是：只有一个连接到这个队列，当连接断开时，删除队列
        ch.assertQueue('', {exclusive: true}, (err, q) => {
            console.log(`[*] Wating for messages in ${q}.To exit press CTRL+C`)

            // 创建一个binding
            // binding代表了exchange与queue之间的关系
            ch.bindQueue(q.queue, ex, '')

            ch.consume(q.queue, (msg) => {
                console.log(`[x] Received ${msg.content.toString()}`)
            }, {noAck: true})
        });

    })
})



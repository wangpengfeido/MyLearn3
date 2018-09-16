const amqp = require('amqplib/callback_api')

// 从命令行读取接收的log和log类型
const args = process.argv.slice(2)
if (args.length === 0) {
    console.log('usage: receive_logs_direct.js [info] [warning] [error]')
    process.exit(1)
}

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const ex = 'direct_logs'

        // 指定exchange的类型为direct
        // direct的分配算法是：当binding的binging key与message的routing key匹配时允许通过，未匹配的message丢弃
        // 多个binding可以指定同一个binding key，这种情况下就像fanout，每个匹配的queue都能收到消息
        ch.assertExchange(ex, 'direct', {durable: false})

        ch.assertQueue('', {exclusive: true}, (err, q) => {
            console.log(`[*] Wating for messages in ${q}.To exit press CTRL+C`)

            args.forEach(severity => {
                // 第三个参数binding key，它的意义由exchange类型决定，当exchange的类型是fanout时会忽略
                // 可以多次建立同一个queue和exchange的binding
                ch.bindQueue(q.queue, ex, severity)
            })


            ch.consume(q.queue, (msg) => {
                console.log(`[x] Received ${msg.fields.routingKey}: ${msg.content.toString()}`)
            }, {noAck: true})
        });

    })
})



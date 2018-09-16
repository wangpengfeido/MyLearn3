const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'task_queue'
        ch.assertQueue(q, {durable: false})
        console.log(`[*] Wating for messages in ${q}.To exit press CTRL+C`)
        ch.consume(q, (msg) => {
            console.log(`[x] Received ${msg.content.toString()}`)
            // 一个“.”花费1s时间
            const secs = msg.content.toString().split('.').length - 1
            setTimeout(() => {
                console.log('[x] Done')
            }, secs * 1000)
        }, {noAck: true})
    })
})

// round-robin:
// 当运行多个worker时，可以看到消息被循环依次分配到每个worker，每个worker接收到的平均消息数量是相同的



const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'task_queue'

        // 设置ch.prefetch(n)，n代表最大处理的消息数量，即接收但未应答的消息数量
        // 注意：不能分配的消息将保存在队列中，所以要注意队列的大小
        ch.prefetch(1);

        ch.assertQueue(q, {durable: true})
        console.log(`[*] Wating for messages in ${q}.To exit press CTRL+C`)
        ch.consume(q, (msg) => {
            console.log(`[x] Received ${msg.content.toString()}`)
            const secs = msg.content.toString().split('.').length - 1
            setTimeout(() => {
                console.log('[x] Done')
                ch.ack(msg)
            }, secs * 1000)
        }, {noAck: false})
    })
})

// fair dispatch: 公平分配
// 消息不再按顺序依次分配，而是分配给未达到最大处理数量的worker



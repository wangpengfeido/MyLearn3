const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'task_queue'
        ch.assertQueue(q, {durable: false})
        console.log(`[*] Wating for messages in ${q}.To exit press CTRL+C`)
        ch.consume(q, (msg) => {
            console.log(`[x] Received ${msg.content.toString()}`)
            const secs = msg.content.toString().split('.').length - 1
            setTimeout(() => {
                console.log('[x] Done')
                // 返回应答。注意：返回应答必须使用与接收消息同一个channel
                ch.ack(msg)
            }, secs * 1000)
            // 将noAck设置为false（默认值）
        }, {noAck: false})
    })
})

// message acknowledgment:
// 设置消息应答后，
// 当接收到消息后没有应答，程序被杀死（连接断开），队列将重新分发这条消息
// 这样就不会有消息丢失




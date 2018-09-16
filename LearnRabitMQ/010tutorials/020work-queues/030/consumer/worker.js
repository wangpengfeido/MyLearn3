const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'task_queue'
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





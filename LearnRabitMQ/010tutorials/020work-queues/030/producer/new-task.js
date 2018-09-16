const process = require('process')
const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'task_queue'
        const msg = process.argv.slice(2).join('') || 'hello world...'

        // 将queue的durable设置为true，可以使rabbitMQ程序退出后队列不丢失
        // 注意：如果队列已创建，要更改队列的设置，必须手动删除队列或创建另一个新的队列
        ch.assertQueue(q, {durable: true})

        // 将消息的pressistent设置为true，可以使rabbitMQ程序退出后消息不丢失
        // 注意：message persistent并不是健壮的，消息仍有可能丢失。如果想要健壮的persistent，请看publisher confirms
        ch.sendToQueue(q, Buffer.from(msg), {persistent: true})
        console.log(`[x] Sent ${msg}`)
    })
    setTimeout(() => {
        conn.close()
        process.exit(0)
    }, 100)
})

// message durability: 消息持久化
// 使rabbitMQ服务结束后，队列和队列中的消息不会丢失



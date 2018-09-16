const process = require('process')
const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'task_queue'
        const msg = process.argv.slice(2).join('') || 'hello world...'

        ch.assertQueue(q, {durable: true})
        ch.sendToQueue(q, Buffer.from(msg), {persistent: true})
        console.log(`[x] Sent ${msg}`)
    })
    setTimeout(() => {
        conn.close()
        process.exit(0)
    }, 100)
})




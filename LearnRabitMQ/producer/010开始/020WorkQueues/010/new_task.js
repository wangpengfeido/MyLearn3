/**
 * 任务队列，任务的处理端可能需要花一定时间处理任务
 */
/**
 * Round-robin
 * 当有多个任务处理端运行时，任务可以并行处理
 */
const process = require('process');
const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        const q = 'task_queue'
        const msg = process.argv.slice(2).join(' ') || 'Hello World!';
        ch.assertQueue(q, {durable: true})
        ch.sendToQueue(q, Buffer.from(msg), {persistent: true})
        console.log(`[x] sent ${msg}`)
    })
    setTimeout(() => {
        conn.close()
        process.exit(0)
    }, 500)
})


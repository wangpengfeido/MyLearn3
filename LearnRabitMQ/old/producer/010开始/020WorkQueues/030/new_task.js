/**
 * 消息持久
 * 进行设置后，即使rabbitMQ服务停止，队列及消息队列中的消息也不会丢失
 */
/**
 * 注意：消息持久不是健壮的，仍然有可能丢失消息
 * 如果要健壮的保证，使用publisher confirms
 */

const process = require('process');
const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        const q = 'task_queue'
        const msg = process.argv.slice(2).join(' ') || 'Hello World!';
        //{durable: true}  保证队列不会丢失
        //注意，如果已存在一个不同参数的同名队列，则创建时会抛出异常
        ch.assertQueue(q, {durable: true})
        //{persistent: true}  保证队列中的消息不会丢失
        ch.sendToQueue(q, Buffer.from(msg), {persistent: true})
        console.log(`[x] sent ${msg}`)
    })
    setTimeout(() => {
        conn.close()
        process.exit(0)
    }, 500)
})


const process = require('process')
const amqp = require('amqplib/callback_api')

/**
 * publish/subscribe:
 * 在exchange将消息发送到queue时，将消息广播到多个queue
 */

/**
 * exchange:
 * 在rabbitMQ的完整思想中，producer不直接把message发给queue，而是发给exchange
 * exchange从producer接收消息并推到queue中，它可以把message推到一个或多个队列或丢弃
 * exchange的类型有:direct,topic,headers,fanout
 * // 如果不指定exchange，那么就使用默认的exchange
 */

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const ex = 'logs'
        const msg = process.argv.slice(2).join('') || 'hello world...'

        // 声明一个exchange。将其类型指定为fanout（推到多个queue）
        // 它的任务是将消息推送到所有指定的队列中
        ch.assertExchange(ex, 'fanout', {durable: false})

        // 通过推送message到exchange再到queue
        // 第一个参数是exchange名
        // 第二个参数的意义由exchange类型决定，在exchange是fanout类型时忽略
        ch.publish(ex, '', Buffer.from(msg))

        console.log(`[x] Sent ${msg}`)
    })
    setTimeout(() => {
        conn.close()
        process.exit(0)
    }, 100)
})

/**
 * 现在这个广播消息的程序，如果没有消费者接收消息，哪个这个消息将被直接抛弃掉
 */




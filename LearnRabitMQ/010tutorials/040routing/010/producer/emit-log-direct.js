const process = require('process')
const amqp = require('amqplib/callback_api')

/**
 * routing:
 * 在exchange分发message给queue时，queue选择一个子集接受，而不是接收所有message
 */

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const ex = 'direct_logs'
        // 从命令读取要发送的log和log类型
        const args = process.argv.slice(2)
        const msg = args.slice(1).join('') || 'hello world...'
        const severity = (args.length > 0) ? args[0] : 'info'

        ch.assertExchange(ex, 'direct', {durable: false})

        // 此时（exchange类型是direct），第二个参数是routing key
        ch.publish(ex, severity, Buffer.from(msg))

        console.log(`[x] Sent ${severity} ${msg}`)
    })
    setTimeout(() => {
        conn.close()
        process.exit(0)
    }, 100)
})





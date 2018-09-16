const process = require('process')
const amqp = require('amqplib/callback_api')

/**
 * RPC(Remote Procedure Call)
 * 用rabbitMQ实现RPC的方式是，用一个queue发送请求，用另一个'callback' queue接收响应
 */

const args = process.argv.slice(2)
if (args.length === 0) {
    console.log('Usage: rpc_client.js num')
    process.exit(1)
}

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        // 创建一个队列用来接收响应
        ch.assertQueue('', {exclusive: true}, (err, q) => {
            // 创建了一个correlationId
            // 因为只使用了一个callback queue，correlationId可以帮助我们知道响应属于哪个请求
            // 并且可以找出不属于我们的响应，这种情况可能在服务端异常时发生
            const corr = generateUuid()

            const num = parseInt(args[0])

            console.log(`[x] Requesting fib(${num})`)

            ch.consume(q.queue, msg => {
                if (msg.properties.correlationId === corr) {
                    console.log(`[.] Got ${msg.content.toString()}`)
                    setTimeout(() => {
                        conn.close()
                        process.exit(0)
                    }, 3000)
                }
            })

            // 发送计算请求
            ch.sendToQueue('rpc_queue',
                Buffer.from(num.toString()),
                // correlationId（用来关联RPC请求与响应）和replyTo（通常用来命名callback queue）是message properties
                // 规定的其他properties还有persistent（消息持久化）和contentType（mime-type）等
                {correlationId: corr, replyTo: q.queue},)
        })
    })
})

function generateUuid() {
    return Math.random().toString() +
        Math.random().toString() +
        Math.random().toString();
}


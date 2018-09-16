const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const q = 'rpc_queue'

        ch.assertQueue(q, {durable: false})
        ch.prefetch(1)
        console.log(`[x] Awating RPC request`)
        ch.consume(q, (msg) => {
            const n = parseInt(msg.content.toString())
            console.log(`[.] fib(${n})`)

            const r = fibonacci(n)

            ch.sendToQueue(msg.properties.replyTo,
                Buffer.from(r.toString()),
                {correlationId: msg.properties.correlationId})

            ch.ack(msg)
        })
    })
})

function fibonacci(n) {
    if (n === 0 || n === 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}


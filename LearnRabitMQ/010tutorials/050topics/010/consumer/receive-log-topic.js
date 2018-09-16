const amqp = require('amqplib/callback_api')

const args = process.argv.slice(2)
if (args.length === 0) {
    console.log('usage: receive_logs_topic.js <facility>.<severity>')
    process.exit(1)
}

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const ex = 'topic_logs'

        ch.assertExchange(ex, 'topic', {durable: false})

        ch.assertQueue('', {exclusive: true}, (err, q) => {
            console.log(`[*] Wating for messages in ${q}.To exit press CTRL+C`)

            args.forEach(key => {
                ch.bindQueue(q.queue, ex, key)
            })


            ch.consume(q.queue, (msg) => {
                console.log(`[x] Received ${msg.fields.routingKey}: ${msg.content.toString()}`)
            }, {noAck: true})
        });

    })
})



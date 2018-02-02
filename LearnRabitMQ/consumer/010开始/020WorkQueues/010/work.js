const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        const q = 'task_queue'
        ch.assertQueue(q, {durable: true})
        ch.consume(q, function (msg) {
            const secs = msg.content.toString().split('.').length - 1
            console.log(`[x] Received ${msg.content.toString()}`)
            setTimeout(function () {
                //假装处理任务消耗了一些时间，每带有一个.代表一秒
                console.log("[x] Done")
            }, secs * 1000)
        }, {noAck: true})
    })
})
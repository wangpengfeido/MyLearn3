const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        const q = 'task_queue'
        ch.assertQueue(q, {durable: true})
        ch.consume(q, function (msg) {
            const secs = msg.content.toString().split('.').length - 1
            console.log(`[x] Received ${msg.content.toString()}`)
            setTimeout(function () {
                console.log("[x] Done")
                //处理完成后发送应答确认
                ch.ack(msg);
            }, secs * 1000)
            //noAck:false 关闭无应答
        }, {noAck: false})
    })
})
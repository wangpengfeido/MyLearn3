/**
 * 消息应答
 * 启动消息应答时，消息处理端处理任务完成后，返回一条应答，然后队列中将删除这条消息
 * 如果消费者进程被杀死，没有被处理完的消息将会被发给其他处理者
 * 保证不会有消息丢失
 */
/**
 * 注意：不要忘记ack
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


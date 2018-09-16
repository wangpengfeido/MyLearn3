const process = require('process')
const amqp = require('amqplib/callback_api')

/**
 * topics:
 * 在exchange将消息分发给queue时，可以根据多个条件决定分配路由
 */

/**
 * 在使用topic时
 * routing key和binding key都是用"."分开的单词
 * binding key中："*"可匹配一个单词；"#"可匹配任意个单词
 * 单词个数不匹配将视为不匹配（注意"#"可匹配任意个）
 * 与direct相似，只允许匹配的message通过
 * 与多个binding匹配的message只分发一次
 * 未匹配的message被丢弃
 */

/**
 * topic是非常强大的
 * 当binding key 是 #" 时，它相当于fanout
 * 当binding key 不使用 "*" 和 "#" 时，它相当于direct
 */

amqp.connect('amqp://localhost:5672', (err, conn) => {
    conn.createChannel((err, ch) => {
        const ex = 'topic_logs'
        const args = process.argv.slice(2)
        const key = (args.length > 0) ? args[0] : 'anonymous.info'
        const msg = args.slice(1).join('') || 'hello world...'

        ch.assertExchange(ex, 'topic', {durable: false})

        ch.publish(ex, key, Buffer.from(msg))

        console.log(`[x] Sent ${key} ${msg}`)
    })
    setTimeout(() => {
        conn.close()
        process.exit(0)
    }, 100)
})





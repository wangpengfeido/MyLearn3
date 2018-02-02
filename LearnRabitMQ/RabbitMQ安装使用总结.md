##RabbitMQ安装
1. 安装erlang。一种编程语言。
2. 安装RabbitMQ。默认端口4369。
##命令
windows中命令脚本文件的位置：RabbitMQ Server\rabbitmq_server-3.7.2\sbin
###### 查看状态
rabbitmqctl status
###### 查看正在运行的队列
rabbitmqctl list_queues
* name message_ready 打印出队列中消息数量
* name message_unacknowledged 打印出未确认的消息数量
##Javascript Client
1.npm install amqplib。RabbitMQ/AMQP客户端for nodejs，支持全部协议。



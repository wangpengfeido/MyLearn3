## RabbitMQ安装
1. 安装erlang。一种编程语言。
2. 安装RabbitMQ。默认端口5672。
##命令
windows中命令脚本文件的位置：RabbitMQ Server\rabbitmq_server-3.7.2\sbin
##### 查看状态
rabbitmqctl status
##### 查看正在运行的队列
rabbitmqctl [-n \<node\>] [-l] [-q] list_queues [-p \<vhost\>] [--online] [--offline] [--local] [\<queueinfoitem\> ...] [-t \<timeout\>]

**需要rabbitMQ服务拥有管理员权限**

queueInfoItem:
* name 打印队列名称 
* messages_ready 打印出队列中消息数量
* messages_unacknowledged 打印出未应答的消息数量
##### 查看exchanges
rabbitmqctl list_exchanges
##### 查看bindings
rabbitmqctl list_bindings
##### 查看已安装的插件
rabbitmq-plugins list
##### 启用插件
rabbitmq-plugins enable 插件名
## 常用插件
##### rabbitmq_management 
网页控制台

默认端口：15621；默认帐号密码guest/guest
## 自己编译
##Javascript Client
1.npm install amqplib。RabbitMQ/AMQP客户端for nodejs，支持全部协议。



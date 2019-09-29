## redis-server [redis.conf]
启动redis服务

## redis-cli [-h host] [-p port] [-a password]
打开redis cli，连接redis服务

#### ping
检测redis服务是否连接

#### info
查看redis的内存使用情况

#### shutdown
停止redis服务

## redis数据类型

#### String
字符串

#### Hash
Redis hash 是一个键值对集合。

#### List
Redis 列表是简单的字符串列表，按照插入顺序排序。

#### Set
Redis的Set是string类型的无序集合。不允许重复成员。

#### zset
与Set一样，区别是每个元素关联一个分数，按照这个分数排序。

## redis操作

### 键

#### DEL key
删除键。

### 字符串（String）

#### SET key value
设置指定 key 的值

#### GET key value
获取指定 key 的值。

### 哈希（Hash）

#### HMSET key field1 value1 [field2 value...]
同时将多个 field-value (域-值)对设置到哈希表 key 中。

#### HGETALL key
获取在哈希表中指定 key 的所有field和value

#### HDEL key field1 [field2...]
删除一个或多个哈希表字段

### 列表（List）

#### LPUSH key value1 [value2...]
将一个或多个值插入到列表头部

#### RPUSH key value1 [value2...]
将一个或多个值插入到列表尾部

#### LRANGE key start stop
获取列表指定范围内的元素

### 集合（Set）

#### sadd key member1 member2
向集合添加一个或多个成员

## linux上的安装
1. 下载文件并解压。````tar zxvf rexis-xxx````
2. ````make PREFIX=xxx````,````make install PREFIX=xxx```
3. 运行redis。````./bin/redis-server 配置文件````

## 配置
#### prot 端口号
端口号

#### deamonize yes/no
后台运行

#### requirepass 密码
密码

#### maxmemory 大小
最大占用内存

#### maxmemory-policy 策略
内存满时的策略

策略：
* volatile-lru 根据LRU算法删除设置过期时间的key
* allkeys-lru 根据LRU算法删除任何key
* volatile-random 随机移除设置过过期时间的key
* allkeys-random 随机移除任何key
* volatile-ttl 移除即将过期的key(minor TTL)
* noeviction 不移除任何key，只返回一个写错误











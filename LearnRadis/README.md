## redis-server [redis.conf]
启动redis服务
## redis-cli [-h host] [-p port] [-a password]
打开redis cli，连接redis服务
###### ping
检测redis服务是否连接
#### 键
###### DEL key
删除键。
#### 字符串（String）
###### SET key value
设置指定 key 的值
###### GET key value
获取指定 key 的值。
#### 哈希（Hash）
###### HMSET key field1 value1 [field2 value...]
同时将多个 field-value (域-值)对设置到哈希表 key 中。
###### HGETALL key
获取在哈希表中指定 key 的所有field和value
###### HDEL key field1 [field2...]
删除一个或多个哈希表字段
#### 列表（List）
###### LPUSH key value1 [value2...]
将一个或多个值插入到列表头部
###### RPUSH key value1 [value2...]
将一个或多个值插入到列表尾部
###### LRANGE key start stop
获取列表指定范围内的元素
#### 集合（Set）
###### sadd key member1 member2
向集合添加一个或多个成员

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
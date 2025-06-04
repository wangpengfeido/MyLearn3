from ngram import model
import random


# 这只是一个随机生成数据的代码
# starting words,必须是训练数据中有的
text = ["in", "the"]
sentence_finished = False

while not sentence_finished:
  r = random.random()
  accumulator = .0
  
  for word in model[tuple(text[-2:])].keys():
    accumulator += model[tuple(text[-2:])][word]
    if accumulator >= r:
      text.append(word)
      break

  # 所谓<停止>标记符号
  if text[-2:] == [None, None]:
    sentence_finished = True

print (' '.join([t for t in text if t]))
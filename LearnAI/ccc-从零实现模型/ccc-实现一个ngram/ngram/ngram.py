data_text= 'in the Legislature, a right inestimable to them shall seemmost likely to effect their Safety and Happiness.Prudence, indeed, will dictate that Governments long establisshed should not be changed for light and transientcauses; and accordingly all experience hath shewn, that manlkind are more disposed to suffer, while evils aresufferable, than to right themselves by their Hands.'

n_gram_sents = [i.strip().split(' ') for i in data_text.strip().split('\'n') if i]

# from nltk.corpus import reuters
from nltk import bigrams, trigrams
from collections import Counter, defaultdict

# Create a placeholder for model
model = defaultdict(lambda: defaultdict(lambda:0))
list(trigrams(n_gram_sents[0], pad_right=True, pad_left=True)) #观察一下


# Count frequency of co-occurance
# 统计共现的频率。trigrams将sentence变成了三元组。举例来说,The unanimous一起存在的时候,Declaration出现的次数
for sentence in n_gram_sents:
  for w1, w2, w3 in trigrams(sentence, pad_right=True, pad_left=True):
    model[(w1, w2)][w3] += 1

# Let's transform the counts to probabilities
# 统计分母,举例来说,The unanimous一起存在过多少次,全部加起来就是;后面跟过的每一个词出现的次数,除以The unanimous-一起存在的次数即可。
for w1_w2 in model:
  total_count = float(sum(model[w1_w2].values()))
  for w3 in model[w1_w2] :
    model[w1_w2][w3] /= total_count
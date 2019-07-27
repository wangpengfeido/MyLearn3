import pandas as pd

california_housing_dataframe = pd.read_csv("./california_housing_train.csv", sep=",")

# head方法显示前几条记录
print(california_housing_dataframe.head())



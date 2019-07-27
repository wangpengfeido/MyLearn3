import pandas as pd

california_housing_dataframe = pd.read_csv("./california_housing_train.csv", sep=",")

# describe方法能显示统计
print(california_housing_dataframe.describe())


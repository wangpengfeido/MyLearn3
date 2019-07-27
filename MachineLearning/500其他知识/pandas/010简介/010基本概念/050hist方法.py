import pandas as pd

california_housing_dataframe = pd.read_csv("./california_housing_train.csv", sep=",")

# hist方法绘制图表显示列值分布
california_housing_dataframe.hist('housing_median_age')



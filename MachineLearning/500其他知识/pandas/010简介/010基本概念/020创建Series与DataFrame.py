import pandas as pd

# 创建Series对象
city_names = pd.Series(['San Franciso', 'San Jose', 'Sanramento'])
population = pd.Series([852469, 1015785, 485199])

# 通过列名映射创建DataFrame
pd.DataFrame({'City name': city_names, 'Population': population})

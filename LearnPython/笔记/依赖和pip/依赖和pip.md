# 依赖和 pip

## pip cli

### pip install

- `pip install <包标识符>`
  - 安装制定包。
- `pip install <目录>`
  - 将目录安装。

#### -i, --requirement <file>

`pip install -r requirements.txt`

安装文件中列出的所有依赖。

<<<<<<< Updated upstream
#### -e, --editable <path/url>

`pip install -e .`

以编辑模式安装包。

- 将将本地项目符号链接到 site-packages 目录
=======
`pip freeze > requirements.txt`

创建 requirements.txt。
>>>>>>> Stashed changes
